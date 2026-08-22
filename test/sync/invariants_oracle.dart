import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

/// Sync state-machine oracle
///
/// Asserts the invariants that must hold for ONE record after EVERY sync
/// mutation. Run it after each step of a soak/chaos/race test so a regression
/// anywhere in the state machine fails the oracle immediately.
///
/// Documented exceptions (deliberate production behaviour the oracle
/// tolerates):
/// - a `quarantine` sync row has NO domain row (the payload was malformed and
///   never written to the domain) and carries NO outbox op (there was never
///   local work); it does hold `last_error` and a backoff deadline;
/// - `error` (dead-lettered) and `blocked` rows RETAIN their `base_*` from
///   the dirty origin (the terminal/blocked writers do not clear them);
/// - `dirty`/`inFlight` rows created locally and never confirmed remotely
///   (create-path) have no `base_*` — a base only exists once the row has a
///   remote counterpart.
Future<void> expectSyncInvariants(
  LocalPocket pocket,
  String store,
  String id, {
  /// Per-(store,id) tracker of the last observed `last_seen_at`; when given,
  /// invariant 8 (never regress) is enforced across successive calls.
  Map<String, int>? lastSeenTracker,
  String? reason,
}) async {
  final ctx = reason ?? '$store/$id';
  final tableName = pocket.requireTable(store).tableName;

  final sr = await pocket.outbox.readSyncRow(pocket.db, store, id);
  final domRows =
      await pocket.db.query(tableName, where: 'id = ?', whereArgs: [id]);
  final hasDomain = domRows.isNotEmpty;
  final domainHidden = hasDomain ? domRows.first['hidden'] as int : null;
  final op = await pocket.outbox.readOp(pocket.db, store, id);
  final conflicts = await pocket.db.query('lp_conflicts',
      where: 'store = ? AND record_id = ?', whereArgs: [store, id]);
  final queueRows = await pocket.db.query('lp_op_queue',
      where: 'store = ? AND record_id = ?', whereArgs: [store, id]);

  // 1. Domain row exists ⇔ sync row exists (no orphan on either side). A
  //    quarantined record is the only documented sync-only state.
  if (sr == null) {
    expect(hasDomain, isFalse,
        reason: 'no sync row while a domain row exists ($ctx)');
    expect(op, isNull, reason: 'no sync row while an outbox op exists ($ctx)');
  } else if (sr.syncState != SyncState.quarantine) {
    expect(hasDomain, isTrue,
        reason: 'sync row while no domain row exists ($ctx) — quarantine is '
            'the only documented sync-only state');
  }

  if (sr != null) {
    // 2. sync_state ⇔ outbox consistency.
    switch (sr.syncState) {
      case SyncState.clean:
        expect(op, isNull,
            reason: 'a clean row must not carry an outbox op ($ctx)');
      case SyncState.quarantine:
        expect(op, isNull,
            reason: 'a quarantine row carries no outbox op (pull-side, no '
                'local work) ($ctx)');
      case SyncState.dirty:
      case SyncState.inFlight:
      case SyncState.conflict:
      case SyncState.error:
      case SyncState.blocked:
        expect(op, isNotNull,
            reason: 'a ${sr.syncState.name} row must carry an outbox op '
                '($ctx)');
    }
    if (op != null) {
      expect(sr.opId, op.opId,
          reason: 'the sync row op_id must mirror the outbox op ($ctx)');
      // The optimistic-concurrency base is mirrored on BOTH the sync row and
      // the outbox op (they are always written together). A pull-side conflict
      // is the one documented exception: it records the conflicted remote in
      // the sync row only, leaving the op on its older base.
      if (sr.syncState != SyncState.conflict) {
        expect(op.baseUpdated, sr.baseUpdated,
            reason: 'the outbox op base_updated must mirror the sync row '
                '($ctx)');
        expect(op.baseHash, sr.baseHash ?? '',
            reason: 'the outbox op base_hash must mirror the sync row ($ctx)');
      }
    }

    // 3. The applied watermark never exceeds the recorded base: on
    //    conflict/quarantine/skip the domain keeps the last APPLIED version,
    //    so remote_updated <= base_updated whenever a base exists.
    if (sr.baseUpdated != null && sr.remoteUpdated != null) {
      expect(sr.remoteUpdated!.compareTo(sr.baseUpdated!) <= 0, isTrue,
          reason: 'the applied watermark (remote_updated) must never exceed '
              'the recorded base ($ctx)');
    }

    // 4. base_* presence per state.
    switch (sr.syncState) {
      case SyncState.clean:
        expect(sr.baseUpdated, isNull,
            reason: 'a clean row holds no base_updated ($ctx)');
        expect(sr.baseJson, isNull,
            reason: 'a clean row holds no base_json ($ctx)');
        expect(sr.opId, isNull, reason: 'a clean row holds no op_id ($ctx)');
        expect(sr.dirtyFields, isEmpty,
            reason: 'a clean row has no dirty fields ($ctx)');
        expect(sr.attemptCount, 0,
            reason: 'a clean row resets attempt_count ($ctx)');
        expect(sr.nextRetryAt, 0,
            reason: 'a clean row resets next_retry_at ($ctx)');
        expect(sr.lastError, isNull,
            reason: 'a clean row clears last_error ($ctx)');
        expect(sr.remoteUpdated, isNotNull,
            reason: 'a clean row must carry its applied watermark ($ctx)');
      case SyncState.quarantine:
        expect(sr.baseUpdated, isNull,
            reason: 'a quarantine row holds no base ($ctx)');
      case SyncState.conflict:
        expect(sr.baseUpdated, isNotNull,
            reason: 'a conflict captures the remote as the resolution base '
                '($ctx)');
        expect(sr.baseJson, isNotNull,
            reason: 'a conflict captures base_json ($ctx)');
        expect(sr.baseHash, isNotNull,
            reason: 'a conflict captures base_hash ($ctx)');
      default:
        // dirty/inFlight/error/blocked: base_* mirrors the outbox op; a
        // never-remote create has none. When present they are a full set.
        if (sr.baseUpdated != null) {
          expect(sr.baseJson, isNotNull,
              reason: 'base_updated without base_json ($ctx)');
          expect(sr.baseHash, isNotNull,
              reason: 'base_updated without base_hash ($ctx)');
          expect(sr.baseHash!.isNotEmpty, isTrue,
              reason: 'base_hash must be a real hash, not empty ($ctx)');
        }
        if (sr.baseJson != null) {
          expect(sr.baseUpdated, isNotNull,
              reason: 'base_json without base_updated ($ctx)');
        }
    }

    // 5. access_state ⇔ domain hidden column.
    if (hasDomain) {
      if (sr.accessState == AccessState.visible) {
        expect(domainHidden, 0,
            reason: 'a visible sync row must have hidden = 0 ($ctx)');
      } else {
        expect(domainHidden, 1,
            reason: 'a hidden sync row must have hidden = 1 ($ctx)');
      }
    }

    // 6. error / quarantine / blocked rows carry last_error; quarantine
    //    persists a backoff deadline; blocked rows wait on permission
    //    recovery (no timer).
    if (sr.syncState == SyncState.error ||
        sr.syncState == SyncState.quarantine ||
        sr.syncState == SyncState.blocked) {
      expect(sr.lastError, isNotNull,
          reason: 'a ${sr.syncState.name} row must carry last_error ($ctx)');
    }
    if (sr.syncState == SyncState.quarantine) {
      expect(sr.nextRetryAt, greaterThan(0),
          reason: 'a quarantine row persists a backoff deadline ($ctx)');
    }
    if (sr.syncState == SyncState.blocked) {
      expect(sr.nextRetryAt, 0,
          reason: 'a blocked row waits for permission recovery, not a retry '
              'timer ($ctx)');
    }

    // 7. No op-queue op depends on an outbox op that is gone while the record
    //    still has pending work. A dependency is legitimate when the outbox
    //    op still exists, or when the record has settled (clean) or vanished
    //    (no sync row) — the file op is then released, never stranded.
    for (final q in queueRows) {
      final state = q['state'] as String;
      final dep = q['depends_on_op'] as String?;
      if ((state == 'pending' || state == 'failed') && dep != null) {
        final depRows = await pocket.db.query('lp_outbox',
            columns: ['op_id'], where: 'op_id = ?', whereArgs: [dep], limit: 1);
        if (depRows.isEmpty) {
          expect(sr.syncState == SyncState.clean, isTrue,
              reason: 'op-queue op depends on a vanished outbox op while the '
                  'record still has pending work ($ctx)');
        }
      }
    }

    // 8. last_seen_at never regresses (across successive oracle calls).
    if (lastSeenTracker != null) {
      final key = '$store/$id';
      final prev = lastSeenTracker[key];
      final seen = sr.lastSeenAt;
      if (prev != null && seen != null) {
        expect(seen >= prev, isTrue,
            reason: 'last_seen_at regressed for $ctx '
                '($prev -> $seen)');
      }
      if (seen != null) lastSeenTracker[key] = seen;
    }

    // 9. Every lp_conflicts row has a matching sync row in conflict state.
    if (conflicts.isNotEmpty) {
      expect(sr.syncState, SyncState.conflict,
          reason: 'a conflict row requires a conflict sync row ($ctx)');
    }
  }
}

/// All record identities across every store — the union of `lp_sync_row`
/// and each store's domain table — as `'store/id'` keys.
Future<Set<String>> collectSyncRecordIds(LocalPocket pocket) async {
  final ids = <String>{};
  for (final store in pocket.storeNames) {
    for (final r in await pocket.db
        .query('lp_sync_row', where: 'store = ?', whereArgs: [store])) {
      ids.add('$store/${r['record_id']}');
    }
    final table = pocket.requireTable(store).tableName;
    for (final r in await pocket.db.query(table)) {
      ids.add('$store/${r['id']}');
    }
  }
  return ids;
}

/// Runs the oracle across EVERY record of every store.
Future<void> expectAllSyncInvariants(
  LocalPocket pocket, {
  Map<String, int>? lastSeenTracker,
}) async {
  for (final key in await collectSyncRecordIds(pocket)) {
    final sep = key.indexOf('/');
    final store = key.substring(0, sep);
    final id = key.substring(sep + 1);
    await expectSyncInvariants(
      pocket,
      store,
      id,
      lastSeenTracker: lastSeenTracker,
      reason: 'oracle over all records',
    );
  }
}
