import 'dart:async';
import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'package:localpocket/src/core/schema.dart';
import 'package:localpocket/src/web/facade.dart';
import 'package:localpocket/src/web/protocol.dart';

Future<void> main() async {
  void report(String status, [String? detail]) {
    globalContext.setProperty(
        '__transaction_watch_lifecycle_smoke'.toJS, status.toJS);
    if (detail != null) {
      globalContext.setProperty(
          '__transaction_watch_lifecycle_smoke_detail'.toJS, detail.toJS);
    }
  }

  try {
    final schema = CollectionSchema<Object?>(
      name: 'events',
      version: 1,
      keepUnsyncedArchives: true,
      fields: [Field.text('title', required: true), Field.bool('done')],
    );
    final pocket = await LocalPocket.open(
      path:
          'transaction_watch_lifecycle_${DateTime.now().microsecondsSinceEpoch}',
      stores: [schema],
    );
    final events = pocket.collection('events');
    try {
      await events.put({
        'id': 'event0000001234',
        'title': 'initial',
        'done': false,
      });

      // Nested savepoint rollback must not discard the outer transaction.
      await pocket.transaction((tx) async {
        final txEvents = tx.collection('events');
        await txEvents.patch('event0000001234', {'title': 'outer'});
        try {
          await tx.transaction((nested) async {
            await nested
                .collection('events')
                .patch('event0000001234', {'title': 'nested'});
            throw StateError('rollback nested savepoint');
          });
        } catch (_) {}
        final inside = await txEvents.get('event0000001234');
        if (inside?['title'] != 'outer') {
          throw StateError('Nested savepoint rollback leaked its mutation.');
        }
      });
      if ((await events.get('event0000001234'))?['title'] != 'outer') {
        throw StateError(
            'Outer transaction did not commit after savepoint rollback.');
      }

      // Only one worker transaction session may be active.
      final firstTransaction = Completer<void>();
      final firstStarted = Completer<void>();
      final first = pocket.transaction((tx) async {
        firstStarted.complete();
        await firstTransaction.future;
        await tx
            .collection('events')
            .patch('event0000001234', {'title': 'concurrent'});
      });
      await firstStarted.future;
      Object? secondError;
      try {
        await pocket.transaction((_) async {});
      } catch (error) {
        secondError = error;
      }
      if (secondError is! RemoteLocalPocketException ||
          secondError.code != 'StateError') {
        throw StateError(
            'Concurrent transaction was not rejected: $secondError');
      }
      firstTransaction.complete();
      await first;

      // Query watcher: initial snapshot, commit-only update, digest suppression,
      // rapid resubscribe, and cancellation.
      final snapshots = <List<Map<String, Object?>>>[];
      final initial = Completer<void>();
      final changed = Completer<void>();
      final sub = events
          .query()
          .where('done', eq: false)
          .limit(10)
          .watch()
          .listen((rows) {
        snapshots.add(rows);
        if (snapshots.length == 1) initial.complete();
        if (rows.any((row) => row['title'] == 'watch-updated')) {
          changed.complete();
        }
      });
      await initial.future.timeout(const Duration(seconds: 10));
      final beforeNoop = snapshots.length;
      await events.patch('event0000001234', {'title': 'watch-updated'});
      await changed.future.timeout(const Duration(seconds: 10));
      await Future<void>.delayed(const Duration(milliseconds: 100));
      if (snapshots.length <= beforeNoop) {
        throw StateError('Watcher did not observe committed update.');
      }
      await events.patch('event0000001234', {'title': 'watch-updated'});
      await Future<void>.delayed(const Duration(milliseconds: 100));
      if (snapshots.length != beforeNoop + 1) {
        throw StateError('Watcher emitted a duplicate digest snapshot.');
      }
      await sub.cancel();
      await sub.cancel();

      final resubscribe = <List<Map<String, Object?>>>[];
      final resub = events
          .query()
          .where('done', eq: false)
          .limit(10)
          .watch()
          .listen(resubscribe.add);
      await Future<void>.delayed(const Duration(milliseconds: 200));
      if (resubscribe.isEmpty) {
        throw StateError('Resubscribed watcher did not emit.');
      }
      await resub.cancel();

      // watchOne deletion emits null and cancellation is safe after the event.
      final oneEvents = <Map<String, Object?>?>[];
      final one = events.watchOne('event0000001234').listen(oneEvents.add);
      await Future<void>.delayed(const Duration(milliseconds: 200));
      await events.purge('event0000001234');
      await Future<void>.delayed(const Duration(milliseconds: 200));
      if (!oneEvents.any((item) => item == null)) {
        throw StateError('watchOne did not emit null after purge: $oneEvents');
      }
      await one.cancel();
      await one.cancel();
    } finally {
      await pocket.close();
    }
    report('passed');
  } catch (error, stack) {
    report('failed', '$error\n$stack');
  }
}
