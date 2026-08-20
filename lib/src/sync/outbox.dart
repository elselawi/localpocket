import 'dart:convert';
import 'dart:math';

import '../core/database_adapter.dart';

import '../core/codec.dart';
import '../core/change_bus.dart';
import '../core/errors.dart';
import '../core/hashing.dart';
import '../core/local_pocket.dart';
import '../core/sql_utils.dart';
import '../core/store.dart';
import '../core/transaction.dart';
import 'merge.dart';
import 'sync_tables.dart';

/// The captured optimistic-concurrency base of a dirty row.
/// Stored only while the row is dirty.
class BaseSnapshot {
  /// Canonical JSON captured before the first local edit.
  final String baseJson;

  /// SHA-256 hash of [baseJson].
  final String baseHash;

  /// Remote timestamp observed when the base was captured.
  final String? baseUpdated;

  /// Creates a base snapshot.
  const BaseSnapshot(
      {required this.baseJson, required this.baseHash, this.baseUpdated});
}

/// Result of applying a local mutation to the outbox.
class LocalWriteResult {
  /// Whether the mutation caused an unsynced archived record to vanish.
  final bool vanished;

  /// Operation ID created or retained for the mutation.
  final String? opId;

  /// Creates a local-write result.
  const LocalWriteResult({required this.vanished, this.opId});
}

/// The local data needed to settle one successful remote push.
class PushSettlement {
  /// Outbox operation acknowledged by the backend.
  final OutboxOp op;

  /// Canonical server payload used as the new base.
  final String serverDataJson;

  /// Server timestamp returned for the acknowledged record.
  final String serverUpdated;

  /// Hash of the exact payload sent to the server.
  final String pushedPayloadHash;

  /// Merged local document to write before settling, when applicable.
  final Map<String, Object?>? mergedLogical;

  /// Creates a push-settlement description.
  const PushSettlement({
    required this.op,
    required this.serverDataJson,
    required this.serverUpdated,
    required this.pushedPayloadHash,
    this.mergedLogical,
  });
}

/// The durable outbox: a *set* of record identities that differ
/// from the server, not a log of operations. Coalescing is structural.
class Outbox {
  final LocalPocket pocket;
  final Random _rng = Random.secure();

  /// Internal: constructed by [LocalPocket].
  Outbox.internal(this.pocket);

  /// Generates a unique operation ID for durable outbox effects.
  String generateOpId() {
    final rng = _rng;
    return List.generate(32, (_) => rng.nextInt(16).toRadixString(16)).join();
  }

  // ------------------------------------------------------------ read helpers --

  Future<OutboxOp?> readOp(
      DatabaseExecutor exec, String store, String id) async {
    final rows = await exec.query('lp_outbox',
        where: 'store = ? AND record_id = ?', whereArgs: [store, id], limit: 1);
    return rows.isEmpty ? null : OutboxOp.fromRow(rows.first);
  }

  Future<SyncRowState?> readSyncRow(
      DatabaseExecutor exec, String store, String id) async {
    final rows = await exec.query('lp_sync_row',
        where: 'store = ? AND record_id = ?', whereArgs: [store, id], limit: 1);
    return rows.isEmpty ? null : SyncRowState.fromRow(rows.first);
  }

  // --------------------------------------------------- the local-first path --

  /// Applies the outbox + sync-row bookkeeping for a local mutation inside the
  /// caller's transaction. Returns whether the row vanished.
  ///
  /// [row] is the already-written encoded DB row; [logical] its logical form;
  /// [oldRow] the pre-mutation logical form (null on create). [base] is the
  /// captured base when this is the first dirt of a previously-clean row.
  Future<LocalWriteResult> applyLocalMutation({
    required StoreTable table,
    required DatabaseExecutor exec,
    required String id,
    required MutationAction action,
    required Map<String, Object?> row,
    required Map<String, Object?>? oldRow,
    required Map<String, Object?> logical,
    required List<String> dirtyFields,
    required BaseSnapshot? base,
    required SyncRowState? syncRow,
    required OutboxOp? outboxOp,
    String? precomputedPayload,
  }) async {
    final store = table.schema.name;
    final schema = table.schema;

    // A conflict blocks local edits until resolved.
    if (syncRow != null && syncRow.syncState == SyncState.conflict) {
      throw ConflictBlockedError(
          'Record $store/$id is in conflict; resolve it before editing.');
    }
    final clearError = syncRow != null && syncRow.syncState == SyncState.error;

    // The outbox payload always carries the (client-generated) id so that
    // settle-time hash comparisons against `decodeDbRow` (which includes the
    // id) and against `normalizeRemote` (which injects the id) are consistent
    // — otherwise a fresh create could never be ACKed clean.
    final payloadJson = precomputedPayload ??
        canonicalPayload(schema, {...logical, if (id.isNotEmpty) 'id': id});

    var opKind = outboxOp?.kind;
    bool vanish = false;

    if (outboxOp == null) {
      // A fresh op. With a captured base this is an update-path op whose kind
      // reflects the intent; without a base (never remote) it is a create.
      opKind = switch (action) {
        MutationAction.archive =>
          base == null ? OutboxKind.upsert : OutboxKind.archive,
        MutationAction.restore =>
          base == null ? OutboxKind.upsert : OutboxKind.restore,
        _ => OutboxKind.upsert,
      };
    } else {
      final baseNull = outboxOp.baseUpdated == null;
      switch (outboxOp.kind) {
        case OutboxKind.upsert:
          if (baseNull) {
            // Never existed remotely: archive vanishes (unless configured).
            if (action == MutationAction.archive &&
                !schema.keepUnsyncedArchives) {
              vanish = true;
            } else {
              opKind = OutboxKind.upsert;
            }
          } else {
            opKind = switch (action) {
              MutationAction.archive => OutboxKind.archive,
              MutationAction.restore => OutboxKind.restore,
              _ => OutboxKind.upsert,
            };
          }
        case OutboxKind.archive:
          opKind = switch (action) {
            MutationAction.restore => OutboxKind.restore,
            _ => OutboxKind.archive,
          };
        case OutboxKind.restore:
          opKind = switch (action) {
            MutationAction.archive => OutboxKind.archive,
            MutationAction.restore => OutboxKind.restore,
            _ => OutboxKind.upsert,
          };
      }
    }

    if (vanish) {
      // Vanish rule: never existed remotely → no network op at all.
      await exec.delete('lp_outbox',
          where: 'store = ? AND record_id = ?', whereArgs: [store, id]);
      await exec.delete('lp_sync_row',
          where: 'store = ? AND record_id = ?', whereArgs: [store, id]);
      await _vanishFileRefs(exec, store, id);
      await exec.delete(table.tableName, where: 'id = ?', whereArgs: [id]);
      return const LocalWriteResult(vanished: true);
    }

    final now = DateTime.now().millisecondsSinceEpoch;
    final opId = outboxOp?.opId ?? generateOpId();
    // Earliest base wins across coalescing. The base JSON
    // snapshot lives on the sync row; base_updated/base_hash are mirrored on
    // the outbox row for the pusher.
    final baseUpdated = outboxOp?.baseUpdated ?? base?.baseUpdated;
    final baseHash = outboxOp?.baseHash ?? base?.baseHash ?? '';
    final baseJson = syncRow?.baseJson ?? base?.baseJson;
    final mergedDirty =
        <String>{...?outboxOp?.dirtyFields, ...dirtyFields}.toList()..sort();
    final createdAt = outboxOp?.createdAt ?? now;

    final outboxMap = <String, Object?>{
      'store': store,
      'record_id': id,
      'kind': opKind!.name,
      'payload_json': payloadJson,
      'base_updated': baseUpdated,
      'base_hash': baseHash,
      'dirty_fields': jsonEncode(mergedDirty),
      'op_id': opId,
      'created_at': createdAt,
      'updated_at': now,
      'depends_on_op': outboxOp?.dependsOnOp,
    };
    if (outboxOp == null) {
      await exec.insert('lp_outbox', outboxMap);
    } else {
      await exec.update('lp_outbox', outboxMap,
          where: 'store = ? AND record_id = ?', whereArgs: [store, id]);
    }

    final prevRev = syncRow?.localRev ?? 0;
    final syncRowMap = <String, Object?>{
      'store': store,
      'record_id': id,
      'remote_updated': syncRow?.remoteUpdated,
      'last_seen_at': syncRow?.lastSeenAt,
      'base_updated': baseUpdated,
      'base_hash': baseHash,
      'base_json': baseJson,
      'sync_state': 'dirty',
      'dirty_fields': jsonEncode(mergedDirty),
      'local_rev': prevRev + 1,
      'access_state': syncRow?.accessState.name ?? 'visible',
      'op_id': opId,
      'attempt_count': clearError ? 0 : (syncRow?.attemptCount ?? 0),
      'next_retry_at': clearError ? 0 : (syncRow?.nextRetryAt ?? 0),
      'last_error': clearError ? null : syncRow?.lastError,
      'schema_ver': schema.version,
    };
    if (syncRow == null) {
      await exec.insert('lp_sync_row', syncRowMap);
    } else {
      await exec.update('lp_sync_row', syncRowMap,
          where: 'store = ? AND record_id = ?', whereArgs: [store, id]);
    }

    return LocalWriteResult(vanished: false, opId: opId);
  }

  Future<void> _vanishFileRefs(
      DatabaseExecutor exec, String store, String id) async {
    await vanishRecordMetadata(exec, store, id, deleteSyncAndOutbox: false);
  }

  // -------------------------------------------------------------- draining --

  /// Returns the outbox ops ready to push, FIFO by creation, skipping ops
  /// whose `depends_on_op` is still pending.
  ///
  /// Ops whose sync row is in `error`/`quarantine`/`conflict` are excluded
  /// (they are surfaced to the app, never retried in a loop), and ops
  /// whose `next_retry_at` is in the future are deferred (persisted backoff).
  Future<List<OutboxOp>> drain(
      {String? store, int limit = 25, int? now}) async {
    final n = now ?? DateTime.now().millisecondsSinceEpoch;
    final where =
        StringBuffer("s.sync_state NOT IN ('error','quarantine','conflict') "
            'AND (s.next_retry_at IS NULL OR s.next_retry_at <= ?)');
    final args = <Object?>[n];
    if (store != null) {
      where.write(' AND o.store = ?');
      args.add(store);
    }
    final rows = await pocket.db.rawQuery(
        'SELECT o.* FROM lp_outbox o '
        'JOIN lp_sync_row s ON o.store = s.store AND o.record_id = s.record_id '
        'WHERE $where ORDER BY o.created_at ASC, o.rowid ASC LIMIT ?',
        [...args, limit * 4 + 16]);
    if (rows.isEmpty) return const [];

    // Set-based dependency resolution: one query per dependency
    // table for all candidates instead of two COUNT(*) queries per candidate.
    final ops = [for (final r in rows) OutboxOp.fromRow(r)];
    final depIds = {
      for (final op in ops)
        if (op.dependsOnOp != null) op.dependsOnOp!,
    };
    final blocked = await queryBlockedDependencyOpIds(pocket.db, depIds);

    final result = <OutboxOp>[];
    for (final op in ops) {
      if (result.length >= limit) break;
      if (op.dependsOnOp != null && blocked.contains(op.dependsOnOp)) continue;
      result.add(op);
    }
    return result;
  }

  /// Unconditional acknowledgment: removes the op from the outbox and marks
  /// the sync row clean WITHOUT verifying the current payload still matches
  /// what was pushed.
  ///
  /// UNSAFE for production settlement — a local edit made during the push
  /// would be marked clean and lost. It has NO production callers and exists
  /// only as a test helper; production settlement MUST go through
  /// [settlePush] / [settlePushBatch], which detect newer edits and keep the
  /// row dirty. Dependents are released implicitly (drain re-checks).
  Future<void> ack(String store, String id, {String? serverUpdated}) {
    return pocket.transaction((tx) async {
      final exec = tx.executor;
      await exec.delete('lp_outbox',
          where: 'store = ? AND record_id = ?', whereArgs: [store, id]);
      await exec.update(
          'lp_sync_row',
          {
            'sync_state': 'clean',
            'base_updated': null,
            'base_hash': null,
            'base_json': null,
            'dirty_fields': '[]',
            'remote_updated': serverUpdated,
            'op_id': null,
            'attempt_count': 0,
            'next_retry_at': 0,
            'last_error': null,
            'last_seen_at': DateTime.now().millisecondsSinceEpoch,
          },
          where: 'store = ? AND record_id = ?',
          whereArgs: [store, id]);
    });
  }

  /// Settles a successful push:
  ///
  /// - If the current domain payload hash equals [pushedPayloadHash] (no edit
  ///   in flight), the row is marked clean.
  /// - Otherwise the user edited during the push: keep it dirty but advance
  ///   the base to the server state so the next push is a clean update — no
  ///   lost edit, no lost push.
  ///
  /// [mergedLogical] (when given) is written to the domain row first — used
  /// when the pusher merged concurrently before pushing, so local == pushed.
  Future<void> settlePush({
    required String store,
    required String id,
    required String pushedPayloadHash,
    required String serverDataJson,
    required String serverUpdated,
    Map<String, Object?>? mergedLogical,
  }) {
    return settlePushBatch([
      PushSettlement(
        op: OutboxOp(
          store: store,
          recordId: id,
          kind: OutboxKind.upsert,
          payloadJson: serverDataJson,
          baseHash: pushedPayloadHash,
          opId: '',
          createdAt: 0,
          updatedAt: 0,
        ),
        serverDataJson: serverDataJson,
        serverUpdated: serverUpdated,
        pushedPayloadHash: pushedPayloadHash,
        mergedLogical: mergedLogical,
      ),
    ]);
  }

  /// Settles multiple successful pushes under one local durability boundary.
  ///
  /// Each item is compared with the current local payload. An edit made while
  /// the network request was in flight remains dirty and keeps its outbox row.
  /// Each item still performs the same current-payload hash comparison, so an
  /// edit made while its HTTP request was in flight remains dirty.
  Future<void> settlePushBatch(List<PushSettlement> settlements) {
    if (settlements.isEmpty) return Future<void>.value();
    return pocket.transaction((tx) async {
      pocket.perf.pushSettlementItems += settlements.length;
      for (final settlement in settlements) {
        await _settlePushInTransaction(tx, settlement);
      }
    });
  }

  Future<void> _settlePushInTransaction(
      Tx tx, PushSettlement settlement) async {
    final exec = tx.executor;
    final store = settlement.op.store;
    final id = settlement.op.recordId;
    final table = pocket.requireTable(store);
    final schema = table.schema;
    final nowMs = DateTime.now().millisecondsSinceEpoch;

    if (settlement.mergedLogical != null) {
      // Guard: only write the stale merge result if the row was NOT edited
      // again while the request was in flight. `settlement.op.payloadJson`
      // is the outbox payload captured at push time; a newer local edit
      // rewrites the outbox payload, so a difference means the merge is stale
      // and must not overwrite the newer edit. The newer edit then keeps the
      // row dirty and is pushed on the next cycle (with the advanced base).
      final currentOutbox = await exec.query('lp_outbox',
          where: 'store = ? AND record_id = ?',
          whereArgs: [store, id],
          limit: 1);
      final editedDuringRequest = currentOutbox.isNotEmpty &&
          currentOutbox.first['payload_json'] != settlement.op.payloadJson;
      if (!editedDuringRequest) {
        final oldRows = await exec.query(table.tableName,
            where: 'id = ?', whereArgs: [id], limit: 1);
        final oldLogical = oldRows.isNotEmpty
            ? decodeDbRow(schema, oldRows.first,
                cipher: pocket.fieldCipher,
                cryptoProvider: pocket.cryptoProvider)
            : null;
        final dbRow = encodeDbRow(
          schema,
          id: id,
          logical: settlement.mergedLogical!,
          archived: settlement.mergedLogical!['archived'] == true,
          cipher: pocket.fieldCipher,
          cryptoProvider: pocket.cryptoProvider,
        );
        await exec
            .update(table.tableName, dbRow, where: 'id = ?', whereArgs: [id]);
        // The merged domain write is a real content change: publish it so
        // query/watch subscribers refresh.
        tx.addChange(ChangeSet(store, {id}));
        final changedFields = computeDirtyFields(
            oldLogical ?? const {}, settlement.mergedLogical!)
          ..remove('id');
        tx.addRecordEvent(RecordChangeEvent(
          store: store,
          id: id,
          origin: ChangeOrigin.resolution,
          action: ChangeAction.update,
          oldRecord: oldLogical,
          newRecord: settlement.mergedLogical!,
          changedFields: changedFields,
        ));
      }
    }

    final rows = await exec.query(table.tableName,
        where: 'id = ?', whereArgs: [id], limit: 1);
    if (rows.isEmpty) {
      await exec.delete('lp_outbox',
          where: 'store = ? AND record_id = ?', whereArgs: [store, id]);
      await _markClean(exec, store, id, settlement.serverUpdated, nowMs);
      tx.addChange(ChangeSet(store, {id}));
      return;
    }

    final currentLogical = decodeDbRow(
      schema,
      rows.first,
      cipher: pocket.fieldCipher,
      cryptoProvider: pocket.cryptoProvider,
    );
    final currentHash = payloadHash(schema, currentLogical);
    final serverHash = sha256Hex(settlement.serverDataJson);
    if (currentHash == settlement.pushedPayloadHash &&
        serverHash == settlement.pushedPayloadHash) {
      // The server echoed exactly what we pushed: a plain clean ack.
      await exec.delete('lp_outbox',
          where: 'store = ? AND record_id = ?', whereArgs: [store, id]);
      await _markClean(exec, store, id, settlement.serverUpdated, nowMs);
      tx.addChange(ChangeSet(store, {id}));
    } else if (currentHash == settlement.pushedPayloadHash) {
      // The server transformed the payload (normalized/renamed fields). Adopt
      // its content locally so the row mirrors the server (server field
      // preservation) and stays clean — the next pull would otherwise skip a
      // same-`updated` re-delivery and the transform would be lost forever.
      final serverLogical = _decodeServerData(settlement.serverDataJson);
      final dbRow = encodeDbRow(
        schema,
        id: id,
        logical: serverLogical,
        archived: serverLogical['archived'] == true,
        cipher: pocket.fieldCipher,
        cryptoProvider: pocket.cryptoProvider,
      );
      await exec
          .update(table.tableName, dbRow, where: 'id = ?', whereArgs: [id]);
      await exec.delete('lp_outbox',
          where: 'store = ? AND record_id = ?', whereArgs: [store, id]);
      await _markClean(exec, store, id, settlement.serverUpdated, nowMs);
      tx.addChange(ChangeSet(store, {id}));
      final changedFields = computeDirtyFields(currentLogical, serverLogical)
        ..remove('id');
      tx.addRecordEvent(RecordChangeEvent(
        store: store,
        id: id,
        origin: ChangeOrigin.resolution,
        action: ChangeAction.update,
        oldRecord: currentLogical,
        newRecord: serverLogical,
        changedFields: changedFields,
      ));
    } else {
      final serverHash = sha256Hex(settlement.serverDataJson);
      await exec.update(
          'lp_sync_row',
          {
            'base_json': settlement.serverDataJson,
            'base_hash': serverHash,
            'base_updated': settlement.serverUpdated,
            'remote_updated': settlement.serverUpdated,
            'last_seen_at': nowMs,
            'access_state': 'visible',
          },
          where: 'store = ? AND record_id = ?',
          whereArgs: [store, id]);
      await exec.update(
          'lp_outbox',
          {
            'base_updated': settlement.serverUpdated,
            'base_hash': serverHash,
          },
          where: 'store = ? AND record_id = ?',
          whereArgs: [store, id]);
      await exec.update(table.tableName, {'hidden': 0},
          where: 'id = ?', whereArgs: [id]);
      // The edit-in-flight branch rewrites the base and may unhide the row.
      tx.addChange(ChangeSet(store, {id}));
    }
  }

  /// Parses a canonical/raw server payload JSON into a logical map for the
  /// domain codec (missing declared fields are treated as absent).
  Map<String, Object?> _decodeServerData(String json) {
    final decoded = jsonDecode(json);
    return decoded is Map
        ? Map<String, Object?>.from(decoded)
        : <String, Object?>{};
  }

  Future<void> _markClean(DatabaseExecutor exec, String store, String id,
      String serverUpdated, int nowMs) async {
    await exec.update(
        'lp_sync_row',
        {
          'sync_state': 'clean',
          'base_updated': null,
          'base_hash': null,
          'base_json': null,
          'dirty_fields': '[]',
          'remote_updated': serverUpdated,
          'op_id': null,
          'attempt_count': 0,
          'next_retry_at': 0,
          'last_error': null,
          'last_seen_at': nowMs,
          'access_state': 'visible',
        },
        where: 'store = ? AND record_id = ?',
        whereArgs: [store, id]);
    // The domain `hidden` column mirrors access_state: a confirmed push means
    // the server holds the record, so the row is visible again (a sweep may
    // have hidden it before the push, e.g. a pending create).
    await exec.update(pocket.requireTable(store).tableName, {'hidden': 0},
        where: 'id = ?', whereArgs: [id]);
  }

  /// Records a transient failure: attempt count, persisted backoff deadline,
  /// and the last error.
  Future<void> recordFailure(String store, String id,
      {required String error,
      required int attempts,
      required int nextRetryAt,
      SyncState state = SyncState.dirty}) {
    return pocket.transaction((tx) async {
      await tx.executor.update(
          'lp_sync_row',
          {
            'attempt_count': attempts,
            'next_retry_at': nextRetryAt,
            'last_error': error,
            'sync_state': state.name,
          },
          where: 'store = ? AND record_id = ?',
          whereArgs: [store, id]);
    });
  }

  /// Moves an op to a permanent error state and records a dead letter.
  /// The local row and its outbox op stay intact.
  Future<void> markDeadLetter({
    required String store,
    required String id,
    required String kind,
    required String error,
    required String payloadJson,
    SyncState state = SyncState.error,
  }) {
    return pocket.transaction((tx) async {
      final exec = tx.executor;
      await exec.insert('lp_dead_letter', {
        'at': DateTime.now().millisecondsSinceEpoch,
        'kind': kind,
        'store': store,
        'record_id': id,
        'error': error,
        'payload_json': payloadJson,
      });
      await exec.update(
          'lp_sync_row',
          {
            'sync_state': state.name,
            'last_error': error,
          },
          where: 'store = ? AND record_id = ?',
          whereArgs: [store, id]);
    });
  }

  /// Advances the base of a dirty row + its outbox op to a fetched remote
  /// version (used after a merge on push and by `applyRemote`).
  Future<void> advanceBase(DatabaseExecutor exec, String store, String id,
      {required String baseJson,
      required String baseHash,
      required String baseUpdated,
      String? newPayloadJson}) async {
    await exec.update(
        'lp_sync_row',
        {
          'base_json': baseJson,
          'base_hash': baseHash,
          'base_updated': baseUpdated,
        },
        where: 'store = ? AND record_id = ?',
        whereArgs: [store, id]);
    final updates = <String, Object?>{
      'base_updated': baseUpdated,
      'base_hash': baseHash,
      if (newPayloadJson != null) 'payload_json': newPayloadJson,
    };
    await exec.update('lp_outbox', updates,
        where: 'store = ? AND record_id = ?', whereArgs: [store, id]);
  }

  // ----------------------------------------------------- test / engine tools --

  /// Marks a sync row with an explicit state (used by tests).
  Future<void> setSyncState(String store, String id, SyncState state) {
    return pocket.transaction((tx) async {
      await tx.executor.update('lp_sync_row', {'sync_state': state.name},
          where: 'store = ? AND record_id = ?', whereArgs: [store, id]);
    });
  }

  /// Sets/clears the cross-record ordering edge on an outbox op.
  Future<void> setDependsOn(String store, String id, String? dependsOnOpId) {
    return pocket.transaction((tx) async {
      await tx.executor.update('lp_outbox', {'depends_on_op': dependsOnOpId},
          where: 'store = ? AND record_id = ?', whereArgs: [store, id]);
    });
  }

  Future<int> outboxCount() async =>
      firstIntValue(
          await pocket.db.rawQuery('SELECT COUNT(*) AS c FROM lp_outbox')) ??
      0;

  /// Registers a file ref + blob refcount (used by tests).
  Future<void> registerFileRef({
    required String store,
    required String recordId,
    required String field,
    required String hash,
    required int size,
    String? remoteName,
    String state = 'pending_upload',
  }) {
    return pocket.transaction((tx) async {
      final exec = tx.executor;
      final now = DateTime.now().millisecondsSinceEpoch;
      await upsertBlobReference(exec, hash: hash, size: size, now: now);
      await exec.insert('lp_file_refs', {
        'ref_id': generateOpId(),
        'store': store,
        'record_id': recordId,
        'field': field,
        'hash': hash,
        'remote_name': remoteName,
        'state': state,
      });
    });
  }
}
