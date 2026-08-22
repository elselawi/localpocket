import 'package:localpocket/localpocket.dart';
import 'package:localpocket/sync.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import '../pocketbase/mock_pb_server.dart';
import '../pocketbase/pb_helpers.dart';
import '../sync/invariants_oracle.dart';

/// Conflict & merge over the REAL HTTP wire (two adapter-backed clients vs
/// MockPbServer): the full detect -> escalate -> resolve -> propagate loop.
///
/// Mechanics pinned here (verified against production):
/// - installing a `collectionResolver` routes the WHOLE merge through it —
///   the default per-field three-way rules never run. A resolver that
///   declines (`null`) escalates the record to `lp_conflicts` for review;
///   one that returns a MergeResult resolves automatically.
/// - the DEFAULT policy (no resolver) never escalates: `MergeEngine` silently
///   returns remote on a genuine two-sided field conflict.
/// - a well-behaved review resolver therefore declines ONLY on a genuine
///   three-way divergence (local != remote != base) and falls back to the
///   mechanical rules otherwise — otherwise even a resolution push (whose
///   remote equals its base) would re-escalate forever.
/// - `Conflicts.resolve` sets the outbox op base to the CONFLICT-TIME remote,
///   so the resolution push re-enters the merge with `remote == base` and the
///   chosen document wins — unless the remote moved again while the conflict
///   was open (see the superseded tests).
///
/// NOTE on race construction: a client whose PUSH observes a changed remote
/// also merges through the same policy, so "A pushes first, B conflicts"
/// would escalate on BOTH clients. Every conflict here is raised through the
/// PULL path: the record is mutated server-side (never via a client push)
/// while exactly one client holds an un-pushed local edit.

/// The mechanical three-way rules for one key.
Object? _threeWay(Object? b, Object? l, Object? r) {
  if (deepEquals(l, r)) return l;
  if (deepEquals(l, b)) return r;
  if (deepEquals(r, b)) return l;
  return r;
}

/// True when [key] genuinely diverged on BOTH sides from [ctx]'s base.
bool _twoSided(MergeContext ctx, String key) {
  final b = ctx.base[key];
  final l = ctx.local[key];
  final r = ctx.remote[key];
  return !deepEquals(l, r) && !deepEquals(l, b) && !deepEquals(r, b);
}

/// A review resolver: declines (-> needsReview) only when at least one field
/// genuinely diverged on both sides; otherwise resolves mechanically. This is
/// the procedural needsReview path an application would actually install.
Future<MergeResult?> _reviewOnTrueConflict(MergeContext ctx) async {
  final keys =
      <String>{...ctx.base.keys, ...ctx.local.keys, ...ctx.remote.keys};
  for (final k in keys) {
    if (_twoSided(ctx, k)) return null; // decline -> escalate to review
  }
  return MergeResult(merged: {
    for (final k in keys)
      k: _threeWay(ctx.base[k], ctx.local[k], ctx.remote[k]),
  });
}

/// A counting resolver that proves the resolver path ran while still
/// converging (remote wins genuine conflicts).
class _CountingConflictResolver extends ConflictResolver {
  int invocations = 0;

  @override
  MergeResult resolve(MergeContext ctx) {
    invocations++;
    final keys =
        <String>{...ctx.base.keys, ...ctx.local.keys, ...ctx.remote.keys};
    return MergeResult(merged: {
      for (final k in keys)
        k: _twoSided(ctx, k)
            ? ctx.remote[k] // the resolver's policy: remote wins conflicts
            : _threeWay(ctx.base[k], ctx.local[k], ctx.remote[k]),
    });
  }
}

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

  /// Fields shared by every schema in this suite.
  List<Field> commonFields() => [
        Field.text('name', required: true),
        Field.int('qty'),
        Field.jsonList('tags'),
      ];

  /// A schema whose collection resolver escalates genuine two-sided conflicts
  /// to manual review and resolves everything else mechanically.
  CollectionSchema<Object?> reviewSchema({String name = 'widgets'}) =>
      CollectionSchema(
        name: name,
        version: 1,
        fields: commonFields(),
        conflictPolicy: ConflictPolicy(
            collectionResolver: CustomResolver(_reviewOnTrueConflict)),
      );

  Future<(MockPbServer, PbEngineHarness, PbEngineHarness)> twoClients({
    List<CollectionSchema> stores = const [],
    List<String> storesList = const ['widgets'],
  }) async {
    final server = await MockPbServer().start();
    addTearDown(() => server.stop());
    final dbA = await tempDbPath();
    final dbB = await tempDbPath();
    final cfg = e2eConfig();
    final a = await PbEngineHarness.create(
        server: server,
        config: cfg,
        path: dbA.path,
        stores: stores.isEmpty ? [reviewSchema()] : stores,
        storesList: storesList);
    final b = await PbEngineHarness.create(
        server: server,
        config: cfg,
        path: dbB.path,
        stores: stores.isEmpty ? [reviewSchema()] : stores,
        storesList: storesList);
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

  /// Standard conflict setup: B patches locally; then the SERVER-side copy is
  /// mutated directly (no client push involved); B's next cycle pulls the
  /// fresh remote into its dirty row -> needsReview -> open conflict. A
  /// stays clean throughout.
  Future<void> serverMutateConflictB(MockPbServer server, PbEngineHarness a,
      PbEngineHarness b, String id,
      {String localName = 'from-B', String remoteName = 'remote'}) async {
    await b.pocket.collection('widgets').patch(id, {'name': localName});
    server.mutate(id, {...server.records[id]!.data, 'name': remoteName});
    await b.engine.syncNow(); // pull escalates before any push
  }

  Future<int> conflictRowCount(PbEngineHarness h) async =>
      (await h.pocket.db.rawQuery('SELECT COUNT(*) AS c FROM lp_conflicts'))
          .first['c'] as int;

  Future<String> syncStateOf(PbEngineHarness h, String id) async {
    final rows = await h.pocket.db.query('lp_sync_row',
        where: 'store = ? AND record_id = ?', whereArgs: ['widgets', id]);
    return rows.single['sync_state'] as String;
  }

  group('E2E conflicts over the wire', () {
    test('needsReview end-to-end: detect -> escalate -> resolve -> propagate',
        () async {
      final (server, a, b) = await twoClients();
      final id = server.seed(store: 'widgets', data: {'name': 'base'});
      await seedAndSync(server, a, b, id);

      await serverMutateConflictB(server, a, b, id);

      // Escalated on B: open conflict, sync row parked, domain untouched.
      final open = await b.pocket.conflicts.listOpen(store: 'widgets');
      expect(open, hasLength(1));
      final c = open.single;
      expect(c.store, 'widgets');
      expect(c.recordId, id);
      expect(c.base['name'], 'base');
      expect(c.local['name'], 'from-B',
          reason: "the conflict captures B's local side");
      expect(c.remote['name'], 'remote',
          reason: 'and the remote side that triggered it');
      expect(await syncStateOf(b, id), SyncState.conflict.name);
      expect((await b.pocket.collection('widgets').get(id))!['name'], 'from-B',
          reason: "nothing was applied to B's domain row");
      expect((await a.pocket.conflicts.listOpen()), isEmpty,
          reason: 'A converged cleanly; only B reviews');

      // The app resolves with a merged document.
      await b.pocket.conflicts.resolve(
          store: 'widgets', id: id, merged: {'name': 'chosen', 'qty': 1});
      expect(await b.pocket.conflicts.listOpen(store: 'widgets'), isEmpty);

      // The resolution pushes (base == conflict-time remote) and propagates.
      await b.engine.syncNow();
      expect(server.records[id]!.data['name'], 'chosen',
          reason: 'the chosen document won on the server');

      await a.engine.syncNow();
      expect((await a.pocket.collection('widgets').get(id))!['name'], 'chosen',
          reason: 'A converges on the resolution without reviewing anything');
      expect((await b.pocket.collection('widgets').get(id))!['name'], 'chosen');
      expect(await syncStateOf(b, id), SyncState.clean.name);

      await expectSyncInvariants(b.pocket, 'widgets', id,
          reason: 'post-resolution state machine holds');
    });

    test('acceptLocal overrides the remote edit over the wire', () async {
      final (server, a, b) = await twoClients();
      final id = server.seed(store: 'widgets', data: {'name': 'base'});
      await seedAndSync(server, a, b, id);
      await serverMutateConflictB(server, a, b, id);

      await b.pocket.conflicts.acceptLocal('widgets', id);
      expect(await b.pocket.conflicts.listOpen(store: 'widgets'), isEmpty);

      await b.engine.syncNow();
      expect(server.records[id]!.data['name'], 'from-B',
          reason: 'the local choice overwrites the server edit');

      await a.engine.syncNow();
      expect((await a.pocket.collection('widgets').get(id))!['name'], 'from-B',
          reason: "B's resolution propagates to A on its next pull");
      expect((await b.pocket.collection('widgets').get(id))!['name'], 'from-B');
      expect(await syncStateOf(b, id), SyncState.clean.name);
      expect(await conflictRowCount(b), 0);
    });

    test('acceptRemote converges without re-resolving and propagates',
        () async {
      final (server, a, b) = await twoClients();
      final id = server.seed(store: 'widgets', data: {'name': 'base'});
      await seedAndSync(server, a, b, id);
      await serverMutateConflictB(server, a, b, id);

      // B accepts the remote side; the conflict closes permanently.
      await b.pocket.conflicts.acceptRemote('widgets', id);
      expect(await b.pocket.conflicts.listOpen(store: 'widgets'), isEmpty);

      await b.engine.syncNow();
      expect((await b.pocket.collection('widgets').get(id))!['name'], 'remote');
      expect(await syncStateOf(b, id), SyncState.clean.name,
          reason: 'settled clean — no new conflict was raised');

      // Further cycles stay quiet: the winner never needs resolving again.
      await b.engine.syncNow();
      expect(await b.pocket.conflicts.listOpen(), isEmpty);
      expect(server.records[id]!.data['name'], 'remote');
      await a.engine.syncNow();
      expect((await a.pocket.collection('widgets').get(id))!['name'], 'remote',
          reason: 'A pulls the winning doc and stays conflict-free');
      expect(await a.pocket.conflicts.listOpen(), isEmpty);
    });

    test('collection-level resolver converges automatically (proven path)',
        () async {
      // Each client gets its OWN counting resolver instance so the test can
      // attribute engine invocations per client.
      final resolverA = _CountingConflictResolver();
      final resolverB = _CountingConflictResolver();
      CollectionSchema<Object?> schema(ConflictResolver r) => CollectionSchema(
            name: 'widgets',
            version: 1,
            fields: commonFields(),
            conflictPolicy: ConflictPolicy(collectionResolver: r),
          );

      final server = await MockPbServer().start();
      addTearDown(() => server.stop());
      final dbA = await tempDbPath();
      final dbB = await tempDbPath();
      final a = await PbEngineHarness.create(
          server: server,
          config: e2eConfig(),
          path: dbA.path,
          stores: [schema(resolverA)]);
      final b = await PbEngineHarness.create(
          server: server,
          config: e2eConfig(),
          path: dbB.path,
          stores: [schema(resolverB)]);
      addTearDown(() async {
        await a.close();
        await b.close();
        await dbA.cleanup();
        await dbB.cleanup();
      });

      final id = server.seed(store: 'widgets', data: {'name': 'base'});
      await a.engine.syncNow();
      await b.engine.syncNow();

      await a.pocket.collection('widgets').patch(id, {'name': 'from-A'});
      await b.pocket.collection('widgets').patch(id, {'name': 'from-B'});
      await a.engine.syncNow(); // A lands (one-sided -> mechanical fallback)
      await b.engine.syncNow(); // B pulls the conflict -> resolver resolves
      await a.engine.syncNow();

      expect(resolverB.invocations, greaterThanOrEqualTo(1),
          reason: "B's merge went through the installed resolver");
      // A's own push never needed a merge (its base was still the remote
      // version), so its resolver may legitimately stay at zero — B's pull
      // is what proves the resolver path ran.
      expect(await b.pocket.conflicts.listOpen(), isEmpty,
          reason: 'resolved automatically — nothing escalates to review');
      expect((await b.pocket.collection('widgets').get(id))!['name'], 'from-A',
          reason: 'remote-wins resolver output');
      expect(server.records[id]!.data['name'], 'from-A');
      expect((await a.pocket.collection('widgets').get(id))!['name'], 'from-A',
          reason: 'both clients converge without either side resolving');
      expect(await conflictRowCount(b), 0);
    });

    test('CounterResolver accumulates disjoint deltas over the wire', () async {
      CollectionSchema<Object?> schema() => CollectionSchema(
            name: 'widgets',
            version: 1,
            fields: commonFields(),
            conflictPolicy: const ConflictPolicy(
              fieldOverrides: {'qty': CounterResolver()},
            ),
          );
      final (server, a, b) = await twoClients(stores: [schema()]);
      final id =
          server.seed(store: 'widgets', data: {'name': 'base', 'qty': 10});
      await seedAndSync(server, a, b, id);

      // Disjoint increments of the SAME counter field.
      await a.pocket.collection('widgets').patch(id, {'qty': 15}); // +5
      await b.pocket.collection('widgets').patch(id, {'qty': 12}); // +2
      await a.engine.syncNow(); // server qty = 15
      await b.engine.syncNow(); // merge -> 10 + 5 + 2 = 17, then push 17
      await a.engine.syncNow();

      expect(server.records[id]!.data['qty'], 17,
          reason: 'the accumulated total, not last-write-wins');
      expect((await a.pocket.collection('widgets').get(id))!['qty'], 17);
      expect((await b.pocket.collection('widgets').get(id))!['qty'], 17);
      expect(await b.pocket.conflicts.listOpen(), isEmpty,
          reason: 'field-level dirty merge resolved without review');
      expect(await conflictRowCount(a), 0);
      await expectSyncInvariants(b.pocket, 'widgets', id);
    });

    test('AppendOnlyList + SetUnionWithDeletionWins converge with no loss',
        () async {
      CollectionSchema<Object?> notesSchema() => CollectionSchema(
            name: 'notes',
            version: 1,
            fields: commonFields(),
            conflictPolicy: const ConflictPolicy(
              fieldOverrides: {'tags': AppendOnlyListResolver()},
            ),
          );
      CollectionSchema<Object?> setsSchema() => CollectionSchema(
            name: 'sets',
            version: 1,
            fields: commonFields(),
            conflictPolicy: const ConflictPolicy(
              fieldOverrides: {'tags': SetUnionWithDeletionWinsResolver()},
            ),
          );
      final (server, a, b) = await twoClients(
          stores: [notesSchema(), setsSchema()],
          storesList: const ['notes', 'sets']);

      // --- AppendOnlyListResolver over the wire ---
      final noteId =
          server.seed(store: 'notes', data: {'name': 'n', 'tags': ['x']});
      await a.engine.syncNow();
      await b.engine.syncNow();
      await a.pocket.collection('notes').patch(noteId, {'tags': ['x', 'a']});
      await b.pocket.collection('notes').patch(noteId, {'tags': ['x', 'b']});
      await a.engine.syncNow();
      await b.engine.syncNow();
      await a.engine.syncNow();

      final tagsOnA =
          (await a.pocket.collection('notes').get(noteId))!['tags'] as List;
      final tagsOnB =
          (await b.pocket.collection('notes').get(noteId))!['tags'] as List;
      expect(tagsOnA, containsAll(['x', 'a', 'b']),
          reason: 'no element loss across the wire');
      expect(tagsOnA.length, 3, reason: 'and no duplication');
      expect(tagsOnB.length, 3);
      expect(server.records[noteId]!.data['tags'], containsAll(['a', 'b']));
      expect(await b.pocket.conflicts.listOpen(store: 'notes'), isEmpty);

      // --- SetUnionWithDeletionWinsResolver over the wire ---
      final setId =
          server.seed(store: 'sets', data: {'name': 's', 'tags': ['s0']});
      await a.engine.syncNow();
      await b.engine.syncNow();
      await a.pocket.collection('sets').patch(setId, {'tags': ['s0', 'm1']});
      await b.pocket.collection('sets').patch(setId, {'tags': ['s0', 'm2']});
      await a.engine.syncNow();
      await b.engine.syncNow();
      await a.engine.syncNow();

      final unionTags =
          (await a.pocket.collection('sets').get(setId))!['tags'] as List;
      expect(unionTags, containsAll(['s0', 'm1', 'm2']),
          reason: "set union of both sides' additions survives the wire");
      expect(unionTags.length, 3);
      expect((await b.pocket.collection('sets').get(setId))!['tags'],
          containsAll(['m1', 'm2']));
      expect(server.records[setId]!.data['tags'], containsAll(['m1', 'm2']));
      expect(await b.pocket.conflicts.listOpen(store: 'sets'), isEmpty);
      await expectAllSyncInvariants(b.pocket);
    });

    test('resolve-with-merged on a SUPERSEDED conflict re-escalates once '
        'with the fresh remote, then converges', () async {
      final (server, a, b) = await twoClients();
      final id = server.seed(store: 'widgets', data: {'name': 'base'});
      await seedAndSync(server, a, b, id);
      await serverMutateConflictB(server, a, b, id);

      // The remote moves AGAIN while B's conflict is still open (server-side
      // mutation — A stays clean so it never escalates).
      server.mutate(id, {'name': 'round-2'});
      await b.engine.syncNow(); // conflict rows are never silently cleared…
      expect(await b.pocket.conflicts.listOpen(store: 'widgets'), hasLength(1));
      expect((await b.pocket.conflicts.get('widgets', id))!.remote['name'],
          'remote',
          reason: '…but the STALE snapshot stays captured for review');

      // Resolving against the superseded remote re-enters the merge on push:
      // all three sides differ -> the review resolver escalates afresh.
      await b.pocket.conflicts
          .resolve(store: 'widgets', id: id, merged: {'name': 'chosen'});
      await b.engine.syncNow();

      final open = await b.pocket.conflicts.listOpen(store: 'widgets');
      expect(open, hasLength(1),
          reason: 'exactly one OPEN conflict — replaced, never duplicated');
      expect(await conflictRowCount(b), 1,
          reason: 'the stale row was consumed, not accumulated');
      expect(open.single.remote['name'], 'round-2',
          reason: 'the re-escalation carries the FRESH remote');

      // Resolving again (now based on the fresh remote) converges.
      await b.pocket.conflicts
          .resolve(store: 'widgets', id: id, merged: {'name': 'chosen'});
      await b.engine.syncNow();
      expect(await b.pocket.conflicts.listOpen(), isEmpty);
      expect(server.records[id]!.data['name'], 'chosen');

      await a.engine.syncNow();
      expect((await a.pocket.collection('widgets').get(id))!['name'], 'chosen');
      expect(await conflictRowCount(b), 0);
      await expectSyncInvariants(b.pocket, 'widgets', id);
    });

    test('acceptRemote on a superseded conflict converges to the LATEST '
        'remote and drops the stale row', () async {
      final (server, a, b) = await twoClients();
      final id = server.seed(store: 'widgets', data: {'name': 'base'});
      await seedAndSync(server, a, b, id);
      await serverMutateConflictB(server, a, b, id);

      // Remote moves past the captured conflict snapshot.
      server.mutate(id, {'name': 'round-2'});
      await b.engine.syncNow();

      // B accepts the (now stale) remote side anyway.
      await b.pocket.conflicts.acceptRemote('widgets', id);

      // The resolution push re-merges: accepted-local == merge-base, so the
      // CURRENT remote wins — the client tracks the latest truth instead of
      // blindly re-applying the stale snapshot.
      await b.engine.syncNow();

      expect(await b.pocket.conflicts.listOpen(), isEmpty,
          reason: 'the stale conflict row is dropped cleanly');
      expect(await conflictRowCount(b), 0,
          reason: 'no new conflict ever surfaced');
      expect(
          (await b.pocket.collection('widgets').get(id))!['name'], 'round-2',
          reason: 'converged on the LATEST remote, not the stale snapshot');
      expect(server.records[id]!.data['name'], 'round-2');
      expect(await syncStateOf(b, id), SyncState.clean.name);

      await a.engine.syncNow();
      expect(
          (await a.pocket.collection('widgets').get(id))!['name'], 'round-2');
      await expectSyncInvariants(b.pocket, 'widgets', id);
    });
  });
}
