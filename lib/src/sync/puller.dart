import 'dart:convert';

import '../core/database_adapter.dart';

import '../core/canonical_json.dart';
import '../core/change_bus.dart';
import '../core/codec.dart';
import '../core/ids.dart';
import '../core/local_pocket.dart';
import '../core/schema.dart';
import '../core/transaction.dart';
import '../files/file_sync_lane.dart';
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

class PullReport {
  final String store;
  final int applied;
  final int quarantined;
  final int conflicts;
  final int pages;
  const PullReport(this.store, this.applied, this.pages,
      {this.quarantined = 0, this.conflicts = 0});
}

/// Incremental pull + the conflict-aware applier.
///
/// This is the single authoritative ingest path: SSE hints, sweeps and manual
/// refreshes all funnel through [pullStore]/[applyRemote].
class Puller {
  final LocalPocket pocket;
  final SyncBackend backend;
  final SyncConfig config;
  final SyncStore syncStore;
  final FileSyncLane? fileLane;

  Puller(this.pocket, this.backend, this.config, this.syncStore,
      {this.fileLane});

  static const String epoch = '1970-01-01 00:00:00.000Z';

  int _nowMs() => config.now();

  // ------------------------------------------------------------------ pull --

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

    while (true) {
      final page = await backend.listChanges(
        store,
        fromUpdated: from,
        fromId: fromId,
        perPage: config.maxPage,
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

      await pocket.transaction((tx) async {
        final c = cursor;
        final exec = tx.executor;
        final schema = pocket.requireTable(store).schema;
        final pageIds = [for (final item in normalizedBatch) item.remote.id];
        final (srById, localById) =
            await _probeBatchRows(exec, store, schema, pageIds);
        final written = <String>{};
        for (final item in normalizedBatch) {
          final r = item.remote;
          // Idempotent re-delivery from the rewind window.
          if (c != null && _tupleLte(r, c)) continue;
          final ApplyResult result;
          if (written.contains(r.id)) {
            // Duplicate id within this page: the first pass already wrote the
            // row in this transaction, so re-read (not prefetched) so the
            // second delivery sees it and takes the update path.
            result = await applyNormalizedRemote(tx, store, item);
          } else {
            result = await applyNormalizedRemote(tx, store, item,
                prefetchedSyncRow: srById[r.id],
                prefetchedLocalRow: localById[r.id],
                prefetchedRowChecked: true,
                prefetchedSyncRowChecked: true);
            written.add(r.id);
          }
          // Accounting: only records actually written to the domain count as
          // `applied`; quarantined, conflict-escalated, and no-op deliveries
          // are reported separately and never inflate the applied count.
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
        // The cursor only advances forward: a page that is entirely within the
        // rewind window must never regress it.
        final advanced = c == null || !_tupleLte(last, c);
        final nextUpdated = advanced ? last.updated : c.updated;
        final nextId = advanced ? last.id : c.id;
        await syncStore.writeCursor(tx.executor, store,
            updated: nextUpdated, id: nextId);
        cursor = PullCursor(nextUpdated, nextId);
      });

      from = last.updated;
      fromId = last.id;
      pages++;
      if (page.length < config.maxPage) break;
      if (pages >= config.maxPagesPerPass) break;
    }
    return PullReport(store, applied, pages,
        quarantined: quarantined, conflicts: conflicts);
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

  /// Realtime fast-path: apply a realtime event's
  /// embedded record directly when the local row is clean and the event is
  /// newer (or the record is unknown). NEVER advances the cursor — the next
  /// delta pull re-delivers it idempotently. Returns whether it applied.
  Future<bool> fastPathApply(RemoteRecord remote) async {
    var applied = false;
    await pocket.transaction((tx) async {
      final exec = tx.executor;
      final sr = await pocket.outbox.readSyncRow(exec, remote.store, remote.id);
      if (sr == null) {
        // Unknown record (create event): safe to insert.
        await applyRemote(tx, remote.store, remote);
        applied = true;
        return;
      }
      if (sr.syncState != SyncState.clean) return; // dirty: let the pull merge
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
    });
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
      await pocket.transaction((tx) async {
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
      });
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
    CollectionSchema schema,
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
        srById[r['record_id'] as String] = SyncRowState.fromRow(r);
      }
      final domRows = await exec.query(pocket.requireTable(store).tableName,
          where: 'id IN ($ph)', whereArgs: chunk);
      for (final r in domRows) {
        localById[r['id'] as String] = decodeDbRow(schema, r,
            cipher: pocket.fieldCipher, cryptoProvider: pocket.cryptoProvider);
      }
    }
    return (srById, localById);
  }

  // --------------------------------------------------------------- applier --

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
    // it claims. A record whose `store` differs from the requested store, or
    // whose id is not a valid local record id, is quarantined — it must never
    // be routed into another table or silently written with a malformed id.
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

    // `prefetchedSyncRowChecked` makes the probe authoritative even when the
    // probe found NO row (null = absent); without it, null would fall through
    // to a per-record re-read (sync-apply profile: 33% of pull statements).
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

    // Observe remote file attachments.
    if (remote.imgs.isNotEmpty && fileLane != null) {
      await fileLane!.observeRemoteFiles(
        exec: exec,
        store: store,
        recordId: remote.id,
        remoteFilenames: remote.imgs,
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
      tx.addRecordEvent(RecordChangeEvent(
        store: store,
        id: remote.id,
        origin: ChangeOrigin.remote,
        action: ChangeAction.create,
        oldRecord: null,
        newRecord: logical,
        changedFields: changedFields,
      ));
      return ApplyResult.applied;
    }

    final state = sr?.syncState ?? SyncState.clean;

    // 2. Clean locally -> fast-forward (no conflict possible).
    if (state == SyncState.clean) {
      if (sr?.remoteUpdated == remote.updated) {
        await _touchSeen(tx, store, remote.id, remote.updated);
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
      tx.addRecordEvent(RecordChangeEvent(
        store: store,
        id: remote.id,
        origin: ChangeOrigin.remote,
        action: ChangeAction.update,
        oldRecord: localRow,
        newRecord: logical,
        changedFields: changedFields,
      ));
      return ApplyResult.applied;
    }

    // 3. Dirty locally: did the remote move since our base?
    if (state == SyncState.dirty ||
        state == SyncState.inFlight ||
        state == SyncState.conflict) {
      if (sr?.baseUpdated == remote.updated) {
        // Server unchanged; local edit stands.
        await _touchSeen(tx, store, remote.id, remote.updated);
        return ApplyResult.skipped;
      }
      if (state == SyncState.conflict) {
        // A conflict is resolved only by explicit user action. Neither a
        // converged nor a newly-changed remote payload may silently clear it:
        // keep the row open and only refresh visibility.
        await _touchSeen(tx, store, remote.id, remote.updated);
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
      // 3-way merge: remote is the trunk; local changes apply on top.
      final basePayload = parsePayloadJson(sr?.baseJson);
      final policy = MergePolicy(
        collectionResolver:
            schema.conflictPolicy.collectionResolver is ConflictResolver
                ? schema.conflictPolicy.collectionResolver as ConflictResolver
                : null,
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
        // Escalate to lp_conflicts; outbox op is held.
        await _recordPullConflict(
            exec, store, remote, schema, sr, localPayload, outcome);
        await _touchSeen(tx, store, remote.id, remote.updated);
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
      tx.addRecordEvent(RecordChangeEvent(
        store: store,
        id: remote.id,
        origin: ChangeOrigin.resolution,
        action: ChangeAction.update,
        oldRecord: localRow,
        newRecord: merged,
        changedFields: changedFields,
      ));
      return ApplyResult.applied;
    }

    // 4. error / quarantine: leave; human/ops action required.
    return ApplyResult.skipped;
  }

  Future<void> _recordPullConflict(
    DatabaseExecutor exec,
    String store,
    RemoteRecord remote,
    CollectionSchema schema,
    SyncRowState? sr,
    Map<String, Object?> localPayload,
    MergeResult outcome,
  ) async {
    final basePayload = parsePayloadJson(sr?.baseJson);
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
      {'sync_state': SyncState.conflict.name},
      where: 'store = ? AND record_id = ?',
      whereArgs: [store, remote.id],
    );
  }

  Future<void> _quarantineMapFailure(
      DatabaseExecutor exec,
      CollectionSchema schema,
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
    await exec.insert('lp_dead_letter', {
      'at': _nowMs(),
      'kind': 'map_failure',
      'store': store,
      'record_id': remote.id,
      'error': message,
      'payload_json': payloadJson,
    });
    final sr = await pocket.outbox.readSyncRow(exec, store, remote.id);
    if (sr == null) {
      await exec.insert('lp_sync_row', {
        'store': store,
        'record_id': remote.id,
        'remote_updated': remote.updated,
        'sync_state': 'quarantine',
        'schema_ver': schema.version,
      });
    } else {
      await exec.update(
          'lp_sync_row',
          {
            'sync_state': 'quarantine',
            'last_error': message,
            'remote_updated': remote.updated,
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
    // The pull loop already batch-probes sync rows; `syncRowChecked` makes the
    // probe authoritative and skips the redundant per-record re-read
    // (sync-apply profile: removes ~33% of pull statements).
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

  Future<void> _touchSeen(
      Tx tx, String store, String id, String remoteUpdated) async {
    final exec = tx.executor;
    await exec.update(
        'lp_sync_row',
        {
          'last_seen_at': _nowMs(),
          'access_state': 'visible',
          'remote_updated': remoteUpdated,
        },
        where: 'store = ? AND record_id = ?',
        whereArgs: [store, id]);
    // A record arriving on the wire is visible; avoid rewriting an already
    // visible domain row during rewind-window redelivery.
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

      await pocket.transaction((tx) async {
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
          final id = r['id'] as String;
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
            tx.addRecordEvent(RecordChangeEvent(
              store: store,
              id: id,
              origin: ChangeOrigin.remote,
              action: ChangeAction.hide,
              oldRecord: oldRow,
              newRecord: {...oldRow, 'hidden': true},
              changedFields: const {'hidden'},
            ));
          }
        }
      });
    }
  }

  /// Marks a record hidden (permission loss or server delete — never a local
  /// delete). Used by the sweep and targeted 404s.
  Future<void> markHidden(String store, String id) =>
      markHiddenMany(store, [id]);
}
