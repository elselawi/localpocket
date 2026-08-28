import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';
import '../../sync/invariants_oracle.dart';
import '../support/wire_server.dart';

/// Conflict & merge over the wire — a SINGLE source of scenarios run against
/// BOTH the in-process MockPbServer and the LIVE PocketBase server via
/// [wireTest]. The full detect -> escalate -> resolve -> propagate loop:
///
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

/// True when [key] genuinely diverged on BOTH sides from [ctx]'s base.
bool _twoSided(MergeContext ctx, String key) {
  final b = ctx.base[key];
  final l = ctx.local[key];
  final r = ctx.remote[key];
  return !deepEquals(l, r) && !deepEquals(l, b) && !deepEquals(r, b);
}

/// The value a non-conflicting key must resolve to: with no genuine two-sided
/// divergence at most ONE side differs from base, so the changed side wins
/// (or either side when both agree). This is the minimal statement of the
/// resolver's fallback policy — deliberately NOT a copy of MergeEngine's
/// rules, only their consequence in the non-conflict case.
Object? _changedSideWins(MergeContext ctx, String key) =>
    !deepEquals(ctx.base[key], ctx.local[key])
        ? ctx.local[key]
        : ctx.remote[key];

/// A review resolver: declines (-> needsReview) only when at least one field
/// genuinely diverged on both sides; otherwise resolves mechanically. This is
/// the procedural needsReview path an application would actually install.
Future<MergeResult?> _reviewOnTrueConflict(MergeContext ctx) async {
  final keys = <String>{
    ...ctx.base.keys,
    ...ctx.local.keys,
    ...ctx.remote.keys
  };
  for (final k in keys) {
    if (_twoSided(ctx, k)) return null; // decline -> escalate to review
  }
  return MergeResult(merged: {
    for (final k in keys) k: _changedSideWins(ctx, k),
  });
}

/// A counting resolver that proves the resolver path ran while still
/// converging (remote wins genuine conflicts).
class _CountingConflictResolver extends ConflictResolver {
  int invocations = 0;

  @override
  MergeResult resolve(MergeContext ctx) {
    invocations++;
    final keys = <String>{
      ...ctx.base.keys,
      ...ctx.local.keys,
      ...ctx.remote.keys
    };
    return MergeResult(merged: {
      for (final k in keys)
        k: _twoSided(ctx, k)
            ? ctx.remote[k] // the resolver's policy: remote wins conflicts
            : _changedSideWins(ctx, k),
    });
  }
}

void main() {
  /// Fields shared by every schema in this suite.
  List<Field> commonFields() => [
        Field.text('name', required: true),
        Field.int('qty'),
        Field.jsonList('tags'),
      ];

  /// A schema whose collection resolver escalates genuine two-sided conflicts
  /// to manual review and resolves everything else mechanically — the default
  /// for the shared scenarios (the default no-resolver policy never
  /// escalates, so a conflict row would never be raised).
  CollectionSchema<Object?> reviewSchema(String store) => CollectionSchema(
        name: store,
        version: 1,
        fields: commonFields(),
        conflictPolicy: ConflictPolicy(
            collectionResolver: CustomResolver(_reviewOnTrueConflict)),
      );

  /// The current server-side `data` payload for [id].
  Future<Map<String, Object?>> remoteData(WireServer s, String id) async =>
      (await s.readRecord(s.store, id))!['data']! as Map<String, Object?>;

  /// Two isolated clients (separate file DBs + transports) bound to [s].
  /// Defaults to the [reviewSchema] so conflicts escalate to `lp_conflicts`.
  Future<(WireClient, WireClient)> twoClients(
    WireServer s, {
    List<CollectionSchema Function(String)>? storeBuilders,
    List<String>? storesList,
  }) async {
    final builders = storeBuilders ?? [reviewSchema];
    final dbA = await tempDbPath();
    final dbB = await tempDbPath();
    final a = await s.createClient(
        path: dbA.path, storeBuilders: builders, storesList: storesList);
    final b = await s.createClient(
        path: dbB.path, storeBuilders: builders, storesList: storesList);
    s.onClose(() => dbA.cleanup());
    s.onClose(() => dbB.cleanup());
    return (a, b);
  }

  /// Standard conflict setup: B patches locally; then the SERVER-side copy is
  /// mutated directly (no client push involved); B's next cycle pulls the
  /// fresh remote into its dirty row -> needsReview -> open conflict. A
  /// stays clean throughout.
  Future<void> serverMutateConflictB(
      WireServer s, WireClient a, WireClient b, String id,
      {String localName = 'from-B', String remoteName = 'remote'}) async {
    await b.pocket.collection(s.store).patch(id, {'name': localName});
    final current = await remoteData(s, id);
    await s.updateRecord(s.store, id, {...current, 'name': remoteName});
    await b.engine.syncNow(); // pull escalates before any push
  }

  Future<int> conflictRowCount(WireClient h) async =>
      (await h.pocket.db.rawQuery('SELECT COUNT(*) AS c FROM lp_conflicts'))
          .first['c'] as int;

  Future<String> syncStateOf(WireServer s, WireClient h, String id) async {
    final rows = await h.pocket.db.query('lp_sync_row',
        where: 'store = ? AND record_id = ?', whereArgs: [s.store, id]);
    return rows.single['sync_state'] as String;
  }

  group('E2E conflicts over the wire', () {
    wireTest(
        'needsReview end-to-end: detect -> escalate -> resolve -> '
        'propagate', (s) async {
      final (a, b) = await twoClients(s);
      final id = await s.createRecord(s.store, {'name': 'base'});
      await a.engine.syncNow();
      await b.engine.syncNow();
      await serverMutateConflictB(s, a, b, id);

      // Escalated on B: open conflict, sync row parked, domain untouched.
      final open = await b.pocket.conflicts.listOpen(store: s.store);
      expect(open, hasLength(1));
      final c = open.single;
      expect(c.store, s.store);
      expect(c.recordId, id);
      expect(c.base['name'], 'base');
      expect(c.local['name'], 'from-B',
          reason: "the conflict captures B's local side");
      expect(c.remote['name'], 'remote',
          reason: 'and the remote side that triggered it');
      expect(await syncStateOf(s, b, id), SyncState.conflict.name);
      expect((await b.pocket.collection(s.store).get(id))!['name'], 'from-B',
          reason: "nothing was applied to B's domain row");
      expect((await a.pocket.conflicts.listOpen()), isEmpty,
          reason: 'A converged cleanly; only B reviews');

      // The app resolves with a merged document.
      await b.pocket.conflicts.resolve(
          store: s.store, id: id, merged: {'name': 'chosen', 'qty': 1});
      expect(await b.pocket.conflicts.listOpen(store: s.store), isEmpty);

      // The resolution pushes (base == conflict-time remote) and propagates.
      await b.engine.syncNow();
      expect((await remoteData(s, id))['name'], 'chosen',
          reason: 'the chosen document won on the server');

      await a.engine.syncNow();
      expect((await a.pocket.collection(s.store).get(id))!['name'], 'chosen',
          reason: 'A converges on the resolution without reviewing anything');
      expect((await b.pocket.collection(s.store).get(id))!['name'], 'chosen');
      expect(await syncStateOf(s, b, id), SyncState.clean.name);

      await expectSyncInvariants(b.pocket, s.store, id,
          reason: 'post-resolution state machine holds');
    });

    wireTest('acceptLocal overrides the remote edit over the wire', (s) async {
      final (a, b) = await twoClients(s);
      final id = await s.createRecord(s.store, {'name': 'base'});
      await a.engine.syncNow();
      await b.engine.syncNow();
      await serverMutateConflictB(s, a, b, id);

      await b.pocket.conflicts.acceptLocal(s.store, id);
      expect(await b.pocket.conflicts.listOpen(store: s.store), isEmpty);

      await b.engine.syncNow();
      expect((await remoteData(s, id))['name'], 'from-B',
          reason: 'the local choice overwrites the server edit');

      await a.engine.syncNow();
      expect((await a.pocket.collection(s.store).get(id))!['name'], 'from-B',
          reason: "B's resolution propagates to A on its next pull");
      expect((await b.pocket.collection(s.store).get(id))!['name'], 'from-B');
      expect(await syncStateOf(s, b, id), SyncState.clean.name);
      expect(await conflictRowCount(b), 0);
    });

    wireTest('acceptRemote converges without re-resolving and propagates',
        (s) async {
      final (a, b) = await twoClients(s);
      final id = await s.createRecord(s.store, {'name': 'base'});
      await a.engine.syncNow();
      await b.engine.syncNow();
      await serverMutateConflictB(s, a, b, id);

      // B accepts the remote side; the conflict closes permanently.
      await b.pocket.conflicts.acceptRemote(s.store, id);
      expect(await b.pocket.conflicts.listOpen(store: s.store), isEmpty);

      await b.engine.syncNow();
      expect((await b.pocket.collection(s.store).get(id))!['name'], 'remote');
      expect(await syncStateOf(s, b, id), SyncState.clean.name,
          reason: 'settled clean — no new conflict was raised');

      // Further cycles stay quiet: the winner never needs resolving again.
      await b.engine.syncNow();
      expect(await b.pocket.conflicts.listOpen(), isEmpty);
      expect((await remoteData(s, id))['name'], 'remote');
      await a.engine.syncNow();
      expect((await a.pocket.collection(s.store).get(id))!['name'], 'remote',
          reason: 'A pulls the winning doc and stays conflict-free');
      expect(await a.pocket.conflicts.listOpen(), isEmpty);
    });

    wireTest('collection-level resolver converges automatically (proven path)',
        (s) async {
      // Each client gets its OWN counting resolver instance so the test can
      // attribute engine invocations per client.
      final resolverA = _CountingConflictResolver();
      final resolverB = _CountingConflictResolver();
      CollectionSchema<Object?> schema(String store, ConflictResolver r) =>
          CollectionSchema(
            name: store,
            version: 1,
            fields: commonFields(),
            conflictPolicy: ConflictPolicy(collectionResolver: r),
          );

      final dbA = await tempDbPath();
      final dbB = await tempDbPath();
      final a = await s.createClient(
          path: dbA.path, storeBuilders: [(st) => schema(st, resolverA)]);
      final b = await s.createClient(
          path: dbB.path, storeBuilders: [(st) => schema(st, resolverB)]);
      s.onClose(() => dbA.cleanup());
      s.onClose(() => dbB.cleanup());

      final id = await s.createRecord(s.store, {'name': 'base'});
      await a.engine.syncNow();
      await b.engine.syncNow();

      await a.pocket.collection(s.store).patch(id, {'name': 'from-A'});
      await b.pocket.collection(s.store).patch(id, {'name': 'from-B'});
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
      expect((await b.pocket.collection(s.store).get(id))!['name'], 'from-A',
          reason: 'remote-wins resolver output');
      expect((await remoteData(s, id))['name'], 'from-A');
      expect((await a.pocket.collection(s.store).get(id))!['name'], 'from-A',
          reason: 'both clients converge without either side resolving');
      expect(await conflictRowCount(b), 0);
    });

    wireTest('CounterResolver accumulates disjoint deltas over the wire',
        (s) async {
      CollectionSchema<Object?> schema(String store) => CollectionSchema(
            name: store,
            version: 1,
            fields: commonFields(),
            conflictPolicy: const ConflictPolicy(
              fieldOverrides: {'qty': CounterResolver()},
            ),
          );
      final (a, b) = await twoClients(s, storeBuilders: [schema]);
      final id = await s.createRecord(s.store, {'name': 'base', 'qty': 10});
      await a.engine.syncNow();
      await b.engine.syncNow();

      // Disjoint increments of the SAME counter field.
      await a.pocket.collection(s.store).patch(id, {'qty': 15}); // +5
      await b.pocket.collection(s.store).patch(id, {'qty': 12}); // +2
      await a.engine.syncNow(); // server qty = 15
      await b.engine.syncNow(); // merge -> 10 + 5 + 2 = 17, then push 17
      await a.engine.syncNow();

      expect((await remoteData(s, id))['qty'], 17,
          reason: 'the accumulated total, not last-write-wins');
      expect((await a.pocket.collection(s.store).get(id))!['qty'], 17);
      expect((await b.pocket.collection(s.store).get(id))!['qty'], 17);
      expect(await b.pocket.conflicts.listOpen(), isEmpty,
          reason: 'field-level dirty merge resolved without review');
      expect(await conflictRowCount(a), 0);
      await expectSyncInvariants(b.pocket, s.store, id);
    });

    wireTest('AppendOnlyList + SetUnionWithDeletionWins converge with no loss',
        (s) async {
      CollectionSchema<Object?> notesSchema(String store) => CollectionSchema(
            name: store,
            version: 1,
            fields: commonFields(),
            conflictPolicy: const ConflictPolicy(
              fieldOverrides: {'tags': AppendOnlyListResolver()},
            ),
          );
      CollectionSchema<Object?> setsSchema(String store) => CollectionSchema(
            name: store,
            version: 1,
            fields: commonFields(),
            conflictPolicy: const ConflictPolicy(
              fieldOverrides: {'tags': SetUnionWithDeletionWinsResolver()},
            ),
          );
      // Two DISTINCT policies need two stores; the facade renames builders to
      // the server's single store, so this scenario pins explicit names and
      // stays mock-only (the live server is one unique store per run).
      final (a, b) = await twoClients(
        s,
        storeBuilders: [
          (_) => notesSchema('notes'),
          (_) => setsSchema('sets'),
        ],
        storesList: const ['notes', 'sets'],
      );
      const storeN = 'notes';
      const storeS = 'sets';

      // --- AppendOnlyListResolver over the wire ---
      final noteId = await s.createRecord(storeN, {
        'name': 'n',
        'tags': ['x']
      });
      await a.engine.syncNow();
      await b.engine.syncNow();
      await a.pocket.collection(storeN).patch(noteId, {
        'tags': ['x', 'a']
      });
      await b.pocket.collection(storeN).patch(noteId, {
        'tags': ['x', 'b']
      });
      await a.engine.syncNow();
      await b.engine.syncNow();
      await a.engine.syncNow();

      final tagsOnA =
          (await a.pocket.collection(storeN).get(noteId))!['tags'] as List;
      final tagsOnB =
          (await b.pocket.collection(storeN).get(noteId))!['tags'] as List;
      expect(tagsOnA, containsAll(['x', 'a', 'b']),
          reason: 'no element loss across the wire');
      expect(tagsOnA.length, 3, reason: 'and no duplication');
      expect(tagsOnB.length, 3);
      expect(
          (await s.readRecord(storeN, noteId))!['data']! as Map<String, Object?>,
          containsPair('tags', containsAll(['a', 'b'])));
      expect(await b.pocket.conflicts.listOpen(store: storeN), isEmpty);
      // --- SetUnionWithDeletionWinsResolver over the wire ---
      final setId = await s.createRecord(storeS, {
        'name': 's',
        'tags': ['s0']
      });
      await a.engine.syncNow();
      await b.engine.syncNow();
      await a.pocket.collection(storeS).patch(setId, {
        'tags': ['s0', 'm1']
      });
      await b.pocket.collection(storeS).patch(setId, {
        'tags': ['s0', 'm2']
      });
      await a.engine.syncNow();
      await b.engine.syncNow();
      await a.engine.syncNow();

      final unionTags =
          (await a.pocket.collection(storeS).get(setId))!['tags'] as List;
      expect(unionTags, containsAll(['s0', 'm1', 'm2']),
          reason: "set union of both sides' additions survives the wire");
      expect(unionTags.length, 3);
      expect((await b.pocket.collection(storeS).get(setId))!['tags'],
          containsAll(['m1', 'm2']));
      expect((await remoteData(s, setId))['tags'], containsAll(['m1', 'm2']));
      expect(await b.pocket.conflicts.listOpen(store: storeS), isEmpty);
      await expectAllSyncInvariants(b.pocket);
    }, live: false);

    wireTest(
        'resolve-with-merged on a SUPERSEDED conflict re-escalates once '
        'with the fresh remote, then converges', (s) async {
      final (a, b) = await twoClients(s);
      final id = await s.createRecord(s.store, {'name': 'base'});
      await a.engine.syncNow();
      await b.engine.syncNow();
      await serverMutateConflictB(s, a, b, id);

      // The remote moves AGAIN while B's conflict is still open (server-side
      // mutation — A stays clean so it never escalates).
      final cur = await remoteData(s, id);
      await s.updateRecord(s.store, id, {...cur, 'name': 'round-2'});
      await b.engine.syncNow(); // conflict rows are never silently cleared…
      expect(await b.pocket.conflicts.listOpen(store: s.store), hasLength(1));
      expect(
          (await b.pocket.conflicts.get(s.store, id))!.remote['name'], 'remote',
          reason: '…but the STALE snapshot stays captured for review');

      // Resolving against the superseded remote re-enters the merge on push:
      // all three sides differ -> the review resolver escalates afresh.
      await b.pocket.conflicts
          .resolve(store: s.store, id: id, merged: {'name': 'chosen'});
      await b.engine.syncNow();

      final open = await b.pocket.conflicts.listOpen(store: s.store);
      expect(open, hasLength(1),
          reason: 'exactly one OPEN conflict — replaced, never duplicated');
      expect(await conflictRowCount(b), 1,
          reason: 'the stale row was consumed, not accumulated');
      expect(open.single.remote['name'], 'round-2',
          reason: 'the re-escalation carries the FRESH remote');

      // Resolving again (now based on the fresh remote) converges.
      await b.pocket.conflicts
          .resolve(store: s.store, id: id, merged: {'name': 'chosen'});
      await b.engine.syncNow();
      expect(await b.pocket.conflicts.listOpen(), isEmpty);
      expect((await remoteData(s, id))['name'], 'chosen');

      await a.engine.syncNow();
      expect((await a.pocket.collection(s.store).get(id))!['name'], 'chosen');
      expect(await conflictRowCount(b), 0);
      await expectSyncInvariants(b.pocket, s.store, id);
    });

    wireTest(
        'acceptRemote on a superseded conflict converges to the LATEST '
        'remote and drops the stale row', (s) async {
      final (a, b) = await twoClients(s);
      final id = await s.createRecord(s.store, {'name': 'base'});
      await a.engine.syncNow();
      await b.engine.syncNow();
      await serverMutateConflictB(s, a, b, id);

      // Remote moves past the captured conflict snapshot.
      final cur = await remoteData(s, id);
      await s.updateRecord(s.store, id, {...cur, 'name': 'round-2'});
      await b.engine.syncNow();

      // B accepts the (now stale) remote side anyway.
      await b.pocket.conflicts.acceptRemote(s.store, id);

      // The resolution push re-merges: accepted-local == merge-base, so the
      // CURRENT remote wins — the client tracks the latest truth instead of
      // blindly re-applying the stale snapshot.
      await b.engine.syncNow();

      expect(await b.pocket.conflicts.listOpen(), isEmpty,
          reason: 'the stale conflict row is dropped cleanly');
      expect(await conflictRowCount(b), 0,
          reason: 'no new conflict ever surfaced');
      expect((await b.pocket.collection(s.store).get(id))!['name'], 'round-2',
          reason: 'converged on the LATEST remote, not the stale snapshot');
      expect((await remoteData(s, id))['name'], 'round-2');
      expect(await syncStateOf(s, b, id), SyncState.clean.name);

      await a.engine.syncNow();
      expect((await a.pocket.collection(s.store).get(id))!['name'], 'round-2');
      await expectSyncInvariants(b.pocket, s.store, id);
    });
  });
}
