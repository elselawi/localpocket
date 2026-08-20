import 'dart:convert';

import 'package:collection/collection.dart';
import 'package:localpocket/src/core/query/query_builder/query_builder.dart';
import 'package:localpocket/src/core/query/search_builder/search_builder.dart';
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

/// What kind of local mutation is being applied.
enum MutationAction { createOrUpdate, create, update, archive, restore }

/// The result of a paginated query.
///
/// Use [nextCursor] with [QueryBuilder.keysetAfter] to fetch the next page.
/// When [hasMore] is false, [nextCursor] is normally `null`.
class Page {
  /// Records in this page, in the requested order.
  final List<Map<String, Object?>> items;

  /// Cursor for the next keyset page, or `null` when this is the last page.
  final String? nextCursor;

  /// Whether another page is available.
  final bool hasMore;

  /// Creates a query page.
  const Page({required this.items, this.nextCursor, required this.hasMore});
}

/// Typed CRUD access to one store.
///
/// Records are plain `Map<String, Object?>`: declared fields map to typed
/// columns, undeclared keys round-trip losslessly through `extra`, and
/// `archived` is a boolean. Mutations are atomic with their outbox intent
/// (the local-first invariant).
class Collection with ChangeBusAwareStore {
  final LocalPocket _pocket;
  final StoreTable _table;
  final DatabaseExecutor? _exec;
  final Tx? _tx;

  /// Internal constructor used by [LocalPocket.collection] and [Tx.collection].
  Collection.internal(this._pocket, this._table,
      {DatabaseExecutor? exec, Tx? tx})
      : _exec = exec,
        _tx = tx;

  DatabaseExecutor get _ex => _exec ?? _pocket.db;
  CollectionSchema get _schema => _table.schema;

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
      {DurabilityClass durability = DurabilityClass.full}) {
    if (_tx != null) {
      return _mutate(MutationAction.createOrUpdate, record: record);
    }
    return _pocket.transaction((tx) => tx.collection(name).put(record),
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
      {DurabilityClass durability = DurabilityClass.full}) {
    if (_tx != null) return _putAll(records);
    return _pocket.transaction((tx) => tx.collection(name).putAll(records),
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
      {DurabilityClass durability = DurabilityClass.full}) {
    if (_tx != null) return _patch(id, changes);
    return _pocket.transaction((tx) => tx.collection(name).patch(id, changes),
        durability: durability);
  }

  /// Soft-deletes a record by setting `archived` to `true`.
  ///
  /// Archived records are excluded from default queries but remain available
  /// with `query().includeArchived()`.
  Future<void> archive(String id,
      {DurabilityClass durability = DurabilityClass.full}) {
    if (_tx != null) return _mutate(MutationAction.archive, id: id);
    return _pocket.transaction((tx) => tx.collection(name).archive(id),
        durability: durability);
  }

  /// Removes the archive flag from the record with [id].
  Future<void> restore(String id,
      {DurabilityClass durability = DurabilityClass.full}) {
    if (_tx != null) return _mutate(MutationAction.restore, id: id);
    return _pocket.transaction((tx) => tx.collection(name).restore(id),
        durability: durability);
  }

  /// Permanently removes a local record and its file references.
  ///
  /// Unlike [archive], this is a hard local deletion. Use it only when the
  /// application intentionally wants to remove local state.
  Future<void> purge(String id,
      {DurabilityClass durability = DurabilityClass.full}) {
    if (_tx != null) return _purge(id);
    return _pocket.transaction((tx) => tx.collection(name).purge(id),
        durability: durability);
  }

  Future<void> _purge(String id) async {
    _ensureWritable();
    final existing = await _readLogical(id);
    final exec = _tx!.executor;
    await vanishRecordMetadata(exec, name, id, deleteSyncAndOutbox: true);
    // Delete domain row
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

  Future<void> _patch(String id, Map<String, Object?> changes) async {
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
      await _patchDirtyFast(id, changes, sr, op);
      return;
    }

    await _fallbackPatch(id, changes, sr: sr, op: op);
  }

  Future<void> _fallbackPatch(String id, Map<String, Object?> changes,
      {SyncRowState? sr, OutboxOp? op}) async {
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
        prefetchedOp: op);
  }

  /// Dirty-row patch fast path: reuses the outbox payload
  /// as the existing desired state, issues a targeted domain UPDATE, and lets
  /// the tested `applyLocalMutation` handle outbox/sync-row bookkeeping
  /// (earliest-base preservation, dirty-field union, op-kind transitions).
  Future<void> _patchDirtyFast(String id, Map<String, Object?> changes,
      SyncRowState sr, OutboxOp op) async {
    final hooks = _pocket.testHooks;
    Object? currentPayload;
    try {
      currentPayload = jsonDecode(op.payloadJson);
    } catch (_) {
      currentPayload = null;
    }
    if (currentPayload is! Map<String, Object?>) {
      // Defensive: corrupt payload — fall back to the full read path.
      return _fallbackPatch(id, changes, sr: sr, op: op);
    }
    // A payload that names a different record is corruption: treating it as
    // the desired state would drop the real record's fields. Fall back to the
    // authoritative domain row.
    final payloadId = currentPayload['id'];
    if (payloadId != null && payloadId != id) {
      return _fallbackPatch(id, changes, sr: sr, op: op);
    }

    final merged = <String, Object?>{...currentPayload, ...changes};
    merged['id'] = id;
    final payloadJson = canonicalPayload(_schema, merged);
    // Validators see the logical form without the synthetic `id` key (same as
    // the normal `_mutate` path); the payload is already validated by size.
    _validate(id, {...merged}..remove('id'), precomputedPayload: payloadJson);

    final row = encodeDbRow(
      _schema,
      id: id,
      logical: merged,
      archived: merged['archived'] == true,
      cipher: _pocket.fieldCipher,
      cryptoProvider: _pocket.cryptoProvider,
    );
    try {
      await _ex.update(_table.tableName, row, where: 'id = ?', whereArgs: [id]);
    } catch (e) {
      throw translateConstraintError(e, record: merged);
    }
    hooks?.mutationCrashPoint?.call('after-domain-write');

    final dirtyFields =
        _dirtyFields(currentPayload, merged, MutationAction.update);
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

    _tx?.addChange(ChangeSet(name, {id}));
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

    if (action == MutationAction.createOrUpdate) {
      final rid = (record!['id'] as String?) ?? generateRecordId();
      if (!isValidRecordId(rid)) {
        throw ValidationException(
            'Invalid record id "$rid"; expected [a-z0-9]{15}.',
            field: 'id');
      }
      recordId = rid;
      existingRow = existingRow ?? await _readLogical(recordId);
      logical = _logicalFromRecord(record, recordId);
      action =
          existingRow == null ? MutationAction.create : MutationAction.update;
    } else if (action == MutationAction.update) {
      recordId = id!;
      existingRow = existingRow ?? await _readLogical(recordId);
      if (existingRow == null) {
        throw RecordNotFoundException('No record $name/$recordId to update.');
      }
      logical = _logicalFromRecord(record!, recordId);
    } else {
      // archive / restore
      recordId = id!;
      existingRow = existingRow ?? await _readLogical(recordId);
      if (existingRow == null) {
        throw RecordNotFoundException(
            'No record $name/$recordId to archive/restore.');
      }
      logical = {...existingRow, 'archived': action == MutationAction.archive};
    }

    // Single canonical serialization per put: reused by validation (maxDocBytes),
    // the outbox payload, and — on first dirt — the base snapshot hash
    // (one serialization pass).
    final payloadJson = canonicalPayload(
        _schema, {...logical, if (recordId.isNotEmpty) 'id': recordId});

    _validate(recordId, logical, precomputedPayload: payloadJson);

    // A fresh create cannot have existing sync/outbox rows (id is the PK), so
    // skip the reads on the hot create path. putAll supplies prefetched state
    // to skip the per-record reads entirely.
    final sr = existingRow == null
        ? null
        : (prefetchedSyncRow ??
            await _pocket.outbox.readSyncRow(_ex, name, recordId));
    final outboxOp = existingRow == null
        ? null
        : (prefetchedOp ?? await _pocket.outbox.readOp(_ex, name, recordId));

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
      final payload = canonicalPayload(_schema, existingRow);
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

    try {
      if (existingRow == null) {
        await _ex.insert(_table.tableName, row);
      } else {
        await _ex.update(_table.tableName, row,
            where: 'id = ?', whereArgs: [recordId]);
      }
    } catch (e) {
      throw translateConstraintError(e, record: logical);
    }
    hooks?.mutationCrashPoint?.call('after-domain-write');

    final dirtyFields = _dirtyFields(existingRow, logical, action);
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

    _tx?.addRecordEvent(RecordChangeEvent(
      store: name,
      id: recordId,
      origin: ChangeOrigin.local,
      action: changeAction,
      oldRecord: existingRow,
      newRecord: logical,
      changedFields: changedFieldsSet,
    ));

    if (!coalesceChanges) {
      _tx?.addChange(ChangeSet(name, {recordId}));
    }
    return;
  }

  Future<void> _putAll(List<Map<String, Object?>> records) async {
    _ensureWritable();
    if (records.isEmpty) return;
    final exec = _tx!.executor;
    final tableName = _table.tableName;

    // Resolve and validate ids up front so the chunked probes only ever see
    // well-formed keys.
    final resolved = <(String, Map<String, Object?>)>[];
    for (final record in records) {
      final rid = (record['id'] as String?) ?? generateRecordId();
      if (!isValidRecordId(rid)) {
        throw ValidationException(
            'Invalid record id "$rid"; expected [a-z0-9]{15}.',
            field: 'id');
      }
      resolved.add((rid, record));
    }

    // Duplicate ids must follow sequential put() semantics (last write wins
    // with the first write's base preserved) — fall back to the per-record
    // path when a batch repeats an id.
    final counts = <String, int>{};
    for (final (rid, _) in resolved) {
      counts[rid] = (counts[rid] ?? 0) + 1;
    }
    final hasDuplicates = counts.values.any((c) => c > 1);

    // Chunked existence probe: full rows for every id in the batch
    // (SELECT * WHERE id IN (...)). Absence => fresh create.
    const probePage = 500;
    final existingById = <String, Map<String, Object?>>{};
    for (var start = 0; start < resolved.length; start += probePage) {
      final end = (start + probePage).clamp(0, resolved.length);
      final ids = [for (final (id, _) in resolved.sublist(start, end)) id];
      final ph = List.filled(ids.length, '?').join(', ');
      final rows =
          await exec.query(tableName, where: 'id IN ($ph)', whereArgs: ids);
      for (final r in rows) {
        final id = r['id'] as String;
        existingById[id] = decodeDbRow(_schema, r,
            cipher: _pocket.fieldCipher,
            cryptoProvider: _pocket.cryptoProvider);
      }
    }

    final hasUpdates = resolved.any((e) => existingById.containsKey(e.$1));

    // Pure-create batches (no duplicate ids, no existing rows) take the Batch
    // fast path (collapse the ~3 per-record FFI dispatches
    // into one `Batch.commit` per ~1,000 records).
    if (!hasDuplicates && !hasUpdates) {
      await _putAllBatchCreate(exec, resolved);
      _tx!.addChange(ChangeSet(name, {for (final (id, _) in resolved) id}));
      return;
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
        srById[r['record_id'] as String] = SyncRowState.fromRow(r);
      }
      final opRows = await exec.query('lp_outbox',
          where: 'store = ? AND record_id IN ($ph)', whereArgs: args);
      for (final r in opRows) {
        opById[r['record_id'] as String] = OutboxOp.fromRow(r);
      }
    }

    // Apply in order. Duplicate ids fall back to the (correct) re-reading path
    // so sequential put() semantics are preserved; unique ids use the
    // prefetched state and emit no per-record ChangeSet.
    final writtenIds = <String>{};
    for (final (rid, record) in resolved) {
      final existing = existingById[rid];
      if (writtenIds.contains(rid)) {
        await _mutate(MutationAction.createOrUpdate,
            record: {...record, 'id': rid}, coalesceChanges: true);
      } else {
        await _mutate(MutationAction.createOrUpdate,
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
  Future<void> _putAllBatchCreate(DatabaseExecutor exec,
      List<(String, Map<String, Object?>)> records) async {
    final schema = _schema;
    final now = _pocket.now();
    final db = _pocket.db;

    // If using DirectSqliteDatabase, we can bind directly to prepared statements
    // with fixed column lists for max insertion throughput. Column names/order
    // come from the shared `outboxColumns`/`syncRowColumns` constants so the
    // prepared-statement and map-based paths can never drift.
    final insertOutboxSql = 'INSERT INTO lp_outbox '
        '(${quotedColumnList(outboxColumns)}) '
        'VALUES (${placeholders(outboxColumns.length)})';
    final insertSyncRowSql = 'INSERT INTO lp_sync_row '
        '(${quotedColumnList(syncRowColumns)}) '
        'VALUES (${placeholders(syncRowColumns.length)})';

    for (final (rid, record) in records) {
      final logical = _logicalFromRecord(record, rid);
      final payloadJson = canonicalPayload(schema, {...logical, 'id': rid});
      _validate(rid, logical, precomputedPayload: payloadJson);
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
      try {
        if (db is DirectSqliteDatabase &&
            _pocket.testHooks?.onExecute == null) {
          final cols = row.keys.map((k) => '"$k"').join(', ');
          final ph = List.filled(row.length, '?').join(', ');
          final domainSql =
              'INSERT INTO "${_table.tableName}" ($cols) VALUES ($ph)';
          db.getPreparedStatement(domainSql).execute(row.values.toList());
          db
              .getPreparedStatement(insertOutboxSql)
              .execute(rowValuesInOrder(outboxRow, outboxColumns));
          db
              .getPreparedStatement(insertSyncRowSql)
              .execute(rowValuesInOrder(syncRow, syncRowColumns));
        } else {
          await exec.insert(_table.tableName, row);
          await exec.insert('lp_outbox', outboxRow);
          await exec.insert('lp_sync_row', syncRow);
        }
        _tx?.addRecordEvent(RecordChangeEvent(
          store: name,
          id: rid,
          origin: ChangeOrigin.local,
          action: ChangeAction.create,
          oldRecord: null,
          newRecord: logical,
          changedFields: logical.keys.where((k) => k != 'id').toSet(),
        ));
      } catch (e) {
        throw translateConstraintError(e);
      }
    }
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

  /// Returns a record by ID and applies any pending lazy document migrations.
  ///
  /// Returns `null` when no local record has the requested [id].
  ///
  /// A single LEFT JOIN against `lp_sync_row` returns the domain row AND the
  /// sync-row `schema_ver` in one SQL round-trip (point-read profile: `get()`
  /// was two round-trips; the join halves that cost).
  Future<Map<String, Object?>?> get(String id) async {
    // Outside an explicit Tx, point reads can check the LRU read cache.
    if (_tx == null && _table.readCache.containsKey(id)) {
      return _table.readCache.get(id);
    }

    final rows = await _ex.rawQuery(
        'SELECT w.*, s.schema_ver AS lp_schema_ver '
        'FROM ${_table.tableName} w '
        'LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id '
        'WHERE w.id = ? LIMIT 1',
        [name, id]);
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
      {String? precomputedPayload}) {
    for (final f in _schema.fields) {
      final v = logical[f.name];
      if (f.required && v == null) {
        throw ValidationException('Field "${f.name}" is required.',
            field: f.name);
      }
      if (v == null) continue;
      switch (f.kind) {
        case FieldKind.text:
        case FieldKind.enumValue:
        case FieldKind.ref:
          if (v is! String) {
            throw ValidationException('Field "${f.name}" must be a string.',
                field: f.name);
          }
          if (f.kind == FieldKind.enumValue && !f.enumValues!.contains(v)) {
            throw ValidationException(
                'Field "${f.name}" must be one of ${f.enumValues!.join(', ')}.',
                field: f.name);
          }
        case FieldKind.int:
        case FieldKind.date:
          if (v is! int) {
            throw ValidationException('Field "${f.name}" must be an integer.',
                field: f.name);
          }
        case FieldKind.real:
          if (v is! num) {
            throw ValidationException('Field "${f.name}" must be a number.',
                field: f.name);
          }
        case FieldKind.bool:
          if (v is! bool) {
            throw ValidationException('Field "${f.name}" must be a boolean.',
                field: f.name);
          }
        case FieldKind.json:
          if (v is! Map && v is! List) {
            throw ValidationException(
                'Field "${f.name}" must be a JSON object or array.',
                field: f.name);
          }
        case FieldKind.jsonList:
          if (v is! List) {
            throw ValidationException('Field "${f.name}" must be a JSON array.',
                field: f.name);
          }
      }
    }
    final msgs = _schema.validator?.call(logical) ?? const <String>[];
    if (msgs.isNotEmpty) {
      throw ValidationException(msgs.join('; '));
    }
    final bytes = utf8
        .encode(precomputedPayload ?? canonicalPayload(_schema, logical))
        .length;
    if (bytes > _pocket.maxDocBytes) {
      throw ValidationException(
          'Document exceeds max size ($bytes > ${_pocket.maxDocBytes} bytes).',
          field: null);
    }
  }

  // ------------------------------------------------------------- queries ----

  /// Starts a fluent query against this collection.
  ///
  /// Example: `tasks.query().where('done', eq: false).limit(20).fetch()`.
  QueryBuilder query() => QueryBuilder.internal(_pocket, _table);

  /// Starts a full-text search on the collection's configured FTS fields.
  ///
  /// The schema must define [FtsSpec] and the SQLite engine must provide FTS5.
  SearchBuilder search(String term) =>
      SearchBuilder.internal(_pocket, _schema, term);

  /// Watches the record at [id], re-emitting only when that record changes.
  Stream<Map<String, Object?>?> watchOne(String id) =>
      OneWatcher(_pocket, _table, id).startStream();
}
