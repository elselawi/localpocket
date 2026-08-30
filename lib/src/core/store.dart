import 'dart:convert';

import 'package:collection/collection.dart';
import 'package:localpocket/src/core/query/query_builder/query_builder.dart';
import 'package:localpocket/src/core/query/search_builder/search_builder.dart';
import 'package:sqlite3/common.dart' show SqliteException;
import 'database_adapter.dart';

import 'change_bus.dart';
import 'codec.dart';
import 'errors.dart';
import 'hashing.dart';
import 'ids.dart';
import 'local_pocket.dart';
import 'schema.dart';
import 'transaction.dart';
import 'watch.dart';
import '../sync/outbox.dart';
import '../sync/sync_tables.dart';

part 'mutation_service.dart';

/// What kind of local mutation is being applied.
enum MutationAction {
  /// Creates a record when absent, or replaces it when present.
  createOrUpdate,

  /// Creates a record when absent, or merges the given fields into it when
  /// present (unspecified fields are preserved).
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

/// {@template localpocket.page}
/// The result of a paginated query.
///
/// Cursors are bidirectional: [nextCursor] continues forward (keyset-after
/// the window's last row) and [prevCursor] continues backward (keyset-before
/// the window's first row). When both are non-null they carry the same
/// payload — the direction is chosen by the consume call. Use [nextCursor]
/// with [QueryBuilder.keysetAfter] and [prevCursor] with
/// [QueryBuilder.keysetBefore]. When [hasNext] is false, [nextCursor] is
/// normally `null`; when [hasPrev] is false, [prevCursor] is `null`.
/// {@endtemplate}
class Page {
  /// Creates a query page.
  ///
  /// {@macro localpocket.page}
  const Page({
    required this.items,
    required this.hasNext,
    this.nextCursor,
    this.prevCursor,
    this.hasPrev = false,
  });

  /// Records in this page, in the requested order.
  final List<Map<String, Object?>> items;

  /// Cursor for the next keyset page, or `null` when this is the last page.
  final String? nextCursor;

  /// Cursor for the previous keyset page, or `null` when nothing was
  /// observed before this window (the first page, or a backward page whose
  /// continuation found no earlier rows).
  final String? prevCursor;

  /// Whether the database observed a row after this window when the page was
  /// built: exact via the limit+1 check on forward fetches, and via the
  /// one-row forward probe on backward fetches.
  final bool hasNext;

  /// Whether rows were observed before this window. Exact for pages fetched
  /// backward; for forward continuations it is a mint-time fact (the
  /// consumed cursor's anchor row existed when that cursor was minted).
  final bool hasPrev;
}

/// {@template localpocket.collection}
/// Typed CRUD access to one store.
///
/// Records are plain `Map<String, Object?>`: declared fields map to typed
/// columns, undeclared keys round-trip losslessly through `extra`, and
/// `archived` is a boolean. Mutations are atomic with their outbox intent
/// (the local-first invariant).
/// {@endtemplate}
class Collection with ChangeBusAwareStore {
  /// Internal constructor used by [LocalPocket.collection] and [Tx.collection].
  ///
  /// {@macro localpocket.collection}
  Collection.internal(
    this._pocket,
    this._table, {
    DatabaseExecutor? exec,
    Tx? tx,
  })  : _exec = exec,
        _tx = tx;

  final LocalPocket _pocket;
  final StoreTable _table;
  final DatabaseExecutor? _exec;
  final Tx? _tx;

  DatabaseExecutor get _ex => _exec ?? _pocket.db;
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
      return _mutate(MutationAction.createOrUpdate, record: record);
    }
    return _pocket.transaction((tx) => tx.collection(name).put(record),
        durability: durability);
  }

  /// Creates a record, or merges [record]'s fields into the existing record
  /// with the same ID without clearing unspecified fields.
  ///
  /// Unlike [put] (which replaces the whole record) and [patch] (which throws
  /// when the record is missing), [upsert] only touches the fields present in
  /// [record] and creates the record when it doesn't exist. If `record['id']`
  /// is omitted, a PocketBase-compatible ID is generated.
  ///
  /// ```dart
  /// await users.upsert({'id': userId, 'lastSeenAt': now}); // keeps other fields
  /// ```
  Future<void> upsert(Map<String, Object?> record,
      {DurabilityClass durability = DurabilityClass.normal}) {
    if (_tx != null) {
      return _mutate(MutationAction.createOrUpdateMerge, record: record);
    }
    return _pocket.transaction((tx) => tx.collection(name).upsert(record),
        durability: durability);
  }

  /// Atomically inserts or updates a list of records.
  ///
  /// The whole batch commits as a single transaction. Existence and
  /// sync/outbox state are resolved with chunked `IN (...)` probes instead of
  /// one query per record, and one coalesced `ChangeSet` is emitted on commit
  /// (transaction-scoped state map). Within the batch,
  /// duplicate ids are applied sequentially (last write wins) with the same
  /// semantics as repeated `put` calls.
  Future<void> putAll(List<Map<String, Object?>> records,
      {DurabilityClass durability = DurabilityClass.normal}) {
    if (_tx != null) return _putAll(records);
    return _pocket.transaction((tx) => tx.collection(name).putAll(records),
        durability: durability);
  }

  /// Atomically inserts or merges a list of records.
  ///
  /// Each record follows [upsert] semantics (create when absent, merge only
  /// the listed fields when present) and the whole batch commits as a single
  /// transaction, mirroring [putAll]'s batch behavior (last-write-wins on
  /// duplicate ids, all-or-nothing rollback).
  Future<void> upsertAll(List<Map<String, Object?>> records,
      {DurabilityClass durability = DurabilityClass.normal}) {
    if (_tx != null) {
      return _putAll(records, action: MutationAction.createOrUpdateMerge);
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
    if (_tx != null) return _patch(id, changes);
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
  /// Semantically equivalent to awaiting [patch] for every entry, but the
  /// whole batch commits as one durability boundary: one fsync (FULL), one
  /// post-commit [ChangeSet], and one coalesced record-event stream. Each
  /// entry follows the exact same path as an individual [patch] — including
  /// the dirty-row fast path and outbox bookkeeping. Throws on the first
  /// failure ([RecordNotFoundException] or validation); earlier entries in
  /// the batch are rolled back with it.
  Future<void> patchAll(Map<String, Map<String, Object?>> patches,
      {DurabilityClass durability = DurabilityClass.normal}) {
    if (_tx != null) return _patchAll(patches);
    return _pocket.transaction((tx) => tx.collection(name).patchAll(patches),
        durability: durability);
  }

  Future<void> _patchAll(Map<String, Map<String, Object?>> patches) async {
    _ensureWritable();
    if (patches.isEmpty) return;
    for (final e in patches.entries) {
      await _patch(e.key, e.value, coalesceChanges: true);
    }
    _tx!.addChange(ChangeSet(name, {for (final id in patches.keys) id}));
  }

  /// Soft-deletes a record by setting `archived` to `true`.
  ///
  /// Archived records are excluded from default queries but remain available
  /// with `query().includeArchived()`. One exception: a record that was never
  /// pushed to the remote is dropped entirely on archive — there is no remote
  /// delete to record — unless the store's schema sets
  /// `keepUnsyncedArchives`.
  Future<void> archive(String id,
      {DurabilityClass durability = DurabilityClass.normal}) {
    if (_tx != null) return _mutate(MutationAction.archive, id: id);
    return _pocket.transaction((tx) => tx.collection(name).archive(id),
        durability: durability);
  }

  /// Removes the archive flag from the record with [id].
  Future<void> restore(String id,
      {DurabilityClass durability = DurabilityClass.normal}) {
    if (_tx != null) return _mutate(MutationAction.restore, id: id);
    return _pocket.transaction((tx) => tx.collection(name).restore(id),
        durability: durability);
  }

  /// Permanently removes a local record and its file references.
  ///
  /// Unlike [archive], this is a hard local deletion. Use it only when the
  /// application intentionally wants to remove local state.
  Future<void> purge(String id,
      {DurabilityClass durability = DurabilityClass.normal}) {
    if (_tx != null) return _purge(id);
    return _pocket.transaction((tx) => tx.collection(name).purge(id),
        durability: durability);
  }

  Future<void> _purge(String id) async {
    _ensureWritable();
    final existing = await _readLogical(id);
    final exec = _tx!.executor;
    await vanishRecordMetadata(exec, name, id, deleteSyncAndOutbox: true);
    await exec.delete(_table.tableName, where: 'id = ?', whereArgs: [id]);
    _tx!.addChange(ChangeSet(name, {id}));
    if (existing != null) {
      final changed = {...existing.keys}..remove('id');
      _tx!.addRecordEvent(RecordChangeEvent(
        store: name,
        id: id,
        origin: ChangeOrigin.local,
        action: ChangeAction.purge,
        oldRecord: existing,
        newRecord: null,
        changedFields: changed,
      ));
    }
  }

  Future<void> _patch(String id, Map<String, Object?> changes,
      {bool coalesceChanges = false}) async {
    _ensureWritable();
    final exec = _ex;

    // Fast path: when the row is already dirty, its earliest
    // base is captured and the outbox payload holds the full desired state, so
    // we can patch without reading the domain row or re-serializing a base.
    // Sync-row and outbox state come from ONE LEFT JOIN round-trip
    // (outbox/edit profile: was two round-trips per patch).
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
    SyncRowState? sr;
    OutboxOp? op;
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
    if (sr != null && sr.syncState == SyncState.dirty && op != null) {
      await _patchDirtyFast(id, changes, sr, op,
          coalesceChanges: coalesceChanges);
      return;
    }

    await _fallbackPatch(id, changes,
        sr: sr, op: op, coalesceChanges: coalesceChanges);
  }

  Future<void> _fallbackPatch(String id, Map<String, Object?> changes,
      {SyncRowState? sr, OutboxOp? op, bool coalesceChanges = false}) async {
    final existing = await _readLogical(id);
    if (existing == null) {
      throw RecordNotFoundException('No record $name/$id to patch.');
    }
    final merged = <String, Object?>{...existing, ...changes};
    await _mutate(MutationAction.update,
        record: {'id': id, ...merged},
        id: id,
        existing: existing,
        prefetchedSyncRow: sr,
        prefetchedOp: op,
        coalesceChanges: coalesceChanges);
  }

  /// Dirty-row patch fast path: reuses the outbox payload
  /// as the existing desired state, issues a targeted domain UPDATE, and lets
  /// the tested `applyLocalMutation` handle outbox/sync-row bookkeeping
  /// (earliest-base preservation, dirty-field union, op-kind transitions).
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
    // A payload that names a different record is corruption: treating it as
    // the desired state would drop the real record's fields. Fall back to the
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
    // Validators see the logical form without the synthetic `id` key (same as
    // the normal `_mutate` path); the payload is already validated by size.
    _validate(id, {...merged}..remove('id'),
        precomputedPayload: payloadJson, precomputedPayloadBytes: payloadBytes);

    final dirtyFields =
        _dirtyFields(currentPayload, merged, MutationAction.update);

    // Targeted single-field UPDATE (drift-gap P1): when exactly ONE declared
    // field changed and nothing else moved, write only that column — plus
    // `hidden=0`, which [encodeDbRow] always emits — instead of re-encoding
    // every column and the whole `extra` JSON blob. The statement shape is
    // canonicalized (single field + hidden vs full row) so the prepared
    // statement cache stays hot.
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
      _tx?.addRecordEvent(RecordChangeEvent(
        store: name,
        id: id,
        origin: ChangeOrigin.local,
        action: ChangeAction.update,
        oldRecord: currentPayload,
        newRecord: merged,
        changedFields: dirtyFields.toSet(),
      ));
    }
  }

  Future<void> _mutate(MutationAction action,
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
    // Populated when the combined probe below ran (plain put/update without
    // prefetched state): reuses its sync-row and outbox results so the later
    // per-table reads are skipped entirely.
    SyncRowState? probedSr;
    OutboxOp? probedOp;

    // Without prefetched state, fetch the domain row, sync row, and outbox op
    // in ONE three-way LEFT JOIN (putAll and the patch fallback supply
    // prefetched state and keep their existing read shapes).
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
        // Upsert: merge only the listed fields onto the existing state so
        // unspecified fields are preserved.
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

    // Single canonical serialization per put: reused by validation
    // (maxDocBytes — measured from the same buffer, no UTF-8 re-encode), the
    // outbox payload, and — on first dirt — the base snapshot hash.
    final payloadBuffer = StringBuffer();
    final payloadBytes = canonicalizePayloadInto(
        payloadBuffer, _schema, logical,
        idOverride: recordId.isNotEmpty ? recordId : null);
    final payloadJson = payloadBuffer.toString();

    _validate(recordId, logical,
        precomputedPayload: payloadJson, precomputedPayloadBytes: payloadBytes);

    // A fresh create cannot have existing sync/outbox rows (id is the PK), so
    // skip the reads on the hot create path. putAll and the combined probe
    // supply prefetched state to skip the per-record reads entirely.
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

    // Base is captured once, on the first dirt of a previously-clean row
    // ("earliest base").
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

    // Targeted single-field UPDATE on the update path (same shape as the
    // dirty-patch fast path): when exactly ONE declared field changed and
    // nothing else moved, write only that column plus `hidden=0` (which
    // [encodeDbRow] always emits) instead of re-encoding every column.
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

    await _pocket.outbox.applyLocalMutation(
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

    final ChangeAction changeAction;
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

    final Set<String> changedFieldsSet;
    if (action == MutationAction.archive || action == MutationAction.restore) {
      changedFieldsSet = {'archived'};
    } else if (existingRow == null) {
      changedFieldsSet = logical.keys.where((k) => k != 'id').toSet();
    } else {
      changedFieldsSet = dirtyFields.toSet();
    }

    if (_tx?.wantsRecordEvents ?? false) {
      _tx?.addRecordEvent(RecordChangeEvent(
        store: name,
        id: recordId,
        origin: ChangeOrigin.local,
        action: changeAction,
        oldRecord: existingRow,
        newRecord: logical,
        changedFields: changedFieldsSet,
      ));
    }

    if (!coalesceChanges) {
      _tx?.addChange(ChangeSet(name, {recordId}));
    }
    return;
  }

  Future<void> _putAll(List<Map<String, Object?>> records,
      {MutationAction action = MutationAction.createOrUpdate}) async {
    _ensureWritable();
    if (records.isEmpty) return;
    final exec = _tx!.executor;
    final tableName = _table.tableName;

    // Resolve and validate ids up front so the chunked probes only ever see
    // well-formed keys. When EVERY id is freshly generated (no explicit id
    // anywhere in the batch), the ids are unique and previously unseen by
    // construction — the time-prefixed monotonic counter plus a random suffix
    // — so the existence probe and duplicate detection are skipped entirely
    // (measured ~14% of bulk-insert time on 100K rows). A generated id can
    // only collide with a stored row if the system clock regresses across a
    // restart (then the INSERT raises the normal constraint error instead of
    // silently updating).
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

    // Duplicate ids must follow sequential put() semantics (last write wins
    // with the first write's base preserved) — fall back to the per-record
    // path when a batch repeats an id. Generated ids are unique, so this
    // check is skipped for fully-generated batches.
    var hasDuplicates = false;
    if (!allGenerated) {
      final counts = <String, int>{};
      for (final (rid, _) in resolved) {
        counts[rid] = (counts[rid] ?? 0) + 1;
      }
      hasDuplicates = counts.values.any((c) => c > 1);
    }

    // Fast attempt WITHOUT any existence probe: the common all-create batch
    // pays zero probing (measured ~14% of 100K bulk-insert time). A
    // constraint failure (an id already exists) makes the fast path delete
    // exactly the rows it inserted and throw [_BatchInsertConflict]; the
    // fallback below then probes and applies per-record updates with any
    // pre-existing rows intact.
    //
    // The fast path is only sound for full-replace `putAll`. `upsertAll`
    // records are partial (they may merge into existing rows and legitimately
    // omit required fields), so they must always go through the existence
    // probe + per-record merge path below — otherwise the bulk INSERT would
    // fail on a required field the existing row already satisfies.
    if (action == MutationAction.createOrUpdate && !hasDuplicates) {
      try {
        await _putAllBatchCreate(exec, resolved);
        _tx!.addChange(ChangeSet(name, {for (final (id, _) in resolved) id}));
        return;
      } on _BatchInsertConflict {
        // Fall through to the probe + per-record path below.
      }
    }

    // Existence probe (reached only for duplicate-id batches or after a
    // fast-attempt conflict): full rows for every id in the batch so the
    // update path can merge onto the existing state.
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

    // Chunked sync/outbox state resolution for rows that already exist
    // — skipped entirely on the pure-create fast path.
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

    // Apply in order. Duplicate ids fall back to the (correct) re-reading path
    // so sequential put() semantics are preserved; unique ids use the
    // prefetched state and emit no per-record ChangeSet.
    final writtenIds = <String>{};
    for (final (rid, record) in resolved) {
      final existing = existingById[rid];
      if (writtenIds.contains(rid)) {
        await _mutate(action,
            record: {...record, 'id': rid}, coalesceChanges: true);
      } else {
        await _mutate(action,
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
  /// On a [DirectSqliteDatabase] (no test execution hook attached) this uses
  /// multi-row VALUES chunks: N records per `INSERT` per table, so the
  /// per-record cost of statement-cache lookups, SQL-string building, and
  /// statement dispatch collapses to ~3 dispatches per 250 records. Any
  /// constraint backstop failure on a chunk falls back to per-record inserts
  /// so errors stay attributed and translated exactly as before.
  Future<void> _putAllBatchCreate(DatabaseExecutor exec,
      List<(String, Map<String, Object?>)> records) async {
    final db = _pocket.db;
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
      // A record conflicted (its id already existed). Remove exactly the
      // records this loop fully inserted (the conflicting record cleaned its
      // own partial writes) and signal the probe + per-record fallback.
      final ids = [for (var i = 0; i < inserted; i++) records[i].$1];
      await _deleteFastInserted(exec, ids);
      throw _BatchInsertConflict();
    }
    if (wantsEvents) {
      for (final (rid, logical) in logicals) {
        _tx!.addRecordEvent(RecordChangeEvent(
          store: name,
          id: rid,
          origin: ChangeOrigin.local,
          action: ChangeAction.create,
          oldRecord: null,
          newRecord: logical,
          changedFields: logical.keys.where((k) => k != 'id').toSet(),
        ));
      }
    }
  }

  Future<void> _putAllBatchCreateDirect(DatabaseExecutor exec,
      List<(String, Map<String, Object?>)> records) async {
    final schema = _schema;
    final now = _pocket.now();
    final db = _pocket.db as DirectSqliteDatabase;

    // Column order matches encodeDbRow exactly (id, declared fields in
    // schema order, extra, archived, hidden) — the shared
    // outboxColumns/syncRowColumns constants own the bookkeeping order.
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
    // The id-stripping copy (`_logicalFromRecord`) exists so custom
    // validators and record events never observe the synthetic `id` key.
    // When neither can observe anything, pass the caller's map directly.
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
        _validate(rid, logical,
            precomputedPayload: payloadJson,
            precomputedPayloadBytes: payloadBytes);
        // Map-free domain encoding: appends the row values in exactly
        // [domainCols] order (same shape encodeDbRow would produce).
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
        // Remove exactly what this attempt inserted: all prior chunks (every
        // table) plus this chunk's tables that landed before the failure. The
        // failing table's rows — the pre-existing conflict — stay intact for
        // the fallback update path.
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
        _tx!.addRecordEvent(RecordChangeEvent(
          store: name,
          id: rid,
          origin: ChangeOrigin.local,
          action: ChangeAction.create,
          oldRecord: null,
          newRecord: logical,
          changedFields: logical.keys.where((k) => k != 'id').toSet(),
        ));
      }
    }
  }

  /// Per-record create insert: builds payload, row, and bookkeeping values,
  /// then inserts domain/outbox/sync rows. On a constraint failure it removes
  /// only the rows THIS record inserted (the failing table's row — a
  /// pre-existing conflict — stays) and rethrows, so the batch caller can
  /// unwind and fall back to the probe + per-record update path.
  Future<Map<String, Object?>> _batchCreateInsertOne(DatabaseExecutor exec,
      Database db, String rid, Map<String, Object?> record, int now) async {
    final schema = _schema;
    final logical = _logicalFromRecord(record, rid);
    final payloadBuffer = StringBuffer();
    final payloadBytes = canonicalizePayloadInto(payloadBuffer, schema, logical,
        idOverride: rid);
    final payloadJson = payloadBuffer.toString();
    _validate(rid, logical,
        precomputedPayload: payloadJson, precomputedPayloadBytes: payloadBytes);
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

  /// Removes the given ids' rows from all three write-path tables — used to
  /// unwind the bulk-create fast path when a later record conflicts. Only
  /// ids the fast path itself inserted are ever passed here.
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

  /// One three-way LEFT JOIN returning the domain row, its sync row, and its
  /// outbox op — three point reads collapsed into one round trip on the
  /// put/update hot path. Every `lp_sync_row`/`lp_outbox` column is aliased
  /// so a user field named like a bookkeeping column can never collide.
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

  /// Returns a record by ID and applies any pending lazy document migrations.
  ///
  /// Returns `null` when no local record has the requested [id].
  ///
  /// For schemas above version 1, a single LEFT JOIN against `lp_sync_row`
  /// returns the domain row AND the sync-row `schema_ver` in one SQL
  /// round-trip. Version-1 schemas can never have a pending lazy migration,
  /// so the join is skipped entirely — point reads are a plain indexed
  /// `SELECT * WHERE id = ?`, the same shape as a bare SQLite read.
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
      logical = applyDocumentMigrations(_schema, logical,
          from: storedVer, to: _schema.version);
    }
    if (_tx == null) {
      _table.readCache.set(id, logical);
    }
    return logical;
  }

  // ------------------------------------------------------------- validation --

  void _validate(String id, Map<String, Object?> logical,
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
    final msgs = _schema.validator?.call(logical) ?? const <String>[];
    if (msgs.isNotEmpty) {
      throw ValidationException(msgs.join('; '));
    }
    // The UTF-8 measurement is an upper bound (each non-ASCII code unit
    // counted as 4 bytes) computed without a second serialization pass.
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
  QueryBuilder query() =>
      QueryBuilder.internal(_pocket, _table, executor: _exec);

  /// Starts a full-text search on the collection's configured FTS fields.
  ///
  /// The schema must define [FtsSpec] and the SQLite engine must provide FTS5.
  SearchBuilder search(String term) =>
      SearchBuilder.internal(_pocket, _schema, term, executor: _exec);

  /// Watches the record at [id], re-emitting only when that record changes.
  Stream<Map<String, Object?>?> watchOne(String id) =>
      OneWatcher(_pocket, _table, id).startStream();
}

/// Signals that the bulk-create fast path hit a constraint conflict (an id in
/// the batch already exists) and `putAll` should fall back to the probe +
/// per-record update path. The fast path already removed exactly the rows it
/// inserted, so pre-existing rows are intact when the fallback probes.
class _BatchInsertConflict implements Exception {}
