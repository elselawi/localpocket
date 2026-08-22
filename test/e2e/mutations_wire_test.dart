import 'package:localpocket/localpocket.dart';
import 'package:localpocket/sync.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import '../pocketbase/mock_pb_server.dart';
import '../pocketbase/pb_helpers.dart';
import '../sync/invariants_oracle.dart';

/// Remote-authoritative mutations & idempotency over the REAL HTTP wire
/// (tests.md #7-12): server-side delete-as-hide, purge semantics, archive/
/// restore propagation, keepUnsyncedArchives, duplicate-create recovery, and
/// concurrent id minting — two full adapter-backed clients vs MockPbServer.
///
/// Mechanics pinned here (verified against production):
/// - a remote hard delete is discovered by the anti-entropy sweep as a
///   missing/404 id -> the local row goes HIDDEN (access_state=hidden,
///   hidden=1): out of the default query scope but still returned by get().
///   The domain row itself is NEVER deleted.
/// - `Collection.purge` is LOCAL and FINAL for that record version: the
///   remote copy survives untouched, but the pull cursor already sits at the
///   record's (updated,id) tuple and the rewind-window dedup skip suppresses
///   re-delivery — the row never comes back unless the remote changes again.
///   Reaping on other clients happens only through a SERVER delete + hide.
/// - `archive` on a synced row pushes `"archived": true`; the peer applies it
///   and scopes the record out. `restore` omits the flag (the wire convention)
///   and the record returns. Both directions converge through the server.
/// - archiving a NEVER-SYNCED create vanishes it locally by default
///   (keepUnsyncedArchives=false): no domain row, no op, nothing pushed. With
///   keepUnsyncedArchives=true the row survives as a plain upsert.
/// - two clients pushing the SAME custom id converge to EXACTLY ONE remote
///   record: the loser's DuplicateIdError path resolves via the pull-merge /
///   GET-and-settle recovery — no duplicate_id_missing dead letter.
void main() {
  SyncConfig e2eConfig() => SyncConfig(
        maxPage: 200,
        maxPagesPerPass: 100,
        rewind: const Duration(seconds: 5),
        sweepInterval: const Duration(days: 365),
        syncInterval: const Duration(days: 365),
        pushDebounce: const Duration(days: 365),
        connectivitySettle: Duration.zero,
        maxBatch: 250,
        maxAttempts: 8,
        backoffBase: const Duration(milliseconds: 50),
        backoffCap: const Duration(minutes: 5),
        jitter: (_) => 1.0,
      );

  Future<(MockPbServer, PbEngineHarness, PbEngineHarness)> twoClients({
    List<CollectionSchema>? stores,
    bool start = true,
  }) async {
    final server = await MockPbServer().start();
    addTearDown(() => server.stop());
    final dbA = await tempDbPath();
    final dbB = await tempDbPath();
    final a = await PbEngineHarness.create(
        server: server,
        path: dbA.path,
        stores: stores ?? [widgetsSchema()],
        config: e2eConfig(),
        start: start);
    final b = await PbEngineHarness.create(
        server: server,
        path: dbB.path,
        stores: stores ?? [widgetsSchema()],
        config: e2eConfig(),
        start: start);
    addTearDown(() async {
      await a.close();
      await b.close();
      await dbA.cleanup();
      await dbB.cleanup();
    });
    return (server, a, b);
  }

  /// Drives both clients into the shared base state for [id].
  Future<void> seedAndSync(MockPbServer server, PbEngineHarness a,
      PbEngineHarness b, String id) async {
    await a.engine.syncNow();
    await b.engine.syncNow();
  }

  /// Drains every pending op with bounded manual cycles.
  Future<void> drainPending(PbEngineHarness h) async {
    var guard = 0;
    while (await h.engine.syncStore.countPending() > 0) {
      await h.engine.syncNow();
      guard++;
      if (guard > 20) fail('${h.pocket.path}: drain did not converge');
    }
  }

  Future<int> deadLetterCount(PbEngineHarness h) async =>
      (await h.pocket.db.rawQuery('SELECT COUNT(*) AS c FROM lp_dead_letter'))
          .first['c'] as int;

  Future<String?> accessStateOf(PbEngineHarness h, String id) async {
    final rows = await h.pocket.db.query('lp_sync_row',
        columns: ['access_state'],
        where: 'store = ? AND record_id = ?',
        whereArgs: ['widgets', id]);
    return rows.isEmpty ? null : rows.single['access_state'] as String;
  }

  Future<int> domainRowCount(PbEngineHarness h, String id) async =>
      (await h.pocket.db.rawQuery(
              'SELECT COUNT(*) AS c FROM widgets WHERE id = ?', [id]))
          .first['c'] as int;

  group('E2E remote mutations over the wire', () {
    test('server-side delete propagates as a hide, never a hard delete',
        () async {
      final (server, a, b) = await twoClients();
      final id = server.seed(store: 'widgets', data: {'name': 'doomed'});
      await seedAndSync(server, a, b, id);

      // Raw server-side delete: no SSE event fires, so discovery happens via
      // the anti-entropy sweep inside the next forced cycle.
      server.delete(id);
      await a.engine.invalidateVisibility(); // forced FULL sweep

      expect(await a.pocket.collection('widgets').get(id), isNotNull,
          reason: 'hidden rows are retained — get() still returns them');
      expect(await a.pocket.collection('widgets').query().all().count(), 0,
          reason: 'the hidden row left the default query scope');
      expect(await accessStateOf(a, id), AccessState.hidden.name);
      expect(await domainRowCount(a, id), 1,
          reason: 'the domain row itself is never hard-deleted');

      // B converges to the identical hidden state independently.
      await b.engine.invalidateVisibility();
      expect(await b.pocket.collection('widgets').get(id), isNotNull);
      expect(await b.pocket.collection('widgets').query().all().count(), 0);
      expect(await accessStateOf(b, id), AccessState.hidden.name);
      await expectSyncInvariants(b.pocket, 'widgets', id,
          reason: 'hidden-clean row keeps its invariants');
    });

    test('client A purge is local-final: no resurrection, peers reap only '
        'via a server delete', () async {
      final (server, a, b) = await twoClients();
      final id = server.seed(store: 'widgets', data: {'name': 'reap-me'});
      await seedAndSync(server, a, b, id);

      // A purges locally: domain + sync + outbox rows vanish.
      await a.pocket.collection('widgets').purge(id);
      expect(await a.pocket.collection('widgets').get(id), isNull,
          reason: 'purge removes the local copy');
      expect(await a.pocket.outbox.readSyncRow(a.pocket.db, 'widgets', id),
          isNull, reason: 'the sync row is dropped with the row');
      expect(await a.pocket.outbox.readOp(a.pocket.db, 'widgets', id), isNull,
          reason: 'no tombstone op exists — purge never deletes remotely');
      expect(server.records.containsKey(id), isTrue,
          reason: 'the remote copy survives a local purge');

      // The next cycle does NOT resurrect it: the pull cursor sits exactly
      // at the record's (updated,id) tuple, and the rewind-window dedup skip
      // drops that re-delivery — a purge is FINAL for this record version.
      await a.engine.syncNow();
      expect(await a.pocket.collection('widgets').get(id), isNull,
          reason: 'no tombstone exists, and cursor-dedup suppresses '
              're-delivery: purge wins locally');
      expect(server.records[id], isNotNull,
          reason: 'while the REMOTE copy lives on unchanged');

      // The documented reap path: a server delete + sweep hides the peers.
      server.delete(id);
      await b.engine.invalidateVisibility();
      expect(await b.pocket.collection('widgets').query().all().count(), 0,
          reason: "B's copy leaves the query scope");
      expect(await b.pocket.collection('widgets').get(id), isNotNull,
          reason: 'hidden, never deleted');
      await expectSyncInvariants(b.pocket, 'widgets', id);
    });

    test('archive propagates A -> B and restore round-trips back', () async {
      final (server, a, b) = await twoClients();
      final id = server.seed(store: 'widgets', data: {'name': 'flip-flop'});
      await seedAndSync(server, a, b, id);

      // A archives: the archive op pushes archived:true onto the server.
      await a.pocket.collection('widgets').archive(id);
      expect(
          (await a.pocket.outbox.readOp(a.pocket.db, 'widgets', id))!.kind,
          OutboxKind.archive);
      await a.engine.syncNow();
      expect(server.records[id]!.data['archived'], isTrue,
          reason: 'the wire payload carries the archive flag');
      expect(await a.pocket.collection('widgets').query().all().count(), 0,
          reason: 'the archived row left A\'s default scope');

      // B pulls the archived payload and also scopes it out.
      await b.engine.syncNow();
      expect(await b.pocket.collection('widgets').query().all().count(), 0,
          reason: 'B sees the record leave scope');
      final docB = await b.pocket.collection('widgets').get(id);
      expect(docB!['archived'], isTrue);
      expect(docB['name'], 'flip-flop', reason: 'content preserved');

      // B restores: the restore flows back through the server to A. Note the
      // push may go through the batch MERGE path, whose three-way result sets
      // out['archived'] = false EXPLICITLY — so the wire may carry a literal
      // "archived": false rather than omitting the key. Either way the remote
      // state is unarchived.
      await b.pocket.collection('widgets').restore(id);
      await b.engine.syncNow();
      expect(server.records[id]!.data['archived'], isNot(true),
          reason: 'the remote record is unarchived after the restore '
              '(key omitted OR literal false from the merge path)');
      await a.engine.syncNow();
      expect(await a.pocket.collection('widgets').query().all().count(), 1,
          reason: 'the restore propagated back to A');
      expect((await a.pocket.collection('widgets').get(id))!['archived'],
          isFalse);
      expect(await deadLetterCount(a), 0);
      expect(await deadLetterCount(b), 0);
      await expectAllSyncInvariants(a.pocket);
      await expectAllSyncInvariants(b.pocket);
    });

    test('keepUnsyncedArchives=false vanishes an offline create+archive '
        'before the wire; true pushes it', () async {
      // (a) Default policy: the vanished row NEVER reaches the server.
      {
        final (server, a, b) = await twoClients();
        final id = generateRecordId();
        await a.pocket.collection('widgets').put(record(id: id, name: 'gone'));
        await a.pocket.collection('widgets').archive(id);
        expect(await a.pocket.collection('widgets').get(id), isNull,
            reason: 'vanished immediately at archive time');
        expect(await a.pocket.outbox.readOp(a.pocket.db, 'widgets', id), isNull,
            reason: 'no network op survives the vanish rule');
        expect(await a.engine.syncStore.countPending(), 0);

        await a.engine.syncNow();
        expect(server.records.containsKey(id), isFalse,
            reason: 'nothing was ever pushed');
        expect(server.createCalls, 0);

        await b.engine.syncNow();
        expect(await b.pocket.collection('widgets').get(id), isNull,
            reason: 'B never sees the ghost record');
        expect(await deadLetterCount(a), 0);
      }

      // (b) keepUnsyncedArchives=true: the row survives to push.
      {
        final (server, a, b) = await twoClients(stores: [
          widgetsSchema(keepUnsyncedArchives: true)
        ]);
        final id = generateRecordId();
        await a.pocket.collection('widgets').put(record(id: id, name: 'kept'));
        await a.pocket.collection('widgets').archive(id);
        final doc = await a.pocket.collection('widgets').get(id);
        expect(doc, isNotNull, reason: 'kept locally when configured');
        expect(doc!['archived'], isTrue);
        expect((await a.pocket.outbox.readOp(a.pocket.db, 'widgets', id))!.kind,
            OutboxKind.upsert, reason: 'a plain upsert, not an archive op');

        await a.engine.syncNow();
        expect(server.records[id]!.data['archived'], isTrue,
            reason: 'the archived unsynced create reached the wire');
        await b.engine.syncNow();
        expect((await b.pocket.collection('widgets').get(id))!['archived'],
            isTrue, reason: 'and converged on B');
        expect(await b.pocket.collection('widgets').query().all().count(), 0,
            reason: 'still archived — out of the default scope on B too');
        await expectAllSyncInvariants(a.pocket);
        await expectAllSyncInvariants(b.pocket);
      }
    });

    test('both clients offline-write the SAME custom id -> exactly one '
        'remote record survives', () async {
      final (server, a, b) = await twoClients(start: false);
      final shared = generateRecordId();

      // Both clients create offline with the SAME id, different content.
      await a.pocket
          .collection('widgets')
          .put(record(id: shared, name: 'from-A', qty: 1));
      await b.pocket
          .collection('widgets')
          .put(record(id: shared, name: 'from-B', qty: 2));
      expect(await a.engine.syncStore.countPending(), 1);
      expect(await b.engine.syncStore.countPending(), 1);

      // A connects first: its create lands untouched.
      await a.engine.start();
      await drainPending(a);
      expect(server.records.length, 1);
      expect(server.records[shared]!.data['name'], 'from-A');

      // B connects: its cycle PULLS first, so the pull-merge converges the
      // row (default policy: remote wins the overlapping fields) BEFORE any
      // push could hit DuplicateIdError.
      await b.engine.start();
      await drainPending(b);

      expect(server.records.length, 1,
          reason: 'exactly ONE remote record for the shared id');
      expect(server.records[shared]!.data['name'], 'from-A',
          reason: 'first-writer content survived');
      expect(await a.engine.syncStore.countPending(), 0);
      expect(await b.engine.syncStore.countPending(), 0);
      expect(await deadLetterCount(b), 0,
          reason: 'converged via merge, never needed a dead letter');

      // Both sides agree with the server on the final document.
      await a.engine.syncNow();
      await b.engine.syncNow();
      final docA = await a.pocket.collection('widgets').get(shared);
      final docB = await b.pocket.collection('widgets').get(shared);
      expect(docA!['name'], server.records[shared]!.data['name']);
      expect(docA['qty'], server.records[shared]!.data['qty']);
      expect(docB!['name'], docA['name']);
      expect(docB['qty'], docA['qty']);
      await expectAllSyncInvariants(a.pocket);
      await expectAllSyncInvariants(b.pocket);
    });

    test('concurrent two-client create storm mints unique ids and converges',
        () async {
      final (server, a, b) = await twoClients();

      const nPerClient = 60;
      final idsA = <String>[];
      final idsB = <String>[];
      for (var i = 0; i < nPerClient; i++) {
        idsA.add(generateRecordId());
        idsB.add(generateRecordId());
      }
      expect(idsA.toSet().length, nPerClient,
          reason: 'no collisions inside one client');
      expect(idsA.toSet().intersection(idsB.toSet()), isEmpty,
          reason: 'no collisions ACROSS concurrent clients');
      for (final id in [...idsA, ...idsB]) {
        expect(isValidRecordId(id), isTrue,
            reason: 'every minted id is PocketBase-valid');
      }

      for (var i = 0; i < nPerClient; i++) {
        await a.pocket
            .collection('widgets')
            .put(record(id: idsA[i], name: 'a$i', qty: i));
        await b.pocket
            .collection('widgets')
            .put(record(id: idsB[i], name: 'b$i', qty: 1000 + i));
      }
      expect(await a.engine.syncStore.countPending(), nPerClient);
      expect(await b.engine.syncStore.countPending(), nPerClient);

      await a.engine.syncNow();
      await b.engine.syncNow();

      expect(server.records.length, 2 * nPerClient,
          reason: 'every created record landed exactly once');
      await drainPending(a);
      await drainPending(b);
      expect(await deadLetterCount(a), 0);
      expect(await deadLetterCount(b), 0);

      // Both clients pull everything and agree with the server.
      await a.engine.syncNow();
      await b.engine.syncNow();
      expect(await a.pocket.collection('widgets').query().all().count(),
          2 * nPerClient);
      expect(await b.pocket.collection('widgets').query().all().count(),
          2 * nPerClient);
      await expectAllSyncInvariants(a.pocket);
      await expectAllSyncInvariants(b.pocket);
    });
  });
}
