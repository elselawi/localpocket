import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';

/// `Collection.upsert` / `Collection.upsertAll` boundary coverage.
///
/// Pins the "create-or-merge" semantics against the engine: create-when-
/// missing, merge-when-present (unspecified fields preserved, unlike `put`),
/// id validation, required-field-on-create, archived-state preservation,
/// conflict blocking, change events (create vs update), outbox/sync parity,
/// batch last-write-wins, and all-or-nothing rollback.
void main() {
  group('upsert', () {
    test('creates a record when it does not exist (explicit id)', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();
      await col.upsert({'id': id, 'name': 'new'});
      final row = await col.get(id);
      expect(row!['name'], 'new');
      expect(row['archived'], isFalse);
    });

    test('generates an id when none is supplied', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      await col.upsert({'name': 'generated'});
      final ids = await col.query().all().ids();
      expect(ids, hasLength(1));
      expect(ids.single, matches(RegExp(r'^[a-z0-9]{15}$')));
    });

    test('merges only the listed fields into an existing record', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();
      await col.put({'id': id, 'name': 'full', 'qty': 3, 'active': true});

      await col.upsert({'id': id, 'qty': 9});

      final row = await col.get(id);
      expect(row!['name'], 'full', reason: 'untouched field survives');
      expect(row['qty'], 9, reason: 'listed field is updated');
      expect(row['active'], isTrue, reason: 'untouched field survives');
    });

    test('preserves fields that put would clear', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();
      await col.put({'id': id, 'name': 'full', 'qty': 3, 'active': true});

      // put replaces the whole record: qty/active are cleared.
      await col.put({'id': id, 'name': 'replaced'});
      var row = (await col.get(id))!;
      expect(row['qty'], isNull);
      expect(row['active'], isNull);

      // upsert only touches what is listed.
      await col.upsert({'id': id, 'name': 'merged-again', 'qty': 7});
      row = (await col.get(id))!;
      expect(row['name'], 'merged-again');
      expect(row['qty'], 7);
    });

    test('does not throw where patch would on a missing record', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();

      await expectLater(
          col.patch(id, {'qty': 1}), throwsA(isA<RecordNotFoundException>()));

      await col.upsert({'id': id, 'name': 'x', 'qty': 1});
      expect((await col.get(id))!['name'], 'x');
      expect((await col.get(id))!['qty'], 1);
    });

    test('rejects a malformed id', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      await expectLater(
        () => col.upsert({'id': 'BAD', 'name': 'x'}),
        throwsA(isA<ValidationException>()
            .having((e) => e.field, 'field', 'id')
            .having(
                (e) => e.message, 'message', contains('Invalid record id'))),
      );
    });

    test('throws on create when a required field is missing', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();
      await expectLater(
        () => col.upsert({'id': id, 'qty': 1}), // `name` is required
        throwsA(isA<ValidationException>()
            .having((e) => e.message, 'message', 'Field "name" is required.')
            .having((e) => e.field, 'field', 'name')),
      );
      expect(await col.get(id), isNull);
    });

    test('merging into an existing record never trips required validation',
        () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();
      await col.put({'id': id, 'name': 'has-required'});
      // Only optional fields listed — the existing required `name` covers it.
      await col.upsert({'id': id, 'qty': 2});
      expect((await col.get(id))!['qty'], 2);
    });

    test('preserves the archived flag when merging', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();
      await col.put({'id': id, 'name': 'a'});
      // Ack first so archive keeps the row (never-remote archives vanish).
      await pocket.outbox
          .ack('widgets', id, serverUpdated: '2026-01-01 00:00:00.000Z');
      await col.archive(id);

      await col.upsert({'id': id, 'qty': 5});

      final row = await col.get(id);
      expect(row!['archived'], isTrue, reason: 'upsert must not unarchive');
      expect(row['qty'], 5);
    });

    test('is blocked while the record is held in conflict', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();
      await col.put({'id': id, 'name': 'a'});
      await pocket.outbox.setSyncState('widgets', id, SyncState.conflict);

      await expectLater(
        () => col.upsert({'id': id, 'qty': 1}),
        throwsA(isA<ConflictBlockedError>()),
      );
    });

    test('emits create on first write and update on merge', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();
      final events = <RecordChangeEvent>[];
      final sub = col.events.listen(events.add);
      addTearDown(sub.cancel);

      await col.upsert({'id': id, 'name': 'a'});
      await col.upsert({'id': id, 'qty': 2});

      await Future<void>.delayed(Duration.zero);
      final mine = events.where((e) => e.id == id).toList();
      expect(mine, hasLength(2));
      expect(mine[0].action, ChangeAction.create);
      expect(mine[0].origin, ChangeOrigin.local);
      expect(mine[0].changedFields, contains('name'));
      expect(mine[1].action, ChangeAction.update);
      expect(mine[1].changedFields, contains('qty'));
      expect(mine[1].changedFields, isNot(contains('name')));
    });

    test('writes an outbox upsert op and a dirty sync row for a new record',
        () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();

      await col.upsert({'id': id, 'name': 'a'});

      final op = await pocket.outbox.readOp(pocket.db, 'widgets', id);
      expect(op, isNotNull, reason: 'a local create is pushable');
      expect(op!.kind, OutboxKind.upsert);
      final sr = await pocket.outbox.readSyncRow(pocket.db, 'widgets', id);
      expect(sr, isNotNull);
      expect(sr!.syncState, SyncState.dirty);
    });

    test('merging into a synced record dirties it for the next push', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();
      await col.put({'id': id, 'name': 'a'});
      await pocket.outbox
          .ack('widgets', id, serverUpdated: '2026-01-01 00:00:00.000Z');

      await col.upsert({'id': id, 'qty': 3});

      final sr = await pocket.outbox.readSyncRow(pocket.db, 'widgets', id);
      expect(sr!.syncState, SyncState.dirty);
      final op = await pocket.outbox.readOp(pocket.db, 'widgets', id);
      expect(op, isNotNull);
      expect(op!.kind, OutboxKind.upsert);
    });

    test('upsert inside a transaction', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final id = generateRecordId();
      await pocket.transaction((tx) async {
        await tx.collection('widgets').put({'id': id, 'name': 'a'});
        await tx.collection('widgets').upsert({'id': id, 'qty': 4});
      });
      final row = await pocket.collection('widgets').get(id);
      expect(row!['name'], 'a');
      expect(row['qty'], 4);
    });
  });

  group('upsertAll', () {
    test('creates a batch of new records', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final a = generateRecordId();
      final b = generateRecordId();
      await col.upsertAll([
        {'id': a, 'name': 'a'},
        {'id': b, 'name': 'b'},
      ]);
      expect((await col.get(a))!['name'], 'a');
      expect((await col.get(b))!['name'], 'b');
    });

    test('merges existing records and creates new ones in one batch', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final a = generateRecordId();
      final b = generateRecordId();
      await col.put({'id': a, 'name': 'existing-a', 'qty': 1});

      await col.upsertAll([
        {'id': a, 'qty': 100}, // merge: name survives
        {'id': b, 'name': 'new-b'}, // create
      ]);

      final ra = (await col.get(a))!;
      expect(ra['name'], 'existing-a');
      expect(ra['qty'], 100);
      expect((await col.get(b))!['name'], 'new-b');
    });

    test('duplicate ids resolve last-write-wins with merge semantics',
        () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();
      await col.put({'id': id, 'name': 'base', 'qty': 1});

      await col.upsertAll([
        {'id': id, 'qty': 2},
        {'id': id, 'active': true},
      ]);

      final row = (await col.get(id))!;
      expect(row['name'], 'base');
      expect(row['qty'], 2);
      expect(row['active'], isTrue);
    });

    test('is all-or-nothing: a failing entry rolls back the batch', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final a = generateRecordId();
      final b = generateRecordId();
      await col.put({'id': a, 'name': 'a', 'qty': 1});

      await expectLater(
        () => col.upsertAll([
          {'id': a, 'qty': 99},
          {'id': b, 'name': 'should-roll-back'},
          {'id': generateRecordId(), 'qty': 1}, // missing required `name`
        ]),
        throwsA(isA<ValidationException>()),
      );

      // The whole batch rolled back: `a` untouched, `b` never created.
      expect((await col.get(a))!['qty'], 1);
      expect(await col.get(b), isNull);
    });

    test('rolls back invalid ids too', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final a = generateRecordId();
      await col.put({'id': a, 'name': 'a', 'qty': 1});

      await expectLater(
        () => col.upsertAll([
          {'id': a, 'qty': 99},
          {'id': 'NOT-VALID', 'name': 'x'},
        ]),
        throwsA(isA<ValidationException>()),
      );
      expect((await col.get(a))!['qty'], 1);
    });

    test('writes dirty sync rows and outbox ops for every record', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final a = generateRecordId();
      final b = generateRecordId();
      await col.put({'id': a, 'name': 'a'});
      await pocket.outbox
          .ack('widgets', a, serverUpdated: '2026-01-01 00:00:00.000Z');

      await col.upsertAll([
        {'id': a, 'qty': 1},
        {'id': b, 'name': 'b'},
      ]);

      final srA = await pocket.outbox.readSyncRow(pocket.db, 'widgets', a);
      expect(srA!.syncState, SyncState.dirty);
      final opA = await pocket.outbox.readOp(pocket.db, 'widgets', a);
      expect(opA!.kind, OutboxKind.upsert);
      final srB = await pocket.outbox.readSyncRow(pocket.db, 'widgets', b);
      expect(srB!.syncState, SyncState.dirty);
    });
  });
}
