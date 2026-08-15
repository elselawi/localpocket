import 'package:localpocket/localpocket.dart';
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
}
