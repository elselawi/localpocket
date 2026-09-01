/// Sync-layer tables and their row models.
library;

import '../../core/row_models.dart';

enum SyncState { clean, dirty, inFlight, conflict, error, quarantine, blocked }

enum AccessState { visible, hidden }

enum OutboxKind { upsert, archive, restore }

enum OpQueueKind { fileUpload, fileRemove }

const List<String> syncSystemDdl = [
  '''CREATE TABLE IF NOT EXISTS lp_sync_row (
  store         TEXT NOT NULL,
  record_id     TEXT NOT NULL,
  remote_updated TEXT,
  last_seen_at  INTEGER,
  base_updated  TEXT,
  base_hash     TEXT,
  base_json     TEXT,
  sync_state    TEXT NOT NULL DEFAULT 'clean',
  dirty_fields  TEXT,
  local_rev     INTEGER NOT NULL DEFAULT 0,
  access_state  TEXT NOT NULL DEFAULT 'visible',
  op_id         TEXT,
  attempt_count INTEGER NOT NULL DEFAULT 0,
  next_retry_at INTEGER NOT NULL DEFAULT 0,
  last_error    TEXT,
  schema_ver    INTEGER NOT NULL DEFAULT 1,
  PRIMARY KEY (store, record_id)
)''',
  'CREATE INDEX IF NOT EXISTS ix_syncrow_dirty ON lp_sync_row (next_retry_at) '
      "WHERE sync_state IN ('dirty','in_flight','conflict')",
  'CREATE INDEX IF NOT EXISTS ix_syncrow_attention ON lp_sync_row (store, sync_state) '
      "WHERE sync_state IN ('conflict','error','quarantine','blocked')",
  'CREATE INDEX IF NOT EXISTS ix_syncrow_hidden ON lp_sync_row (store, record_id) '
      "WHERE access_state = 'hidden'",
  '''CREATE TABLE IF NOT EXISTS lp_outbox (
  store      TEXT NOT NULL,
  record_id  TEXT NOT NULL,
  kind       TEXT NOT NULL,
  payload_json TEXT NOT NULL,
  base_updated TEXT,
  base_hash  TEXT NOT NULL,
  dirty_fields TEXT NOT NULL DEFAULT '[]',
  op_id      TEXT NOT NULL UNIQUE,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL,
  depends_on_op TEXT,
  PRIMARY KEY (store, record_id)
)''',
  'CREATE INDEX IF NOT EXISTS ix_outbox_drain ON lp_outbox (created_at)',
  '''CREATE TABLE IF NOT EXISTS lp_op_queue (
  seq         INTEGER PRIMARY KEY AUTOINCREMENT,
  op_id       TEXT NOT NULL UNIQUE,
  store       TEXT NOT NULL,
  record_id   TEXT NOT NULL,
  kind        TEXT NOT NULL,
  payload_json TEXT NOT NULL,
  state       TEXT NOT NULL DEFAULT 'pending',
  attempt_count INTEGER NOT NULL DEFAULT 0,
  next_retry_at INTEGER NOT NULL DEFAULT 0,
  last_error  TEXT,
  depends_on_op TEXT,
  created_at  INTEGER NOT NULL
)''',
  "CREATE INDEX IF NOT EXISTS ix_opq_drain ON lp_op_queue (next_retry_at, seq) WHERE state='pending'",
  '''CREATE TABLE IF NOT EXISTS lp_conflicts (
  store TEXT NOT NULL, record_id TEXT NOT NULL,
  base_json TEXT NOT NULL, local_json TEXT NOT NULL, remote_json TEXT NOT NULL,
  dirty_local TEXT NOT NULL, dirty_remote TEXT NOT NULL,
  detected_at INTEGER NOT NULL,
  resolved_json TEXT,
  PRIMARY KEY (store, record_id)
)''',
  '''CREATE TABLE IF NOT EXISTS lp_dead_letter (
  seq INTEGER PRIMARY KEY AUTOINCREMENT,
  at INTEGER NOT NULL, kind TEXT NOT NULL,
  store TEXT, record_id TEXT,
  error TEXT NOT NULL, payload_json TEXT
)''',
  '''CREATE TABLE IF NOT EXISTS lp_sync_state (
  scope TEXT NOT NULL,
  store TEXT NOT NULL,
  cursor_updated TEXT, cursor_id TEXT,
  sweep_bucket INTEGER NOT NULL DEFAULT -1,
  sweep_at INTEGER, last_pull_at INTEGER, last_push_at INTEGER,
  PRIMARY KEY (scope, store)
)''',
  '''CREATE TABLE IF NOT EXISTS lp_blobs (
  hash TEXT PRIMARY KEY,
  size INTEGER NOT NULL,
  state TEXT NOT NULL DEFAULT 'local',
  refcount INTEGER NOT NULL DEFAULT 0,
  last_access INTEGER NOT NULL DEFAULT 0,
  created_at INTEGER NOT NULL
)''',
  '''CREATE TABLE IF NOT EXISTS lp_file_refs (
  ref_id   TEXT PRIMARY KEY,
  store    TEXT NOT NULL,
  record_id TEXT NOT NULL,
  field    TEXT NOT NULL,
  hash     TEXT NOT NULL,
  remote_name TEXT,
  state    TEXT NOT NULL DEFAULT 'pending_upload',
  next_retry_at INTEGER NOT NULL DEFAULT 0,
  attempt_count INTEGER NOT NULL DEFAULT 0,
  last_error TEXT,
  UNIQUE (store, record_id, field, hash)
)''',
  'CREATE INDEX IF NOT EXISTS ix_filerefs_work ON lp_file_refs (state, next_retry_at)',
  'CREATE INDEX IF NOT EXISTS ix_filerefs_record ON lp_file_refs (store, record_id)',
];

/// Ordered columns of `lp_outbox` — the single source of truth for the
/// prepared-statement fast path and every map-based insert/update path.
const List<String> outboxColumns = [
  'store',
  'record_id',
  'kind',
  'payload_json',
  'base_updated',
  'base_hash',
  'dirty_fields',
  'op_id',
  'created_at',
  'updated_at',
  'depends_on_op',
];

/// Ordered columns of `lp_sync_row`.
const List<String> syncRowColumns = [
  'store',
  'record_id',
  'remote_updated',
  'last_seen_at',
  'base_updated',
  'base_hash',
  'base_json',
  'sync_state',
  'dirty_fields',
  'local_rev',
  'access_state',
  'op_id',
  'attempt_count',
  'next_retry_at',
  'last_error',
  'schema_ver',
];

/// JSON encoding of the "all fields changed" `dirty_fields` marker used when
/// a row is created or wholesale replaced.
const String kAllDirtyFieldsJson = '["*"]';

/// Builds a full `lp_outbox` row for a dirty local mutation.
Map<String, Object?> buildOutboxRow({
  required String store,
  required String recordId,
  required OutboxKind kind,
  required String payloadJson,
  required String dirtyFieldsJson,
  required String opId,
  required int createdAt,
  required int updatedAt,
  String? baseUpdated,
  String baseHash = '',
  String? dependsOnOp,
}) {
  final values = outboxValuesInOrder(
    store: store,
    recordId: recordId,
    kind: kind,
    payloadJson: payloadJson,
    baseUpdated: baseUpdated,
    baseHash: baseHash,
    dirtyFieldsJson: dirtyFieldsJson,
    opId: opId,
    createdAt: createdAt,
    updatedAt: updatedAt,
    dependsOnOp: dependsOnOp,
  );
  return {
    for (var i = 0; i < outboxColumns.length; i++) outboxColumns[i]: values[i],
  };
}

/// The `lp_outbox` row values in [outboxColumns] order — the allocation-free
/// binding form for the bulk-insert fast path (no intermediate map).
List<Object?> outboxValuesInOrder({
  required String store,
  required String recordId,
  required OutboxKind kind,
  required String payloadJson,
  required String dirtyFieldsJson,
  required String opId,
  required int createdAt,
  required int updatedAt,
  String? baseUpdated,
  String baseHash = '',
  String? dependsOnOp,
}) {
  final values = <Object?>[];
  appendOutboxValues(values,
      store: store,
      recordId: recordId,
      kind: kind,
      payloadJson: payloadJson,
      baseUpdated: baseUpdated,
      baseHash: baseHash,
      dirtyFieldsJson: dirtyFieldsJson,
      opId: opId,
      createdAt: createdAt,
      updatedAt: updatedAt,
      dependsOnOp: dependsOnOp);
  return values;
}

/// Appends the `lp_outbox` row values in [outboxColumns] order onto
/// [target] — lets a bulk INSERT bind many rows into one flat list without
/// per-record intermediate lists.
void appendOutboxValues(
  List<Object?> target, {
  required String store,
  required String recordId,
  required OutboxKind kind,
  required String payloadJson,
  required String dirtyFieldsJson,
  required String opId,
  required int createdAt,
  required int updatedAt,
  String? baseUpdated,
  String baseHash = '',
  String? dependsOnOp,
}) {
  target
    ..add(store)
    ..add(recordId)
    ..add(kind.name)
    ..add(payloadJson)
    ..add(baseUpdated)
    ..add(baseHash)
    ..add(dirtyFieldsJson)
    ..add(opId)
    ..add(createdAt)
    ..add(updatedAt)
    ..add(dependsOnOp);
}

/// Builds a full `lp_sync_row` row for a dirty local mutation.
Map<String, Object?> buildSyncRow({
  required String store,
  required String recordId,
  required SyncState syncState,
  required String dirtyFieldsJson,
  required int localRev,
  required int schemaVer,
  String? remoteUpdated,
  int? lastSeenAt,
  String? baseUpdated,
  String baseHash = '',
  String? baseJson,
  AccessState accessState = AccessState.visible,
  String? opId,
  int attemptCount = 0,
  int nextRetryAt = 0,
  String? lastError,
}) {
  final values = syncRowValuesInOrder(
    store: store,
    recordId: recordId,
    remoteUpdated: remoteUpdated,
    lastSeenAt: lastSeenAt,
    baseUpdated: baseUpdated,
    baseHash: baseHash,
    baseJson: baseJson,
    syncState: syncState,
    dirtyFieldsJson: dirtyFieldsJson,
    localRev: localRev,
    accessState: accessState,
    opId: opId,
    attemptCount: attemptCount,
    nextRetryAt: nextRetryAt,
    lastError: lastError,
    schemaVer: schemaVer,
  );
  return {
    for (var i = 0; i < syncRowColumns.length; i++)
      syncRowColumns[i]: values[i],
  };
}

/// The `lp_sync_row` row values in [syncRowColumns] order — the
/// allocation-free binding form for the bulk-insert fast path.
List<Object?> syncRowValuesInOrder({
  required String store,
  required String recordId,
  required SyncState syncState,
  required String dirtyFieldsJson,
  required int localRev,
  required int schemaVer,
  String? remoteUpdated,
  int? lastSeenAt,
  String? baseUpdated,
  String baseHash = '',
  String? baseJson,
  AccessState accessState = AccessState.visible,
  String? opId,
  int attemptCount = 0,
  int nextRetryAt = 0,
  String? lastError,
}) {
  final values = <Object?>[];
  appendSyncRowValues(values,
      store: store,
      recordId: recordId,
      remoteUpdated: remoteUpdated,
      lastSeenAt: lastSeenAt,
      baseUpdated: baseUpdated,
      baseHash: baseHash,
      baseJson: baseJson,
      syncState: syncState,
      dirtyFieldsJson: dirtyFieldsJson,
      localRev: localRev,
      accessState: accessState,
      opId: opId,
      attemptCount: attemptCount,
      nextRetryAt: nextRetryAt,
      lastError: lastError,
      schemaVer: schemaVer);
  return values;
}

/// Appends the `lp_sync_row` row values in [syncRowColumns] order onto
/// [target] — lets a bulk INSERT bind many rows into one flat list without
/// per-record intermediate lists.
void appendSyncRowValues(
  List<Object?> target, {
  required String store,
  required String recordId,
  required SyncState syncState,
  required String dirtyFieldsJson,
  required int localRev,
  required int schemaVer,
  String? remoteUpdated,
  int? lastSeenAt,
  String? baseUpdated,
  String baseHash = '',
  String? baseJson,
  AccessState accessState = AccessState.visible,
  String? opId,
  int attemptCount = 0,
  int nextRetryAt = 0,
  String? lastError,
}) {
  target
    ..add(store)
    ..add(recordId)
    ..add(remoteUpdated)
    ..add(lastSeenAt)
    ..add(baseUpdated)
    ..add(baseHash)
    ..add(baseJson)
    ..add(syncState.name)
    ..add(dirtyFieldsJson)
    ..add(localRev)
    ..add(accessState.name)
    ..add(opId)
    ..add(attemptCount)
    ..add(nextRetryAt)
    ..add(lastError)
    ..add(schemaVer);
}

/// Values of [row] in [columns] order — used to bind a map-shaped row to the
/// prepared-statement fast path so the column list lives in exactly one place.
List<Object?> rowValuesInOrder(
        Map<String, Object?> row, List<String> columns) =>
    [for (final c in columns) row[c]];

/// `"c1", "c2", …` for an INSERT column list.
String quotedColumnList(List<String> columns) =>
    columns.map((c) => '"$c"').join(', ');

/// `?, ?, …` placeholders for [count] columns.
String placeholders(int count) => List.filled(count, '?').join(', ');

class SyncRowState {
  const SyncRowState({
    required this.store,
    required this.recordId,
    this.remoteUpdated,
    this.lastSeenAt,
    this.baseUpdated,
    this.baseHash,
    this.baseJson,
    this.syncState = SyncState.clean,
    this.dirtyFields = const [],
    this.localRev = 0,
    this.accessState = AccessState.visible,
    this.opId,
    this.attemptCount = 0,
    this.nextRetryAt = 0,
    this.lastError,
    this.schemaVer = 1,
  });

  factory SyncRowState.fromRow(Map<String, Object?> row) => parseRowModel(
      'lp_sync_row',
      () => SyncRowState(
            store: row['store']! as String,
            recordId: row['record_id']! as String,
            remoteUpdated: row['remote_updated'] as String?,
            lastSeenAt: row['last_seen_at'] as int?,
            baseUpdated: row['base_updated'] as String?,
            baseHash: row['base_hash'] as String?,
            baseJson: row['base_json'] as String?,
            syncState: SyncState.values.byName(row['sync_state']! as String),
            dirtyFields: decodeJsonStringList(row['dirty_fields']),
            localRev: (row['local_rev'] as int?) ?? 0,
            accessState:
                AccessState.values.byName(row['access_state']! as String),
            opId: row['op_id'] as String?,
            attemptCount: (row['attempt_count'] as int?) ?? 0,
            nextRetryAt: (row['next_retry_at'] as int?) ?? 0,
            lastError: row['last_error'] as String?,
            schemaVer: (row['schema_ver'] as int?) ?? 1,
          ));
  final String store;
  final String recordId;
  final String? remoteUpdated;
  final int? lastSeenAt;
  final String? baseUpdated;
  final String? baseHash;
  final String? baseJson;
  final SyncState syncState;
  final List<String> dirtyFields;
  final int localRev;
  final AccessState accessState;
  final String? opId;
  final int attemptCount;
  final int nextRetryAt;
  final String? lastError;
  final int schemaVer;
}

class OutboxOp {
  const OutboxOp({
    required this.store,
    required this.recordId,
    required this.kind,
    required this.payloadJson,
    required this.baseHash,
    required this.opId,
    required this.createdAt,
    required this.updatedAt,
    this.baseUpdated,
    this.dirtyFields = const [],
    this.dependsOnOp,
  });

  factory OutboxOp.fromRow(Map<String, Object?> row) => parseRowModel(
      'lp_outbox',
      () => OutboxOp(
            store: row['store']! as String,
            recordId: row['record_id']! as String,
            kind: OutboxKind.values.byName(row['kind']! as String),
            payloadJson: row['payload_json']! as String,
            baseUpdated: row['base_updated'] as String?,
            baseHash: (row['base_hash'] as String?) ?? '',
            dirtyFields: decodeJsonStringList(row['dirty_fields']),
            opId: row['op_id']! as String,
            createdAt: row['created_at']! as int,
            updatedAt: row['updated_at']! as int,
            dependsOnOp: row['depends_on_op'] as String?,
          ));
  final String store;
  final String recordId;
  final OutboxKind kind;
  final String payloadJson;
  final String? baseUpdated;
  final String baseHash;
  final List<String> dirtyFields;
  final String opId;
  final int createdAt;
  final int updatedAt;
  final String? dependsOnOp;
}

class OpQueueRow {
  const OpQueueRow({
    required this.seq,
    required this.opId,
    required this.store,
    required this.recordId,
    required this.kind,
    required this.payloadJson,
    required this.state,
    required this.createdAt,
    this.attemptCount = 0,
    this.nextRetryAt = 0,
    this.lastError,
    this.dependsOnOp,
  });

  factory OpQueueRow.fromRow(Map<String, Object?> row) => parseRowModel(
      'lp_op_queue',
      () => OpQueueRow(
            seq: row['seq']! as int,
            opId: row['op_id']! as String,
            store: row['store']! as String,
            recordId: row['record_id']! as String,
            kind: OpQueueKind.values.byName(row['kind']! as String),
            payloadJson: row['payload_json']! as String,
            state: row['state']! as String,
            attemptCount: (row['attempt_count'] as int?) ?? 0,
            nextRetryAt: (row['next_retry_at'] as int?) ?? 0,
            lastError: row['last_error'] as String?,
            dependsOnOp: row['depends_on_op'] as String?,
            createdAt: row['created_at']! as int,
          ));
  final int seq;
  final String opId;
  final String store;
  final String recordId;
  final OpQueueKind kind;
  final String payloadJson;
  final String state;
  final int attemptCount;
  final int nextRetryAt;
  final String? lastError;
  final String? dependsOnOp;
  final int createdAt;
}

/// Resolves dependency `op_id`s that are still pending/failed in `lp_outbox` or `lp_op_queue`.
// ignore_for_file: avoid_dynamic_calls, avoid_annotating_with_dynamic
Future<Set<String>> queryBlockedDependencyOpIds(
  dynamic db,
  Iterable<String> dependencyIds,
) async {
  final blocked = <String>{};
  final ids = dependencyIds.toList();
  if (ids.isEmpty) return blocked;

  final placeholders = List.filled(ids.length, '?').join(', ');
  final outboxSql =
      'SELECT op_id FROM lp_outbox WHERE op_id IN ($placeholders)';
  final outboxRows =
      await db.rawQuery(outboxSql, ids) as List<Map<String, Object?>>;
  blocked.addAll(outboxRows.map((row) => row['op_id']! as String));

  final queueSql =
      'SELECT op_id FROM lp_op_queue WHERE op_id IN ($placeholders) AND state IN (?, ?)';
  final queueRows = await db.rawQuery(queueSql, [...ids, 'pending', 'failed'])
      as List<Map<String, Object?>>;
  blocked.addAll(queueRows.map((row) => row['op_id']! as String));
  return blocked;
}

/// Upserts a blob entry in `lp_blobs`, setting or incrementing refcount and updating last_access.
Future<void> upsertBlobReference(
  dynamic exec, {
  required String hash,
  required int size,
  required int now,
}) async {
  final existing = await exec.query(
    'lp_blobs',
    columns: ['hash'],
    where: 'hash = ?',
    whereArgs: [hash],
    limit: 1,
  ) as List<Map<String, Object?>>;
  if (existing.isEmpty) {
    await exec.insert('lp_blobs', {
      'hash': hash,
      'size': size,
      'state': 'local',
      'refcount': 1,
      'last_access': now,
      'created_at': now,
    });
  } else {
    await exec.execute(
      'UPDATE lp_blobs SET refcount = refcount + 1, last_access = ? WHERE hash = ?',
      [now, hash],
    );
  }
}

/// Decrements refcount for a blob in `lp_blobs` without letting it drop below 0.
Future<void> decrementBlobReference(
  dynamic exec,
  String hash,
) async {
  if (hash.isEmpty) return;
  await exec.execute(
    'UPDATE lp_blobs SET refcount = MAX(refcount - 1, 0) WHERE hash = ?',
    [hash],
  );
}

/// Cleans up file refs, blob refcounts, conflicts, op queue entries, outbox,
/// and sync row metadata for a vanished/purged record.
Future<void> vanishRecordMetadata(
  dynamic exec,
  String store,
  String recordId, {
  bool deleteSyncAndOutbox = false,
}) async {
  final refs = await exec.query('lp_file_refs',
      columns: ['ref_id', 'hash'],
      where: 'store = ? AND record_id = ?',
      whereArgs: [store, recordId]) as List<Map<String, Object?>>;
  for (final r in refs) {
    await exec
        .delete('lp_file_refs', where: 'ref_id = ?', whereArgs: [r['ref_id']]);
    final hash = r['hash'] as String?;
    if (hash != null && hash.isNotEmpty) {
      await decrementBlobReference(exec, hash);
    }
  }

  await exec.delete('lp_conflicts',
      where: 'store = ? AND record_id = ?', whereArgs: [store, recordId]);
  await exec.update('lp_op_queue', {'state': 'done'},
      where: "store = ? AND record_id = ? AND state IN ('pending','failed')",
      whereArgs: [store, recordId]);

  if (deleteSyncAndOutbox) {
    await exec.delete('lp_outbox',
        where: 'store = ? AND record_id = ?', whereArgs: [store, recordId]);
    await exec.delete('lp_sync_row',
        where: 'store = ? AND record_id = ?', whereArgs: [store, recordId]);
  }
}
