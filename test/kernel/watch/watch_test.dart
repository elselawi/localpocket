import 'package:localpocket/src/kernel/ids.dart';
import 'package:localpocket/src/kernel/local_pocket.dart';
import 'package:localpocket/src/kernel/sync/puller.dart';
import 'package:localpocket/src/kernel/sync/sync_config.dart';
import 'package:localpocket/src/kernel/sync/sync_store.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';
import '../../support/mock_backend.dart';

/// Watch tests.
void main() {
  group('watch', () {
    test('initial emission is current result', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      await col.put(record(id: generateRecordId(), name: 'a'));

      final events = <int>[];
      final sub = col.query().limit(10).watch().listen((items) {
        events.add(items.length);
      });
      addTearDown(sub.cancel);
      await Future<void>.delayed(const Duration(milliseconds: 60));
      expect(events, [1], reason: 'initial emission reflects current data');
    });

    test('a watch with no limit and no all() defaults to 50 rows', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      await col.putAll([
        for (var i = 0; i < 60; i++)
          record(id: generateRecordId(), name: 'n$i'),
      ]);

      final events = <int>[];
      final sub = col.query().watch().listen((items) {
        events.add(items.length);
      });
      addTearDown(sub.cancel);
      await Future<void>.delayed(const Duration(milliseconds: 60));
      expect(events, [50],
          reason: 'fetchSnapshot applies the implicit default limit of 50');

      // .all() lifts the implicit limit.
      final allEvents = <int>[];
      final subAll = col.query().all().watch().listen((items) {
        allEvents.add(items.length);
      });
      addTearDown(subAll.cancel);
      await Future<void>.delayed(const Duration(milliseconds: 60));
      expect(allEvents, [60], reason: '.all() overrides the default limit');
    });

    test('500 writes in 16ms yield one requery one emit', () async {
      final recorder = StatementRecorder();
      final hooks = TestHooks(onQuery: recorder.record);
      final pocket = await openPocket(testHooks: hooks);
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');

      final events = <int>[];
      final sub = col.query().limit(500).watch().listen((items) {
        events.add(items.length);
      });
      addTearDown(sub.cancel);
      await Future<void>.delayed(const Duration(milliseconds: 60));
      expect(events, [0]);

      recorder.statements.clear();
      await pocket.transaction((tx) async {
        for (var i = 0; i < 500; i++) {
          await tx
              .collection('widgets')
              .put(record(id: generateRecordId(), name: 'n$i'));
        }
      });
      await Future<void>.delayed(const Duration(milliseconds: 100));

      expect(recorder.countSelectsLike('widgets'), 1,
          reason: 'a 500-write burst yields exactly one requery');
      expect(events, [0, 500], reason: 'initial + one coalesced emission');
    });

    test('identical snapshot does not emit', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final a = generateRecordId();

      final events = <int>[];
      final sub = col
          .query()
          .where('name', eq: 'x')
          .limit(10)
          .watch()
          .listen((items) => events.add(items.length));
      addTearDown(sub.cancel);
      await Future<void>.delayed(const Duration(milliseconds: 60));

      await col.put(record(id: a, name: 'x'));
      await Future<void>.delayed(const Duration(milliseconds: 80));
      expect(events, [0, 1]);

      // A write that does not change the snapshot must not emit.
      await col.put(record(id: generateRecordId(), name: 'y'));
      await Future<void>.delayed(const Duration(milliseconds: 80));
      expect(events, [0, 1],
          reason: 'identical snapshot digest suppresses emit');
    });

    test('rollback emits nothing', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');

      final events = <int>[];
      final sub = col.query().limit(10).watch().listen((items) {
        events.add(items.length);
      });
      addTearDown(sub.cancel);
      await Future<void>.delayed(const Duration(milliseconds: 60));

      await expectLater(pocket.transaction((tx) async {
        await tx
            .collection('widgets')
            .put(record(id: generateRecordId(), name: 'x'));
        throw StateError('rollback');
      }), throwsA(isA<StateError>()));
      await Future<void>.delayed(const Duration(milliseconds: 80));
      expect(events, [0], reason: 'rolled-back writes emit nothing');
    });

    test('watch one emits only for its id', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final a = generateRecordId();
      final b = generateRecordId();
      await col.put(record(id: a, name: 'a'));

      final events = <String?>[];
      final sub =
          col.watchOne(a).listen((r) => events.add(r?['name'] as String?));
      addTearDown(sub.cancel);
      await Future<void>.delayed(const Duration(milliseconds: 60));
      expect(events, ['a']);

      await col.put(record(id: b, name: 'b'));
      await Future<void>.delayed(const Duration(milliseconds: 80));
      expect(events, ['a'], reason: 'other ids do not trigger this watchOne');

      await col.patch(a, {'name': 'a2'});
      await Future<void>.delayed(const Duration(milliseconds: 80));
      expect(events, ['a', 'a2']);
    });

    test('cancellation stops requeries', () async {
      final recorder = StatementRecorder();
      final hooks = TestHooks(onQuery: recorder.record);
      final pocket = await openPocket(testHooks: hooks);
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');

      final sub = col.query().limit(10).watch().listen((_) {});
      await Future<void>.delayed(const Duration(milliseconds: 60));
      recorder.statements.clear();

      await sub.cancel();
      await col.put(record(id: generateRecordId(), name: 'x'));
      await Future<void>.delayed(const Duration(milliseconds: 100));

      expect(recorder.countSelectsLike('widgets'), 0,
          reason: 'cancelled watchers never requery');
    });

    test('slow consumer skips intermediate snapshots', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');

      final events = <int>[];
      final sub = col.query().limit(100).watch().listen((items) async {
        events.add(items.length);
        // Slow consumer.
        await Future<void>.delayed(const Duration(milliseconds: 30));
      });
      addTearDown(sub.cancel);
      await Future<void>.delayed(const Duration(milliseconds: 60));

      for (var i = 0; i < 10; i++) {
        await col.put(record(id: generateRecordId(), name: 'n$i'));
      }
      await Future<void>.delayed(const Duration(milliseconds: 250));

      expect(events, isNotEmpty);
      expect(events.length, lessThanOrEqualTo(3),
          reason: 'intermediate snapshots are skipped (latest-wins)');
      expect(events.last, 10);
    });

    test('external change hook triggers requery', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();

      final events = <int>[];
      final sub = col.query().limit(10).watch().listen((items) {
        events.add(items.length);
      });
      addTearDown(sub.cancel);
      await Future<void>.delayed(const Duration(milliseconds: 60));

      await col.put(record(id: id, name: 'x'));
      await Future<void>.delayed(const Duration(milliseconds: 80));
      expect(events, [0, 1]);

      // External change with unchanged data: requery runs, digest suppresses emit.
      pocket.notifyExternalChange({'widgets'});
      await Future<void>.delayed(const Duration(milliseconds: 80));
      expect(events, [0, 1]);

      // External change that actually modified data: re-emission happens.
      await pocket.db
          .execute("UPDATE widgets SET name = 'z' WHERE id = ?", [id]);
      pocket.notifyExternalChange({'widgets'});
      await Future<void>.delayed(const Duration(milliseconds: 80));
      expect(events.length, 3,
          reason: 'external change triggered a re-emission');
      expect(events.last, 1);
    });
  });

  group('watch cancellation, errors, and lifecycle', () {
    test('a watch can be reused after cancellation', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      await col.put(record(id: generateRecordId(), name: 'x'));

      final first = <int>[];
      final sub1 = col
          .query()
          .limit(10)
          .watch()
          .listen((items) => first.add(items.length));
      await Future<void>.delayed(const Duration(milliseconds: 60));
      expect(first, [1]);
      await sub1.cancel();

      // A fresh watch on the same query reflects the current state.
      final second = <int>[];
      final sub2 = col
          .query()
          .limit(10)
          .watch()
          .listen((items) => second.add(items.length));
      addTearDown(sub2.cancel);
      await Future<void>.delayed(const Duration(milliseconds: 60));
      expect(second, [1]);
    });

    test('multiple independent watches each receive events', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final e1 = <int>[];
      final e2 = <int>[];
      final s1 = col.query().limit(10).watch().listen((i) => e1.add(i.length));
      final s2 = col.query().limit(10).watch().listen((i) => e2.add(i.length));
      addTearDown(s1.cancel);
      addTearDown(s2.cancel);
      await Future<void>.delayed(const Duration(milliseconds: 60));

      await col.put(record(id: generateRecordId(), name: 'x'));
      await Future<void>.delayed(const Duration(milliseconds: 100));
      expect(e1, [0, 1]);
      expect(e2, [0, 1]);
    });

    test('a query error is emitted, then a later refresh succeeds', () async {
      var failQuery = true;
      final hooks = TestHooks(onQuery: (sql) {
        if (failQuery && sql.contains('FROM "widgets"')) {
          throw StateError('query boom');
        }
      });
      final pocket = await openPocket(testHooks: hooks);
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final errors = <Object?>[];
      final events = <int>[];
      final sub = col.query().limit(10).watch().listen(
            (items) => events.add(items.length),
            onError: errors.add,
          );
      addTearDown(sub.cancel);
      await Future<void>.delayed(const Duration(milliseconds: 80));
      expect(errors, hasLength(1), reason: 'initial refresh errored');

      failQuery = false;
      await col.put(record(id: generateRecordId(), name: 'x'));
      await Future<void>.delayed(const Duration(milliseconds: 120));
      expect(errors, hasLength(1), reason: 'no further errors');
      expect(events, [1], reason: 'the successful refresh emits the result');
    });

    test('cancelling before a pending refresh fires emits nothing', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final events = <int>[];
      final errors = <Object?>[];
      final sub = col.query().limit(10).watch().listen(
            (items) => events.add(items.length),
            onError: errors.add,
          );
      await Future<void>.delayed(const Duration(milliseconds: 60));
      expect(events, [0]);

      // A change schedules a 16ms refresh; cancel before it fires.
      await col.put(record(id: generateRecordId(), name: 'x'));
      await sub.cancel();
      await col.put(record(id: generateRecordId(), name: 'y'));
      await Future<void>.delayed(const Duration(milliseconds: 120));
      expect(events, [0], reason: 'no post-cancel events');
      expect(errors, isEmpty, reason: 'no post-cancel errors');
    });

    test('database close while a watch is active causes no unhandled error',
        () async {
      final pocket = await openPocket();
      final col = pocket.collection('widgets');
      final errors = <Object?>[];
      final sub =
          col.query().limit(10).watch().listen((_) {}, onError: errors.add);
      await Future<void>.delayed(const Duration(milliseconds: 60));
      await pocket.close();
      await Future<void>.delayed(const Duration(milliseconds: 80));
      expect(errors, isEmpty,
          reason: 'closing the database must not surface watch errors');
      // The subscription is still cancelled cleanly after close.
      await sub.cancel();
    });

    test('watchOne emits null on deletion and the record again on reappearance',
        () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();
      await col.put(record(id: id, name: 'v1'));

      final names = <Object?>[];
      final sub = col.watchOne(id).listen((r) => names.add(r?['name']));
      addTearDown(sub.cancel);
      await Future<void>.delayed(const Duration(milliseconds: 60));
      expect(names, ['v1']);

      await col.purge(id);
      await Future<void>.delayed(const Duration(milliseconds: 80));
      expect(names, ['v1', null], reason: 'deletion emits a null snapshot');

      await col.put(record(id: id, name: 'v2'));
      await Future<void>.delayed(const Duration(milliseconds: 80));
      expect(names, ['v1', null, 'v2'],
          reason: 're-insertion emits the record again');
    });
  });

  group('hidden and archive watch invalidation', () {
    test(
        'a default-scope query emits removal when a row becomes hidden and '
        'restoration when visible again', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();
      await col.put(record(id: id, name: 'x'));
      await pocket.outbox
          .ack('widgets', id, serverUpdated: '2026-01-01 00:00:00.000Z');

      final events = <int>[];
      final sub = col
          .query()
          .limit(10)
          .watch()
          .listen((items) => events.add(items.length));
      addTearDown(sub.cancel);
      await Future<void>.delayed(const Duration(milliseconds: 60));
      expect(events, [1]);

      await pocket.db
          .execute('UPDATE widgets SET hidden = 1 WHERE id = ?', [id]);
      pocket.notifyExternalChange({'widgets'});
      await Future<void>.delayed(const Duration(milliseconds: 100));
      expect(events, [1, 0], reason: 'hidden rows leave the default scope');

      await pocket.db
          .execute('UPDATE widgets SET hidden = 0 WHERE id = ?', [id]);
      pocket.notifyExternalChange({'widgets'});
      await Future<void>.delayed(const Duration(milliseconds: 100));
      expect(events, [1, 0, 1], reason: 'unhidden rows re-enter the scope');
    });

    test('Puller.markHidden drives the same removal', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();
      await col.put(record(id: id, name: 'x'));
      await pocket.outbox
          .ack('widgets', id, serverUpdated: '2026-01-01 00:00:00.000Z');

      final events = <int>[];
      final sub = col
          .query()
          .limit(10)
          .watch()
          .listen((items) => events.add(items.length));
      addTearDown(sub.cancel);
      await Future<void>.delayed(const Duration(milliseconds: 60));
      expect(events, [1]);

      final puller = Puller(pocket, MockSyncBackend(), const SyncConfig(),
          SyncStore(pocket, 'test'));
      await puller.markHidden('widgets', id);
      await Future<void>.delayed(const Duration(milliseconds: 100));
      expect(events, [1, 0],
          reason: 'markHidden publishes a change that removes the row');
      final hidden = (await pocket.db
              .rawQuery('SELECT hidden FROM widgets WHERE id = ?', [id]))
          .single;
      expect(hidden['hidden'], 1);
    });

    test(
        'archive and restore drive default-scope watch removal and '
        'restoration', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();
      await col.put(record(id: id, name: 'x'));
      await pocket.outbox
          .ack('widgets', id, serverUpdated: '2026-01-01 00:00:00.000Z');

      final events = <int>[];
      final sub = col
          .query()
          .limit(10)
          .watch()
          .listen((items) => events.add(items.length));
      addTearDown(sub.cancel);
      await Future<void>.delayed(const Duration(milliseconds: 60));
      expect(events, [1]);

      await col.archive(id);
      await Future<void>.delayed(const Duration(milliseconds: 100));
      expect(events, [1, 0]);

      await col.restore(id);
      await Future<void>.delayed(const Duration(milliseconds: 100));
      expect(events, [1, 0, 1]);
    });

    test('a hidden dirty row is still removed from the default scope',
        () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();
      await col.put(record(id: id, name: 'x')); // dirty, unsynced

      final events = <int>[];
      final sub = col
          .query()
          .limit(10)
          .watch()
          .listen((items) => events.add(items.length));
      addTearDown(sub.cancel);
      await Future<void>.delayed(const Duration(milliseconds: 60));
      expect(events, [1]);

      await pocket.db
          .execute('UPDATE widgets SET hidden = 1 WHERE id = ?', [id]);
      pocket.notifyExternalChange({'widgets'});
      await Future<void>.delayed(const Duration(milliseconds: 100));
      expect(events, [1, 0],
          reason: 'hidden removes even unsynced dirty rows from the scope');
    });

    test('watchOne still reports a hidden record (no hidden filter)', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();
      await col.put(record(id: id, name: 'x'));
      await pocket.outbox
          .ack('widgets', id, serverUpdated: '2026-01-01 00:00:00.000Z');

      final names = <Object?>[];
      final sub = col.watchOne(id).listen((r) => names.add(r?['name']));
      addTearDown(sub.cancel);
      await Future<void>.delayed(const Duration(milliseconds: 60));
      expect(names, ['x']);

      await pocket.db
          .execute('UPDATE widgets SET hidden = 1 WHERE id = ?', [id]);
      pocket.notifyExternalChange({'widgets'});
      await Future<void>.delayed(const Duration(milliseconds: 100));
      expect(names, ['x'],
          reason: 'watchOne does not filter hidden rows and emits no null');
    });
  });
}
