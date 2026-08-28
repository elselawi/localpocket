import 'package:collection/collection.dart';

import 'capabilities.dart';
import 'errors.dart';
import 'fts_normalizer.dart';
import 'schema.dart';

/// {@template localpocket.compiled_schema}
/// The compiled artifact of a [CollectionSchema]: DDL statements plus warnings.
/// {@endtemplate}
class CompiledSchema {
  /// {@macro localpocket.compiled_schema}
  const CompiledSchema({
    required this.schema,
    required this.tableDdl,
    required this.indexDdl,
    required this.ftsDdl,
    required this.warnings,
  });

  /// The schema from which this artifact was compiled.
  final CollectionSchema<Object?> schema;

  /// DDL for creating the collection table.
  final String tableDdl;

  /// DDL for creating ordinary and unique indexes.
  final List<String> indexDdl;

  /// DDL for creating the optional FTS table and triggers.
  final List<String> ftsDdl;

  /// Non-fatal schema quality warnings.
  final List<String> warnings;
}

/// {@template localpocket.ddl_compiler}
/// Compiles a [CollectionSchema] into per-store DDL.
/// {@endtemplate}
class DdlCompiler {
  /// Creates a compiler for [capabilities].
  ///
  /// {@macro localpocket.ddl_compiler}
  DdlCompiler(this.capabilities);

  /// SQLite capabilities used to select compatible DDL features.
  final SqliteCapabilities capabilities;

  /// Columns managed internally by LocalPocket.
  static const Set<String> reservedColumns = {
    'id',
    'archived',
    'hidden',
    'extra'
  };

  /// Quotes a SQLite identifier.
  static String quote(String id) => '"${id.replaceAll('"', '""')}"';

  static bool _isPrefix(List<String> shortCols, List<String> longCols) {
    if (shortCols.length >= longCols.length) return false;
    for (var i = 0; i < shortCols.length; i++) {
      if (shortCols[i] != longCols[i]) return false;
    }
    return true;
  }

  /// Validates and compiles the schema, throwing [SchemaRegistrationError] on
  /// any invalid declaration.
  CompiledSchema compile(CollectionSchema<Object?> schema) {
    final warnings = <String>[];
    final names = <String>{};

    for (final f in schema.fields) {
      Field.validateName(f.name);
      if (reservedColumns.contains(f.name)) {
        throw SchemaRegistrationError(
            'Field "${f.name}" is a reserved column name (id/archived/hidden/extra).');
      }
      if (!names.add(f.name)) {
        throw SchemaRegistrationError('Duplicate field "${f.name}".');
      }
      if (f.encrypted) {
        if (f.uniqueWhenActive) {
          throw SchemaRegistrationError(
              'Encrypted field "${f.name}" cannot be unique.');
        }
        if (schema.indexes.any((ix) => ix.columns.contains(f.name))) {
          throw SchemaRegistrationError(
              'Encrypted field "${f.name}" cannot be indexed.');
        }
        if (schema.fts != null && schema.fts!.fields.contains(f.name)) {
          throw SchemaRegistrationError(
              'Encrypted field "${f.name}" cannot be included in FTS.');
        }
      }
    }

    // Validate explicit index columns before generating DDL. The four
    // reserved columns are real physical columns and remain valid for raw
    // engine schemas; every other explicit column must be a declared field.
    for (final ix in schema.indexes) {
      for (final column in ix.columns) {
        if (!names.contains(column) && !reservedColumns.contains(column)) {
          throw SchemaRegistrationError(
              'Index column "$column" is not a declared field of store "${schema.name}".');
        }
      }
    }

    // Duplicate / prefix-subsumed index warnings.
    for (var i = 0; i < schema.indexes.length; i++) {
      for (var j = 0; j < schema.indexes.length; j++) {
        if (i == j) continue;
        if (const ListEquality<String>()
            .equals(schema.indexes[i].columns, schema.indexes[j].columns)) {
          if (i < j) {
            warnings.add(
                'Duplicate index columns ${schema.indexes[i].columns} (declarations ${i + 1} and ${j + 1}).');
          }
        } else if (_isPrefix(
                schema.indexes[j].columns, schema.indexes[i].columns) &&
            !schema.indexes[j].unique) {
          warnings.add(
              'Index ${schema.indexes[j].columns} is prefix-subsumed by index ${schema.indexes[i].columns}.');
        }
      }
    }

    final fts = schema.fts;
    if (fts != null) {
      if (!capabilities.hasFts5) {
        throw FtsUnavailableError(
            'FTS5 is not available on this SQLite engine.');
      }
      if (fts.fuzzy &&
          !SqliteCapabilities.versionAtLeast(
              capabilities.sqliteVersion, 3, 34)) {
        throw FtsUnavailableError(
            'Fuzzy (trigram) search requires SQLite >= 3.34.0 '
            '(found ${capabilities.sqliteVersion}).');
      }
      for (final c in fts.fields) {
        if (!names.contains(c)) {
          throw SchemaRegistrationError(
              'FTS field "$c" is not a declared field.');
        }
      }
      // Re-validate persisted rules defensively (fromJson already validates;
      // this covers const-constructed specs). Keys are character data passed
      // as bound arguments to the normalizer UDF — they are NOT SQL
      // identifiers, so any single character is legal.
      for (final e in fts.normalize.rules.entries) {
        FtsNormalization.validateRule(e.key, e.value);
      }
    }
    for (final f in schema.fields) {
      if (f.kind == FieldKind.enumValue &&
          (f.enumValues == null || f.enumValues!.isEmpty)) {
        throw SchemaRegistrationError(
            'Enum field "${f.name}" must declare values.');
      }
      if (f.kind == FieldKind.ref && (f.refTo == null || f.refTo!.isEmpty)) {
        throw SchemaRegistrationError(
            'Ref field "${f.name}" must declare its target store.');
      }
    }

    return CompiledSchema(
      schema: schema,
      tableDdl: _buildTable(schema),
      indexDdl: _buildIndexes(schema),
      ftsDdl: _buildFts(schema),
      warnings: warnings,
    );
  }

  String _buildTable(CollectionSchema<Object?> schema) {
    final cols = <String>['  id TEXT PRIMARY KEY'];
    for (final f in schema.fields) {
      var col = '  ${quote(f.name)} ${f.sqlType}';
      if (f.required) col += ' NOT NULL';
      if (f.kind == FieldKind.enumValue && capabilities.hasStrict) {
        final vals =
            f.enumValues!.map((v) => "'${v.replaceAll("'", "''")}'").join(', ');
        col += ' CHECK (${quote(f.name)} IN ($vals))';
      }
      if (f.kind == FieldKind.ref && f.enforceFk) {
        col += ' REFERENCES ${quote(f.refTo!)}(${quote('id')})';
      }
      cols.add(col);
    }
    cols.add('  archived INTEGER NOT NULL DEFAULT 0');
    cols.add('  hidden INTEGER NOT NULL DEFAULT 0');
    cols.add('  extra TEXT');
    final buf = StringBuffer('CREATE TABLE ${quote(schema.name)} (\n');
    buf.write(cols.join(',\n'));
    buf.write(capabilities.hasStrict ? '\n) STRICT;' : '\n);');
    return buf.toString();
  }

  List<String> _buildIndexes(CollectionSchema<Object?> schema) {
    final out = <String>[];
    for (final ix in schema.indexes) {
      final cols = _indexColumns(ix.columns);
      final scope = ix.scope == IndexScope.live
          ? 'archived = 0 AND hidden = 0'
          : 'archived = 0';
      if (ix.unique) {
        final name = 'ux_${schema.name}_${ix.columns.join('_')}';
        out.add('CREATE UNIQUE INDEX ${quote(name)} ON ${quote(schema.name)} '
            '(${cols.join(', ')}) WHERE $scope;');
      } else {
        final name = 'ix_${schema.name}_live_${ix.columns.join('_')}';
        out.add('CREATE INDEX ${quote(name)} ON ${quote(schema.name)} '
            '(${cols.join(', ')}) WHERE $scope;');
      }
    }
    // Ref fields are indexed TEXT columns; auto-index any ref
    // field not already covered by a declared index.
    for (final f in schema.fields) {
      if (f.kind != FieldKind.ref) continue;
      final covered = schema.indexes.any((ix) => ix.columns.contains(f.name));
      if (covered) continue;
      final name = 'ix_${schema.name}_live_${f.name}';
      out.add('CREATE INDEX ${quote(name)} ON ${quote(schema.name)} '
          '(${quote(f.name)}, ${quote('id')}) WHERE archived = 0 AND hidden = 0;');
    }
    for (final f in schema.fields) {
      if (f.uniqueWhenActive) {
        final name = 'ux_${schema.name}_${f.name}';
        out.add('CREATE UNIQUE INDEX ${quote(name)} ON ${quote(schema.name)} '
            '(${quote(f.name)}) WHERE ${quote(f.name)} IS NOT NULL AND archived = 0;');
      }
    }
    return out;
  }

  static List<String> _indexColumns(List<String> cols) {
    final result = cols.map(quote).toList();
    if (!cols.contains('id')) result.add(quote('id'));
    return result;
  }

  List<String> _buildFts(CollectionSchema<Object?> schema) {
    final fts = schema.fts;
    if (fts == null) return const [];
    final out = <String>[];
    final store = schema.name;
    final table = '${store}_fts';
    final cols = fts.fields.map(quote).toList();
    // Normalization wraps each column reference in the per-store UDF so the
    // indexed text is computed from normalized characters. With identity
    // rules the expressions collapse to plain column references.
    final norm = fts.normalize;
    String expr(String side, String c) => ftsTriggerExpr(store, norm, side, c);
    final newRefs = fts.fields.map((c) => expr('new', c)).join(', ');
    final oldRefs = fts.fields.map((c) => expr('old', c)).join(', ');
    final tail = fts.fuzzy ? ",\n  tokenize = 'trigram'\n);" : ');';
    out.add('CREATE VIRTUAL TABLE ${quote(table)} USING fts5(\n'
        '  ${cols.join(', ')},\n'
        "  content = '$store',\n"
        "  content_rowid = 'rowid'\n"
        '$tail');

    out.add(
        'CREATE TRIGGER ${quote('${store}_ai')} AFTER INSERT ON ${quote(store)} BEGIN\n'
        '  INSERT INTO ${quote(table)}(rowid, ${cols.join(', ')}) '
        'VALUES (new.rowid, $newRefs);\n'
        'END;');

    out.add(
        'CREATE TRIGGER ${quote('${store}_ad')} AFTER DELETE ON ${quote(store)} BEGIN\n'
        '  INSERT INTO ${quote(table)}(${quote(table)}, rowid, ${cols.join(', ')}) '
        'VALUES (\'delete\', old.rowid, $oldRefs);\n'
        'END;');

    final changed = cols.map((c) => 'new.$c IS NOT old.$c').join(' OR ');
    out.add(
        'CREATE TRIGGER ${quote('${store}_au')} AFTER UPDATE ON ${quote(store)} '
        'WHEN $changed BEGIN\n'
        "  INSERT INTO ${quote(table)}(${quote(table)}, rowid, ${cols.join(', ')}) "
        "VALUES ('delete', old.rowid, $oldRefs);\n"
        '  INSERT INTO ${quote(table)}(rowid, ${cols.join(', ')}) '
        'VALUES (new.rowid, $newRefs);\n'
        'END;');

    return out;
  }
}
