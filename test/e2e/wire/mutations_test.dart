import 'package:localpocket/src/internal/raw_surface.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';
import '../../sync/invariants_oracle.dart';
import '../support/wire_server.dart';

/// Remote-authoritative mutations & idempotency over the wire (tests.md
/// #7-12): server-side delete-as-hide, purge semantics, archive/restore
/// propagation, keepUnsyncedArchives, duplicate-create recovery, and
/// concurrent id minting.
///
/// Every scenario is written ONCE against the [WireServer] facade and runs
/// against BOTH the in-process MockPbServer and the LIVE PocketBase server
/// (`test/secret.dart`, tagged `real`) — see [wireTest].
///
/// Mechanics pinned here (verified against production):
/// - a remote hard delete is discovered by the anti-entropy sweep as a
///   missing/404 id -> the local row goes HIDDEN: out of the default query
///   scope but still returned by get(). The domain row is NEVER deleted;
/// - `Collection.purge` is LOCAL and FINAL for that record version: the
///   remote copy survives untouched and the row never comes back unless the
///   remote changes again. Peers reap only through a SERVER delete + hide;
/// - `archive` pushes `"archived": true`; `restore` follows the wire
///   convention (live records OMIT the archived key) and the record returns;
/// - `keepUnsyncedArchives=false` vanishes an offline create+archive locally
///   before the wire; `true` survives to push;
/// - two clients pushing the SAME custom id converge to EXACTLY ONE remote
///   record (pull-merge, no dead letter); concurrent id minting never
///   collides.
void main() {
  Future<(WireClient, WireClient)> twoClients(
    WireServer s, {
    List<CollectionSchema Function(String)>? storeBuilders,
  }) async {
    final dbA = await tempDbPath();
    final dbB = await tempDbPath();
    final a =
        await s.createClient(path: dbA.path, storeBuilders: storeBuilders);
    final b =
        await s.createClient(path: dbB.path, storeBuilders: storeBuilders);
    s.onClose(() => dbA.cleanup());
    s.onClose(() => dbB.cleanup());
    return (a, b);
  }

  Future<void> syncBoth(WireClient a, WireClient b) async {
    await a.engine.syncNow();
    await b.engine.syncNow();
  }

  Future<int> deadLetterCount(WireClient c) async =>
      (await c.pocket.db.rawQuery('SELECT COUNT(*) AS c FROM lp_dead_letter'))
          .first['c'] as int;

  Future<String?> accessStateOf(WireClient c, String id) async {
    final rows = await c.pocket.db.query('lp_sync_row',
        columns: ['access_state'],
        where: 'store = ? AND record_id = ?',
        whereArgs: [c.store, id]);
    return rows.isEmpty ? null : rows.single['access_state'] as String;
  }

  Future<int> domainRowCount(WireClient c, String id) async => (await c
          .pocket.db
          .rawQuery('SELECT COUNT(*) AS c FROM ${c.store} WHERE id = ?', [id]))
      .first['c'] as int;

  Map<String, Object?> dataOf(Map<String, Object?>? rec) =>
      (rec!['data']! as Map).cast<String, Object?>();

  group('E2E remote mutations (mock + live)', () {
    wireTest('server-side delete propagates as a hide, never a hard delete',
        (s) async {
      final (a, b) = await twoClients(s);
      final id = await s.createRecord(s.store, {'name': 'doomed'});
      await syncBoth(a, b);

      // Raw server-side delete: no SSE event, so the sweep discovers it.
      await s.deleteRecord(s.store, id);
      await a.engine.invalidateVisibility();
      await b.engine.invalidateVisibility();

      expect(await a.pocket.collection(s.store).get(id), isNotNull,
          reason: 'hidden rows are retained — get() still returns them');
      expect(await a.pocket.collection(s.store).query().all().count(), 0);
      expect(await accessStateOf(a, id), AccessState.hidden.name);
      expect(await domainRowCount(a, id), 1,
          reason: 'the domain row itself is never hard-deleted');

      expect(await b.pocket.collection(s.store).get(id), isNotNull);
      expect(await b.pocket.collection(s.store).query().all().count(), 0);
      expect(await accessStateOf(b, id), AccessState.hidden.name);
      await expectSyncInvariants(b.pocket, s.store, id);
    });

    wireTest('client purge is local-final: no resurrection, peers unaffected',
        (s) async {
      final (a, b) = await twoClients(s);
      final id = await s.createRecord(s.store, {'name': 'reap-me'});
      await syncBoth(a, b);

      await a.pocket.collection(s.store).purge(id);
      expect(await a.pocket.collection(s.store).get(id), isNull);
      expect(
          await a.pocket.outbox.readSyncRow(a.pocket.db, s.store, id), isNull);

      await a.engine.syncNow();
      expect(await a.pocket.collection(s.store).get(id), isNull,
          reason: 'a purge is FINAL for this record version');
      expect(await s.readRecord(s.store, id), isNotNull,
          reason: 'the remote copy survives untouched');
      expect(await b.pocket.collection(s.store).get(id), isNotNull,
          reason: 'peers reap only via a server delete');
      expect(await deadLetterCount(a), 0);
    });

    wireTest('archive/restore round-trips both directions', (s) async {
      final (a, b) = await twoClients(s);
      final id = await s.createRecord(s.store, {'name': 'flip-flop'});
      await syncBoth(a, b);

      // A archives: the flag flows onto the server and back to B.
      await a.pocket.collection(s.store).archive(id);
      expect((await a.pocket.outbox.readOp(a.pocket.db, s.store, id))!.kind,
          OutboxKind.archive);
      await a.engine.syncNow();
      expect(dataOf(await s.readRecord(s.store, id))['archived'], isTrue,
          reason: 'the wire payload carries the archive flag');
      expect(await a.pocket.collection(s.store).query().all().count(), 0);

      await b.engine.syncNow();
      expect(await b.pocket.collection(s.store).query().all().count(), 0,
          reason: 'B sees the record leave scope');
      expect((await b.pocket.collection(s.store).get(id))!['archived'], isTrue);
      expect(
          (await b.pocket.collection(s.store).get(id))!['name'], 'flip-flop');

      // B restores: the unarchive flows back to A; the wire convention omits
      // the archived key on live records.
      await b.pocket.collection(s.store).restore(id);
      await b.engine.syncNow();
      expect(dataOf(await s.readRecord(s.store, id)).containsKey('archived'),
          isFalse,
          reason: 'live records omit the archived key on the wire');
      await a.engine.syncNow();
      expect(await a.pocket.collection(s.store).query().all().count(), 1,
          reason: 'the restore propagated back to A');
      expect(
          (await a.pocket.collection(s.store).get(id))!['archived'], isFalse);
      expect(await deadLetterCount(a), 0);
      expect(await deadLetterCount(b), 0);
      await expectSyncInvariants(a.pocket, s.store, id);
      await expectSyncInvariants(b.pocket, s.store, id);
    });

    wireTest('keepUnsyncedArchives=false vanishes an offline create+archive',
        (s) async {
      final (a, _) = await twoClients(s, storeBuilders: [
        (store) => widgetsSchema(name: store, keepUnsyncedArchives: false),
      ]);
      final id = generateRecordId();
      await a.pocket.collection(s.store).put(record(id: id, name: 'vanish'));
      await a.pocket.collection(s.store).archive(id);

      // Vanished locally at archive time: no row, no op, nothing on the wire.
      expect(await a.pocket.collection(s.store).get(id), isNull);
      expect(await a.engine.syncStore.countPending(), 0);
      await a.engine.syncNow();
      expect(await s.countRecords(s.store), 0,
          reason: 'the never-synced create+archive never reached the server');
    });

    wireTest('keepUnsyncedArchives=true survives to push', (s) async {
      final (a, _) = await twoClients(s, storeBuilders: [
        (store) => widgetsSchema(name: store, keepUnsyncedArchives: true),
      ]);
      final id = generateRecordId();
      await a.pocket.collection(s.store).put(record(id: id, name: 'kept'));
      await a.pocket.collection(s.store).archive(id);

      // The row survives as a plain upsert and pushes archived:true.
      expect(await a.pocket.collection(s.store).get(id), isNotNull);
      await a.engine.syncNow();
      expect(await s.countRecords(s.store), 1);
      expect(dataOf(await s.readRecord(s.store, id))['archived'], isTrue);
    });

    wireTest('same custom id converges to exactly ONE remote record',
        (s) async {
      final (a, b) = await twoClients(s);
      final shared = generateRecordId();
      await a.pocket
          .collection(s.store)
          .put(record(id: shared, name: 'from-A', qty: 1));
      await b.pocket
          .collection(s.store)
          .put(record(id: shared, name: 'from-B', qty: 2));
      await a.engine.syncNow(); // A lands
      await b.engine.syncNow(); // B collides -> re-fetch + merge
      await a.engine.syncNow();

      expect(await s.countRecords(s.store), 1,
          reason: 'exactly one remote record survives');
      expect(await deadLetterCount(a), 0);
      expect(await deadLetterCount(b), 0,
          reason: 'no duplicate_id dead letter');
      expect(
          (await a.pocket.collection(s.store).get(shared))!['name'], 'from-A');
      expect(
          (await b.pocket.collection(s.store).get(shared))!['name'], 'from-A',
          reason: 'B converged on the first-writer content');
    });

    wireTest('concurrent create storm mints unique ids and converges',
        (s) async {
      final (a, b) = await twoClients(s);
      const n = 20;
      final idsA = [for (var i = 0; i < n; i++) generateRecordId()];
      final idsB = [for (var i = 0; i < n; i++) generateRecordId()];
      expect(idsA.toSet().length, n);
      expect(idsA.toSet().intersection(idsB.toSet()), isEmpty,
          reason: 'no collisions ACROSS concurrent clients');

      for (var i = 0; i < n; i++) {
        await a.pocket
            .collection(s.store)
            .put(record(id: idsA[i], name: 'a$i', qty: i));
        await b.pocket
            .collection(s.store)
            .put(record(id: idsB[i], name: 'b$i', qty: 1000 + i));
      }
      await syncBoth(a, b);
      expect(await s.countRecords(s.store), n * 2,
          reason: 'every created record landed exactly once');
      expect(await a.engine.syncStore.countPending(), 0);
      expect(await b.engine.syncStore.countPending(), 0);
    }, timeout: const Timeout(Duration(seconds: 90)));
  });
}
