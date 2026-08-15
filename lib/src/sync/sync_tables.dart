/// Sync-layer tables and their row models.
library;

import 'dart:convert';

enum SyncState { clean, dirty, inFlight, conflict, error, quarantine }

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
      "WHERE sync_state IN ('conflict','error','quarantine')",
  "CREATE INDEX IF NOT EXISTS ix_syncrow_hidden ON lp_sync_row (store, record_id) "
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

class SyncRowState {
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

  factory SyncRowState.fromRow(Map<String, Object?> row) => SyncRowState(
        store: row['store'] as String,
        recordId: row['record_id'] as String,
        remoteUpdated: row['remote_updated'] as String?,
        lastSeenAt: row['last_seen_at'] as int?,
        baseUpdated: row['base_updated'] as String?,
        baseHash: row['base_hash'] as String?,
        baseJson: row['base_json'] as String?,
        syncState: SyncState.values.byName(row['sync_state'] as String),
        dirtyFields: _decodeStringList(row['dirty_fields']),
        localRev: (row['local_rev'] as int?) ?? 0,
        accessState: AccessState.values.byName(row['access_state'] as String),
        opId: row['op_id'] as String?,
        attemptCount: (row['attempt_count'] as int?) ?? 0,
        nextRetryAt: (row['next_retry_at'] as int?) ?? 0,
        lastError: row['last_error'] as String?,
        schemaVer: (row['schema_ver'] as int?) ?? 1,
      );
}

class OutboxOp {
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

  const OutboxOp({
    required this.store,
    required this.recordId,
    required this.kind,
    required this.payloadJson,
    this.baseUpdated,
    required this.baseHash,
    this.dirtyFields = const [],
    required this.opId,
    required this.createdAt,
    required this.updatedAt,
    this.dependsOnOp,
  });

  factory OutboxOp.fromRow(Map<String, Object?> row) => OutboxOp(
        store: row['store'] as String,
        recordId: row['record_id'] as String,
        kind: OutboxKind.values.byName(row['kind'] as String),
        payloadJson: row['payload_json'] as String,
        baseUpdated: row['base_updated'] as String?,
        baseHash: (row['base_hash'] as String?) ?? '',
        dirtyFields: _decodeStringList(row['dirty_fields']),
        opId: row['op_id'] as String,
        createdAt: row['created_at'] as int,
        updatedAt: row['updated_at'] as int,
        dependsOnOp: row['depends_on_op'] as String?,
      );
}

class OpQueueRow {
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

  const OpQueueRow({
    required this.seq,
    required this.opId,
    required this.store,
    required this.recordId,
    required this.kind,
    required this.payloadJson,
    required this.state,
    this.attemptCount = 0,
    this.nextRetryAt = 0,
    this.lastError,
    this.dependsOnOp,
    required this.createdAt,
  });

  factory OpQueueRow.fromRow(Map<String, Object?> row) => OpQueueRow(
        seq: row['seq'] as int,
        opId: row['op_id'] as String,
        store: row['store'] as String,
        recordId: row['record_id'] as String,
        kind: OpQueueKind.values.byName(row['kind'] as String),
        payloadJson: row['payload_json'] as String,
        state: row['state'] as String,
        attemptCount: (row['attempt_count'] as int?) ?? 0,
        nextRetryAt: (row['next_retry_at'] as int?) ?? 0,
        lastError: row['last_error'] as String?,
        dependsOnOp: row['depends_on_op'] as String?,
        createdAt: row['created_at'] as int,
      );
}

List<String> _decodeStringList(Object? v) {
  if (v == null) return const [];
  final s = v as String;
  if (s.isEmpty) return const [];
  final decoded = jsonDecode(s);
  if (decoded is List) return decoded.cast<String>();
  return const [];
}
