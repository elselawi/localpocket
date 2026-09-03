/// The kernel schema owner: store registration (DDL, migration dispatch,
/// manifest persistence and same-version fingerprint enforcement), FTS
/// rebuild-on-configuration-change, and the destructive-migration backup
/// file hooks. Receives the shared [KernelContext] explicitly.
library;

import 'dart:convert';

import 'package:collection/collection.dart' show ListEquality;

import 'capabilities.dart' show PlatformProfile;
import 'database_adapter.dart' show DirectSqliteDatabase;
import 'ddl_compiler.dart';
import 'errors.dart'
    show
        LocalPocketError,
        SchemaRegistrationError,
        SchemaTooNewError,
        StorageError,
        UnsupportedSchemaFeatureError;
import 'fts_normalizer.dart';
import 'kernel_context.dart';
import 'local_pocket.dart' show StoreTable;
import 'migrator.dart';
import 'schema.dart';
import 'schema_manifest.dart';

/// {@template localpocket.schema_service}
/// The kernel schema owner. The per-store registry map itself stays on the
/// hub (bindings resolve through it); this service owns everything that
/// happens to a schema between submission and a registered [StoreTable].
/// {@endtemplate}
class SchemaService {
  /// Internal: constructed by [KernelDatabase].
  ///
  /// {@macro localpocket.schema_service}
  SchemaService(this.context);

  /// The shared kernel dependencies.
  final KernelContext context;

  /// Registers [schema], creating or migrating its SQLite table.
  ///
  /// Before any DDL the schema is compiled into a [SchemaManifest] and
  /// validated: duplicate store names are rejected; the worker runtime
  /// rejects executable features that cannot cross the worker boundary; and
  /// a behavior change at the SAME version (fingerprint mismatch) is
  /// rejected — bump the version and provide a migration.
  Future<void> registerStore(CollectionSchema<Object?> schema) async {
    final database = context.database;
    // Store identity must be unambiguous.
    if (database.tablesForKernel.containsKey(schema.name)) {
      throw SchemaRegistrationError(
          'Duplicate store name "${schema.name}" in this open call.');
    }
    // Reject unrepresentable behavior before anything touches disk.
    final manifest = SchemaManifest.compile(schema);
    if (context.capabilities.platform == PlatformProfile.web &&
        manifest.unsupportedFeatures.isNotEmpty) {
      throw UnsupportedSchemaFeatureError(
          'Store "${schema.name}" declares executable features that cannot '
          'run on the worker runtime: ${manifest.unsupportedFeatures.join(', ')}.');
    }
    await _assertSameVersionManifestUnchanged(schema, manifest);

    final compiled = DdlCompiler(context.capabilities).compile(schema);
    // The write-side normalizer must exist before ANY trigger can fire
    // (fresh create below, or the FTS-rebuild / destructive paths).
    if (schema.fts != null) {
      registerFtsNormalizer(context.db, schema.name, schema.fts!.normalize);
    }
    final existing = await context.db.query('lp_stores',
        where: 'store = ?', whereArgs: [schema.name], limit: 1);
    if (existing.isEmpty) {
      await context.db.execute(compiled.tableDdl);
      for (final ix in compiled.indexDdl) {
        await context.db.execute(ix);
      }
      for (final f in compiled.ftsDdl) {
        await context.db.execute(f);
      }
      await context.db.insert('lp_stores', {
        'store': schema.name,
        'table_name': schema.name,
        'schema_ver': schema.version,
        'definition_json': jsonEncode(schema.toJson()),
        'created_at': context.now(),
      });
      await Migrator.recordMigration(context.db,
          name: 'create:${schema.name}',
          from: 0,
          to: schema.version,
          now: context.now);
    } else {
      final current = existing.first['schema_ver']! as int;
      if (current > schema.version) {
        throw SchemaTooNewError(
            'Store "${schema.name}" on disk is schema v$current, but this package supports v${schema.version}.');
      }
      if (current < schema.version) {
        await Migrator.migrateStore(context.database, schema,
            fromVersion: current);
      }
      await _rebuildFtsIfConfigChanged(schema);
      await context.db.update(
          'lp_stores',
          {
            'definition_json': jsonEncode(schema.toJson()),
            'schema_ver': schema.version
          },
          where: 'store = ?',
          whereArgs: [schema.name]);
    }
    database.tablesForKernel[schema.name] =
        StoreTable(schema, compiled, manifest: manifest);
    // Persist the manifest so the NEXT open can compare behavior, not just
    // version numbers.
    await _persistSchemaManifest(schema.name, manifest);
  }

  /// The persisted manifest key for [store].
  static String _manifestMetaKey(String store) => 'schema_manifest:$store';

  /// Rejects a behavior-affecting manifest change at the SAME schema version.
  /// Legacy databases without a persisted manifest adopt the current one.
  Future<void> _assertSameVersionManifestUnchanged(
      CollectionSchema<Object?> schema, SchemaManifest manifest) async {
    final rows = await context.db.query('lp_meta',
        where: 'k = ?', whereArgs: [_manifestMetaKey(schema.name)], limit: 1);
    if (rows.isEmpty) return; // adoption: first open of a manifest-era store
    SchemaManifest? persisted;
    try {
      final raw = rows.first['v'];
      persisted =
          SchemaManifest.fromJson(raw is String ? jsonDecode(raw) : raw);
    } on LocalPocketError {
      // Unreadable/corrupt persisted manifest: treat as adoption so the
      // store can recover; the corrupt value is overwritten below.
      return;
    }
    if (persisted.version != schema.version) return; // version change: legal
    if (persisted.fingerprint != manifest.fingerprint) {
      throw SchemaRegistrationError(
          'Store "${schema.name}" changed behavior at the SAME schema '
          'version ${schema.version}. Bump the store version and provide a '
          'migration description.');
    }
  }

  /// Persists the manifest (and its fingerprint) for the NEXT open.
  Future<void> _persistSchemaManifest(
      String store, SchemaManifest manifest) async {
    final key = _manifestMetaKey(store);
    final json = manifest.encodedJson;
    final existing = await context.db
        .query('lp_meta', where: 'k = ?', whereArgs: [key], limit: 1);
    if (existing.isEmpty) {
      await context.db.insert('lp_meta', {'k': key, 'v': json});
    } else {
      await context.db
          .update('lp_meta', {'v': json}, where: 'k = ?', whereArgs: [key]);
    }
  }

  /// Whether the destructive-migration backup file at [path] exists, via the
  /// platform file hooks. Returns false when none is wired.
  Future<bool> backupFileExists(String path) async {
    final d = context.db;
    if (d is DirectSqliteDatabase && d.backupFileExists != null) {
      return await d.backupFileExists!(path);
    }
    return false;
  }

  /// Recreates the FTS index when the persisted configuration differs from
  /// the registered schema (tokenizer, fields, or normalization rules); a
  /// ledger row records the rebuild.
  Future<void> _rebuildFtsIfConfigChanged(
      CollectionSchema<Object?> schema) async {
    final stored = await context.db.query('lp_stores',
        columns: ['definition_json'],
        where: 'store = ?',
        whereArgs: [schema.name],
        limit: 1);
    if (stored.isEmpty) return;
    CollectionSchema<Object?>? old;
    try {
      final raw = stored.first['definition_json'];
      final decoded = raw is String ? jsonDecode(raw) as Object? : raw;
      old = CollectionSchema<Object?>.fromJson(
          Map<String, Object?>.from(decoded! as Map));
    } on StorageError {
      // Unreadable definition: leave the existing index alone; a later
      // destructive migration is the recovery path.
      return;
    }
    final before = old.fts;
    final after = schema.fts;
    final same = identical(before, after) ||
        (before == null && after == null) ||
        (before != null &&
            after != null &&
            const ListEquality<String>().equals(before.fields, after.fields) &&
            before.fuzzy == after.fuzzy &&
            before.normalize == after.normalize);
    if (same) return;

    final sw = Stopwatch()..start();
    // Drop old triggers first: they are recreated by compiled.ftsDdl below
    // and CREATE TRIGGER fails if an old one is still present.
    // Drop old triggers first: they are recreated by compiled.ftsDdl below
    // and CREATE TRIGGER fails if an old one is still present.
    for (final suffix in ['_ai', '_ad', '_au']) {
      await context.db.execute(
          'DROP TRIGGER IF EXISTS ${DdlCompiler.quote(schema.name + suffix)}');
    }
    if (before != null) {
      await context.db.execute(
          'DROP TABLE IF EXISTS ${DdlCompiler.quote('${schema.name}_fts')}');
    }
    if (after != null) {
      for (final f
          in DdlCompiler(context.capabilities).compile(schema).ftsDdl) {
        await context.db.execute(f);
      }
      // The fts5 'rebuild' command re-tokenizes RAW text and bypasses the
      // trigger normalizers; repopulate through the same trigger expressions
      // so reindexed terms match query-side normalization.
      await context.db.execute(
          'INSERT INTO ${DdlCompiler.quote('${schema.name}_fts')}'
          "(${DdlCompiler.quote('${schema.name}_fts')}) VALUES('delete-all')");
      final fts = schema.fts!;
      final colList = fts.fields.map(DdlCompiler.quote).join(', ');
      final selectList = fts.fields
          .map((c) => ftsTriggerExpr(schema.name, fts.normalize, '', c))
          .join(', ');
      await context.db
          .execute('INSERT INTO ${DdlCompiler.quote('${schema.name}_fts')}'
              '(rowid, $colList) SELECT rowid, $selectList FROM '
              '${DdlCompiler.quote(schema.name)}');
    }
    sw.stop();
    await Migrator.recordMigration(context.db,
        name: 'fts:${schema.name}',
        from: schema.version,
        to: schema.version,
        durationMs: sw.elapsedMilliseconds,
        now: context.now);
  }

  /// Removes the destructive-migration backup file at [path] via the
  /// platform file hooks. No-op when none is wired.
  Future<void> deleteBackupFile(String path) async {
    final d = context.db;
    if (d is DirectSqliteDatabase && d.backupFileDeleter != null) {
      await d.backupFileDeleter!(path);
    }
  }
}
