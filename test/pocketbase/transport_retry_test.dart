import 'dart:async';
import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:localpocket/pocketbase.dart';
import 'package:localpocket/sync.dart';
import 'package:test/test.dart';

import 'fake_transport.dart';
import '../support/pb_helpers.dart';

/// Multipart / streamed transport retryability and buffered /
/// streamed response failure consistency.
void main() {
  group('multipart and streamed transport retryability', () {
    test('default sendMultipart is unsupported and surfaces UnsupportedError',
        () async {
      final b = PocketBaseRawBackend(
        baseUrl: Uri.parse('https://pb.example.test'),
        tokenProvider: TestTokenProvider(),
        stores: const ['widgets'],
        transport: _NoMultipartTransport(),
      );
      addTearDown(b.close);
      await expectLater(
        b.updateRecordFilesStream(
          id: 'r1',
          uploads: {
            'f.bin': const StreamFileUpload(
                filename: 'f.bin', length: 2, streamFactory: _twoBytes),
          },
        ),
        throwsA(isA<UnsupportedError>()),
      );
    });

    test('stream factory is replayed fresh after an auth-refresh retry',
        () async {
      final fake = FakeTransport();
      fake.readFilesOnMultipart = true; // consume streams like a real transport
      fake.multipartStatus(401, '{"message":"no"}');
      fake.multipartStatus(
          200, FakeTransport.recordBody('r1', imgs: ['f.bin']));
      var factoryCalls = 0;
      final b = PocketBaseRawBackend(
        baseUrl: Uri.parse('https://pb.example.test'),
        tokenProvider:
            TestTokenProvider(tokenValue: 'stale', refreshTo: 'fresh'),
        stores: const ['widgets'],
        transport: fake,
      );
      addTearDown(b.close);
      await b.updateRecordFilesStream(
        id: 'r1',
        uploads: {
          'f.bin': StreamFileUpload(
            filename: 'f.bin',
            length: 4,
            streamFactory: () async {
              factoryCalls++;
              return Stream.value(utf8.encode('data'));
            },
          ),
        },
      );
      expect(factoryCalls, 2,
          reason: 'first attempt + retry each build a fresh stream');
      expect(fake.multiparts.length, 2);
      // The retry carried the refreshed token.
      final auths =
          fake.multiparts.map((m) => m.headers['Authorization']).toList();
      expect(auths[0], 'Bearer stale');
      expect(auths[1], 'Bearer fresh');
    });

    test('multiple files and empty files are both sent intact', () async {
      final fake = FakeTransport();
      fake.readFilesOnMultipart = true;
      fake.multipartStatus(200, FakeTransport.recordBody('r1'));
      final b = PocketBaseRawBackend(
          baseUrl: Uri.parse('https://pb.example.test'),
          tokenProvider: TestTokenProvider(),
          stores: const ['widgets'],
          transport: fake);
      addTearDown(b.close);
      await b.updateRecordFilesStream(
        id: 'r1',
        uploads: {
          'a.bin': const StreamFileUpload(
              filename: 'a.bin', length: 3, streamFactory: _threeBytes),
          'empty.bin': const StreamFileUpload(
              filename: 'empty.bin', length: 0, streamFactory: _zeroBytes),
        },
      );
      final req = fake.multiparts.single;
      expect(req.files.length, 2);
      expect(req.files.map((f) => f.filename),
          containsAll(['a.bin', 'empty.bin']));
      expect(fake.multipartConsumed, [
        [1, 2, 3],
        <int>[],
      ]);
    });

    test('transport timeout maps to TransientNetworkError', () async {
      final fake = FakeTransport();
      fake.multipartError(HttpTransportException('request timed out'));
      final b = PocketBaseRawBackend(
          baseUrl: Uri.parse('https://pb.example.test'),
          tokenProvider: TestTokenProvider(),
          stores: const ['widgets'],
          transport: fake);
      addTearDown(b.close);
      await expectLater(
        b.updateRecordFilesStream(
          id: 'r1',
          uploads: {
            'f.bin': const StreamFileUpload(
                filename: 'f.bin', length: 2, streamFactory: _twoBytes),
          },
        ),
        throwsA(isA<TransientNetworkError>()),
      );
    });

    test('upload stream failure becomes TransientNetworkError', () async {
      final fake = FakeTransport();
      fake.readFilesOnMultipart = true;
      fake.multipartStatus(200, FakeTransport.recordBody('r1'));
      final b = PocketBaseRawBackend(
          baseUrl: Uri.parse('https://pb.example.test'),
          tokenProvider: TestTokenProvider(),
          stores: const ['widgets'],
          transport: fake);
      addTearDown(b.close);
      await expectLater(
        b.updateRecordFilesStream(
          id: 'r1',
          uploads: {
            'f.bin': StreamFileUpload(
              filename: 'f.bin',
              length: 2,
              streamFactory: () async => _erroringUpload(),
            ),
          },
        ),
        throwsA(isA<TransientNetworkError>()),
      );
    });

    test('multipart status handling maps to typed errors', () async {
      Future<void> expectStatus(int status, Type error) async {
        final fake = FakeTransport();
        fake.multipartStatus(status, '{"message":"boom"}');
        final b = PocketBaseRawBackend(
            baseUrl: Uri.parse('https://pb.example.test'),
            tokenProvider: TestTokenProvider(),
            stores: const ['widgets'],
            transport: fake);
        addTearDown(b.close);
        await expectLater(
          b.updateRecordFilesStream(
            id: 'r1',
            uploads: {
              'f.bin': const StreamFileUpload(
                  filename: 'f.bin', length: 2, streamFactory: _twoBytes),
            },
          ),
          throwsA(isA<SyncError>().having((e) => e.runtimeType, 'type', error)),
          reason: 'multipart status $status',
        );
      }

      await expectStatus(400, PayloadError);
      await expectStatus(404, NotFoundError);
      await expectStatus(500, ServerError);
    });
  });

  group('buffered/streamed response failures', () {
    Stream<List<int>> erroringBody() async* {
      yield utf8.encode('partial');
      throw StateError('stream died');
    }

    test('openStream ok + body stream error -> HttpTransportException',
        () async {
      final client = _StreamedClient(
          (_) async => http.StreamedResponse(erroringBody(), 200));
      final t = PackageHttpTransport(client: client);
      await expectLater(
        t.send(HttpRequest(method: 'GET', url: Uri.parse('https://x.test/a'))),
        throwsA(isA<HttpTransportException>()),
      );
    });

    test('body timeout -> HttpTransportException', () async {
      final controller = StreamController<List<int>>();
      final client = _StreamedClient(
          (_) async => http.StreamedResponse(controller.stream, 200));
      final t = PackageHttpTransport(
          client: client, timeout: const Duration(milliseconds: 80));
      await expectLater(
        t.send(HttpRequest(method: 'GET', url: Uri.parse('https://x.test/a'))),
        throwsA(isA<HttpTransportException>()),
      );
      await controller.close();
    });

    test('malformed UTF-8 body -> HttpTransportException', () async {
      final client = _StreamedClient(
          (_) async => http.StreamedResponse(Stream.value([0xff, 0xfe]), 200));
      final t = PackageHttpTransport(client: client);
      await expectLater(
        t.send(HttpRequest(method: 'GET', url: Uri.parse('https://x.test/a'))),
        throwsA(isA<HttpTransportException>()),
      );
    });

    test('early-close body returns the partial content (no error)', () async {
      final client = _StreamedClient((_) async =>
          http.StreamedResponse(Stream.value(utf8.encode('hi')), 200));
      final t = PackageHttpTransport(client: client);
      final res = await t
          .send(HttpRequest(method: 'GET', url: Uri.parse('https://x.test/a')));
      expect(res.status, 200);
      expect(res.body, 'hi');
    });

    test('client send failure -> HttpTransportException (openStream path)',
        () async {
      final client = _StreamedClient(
          (_) async => throw http.ClientException('connection refused'));
      final t = PackageHttpTransport(client: client);
      await expectLater(
        t.openStream(
            HttpRequest(method: 'GET', url: Uri.parse('https://x.test/a'))),
        throwsA(isA<HttpTransportException>()),
      );
    });

    test('multipart response decode failure -> HttpTransportException',
        () async {
      final client = _StreamedClient(
          (_) async => http.StreamedResponse(erroringBody(), 200));
      final t = PackageHttpTransport(client: client);
      final req = HttpMultipartRequest(
        method: 'PATCH',
        url: Uri.parse('https://x.test/r'),
        files: const [
          HttpMultipartFile(
              field: 'f',
              filename: 'f.bin',
              length: 2,
              streamFactory: _twoBytes),
        ],
      );
      await expectLater(
        t.sendMultipart(req),
        throwsA(isA<HttpTransportException>()),
      );
    });

    test('close() may be called repeatedly', () async {
      final t = PackageHttpTransport(
          client: _StreamedClient(
              (_) async => http.StreamedResponse(const Stream.empty(), 200)));
      t.close();
      t.close();
      t.close();
    });

    test('sendMultipart with a throwing stream factory wraps the failure',
        () async {
      final client = _StreamedClient(
          (_) async => http.StreamedResponse(Stream.value(const []), 200));
      final t = PackageHttpTransport(client: client);
      final req = HttpMultipartRequest(
        method: 'PATCH',
        url: Uri.parse('https://x.test/r'),
        files: [
          HttpMultipartFile(
            field: 'f',
            filename: 'f.bin',
            length: 2,
            streamFactory: () async => throw StateError('no bytes'),
          ),
        ],
      );
      await expectLater(
        t.sendMultipart(req),
        throwsA(isA<HttpTransportException>()),
      );
    });
  });
}

/// A transport that relies on the default (unsupported) [sendMultipart].
class _NoMultipartTransport extends HttpTransport {
  @override
  Future<HttpResponse> send(HttpRequest request) async =>
      const HttpResponse(200, {}, '{}');

  @override
  Future<StreamedHttpResponse> openStream(HttpRequest request) async =>
      StreamedHttpResponse(200, const {}, const Stream.empty());

  @override
  void close() {}
}

/// A minimal [http.BaseClient] whose responses are fully scriptable.
class _StreamedClient extends http.BaseClient {
  _StreamedClient(this.handler);
  final Future<http.StreamedResponse> Function(http.BaseRequest) handler;

  @override
  Future<http.StreamedResponse> send(http.BaseRequest request) =>
      handler(request);
}

Future<Stream<List<int>>> _twoBytes() async => Stream.value([1, 2]);
Future<Stream<List<int>>> _threeBytes() async => Stream.value([1, 2, 3]);
Future<Stream<List<int>>> _zeroBytes() async => const Stream.empty();
Stream<List<int>> _erroringUpload() async* {
  yield utf8.encode('p');
  throw StateError('disk full');
}
