import 'package:path/path.dart' as p;
import 'database_adapter.dart';

import 'canonical_json.dart';
import 'codec.dart';
import 'ddl_compiler.dart';
import 'errors.dart';
import 'local_pocket.dart';
import 'schema.dart';
import 'sql_utils.dart';

/// Schema migration engine.
///
/// - Forward-only, ledgered (`lp_migrations`).
/// - Additive: `ADD COLUMN` + chunked, resumable backfill (10k rows/txn).
/// - Destructive: 12-step table rebuild with a `VACUUM INTO` backup step.
/// - Downgrade guard lives in `LocalPocket._registerStore`.
class Migrator {
  static const int backfillChunk = 10000;

  /// Runs all pending [StoreMigration] steps for [schema] starting after
  /// [fromVersion], then bumps `lp_stores.schema_ver`.
  static Future<void> migrateStore(
    LocalPocket pocket,
    CollectionSchema schema, {
    required int fromVersion,
  }) async {
    final db = pocket.db;
    final migrations = schema.migrations
        .where(
            (m) => m.toVersion > fromVersion && m.toVersion <= schema.version)
        .toList()
      ..sort((a, b) => a.toVersion.compareTo(b.toVersion));

    var ver = fromVersion;
    for (final m in migrations) {
      if (m.toVersion != ver + 1) {
        throw SchemaRegistrationError(
            'Migration gap for "${schema.name}": expected v${ver + 1}, found v${m.toVersion}.');
      }
      final sw = Stopwatch()..start();
      if (m.destructive) {
        await _rebuildStore(pocket, schema, m);
      } else {
        await _additiveMigration(pocket, schema, m);
      }
      sw.stop();
      await recordMigration(db,
          name: 'migrate:${schema.name}:v${m.toVersion}',
          from: ver,
          to: m.toVersion,
          durationMs: sw.elapsedMilliseconds);
      ver = m.toVersion;
    }

    if (fromVersion < schema.version && ver != schema.version) {
      throw SchemaRegistrationError(
        'Missing migration steps for "${schema.name}": migrated to v$ver but expected v${schema.version}.',
      );
    }

    await db.update('lp_stores', {'schema_ver': schema.version},
        where: 'store = ?', whereArgs: [schema.name]);
  }

  /// Appends a row to the migration ledger.
  static Future<void> recordMigration(
    Database db, {
    required String name,
    required int from,
    required int to,
    int durationMs = 0,
  }) async {
    final maxRow =
        await db.rawQuery('SELECT MAX(version) AS m FROM lp_migrations');
    final next = (firstIntValue(maxRow) ?? 0) + 1;
    await db.insert('lp_migrations', {
      'version': next,
      'name': name,
      'applied_at': DateTime.now().millisecondsSinceEpoch,
      'duration_ms': durationMs,
    });
  }

  static Future<void> _additiveMigration(
      LocalPocket pocket, CollectionSchema schema, StoreMigration m) async {
    final db = pocket.db;
    final existingColumns = (await db
            .rawQuery('PRAGMA table_info(${DdlCompiler.quote(schema.name)})'))
        .map((r) => r['name'])
        .toSet();
    for (final f in m.addedFields) {
      if (f.required) {
        throw SchemaRegistrationError(
            'Additive migration on "${schema.name}" cannot add a required column '
            '"${f.name}" (existing rows would violate NOT NULL).');
      }
      if (existingColumns.contains(f.name)) {
        // Resumability: a crash after the ALTER but before lp_stores bump
        // re-runs this migration; the column already exists.
        continue;
      }
      await db
          .execute('ALTER TABLE ${DdlCompiler.quote(schema.name)} ADD COLUMN '
              '${DdlCompiler.quote(f.name)} ${f.sqlType}');
    }
    if (m.transform != null) {
      await _chunkedBackfill(pocket, schema, m);
    }
  }

  static Future<void> _chunkedBackfill(
      LocalPocket pocket, CollectionSchema schema, StoreMigration m) async {
    final db = pocket.db;
    final key = 'migration:${schema.name}:${m.toVersion}:cursor';
    final cursorStr = await _kvGet(db, key);
    var cursor = int.tryParse(cursorStr ?? '') ?? 0;

    while (true) {
      final rows = await db.rawQuery(
          'SELECT rowid, * FROM ${DdlCompiler.quote(schema.name)} '
          'WHERE rowid > ? ORDER BY rowid LIMIT ?',
          [cursor, backfillChunk]);
      if (rows.isEmpty) break;

      final updates = <(int, Map<String, Object?>)>[];
      var lastRowid = cursor;
      for (final r in rows) {
        lastRowid = r['rowid'] as int;
        final logical = decodeDbRow(schema, r);
        final values = m.transform!(logical);
        if (values.isNotEmpty) updates.add((lastRowid, values));
      }

      if (updates.isNotEmpty) {
        await db.transaction((txn) async {
          for (final (rowid, values) in updates) {
            final set = <String, Object?>{};
            for (final e in values.entries) {
              final field = _fieldByName(schema, e.key);
              if (field == null) {
                throw SchemaRegistrationError(
                    'Backfill on "${schema.name}" produced unknown field "${e.key}".');
              }
              set[e.key] = _encodeForField(field, e.value);
            }
            await txn.update(schema.name, set,
                where: 'rowid = ?', whereArgs: [rowid]);
          }
          await _kvSet(txn, key, lastRowid.toString());
        });
      } else {
        await _kvSet(db, key, lastRowid.toString());
      }

      pocket.testHooks?.migrationCrashPoint
          ?.call('backfill:${schema.name}:${m.toVersion}');
      if (rows.length < backfillChunk) break;
      cursor = lastRowid;
    }
  }

  /// 12-step destructive rebuild:
  /// backup → create new → copy (chunked, transformed) → verify counts →
  /// drop old → rename → recreate indexes/FTS → verify.
  static Future<void> _rebuildStore(
      LocalPocket pocket, CollectionSchema schema, StoreMigration m) async {
    final db = pocket.db;
    if (!pocket.destructiveBackup) {
      throw DestructiveMigrationRefusedError(
          'Destructive migration for "${schema.name}" requires the backup step, '
          'which is disabled.');
    }
    final oldTable = schema.name;
    final newTable = '${schema.name}__new_${m.toVersion}';

    // 1. backup (VACUUM INTO — pure SQL, no dart:io)
    final backupFile = _backupPath(pocket.path, schema.name, m.toVersion);
    try {
      await db.execute("VACUUM INTO '${backupFile.replaceAll("'", "''")}'");
    } catch (e) {
      throw DestructiveMigrationRefusedError(
          'Backup failed for destructive migration of "${schema.name}": $e');
    }

    // 2. create the new table from the target schema
    final compiled = DdlCompiler(pocket.capabilities).compile(schema);
    final createNew = compiled.tableDdl
        .replaceFirst(DdlCompiler.quote(oldTable), DdlCompiler.quote(newTable));
    await db.execute(createNew);

    // 3. copy rows (chunked) through the transform
    var cursor = 0;
    while (true) {
      final rows = await db.rawQuery(
          'SELECT rowid, * FROM ${DdlCompiler.quote(oldTable)} '
          'WHERE rowid > ? ORDER BY rowid LIMIT ?',
          [cursor, backfillChunk]);
      if (rows.isEmpty) break;
      await db.transaction((txn) async {
        for (final r in rows) {
          final logical = decodeDbRow(schema, r);
          final newLogical = m.transform?.call(logical) ?? logical;
          final row = encodeDbRow(schema,
              id: logical['id'] as String,
              logical: newLogical,
              archived: newLogical['archived'] == true);
          await txn.insert(newTable, row);
        }
      });
      cursor = rows.last['rowid'] as int;
      if (rows.length < backfillChunk) break;
    }

    // 4. verify counts
    final oldCount = firstIntValue(await db.rawQuery(
            'SELECT COUNT(*) c FROM ${DdlCompiler.quote(oldTable)}')) ??
        0;
    final newCount = firstIntValue(await db.rawQuery(
            'SELECT COUNT(*) c FROM ${DdlCompiler.quote(newTable)}')) ??
        0;
    if (oldCount != newCount) {
      throw StateError(
          'Rebuild of "${schema.name}" count mismatch: $oldCount vs $newCount.');
    }

    // 5. drop old, 6. rename
    await db.execute('DROP TABLE ${DdlCompiler.quote(oldTable)}');
    await db.execute(
        'ALTER TABLE ${DdlCompiler.quote(newTable)} RENAME TO ${DdlCompiler.quote(oldTable)}');

    // 7. recreate indexes + FTS + triggers
    for (final ix in compiled.indexDdl) {
      await db.execute(ix);
    }
    if (schema.fts != null) {
      await db.execute(
          'DROP TABLE IF EXISTS ${DdlCompiler.quote('${schema.name}_fts')}');
    }
    for (final f in compiled.ftsDdl) {
      await db.execute(f);
    }
    if (schema.fts != null) {
      await db.execute(
          "INSERT INTO ${DdlCompiler.quote('${schema.name}_fts')}(${DdlCompiler.quote('${schema.name}_fts')}) VALUES('rebuild')");
    }

    // 8. verify
    final verifyCount = firstIntValue(await db.rawQuery(
            'SELECT COUNT(*) c FROM ${DdlCompiler.quote(oldTable)}')) ??
        0;
    if (verifyCount != oldCount) {
      throw StateError('Post-rebuild verification of "${schema.name}" failed.');
    }
  }

  static String _backupPath(String dbPath, String store, int toVersion) {
    final dir = p.dirname(dbPath);
    final base = p.basename(dbPath);
    final name = '$base.v$toVersion.$store.bak';
    if (dir == '.') return name;
    return p.join(dir, name);
  }

  static Field? _fieldByName(CollectionSchema schema, String name) {
    for (final f in schema.fields) {
      if (f.name == name) return f;
    }
    return null;
  }

  static Object? _encodeForField(Field f, Object? v) {
    if (v == null) return null;
    if (f.kind == FieldKind.bool) return v == true ? 1 : 0;
    if (f.kind == FieldKind.json || f.kind == FieldKind.jsonList) {
      return canonicalize(v);
    }
    return v;
  }

  static Future<String?> _kvGet(DatabaseExecutor exec, String key) async {
    final rows = await exec.query('lp_meta',
        columns: ['v'], where: 'k = ?', whereArgs: [key]);
    return rows.isEmpty ? null : rows.first['v'] as String?;
  }

  static Future<void> _kvSet(
      DatabaseExecutor exec, String key, String value) async {
    await exec.insert('lp_meta', {'k': key, 'v': value},
        conflictAlgorithm: ConflictAlgorithm.replace);
  }
}
