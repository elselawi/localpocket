import 'dart:async';
import 'dart:io';

import 'package:localpocket/localpocket.dart' hide HttpResponse;
import 'package:test/test.dart';

final class ProbeStore extends StoreDef<ProbeStore> {
  ProbeStore._() : super(name: 'probe_items', version: 1);
  static final ProbeStore store = ProbeStore._();
  static final title = store.schema.text('title').req();

  @override
  List<FieldDef<ProbeStore, Object?>> get fields => [title];
}

final class ProbeDb extends TypedPocket {
  ProbeDb() : super(':memory:');

  @override
  StoreDefs get stores => [ProbeStore.store];
}

class FixtureTokens implements TokenProvider {
  @override
  Future<Token> currentToken() async => Token('vm-fixture-token');

  @override
  Future<Token> refreshToken(Token current) async => Token('vm-fixture-token');

  @override
  String? get identity => 'vm-fixture-user';
}

/// Minimal in-process PocketBase wire fixture: batch probe, list pulls, and
/// an SSE realtime handshake that stays open until closed.
class Fixture {
  Fixture(this.server, this.sseResponses, this.sseConnected);

  final HttpServer server;
  final List<HttpResponse> sseResponses;
  final Future<void> sseConnected;

  Uri get baseUrl => Uri.parse('http://127.0.0.1:${server.port}');

  Future<void> close() async {
    for (final response in sseResponses) {
      try {
        await response.close();
      } catch (_) {}
    }
    await server.close(force: true);
  }
}

Future<Fixture> startFixture() async {
  final sseResponses = <HttpResponse>[];
  final sseConnected = Completer<void>();
  final server = await HttpServer.bind(InternetAddress.loopbackIPv4, 0);
  server.listen((request) async {
    final response = request.response;
    final path = request.uri.path;
    try {
      if (request.method == 'GET' && path == '/api/realtime') {
        response.statusCode = HttpStatus.ok;
        response.headers.contentType =
            ContentType('text', 'event-stream', charset: 'utf-8');
        response
            .write('event: PB_CONNECT\ndata: {"clientId":"vm-fixture"}\n\n');
        await response.flush();
        sseResponses.add(response);
        if (!sseConnected.isCompleted) sseConnected.complete();
        return;
      }
      if (request.method == 'POST' && path == '/api/realtime') {
        response.statusCode = HttpStatus.noContent;
        await response.close();
        return;
      }
      if (request.method == 'POST' && path == '/api/batch') {
        await request.drain<void>();
        response.headers.contentType = ContentType.json;
        response.write('[]');
        await response.close();
        return;
      }
      if (request.method == 'GET' &&
          path.startsWith('/api/collections/data/records')) {
        response.headers.contentType = ContentType.json;
        response.write(
            '{"page":1,"perPage":200,"totalItems":0,"totalPages":0,"items":[]}');
        await response.close();
        return;
      }
      response.statusCode = HttpStatus.notFound;
      await response.close();
    } catch (_) {
      try {
        await response.close();
      } catch (_) {}
    }
  });
  return Fixture(server, sseResponses, sseConnected.future);
}

void main() {
  group('native PocketBaseSyncEngine', () {
    late Fixture fixture;

    setUp(() async {
      fixture = await startFixture();
    });

    tearDown(() async {
      await fixture.close();
    });

    test(
        'attachPocketBaseSync memoizes one host per db and refreshes after '
        'stop', () async {
      final db = ProbeDb();
      final a = attachPocketBaseSync(
          db: db, baseUrl: fixture.baseUrl, tokenProvider: FixtureTokens());
      final b = attachPocketBaseSync(
          db: db, baseUrl: fixture.baseUrl, tokenProvider: FixtureTokens());
      expect(identical(a, b), isTrue,
          reason: 'two hosts on one db would double-push the outbox');
      await a.stop();
      final c = attachPocketBaseSync(
          db: db, baseUrl: fixture.baseUrl, tokenProvider: FixtureTokens());
      expect(identical(c, a), isFalse,
          reason: 'stop releases the slot so config can be refreshed');
    });

    test('guards access before start', () async {
      final db = ProbeDb();
      await db.open();
      addTearDown(db.close);
      final host = attachPocketBaseSync(
          db: db, baseUrl: fixture.baseUrl, tokenProvider: FixtureTokens());
      // status is listenable before start (web parity) but emits nothing.
      final statuses = <SyncStatus>[];
      final sub = host.status.listen(statuses.add);
      await expectLater(host.syncNow(), throwsStateError);
      await expectLater(host.startRealtime(), throwsStateError);
      await host.stop();
      expect(statuses, isEmpty);
      await sub.cancel();
    });

    test('runs a full sync lifecycle against a fixture server', () async {
      final db = ProbeDb();
      await db.open();
      addTearDown(db.close);
      final PocketBaseSyncHost host = attachPocketBaseSync(
          db: db, baseUrl: fixture.baseUrl, tokenProvider: FixtureTokens());
      final statuses = <SyncStatus>[];
      final sub = host.status.listen(statuses.add);
      await host.start();
      expect(host.isRunning, isTrue);
      final report = await host.syncNow();
      expect(report.hadError, isFalse);
      await host.startRealtime();
      await fixture.sseConnected.timeout(const Duration(seconds: 5));
      await host.stop();
      expect(host.isRunning, isFalse);
      expect(statuses, isNotEmpty);
      expect(statuses.any((s) => s.state == SyncEngineState.idle), isTrue,
          reason: 'the engine reaches idle after the initial cycle');
      await sub.cancel();
    });
  });
}
