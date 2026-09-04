import 'dart:async';
import 'dart:convert';

import 'package:collection/collection.dart';
import 'package:localpocket/src/kernel/query/query_builder/query_builder.dart';
import 'package:localpocket/src/kernel/query/search_builder/search_builder.dart';
import 'package:meta/meta.dart';
import 'package:sqlite3/common.dart' show SqliteException;
import 'database_adapter.dart';

import 'change_bus.dart';
import 'execution_context.dart';
import 'codec.dart';
import 'errors.dart';
import 'hashing.dart';
import 'ids.dart';
import 'local_pocket.dart';
import 'schema.dart';
import 'transaction.dart';
import 'transaction_coordinator.dart';
import 'watch.dart';
import '../kernel/sync/outbox.dart';
import '../kernel/sync/sync_tables.dart';

/// What kind of local mutation is being applied.
enum MutationAction {
  /// Creates a record when absent, or replaces it when present.
  createOrUpdate,

  /// Creates when absent, else merges the given fields in (others kept).
  createOrUpdateMerge,

  /// Inserts a new record.
  create,

  /// Updates an existing record.
  update,

  /// Marks a record as archived.
  archive,

  /// Removes the archive flag from a record.
  restore,
}

/// {@template localpocket.collection}
/// Typed CRUD access to one store.
///
/// Records are plain `Map<String, Object?>`: declared fields map to typed
/// columns, undeclared keys round-trip through `extra`, `archived` is a
/// boolean, and mutations are atomic with their outbox intent.
/// {@endtemplate}
class Collection with ChangeBusAwareStore {
  /// Internal constructor used by [LocalPocket.collection] and [Tx.collection].
  ///
  /// {@macro localpocket.collection}
  Collection.internal(
    this._pocket,
    this._table, {
    required ExecutionContext context,
    Tx? tx,
  })  : _context = context,
        _tx = tx;

  final LocalPocket _pocket;
  final StoreTable _table;

  /// Operations run through this context: root for outer handles, the
  /// transaction context for stores from a [Tx] (never fall back to the
  /// outer executor).
  final ExecutionContext _context;
  final Tx? _tx;

  DatabaseExecutor get _ex => _context.executor;
  CollectionSchema<Object?> get _schema => _table.schema;

  /// The schema name used to access this collection.
  @override
  String get name => _schema.name;

  @override
  Stream<RecordChangeEvent> get recordEvents => _pocket.events;

  void _ensureWritable() {
    if (_tx != null && _tx!.readOnly) {
      throw ReadOnlyTxError('Cannot mutate "$name" through a read-only Tx.');
    }
  }

  // ---------------------------------------------------------------- writes --

  /// Creates a record or replaces the existing record with the same ID.
  ///
  /// If `record['id']` is omitted, a PocketBase-compatible ID is generated.
  /// The record and its synchronization intent are committed atomically.
  ///
  /// ```dart
  /// await users.put({
  ///   'email': 'jane@example.com',
  ///   'name': 'Jane',
  /// });
  /// ```
  Future<void> put(Map<String, Object?> record,
      {DurabilityClass durability = DurabilityClass.normal}) {
    if (_tx != null) {
      return mutateDirect(MutationAction.createOrUpdate, record: record);
    }
    return _pocket.transaction((tx) => tx.collection(name).put(record),
        durability: durability);
  }

  /// Creates a record, or merges [record]'s fields into the existing record
  /// without clearing unspecified fields (unlike [put], which replaces).
  /// If `record['id']` is omitted, a PocketBase-compatible ID is generated.
  ///
  /// ```dart
  /// await users.upsert({'id': userId, 'lastSeenAt': now}); // keeps other fields
  /// ```
  Future<void> upsert(Map<String, Object?> record,
      {DurabilityClass durability = DurabilityClass.normal}) {
    if (_tx != null) {
      return mutateDirect(MutationAction.createOrUpdateMerge, record: record);
    }
    return _pocket.transaction((tx) => tx.collection(name).upsert(record),
        durability: durability);
  }

  /// Atomically inserts or updates a list of records in one transaction.
  ///
  /// One coalesced `ChangeSet` is emitted on commit; duplicate ids apply
  /// sequentially (last write wins), matching repeated `put` calls.
  Future<void> putAll(List<Map<String, Object?>> records,
      {DurabilityClass durability = DurabilityClass.normal}) {
    if (_tx != null) return putAllDirect(records);
    return _pocket.transaction((tx) => tx.collection(name).putAll(records),
        durability: durability);
  }

  /// Atomically inserts or merges a list of records.
  ///
  /// Each record follows [upsert] semantics; the batch commits as one
  /// transaction, mirroring [putAll] (last-write-wins on duplicate ids).
  Future<void> upsertAll(List<Map<String, Object?>> records,
      {DurabilityClass durability = DurabilityClass.normal}) {
    if (_tx != null) {
      return putAllDirect(records, action: MutationAction.createOrUpdateMerge);
    }
    return _pocket.transaction((tx) => tx.collection(name).upsertAll(records),
        durability: durability);
  }

  /// Applies [changes] to an existing record without replacing unspecified fields.
  ///
  /// ```dart
  /// await tasks.patch(taskId, {
  ///   'completed': true,
  ///   'completed_at': DateTime.now().millisecondsSinceEpoch,
  /// });
  /// ```
  ///
  /// Throws [RecordNotFoundException] when [id] is not present locally.
  Future<void> patch(String id, Map<String, Object?> changes,
      {DurabilityClass durability = DurabilityClass.normal}) {
    if (_tx != null) return patchDirect(id, changes);
    return _pocket.transaction((tx) => tx.collection(name).patch(id, changes),
        durability: durability);
  }

  /// Applies partial updates to many records in ONE transaction.
  ///
  /// ```dart
  /// await tasks.patchAll({
  ///   taskIdA: {'completed': true},
  ///   taskIdB: {'archived': true},
  /// });
  /// ```
  ///
  /// Equivalent to awaiting [patch] per entry, but one durability boundary:
  /// one post-commit [ChangeSet] and one coalesced event stream. Throws on
  /// the first failure; earlier entries roll back with it.
  Future<void> patchAll(Map<String, Map<String, Object?>> patches,
      {DurabilityClass durability = DurabilityClass.normal}) {
    if (_tx != null) return patchAllDirect(patches);
    return _pocket.transaction((tx) => tx.collection(name).patchAll(patches),
        durability: durability);
  }

  /// Internal: batched partial updates used by [MutationService.patchAll]
  /// and the session-scoped `patchAll` wrapper; emits one coalesced
  /// [ChangeSet] on commit.
  @internal
  Future<void> patchAllDirect(Map<String, Map<String, Object?>> patches) async {
    _ensureWritable();
    if (patches.isEmpty) return;
    final exec = _ex;

    // Chunked probe of the batch: domain rows first, then sync/outbox
    // state for the rows that exist (same shape as putAllDirect's probe).
    // N per-record LEFT JOIN round-trips collapse into ~3 chunked queries;
    // the per-record apply below keeps its sequential error semantics.
    const probePage = 2000;
    final ids = patches.keys.toList();
    final existingById = <String, Map<String, Object?>>{};
    for (var start = 0; start < ids.length; start += probePage) {
      final end = (start + probePage).clamp(0, ids.length);
      final chunk = ids.sublist(start, end);
      final ph = List.filled(chunk.length, '?').join(', ');
      final rows = await exec.rawQuery(
          'SELECT * FROM "${_table.tableName}" WHERE id IN ($ph)', chunk);
      for (final r in rows) {
        final id = r['id']! as String;
        existingById[id] = decodeDbRow(_schema, r,
            cipher: _pocket.fieldCipher,
            cryptoProvider: _pocket.cryptoProvider);
      }
    }

    final srById = <String, SyncRowState>{};
    final opById = <String, OutboxOp>{};
    final existingIds = existingById.keys.toList();
    for (var start = 0; start < existingIds.length; start += probePage) {
      final end = (start + probePage).clamp(0, existingIds.length);
      final chunk = existingIds.sublist(start, end);
      final ph = List.filled(chunk.length, '?').join(', ');
      final args = [name, ...chunk];
      final srRows = await exec.query('lp_sync_row',
          where: 'store = ? AND record_id IN ($ph)', whereArgs: args);
      for (final r in srRows) {
        srById[r['record_id']! as String] = SyncRowState.fromRow(r);
      }
      final opRows = await exec.query('lp_outbox',
          where: 'store = ? AND record_id IN ($ph)', whereArgs: args);
      for (final r in opRows) {
        opById[r['record_id']! as String] = OutboxOp.fromRow(r);
      }
    }

    for (final e in patches.entries) {
      await patchDirect(e.key, e.value,
          coalesceChanges: true,
          prefetchedExisting: existingById[e.key],
          prefetchedSr: srById[e.key],
          prefetchedOp: opById[e.key]);
    }
    _tx!.addChange(ChangeSet(name, {for (final id in patches.keys) id}));
  }

  /// Soft-deletes a record by setting `archived` to `true`.
  ///
  /// Archived records are excluded from default queries but remain available
  /// with `query().includeArchived()`. A never-pushed record is dropped
  /// entirely (no remote delete exists) unless `keepUnsyncedArchives` is set.
  Future<void> archive(String id,
      {DurabilityClass durability = DurabilityClass.normal}) {
    if (_tx != null) return mutateDirect(MutationAction.archive, id: id);
    return _pocket.transaction((tx) => tx.collection(name).archive(id),
        durability: durability);
  }

  /// Removes the archive flag from the record with [id].
  Future<void> restore(String id,
      {DurabilityClass durability = DurabilityClass.normal}) {
    if (_tx != null) return mutateDirect(MutationAction.restore, id: id);
    return _pocket.transaction((tx) => tx.collection(name).restore(id),
        durability: durability);
  }

  /// Permanently removes a local record and its file references.
  ///
  /// Unlike [archive], this is a hard local deletion. Use it only when the
  /// application intentionally wants to remove local state.
  Future<void> purge(String id,
      {DurabilityClass durability = DurabilityClass.normal}) {
    if (_tx != null) return purgeDirect(id);
    return _pocket.transaction((tx) => tx.collection(name).purge(id),
        durability: durability);
  }

  /// Internal: hard-delete path used by [MutationService.purge] and the
  /// session-scoped `purge` wrapper.
  @internal
  Future<void> purgeDirect(String id) async {
    _ensureWritable();
    final existing = await _readLogical(id);
    final exec = _tx!.executor;
    await vanishRecordMetadata(exec, name, id, deleteSyncAndOutbox: true);
    await exec.delete(_table.tableName, where: 'id = ?', whereArgs: [id]);
    _tx!.addChange(ChangeSet(name, {id}));
    if (existing != null) {
      final changed = {...existing.keys}..remove('id');
      _tx!.emitRecord(
        store: name,
        id: id,
        origin: ChangeOrigin.local,
        action: ChangeAction.purge,
        oldRecord: existing,
        newRecord: null,
        changedFields: changed,
      );
    }
  }

  /// Internal: single-record partial update used by [MutationService.patch]
  /// and the session-scoped `patch` wrapper.
  @internal
  Future<void> patchDirect(String id, Map<String, Object?> changes,
      {bool coalesceChanges = false,
      Map<String, Object?>? prefetchedExisting,
      SyncRowState? prefetchedSr,
      OutboxOp? prefetchedOp}) async {
    _ensureWritable();
    final exec = _ex;

    // Fast path for dirty rows: the outbox payload already holds the full
    // desired state, so patch without re-reading the domain row. Sync-row
    // and outbox state come from one LEFT JOIN round-trip, or from a
    // prefetched batch probe (patchAll) when supplied.
    SyncRowState? sr;
    OutboxOp? op;
    if (prefetchedSr != null || prefetchedOp != null) {
      sr = prefetchedSr;
      op = prefetchedOp;
    } else {
      final joined = await exec.rawQuery(
          'SELECT s.*, '
          'o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, '
          'o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, '
          'o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, '
          'o.op_id AS o_op_id, o.created_at AS o_created_at, '
          'o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op '
          'FROM lp_sync_row s '
          'LEFT JOIN lp_outbox o '
          '  ON o.store = s.store AND o.record_id = s.record_id '
          'WHERE s.store = ? AND s.record_id = ? LIMIT 1',
          [name, id]);
      if (joined.isNotEmpty) {
        final row = joined.first;
        sr = SyncRowState.fromRow(row);
        if (row['o_kind'] != null) {
          op = OutboxOp.fromRow({
            'store': row['o_store'],
            'record_id': row['o_record_id'],
            'kind': row['o_kind'],
            'payload_json': row['o_payload_json'],
            'base_updated': row['o_base_updated'],
            'base_hash': row['o_base_hash'],
            'dirty_fields': row['o_dirty_fields'],
            'op_id': row['o_op_id'],
            'created_at': row['o_created_at'],
            'updated_at': row['o_updated_at'],
            'depends_on_op': row['o_depends_on_op'],
          });
        }
      }
    }
    if (sr != null && sr.syncState == SyncState.dirty && op != null) {
      await _patchDirtyFast(id, changes, sr, op,
          coalesceChanges: coalesceChanges);
      return;
    }

    await _fallbackPatch(id, changes,
        sr: sr,
        op: op,
        prefetchedExisting: prefetchedExisting,
        coalesceChanges: coalesceChanges);
  }

  Future<void> _fallbackPatch(String id, Map<String, Object?> changes,
      {SyncRowState? sr,
      OutboxOp? op,
      Map<String, Object?>? prefetchedExisting,
      bool coalesceChanges = false}) async {
    final existing = prefetchedExisting ?? await _readLogical(id);
    if (existing == null) {
      throw RecordNotFoundException('No record $name/$id to patch.');
    }
    final merged = <String, Object?>{...existing, ...changes};
    await mutateDirect(MutationAction.update,
        record: {'id': id, ...merged},
        id: id,
        existing: existing,
        prefetchedSyncRow: sr,
        prefetchedOp: op,
        coalesceChanges: coalesceChanges);
  }

  /// Dirty-row patch fast path: reuses the outbox payload as the existing
  /// state, issues a targeted UPDATE, and delegates bookkeeping to
  /// `applyLocalMutation`.
  Future<void> _patchDirtyFast(
      String id, Map<String, Object?> changes, SyncRowState sr, OutboxOp op,
      {bool coalesceChanges = false}) async {
    final hooks = _pocket.testHooks;
    Object? currentPayload;
    try {
      currentPayload = jsonDecode(op.payloadJson);
    } catch (_) {
      currentPayload = null;
    }
    if (currentPayload is! Map<String, Object?>) {
      // Defensive: corrupt payload — fall back to the full read path.
      return _fallbackPatch(id, changes,
          sr: sr, op: op, coalesceChanges: coalesceChanges);
    }
    // A payload naming a different record is corruption; fall back to the
    // authoritative domain row.
    final payloadId = currentPayload['id'];
    if (payloadId != null && payloadId != id) {
      return _fallbackPatch(id, changes,
          sr: sr, op: op, coalesceChanges: coalesceChanges);
    }

    final merged = <String, Object?>{...currentPayload, ...changes};
    merged['id'] = id;
    final payloadBuffer = StringBuffer();
    final payloadBytes =
        canonicalizePayloadInto(payloadBuffer, _schema, merged);
    final payloadJson = payloadBuffer.toString();
    // Validators see the logical form without the synthetic `id` key.
    final pending = _validate(id, {...merged}..remove('id'),
        precomputedPayload: payloadJson, precomputedPayloadBytes: payloadBytes);
    if (pending is Future) await pending;

    final dirtyFields =
        _dirtyFields(currentPayload, merged, MutationAction.update);

    // Targeted single-field UPDATE: when exactly one declared field changed,
    // write only that column plus `hidden=0` instead of re-encoding every
    // column and `extra`. Statement shape stays canonical so the
    // prepared-statement cache stays hot.
    Map<String, Object?> row;
    if (dirtyFields.length == 1 &&
        _schema.declaredFieldNames.contains(dirtyFields.single)) {
      final field = _schema.fieldByName(dirtyFields.single)!;
      row = {
        field.name: encodeFieldValue(_schema, field, merged[field.name],
            cipher: _pocket.fieldCipher,
            cryptoProvider: _pocket.cryptoProvider,
            recordId: id),
        'hidden': 0,
      };
    } else {
      row = encodeDbRow(
        _schema,
        id: id,
        logical: merged,
        archived: merged['archived'] == true,
        cipher: _pocket.fieldCipher,
        cryptoProvider: _pocket.cryptoProvider,
      );
    }
    try {
      await _ex.update(_table.tableName, row, where: 'id = ?', whereArgs: [id]);
    } catch (e) {
      throw translateConstraintError(e, record: merged);
    }
    hooks?.mutationCrashPoint?.call('after-domain-write');

    await _pocket.outbox.applyLocalMutation(
      table: _table,
      exec: _ex,
      id: id,
      action: MutationAction.update,
      row: row,
      oldRow: currentPayload,
      logical: merged,
      dirtyFields: dirtyFields,
      base: null,
      syncRow: sr,
      outboxOp: op,
      precomputedPayload: payloadJson,
    );
    hooks?.mutationCrashPoint?.call('after-outbox');

    if (!coalesceChanges) {
      _tx?.addChange(ChangeSet(name, {id}));
    }
    if (_tx?.wantsRecordEvents ?? false) {
      _tx?.emitRecord(
        store: name,
        id: id,
        origin: ChangeOrigin.local,
        action: ChangeAction.update,
        oldRecord: currentPayload,
        newRecord: merged,
        changedFields: dirtyFields.toSet(),
      );
    }
  }

  /// Internal: core mutation path (validation, payload, outbox, events)
  /// used by [MutationService] and the public write wrappers.
  @internal
  Future<void> mutateDirect(MutationAction action,
      {Map<String, Object?>? record,
      String? id,
      Map<String, Object?>? existing,
      SyncRowState? prefetchedSyncRow,
      OutboxOp? prefetchedOp,
      bool coalesceChanges = false}) async {
    _ensureWritable();
    final hooks = _pocket.testHooks;

    String recordId;
    Map<String, Object?>? existingRow = existing;
    Map<String, Object?> logical;
    // Populated by the combined probe below; skips later per-table reads.
    SyncRowState? probedSr;
    OutboxOp? probedOp;

    // Without prefetched state, fetch domain row + sync row + outbox op in
    // one three-way LEFT JOIN.
    Future<Map<String, Object?>?> probeExisting(String recordId) async {
      if (existingRow != null ||
          prefetchedSyncRow != null ||
          prefetchedOp != null) {
        return existingRow = existingRow ?? await _readLogical(recordId);
      }
      final probed = await _probeRowWithSync(recordId);
      existingRow = probed.$1;
      probedSr = probed.$2;
      probedOp = probed.$3;
      return existingRow;
    }

    if (action == MutationAction.createOrUpdate) {
      final rid = (record!['id'] as String?) ?? generateRecordId();
      if (!isValidRecordId(rid)) {
        throw ValidationException(
            'Invalid record id "$rid"; expected [a-z0-9]{15}.',
            field: 'id');
      }
      recordId = rid;
      await probeExisting(recordId);
      logical = _logicalFromRecord(record, recordId);
      action =
          existingRow == null ? MutationAction.create : MutationAction.update;
    } else if (action == MutationAction.update) {
      recordId = id!;
      await probeExisting(recordId);
      if (existingRow == null) {
        throw RecordNotFoundException('No record $name/$recordId to update.');
      }
      logical = _logicalFromRecord(record!, recordId);
    } else if (action == MutationAction.createOrUpdateMerge) {
      final rid = (record!['id'] as String?) ?? generateRecordId();
      if (!isValidRecordId(rid)) {
        throw ValidationException(
            'Invalid record id "$rid"; expected [a-z0-9]{15}.',
            field: 'id');
      }
      recordId = rid;
      await probeExisting(recordId);
      if (existingRow == null) {
        logical = _logicalFromRecord(record, recordId);
        action = MutationAction.create;
      } else {
        // Merge only the listed fields; unspecified fields are preserved.
        logical = {...existingRow!};
        for (final e in record.entries) {
          if (e.key == 'id') continue;
          logical[e.key] = e.value;
        }
        action = MutationAction.update;
      }
    } else {
      // archive / restore
      recordId = id!;
      await probeExisting(recordId);
      if (existingRow == null) {
        throw RecordNotFoundException(
            'No record $name/$recordId to archive/restore.');
      }
      logical = {...existingRow!, 'archived': action == MutationAction.archive};
    }

    // One canonical serialization per put, reused for validation, the outbox
    // payload, and the base snapshot hash.
    final payloadBuffer = StringBuffer();
    final payloadBytes = canonicalizePayloadInto(
        payloadBuffer, _schema, logical,
        idOverride: recordId.isNotEmpty ? recordId : null);
    final payloadJson = payloadBuffer.toString();

    final pending = _validate(recordId, logical,
        precomputedPayload: payloadJson, precomputedPayloadBytes: payloadBytes);
    if (pending is Future) await pending;

    // A fresh create cannot have sync/outbox rows (id is the PK): skip the
    // reads. putAll and the combined probe supply prefetched state.
    final sr = existingRow == null
        ? null
        : (prefetchedSyncRow ??
            probedSr ??
            await _pocket.outbox.readSyncRow(_ex, name, recordId));
    final outboxOp = existingRow == null
        ? null
        : (prefetchedOp ??
            probedOp ??
            await _pocket.outbox.readOp(_ex, name, recordId));

    // Edits are blocked while a row is held in conflict.
    if (sr != null && sr.syncState == SyncState.conflict) {
      throw ConflictBlockedError(
          'Record $name/$recordId is in conflict; resolve it before editing.');
    }

    // Base captured once, on the first dirt of a clean row ("earliest base").
    final firstDirt =
        existingRow != null && (sr == null || sr.syncState == SyncState.clean);
    BaseSnapshot? base;
    if (existingRow != null && firstDirt) {
      final payload = canonicalPayload(_schema, existingRow!);
      base = BaseSnapshot(
        baseJson: payload,
        baseHash: sha256Hex(payload),
        baseUpdated: sr?.remoteUpdated,
      );
    }

    final row = encodeDbRow(
      _schema,
      id: recordId,
      logical: logical,
      archived: logical['archived'] == true,
      cipher: _pocket.fieldCipher,
      cryptoProvider: _pocket.cryptoProvider,
    );

    final dirtyFields = _dirtyFields(existingRow, logical, action);

    // Same single-field UPDATE fast path as the dirty-patch path: one
    // changed declared field writes only that column plus `hidden=0`.
    Map<String, Object?> writeRow;
    if (existingRow != null &&
        dirtyFields.length == 1 &&
        _schema.declaredFieldNames.contains(dirtyFields.single)) {
      final field = _schema.fieldByName(dirtyFields.single)!;
      writeRow = {
        field.name: encodeFieldValue(_schema, field, logical[field.name],
            cipher: _pocket.fieldCipher,
            cryptoProvider: _pocket.cryptoProvider,
            recordId: recordId),
        'hidden': 0,
      };
    } else {
      writeRow = row;
    }

    try {
      if (existingRow == null) {
        await _ex.insert(_table.tableName, writeRow);
      } else {
        await _ex.update(_table.tableName, writeRow,
            where: 'id = ?', whereArgs: [recordId]);
      }
    } catch (e) {
      throw translateConstraintError(e, record: logical);
    }
    hooks?.mutationCrashPoint?.call('after-domain-write');

    final writeResult = await _pocket.outbox.applyLocalMutation(
      table: _table,
      exec: _ex,
      id: recordId,
      action: action,
      row: row,
      oldRow: existingRow,
      logical: logical,
      dirtyFields: dirtyFields,
      base: base,
      syncRow: sr,
      outboxOp: outboxOp,
      precomputedPayload: payloadJson,
    );
    hooks?.mutationCrashPoint?.call('after-outbox');

    // The vanish path (a never-remotely-known record archived) hard-deletes
    // the domain row inside applyLocalMutation; the event must say so instead
    // of advertising state that never commits.
    final vanished = writeResult.vanished;
    final ChangeAction changeAction;
    if (vanished) {
      changeAction = ChangeAction.purge;
    } else {
      switch (action) {
        case MutationAction.create:
        case MutationAction.createOrUpdate:
        case MutationAction.createOrUpdateMerge:
          changeAction =
              existingRow == null ? ChangeAction.create : ChangeAction.update;
        case MutationAction.update:
          changeAction = ChangeAction.update;
        case MutationAction.archive:
          changeAction = ChangeAction.archive;
        case MutationAction.restore:
          changeAction = ChangeAction.restore;
      }
    }

    final Set<String> changedFieldsSet;
    if (vanished) {
      changedFieldsSet = {
        for (final k in (existingRow ?? logical).keys)
          if (k != 'id') k,
      };
    } else if (action == MutationAction.archive ||
        action == MutationAction.restore) {
      changedFieldsSet = {'archived'};
    } else if (existingRow == null) {
      changedFieldsSet = logical.keys.where((k) => k != 'id').toSet();
    } else {
      changedFieldsSet = dirtyFields.toSet();
    }

    _tx?.emitRecord(
      store: name,
      id: recordId,
      origin: ChangeOrigin.local,
      action: changeAction,
      oldRecord: existingRow,
      newRecord: vanished ? null : logical,
      changedFields: changedFieldsSet,
    );

    if (!coalesceChanges) {
      _tx?.addChange(ChangeSet(name, {recordId}));
    }
    return;
  }

  /// Internal: batched create/merge used by [MutationService.putAll] and
  /// [MutationService.upsertAll].
  @internal
  Future<void> putAllDirect(List<Map<String, Object?>> records,
      {MutationAction action = MutationAction.createOrUpdate}) async {
    _ensureWritable();
    if (records.isEmpty) return;
    final exec = _tx!.executor;
    final tableName = _table.tableName;

    // Resolve and validate ids up front. With no explicit id in the batch,
    // generated ids are unique and unseen by construction (time-prefixed
    // monotonic counter + random suffix), so the existence probe and
    // duplicate detection are skipped (~14% of 100K bulk-insert time). A
    // generated id can only collide if the clock regresses across a restart;
    // the INSERT then raises the normal constraint error.
    final resolved = <(String, Map<String, Object?>)>[];
    var allGenerated = true;
    for (final record in records) {
      final explicit = record['id'];
      if (explicit != null) allGenerated = false;
      final rid = (explicit as String?) ?? generateRecordId();
      if (!isValidRecordId(rid)) {
        throw ValidationException(
            'Invalid record id "$rid"; expected [a-z0-9]{15}.',
            field: 'id');
      }
      resolved.add((rid, record));
    }

    // Duplicate ids must keep sequential put() semantics (last write wins,
    // first write's base preserved): fall back to the per-record path.
    var hasDuplicates = false;
    if (!allGenerated) {
      final counts = <String, int>{};
      for (final (rid, _) in resolved) {
        counts[rid] = (counts[rid] ?? 0) + 1;
      }
      hasDuplicates = counts.values.any((c) => c > 1);
    }

    // Fast attempt with no existence probe: an all-create batch pays zero
    // probing; on a constraint failure the fast path deletes exactly the rows
    // it inserted and throws [_BatchInsertConflict] so the fallback below can
    // probe and apply per-record updates. Only sound for full-replace putAll:
    // upsertAll records are partial and may merge into existing rows, so they
    // always take the probe + per-record merge path.
    if (action == MutationAction.createOrUpdate && !hasDuplicates) {
      try {
        await _putAllBatchCreate(exec, resolved);
        _tx!.addChange(ChangeSet(name, {for (final (id, _) in resolved) id}));
        return;
      } on _BatchInsertConflict {
        // Fall through to the probe + per-record path below.
      }
    }

    // Existence probe (duplicate-id batches or fast-attempt conflict): full
    // rows for every id so the update path can merge onto existing state.
    const probePage = 2000;
    final existingById = <String, Map<String, Object?>>{};
    for (var start = 0; start < resolved.length; start += probePage) {
      final end = (start + probePage).clamp(0, resolved.length);
      final ids = [for (final (id, _) in resolved.sublist(start, end)) id];
      final ph = List.filled(ids.length, '?').join(', ');
      final rows =
          await exec.query(tableName, where: 'id IN ($ph)', whereArgs: ids);
      for (final r in rows) {
        final id = r['id']! as String;
        existingById[id] = decodeDbRow(_schema, r,
            cipher: _pocket.fieldCipher,
            cryptoProvider: _pocket.cryptoProvider);
      }
    }

    // Chunked sync/outbox state resolution for pre-existing rows.
    final srById = <String, SyncRowState>{};
    final opById = <String, OutboxOp>{};
    final existingIds = existingById.keys.toList();
    for (var start = 0; start < existingIds.length; start += probePage) {
      final end = (start + probePage).clamp(0, existingIds.length);
      final chunk = existingIds.sublist(start, end);
      final ph = List.filled(chunk.length, '?').join(', ');
      final args = [name, ...chunk];
      final srRows = await exec.query('lp_sync_row',
          where: 'store = ? AND record_id IN ($ph)', whereArgs: args);
      for (final r in srRows) {
        srById[r['record_id']! as String] = SyncRowState.fromRow(r);
      }
      final opRows = await exec.query('lp_outbox',
          where: 'store = ? AND record_id IN ($ph)', whereArgs: args);
      for (final r in opRows) {
        opById[r['record_id']! as String] = OutboxOp.fromRow(r);
      }
    }

    // Apply in order; duplicate ids re-read so sequential put() semantics
    // hold, unique ids use prefetched state.
    final writtenIds = <String>{};
    for (final (rid, record) in resolved) {
      final existing = existingById[rid];
      if (writtenIds.contains(rid)) {
        await mutateDirect(action,
            record: {...record, 'id': rid}, coalesceChanges: true);
      } else {
        await mutateDirect(action,
            record: {...record, 'id': rid},
            existing: existing,
            prefetchedSyncRow: existing == null ? null : srById[rid],
            prefetchedOp: existing == null ? null : opById[rid],
            coalesceChanges: true);
        writtenIds.add(rid);
      }
    }
    _tx!.addChange(ChangeSet(name, writtenIds));
  }

  /// Batch fast path for all-create `putAll`: inserts
  /// domain/outbox/sync rows inside the current transaction.
  ///
  /// On a [DirectSqliteDatabase] (no test hooks) uses multi-row VALUES
  /// chunks (~3 statement dispatches per chunk); constraint failures fall
  /// back to per-record inserts so errors stay attributed.
  Future<void> _putAllBatchCreate(DatabaseExecutor exec,
      List<(String, Map<String, Object?>)> records) async {
    final db = _ex;
    if (db is DirectSqliteDatabase && _pocket.testHooks?.onExecute == null) {
      await _putAllBatchCreateDirect(exec, records);
      return;
    }
    final now = _pocket.now();
    final wantsEvents = _tx?.wantsRecordEvents ?? false;
    final logicals = <(String, Map<String, Object?>)>[];
    var inserted = 0;
    try {
      for (final (rid, record) in records) {
        final logical = await _batchCreateInsertOne(exec, db, rid, record, now);
        if (wantsEvents) logicals.add((rid, logical));
        inserted++;
      }
    } on SqliteException {
      // A record conflicted: remove exactly the fully-inserted records and
      // signal the probe + per-record fallback.
      final ids = [for (var i = 0; i < inserted; i++) records[i].$1];
      await _deleteFastInserted(exec, ids);
      throw _BatchInsertConflict();
    }
    if (wantsEvents) {
      for (final (rid, logical) in logicals) {
        _tx!.emitRecord(
          store: name,
          id: rid,
          origin: ChangeOrigin.local,
          action: ChangeAction.create,
          oldRecord: null,
          newRecord: logical,
        );
      }
    }
  }

  Future<void> _putAllBatchCreateDirect(DatabaseExecutor exec,
      List<(String, Map<String, Object?>)> records) async {
    final schema = _schema;
    final now = _pocket.now();
    final db = _ex as DirectSqliteDatabase;

    // Column order matches encodeDbRow exactly (id, declared fields, extra,
    // archived, hidden); outboxColumns/syncRowColumns own bookkeeping order.
    final domainCols = <String>[
      'id',
      for (final f in schema.fields) f.name,
      'extra',
      'archived',
      'hidden',
    ];
    final domainSqlPrefix =
        'INSERT INTO "${_table.tableName}" (${quotedColumnList(domainCols)}) VALUES ';
    final outboxSqlPrefix =
        'INSERT INTO lp_outbox (${quotedColumnList(outboxColumns)}) VALUES ';
    final syncSqlPrefix =
        'INSERT INTO lp_sync_row (${quotedColumnList(syncRowColumns)}) VALUES ';
    String valuesTemplate(int cols, int rows) =>
        List.filled(rows, '(${placeholders(cols)})').join(', ');

    const chunkSize = 500;
    // Reused across records: clearing is far cheaper than 100K allocations.
    final payloadBuffer = StringBuffer();
    // The id-stripping copy keeps the synthetic `id` key away from validators
    // and record events; when neither observes it, pass the map directly.
    final wantsEvents = _tx?.wantsRecordEvents ?? false;
    final copyLogical = _schema.validator != null || wantsEvents;
    final allLogicals = wantsEvents ? <(String, Map<String, Object?>)>[] : null;
    for (var start = 0; start < records.length; start += chunkSize) {
      final end = (start + chunkSize).clamp(0, records.length);
      final chunkLen = end - start;
      final domainVals = <Object?>[];
      final outboxVals = <Object?>[];
      final syncVals = <Object?>[];
      for (var i = start; i < end; i++) {
        final (rid, record) = records[i];
        final logical = copyLogical ? _logicalFromRecord(record, rid) : record;
        payloadBuffer.clear();
        final payloadBytes = canonicalizePayloadInto(
            payloadBuffer, schema, logical,
            idOverride: rid);
        final payloadJson = payloadBuffer.toString();
        final pending = _validate(rid, logical,
            precomputedPayload: payloadJson,
            precomputedPayloadBytes: payloadBytes);
        if (pending is Future) await pending;
        // Map-free domain encoding in [domainCols] order.
        appendDomainValues(domainVals, schema,
            id: rid,
            logical: logical,
            archived: logical['archived'] == true,
            cipher: _pocket.fieldCipher,
            cryptoProvider: _pocket.cryptoProvider);
        final opId = _pocket.outbox.generateOpId();
        appendOutboxValues(outboxVals,
            store: name,
            recordId: rid,
            kind: OutboxKind.upsert,
            payloadJson: payloadJson,
            dirtyFieldsJson: kAllDirtyFieldsJson,
            opId: opId,
            createdAt: now,
            updatedAt: now);
        appendSyncRowValues(syncVals,
            store: name,
            recordId: rid,
            syncState: SyncState.dirty,
            dirtyFieldsJson: kAllDirtyFieldsJson,
            localRev: 1,
            opId: opId,
            schemaVer: schema.version);
        allLogicals?.add((rid, logical));
      }
      var domainDone = false;
      var outboxDone = false;
      try {
        db
            .getPreparedStatement(
                '$domainSqlPrefix${valuesTemplate(domainCols.length, chunkLen)}')
            .execute(domainVals);
        domainDone = true;
        db
            .getPreparedStatement(
                '$outboxSqlPrefix${valuesTemplate(outboxColumns.length, chunkLen)}')
            .execute(outboxVals);
        outboxDone = true;
        db
            .getPreparedStatement(
                '$syncSqlPrefix${valuesTemplate(syncRowColumns.length, chunkLen)}')
            .execute(syncVals);
      } on SqliteException {
        // Remove exactly what this attempt inserted (prior chunks plus the
        // tables that landed before the failure); the conflicting pre-existing
        // rows stay intact for the fallback update path.
        final priorIds = [for (var i = 0; i < start; i++) records[i].$1];
        await _deleteFastInserted(exec, priorIds);
        if (domainDone || outboxDone) {
          final chunkIds = [for (var i = start; i < end; i++) records[i].$1];
          final ph = List.filled(chunkIds.length, '?').join(', ');
          if (domainDone) {
            await exec.delete(_table.tableName,
                where: 'id IN ($ph)', whereArgs: chunkIds);
          }
          if (outboxDone) {
            final args = [name, ...chunkIds];
            await exec.delete('lp_outbox',
                where: 'store = ? AND record_id IN ($ph)', whereArgs: args);
          }
        }
        throw _BatchInsertConflict();
      }
    }
    if (wantsEvents) {
      for (final (rid, logical) in allLogicals!) {
        _tx!.emitRecord(
          store: name,
          id: rid,
          origin: ChangeOrigin.local,
          action: ChangeAction.create,
          oldRecord: null,
          newRecord: logical,
        );
      }
    }
  }

  /// Per-record create insert. On a constraint failure it removes only the
  /// rows this record inserted and rethrows so the batch caller can fall
  /// back to the probe + per-record path.
  Future<Map<String, Object?>> _batchCreateInsertOne(
      DatabaseExecutor exec,
      DatabaseExecutor db,
      String rid,
      Map<String, Object?> record,
      int now) async {
    final schema = _schema;
    final logical = _logicalFromRecord(record, rid);
    final payloadBuffer = StringBuffer();
    final payloadBytes = canonicalizePayloadInto(payloadBuffer, schema, logical,
        idOverride: rid);
    final payloadJson = payloadBuffer.toString();
    final pending = _validate(rid, logical,
        precomputedPayload: payloadJson, precomputedPayloadBytes: payloadBytes);
    if (pending is Future) await pending;
    final row = encodeDbRow(
      schema,
      id: rid,
      logical: logical,
      archived: logical['archived'] == true,
      cipher: _pocket.fieldCipher,
      cryptoProvider: _pocket.cryptoProvider,
    );
    final opId = _pocket.outbox.generateOpId();
    final outboxRow = buildOutboxRow(
      store: name,
      recordId: rid,
      kind: OutboxKind.upsert,
      payloadJson: payloadJson,
      dirtyFieldsJson: kAllDirtyFieldsJson,
      opId: opId,
      createdAt: now,
      updatedAt: now,
    );
    final syncRow = buildSyncRow(
      store: name,
      recordId: rid,
      syncState: SyncState.dirty,
      dirtyFieldsJson: kAllDirtyFieldsJson,
      localRev: 1,
      opId: opId,
      schemaVer: schema.version,
    );
    var domainDone = false;
    var outboxDone = false;
    try {
      if (db is DirectSqliteDatabase && _pocket.testHooks?.onExecute == null) {
        final cols = row.keys.map((k) => '"$k"').join(', ');
        final ph = List.filled(row.length, '?').join(', ');
        final domainSql =
            'INSERT INTO "${_table.tableName}" ($cols) VALUES ($ph)';
        db.getPreparedStatement(domainSql).execute(row.values.toList());
        domainDone = true;
        db
            .getPreparedStatement('INSERT INTO lp_outbox '
                '(${quotedColumnList(outboxColumns)}) '
                'VALUES (${placeholders(outboxColumns.length)})')
            .execute(rowValuesInOrder(outboxRow, outboxColumns));
        outboxDone = true;
        db
            .getPreparedStatement('INSERT INTO lp_sync_row '
                '(${quotedColumnList(syncRowColumns)}) '
                'VALUES (${placeholders(syncRowColumns.length)})')
            .execute(rowValuesInOrder(syncRow, syncRowColumns));
      } else {
        await exec.insert(_table.tableName, row);
        domainDone = true;
        await exec.insert('lp_outbox', outboxRow);
        outboxDone = true;
        await exec.insert('lp_sync_row', syncRow);
      }
    } catch (e) {
      if (domainDone) {
        await exec.delete(_table.tableName, where: 'id = ?', whereArgs: [rid]);
      }
      if (outboxDone) {
        await exec.delete('lp_outbox',
            where: 'store = ? AND record_id = ?', whereArgs: [name, rid]);
      }
      rethrow;
    }
    return logical;
  }

  /// Removes the given ids' rows from all three write-path tables to unwind
  /// the bulk-create fast path; only fast-path-inserted ids are passed.
  Future<void> _deleteFastInserted(
      DatabaseExecutor exec, List<String> ids) async {
    if (ids.isEmpty) return;
    final ph = List.filled(ids.length, '?').join(', ');
    await exec.delete(_table.tableName, where: 'id IN ($ph)', whereArgs: ids);
    final args = [name, ...ids];
    await exec.delete('lp_outbox',
        where: 'store = ? AND record_id IN ($ph)', whereArgs: args);
    await exec.delete('lp_sync_row',
        where: 'store = ? AND record_id IN ($ph)', whereArgs: args);
  }

  Map<String, Object?> _logicalFromRecord(
      Map<String, Object?> record, String id) {
    final logical = <String, Object?>{};
    for (final e in record.entries) {
      if (e.key == 'id') continue;
      logical[e.key] = e.value;
    }
    logical.putIfAbsent('archived', () => false);
    return logical;
  }

  List<String> _dirtyFields(Map<String, Object?>? oldLogical,
      Map<String, Object?> newLogical, MutationAction action) {
    if (oldLogical == null) return const ['*'];
    final changed = <String>{};
    final keys = {...oldLogical.keys, ...newLogical.keys};
    const eq = DeepCollectionEquality();
    for (final k in keys) {
      if (k == 'id') continue;
      if (!eq.equals(oldLogical[k], newLogical[k])) changed.add(k);
    }
    final list = changed.toList()..sort();
    return list;
  }

  // ---------------------------------------------------------------- reads ---

  /// Returns the record with [id], or `null` when it does not exist locally.
  Future<Map<String, Object?>?> _readLogical(String id) async {
    final rows = await _ex.rawQuery(
        'SELECT * FROM "${_table.tableName}" WHERE id = ? LIMIT 1', [id]);
    if (rows.isEmpty) return null;
    return decodeDbRow(_schema, rows.first,
        cipher: _pocket.fieldCipher, cryptoProvider: _pocket.cryptoProvider);
  }

  /// One three-way LEFT JOIN returning the domain row, sync row, and outbox
  /// op — three point reads collapsed into one round trip. Every bookkeeping
  /// column is aliased so a user field can never collide.
  Future<(Map<String, Object?>?, SyncRowState?, OutboxOp?)> _probeRowWithSync(
      String id) async {
    final rows = await _ex.rawQuery(
        'SELECT w.*, '
        's.store AS s_store, s.record_id AS s_record_id, '
        's.remote_updated AS s_remote_updated, '
        's.last_seen_at AS s_last_seen_at, s.base_updated AS s_base_updated, '
        's.base_hash AS s_base_hash, s.base_json AS s_base_json, '
        's.sync_state AS s_sync_state, s.dirty_fields AS s_dirty_fields, '
        's.local_rev AS s_local_rev, s.access_state AS s_access_state, '
        's.op_id AS s_op_id, s.attempt_count AS s_attempt_count, '
        's.next_retry_at AS s_next_retry_at, s.last_error AS s_last_error, '
        's.schema_ver AS s_schema_ver, '
        'o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, '
        'o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, '
        'o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, '
        'o.op_id AS o_op_id, o.created_at AS o_created_at, '
        'o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op '
        'FROM "${_table.tableName}" w '
        'LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id '
        'LEFT JOIN lp_outbox o ON o.store = ? AND o.record_id = w.id '
        'WHERE w.id = ? LIMIT 1',
        [name, name, id]);
    if (rows.isEmpty) return (null, null, null);
    final row = rows.first;
    final logical = decodeDbRow(_schema, row,
        cipher: _pocket.fieldCipher, cryptoProvider: _pocket.cryptoProvider);
    final sr = row['s_sync_state'] != null
        ? SyncRowState.fromRow({
            'store': row['s_store'],
            'record_id': row['s_record_id'],
            'remote_updated': row['s_remote_updated'],
            'last_seen_at': row['s_last_seen_at'],
            'base_updated': row['s_base_updated'],
            'base_hash': row['s_base_hash'],
            'base_json': row['s_base_json'],
            'sync_state': row['s_sync_state'],
            'dirty_fields': row['s_dirty_fields'],
            'local_rev': row['s_local_rev'],
            'access_state': row['s_access_state'],
            'op_id': row['s_op_id'],
            'attempt_count': row['s_attempt_count'],
            'next_retry_at': row['s_next_retry_at'],
            'last_error': row['s_last_error'],
            'schema_ver': row['s_schema_ver'],
          })
        : null;
    final op = row['o_kind'] != null
        ? OutboxOp.fromRow({
            'store': row['o_store'],
            'record_id': row['o_record_id'],
            'kind': row['o_kind'],
            'payload_json': row['o_payload_json'],
            'base_updated': row['o_base_updated'],
            'base_hash': row['o_base_hash'],
            'dirty_fields': row['o_dirty_fields'],
            'op_id': row['o_op_id'],
            'created_at': row['o_created_at'],
            'updated_at': row['o_updated_at'],
            'depends_on_op': row['o_depends_on_op'],
          })
        : null;
    return (logical, sr, op);
  }

  /// Returns a record by ID, applying any pending lazy document migrations,
  /// or `null` when absent.
  ///
  /// For schemas above version 1 a LEFT JOIN against `lp_sync_row` also
  /// fetches `schema_ver` in one round-trip; version-1 schemas skip the join.
  Future<Map<String, Object?>?> get(String id) async {
    // Outside an explicit Tx, point reads can check the LRU read cache.
    if (_tx == null && _table.readCache.containsKey(id)) {
      return _table.readCache.get(id);
    }

    final List<Map<String, Object?>> rows;
    if (_schema.version > 1) {
      rows = await _ex.rawQuery(
          'SELECT w.*, s.schema_ver AS lp_schema_ver '
          'FROM ${_table.tableName} w '
          'LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id '
          'WHERE w.id = ? LIMIT 1',
          [name, id]);
    } else {
      rows = await _ex.rawQuery(
          'SELECT * FROM "${_table.tableName}" WHERE id = ? LIMIT 1', [id]);
    }
    if (rows.isEmpty) {
      if (_tx == null) {
        _table.readCache.set(id, null);
      }
      return null;
    }
    final row = rows.first;
    var logical = decodeDbRow(_schema, row,
        cipher: _pocket.fieldCipher, cryptoProvider: _pocket.cryptoProvider);
    final storedVer = (row['lp_schema_ver'] as int?) ?? 1;
    if (storedVer < _schema.version) {
      logical = await applyDocumentMigrations(_schema, logical,
          from: storedVer, to: _schema.version);
    }
    if (_tx == null) {
      _table.readCache.set(id, logical);
    }
    return logical;
  }

  // ------------------------------------------------------------- validation --

  /// Validates one logical record. Synchronous on the fast path: when the
  /// store's validator hook completes without awaiting (a native in-process
  /// closure, or no hook at all) this returns void and the caller never
  /// suspends. A channel-backed validator (worker runtime) returns the
  /// pending size check, which the caller must await.
  FutureOr<void> _validate(String id, Map<String, Object?> logical,
      {String? precomputedPayload, int? precomputedPayloadBytes}) {
    for (final f in _schema.fields) {
      final v = logical[f.name];
      if (f.required && v == null) {
        throw ValidationException('Field "${f.name}" is required.',
            field: f.name);
      }
      if (v == null) continue;
      final violation = fieldKindViolation(f, v);
      if (violation != null) {
        throw ValidationException(_kindViolationMessage(f, violation),
            field: f.name);
      }
    }
    final validator = _schema.validator;
    if (validator != null) {
      final msgs = validator(logical);
      if (msgs is Future<List<String>>) {
        return _validateAsyncTail(msgs, logical,
            precomputedPayload: precomputedPayload,
            precomputedPayloadBytes: precomputedPayloadBytes);
      }
      if (msgs.isNotEmpty) {
        throw ValidationException(msgs.join('; '));
      }
    }
    _validateSize(logical,
        precomputedPayload: precomputedPayload,
        precomputedPayloadBytes: precomputedPayloadBytes);
  }

  Future<void> _validateAsyncTail(
      Future<List<String>> msgs, Map<String, Object?> logical,
      {String? precomputedPayload, int? precomputedPayloadBytes}) async {
    final resolved = await msgs;
    if (resolved.isNotEmpty) {
      throw ValidationException(resolved.join('; '));
    }
    _validateSize(logical,
        precomputedPayload: precomputedPayload,
        precomputedPayloadBytes: precomputedPayloadBytes);
  }

  void _validateSize(Map<String, Object?> logical,
      {String? precomputedPayload, int? precomputedPayloadBytes}) {
    // Upper-bound UTF-8 measurement (non-ASCII counted as 4 bytes), no
    // second serialization pass.
    final bytes = precomputedPayloadBytes ??
        utf8
            .encode(precomputedPayload ?? canonicalPayload(_schema, logical))
            .length;
    if (bytes > _pocket.maxDocBytes) {
      throw ValidationException(
          'Document exceeds max size ($bytes > ${_pocket.maxDocBytes} bytes).',
          field: null);
    }
  }

  static String _kindViolationMessage(Field f, KindViolation violation) {
    final name = f.name;
    return switch (violation) {
      KindViolation.textExpected => 'Field "$name" must be a string.',
      KindViolation.intExpected => 'Field "$name" must be an integer.',
      KindViolation.numberExpected => 'Field "$name" must be a number.',
      KindViolation.boolExpected => 'Field "$name" must be a boolean.',
      KindViolation.jsonExpected =>
        'Field "$name" must be a JSON object or array.',
      KindViolation.jsonListExpected => 'Field "$name" must be a JSON array.',
      KindViolation.enumValueRejected =>
        'Field "$name" must be one of ${f.enumValues!.join(', ')}.',
    };
  }

  // ------------------------------------------------------------- queries ----

  /// Starts a fluent query against this collection.
  ///
  /// Example: `tasks.query().where('done', eq: false).limit(20).fetch()`.
  QueryBuilder query() => QueryBuilder.internal(_pocket, _table, executor: _ex);

  /// Starts a full-text search on the collection's configured FTS fields.
  ///
  /// The schema must define [FtsSpec] and the SQLite engine must provide FTS5.
  SearchBuilder search(String term) =>
      SearchBuilder.internal(_pocket, _schema, term, executor: _ex);

  /// Watches the record at [id], re-emitting only when that record changes.
  Stream<Map<String, Object?>?> watchOne(String id) =>
      OneWatcher(_pocket, _table, id).startStream();
}

/// The bulk-create fast path hit a constraint conflict (an id in the batch
/// already exists); its rows were removed, so `putAll` falls back to the
/// probe + per-record update path.
class _BatchInsertConflict implements Exception {}
