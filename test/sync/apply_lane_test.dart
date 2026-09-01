import 'dart:async';

import 'package:localpocket/src/kernel/sync/apply_lane.dart';
import 'package:test/test.dart';

/// Unit pins for the shared remote-application lane.
///
/// The lane must be:
/// - strictly FIFO (a later operation never starts before an earlier one
///   finishes, even when the earlier one is slower);
/// - error-contained (a failing operation propagates only to its own caller
///   and never poisons the lane or later operations);
/// - drainable ([ApplyLane.idle] completes only after every queued operation
///   has finished, success or error).
void main() {
  test('operations run strictly in FIFO order even across different speeds',
      () async {
    final lane = ApplyLane();
    final starts = <String>[];
    final releaseFirst = Completer<void>();

    final first = lane.run(() async {
      starts.add('first');
      await releaseFirst.future;
    });
    final second = lane.run(() async => starts.add('second'));
    final third = lane.run(() async => starts.add('third'));

    // The later operations must not start while the first one is held open.
    await Future<void>.delayed(const Duration(milliseconds: 20));
    expect(starts, ['first']);

    releaseFirst.complete();
    await Future.wait([first, second, third]);
    expect(starts, ['first', 'second', 'third']);
  });

  test('results and errors propagate to the caller that enqueued them',
      () async {
    final lane = ApplyLane();

    expect(await lane.run<int>(() async => 42), 42);

    await expectLater(
        lane.run<int>(() async => throw StateError('boom')), throwsStateError);

    // The lane still serves after the failure.
    expect(await lane.run<int>(() async => 7), 7);
  });

  test('a failing operation never poisons the next one', () async {
    final lane = ApplyLane();
    final order = <String>[];

    final failing = lane.run(() async {
      order.add('first');
      throw StateError('boom');
    });
    final healthy = lane.run(() async => order.add('second'));

    await expectLater(failing, throwsStateError);
    await healthy;
    expect(order, ['first', 'second']);
  });

  test('a synchronous throw inside the operation is contained', () async {
    final lane = ApplyLane();

    final syncThrow = lane.run<void>(() => throw ArgumentError('sync boom'));
    final healthy = lane.run<int>(() async => 1);

    await expectLater(syncThrow, throwsArgumentError);
    expect(await healthy, 1);
  });

  test('idle completes only after every queued operation has finished',
      () async {
    final lane = ApplyLane();
    final release = Completer<void>();
    var done = false;

    unawaited(lane.run(() async {
      await release.future;
      done = true;
    }));
    final idleSeesDone = lane.idle.then((_) => done);

    release.complete();
    expect(await idleSeesDone, isTrue,
        reason: 'idle resolves only once the held operation finished');
  });

  test('idle waits for failed operations too', () async {
    final lane = ApplyLane();
    var after = false;

    unawaited(lane.run<void>(() async => throw StateError('x')));
    unawaited(lane.run(() async => after = true));

    await lane.idle;
    expect(after, isTrue,
        reason: 'idle drains the lane including the failing operation');
  });

  test('concurrent callers are serialized one after another', () async {
    final lane = ApplyLane();
    var active = 0;
    var maxActive = 0;

    Future<void> op() => lane.run(() async {
          active++;
          if (active > maxActive) maxActive = active;
          await Future<void>.delayed(const Duration(milliseconds: 5));
          active--;
        });

    await Future.wait([op(), op(), op(), op()]);
    expect(maxActive, 1, reason: 'lane operations never overlap');
  });
}
