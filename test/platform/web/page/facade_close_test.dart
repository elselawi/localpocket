import 'package:localpocket/src/platform/web/page/lifecycle.dart';
import 'package:test/test.dart';

void main() {
  test('close sends worker shutdown before marking the facade closed',
      () async {
    final events = <String>[];
    var closed = false;

    await closeWebResources(
      sendWorkerClose: () async {
        expect(closed, isFalse);
        events.add('worker-close');
      },
      markClosed: () {
        closed = true;
        events.add('facade-closed');
      },
      disposePageResources: () async {
        expect(closed, isTrue);
        events.add('page-disposed');
      },
    );

    expect(events, ['worker-close', 'facade-closed', 'page-disposed']);
  });

  test('page resources are disposed when worker shutdown fails', () async {
    final events = <String>[];
    var closed = false;

    await closeWebResources(
      sendWorkerClose: () async {
        events.add('worker-close');
        throw StateError('worker already gone');
      },
      markClosed: () {
        closed = true;
        events.add('facade-closed');
      },
      disposePageResources: () async {
        expect(closed, isTrue);
        events.add('page-disposed');
      },
    );

    expect(events, ['worker-close', 'facade-closed', 'page-disposed']);
  });

  test(
      'unregistration queued behind an in-flight registration completes '
      'only after the worker cancel runs', () async {
    final tracker = WatchSubscriptionTracker();
    final events = <String>[];
    Future<void>? unregistration;

    final registration = tracker.runRegistration(
      watchId: 1,
      register: () async {
        // The unregistration request races in while the worker registration
        // is still in flight.
        unregistration = tracker.requestUnregistration(
          watchId: 1,
          unregister: () async => events.add('worker-cancel'),
        );
        expect(tracker.isUnregistrationPending(1), isTrue);
        await Future<void>.delayed(Duration.zero);
        expect(events, isEmpty,
            reason: 'cancel is queued while registration is in flight');
        events.add('worker-register');
      },
      unregister: () async {},
    );

    await registration;
    expect(events, ['worker-register', 'worker-cancel'],
        reason: 'the queued cancel ran during registration teardown');
    await unregistration;
    expect(tracker.isUnregistrationPending(1), isFalse);
  });

  test('an immediate unregistration cancels without a pending registration',
      () async {
    final tracker = WatchSubscriptionTracker();
    var cancelled = false;
    await tracker.requestUnregistration(
      watchId: 2,
      unregister: () async => cancelled = true,
    );
    expect(cancelled, isTrue);
  });
}
