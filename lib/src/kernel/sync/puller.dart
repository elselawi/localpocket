import 'dart:convert';

import '../../kernel/database_adapter.dart';

import '../../kernel/canonical_json.dart';
import '../../kernel/change_bus.dart';
import '../../kernel/codec.dart';
import '../../kernel/ids.dart';
import '../../kernel/local_pocket.dart';
import '../../kernel/schema.dart';
import '../../kernel/transaction.dart';
import '../files/file_sync.dart';
import 'apply_lane.dart';
import 'mapping.dart';
import 'merge.dart';
import 'sync_backend.dart';
import 'sync_config.dart';
import 'sync_store.dart';
import 'sync_tables.dart';

/// Result of applying one normalized remote record during a pull.
enum ApplyResult {
  /// The remote state was written to the domain (insert/update/merge/converge).
  applied,

  /// The record was quarantined (malformed/foreign) and never reached the domain.
  quarantined,

  /// A real-time/pull conflict was escalated to `lp_conflicts`.
  conflict,

  /// The record was already observed (no-op); nothing changed.
  skipped,
}

/// {@template localpocket.pull_report}
/// Summary of one incremental pull pass.
/// {@endtemplate}
class PullReport {
  /// Creates a report for a pull pass.
  ///
  /// {@macro localpocket.pull_report}
  const PullReport(this.store, this.applied, this.pages,
      {this.quarantined = 0, this.conflicts = 0, this.hitPageLimit = false});

  /// The store that was pulled.
  final String store;

  /// The number of records written to the domain.
  final int applied;

  /// The number of records quarantined during the pull.
  final int quarantined;

  /// The number of conflicts escalated during the pull.
  final int conflicts;

  /// The number of pages processed.
  final int pages;

  /// Whether the pull stopped because [maxPagesPerPass] was reached with a
  /// full page (more changes likely remain) — the engine uses this to continue
  /// immediately instead of waiting for the next sync interval.
  final bool hitPageLimit;
}

/// {@template localpocket.puller}
/// Incremental pull + the conflict-aware applier.
///
/// This is the single authoritative ingest path: SSE hints, sweeps and manual
/// refreshes all funnel through [pullStore]/[applyRemote].
/// {@endtemplate}
class Puller {
  /// Creates a puller for [pocket] using [backend] and [config].
  ///
  /// {@macro localpocket.puller}
  Puller(this.pocket, this.backend, this.config, this.syncStore,
      {this.fileLane, ApplyLane? applyLane})
      : applyLane = applyLane ?? ApplyLane();

  /// The local database and collection registry.
  final LocalPocket pocket;

  /// The remote synchronization backend.
  final SyncBackend backend;

  /// Pull and retry configuration.
  final SyncConfig config;

  /// Persistent synchronization metadata store.
  final SyncStore syncStore;

  /// Optional file synchronization lane for attachment reconciliation.
  final FileSyncLane? fileLane;

  /// Shared serialization lane for every remote-application transaction in
  /// this puller. The engine passes its own lane so all remote applies form
  /// one logical stream; a standalone puller defaults to a private lane.
  final ApplyLane applyLane;

  /// The initial remote timestamp used when no cursor exists.
  static const String epoch = '1970-01-01 00:00:00.000Z';

  /// `next_retry_at` sentinel for a quarantined record whose attempt budget
  /// is exhausted: far enough in the future that the sweep's
  /// `next_retry_at <= now` never selects it, yet small enough to survive
  /// dart2js doubles (year 9999 in epoch ms).
  static const int _quarantineParkMs = 253402300799000;

  int _nowMs() => config.now();

  // ------------------------------------------------------------------ pull --

  /// Pulls and applies the next remote change pages for [store].
  Future<PullReport> pullStore(String store) async {
    var cursor = await syncStore.readCursor(store);
    var from =
        cursor == null ? epoch : rewindUpdated(cursor.updated, config.rewind);
    // The rewind resets the tie-break to the earliest id.
    String? fromId;
    var pages = 0;
    var applied = 0;
    var quarantined = 0;
    var conflicts = 0;
    var hitPageLimit = false;
    // PB hard-caps perPage at 500 (above is a 400); the same clamped size
    // must drive both the request and the page-completion check below.
    final pageSize = config.maxPage.clamp(1, pbMaxPage).toInt();

    while (true) {
      final page = await backend.listChanges(
        store,
        fromUpdated: from,
        fromId: fromId,
        perPage: pageSize,
      );
      if (page.isEmpty) break;
      pocket.perf.pullPages++;
      // The cursor must advance to the MAXIMUM (updated, id) tuple actually
      // seen, not the page's last element: a reordered/unsorted backend page
      // would otherwise skip records that sort after `last`.
      final last = _maxTuple(page);

      final normalizedBatch = await normalizeRemoteBatchAsync(
        pocket.requireTable(store).schema,
        page,
      );

      await applyLane.run(() => pocket.transaction((tx) async {
            final c = cursor;
            final exec = tx.executor;
            final schema = pocket.requireTable(store).schema;
            final pageIds = [
              for (final item in normalizedBatch) item.remote.id
            ];
            final (srById, localById) =
                await _probeBatchRows(exec, store, schema, pageIds);
            final written = <String>{};
            for (final item in normalizedBatch) {
              final r = item.remote;
              // Idempotent re-delivery from the rewind window: the cursor
              // bound is the skip authority (a record at/below it was already
              // applied or deliberately purged). A record genuinely missed by
              // a reordered page is healed by the sweep's targeted fetch.
              if (c != null && _tupleLte(r, c)) continue;
              final ApplyResult result;
              if (written.contains(r.id)) {
                // Duplicate id within this page: the first delivery already
                // wrote the row in this transaction, so re-read rather than
                // use prefetched state.
                result = await applyNormalizedRemote(tx, store, item);
              } else {
                result = await applyNormalizedRemote(tx, store, item,
                    prefetchedSyncRow: srById[r.id],
                    prefetchedLocalRow: localById[r.id],
                    prefetchedRowChecked: true,
                    prefetchedSyncRowChecked: true);
                written.add(r.id);
              }
              // Only records written to the domain count as `applied`.
              switch (result) {
                case ApplyResult.applied:
                  applied++;
                  pocket.perf.pullAppliedRows++;
                  break;
                case ApplyResult.quarantined:
                  quarantined++;
                  break;
                case ApplyResult.conflict:
                  conflicts++;
                  break;
                case ApplyResult.skipped:
                  break;
              }
            }
            // The cursor only advances forward; never regress it.
            final advanced = c == null || !_tupleLte(last, c);
            final nextUpdated = advanced ? last.updated : c.updated;
            final nextId = advanced ? last.id : c.id;
            await syncStore.writeCursor(tx.executor, store,
                updated: nextUpdated, id: nextId);
            cursor = PullCursor(nextUpdated, nextId);
          }));

      from = last.updated;
      fromId = last.id;
      pages++;
      if (page.length < pageSize) break;
      if (pages >= config.maxPagesPerPass) {
        hitPageLimit = true;
        break;
      }
    }
    return PullReport(store, applied, pages,
        quarantined: quarantined,
        conflicts: conflicts,
        hitPageLimit: hitPageLimit);
  }

  bool _tupleLte(RemoteRecord r, PullCursor c) {
    final u = r.updated.compareTo(c.updated);
    if (u < 0) return true;
    if (u > 0) return false;
    return r.id.compareTo(c.id) <= 0;
  }

  bool _tupleGreater(RemoteRecord a, RemoteRecord b) {
    final u = a.updated.compareTo(b.updated);
    if (u != 0) return u > 0;
    return a.id.compareTo(b.id) > 0;
  }

  /// The record with the greatest (updated, id) tuple in [page].
  RemoteRecord _maxTuple(List<RemoteRecord> page) {
    var max = page.first;
    for (final r in page.skip(1)) {
      if (_tupleGreater(r, max)) max = r;
    }
    return max;
  }

  /// Realtime fast-path: apply a realtime event's embedded record directly
  /// when the local row is clean and the event is newer (or the record is
  /// unknown). NEVER advances the cursor — the next delta pull re-delivers
  /// it idempotently.
  Future<bool> fastPathApply(RemoteRecord remote) async {
    var applied = false;
    await applyLane.run(() => pocket.transaction((tx) async {
          final exec = tx.executor;
          final sr =
              await pocket.outbox.readSyncRow(exec, remote.store, remote.id);
          if (sr == null) {
            // Unknown record (create event): safe to insert.
            await applyRemote(tx, remote.store, remote);
            applied = true;
            return;
          }
          if (sr.syncState != SyncState.clean) {
            return; // dirty: let the pull merge
          }
          if (sr.remoteUpdated != null &&
              remote.updated.compareTo(sr.remoteUpdated!) <= 0) {
            return; // stale event
          }
          await applyRemote(
            tx,
            remote.store,
            remote,
            prefetchedSyncRow: sr,
            prefetchedSyncRowChecked: true,
          );
          applied = true;
        }));
    return applied;
  }

  /// Batch full fetches for sweep self-heals: multiple re-visible or drifted
  /// records are applied in a single transaction per chunk to avoid per-record
  /// WAL sync thrashing on native full-durability writes.
  Future<void> fetchBatch(String store, List<String> ids,
      {int batchSize = 200}) async {
    if (ids.isEmpty) return;
    final queue = List<String>.from(ids);
    while (queue.isNotEmpty) {
      final chunk = queue.take(batchSize).toList();
      queue.removeRange(0, chunk.length);

      final notFoundIds = <String>[];
      final fetched = <RemoteRecord>[];
      for (final id in chunk) {
        RemoteRecord? rec;
        try {
          rec = await backend.getRecord(id);
        } on NotFoundError {
          notFoundIds.add(id);
          continue;
        } on AuthError {
          rethrow;
        } on SyncError {
          continue; // transient: leave as-is
        }
        if (rec == null) {
          notFoundIds.add(id);
          continue;
        }
        fetched.add(rec);
      }
      if (notFoundIds.isNotEmpty) {
        await markHiddenMany(store, notFoundIds);
      }
      if (fetched.isEmpty) continue;

      final schema = pocket.requireTable(store).schema;
      final normalized = [
        for (final remote in fetched) normalizeSingleRemote(schema, remote)
      ];
      await applyLane.run(() => pocket.transaction((tx) async {
            final exec = tx.executor;
            final pageIds = [for (final item in normalized) item.remote.id];
            final (srById, localById) =
                await _probeBatchRows(exec, store, schema, pageIds);
            final written = <String>{};
            for (final item in normalized) {
              final r = item.remote;
              if (written.contains(r.id)) {
                await applyNormalizedRemote(tx, store, item);
              } else {
                await applyNormalizedRemote(tx, store, item,
                    prefetchedSyncRow: srById[r.id],
                    prefetchedLocalRow: localById[r.id],
                    prefetchedRowChecked: true,
                    prefetchedSyncRowChecked: true);
                written.add(r.id);
              }
            }
          }));
    }
  }

  /// A targeted full fetch of one record (sweep self-heal / re-visibility).
  Future<void> fetchOne(String store, String id) async {
    await fetchBatch(store, [id]);
  }

  Future<(Map<String, SyncRowState>, Map<String, Map<String, Object?>>)>
      _probeBatchRows(
    DatabaseExecutor exec,
    String store,
    CollectionSchema<Object?> schema,
    List<String> pageIds,
  ) async {
    final srById = <String, SyncRowState>{};
    final localById = <String, Map<String, Object?>>{};
    const probePage = 500;
    for (var i = 0; i < pageIds.length; i += probePage) {
      final chunk =
          pageIds.sublist(i, (i + probePage).clamp(0, pageIds.length));
      final ph = List.filled(chunk.length, '?').join(', ');
      final srRows = await exec.rawQuery(
          'SELECT * FROM lp_sync_row WHERE store = ? AND record_id IN ($ph)',
          [store, ...chunk]);
      for (final r in srRows) {
        srById[r['record_id']! as String] = SyncRowState.fromRow(r);
      }
      final domRows = await exec.query(pocket.requireTable(store).tableName,
          where: 'id IN ($ph)', whereArgs: chunk);
      for (final r in domRows) {
        localById[r['id']! as String] = decodeDbRow(schema, r,
            cipher: pocket.fieldCipher, cryptoProvider: pocket.cryptoProvider);
      }
    }
    return (srById, localById);
  }

  // --------------------------------------------------------------- applier --

  /// Applies one remote record inside the supplied transaction.
  Future<ApplyResult> applyRemote(
    Tx tx,
    String store,
    RemoteRecord remote, {
    SyncRowState? prefetchedSyncRow,
    Map<String, Object?>? prefetchedLocalRow,
    bool prefetchedRowChecked = false,
    bool prefetchedSyncRowChecked = false,
  }) {
    final schema = pocket.requireTable(store).schema;
    final normalized = normalizeSingleRemote(schema, remote);
    return applyNormalizedRemote(
      tx,
      store,
      normalized,
      prefetchedSyncRow: prefetchedSyncRow,
      prefetchedLocalRow: prefetchedLocalRow,
      prefetchedRowChecked: prefetchedRowChecked,
      prefetchedSyncRowChecked: prefetchedSyncRowChecked,
    );
  }

  /// Applies a previously normalized remote record inside a transaction.
  Future<ApplyResult> applyNormalizedRemote(
      Tx tx, String store, NormalizedRemoteRecord item,
      {SyncRowState? prefetchedSyncRow,
      Map<String, Object?>? prefetchedLocalRow,
      bool prefetchedRowChecked = false,
      bool prefetchedSyncRowChecked = false}) async {
    final exec = tx.executor;
    final table = pocket.requireTable(store);
    final schema = table.schema;
    final remote = item.remote;

    pocket.testHooks?.applyRemoteCrashPoint?.call(store, remote.id);

    if (item.error != null) {
      await _quarantineMapFailure(exec, schema, store, remote, item.error!);
      return ApplyResult.quarantined;
    }

    final logical = item.logical!;
    final remotePayload = buildPayload(schema, logical);
    final remotePayloadJson = item.remotePayloadJson!;
    final remoteHash = item.remoteHash!;

    // Security contract: a remote record is only ever written into the table
    // it claims; a mismatched store or malformed id is quarantined.
    if (remote.store != store) {
      await _quarantineMapFailure(exec, schema, store, remote,
          'Remote store "${remote.store}" does not match requested store "$store".');
      return ApplyResult.quarantined;
    }
    if (!isValidRecordId(remote.id)) {
      await _quarantineMapFailure(exec, schema, store, remote,
          'Invalid remote record id "${remote.id}".');
      return ApplyResult.quarantined;
    }

    // `prefetchedSyncRowChecked` makes the probe authoritative even when it
    // found NO row (null = absent); without it, null would trigger a
    // per-record re-read (~33% of pull statements).
    final sr = prefetchedSyncRowChecked
        ? prefetchedSyncRow
        : await pocket.outbox.readSyncRow(exec, store, remote.id);
    Map<String, Object?>? localRow;
    if (prefetchedRowChecked) {
      // Authority comes from the caller's set-based probe (null => absent).
      localRow = prefetchedLocalRow;
    } else {
      final rows = await exec.query(table.tableName,
          where: 'id = ?', whereArgs: [remote.id], limit: 1);
      localRow = rows.isEmpty
          ? null
          : decodeDbRow(schema, rows.first,
              cipher: pocket.fieldCipher,
              cryptoProvider: pocket.cryptoProvider);
    }

    // Observe remote file attachments. Must also run when the remote list is
    // EMPTY but the record exists locally: a peer removing the LAST file
    // leaves an empty list, and skipping it would leave stale local refs (and
    // blob refcounts) forever. A brand-new record with no files has no refs.
    if (fileLane != null &&
        (remote.attachments.isNotEmpty || localRow != null)) {
      await fileLane!.observeRemoteFiles(
        exec: exec,
        store: store,
        recordId: remote.id,
        remoteFilenames: remote.attachments,
      );
    }

    // 1. Unknown record -> straight insert.
    if (localRow == null) {
      final dbRow = encodeDbRow(
        schema,
        id: remote.id,
        logical: logical,
        archived: logical['archived'] == true,
        cipher: pocket.fieldCipher,
        cryptoProvider: pocket.cryptoProvider,
      );
      await exec.insert(table.tableName, dbRow);
      await _upsertSyncRow(exec, store, remote.id,
          remoteUpdated: remote.updated,
          state: SyncState.clean,
          lastSeen: _nowMs(),
          prefetchedSyncRow: sr,
          syncRowChecked: true);
      tx.addChange(ChangeSet(store, {remote.id}));
      final changedFields = computeDirtyFields(const {}, logical)..remove('id');
      tx.emitRecord(
        store: store,
        id: remote.id,
        origin: ChangeOrigin.remote,
        action: ChangeAction.create,
        oldRecord: null,
        newRecord: logical,
        changedFields: changedFields,
      );
      return ApplyResult.applied;
    }

    final state = sr?.syncState ?? SyncState.clean;

    // 2. Clean locally -> fast-forward (no conflict possible).
    if (state == SyncState.clean) {
      if (sr?.remoteUpdated == remote.updated) {
        await _touchSeen(tx, store, remote.id, remote.updated,
            advanceWatermark: false);
        return ApplyResult.skipped;
      }
      final dbRow = encodeDbRow(
        schema,
        id: remote.id,
        logical: logical,
        archived: logical['archived'] == true,
        cipher: pocket.fieldCipher,
        cryptoProvider: pocket.cryptoProvider,
      );
      await exec.update(table.tableName, dbRow,
          where: 'id = ?', whereArgs: [remote.id]);
      await _upsertSyncRow(exec, store, remote.id,
          remoteUpdated: remote.updated,
          state: SyncState.clean,
          lastSeen: _nowMs(),
          prefetchedSyncRow: sr,
          syncRowChecked: true);
      tx.addChange(ChangeSet(store, {remote.id}));
      final changedFields = computeDirtyFields(localRow, logical)..remove('id');
      tx.emitRecord(
        store: store,
        id: remote.id,
        origin: ChangeOrigin.remote,
        action: ChangeAction.update,
        oldRecord: localRow,
        newRecord: logical,
        changedFields: changedFields,
      );
      return ApplyResult.applied;
    }

    // 3. Dirty locally: did the remote move since our base?
    if (state == SyncState.dirty ||
        state == SyncState.inFlight ||
        state == SyncState.conflict) {
      if (sr?.baseUpdated == remote.updated) {
        // Server unchanged; local edit stands.
        await _touchSeen(tx, store, remote.id, remote.updated,
            advanceWatermark: false);
        return ApplyResult.skipped;
      }
      if (state == SyncState.conflict) {
        // A conflict is resolved only by explicit user action; no remote
        // payload may silently clear it. The watermark is NOT advanced: the
        // domain still reflects the last applied version (the conflicted
        // remote is captured in lp_conflicts).
        await _touchSeen(tx, store, remote.id, remote.updated,
            advanceWatermark: false);
        return ApplyResult.skipped;
      }
      final localPayload = buildPayload(schema, localRow);
      if (canonicalize(localPayload) == remotePayloadJson) {
        // Already converged: clear the dirty state.
        await exec.delete('lp_outbox',
            where: 'store = ? AND record_id = ?',
            whereArgs: [store, remote.id]);
        await _upsertSyncRow(exec, store, remote.id,
            remoteUpdated: remote.updated,
            state: SyncState.clean,
            lastSeen: _nowMs(),
            prefetchedSyncRow: sr,
            syncRowChecked: true);
        tx.addChange(ChangeSet(store, {remote.id}));
        return ApplyResult.applied;
      }
      // 3-way merge: remote is the trunk; local changes apply on top. A
      // corrupt base must surface as a quarantine, never as an empty base
      // ("remote deleted everything").
      final Map<String, Object?> basePayload;
      try {
        basePayload = parsePayloadJson(sr?.baseJson);
      } on MapFailure catch (e) {
        await _quarantineMapFailure(exec, schema, store, remote,
            'Corrupt base payload for record "${remote.id}": ${e.message}');
        return ApplyResult.quarantined;
      }
      final policy = MergePolicy(
        collectionResolver: schema.conflictPolicy.collectionResolver,
        fieldOverrides: schema.conflictPolicy.fieldOverrides,
        editsUnarchive: schema.conflictPolicy.editsUnarchive,
      );
      final outcome = await merge3WayAsync(
        base: basePayload,
        local: localPayload,
        remote: remotePayload,
        store: store,
        recordId: remote.id,
        policy: policy,
      );
      if (outcome.needsReview) {
        // Escalate to lp_conflicts; outbox op is held and the watermark is
        // not advanced (nothing was applied to the domain).
        await _recordPullConflict(exec, store, remote, schema, sr, localPayload,
            basePayload, outcome);
        await _touchSeen(tx, store, remote.id, remote.updated,
            advanceWatermark: false);
        tx.addChange(ChangeSet(store, {remote.id}));
        tx.addChange(ChangeSet('lp_conflicts', {remote.id}));
        return ApplyResult.conflict;
      }
      final merged = outcome.merged;
      final dbRow = encodeDbRow(
        schema,
        id: remote.id,
        logical: merged,
        archived: merged['archived'] == true,
        cipher: pocket.fieldCipher,
        cryptoProvider: pocket.cryptoProvider,
      );
      await exec.update(table.tableName, dbRow,
          where: 'id = ?', whereArgs: [remote.id]);
      // Stays dirty; base advances to the remote version; the outbox op
      // payload reflects the merged state.
      await pocket.outbox.advanceBase(exec, store, remote.id,
          baseJson: remotePayloadJson,
          baseHash: remoteHash,
          baseUpdated: remote.updated,
          newPayloadJson: canonicalize(merged));
      await _touchSeen(tx, store, remote.id, remote.updated);
      tx.addChange(ChangeSet(store, {remote.id}));
      final changedFields = computeDirtyFields(localRow, merged)..remove('id');
      tx.emitRecord(
        store: store,
        id: remote.id,
        origin: ChangeOrigin.resolution,
        action: ChangeAction.update,
        oldRecord: localRow,
        newRecord: merged,
        changedFields: changedFields,
      );
      return ApplyResult.applied;
    }

    // 4. error / quarantine: leave; human/ops action required.
    return ApplyResult.skipped;
  }

  Future<void> _recordPullConflict(
    DatabaseExecutor exec,
    String store,
    RemoteRecord remote,
    CollectionSchema<Object?> schema,
    SyncRowState? sr,
    Map<String, Object?> localPayload,
    Map<String, Object?> basePayload,
    MergeResult outcome,
  ) async {
    final remotePayload = buildPayload(schema, normalizeRemote(schema, remote));
    final dirtyLocal = computeDirtyFields(basePayload, localPayload).toList()
      ..sort();
    final dirtyRemote = computeDirtyFields(basePayload, remotePayload).toList()
      ..sort();

    await exec.insert(
      'lp_conflicts',
      {
        'store': store,
        'record_id': remote.id,
        'base_json': sr?.baseJson ?? canonicalize(basePayload),
        'local_json': canonicalize(localPayload),
        'remote_json': canonicalize(remotePayload),
        'dirty_local': jsonEncode(dirtyLocal),
        'dirty_remote': jsonEncode(dirtyRemote),
        'detected_at': _nowMs(),
      },
      conflictAlgorithm: ConflictAlgorithm.replace,
    );
    await exec.update(
      'lp_sync_row',
      {
        'sync_state': SyncState.conflict.name,
        // The conflicted remote IS the base for resolution: recorded in the
        // sync row's base_* (remote_updated stays the last APPLIED version —
        // seen-vs-applied watermark separation).
        'base_json': canonicalize(remotePayload),
        'base_hash': payloadHash(schema, remotePayload),
        'base_updated': remote.updated,
      },
      where: 'store = ? AND record_id = ?',
      whereArgs: [store, remote.id],
    );
  }

  Future<void> _quarantineMapFailure(
      DatabaseExecutor exec,
      CollectionSchema<Object?> schema,
      String store,
      RemoteRecord remote,
      String message) async {
    // Best-effort payload capture: a payload that is not JSON-serializable
    // must still be quarantined, not crash the page.
    String payloadJson;
    try {
      payloadJson = jsonEncode(remote.data);
    } catch (_) {
      payloadJson = jsonEncode({'raw': remote.data.toString()});
    }
    // One audit row per (store, record_id): repeated quarantine attempts must
    // not accumulate duplicate dead letters, so replace any prior row.
    await exec.delete('lp_dead_letter',
        where: 'store = ? AND record_id = ?', whereArgs: [store, remote.id]);
    await exec.insert('lp_dead_letter', {
      'at': _nowMs(),
      'kind': 'map_failure',
      'store': store,
      'record_id': remote.id,
      'error': message,
      'payload_json': payloadJson,
    });
    final sr = await pocket.outbox.readSyncRow(exec, store, remote.id);
    // Backoff-gated retry: the sweeper re-fetches once `next_retry_at`
    // passes, so a malformed remote never stalls the pull cursor forever.
    // The attempt budget is bounded by maxAttempts: a permanently malformed
    // remote is parked (quarantine kept, never due again) for ops attention
    // instead of being re-fetched forever.
    final attempt = (sr?.attemptCount ?? 0) + 1;
    final terminal = attempt >= config.maxAttempts;
    final retryAt = terminal
        ? _quarantineParkMs
        : _nowMs() + config.delayFor(attempt).inMilliseconds;
    if (sr == null) {
      await exec.insert('lp_sync_row', {
        'store': store,
        'record_id': remote.id,
        'remote_updated': remote.updated,
        'sync_state': 'quarantine',
        'attempt_count': attempt,
        'next_retry_at': retryAt,
        'last_error': message,
        'schema_ver': schema.version,
      });
    } else {
      await exec.update(
          'lp_sync_row',
          {
            'sync_state': 'quarantine',
            'last_error': message,
            'remote_updated': remote.updated,
            'attempt_count': attempt,
            'next_retry_at': retryAt,
          },
          where: 'store = ? AND record_id = ?',
          whereArgs: [store, remote.id]);
    }
  }

  Future<void> _upsertSyncRow(DatabaseExecutor exec, String store, String id,
      {required String remoteUpdated,
      required SyncState state,
      required int lastSeen,
      SyncRowState? prefetchedSyncRow,
      bool syncRowChecked = false}) async {
    // The pull loop already batch-probes sync rows; `syncRowChecked` makes
    // the probe authoritative, skipping a redundant per-record re-read.
    final SyncRowState? sr;
    if (syncRowChecked) {
      sr = prefetchedSyncRow;
    } else {
      sr = await pocket.outbox.readSyncRow(exec, store, id);
    }
    final schemaVersion = pocket.requireTable(store).schema.version;
    final map = <String, Object?>{
      'store': store,
      'record_id': id,
      'remote_updated': remoteUpdated,
      'last_seen_at': lastSeen,
      'sync_state': state.name,
      'access_state': 'visible',
      'schema_ver': schemaVersion,
      if (state == SyncState.clean) 'base_updated': null,
      if (state == SyncState.clean) 'base_hash': null,
      if (state == SyncState.clean) 'base_json': null,
      if (state == SyncState.clean) 'dirty_fields': '[]',
      if (state == SyncState.clean) 'op_id': null,
      if (state == SyncState.clean) 'attempt_count': 0,
      if (state == SyncState.clean) 'next_retry_at': 0,
      if (state == SyncState.clean) 'last_error': null,
    };
    if (sr == null) {
      await exec.insert('lp_sync_row', map);
    } else {
      await exec.update('lp_sync_row', map,
          where: 'store = ? AND record_id = ?', whereArgs: [store, id]);
    }
  }

  Future<void> _touchSeen(Tx tx, String store, String id, String remoteUpdated,
      {bool advanceWatermark = true}) async {
    final exec = tx.executor;
    await exec.update(
        'lp_sync_row',
        {
          'last_seen_at': _nowMs(),
          'access_state': 'visible',
          // The remote watermark must never advance past what is actually
          // applied; no-op/conflict paths set advanceWatermark=false so the
          // row keeps the last APPLIED version while the cursor tracks seen.
          if (advanceWatermark) 'remote_updated': remoteUpdated,
        },
        where: 'store = ? AND record_id = ?',
        whereArgs: [store, id]);
    // Only flip hidden=0 on rows that need it (rewind-window redelivery).
    final table = pocket.requireTable(store).tableName;
    final flipped = await exec.update(table, {'hidden': 0},
        where: 'id = ? AND hidden <> 0', whereArgs: [id]);
    // An unhide changes the default query/FTS/watch scope: publish it so
    // watchers and the point-read cache refresh.
    if (flipped > 0) {
      tx.addChange(ChangeSet(store, {id}));
    }
  }

  /// Marks multiple records hidden (permission loss or server delete — never a local
  /// delete). Used by the sweep and targeted 404s.
  Future<void> markHiddenMany(String store, List<String> ids,
      {int batchSize = 500}) async {
    if (ids.isEmpty) return;
    final queue = List<String>.from(ids);
    while (queue.isNotEmpty) {
      final chunk = queue.take(batchSize).toList();
      queue.removeRange(0, chunk.length);

      await applyLane.run(() => pocket.transaction((tx) async {
            final exec = tx.executor;
            final schema = pocket.requireTable(store).schema;
            final table = pocket.requireTable(store).tableName;

            final ph = List.filled(chunk.length, '?').join(', ');
            final existingRows = await exec.query(
              table,
              where: 'id IN ($ph)',
              whereArgs: chunk,
            );
            final oldRowsById = <String, Map<String, Object?>>{};
            for (final r in existingRows) {
              final id = r['id']! as String;
              oldRowsById[id] = decodeDbRow(schema, r,
                  cipher: pocket.fieldCipher,
                  cryptoProvider: pocket.cryptoProvider);
            }

            await exec.update(
              'lp_sync_row',
              {'access_state': 'hidden'},
              where: 'store = ? AND record_id IN ($ph)',
              whereArgs: [store, ...chunk],
            );
            await exec.update(
              table,
              {'hidden': 1},
              where: 'id IN ($ph)',
              whereArgs: chunk,
            );

            tx.addChange(ChangeSet(store, chunk.toSet()));
            for (final id in chunk) {
              final oldRow = oldRowsById[id];
              if (oldRow != null) {
                tx.emitRecord(
                  store: store,
                  id: id,
                  origin: ChangeOrigin.remote,
                  action: ChangeAction.hide,
                  oldRecord: oldRow,
                  newRecord: {...oldRow, 'hidden': true},
                  changedFields: const {'hidden'},
                );
              }
            }
          }));
    }
  }

  /// Marks a record hidden (permission loss or server delete — never a local
  /// delete). Used by the sweep and targeted 404s.
  Future<void> markHidden(String store, String id) =>
      markHiddenMany(store, [id]);
}
