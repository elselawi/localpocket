import 'package:localpocket/src/web/lifecycle.dart';
import 'dart:async';
import 'package:test/test.dart';

void main() {
  test('failed watch initialization removes and disposes the registration',
      () async {
    var started = false;
    var registered = false;
    var cleaned = false;

    await expectLater(
      initializeWebWatch<void>(
        start: () => started = true,
        register: () => registered = true,
        initialize: () async {
          expect(started, isTrue);
          expect(registered, isTrue);
          throw StateError('initial query failed');
        },
        cleanup: () async => cleaned = true,
      ),
      throwsStateError,
    );

    expect(cleaned, isTrue);
  });

  test('successful watch initialization returns the initial snapshot',
      () async {
    var cleaned = false;

    final snapshot = await initializeWebWatch<String>(
      start: () {},
      register: () {},
      initialize: () async => 'initial snapshot',
      cleanup: () async => cleaned = true,
    );

    expect(snapshot, 'initial snapshot');
    expect(cleaned, isFalse);
  });

  group('WatchSubscriptionTracker (WEB-01)', () {
    test('normal registration and unregistration runs in order', () async {
      final tracker = WatchSubscriptionTracker();
      final events = <String>[];

      await tracker.runRegistration(
        watchId: 1,
        register: () async {
          events.add('register:1');
        },
        unregister: () async {
          events.add('unregister:1');
        },
      );

      expect(events, ['register:1']);
      expect(tracker.isRegistrationInFlight(1), isFalse);

      await tracker.requestUnregistration(
        watchId: 1,
        unregister: () async {
          events.add('unregister:1');
        },
      );

      expect(events, ['register:1', 'unregister:1']);
    });

    test(
        'early subscription cancellation during in-flight registration triggers immediate unregister after registration completes',
        () async {
      final tracker = WatchSubscriptionTracker();
      final events = <String>[];
      final registerGate = Completer<void>();

      // Start in-flight registration
      final regFuture = tracker.runRegistration(
        watchId: 42,
        register: () async {
          events.add('register-start:42');
          await registerGate.future;
          events.add('register-complete:42');
        },
        unregister: () async {
          events.add('unregister:42');
        },
      );

      expect(tracker.isRegistrationInFlight(42), isTrue);

      // Early cancellation arrives while registration is still awaiting worker response
      await tracker.requestUnregistration(
        watchId: 42,
        unregister: () async {
          events.add('unregister-immediate:42');
        },
      );

      expect(tracker.isUnregistrationPending(42), isTrue);
      expect(events, ['register-start:42'],
          reason: 'Unregister must not execute before registration finishes');

      // Complete registration across worker boundary
      registerGate.complete();
      await regFuture;

      expect(tracker.isRegistrationInFlight(42), isFalse);
      expect(tracker.isUnregistrationPending(42), isFalse);
      expect(
          events,
          [
            'register-start:42',
            'register-complete:42',
            'unregister:42',
          ],
          reason:
              'Unregister must run immediately when in-flight registration finishes');
    });

    test('failed registration with early cancellation cleans up state cleanly',
        () async {
      final tracker = WatchSubscriptionTracker();
      final events = <String>[];
      final registerGate = Completer<void>();

      final regFuture = tracker.runRegistration(
        watchId: 99,
        register: () async {
          events.add('register-start:99');
          await registerGate.future;
          throw StateError('Worker connection failed');
        },
        unregister: () async {
          events.add('unregister:99');
        },
      );

      expect(tracker.isRegistrationInFlight(99), isTrue);

      // Cancel early
      await tracker.requestUnregistration(
        watchId: 99,
        unregister: () async {
          events.add('unregister-immediate:99');
        },
      );

      // Release with error
      registerGate.complete();
      await expectLater(regFuture, throwsStateError);

      expect(tracker.isRegistrationInFlight(99), isFalse);
      expect(tracker.isUnregistrationPending(99), isFalse);
      // Even if register throws, the pending unregister is invoked in finally
      expect(events, [
        'register-start:99',
        'unregister:99',
      ]);
    });
  });
}
