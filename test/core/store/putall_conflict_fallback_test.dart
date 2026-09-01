import 'package:localpocket/src/internal/raw_surface.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';
import '../../sync/invariants_oracle.dart';

/// The bulk-create fast path is now attempted WITHOUT an existence probe; a
/// constraint conflict (an id already exists) must unwind exactly the rows
/// the fast path inserted and fall back to the probe + per-record update
/// path, with pre-existing rows intact and semantics identical to before.
void main() {
  group('putAll conflict fallback', () {
    test('mixed batch: new records create, existing records update', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket = await openPocket(path: t.path);
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');

      final a = generateRecordId();
      final b = generateRecordId();
      await col.put(record(id: a, name: 'old-a', qty: 1));
      await col.put(record(id: b, name: 'old-b', qty: 2));

      final n1 = generateRecordId();
      final n2 = generateRecordId();
      final n3 = generateRecordId();
      await col.putAll([
        record(id: n1, name: 'new-1', qty: 10),
        record(id: a, name: 'new-a', qty: 11),
        record(id: n2, name: 'new-2', qty: 12),
        record(id: b, name: 'new-b', qty: 13),
        record(id: n3, name: 'new-3', qty: 14),
      ]);

      expect(await col.query().count(), 5);
      expect((await col.get(a))!['name'], 'new-a');
      expect((await col.get(b))!['name'], 'new-b');
      expect((await col.get(n1))!['name'], 'new-1');
      expect((await col.get(n2))!['name'], 'new-2');
      expect((await col.get(n3))!['name'], 'new-3');
      await expectSyncInvariants(pocket, 'widgets', a);
      await expectSyncInvariants(pocket, 'widgets', b);
      await expectSyncInvariants(pocket, 'widgets', n1);
      await expectSyncInvariants(pocket, 'widgets', n2);
      await expectSyncInvariants(pocket, 'widgets', n3);
    });

    test('updating a clean synced record preserves its base and remote state',
        () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket = await openPocket(path: t.path);
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');

      final id = generateRecordId();
      await col.put(record(id: id, name: 'v1', qty: 1));
      await pocket.outbox
          .ack('widgets', id, serverUpdated: '2026-01-01 00:00:00.000Z');

      final before = await pocket.db.rawQuery(
          'SELECT base_updated, remote_updated FROM lp_sync_row '
          'WHERE store = ? AND record_id = ?',
          ['widgets', id]);
      final baseUpdated = before.first['base_updated'];
      final remoteUpdated = before.first['remote_updated'];
      expect(remoteUpdated, isNotNull);
      expect(baseUpdated, isNull, reason: 'a clean row has no base yet');

      await col.putAll([record(id: id, name: 'v2', qty: 5)]);
      final r = await col.get(id);
      expect(r!['name'], 'v2');
      await expectSyncInvariants(pocket, 'widgets', id);

      final after = await pocket.db.rawQuery(
          'SELECT base_updated, remote_updated FROM lp_sync_row '
          'WHERE store = ? AND record_id = ?',
          ['widgets', id]);
      // First dirt of a clean row captures the last known remote version as
      // the earliest base; the remote watermark itself is preserved.
      expect(after.first['base_updated'], remoteUpdated,
          reason: 'the earliest base is the last known remote version');
      expect(after.first['remote_updated'], remoteUpdated);
    });

    test('record events fire exactly once per record on the fast path',
        () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket = await openPocket(path: t.path);
      addTearDown(pocket.close);
      final events = <RecordChangeEvent>[];
      final sub = pocket.changeBus.events.listen(events.add);
      addTearDown(sub.cancel);

      final col = pocket.collection('widgets');
      await col.putAll([
        record(id: generateRecordId(), name: 'a'),
        record(id: generateRecordId(), name: 'b'),
        record(id: generateRecordId(), name: 'c'),
      ]);
      // Broadcast streams deliver asynchronously — pump before asserting.
      await Future<void>.delayed(Duration.zero);

      final creates = events.where((e) => e.action == ChangeAction.create);
      expect(creates.length, 3);
      expect(events.length, 3, reason: 'no duplicates, no other events');
    });
  });
}
