import 'dart:convert';

import 'package:localpocket/src/kernel/ids.dart';
import 'package:localpocket/src/kernel/local_pocket.dart';
import 'package:localpocket/src/kernel/sync/sync_tables.dart';
import 'package:test/test.dart';

import '../../../support/helpers.dart';

/// corrupt dirty-payload fallback.
///
/// A dirty row whose `lp_outbox.payload_json` is corrupt (malformed JSON, a
/// JSON list, JSON null, empty, or an id mismatch) must still be editable:
/// the patch reads the authoritative domain row, validates the merged result,
/// and repairs the outbox payload while preserving the original base and op
/// identity. A newer edit is never blocked by the corruption.
void main() {
  const t0 = '2026-01-01 00:00:00.000Z';

  group('corrupt dirty-payload fallback', () {
    late LocalPocket pocket;

    setUp(() async {
      pocket = await openPocket();
    });

    tearDown(() => pocket.close());

    Future<void> corrupt(String id, String payload) => pocket.db.execute(
        'UPDATE lp_outbox SET payload_json = ? WHERE record_id = ?',
        [payload, id]);

    for (final (label, corruptPayload) in [
      ('malformed json', '{not valid json'),
      ('json list', '[1, 2, 3]'),
      ('json null', 'null'),
      ('empty string', ''),
      ('mismatched id', '{"id":"some-other-id","name":"evil"}'),
    ]) {
      test('$label repairs the outbox on the next patch', () async {
        final id = generateRecordId();
        await pocket
            .collection('widgets')
            .put(record(id: id, name: 'good', qty: 1));
        await pocket.outbox.ack('widgets', id, serverUpdated: t0);
        await pocket.collection('widgets').patch(id, {'qty': 2});
        final before = await pocket.outbox.readOp(pocket.db, 'widgets', id);
        expect(before, isNotNull);
        expect(before!.baseHash, isNotEmpty);

        await corrupt(id, corruptPayload);

        // The patch must not crash and must land on the domain row.
        await pocket.collection('widgets').patch(id, {'name': 'edited'});

        final row = await pocket.outbox.readSyncRow(pocket.db, 'widgets', id);
        expect(row!.syncState, SyncState.dirty, reason: 'still dirty');

        final after = await pocket.outbox.readOp(pocket.db, 'widgets', id);
        expect(after, isNotNull, reason: 'outbox row survives');
        expect(after!.opId, before.opId, reason: 'op identity preserved');
        expect(after.baseHash, before.baseHash, reason: 'base hash preserved');
        expect(after.baseUpdated, before.baseUpdated,
            reason: 'base updated preserved');
        expect(after.dirtyFields.toSet().contains('name'), isTrue,
            reason: 'dirty-field union includes the new edit');

        // The payload is repaired: valid JSON with the real id and edits.
        final decoded = jsonDecode(after.payloadJson);
        expect(decoded, isA<Map<String, Object?>>());
        final map = decoded as Map<String, Object?>;
        expect(map['id'], id, reason: 'mismatched/absent id corrected');
        expect(map['name'], 'edited', reason: 'edit applied on top of domain');
        expect(map['qty'], 2, reason: 'earlier edit retained');

        // The repaired op drains cleanly (parses end-to-end).
        final drained = await pocket.outbox.drain();
        expect(drained.map((o) => o.recordId), contains(id));
      });
    }

    test('corrupt payload fallback merges from the domain row, not the payload',
        () async {
      final id = generateRecordId();
      await pocket
          .collection('widgets')
          .put(record(id: id, name: 'good', qty: 1));
      await pocket.outbox.ack('widgets', id, serverUpdated: t0);
      await pocket.collection('widgets').patch(id, {'qty': 2});
      // Structurally corrupt payload: the domain row is the only truth.
      await corrupt(id, '{broken json');

      await pocket.collection('widgets').patch(id, {'qty': 3});

      final op = await pocket.outbox.readOp(pocket.db, 'widgets', id);
      final decoded = jsonDecode(op!.payloadJson) as Map<String, Object?>;
      expect(decoded['name'], 'good', reason: 'domain value survives');
      expect(decoded['qty'], 3);
      final local = await pocket.collection('widgets').get(id);
      expect(local!['name'], 'good');
      expect(local['qty'], 3);
    });

    test('clean rows are unaffected by corruption of a removed op', () async {
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'x'));
      await pocket.outbox.ack('widgets', id, serverUpdated: t0);
      // No outbox row exists; a bogus direct insert must not poison reads.
      await pocket.db.insert('lp_outbox', {
        'store': 'widgets',
        'record_id': id,
        'kind': 'upsert',
        'payload_json': '{broken',
        'base_hash': '',
        'dirty_fields': '[]',
        'op_id': 'orphan-corrupt',
        'created_at': 1,
        'updated_at': 1,
      });
      // A normal edit creates a fresh op, ignoring the corrupt orphan… which
      // is actually keyed by (store, record_id) and therefore replaced.
      await pocket.collection('widgets').patch(id, {'qty': 5});
      final op = await pocket.outbox.readOp(pocket.db, 'widgets', id);
      expect(jsonDecode(op!.payloadJson)['qty'], 5);
    });
  });
}
