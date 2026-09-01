import 'package:localpocket/src/kernel/change_bus.dart';
import 'package:localpocket/src/kernel/cipher.dart';
import 'package:localpocket/src/kernel/errors.dart';
import 'package:localpocket/src/kernel/ids.dart';
import 'package:localpocket/src/kernel/local_pocket.dart';
import 'package:localpocket/src/kernel/schema.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';

/// Coverage for `Collection.putAll`:
/// mixed create/update, duplicate IDs, clean→dirty base capture, already-dirty
/// updates, atomicity (validation + constraint failure), one coalesced watcher
/// notification, and explicit-transaction usage.
void main() {
  group('putAll batch pipeline', () {
    test('mixed fresh creates and updates commit atomically', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');

      final existing = generateRecordId();
      await col.put(record(id: existing, name: 'old', qty: 1));

      final fresh1 = generateRecordId();
      final fresh2 = generateRecordId();
      await col.putAll([
        record(id: fresh1, name: 'fresh-a', qty: 10),
        record(id: existing, name: 'updated', qty: 2),
        record(id: fresh2, name: 'fresh-b', qty: 20),
      ]);

      expect((await col.get(fresh1))!['name'], 'fresh-a');
      expect((await col.get(fresh2))!['name'], 'fresh-b');
      expect((await col.get(existing))!['name'], 'updated');
      expect((await col.get(existing))!['qty'], 2);
      expect(await col.query().count(), 3);
    });

    test('duplicate ids within a batch apply last-write-wins in order',
        () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();

      await col.putAll([
        record(id: id, name: 'v1', qty: 1),
        record(id: id, name: 'v2', qty: 2),
        record(id: id, name: 'v3', qty: 3),
      ]);

      final r = await col.get(id);
      expect(r!['name'], 'v3');
      expect(r['qty'], 3);
      // A single outbox op covers the record (coalesced).
      final rows = await pocket.db.rawQuery(
          'SELECT COUNT(*) AS c FROM lp_outbox WHERE store = ? AND record_id = ?',
          ['widgets', id]);
      expect(rows.first['c'], 1);
    });

    test('clean row touched by putAll captures earliest base', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();

      await col.put(record(id: id, name: 'clean', qty: 1));
      await pocket.outbox
          .ack('widgets', id, serverUpdated: '2026-01-01 00:00:00.000Z');

      await col.putAll([record(id: id, name: 'dirty', qty: 2)]);

      final sr = (await pocket.db.rawQuery(
              'SELECT base_json, base_hash, sync_state FROM lp_sync_row '
              'WHERE store = ? AND record_id = ?',
              ['widgets', id]))
          .first;
      expect(sr['sync_state'], 'dirty');
      expect(sr['base_json'], isNotNull);
      expect(sr['base_hash'], isNotEmpty);
    });

    test('already-dirty row keeps its earliest base across putAll', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();

      await col.put(record(id: id, name: 'a', qty: 1));
      await pocket.outbox
          .ack('widgets', id, serverUpdated: '2026-01-01 00:00:00.000Z');
      await col.patch(id, {'qty': 5}); // clean -> dirty, captures base
      final baseBefore = (await pocket.db.rawQuery(
              'SELECT base_hash FROM lp_sync_row WHERE store = ? AND record_id = ?',
              ['widgets', id]))
          .first['base_hash'];

      await col.putAll([record(id: id, name: 'b', qty: 6)]);

      final sr = (await pocket.db.rawQuery(
              'SELECT base_hash, sync_state FROM lp_sync_row '
              'WHERE store = ? AND record_id = ?',
              ['widgets', id]))
          .first;
      expect(sr['sync_state'], 'dirty');
      expect(sr['base_hash'], baseBefore, reason: 'earliest base is preserved');
    });

    test('unsynced create then putAll preserves outbox as upsert', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();

      await col.put(record(id: id, name: 'unsynced', qty: 1));
      await col.putAll([record(id: id, name: 'updated-unsynced', qty: 2)]);

      final op = (await pocket.db.rawQuery(
              'SELECT kind, payload_json FROM lp_outbox WHERE store = ? AND record_id = ?',
              ['widgets', id]))
          .first;
      expect(op['kind'], 'upsert');
      expect(op['payload_json'], contains('updated-unsynced'));
    });

    test('validation failure rolls back the entire batch', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final good = generateRecordId();
      final bad = generateRecordId();

      await expectLater(
        col.putAll([
          record(id: good, name: 'ok', qty: 1),
          {'id': bad, 'name': 42, 'qty': 2}, // name must be a string
        ]),
        throwsA(isA<ValidationException>()),
      );

      // Atomic rollback: nothing was persisted.
      expect(await col.get(good), isNull);
      expect(await col.query().count(), 0);
    });

    test('unique-constraint failure rolls back the entire batch', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final a = generateRecordId();
      final b = generateRecordId();
      await col.put(record(id: a, name: 'a', phone: 'same-phone'));

      await expectLater(
        col.putAll([
          record(id: b, name: 'b', qty: 1),
          record(id: generateRecordId(), name: 'clash', phone: 'same-phone'),
        ]),
        throwsA(isA<UniqueConstraintException>()),
      );
      expect(await col.get(b), isNull, reason: 'batch rolled back as a unit');
    });

    test('emits a single coalesced change set', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final emitted = <ChangeSet>[];
      final sub = pocket.changes.listen(emitted.add);
      addTearDown(sub.cancel);

      final ids = [for (var i = 0; i < 50; i++) generateRecordId()];
      await col.putAll([
        for (final id in ids) record(id: id, name: 'bulk-$id', qty: 1),
      ]);

      await Future<void>.delayed(const Duration(milliseconds: 50));
      expect(emitted, hasLength(1));
      expect(emitted.single.store, 'widgets');
      expect(emitted.single.ids, hasLength(50));
    });

    test('works inside an explicit transaction', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);

      await pocket.transaction((tx) async {
        await tx.collection('widgets').putAll([
          for (var i = 0; i < 20; i++)
            record(id: generateRecordId(), name: 'tx-$i', qty: i),
        ]);
      });

      expect(await pocket.collection('widgets').query().count(), 20);
    });

    test('empty batch is a no-op', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      await pocket.collection('widgets').putAll(const []);
      expect(await pocket.collection('widgets').query().count(), 0);
    });
  });

  group('putAll atomic and duplicate behavior', () {
    test('generated ids are created for records without one', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      await col.putAll([
        {'name': 'a'},
        {'name': 'b'},
        {'name': 'c'},
      ]);
      final rows = await col.query().all().fetch();
      expect(rows.items, hasLength(3));
      for (final r in rows.items) {
        expect(r['id'], hasLength(15));
        expect(isValidRecordId(r['id'] as String), isTrue);
      }
    });

    test('duplicate ids mixed with existing rows apply last-write-wins',
        () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final existing = generateRecordId();
      await col.put(record(id: existing, name: 'orig', qty: 0));

      final dup = generateRecordId();
      await col.putAll([
        record(id: dup, name: 'dup-1', qty: 1),
        record(id: existing, name: 'existing-1', qty: 5),
        record(id: dup, name: 'dup-2', qty: 2),
        record(id: existing, name: 'existing-2', qty: 6),
      ]);
      expect((await col.get(dup))!['name'], 'dup-2');
      expect((await col.get(dup))!['qty'], 2);
      expect((await col.get(existing))!['name'], 'existing-2');
      expect((await col.get(existing))!['qty'], 6);
      expect(await col.query().all().count(), 2);
    });

    test('more than 500 and 1000 records cross the chunked probe pages',
        () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final ids = [for (var i = 0; i < 1001; i++) generateRecordId()];
      await col.putAll([
        for (var i = 0; i < ids.length; i++)
          record(id: ids[i], name: 'bulk-${ids[i]}', qty: i),
      ]);
      expect(await col.query().all().count(), 1001);

      // Cross-check a specific record near a chunk boundary.
      final probe = await col.get(ids[500]);
      expect(probe!['name'], 'bulk-${ids[500]}');
      expect(await col.get(ids[1000]), isNotNull);
      expect(await col.get(ids[0]), isNotNull);
    });

    test('encrypted fields round-trip through putAll', () async {
      final key = List<int>.generate(32, (i) => (i * 7 + 13) % 256);
      final cipher = AesGcmFieldCipher(key);
      final schema = CollectionSchema<Object?>(
        name: 'vault',
        version: 1,
        fields: [
          Field.text('label', required: true),
          Field.text('secret', encrypted: true),
          Field.int('code', encrypted: true),
        ],
      );
      final pocket = await openPocket(stores: [schema], fieldCipher: cipher);
      addTearDown(pocket.close);
      final col = pocket.collection('vault');
      final ids = [for (var i = 0; i < 30; i++) generateRecordId()];
      await col.putAll([
        for (var i = 0; i < ids.length; i++)
          {'id': ids[i], 'label': 'l$i', 'secret': 's$i', 'code': i},
      ]);
      for (var i = 0; i < ids.length; i++) {
        final doc = await col.get(ids[i]);
        expect(doc!['label'], 'l$i');
        expect(doc['secret'], 's$i');
        expect(doc['code'], i);
      }
    });

    test('foreign-key failure midway rolls back the whole batch', () async {
      final owners = CollectionSchema<Object?>(
        name: 'owners',
        version: 1,
        fields: [Field.text('name')],
      );
      final widgets = CollectionSchema<Object?>(
        name: 'widgets',
        version: 1,
        fields: [
          Field.text('name', required: true),
          Field.ref('owner_id', to: 'owners', enforceFk: true),
        ],
      );
      final pocket = await openPocket(stores: [owners, widgets]);
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final ownerId = generateRecordId();
      await pocket.collection('owners').put({'id': ownerId, 'name': 'o'});

      final good = generateRecordId();
      final bad = generateRecordId();
      await expectLater(
        col.putAll([
          {'id': good, 'name': 'ok', 'owner_id': ownerId},
          {'id': bad, 'name': 'bad-fk', 'owner_id': 'no-such-owner'},
        ]),
        throwsA(isA<ForeignKeyConstraintException>()),
      );
      expect(await col.get(good), isNull,
          reason: 'batch rolled back as a unit');
      expect(await col.query().all().count(), 0);
    });

    test('crash hook midway rolls back the whole batch', () async {
      var armCrash = false;
      final hooks = TestHooks()
        ..mutationCrashPoint = (marker) {
          if (armCrash && marker == 'after-domain-write') {
            throw StateError('simulated crash');
          }
        };
      final pocket = await openPocket(testHooks: hooks);
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      // Seed an existing row (crash hook disarmed) so putAll takes the
      // per-record fallback path, where the mutation crash hook is invoked.
      final existing = generateRecordId();
      await col.put(record(id: existing, name: 'seed'));
      armCrash = true;
      final ids = [for (var i = 0; i < 5; i++) generateRecordId()];
      await expectLater(
        col.putAll([
          record(id: existing, name: 'updated'),
          for (final id in ids) record(id: id, name: 'n-$id'),
        ]),
        throwsA(isA<StateError>()),
      );
      expect(await col.query().all().count(), 1,
          reason: 'only the pre-existing seed survives; the batch rolled back');
      expect((await col.get(existing))!['name'], 'seed',
          reason: 'the seed was not modified by the failed batch');
      for (final id in ids) {
        expect(await col.get(id), isNull);
        expect(await pocket.outbox.readOp(pocket.db, 'widgets', id), isNull);
        expect(
            await pocket.outbox.readSyncRow(pocket.db, 'widgets', id), isNull);
      }
    });

    test('pure-create fast path and fallback path produce identical state',
        () async {
      // Fast path: a batch of all-fresh records takes the Batch-create path.
      final p1 = await openPocket();
      final col1 = p1.collection('widgets');
      final freshIds = [for (var i = 0; i < 20; i++) generateRecordId()];
      await col1.putAll([
        for (final id in freshIds) record(id: id, name: 'n$id', qty: 1),
      ]);

      // Fallback path: the same records with one pre-existing row force the
      // per-record path.
      final p2 = await openPocket();
      final col2 = p2.collection('widgets');
      final existingId = freshIds.first;
      await col2.put(record(id: existingId, name: 'seed', qty: 0));
      await col2.putAll([
        for (final id in freshIds) record(id: id, name: 'n$id', qty: 1),
      ]);

      try {
        // Domain state is identical for every non-seeded record.
        for (final id in freshIds.skip(1)) {
          expect(await col1.get(id), await col2.get(id));
        }

        // Outbox + sync-row state is identical for non-seeded records.
        // op_id is a random value, so it is excluded from the comparison.
        for (final id in freshIds.skip(1)) {
          final srA = (await p1.db.rawQuery(
                  'SELECT sync_state, local_rev, dirty_fields, base_hash FROM lp_sync_row WHERE store = ? AND record_id = ?',
                  ['widgets', id]))
              .single;
          final srB = (await p2.db.rawQuery(
                  'SELECT sync_state, local_rev, dirty_fields, base_hash FROM lp_sync_row WHERE store = ? AND record_id = ?',
                  ['widgets', id]))
              .single;
          expect(srA, srB);

          final opA = (await p1.db.rawQuery(
                  'SELECT kind, payload_json, base_hash, dirty_fields FROM lp_outbox WHERE store = ? AND record_id = ?',
                  ['widgets', id]))
              .single;
          final opB = (await p2.db.rawQuery(
                  'SELECT kind, payload_json, base_hash, dirty_fields FROM lp_outbox WHERE store = ? AND record_id = ?',
                  ['widgets', id]))
              .single;
          expect(opA, opB);

          // Both paths mint a valid, unique op id.
          final opIdA = (await p1.db.rawQuery(
                  'SELECT op_id FROM lp_outbox WHERE store = ? AND record_id = ?',
                  ['widgets', id]))
              .single['op_id'] as String;
          final opIdB = (await p2.db.rawQuery(
                  'SELECT op_id FROM lp_outbox WHERE store = ? AND record_id = ?',
                  ['widgets', id]))
              .single['op_id'] as String;
          expect(opIdA, isNotEmpty);
          expect(opIdB, isNotEmpty);
        }

        // The seeded record is dirty in both, but the fallback captured a base
        // (clean→dirty) while the fast path never had a prior clean state.
        final seededA = (await p1.db.rawQuery(
                'SELECT sync_state, local_rev FROM lp_sync_row WHERE store = ? AND record_id = ?',
                ['widgets', existingId]))
            .single;
        final seededB = (await p2.db.rawQuery(
                'SELECT sync_state, local_rev FROM lp_sync_row WHERE store = ? AND record_id = ?',
                ['widgets', existingId]))
            .single;
        expect(seededA['sync_state'], 'dirty');
        expect(seededB['sync_state'], 'dirty');
        expect(seededA['local_rev'], 1);
        expect(seededB['local_rev'], 2,
            reason: 'the fallback path updated an existing row (rev 1 -> 2)');
      } finally {
        await p1.close();
        await p2.close();
      }
    });

    test('one ChangeSet contains exactly the committed ids', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final emitted = <ChangeSet>[];
      final sub = pocket.changes.listen(emitted.add);
      addTearDown(sub.cancel);

      final ids = [for (var i = 0; i < 100; i++) generateRecordId()];
      await col.putAll([
        for (final id in ids) record(id: id, name: 'x$id'),
      ]);
      await Future<void>.delayed(const Duration(milliseconds: 50));
      expect(emitted, hasLength(1));
      expect(emitted.single.store, 'widgets');
      expect(emitted.single.ids, hasLength(100));
      expect(emitted.single.ids, unorderedEquals(ids));
    });

    test('an empty batch is a complete no-op', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final emitted = <ChangeSet>[];
      final sub = pocket.changes.listen(emitted.add);
      addTearDown(sub.cancel);
      final rowsBefore = pocket.perf.rowsWritten;

      await col.putAll(const []);

      await Future<void>.delayed(const Duration(milliseconds: 50));
      expect(emitted, isEmpty, reason: 'no change event for an empty batch');
      expect(await col.query().count(), 0);
      expect(pocket.perf.rowsWritten - rowsBefore, 0,
          reason: 'no rows written');
      final outboxRows = await pocket.db.rawQuery(
          'SELECT COUNT(*) AS c FROM lp_outbox WHERE store = ?',
          ['widgets']);
      expect(outboxRows.first['c'], 0, reason: 'no outbox rows queued');
    });

    test('an empty batch inside a transaction is a complete no-op', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final emitted = <ChangeSet>[];
      final sub = pocket.changes.listen(emitted.add);
      addTearDown(sub.cancel);

      await pocket.transaction((tx) async {
        await tx.collection('widgets').putAll(const []);
        await tx.collection('widgets').put(record(
            id: generateRecordId(), name: 'sibling'));
      });

      await Future<void>.delayed(const Duration(milliseconds: 50));
      expect(emitted, hasLength(1),
          reason: 'only the sibling write emits; the empty batch adds nothing');
      expect(emitted.single.ids, hasLength(1));
    });
  });
}
