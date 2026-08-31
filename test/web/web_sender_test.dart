import 'dart:async';

import 'package:localpocket/src/web/lifecycle.dart';
import 'package:localpocket/src/web/protocol.dart';
import 'package:localpocket/src/web/web_sender.dart';
import 'package:test/test.dart';

void main() {
  group('isWorkerClosedMessage', () {
    test('matches every upstream closed-marker substring', () {
      expect(isWorkerClosedMessage('Channel to database worker is closed'),
          isTrue);
      expect(isWorkerClosedMessage('The worker is closed.'), isTrue);
      expect(isWorkerClosedMessage('Worker closed unexpectedly'), isTrue);
      expect(isWorkerClosedMessage('...database worker is closed...'), isTrue,
          reason: 'the marker must match inside a longer message');
    });

    test('does not match unrelated transport errors', () {
      expect(isWorkerClosedMessage('Request aborted'), isFalse);
      expect(isWorkerClosedMessage('Channel is busy'), isFalse);
      expect(isWorkerClosedMessage('worker rejected the request'), isFalse);
      expect(isWorkerClosedMessage(''), isFalse);
    });
  });

  group('WebSender', () {
    test('a send after close fails immediately without touching the transport',
        () async {
      var transportCalls = 0;
      final sender = WebSender(
        transport: (req) async {
          transportCalls++;
          return const {};
        },
      );
      sender.markClosedLocal();
      await expectLater(
        sender.send(WireOp.syncNow),
        throwsA(isA<DatabaseWorkerClosedException>()),
      );
      expect(transportCalls, 0);
      expect(sender.isClosed, isTrue);
    });

    test('request ids increment across sends and the envelope carries op/args',
        () async {
      final received = <WebRequest>[];
      final sender = WebSender(
        transport: (req) async {
          received.add(req);
          return {
            'v': webProtocolVersion,
            'i': req.requestId,
            'r': {'ok': true},
          };
        },
      );
      await sender.send(WireOp.syncNow);
      await sender.send(WireOp.syncNow, {'store': 'widgets'});

      expect(received, hasLength(2));
      expect(received[0].requestId, 1);
      expect(received[1].requestId, 2);
      expect(received[0].op, WireOp.syncNow);
      expect(received[1].op, WireOp.syncNow);
      expect(received[1].args, {'store': 'widgets'});
      expect(received[0].toJson()['v'], webProtocolVersion);
      expect(received[0].toJson()['a'], const <String, Object?>{});
    });

    test(
        'a transport error containing a closed marker marks the worker '
        'closed and surfaces a typed DatabaseWorkerClosedException', () async {
      var closedCallback = 0;
      // The transport surfaces Errors from `dart:js_interop`; use an
      // Exception subclass here to exercise the `on Exception` catch path.
      final transportError =
          Exception('Channel to database worker is closed (request rejected)');
      final sender = WebSender(
        transport: (_) async => throw transportError,
        onWorkerClosed: () => closedCallback++,
      );
      await expectLater(
        sender.send(WireOp.syncNow),
        throwsA(isA<DatabaseWorkerClosedException>()
            .having((e) => e.message, 'message', contains('worker is closed'))),
      );
      expect(sender.isClosed, isTrue);
      expect(closedCallback, 1);
      // A later send fails immediately (already closed).
      await expectLater(
        sender.send(WireOp.syncNow),
        throwsA(isA<DatabaseWorkerClosedException>()),
      );
      expect(closedCallback, 1,
          reason: 'closed callback must run exactly once');
    });

    test(
        'non-closed transport errors are rethrown as-is and do not mark closed',
        () async {
      var closedCallback = 0;
      final boom = StateError('unrelated failure');
      final sender = WebSender(
        transport: (_) async => throw boom,
        onWorkerClosed: () => closedCallback++,
      );
      await expectLater(sender.send(WireOp.syncNow), throwsA(same(boom)));
      expect(sender.isClosed, isFalse);
      expect(closedCallback, 0);
    });

    test(
        'a request exceeding requestTimeout throws the typed timeout, keeps '
        'the sender open, and the next send succeeds', () async {
      var calls = 0;
      final sender = WebSender(
        requestTimeout: const Duration(milliseconds: 20),
        transport: (req) {
          calls++;
          if (calls == 1) {
            // A wedged worker: the first request never completes.
            return Completer<Object?>().future;
          }
          return Future<Object?>.value({
            'v': webProtocolVersion,
            'i': req.requestId,
            'r': {'ok': true},
          });
        },
      );

      await expectLater(
        sender.send(WireOp.syncNow),
        throwsA(isA<DatabaseWorkerTimeoutException>()
            .having((e) => e.op, 'op', WireOp.syncNow)
            .having((e) => e.requestId, 'requestId', 1)
            .having(
                (e) => e.timeout, 'timeout', const Duration(milliseconds: 20))),
      );

      expect(sender.isClosed, isFalse,
          reason: 'a timeout must not close the sender');

      final result = await sender.send(WireOp.syncNow, {'store': 'widgets'});
      expect(result, {'ok': true});
      expect(calls, 2);
    });

    test('a null requestTimeout leaves an in-flight request to complete',
        () async {
      final sender = WebSender(
        transport: (_) async {
          await Future<void>.delayed(const Duration(milliseconds: 30));
          return {
            'v': webProtocolVersion,
            'i': 1,
            'r': {'ok': true},
          };
        },
      );
      final result = await sender.send(WireOp.syncNow);
      expect(result, {'ok': true});
    });

    test('a null response is rejected as a protocol envelope error', () async {
      final sender = WebSender(transport: (_) async => null);
      await expectLater(
        sender.send(WireOp.syncNow),
        throwsA(isA<ProtocolEnvelopeException>()
            .having((e) => e.message, 'message', contains('Null response'))),
      );
    });

    test(
        'a malformed (non-map) response is rejected as a protocol envelope '
        'error', () async {
      final sender = WebSender(transport: (_) async => 'not-a-map');
      await expectLater(
        sender.send(WireOp.syncNow),
        throwsA(isA<ProtocolEnvelopeException>().having(
            (e) => e.message, 'message', contains('Malformed response'))),
      );
    });

    test('a response with a version mismatch throws ProtocolMismatchException',
        () async {
      final sender = WebSender(
        transport: (_) async => {
          'v': 1,
          'i': 1,
          'r': <String, Object?>{},
        },
      );
      await expectLater(
        sender.send(WireOp.syncNow),
        throwsA(isA<ProtocolMismatchException>()),
      );
    });

    test('a wire error response decodes to its typed exception via decodeError',
        () async {
      final sender = WebSender(
        transport: (_) async => {
          'v': webProtocolVersion,
          'i': 1,
          'e': {
            'c': WireErrorCode.localpocket,
            'm': 'boom',
            'd': {'type': 'StorageError'},
          },
        },
      );
      await expectLater(
        sender.send(WireOp.syncNow),
        throwsA(isA<RemoteLocalPocketException>()
            .having((e) => e.code, 'code', 'StorageError')),
      );
    });

    test('a worker-closed wire error decodes to DatabaseWorkerClosedException',
        () async {
      final sender = WebSender(
        transport: (_) async => {
          'v': webProtocolVersion,
          'i': 1,
          'e': {
            'c': WireErrorCode.workerClosed,
            'm': 'the worker went away',
          },
        },
      );
      await expectLater(
        sender.send(WireOp.syncNow),
        throwsA(isA<DatabaseWorkerClosedException>()),
      );
    });

    test('a success response returns the decoded result', () async {
      final sender = WebSender(
        transport: (_) async => {
          'v': webProtocolVersion,
          'i': 1,
          'r': {'pruned': 3},
        },
      );
      final result = await sender.send(WireOp.syncNow);
      expect(result, {'pruned': 3});
    });

    test('markWorkerClosed is idempotent and only notifies once', () async {
      var closedCallback = 0;
      final sender = WebSender(
        transport: (_) async => const {},
        onWorkerClosed: () => closedCallback++,
      );
      sender.markWorkerClosed();
      sender.markWorkerClosed();
      sender.markWorkerClosed();
      expect(sender.isClosed, isTrue);
      expect(closedCallback, 1);
    });
  });

  group('failWorkerStreams', () {
    test('fails the status controllers with the terminal error', () async {
      final syncStatus = StreamController<Map<String, Object?>>.broadcast();
      final authRequired = StreamController<void>.broadcast();

      final syncErrors = <Object?>[];
      syncStatus.stream.listen((_) {}, onError: syncErrors.add);
      final authErrors = <Object?>[];
      authRequired.stream.listen((_) {}, onError: authErrors.add);

      failWorkerStreams(
        syncStatusController: syncStatus,
        authRequiredController: authRequired,
      );

      await pumpEventQueue();

      expect(syncErrors.single, isA<DatabaseWorkerClosedException>());
      expect(authErrors.single, isA<DatabaseWorkerClosedException>());
    });
  });
}
