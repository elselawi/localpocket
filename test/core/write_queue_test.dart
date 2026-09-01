import 'package:localpocket/src/kernel/write_queue.dart';
import 'package:test/test.dart';

/// Regression coverage: a failed action must never poison the
/// queue. `WriteQueue.run` chains through `_tail.then(...)` with the try/catch
/// inside the callback, so `_tail` itself never becomes failed and later
/// actions keep executing.
void main() {
  group('WriteQueue failure recovery', () {
    test('failed write followed by a successful concurrent write', () async {
      final q = WriteQueue();
      var ranAfterFailure = 0;

      final failing = q.run<int>(() async => throw StateError('boom'));
      await expectLater(failing, throwsA(isA<StateError>()));

      final succeeding = q.run<int>(() async {
        ranAfterFailure++;
        return 42;
      });
      expect(await succeeding, 42);
      expect(ranAfterFailure, 1);
    });

    test('queue stays healthy through multiple interleaved failures', () async {
      final q = WriteQueue();
      final order = <String>[];

      Future<void> expectFailure(Future<void> f) async {
        try {
          await f;
          fail('expected the action to throw');
        } on StateError {
          // expected
        }
      }

      await expectFailure(q.run(() async {
        order.add('a');
        throw StateError('boom1');
      }));

      await q.run(() async => order.add('b'));

      await expectFailure(q.run(() async {
        order.add('c');
        throw StateError('boom2');
      }));

      await q.run(() async => order.add('d'));

      expect(order, ['a', 'b', 'c', 'd']);
    });

    test('errors surface to the correct caller only', () async {
      final q = WriteQueue();
      final results = <String>[];

      final f1 = q.run(() async => throw StateError('first'));
      final f2 = q.run(() async => 'ok');
      final f3 = q.run(() async => throw StateError('third'));

      await expectLater(f1, throwsA(isA<StateError>()));
      expect(await f2, 'ok');
      await expectLater(f3, throwsA(isA<StateError>()));

      results.add('done');
      expect(results, ['done']);
    });
  });
}
