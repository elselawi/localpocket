import 'dart:async';

import 'package:localpocket/localpocket.dart'
    show DirectSqliteDatabase, FieldDef, FieldSet, StoreDef, Writes;
import 'package:localpocket/src/adapters/pocketbase/backend.dart'
    show PocketBaseSyncBackendFactory;
import 'package:localpocket/src/api/api.dart';
import 'package:localpocket/src/kernel/errors.dart' show ValidationException;
import 'package:sqlite3/sqlite3.dart' as sqlite;
import 'package:test/test.dart';

import '../support/fixtures/tasks_store.dart';
import '../support/mock_pb_server.dart';

class _FakeTokens implements TokenProvider {
  _FakeTokens(this._value);
  final String _value;
  @override
  Future<Token> currentToken() async => Token(_value);
  @override
  Future<Token> refreshToken(Token current) async => Token(_value);
  @override
  String get identity => 'sync-test';
}

final class LocalVault extends StoreDef<LocalVault> {
  LocalVault._() : super(name: 'local_vault', version: 1);
  static final LocalVault store = LocalVault._();

  static final token = store.schema.text('token');

  @override
  List<FieldDef<LocalVault, Object?>> get fields => [token];

  @override
  bool get localOnly => true;
}

/// The PocketBase sync attachment on the destination facade over the direct
/// runtime: the host drives the kernel-owned engine through the contract, so
/// the same surface also runs over the loopback/remote runtimes (covered by
/// the conformance suite).
void main() {
  group('PocketBaseSync attachment on the destination facade', () {
    test('start drives the kernel engine; lifecycle verbs round-trip',
        () async {
      final server = await MockPbServer().start();
      addTearDown(server.stop);
      final db = await LocalPocket.open(LocalPocketOptions(
        path: ':memory:',
        stores: [Tasks.store],
        syncBackendFactory: const PocketBaseSyncBackendFactory(),
      ));
      addTearDown(db.close);

      final sync = db.attachPocketBaseSync(PocketBaseSyncOptions(
        baseUrl: server.baseUrl,
        tokenProvider: _FakeTokens('jwt'),
        identity: 'sync-test',
      ));
      expect(sync.isRunning, isFalse);

      await sync.start();
      expect(sync.isRunning, isTrue);

      final report = await sync.syncNow();
      expect(report.pushed, isA<int>());
      expect(report.deadLettered, isA<int>());
      expect(report.discarded, isA<int>());
      expect(report.hadError, isA<bool>());

      await sync.pause();
      await sync.resume();
      await sync.setConnectivity(false);
      await sync.setConnectivity(true);
      await sync.updateAuth('refreshed-jwt');

      await sync.stop();
      expect(sync.isRunning, isFalse);
    });

    test('a native open supplies the PocketBase backend by default', () async {
      final server = await MockPbServer().start();
      addTearDown(server.stop);
      // No `syncBackendFactory`: the native open path wires the canonical
      // PocketBase adapter itself, so callers never import it from `src/`
      // (the reviewer's blocker — sync used to fail with "No sync backend"
      // unless the adapter was imported from an implementation path).
      final db = await LocalPocket.open(LocalPocketOptions(
        path: ':memory:',
        stores: [Tasks.store],
      ));
      addTearDown(db.close);
      final sync = db.attachPocketBaseSync(PocketBaseSyncOptions(
        baseUrl: server.baseUrl,
        tokenProvider: _FakeTokens('jwt'),
        identity: 'default-backend',
      ));
      await sync.start();
      expect(sync.isRunning, isTrue,
          reason:
              'the default backend makes start work with no factory import');
      await sync.stop();
    });

    test('start without an identity fails typed instead of sharing a scope',
        () async {
      final server = await MockPbServer().start();
      addTearDown(server.stop);
      final db = await LocalPocket.open(LocalPocketOptions(
        path: ':memory:',
        stores: [Tasks.store],
        syncBackendFactory: const PocketBaseSyncBackendFactory(),
      ));
      addTearDown(db.close);
      final sync = db.attachPocketBaseSync(PocketBaseSyncOptions(
        baseUrl: server.baseUrl,
        tokenProvider: _FakeTokens('jwt'),
      ));
      await expectLater(
        sync.start(),
        throwsA(isA<ValidationException>().having((e) => e.message, 'message',
            contains('requires a stable per-account identity'))),
      );
      expect(sync.isRunning, isFalse);
    });

    test('a localOnly StoreDef rejects sync attachment with its store name',
        () async {
      final db = await LocalPocket.open(LocalPocketOptions(
        path: ':memory:',
        stores: [LocalVault.store],
      ));
      addTearDown(db.close);

      expect(
        () => db.attachPocketBaseSync(PocketBaseSyncOptions(
          baseUrl: Uri.parse('http://127.0.0.1:8099'),
          tokenProvider: _FakeTokens('jwt'),
          identity: 'local-only-test',
        )),
        throwsA(isA<ValidationException>().having(
          (error) => error.message,
          'message',
          allOf(contains('local_vault'), contains('localOnly')),
        )),
      );
    });

    test('a localOnly database rejects sync attachment by database name',
        () async {
      final db = await LocalPocket.open(LocalPocketOptions(
        path: ':memory:',
        stores: [Tasks.store],
        localOnly: true,
      ));
      addTearDown(db.close);

      expect(
        () => db.attachPocketBaseSync(PocketBaseSyncOptions(
          baseUrl: Uri.parse('http://127.0.0.1:8099'),
          tokenProvider: _FakeTokens('jwt'),
          identity: 'local-only-db-test',
        )),
        throwsA(isA<ValidationException>().having(
          (error) => error.message,
          'message',
          allOf(contains(':memory:'), contains('tasks'), contains('localOnly')),
        )),
      );
    });

    test('LocalPocketOptions.localOnly reaches every native store', () async {
      final database = DirectSqliteDatabase(sqlite.sqlite3.openInMemory());
      final statements = <String>[];
      database.onQuery = (sql, _) => statements.add(sql);
      database.onExecute = (sql, _) => statements.add(sql);
      final db = await LocalPocket.open(LocalPocketOptions(
        path: ':memory:',
        stores: [Tasks.store],
        localOnly: true,
        nativeDatabaseFactory: (_) => database,
      ));
      addTearDown(db.close);

      final store = db.store(Tasks.store);
      final id = LocalPocket.newRecordId();
      await store.put([
        Writes.id(id),
        Tasks.title.set('database-local'),
        Tasks.priority.set(1),
      ]);
      statements.clear();

      await store.patch(id, [Tasks.priority.set(2)]);

      expect(
        statements.where(
            (sql) => sql.contains('lp_sync_row') || sql.contains('lp_outbox')),
        isEmpty,
      );
    });

    test('status pushes snapshots and authRequired fires on a 401 server',
        () async {
      final server = await MockPbServer().start();
      addTearDown(server.stop);
      server.authRequired = true;
      server.validToken = 'expected-token';
      final db = await LocalPocket.open(LocalPocketOptions(
        path: ':memory:',
        stores: [Tasks.store],
        syncBackendFactory: const PocketBaseSyncBackendFactory(),
      ));
      addTearDown(db.close);

      final sync = db.attachPocketBaseSync(PocketBaseSyncOptions(
        baseUrl: server.baseUrl,
        tokenProvider: _FakeTokens('wrong-token'),
        identity: 'status-test',
      ));
      final auth = sync.authRequired.first;
      await sync.start();
      await auth.timeout(const Duration(seconds: 5));

      // A subsequent transition pushes a status snapshot (the stream only
      // carries live events; pause forces a fresh one).
      final statusFuture = sync.status.first;
      await sync.pause();
      final status = await statusFuture.timeout(const Duration(seconds: 5));
      expect(status.state, isA<Object>());
      expect(status.pending, isA<int>());
      await sync.stop();
    });
  });
}
