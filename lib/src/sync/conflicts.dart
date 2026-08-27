import 'dart:async';
import 'dart:convert';

import '../core/canonical_json.dart';
import '../core/change_bus.dart';
import '../core/codec.dart';
import '../core/local_pocket.dart';
import '../core/row_models.dart';
import 'merge.dart';
import 'sync_tables.dart';

/// Marker key inside a conflict's `remote_json` when the remote side of the
/// conflict is a deletion: the record no longer exists remotely, so there is
/// no remote document to store. The local row and its outbox op are retained
/// until the app resolves the conflict.
const String remoteDeletedKey = '__lp_deleted__';

/// Representation of a conflict row in `lp_conflicts`.
class ConflictRecord {
  ConflictRecord({
    required this.store,
    required this.recordId,
    required this.base,
    required this.local,
    required this.remote,
    required this.dirtyLocal,
    required this.dirtyRemote,
    required this.detectedAt,
    this.resolved,
  });

  /// Collection containing the conflicted record.
  final String store;

  /// Conflicted record ID.
  final String recordId;

  /// Shared base used for conflict detection.
  final Map<String, Object?> base;

  /// Local document at conflict detection time.
  final Map<String, Object?> local;

  /// Remote document at conflict detection time.
  final Map<String, Object?> remote;

  /// Fields changed locally from [base].
  final Set<String> dirtyLocal;

  /// Fields changed remotely from [base].
  final Set<String> dirtyRemote;

  /// Detection timestamp in epoch milliseconds.
  final int detectedAt;

  /// Application-selected resolution, when stored.
  final Map<String, Object?>? resolved;

  /// Whether the remote side of this conflict is a deletion (the record no
  /// longer exists remotely). `remote` is then a tombstone map whose only
  /// entry is [remoteDeletedKey].
  bool get remoteDeleted =>
      remote.length == 1 && remote[remoteDeletedKey] == true;

  /// Parses a conflict row from the `lp_conflicts` table.
  static ConflictRecord fromRow(Map<String, Object?> row) => parseRowModel(
        'lp_conflicts',
        () => ConflictRecord(
          store: row['store']! as String,
          recordId: row['record_id']! as String,
          base: decodeJsonMap(row['base_json'],
              table: 'lp_conflicts', column: 'base_json'),
          local: decodeJsonMap(row['local_json'],
              table: 'lp_conflicts', column: 'local_json'),
          remote: decodeJsonMap(row['remote_json'],
              table: 'lp_conflicts', column: 'remote_json'),
          dirtyLocal: decodeJsonStringSet(row['dirty_local'],
              table: 'lp_conflicts', column: 'dirty_local'),
          dirtyRemote: decodeJsonStringSet(row['dirty_remote'],
              table: 'lp_conflicts', column: 'dirty_remote'),
          detectedAt: row['detected_at']! as int,
          resolved: row['resolved_json'] != null
              ? decodeJsonMap(row['resolved_json'],
                  table: 'lp_conflicts', column: 'resolved_json')
              : null,
        ),
      );
}

/// Conflicts management and watch API.
class Conflicts {
  /// Internal constructor used by [LocalPocket].
  Conflicts.internal(this._pocket);

  final LocalPocket _pocket;

  /// Lists all currently open / unresolved conflicts in the database.
  Future<List<ConflictRecord>> listOpen({String? store}) async {
    final rows = await _pocket.db.query(
      'lp_conflicts',
      where: store != null
          ? 'store = ? AND resolved_json IS NULL'
          : 'resolved_json IS NULL',
      whereArgs: store != null ? [store] : null,
      orderBy: 'detected_at ASC',
    );
    return rows.map(ConflictRecord.fromRow).toList();
  }

  /// Returns a specific conflict record for [store] and [id], or null if none.
  Future<ConflictRecord?> get(String store, String id) async {
    final rows = await _pocket.db.query(
      'lp_conflicts',
      where: 'store = ? AND record_id = ?',
      whereArgs: [store, id],
      limit: 1,
    );
    if (rows.isEmpty) return null;
    return ConflictRecord.fromRow(rows.first);
  }

  /// Watches open conflicts, emitting a new list whenever conflicts are added,
  /// resolved, or modified.
  Stream<List<ConflictRecord>> watch({String? store}) {
    late final StreamController<List<ConflictRecord>> controller;
    StreamSubscription<ChangeSet>? sub;

    Future<void> emit() async {
      if (controller.isClosed) return;
      try {
        final list = await listOpen(store: store);
        if (!controller.isClosed) controller.add(list);
      } catch (e, st) {
        if (!controller.isClosed) controller.addError(e, st);
      }
    }

    controller = StreamController<List<ConflictRecord>>.broadcast(
      onListen: () async {
        sub = _pocket.changes.listen((cs) {
          if (store == null ||
              cs.store == store ||
              cs.store == 'lp_conflicts') {
            unawaited(emit());
          }
        });
        await emit();
      },
      onCancel: () async {
        await sub?.cancel();
        await controller.close();
      },
    );

    return controller.stream;
  }

  /// Resolves an open conflict with a given [merged] document.
  ///
  /// - Clears the `lp_conflicts` row.
  /// - Sets the domain row to [merged].
  /// - Sets sync state to `dirty` with base set to the remote version from the conflict.
  /// - Updates or inserts an outbox op with base := remote version.
  Future<void> resolve({
    required String store,
    required String id,
    required Map<String, Object?> merged,
  }) async {
    final table = _pocket.requireTable(store);
    final schema = table.schema;

    await _pocket.transaction((tx) async {
      final exec = tx.executor;
      final conflictRow = await exec.query(
        'lp_conflicts',
        where: 'store = ? AND record_id = ?',
        whereArgs: [store, id],
        limit: 1,
      );
      if (conflictRow.isEmpty) {
        throw StateError('No conflict found for $store/$id');
      }
      final record = ConflictRecord.fromRow(conflictRow.first);
      // A delete-conflict's remote side is a tombstone: resolving it writes
      // the record back, so the resolution base is "never remote" (the next
      // push is a create, never an update against a vanished target).
      final remoteDeleted = record.remoteDeleted;
      final remoteJson = remoteDeleted ? null : canonicalize(record.remote);
      final remoteHash =
          remoteDeleted ? '' : payloadHash(schema, record.remote);

      // The domain row may be gone (e.g. the record was purged). There is
      // nothing to resolve then: drop the stale conflict (and any dangling
      // sync/outbox rows) instead of inserting an orphaned outbox op.
      final domainRow = await exec.query(table.tableName,
          where: 'id = ?', whereArgs: [id], limit: 1);
      if (domainRow.isEmpty) {
        await exec.delete('lp_conflicts',
            where: 'store = ? AND record_id = ?', whereArgs: [store, id]);
        await exec.delete('lp_sync_row',
            where: 'store = ? AND record_id = ?', whereArgs: [store, id]);
        await exec.delete('lp_outbox',
            where: 'store = ? AND record_id = ?', whereArgs: [store, id]);
        tx.addChange(ChangeSet(store, {id}));
        tx.addChange(ChangeSet('lp_conflicts', {id}));
        return;
      }

      // The resolution base is the conflicted remote version, recorded in the
      // sync row's base_updated at conflict time (seen-vs-applied separation:
      // remote_updated stays the last APPLIED version). Fall back to
      // remote_updated for rows created by older code.
      final srRow = await exec.query(
        'lp_sync_row',
        where: 'store = ? AND record_id = ?',
        whereArgs: [store, id],
        limit: 1,
      );
      final remoteUpdated = remoteDeleted
          ? null
          : (srRow.isNotEmpty
              ? ((srRow.first['base_updated'] as String?) ??
                  (srRow.first['remote_updated'] as String?))
              : null);

      // 1. Delete conflict row
      await exec.delete(
        'lp_conflicts',
        where: 'store = ? AND record_id = ?',
        whereArgs: [store, id],
      );

      // 2. Update domain row. The resolution id ALWAYS wins: a caller-supplied
      // `id` inside [merged] must never rename the record or leak into the
      // pushed payload.
      final mergedWithId = <String, Object?>{...merged, 'id': id};
      final isArchived = mergedWithId['archived'] == true;
      final dbRow = encodeDbRow(schema,
          id: id, logical: mergedWithId, archived: isArchived);
      await exec.update(
        table.tableName,
        dbRow,
        where: 'id = ?',
        whereArgs: [id],
      );

      // 3. Compute dirty fields between the resolution base and merged (an
      // empty base for a delete-conflict: everything is "added").
      final dirtyFields = computeDirtyFields(
              remoteDeleted ? const <String, Object?>{} : record.remote,
              mergedWithId)
          .toList()
        ..sort();
      final mergedPayload = canonicalize(buildPayload(schema, mergedWithId));

      // 4. Update sync row to dirty with remote as base
      await exec.update(
        'lp_sync_row',
        {
          'sync_state': SyncState.dirty.name,
          'base_json': remoteJson,
          'base_hash': remoteHash,
          'base_updated': remoteUpdated,
          'dirty_fields': jsonEncode(dirtyFields),
        },
        where: 'store = ? AND record_id = ?',
        whereArgs: [store, id],
      );

      // 5. Update or insert outbox op with remote as base
      final existingOp = await exec.query(
        'lp_outbox',
        where: 'store = ? AND record_id = ?',
        whereArgs: [store, id],
        limit: 1,
      );

      if (existingOp.isEmpty) {
        final now = _pocket.now();
        await exec.insert(
          'lp_outbox',
          buildOutboxRow(
            store: store,
            recordId: id,
            kind: isArchived ? OutboxKind.archive : OutboxKind.upsert,
            payloadJson: mergedPayload,
            baseUpdated: remoteUpdated,
            baseHash: remoteHash,
            dirtyFieldsJson: jsonEncode(dirtyFields),
            opId: _pocket.outbox.generateOpId(),
            createdAt: now,
            updatedAt: now,
          ),
        );
      } else {
        await exec.update(
          'lp_outbox',
          {
            'kind': isArchived ? 'archive' : 'upsert',
            'payload_json': mergedPayload,
            'base_updated': remoteUpdated,
            'base_hash': remoteHash,
          },
          where: 'store = ? AND record_id = ?',
          whereArgs: [store, id],
        );
      }

      tx.addChange(ChangeSet(store, {id}));
      tx.addChange(ChangeSet('lp_conflicts', {id}));
      final changedFields = computeDirtyFields(record.local, mergedWithId)
        ..remove('id');
      tx.addRecordEvent(RecordChangeEvent(
        store: store,
        id: id,
        origin: ChangeOrigin.resolution,
        action: ChangeAction.update,
        oldRecord: record.local,
        newRecord: mergedWithId,
        changedFields: changedFields,
      ));
    });
  }

  /// Accepts the local version to resolve a conflict.
  Future<void> acceptLocal(String store, String id) async {
    final conflict = await get(store, id);
    if (conflict == null) {
      throw StateError('No conflict found for $store/$id');
    }
    await resolve(store: store, id: id, merged: conflict.local);
  }

  /// Accepts the remote version to resolve a conflict.
  Future<void> acceptRemote(String store, String id) async {
    final conflict = await get(store, id);
    if (conflict == null) {
      throw StateError('No conflict found for $store/$id');
    }
    if (conflict.remoteDeleted) {
      // The remote side deleted the record: accept it by hard-deleting the
      // local copy (and its sync metadata) so the local DB mirrors remote.
      await _pocket.collection(store).purge(id);
      return;
    }
    await resolve(store: store, id: id, merged: conflict.remote);
  }
}
