import 'dart:convert';

import 'package:localpocket/src/internal/raw_surface.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';

/// Tier-1 performance work:
/// - `Collection.patchAll` — coalesced multi-patch in one transaction.
/// - PointReadCache isolation — structural deep copy replaces the JSON
///   round-trip; cached records must never alias caller mutations, and
///   nested maps/lists must be isolated too.
void main() {
  const t0 = '2026-01-01 00:00:00.000Z';

  group('Collection.patchAll', () {
    late LocalPocket pocket;

    setUp(() async {
      pocket = await openPocket();
    });

    tearDown(() => pocket.close());

    Future<String> seed(String name, int qty) async {
      final id = generateRecordId();
      await pocket.collection('widgets').put(
            record(id: id, name: name, qty: qty),
          );
      return id;
    }

    test('patches many records in one call', () async {
      final a = await seed('a', 1);
      final b = await seed('b', 2);
      final c = await seed('c', 3);

      await pocket.collection('widgets').patchAll({
        a: {'qty': 10},
        b: {'name': 'b2'},
        c: {'qty': 30, 'name': 'c3'},
      });

      final col = pocket.collection('widgets');
      expect((await col.get(a))!['qty'], 10);
      expect((await col.get(b))!['name'], 'b2');
      final cDoc = await col.get(c);
      expect(cDoc!['qty'], 30);
      expect(cDoc['name'], 'c3');
    });

    test('one coalesced ChangeSet for the whole batch', () async {
      final a = await seed('a', 1);
      final b = await seed('b', 2);

      final changes = <ChangeSet>[];
      // Drain the seeds' queued emissions first: a broadcast stream delivers
      // asynchronously and listen() would otherwise also receive them.
      await pumpEventQueue();
      // Subscribe after the seed writes so only the batch's emissions count.
      final sub = pocket.changes.listen(changes.add);
      addTearDown(sub.cancel);

      await pocket.collection('widgets').patchAll({
        a: {'qty': 12},
        b: {'qty': 23},
      });
      await pumpEventQueue();

      final widgetSets = changes.where((cs) => cs.store == 'widgets').toList();
      expect(widgetSets, hasLength(1),
          reason: 'the batch commits as one coalesced ChangeSet');
      expect(widgetSets.single.ids, {a, b});
    });

    test('record events still fire per record when watched', () async {
      final a = await seed('a', 1);
      final events = <RecordChangeEvent>[];
      final sub = pocket.collection('widgets').events.listen(events.add);
      addTearDown(sub.cancel);

      await pocket.collection('widgets').patchAll({
        a: {'qty': 42},
      });
      await pumpEventQueue();

      final updates = events
          .where((e) => e.action == ChangeAction.update && e.id == a)
          .toList();
      expect(updates, hasLength(1));
      expect(updates.single.changedFields, {'qty'});
    });

    test('each entry dirties its own outbox op with merged payload', () async {
      final a = await seed('a', 1);
      await pocket.outbox.ack('widgets', a, serverUpdated: t0);

      await pocket.collection('widgets').patchAll({
        a: {'qty': 7},
      });

      final op = await pocket.outbox.readOp(pocket.db, 'widgets', a);
      expect(op, isNotNull);
      expect(op!.baseUpdated, t0,
          reason: 'first-dirt base captured exactly like a single patch');
      final decoded = jsonDecode(op.payloadJson) as Map<String, Object?>;
      expect(decoded['qty'], 7);
      expect(decoded['name'], 'a');

      final sr = await pocket.outbox.readSyncRow(pocket.db, 'widgets', a);
      expect(sr!.syncState, SyncState.dirty);
    });

    test('empty map is a no-op', () async {
      await pocket.collection('widgets').patchAll(const {});
      expect(await pocket.collection('widgets').query().count(), 0);
    });

    test('unknown id throws RecordNotFoundException', () async {
      await expectLater(
        pocket.collection('widgets').patchAll({
          'nonexistent12345': {'qty': 1}
        }),
        throwsA(isA<RecordNotFoundException>()),
      );
    });

    test('validation failure aborts the whole batch atomically', () async {
      final good = await seed('good', 1);
      // A patch that violates the schema kind (qty must be int).
      final bad = await seed('bad', 2);

      await expectLater(
        pocket.collection('widgets').patchAll({
          good: {'qty': 100},
          bad: {'qty': 'not-an-int'},
        }),
        throwsA(
            isA<ValidationException>().having((e) => e.field, 'field', 'qty')),
      );

      // The earlier successful entry rolled back with the batch.
      expect((await pocket.collection('widgets').get(good))!['qty'], 1);
    });

    test('works inside an explicit transaction without nesting errors',
        () async {
      final a = await seed('a', 1);
      final b = await seed('b', 2);

      await pocket.transaction((tx) async {
        await tx.collection('widgets').patchAll({
          a: {'qty': 5},
          b: {'qty': 6},
        });
      });

      expect((await pocket.collection('widgets').get(a))!['qty'], 5);
      expect((await pocket.collection('widgets').get(b))!['qty'], 6);
    });
  });

  group('PointReadCache isolation', () {
    late LocalPocket pocket;

    setUp(() async {
      pocket = await openPocket();
    });

    tearDown(() => pocket.close());

    test('cached record does not alias mutations of nested values', () async {
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(
            id: id,
            name: 'iso',
            meta: {
              'deep': {'n': 1}
            },
            tags: [1, 2, 3],
          ));

      // Prime the cache.
      final first = await pocket.collection('widgets').get(id);
      (first!['meta'] as Map)['deep']['n'] = 999;
      (first['tags'] as List).add(4);

      // Second read must see pristine data (cache returned a fresh copy).
      final second = await pocket.collection('widgets').get(id);
      expect((second!['meta'] as Map)['deep']['n'], 1);
      expect(second['tags'], [1, 2, 3]);
    });

    test('mutating a returned record does not corrupt the cache', () async {
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'original'));

      final doc = (await pocket.collection('widgets').get(id))!;
      doc['name'] = 'hacked';

      final again = await pocket.collection('widgets').get(id);
      expect(again!['name'], 'original');
    });
  });
}

Future<void> pumpEventQueue() async {
  await Future<void>.delayed(Duration.zero);
  await Future<void>.delayed(Duration.zero);
}
