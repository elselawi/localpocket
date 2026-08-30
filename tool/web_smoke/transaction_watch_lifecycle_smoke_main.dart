import 'dart:async';
import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'package:localpocket/src/core/schema.dart';
import 'package:localpocket/src/web/facade.dart';

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
    final articlesSchema = CollectionSchema<Object?>(
      name: 'articles',
      version: 1,
      fields: [
        Field.text('title', required: true),
        Field.text('body'),
      ],
      fts: const FtsSpec(['title', 'body']),
    );
    final pocket = await LocalPocket.open(
      path:
          'transaction_watch_lifecycle_${DateTime.now().microsecondsSinceEpoch}',
      stores: [schema, articlesSchema],
    );
    final events = pocket.collection('events');
    final articles = pocket.collection('articles');
    try {
      await events.put({
        'id': 'event0000001234',
        'title': 'initial',
        'done': false,
      });

      // FTS corpus for transaction search parity (Task 2.1). The archived row
      // is excluded by default and included by .includeArchived(); all() and
      // includeHidden() must also be exposed by the tx search builder with the
      // same compiled-query semantics as the ordinary web search builder.
      await articles.putAll([
        {
          'id': 'art000000000001',
          'title': 'SQLite full-text search',
          'body': 'database performance and indexing',
        },
        {
          'id': 'art000000000002',
          'title': 'Dart on the web',
          'body': 'database engines run in a worker',
        },
        {
          'id': 'art000000000003',
          'title': 'Archived record',
          'body': 'database terms to count',
        },
      ]);
      await articles.archive('art000000000003');

      // Transaction search parity (Task 2.1): the tx search builder must
      // expose the same query-scope options as the ordinary web search builder
      // (limit, all, includeArchived, includeHidden) and, for an identical
      // option set, produce the same ranked ids through the compiled-query
      // plan into the active transaction session.
      List<String> idsOf(List<dynamic> hits) =>
          hits.map((h) => (h as dynamic).id as String).toList();
      Future<List<String>> normalSearch({
        required int? limit,
        required bool archived,
        required bool hidden,
      }) async {
        var b = articles.search('database');
        if (archived) b = b.includeArchived();
        if (hidden) b = b.includeHidden();
        if (limit == null) {
          b = b.all();
        } else {
          b = b.limit(limit);
        }
        return idsOf(await b.fetch());
      }

      await pocket.transaction((tx) async {
        Future<List<String>> txSearch({
          required int? limit,
          required bool archived,
          required bool hidden,
        }) async {
          var b = tx.search('articles', 'database');
          if (archived) b = b.includeArchived();
          if (hidden) b = b.includeHidden();
          if (limit == null) {
            b = b.all();
          } else {
            b = b.limit(limit);
          }
          return idsOf(await b.fetch());
        }

        for (final (limit, archived, hidden) in [
          (10, false, false),
          (10, true, false),
          (10, false, true),
          (10, true, true),
          (null, true, true),
        ]) {
          final normal = await normalSearch(
              limit: limit, archived: archived, hidden: hidden);
          final inTx =
              await txSearch(limit: limit, archived: archived, hidden: hidden);
          if (inTx.length != normal.length ||
              inTx.toSet().difference(normal.toSet()).isNotEmpty) {
            throw StateError(
                'tx search parity mismatch for limit=$limit archived=$archived '
                'hidden=$hidden: tx=$inTx normal=$normal');
          }
        }
        if ((await tx.search('articles', 'zzznonexistent').limit(5).fetch())
            .isNotEmpty) {
          throw StateError('tx search absent term must return no hits.');
        }
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

      // Repeated nested-transaction failures must not leak savepoint
      // bookkeeping. The worker generates savepoint names from the active
      // savepoint count (`lp_sp_wire_${sess.savepoints.length}`) and must
      // release each rolled-back savepoint; otherwise stale names accumulate
      // and a later nested transaction collides with a recycled name.
      await pocket.transaction((tx) async {
        final txEvents = tx.collection('events');
        await txEvents.patch('event0000001234', {'title': 'repeated-outer'});
        for (var i = 0; i < 5; i++) {
          try {
            await tx.transaction((nested) async {
              await nested
                  .collection('events')
                  .patch('event0000001234', {'title': 'repeated-nested-$i'});
              throw StateError('force nested rollback $i');
            });
          } catch (_) {
            // expected: the nested savepoint rolled back and released
          }
        }
        // After many rollbacks the next nested transaction must still work:
        // this fails if a stale savepoint name was recycled.
        await tx.transaction((nested) async {
          await nested
              .collection('events')
              .patch('event0000001234', {'title': 'repeated-success'});
        });
        final inside = await txEvents.get('event0000001234');
        if (inside?['title'] != 'repeated-success') {
          throw StateError(
              'Nested transaction failed after repeated rollbacks: $inside');
        }
      });
      if ((await events.get('event0000001234'))?['title'] !=
          'repeated-success') {
        throw StateError(
            'Outer transaction did not commit repeated nested work.');
      }

      // Only one interactive write session may be active: a second session
      // would queue behind the held-open first one and never begin, so the
      // kernel rejects it with a typed error.
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
      if (secondError is! StateError ||
          !(secondError.message.contains('already active'))) {
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
