import 'dart:async';

import 'package:localpocket/src/kernel/sync/status.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';
import '../support/wire_server.dart';

/// Misc correctness pins over the wire (tests.md #35-38) — a single source
/// of scenarios run against BOTH the in-process MockPbServer and the LIVE
/// PocketBase server via [wireTest].
///
/// - a `syncNow` with a clean outbox is IDEMPOTENT: repeated cycles make no
///   write-path calls, apply nothing, and leave the local + remote state
///   untouched (the pull's read-only list is the only wire touch on a clean
///   cycle — there is deliberately no skip-if-clean optimization, so the pin
///   is zero WRITE churn, not literally zero reads);
/// - two clients bound to two DISTINCT stores write disjointly and each pulls
///   only its own store — store isolation verified over the wire (not just a
///   single-store harness);
/// - the engine's status stream (`SyncStatus`) reconciles `SyncReport` counts
///   (pulled/pushed/dead-lettered) with server-observable state across a
///   multi-cycle pull + push;
/// - opening two pockets with the SAME `:memory:` path yields two DISTINCT
///   databases — the native FFI factory must never silently share an
///   in-memory DB between clients (they interoperate over the wire instead).
void main() {
  /// Polls until [predicate] or fails after [deadlineMs].
  Future<void> waitFor(FutureOr<bool> Function() predicate, String reason,
      {int deadlineMs = 10000}) async {
    final deadline = DateTime.now().add(Duration(milliseconds: deadlineMs));
    while (!await predicate()) {
      if (DateTime.now().isAfter(deadline)) fail(reason);
      await Future<void>.delayed(const Duration(milliseconds: 75));
    }
  }

  group('E2E misc correctness pins over the wire', () {
    wireTest('syncNow with a clean outbox is idempotent (no write churn)',
        (s) async {
      final mock = s is MockWireServer ? s.mock : null;
      final a = await s.createClient();

      // Settle a clean state: the server-side record must be local and clean
      // BEFORE the no-op window. A transient live-server hiccup on the settle
      // pull (e.g. a 429 under the concurrent suite) is retried so it cannot
      // defer the apply into the first repeated cycle and poison the
      // idempotency assertions.
      final id = await s.createRecord(s.store, {'name': 'seeded', 'qty': 1});
      var guard = 0;
      while (await a.pocket.collection(s.store).get(id) == null ||
          await a.engine.syncStore.countPending() > 0) {
        await a.engine.syncNow();
        guard++;
        if (guard > 12) fail('the seeded record never settled');
      }
      expect(a.engine.state, SyncEngineState.idle);

      // Snapshot every WRITE-path counter before the repeated cycles (the
      // pull's read-only list is inherent to a cycle and not part of the
      // no-churn contract).
      final createCalls = mock?.createCalls;
      final updateCalls = mock?.updateCalls;
      final batchCalls = mock?.batchCalls;
      final remoteBefore = await s.countRecords(s.store);

      // Repeated syncNow with nothing pending: never a write, never a dead
      // letter, never a state change. The strict no-op REPORT (no error, no
      // applied) is pinned deterministically on the mock; on the live server
      // a transient pull error may flag `hadError` without violating
      // idempotency, so the write-path + end-state pins are the contract.
      final reports = <SyncReport>[];
      for (var i = 0; i < 3; i++) {
        reports.add(await a.engine.syncNow());
      }
      for (final report in reports) {
        expect(report.pushed, 0, reason: 'nothing to push');
        expect(report.deadLettered, 0, reason: 'nothing dead-lettered');
        expect(report.blocked, 0);
      }
      if (mock != null) {
        for (final report in reports) {
          expect(report.hadError, isFalse,
              reason: 'a clean cycle never errors');
          expect(report.pulled.values.fold<int>(0, (acc, n) => acc + n), 0,
              reason: 'the rewind re-read applies nothing');
        }
        expect(mock.createCalls, createCalls, reason: 'no create churn');
        expect(mock.updateCalls, updateCalls, reason: 'no update churn');
        expect(mock.batchCalls, batchCalls, reason: 'no batch churn');
      }

      // No remote or local state drift on either backend.
      expect(await s.countRecords(s.store), remoteBefore,
          reason: 'the server state is untouched');
      expect(await a.engine.syncStore.countPending(), 0);
      expect(
          a.engine.state, anyOf(SyncEngineState.idle, SyncEngineState.backoff),
          reason: 'no pending work remains (a transient live pull error parks '
              'in backoff, never a dirty store)');
      final row = await a.pocket.collection(s.store).get(id);
      expect(row!['name'], 'seeded');
      expect(row['qty'], 1);
    });

    wireTest('two clients × two stores: disjoint writes stay isolated',
        (s) async {
      final sa = s.store;
      final sb = s.siblingStore;
      final a = await s.createClient(
          storeBuilders: [(_) => widgetsSchema(name: sa)], storesList: [sa]);
      final b = await s.createClient(
          storeBuilders: [(_) => widgetsSchema(name: sb)], storesList: [sb]);

      // Disjoint local writes land in their own store.
      await a.pocket.collection(sa).put(record(name: 'a-1', qty: 1));
      await b.pocket.collection(sb).put(record(name: 'b-1', qty: 2));
      await a.engine.syncNow();
      await b.engine.syncNow();
      expect(await s.countRecords(sa), 1, reason: 'A wrote exactly one');
      expect(await s.countRecords(sb), 1, reason: 'B wrote exactly one');

      // Server-side creates in both stores.
      final idA = await s.createRecord(sa, {'name': 'srv-a'});
      final idB = await s.createRecord(sb, {'name': 'srv-b'});
      await a.engine.syncNow();
      await b.engine.syncNow();

      // Each client pulls ONLY its own store — no cross-store leakage.
      final inA = await a.pocket.collection(sa).query().all().fetch();
      final inB = await b.pocket.collection(sb).query().all().fetch();
      expect(inA.items, hasLength(2), reason: 'A holds its own two records');
      expect(inB.items, hasLength(2), reason: 'B holds its own two records');
      expect([for (final r in inA.items) r['id']], containsAll([idA]));
      expect([for (final r in inA.items) r['id']], isNot(contains(idB)),
          reason: "B's record never leaks into A's store");
      expect([for (final r in inB.items) r['id']], containsAll([idB]));
      expect([for (final r in inB.items) r['id']], isNot(contains(idA)),
          reason: "A's record never leaks into B's store");
      expect(await a.engine.syncStore.countPending(), 0);
      expect(await b.engine.syncStore.countPending(), 0);
    });

    wireTest('status stream reconciles report counts with server state',
        (s) async {
      final a = await s.createClient();
      final statuses = <SyncStatus>[];
      final sub = a.engine.status.listen(statuses.add);
      addTearDown(() => sub.cancel());

      // Cycle 1 — pull N server-side records.
      const n = 5;
      for (var i = 0; i < n; i++) {
        await s.createRecord(s.store, {'name': 'r$i', 'qty': i});
      }
      final pullReport = await a.engine.syncNow();
      expect(pullReport.hadError, isFalse);
      expect(pullReport.pulled[s.store], n,
          reason: 'the report accounts every pulled record');
      expect(pullReport.deadLettered, 0);
      expect(await a.pocket.collection(s.store).query().all().count(), n);
      expect(await a.engine.syncStore.countPending(), 0);

      // Cycle 2 — push M local writes.
      const m = 4;
      for (var i = 0; i < m; i++) {
        await a.pocket
            .collection(s.store)
            .put(record(name: 'local$i', qty: 100 + i));
      }
      final pushReport = await a.engine.syncNow();
      expect(pushReport.hadError, isFalse);
      expect(pushReport.pushed, m,
          reason: 'the report accounts every pushed record');
      expect(pushReport.deadLettered, 0);
      expect(await s.countRecords(s.store), n + m,
          reason: 'server-observable state matches the report');
      expect(await a.engine.syncStore.countPending(), 0);

      // The status stream observed the cycle transitions and settled on an
      // idle snapshot with zero work outstanding.
      await waitFor(
          () =>
              statuses.isNotEmpty &&
              statuses.last.state == SyncEngineState.idle &&
              statuses.last.lastSyncAt != null,
          'the status stream never settled on a final idle snapshot');
      expect(statuses.map((st) => st.state), contains(SyncEngineState.pulling),
          reason: 'the stream observed the pull phase');
      expect(statuses.map((st) => st.state), contains(SyncEngineState.pushing),
          reason: 'the stream observed the push phase');
      final last = statuses.last;
      expect(last.pending, 0);
      expect(last.conflicts, 0);
      expect(last.hidden, 0);
      expect(last.lastSuccessfulSyncAt, isNotNull,
          reason: 'the last cycles were error-free');
    });

    wireTest('same :memory: path creates DISTINCT local DBs, never shared',
        (s) async {
      final a =
          await s.createClient(path: inMemoryDatabasePath, autoStart: false);
      final b =
          await s.createClient(path: inMemoryDatabasePath, autoStart: false);

      // The FFI factory must not cache `:memory:` per path: two opens are two
      // distinct databases, not one silently-shared instance.
      expect(identical(a.pocket.db, b.pocket.db), isFalse,
          reason: 'two openPocket(:memory:) calls yield two distinct DBs');

      // A's local write is invisible to B before any sync.
      await a.pocket.collection(s.store).put(record(name: 'a-only', qty: 1));
      expect(await a.pocket.collection(s.store).query().all().count(), 1);
      expect(await b.pocket.collection(s.store).query().all().count(), 0,
          reason: 'B never sees A\u0027s write through a shared in-memory DB');

      // They interoperate over the wire: A pushes, B pulls.
      await a.engine.start();
      expect(await s.countRecords(s.store), 1,
          reason: "A's write reached the server");
      await b.engine.start();
      expect(await b.pocket.collection(s.store).query().all().count(), 1,
          reason: 'B pulls the record through the server, not a shared DB');
      final id =
          (await a.pocket.collection(s.store).query().all().ids()).single;
      expect((await b.pocket.collection(s.store).get(id))!['name'], 'a-only');
      expect(await a.engine.syncStore.countPending(), 0);
      expect(await b.engine.syncStore.countPending(), 0);
    });
  });
}
