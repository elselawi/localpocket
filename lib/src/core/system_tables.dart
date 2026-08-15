/// Core-owned system tables.
const List<String> coreSystemDdl = [
  '''CREATE TABLE IF NOT EXISTS lp_meta (
  k TEXT PRIMARY KEY, v TEXT NOT NULL
)''',
  '''CREATE TABLE IF NOT EXISTS lp_migrations (
  version INTEGER PRIMARY KEY, name TEXT NOT NULL,
  applied_at INTEGER NOT NULL, duration_ms INTEGER NOT NULL
)''',
  '''CREATE TABLE IF NOT EXISTS lp_stores (
  store TEXT PRIMARY KEY,
  table_name TEXT NOT NULL,
  schema_ver INTEGER NOT NULL,
  definition_json TEXT NOT NULL,
  created_at INTEGER NOT NULL
)''',
];
