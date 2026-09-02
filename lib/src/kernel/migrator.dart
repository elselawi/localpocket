import 'package:meta/meta.dart';
import 'package:path/path.dart' as p;
import 'package:sqlite3/common.dart' show SqliteException;
import 'database_adapter.dart';

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
  /// Maximum number of rows processed in one migration backfill chunk.
  static const int backfillChunk = 10000;

  /// Runs all pending [StoreMigration] steps for [schema] starting after
  /// [fromVersion], then bumps `lp_stores.schema_ver`.
  static Future<void> migrateStore(
    LocalPocket pocket,
    CollectionSchema<Object?> schema, {
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
          durationMs: sw.elapsedMilliseconds,
          now: pocket.now);
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

  /// Appends a row to the migration ledger. [now] defaults to the wall
  /// clock; call sites pass the injectable clock for deterministic tests.
  static Future<void> recordMigration(
    Database db, {
    required String name,
    required int from,
    required int to,
    int durationMs = 0,
    int Function() now = _defaultNowMs,
  }) async {
    final maxRow =
        await db.rawQuery('SELECT MAX(version) AS m FROM lp_migrations');
    final next = (firstIntValue(maxRow) ?? 0) + 1;
    await db.insert('lp_migrations', {
      'version': next,
      'name': name,
      'applied_at': now(),
      'duration_ms': durationMs,
    });
  }

  static Future<void> _additiveMigration(LocalPocket pocket,
      CollectionSchema<Object?> schema, StoreMigration m) async {
    final db = pocket.db;
    final existingColumns = (await db
            .rawQuery('PRAGMA table_info(${DdlCompiler.quote(schema.name)})'))
        .map((r) => r['name'])
        .whereType<String>()
        .toSet();
    for (final f in m.addedFields) {
      Field.validateName(f.name);
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
      // Keep the in-memory set in sync so duplicate entries in addedFields do
      // not issue the same ALTER TABLE statement twice.
      existingColumns.add(f.name);
    }
    if (m.transform != null) {
      await _chunkedBackfill(pocket, schema, m);
    }
  }

  static Future<void> _chunkedBackfill(LocalPocket pocket,
      CollectionSchema<Object?> schema, StoreMigration m) async {
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

      final updates = <(int, String, Map<String, Object?>)>[];
      var lastRowid = cursor;
      for (final r in rows) {
        lastRowid = r['rowid']! as int;
        final logical = decodeDbRow(schema, r,
            cipher: pocket.fieldCipher, cryptoProvider: pocket.cryptoProvider);
        final values = m.transform!(logical);
        if (values.isNotEmpty) {
          updates.add((lastRowid, logical['id'] as String? ?? '', values));
        }
      }

      if (updates.isNotEmpty) {
        await db.transaction((txn) async {
          for (final (rowid, recordId, values) in updates) {
            final set = <String, Object?>{};
            for (final e in values.entries) {
              final field = _fieldByName(schema, e.key);
              if (field == null) {
                throw SchemaRegistrationError(
                    'Backfill on "${schema.name}" produced unknown field "${e.key}".');
              }
              // Validate the transformed value against the target field's
              // kind / required / enum rules before encoding (item 12) so a
              // transform cannot write data the normal CRUD path would reject.
              _validateTransformValue(field, e.value);
              set[e.key] = encodeFieldValue(schema, field, e.value,
                  cipher: pocket.fieldCipher,
                  cryptoProvider: pocket.cryptoProvider,
                  recordId: recordId);
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
  ///
  /// RESUMABLE: a ledger marker (`lp_meta['migration:<store>:<ver>:state']`)
  /// is written before the backup and flipped to `done` only after final
  /// verification, so the next `open()` can distinguish an interrupted run
  /// (stale `.bak` and/or half-built `__new_` table: cleared and restarted)
  /// from a COMPLETED run, whose backup is a safety net that is never
  /// overwritten. Two resume shapes:
  ///
  /// - Crash before the `DROP` (old table present): clear stale artifacts
  ///   and restart.
  /// - Crash between `DROP` and `RENAME` (`__new_` holds every row): finish
  ///   the rename in place — restarting would need the dropped source table.
  ///
  /// Raw SQLite failures surface as a typed [DestructiveMigrationRefusedError]
  /// with the marker left `rebuilding` so the next open resumes.
  static Future<void> _rebuildStore(LocalPocket pocket,
      CollectionSchema<Object?> schema, StoreMigration m) async {
    final db = pocket.db;
    if (!pocket.destructiveBackup) {
      throw DestructiveMigrationRefusedError(
          'Destructive migration for "${schema.name}" requires the backup step, '
          'which is disabled.');
    }
    final oldTable = schema.name;
    final newTable = '${schema.name}__new_${m.toVersion}';
    final markerKey = 'migration:${schema.name}:${m.toVersion}:state';
    final compiled = DdlCompiler(pocket.capabilities).compile(schema);

    // 1. backup (VACUUM INTO — pure SQL, no dart:io)
    final backupFile = backupPath(pocket.path, schema.name, m.toVersion);

    try {
      final state = await _kvGet(db, markerKey);
      final hasBackup = await pocket.backupFileExists(backupFile);
      if (state == 'done' && hasBackup) {
        // A previous run COMPLETED the rebuild; its backup is the pre-
        // migration safety net and is never overwritten: refuse loudly.
        throw DestructiveMigrationRefusedError(
            'Destructive migration for "${schema.name}" to v${m.toVersion} '
            'already completed in a previous run; refusing to overwrite its '
            'backup at $backupFile. Remove the backup to force a fresh '
            'rebuild.');
      }

      // Resume-in-place: a crash between DROP and RENAME leaves the old
      // table missing with `__new_` holding every row — finish the rename;
      // the completed backup stays as the safety net.
      final newExists = await _tableExists(db, newTable);
      final oldExists = await _tableExists(db, oldTable);
      if (newExists && !oldExists) {
        final newCount = firstIntValue(await db.rawQuery(
                'SELECT COUNT(*) c FROM ${DdlCompiler.quote(newTable)}')) ??
            0;
        await db.execute(
            'ALTER TABLE ${DdlCompiler.quote(newTable)} RENAME TO ${DdlCompiler.quote(oldTable)}');
        await _finishRebuild(pocket, db, schema, compiled, markerKey,
            oldCount: newCount);
        return;
      }

      // Anything else — an interrupted run (marker `rebuilding`) or a legacy
      // marker-less crash — left stale artifacts. Drop the half-built table
      // and remove the stale backup so VACUUM INTO can restart cleanly.
      await db.execute('DROP TABLE IF EXISTS ${DdlCompiler.quote(newTable)}');
      if (hasBackup) {
        await pocket.deleteBackupFile(backupFile);
      }
      await _kvSet(db, markerKey, 'rebuilding');

      await db.execute("VACUUM INTO '${backupFile.replaceAll("'", "''")}'");

      // 2. create the new table from the target schema
      final createNew = compiled.tableDdl.replaceFirst(
          DdlCompiler.quote(oldTable), DdlCompiler.quote(newTable));
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
            final logical = decodeDbRow(schema, r,
                cipher: pocket.fieldCipher,
                cryptoProvider: pocket.cryptoProvider);
            final newLogical = m.transform?.call(logical) ?? logical;
            // Validate transformed values against the target schema's kind /
            // required / enum rules (item 12) before encoding, mirroring the
            // normal CRUD validation.
            _validateLogical(schema, newLogical);
            final row = encodeDbRow(schema,
                id: logical['id']! as String,
                logical: newLogical,
                archived: newLogical['archived'] == true,
                cipher: pocket.fieldCipher,
                cryptoProvider: pocket.cryptoProvider);
            await txn.insert(newTable, row);
          }
        });
        cursor = rows.last['rowid']! as int;
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

      // Crash point: after the backup and the (non-destructive) __new_ copy,
      // before the destructive drop/rename — a crash here leaves a stale .bak
      // and a half-built __new_ table that the next open must clean up.
      pocket.testHooks?.migrationCrashPoint
          ?.call('rebuild:${schema.name}:${m.toVersion}');

      // 5. drop old, 6. rename
      await db.execute('DROP TABLE ${DdlCompiler.quote(oldTable)}');
      await db.execute(
          'ALTER TABLE ${DdlCompiler.quote(newTable)} RENAME TO ${DdlCompiler.quote(oldTable)}');

      await _finishRebuild(pocket, db, schema, compiled, markerKey,
          oldCount: oldCount);
    } on DestructiveMigrationRefusedError {
      rethrow;
    } on SqliteException catch (e) {
      // Raw SQLite failure (e.g. a busy concurrent writer) surfaces as a
      // typed refusal; the marker stays `rebuilding` for the next open.
      throw DestructiveMigrationRefusedError(
          'Destructive migration for "${schema.name}" failed: $e');
    }
  }

  /// Recreates indexes/FTS/triggers, verifies the rebuilt table, and flips the
  /// ledger marker to `done` — the shared tail of [._rebuildStore] used by the
  /// normal path and the resume-in-place path.
  static Future<void> _finishRebuild(
    LocalPocket pocket,
    Database db,
    CollectionSchema<Object?> schema,
    CompiledSchema compiled,
    String markerKey, {
    required int oldCount,
  }) async {
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
            'SELECT COUNT(*) c FROM ${DdlCompiler.quote(schema.name)}')) ??
        0;
    if (verifyCount != oldCount) {
      throw StateError('Post-rebuild verification of "${schema.name}" failed.');
    }

    // Only now is the rebuild durable: a future re-run treats the backup
    // as the completed safety net, not an interrupted run's artifact.
    await _kvSet(db, markerKey, 'done');
  }

  /// Whether a table named [table] exists in the schema.
  static Future<bool> _tableExists(DatabaseExecutor exec, String table) async {
    final rows = await exec.rawQuery(
        "SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = ?",
        [table]);
    return rows.isNotEmpty;
  }

  /// Computes the `VACUUM INTO` backup path for a destructive migration.
  /// A bare relative DB path puts the backup in the current directory.
  @visibleForTesting
  static String backupPath(String dbPath, String store, int toVersion) {
    final dir = p.dirname(dbPath);
    final base = p.basename(dbPath);
    final name = '$base.v$toVersion.$store.bak';
    if (dir == '.') return name;
    return p.join(dir, name);
  }

  static Field? _fieldByName(CollectionSchema<Object?> schema, String name) {
    for (final f in schema.fields) {
      if (f.name == name) return f;
    }
    return null;
  }

  /// Validates a single transformed value against [f]'s kind/required/enum
  /// rules — the same rules the normal write path enforces — so a transform
  /// cannot write data the CRUD path would reject.
  static void _validateTransformValue(Field f, Object? v) {
    if (f.required && v == null) {
      throw ValidationException('Field "${f.name}" is required.',
          field: f.name);
    }
    if (v == null) return;
    final violation = fieldKindViolation(f, v);
    if (violation != null) {
      throw ValidationException(_kindViolationMessage(f, v, violation),
          field: f.name);
    }
  }

  /// Validates every declared field of [logical] against the target schema
  /// (used by the destructive rebuild, where the transform emits a full row).
  /// Extra keys are not schema-validated, mirroring the normal write path.
  static void _validateLogical(
      CollectionSchema<Object?> schema, Map<String, Object?> logical) {
    for (final f in schema.fields) {
      _validateTransformValue(f, logical[f.name]);
    }
  }

  /// Renders a [KindViolation] naming the field, the offending runtime type,
  /// and (for enums) the rejected value, mirroring `mapping.dart`'s wire
  /// wording so the reason is recognizable in logs.
  static String _kindViolationMessage(
      Field f, Object? value, KindViolation violation) {
    final name = f.name;
    final got = value.runtimeType;
    return switch (violation) {
      KindViolation.textExpected => 'Field "$name" must be a string, got $got.',
      KindViolation.intExpected =>
        'Field "$name" must be an integer, got $got.',
      KindViolation.numberExpected =>
        'Field "$name" must be a number, got $got.',
      KindViolation.boolExpected =>
        'Field "$name" must be a boolean, got $got.',
      KindViolation.jsonExpected => 'Field "$name" must be JSON, got $got.',
      KindViolation.jsonListExpected =>
        'Field "$name" must be a JSON array, got $got.',
      KindViolation.enumValueRejected =>
        'Field "$name" has unknown enum value "$value".',
    };
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

/// Wall-clock epoch ms; the default [Migrator.recordMigration] clock so
/// standalone callers stay backward compatible.
int _defaultNowMs() => DateTime.now().millisecondsSinceEpoch;
