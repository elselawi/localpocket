import 'dart:async';

import 'package:localpocket/src/api/watch_runtime.dart';
import 'package:localpocket/src/contract/contract.dart';
import 'package:test/test.dart';

/// Unit coverage of the shared runtime-watch plumbing (`Store.watch` and
/// `StoreConflicts.watch` both funnel through `runtimeWatch`): the open
/// guard, in-flight cancellation, `onDone` termination, failing async
/// registration surfacing as a stream error (never a zone error), and the
/// matching/emitting contract.

Future<void> _drain() async {
  await Future<void>.delayed(const Duration(milliseconds: 20));
}

void main() {
  List<int> emitOf(Event e) => [e.hashCode];

  test('ensureOpen runs before registration and guards closed runtimes',
      () async {
    var registered = false;
    // The guard runs synchronously in the factory body: a closed runtime
    // fails the watch() call itself, before any listener attaches.
    await expectLater(
      () => runtimeWatch<int>(
        ensureOpen: () => throw StateError('database is closed'),
        start: () async {
          registered = true;
          throw StateError('unreachable');
        },
        send: (_) async => throw StateError('unreachable'),
        events: const Stream<Event>.empty(),
        matches: (_, __) => true,
        emit: emitOf,
      ),
      throwsA(isA<StateError>()
          .having((e) => e.message, 'message', 'database is closed')),
    );
    expect(registered, isFalse,
        reason: 'a closed runtime never reaches registration');
  });

  test('a failing async registration is a stream error, never a zone error',
      () async {
    final stream = runtimeWatch<int>(
      ensureOpen: () {},
      start: () async => throw StateError('kernel exploded'),
      send: (_) async => throw StateError('unreachable'),
      events: const Stream<Event>.empty(),
      matches: (_, __) => true,
      emit: emitOf,
    );

    await expectLater(
      stream.toList(),
      throwsA(isA<StateError>()
          .having((e) => e.message, 'message', 'kernel exploded')),
    );
  });

  test('happy path: matching snapshot events are emitted in order', () async {
    final events = StreamController<Event>.broadcast();
    addTearDown(events.close);
    final registered = Completer<void>();
    final stream = runtimeWatch<int>(
      ensureOpen: () {},
      start: () async {
        const result = WatchStartedResult(subscription: 'sub-1');
        registered.complete();
        return result;
      },
      send: (_) async => throw StateError('unreachable'),
      events: events.stream,
      // Mirror real callers: an event belongs to this stream only when its
      // payload names our subscription (filtered snapshots carry it).
      matches: (event, id) =>
          event is WatchSnapshot && event.subscription == id,
      emit: emitOf,
    );

    final emissions = <List<int>>[];
    final sub = stream.listen(emissions.add);
    addTearDown(sub.cancel);
    await registered.future;
    // `registered` completes inside start(); `events.listen` attaches one
    // microtask later. Yield until it is attached — broadcast controllers
    // drop events with zero listeners, so firing early would lose them.
    for (var i = 0; i < 20; i++) {
      await Future<void>.delayed(Duration.zero);
    }
    final ev1 = WatchSnapshot(subscription: 'sub-1', items: const []);
    final ev2 = WatchSnapshot(subscription: 'sub-1', items: const [
      {'x': 1}
    ]);
    events.add(ev1);
    events.add(WatchSnapshot(subscription: 'other', items: const []));
    events.add(ev2);
    for (var i = 0; i < 200 && emissions.length < 2; i++) {
      await Future<void>.delayed(const Duration(milliseconds: 10));
    }
    expect(emissions, [emitOf(ev1), emitOf(ev2)]);
  });

  test(
      'cancellation while start() is in flight still tears the kernel '
      'subscription down', () async {
    final gate = Completer<void>();
    final cancelCalls = <String>[];
    final stream = runtimeWatch<int>(
      ensureOpen: () {},
      start: () async {
        await gate.future;
        return const WatchStartedResult(subscription: 'late-sub');
      },
      send: (request) async {
        expect(request, isA<WatchCancelRequest>());
        cancelCalls.add((request as WatchCancelRequest).subscription);
        return const HealthResult(ok: true, sqliteVersion: 'x');
      },
      events: const Stream<Event>.empty(),
      matches: (_, __) => false,
      emit: emitOf,
    );

    final sub = stream.listen((_) {});
    // Cancel while the registration is still awaiting the gate.
    await sub.cancel();
    gate.complete();
    await _drain();
    expect(cancelCalls, ['late-sub'],
        reason: 'the kernel-registered subscription must be explicitly '
            'cancelled or it would re-query on every store change forever');
  });

  test('the stream ends when the event stream ends (database closed)',
      () async {
    final events = StreamController<Event>.broadcast();
    var registered = false;
    final stream = runtimeWatch<int>(
      ensureOpen: () {},
      start: () async {
        registered = true;
        return const WatchStartedResult(subscription: 'sub-1');
      },
      send: (_) async => throw StateError('unreachable'),
      events: events.stream,
      matches: (_, __) => true,
      emit: emitOf,
    );

    final done = Completer<void>();
    final sub = stream.listen((_) {}, onDone: done.complete);
    addTearDown(sub.cancel);
    while (!registered) {
      await _drain();
    }
    await events.close();
    await done.future.timeout(const Duration(seconds: 5));
  });

  test('cancel sends the cancel request once, never twice', () async {
    final events = StreamController<Event>.broadcast();
    addTearDown(events.close);
    final cancelCalls = <String>[];
    final stream = runtimeWatch<int>(
      ensureOpen: () {},
      start: () async => const WatchStartedResult(subscription: 'live'),
      send: (request) async {
        cancelCalls.add((request as WatchCancelRequest).subscription);
        return const HealthResult(ok: true, sqliteVersion: 'x');
      },
      events: events.stream,
      matches: (_, __) => true,
      emit: emitOf,
    );

    final sub = stream.listen((_) {});
    await _drain();
    await sub.cancel();
    await sub.cancel();
    await _drain();
    expect(cancelCalls, ['live'],
        reason: 'the second cancel is idempotent (the id was already cleared)');
  });
}
