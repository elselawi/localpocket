/// Schema declaration model.
library;

import 'errors.dart';

/// Reconstructs a schema model from JSON, converting any malformed value
/// (wrong type, unknown enum string, missing required key, …) into a typed
/// [StorageError] instead of leaking a raw `TypeError`/`ArgumentError`/
/// `FormatException`. Schema definitions are persisted in
/// `lp_stores.definition_json` and cross the web worker boundary, so a value
/// that fails to parse indicates corruption or a version mismatch — matching
/// the corrupt-row contract of the `lp_*` row models.
T _parseSchemaJson<T>(T Function() build) {
  try {
    return build();
  } on StorageError {
    rethrow;
  } catch (e) {
    throw StorageError('Malformed schema JSON: $e');
  }
}

/// Supported logical field types.
enum FieldKind { text, int, real, bool, date, enumValue, json, jsonList, ref }

/// Declares one typed field in a [CollectionSchema].
class Field {
  /// Column name exposed to queries and records.
  final String name;

  /// Logical type of the field.
  final FieldKind kind;

  /// Whether writes must provide a non-null value.
  final bool required;

  /// Whether non-archived records must have unique values.
  final bool uniqueWhenActive;

  /// Whether the value is encrypted at rest.
  final bool encrypted;

  /// Allowed values for an enum field.
  final List<String>? enumValues;

  /// Referenced collection name for a reference field.
  final String? refTo;

  /// Whether SQLite should enforce the reference as a foreign key.
  final bool enforceFk;

  const Field._({
    required this.name,
    required this.kind,
    this.required = false,
    this.uniqueWhenActive = false,
    this.encrypted = false,
    this.enumValues,
    this.refTo,
    this.enforceFk = false,
  });

  /// Declares a text field.
  factory Field.text(String name,
          {bool required = false,
          bool uniqueWhenActive = false,
          bool encrypted = false}) =>
      Field._(
          name: name,
          kind: FieldKind.text,
          required: required,
          uniqueWhenActive: uniqueWhenActive,
          encrypted: encrypted);

  /// Declares an integer field.
  factory Field.int(String name,
          {bool required = false, bool encrypted = false}) =>
      Field._(
          name: name,
          kind: FieldKind.int,
          required: required,
          encrypted: encrypted);

  /// Declares a real-number field.
  factory Field.real(String name,
          {bool required = false, bool encrypted = false}) =>
      Field._(
          name: name,
          kind: FieldKind.real,
          required: required,
          encrypted: encrypted);

  /// Declares a boolean field stored as SQLite `0` or `1`.
  factory Field.bool(String name, {bool required = false}) =>
      Field._(name: name, kind: FieldKind.bool, required: required);

  /// Declares a date/time field stored as epoch milliseconds.
  factory Field.date(String name, {bool required = false}) =>
      Field._(name: name, kind: FieldKind.date, required: required);

  /// Declares a string field restricted to [values].
  factory Field.enumValue(String name, List<String> values,
          {bool required = false}) =>
      Field._(
          name: name,
          kind: FieldKind.enumValue,
          required: required,
          enumValues: List.unmodifiable(values));

  /// Declares a JSON object or array field.
  factory Field.json(String name, {bool encrypted = false}) =>
      Field._(name: name, kind: FieldKind.json, encrypted: encrypted);

  /// Declares a JSON array field.
  factory Field.jsonList(String name, {bool encrypted = false}) =>
      Field._(name: name, kind: FieldKind.jsonList, encrypted: encrypted);

  /// Declares a reference to collection [to].
  factory Field.ref(String name,
          {required String to, bool enforceFk = false}) =>
      Field._(name: name, kind: FieldKind.ref, refTo: to, enforceFk: enforceFk);

  /// SQLite affinity for this field.
  ///
  /// Encrypted fields always store base64 ciphertext as TEXT: a STRICT
  /// `INTEGER`/`REAL` column would reject the base64 string, so the storage
  /// type must be TEXT even for logical int/real fields.
  String get sqlType {
    if (encrypted) return 'TEXT';
    return switch (kind) {
      FieldKind.text ||
      FieldKind.enumValue ||
      FieldKind.json ||
      FieldKind.jsonList ||
      FieldKind.ref =>
        'TEXT',
      FieldKind.int || FieldKind.bool || FieldKind.date => 'INTEGER',
      FieldKind.real => 'REAL',
    };
  }

  Map<String, Object?> toJson() => {
        'name': name,
        'kind': kind.name,
        'required': required,
        'uniqueWhenActive': uniqueWhenActive,
        'encrypted': encrypted,
        if (enumValues != null) 'enumValues': enumValues,
        if (refTo != null) 'refTo': refTo,
        'enforceFk': enforceFk,
      };

  static Field fromJson(Map<String, Object?> j) => _parseSchemaJson(() {
        final kind = FieldKind.values.byName(j['kind'] as String);
        final name = j['name'] as String;
        final required = j['required'] == true;
        final encrypted = j['encrypted'] == true;
        switch (kind) {
          case FieldKind.text:
            return Field.text(name,
                required: required,
                uniqueWhenActive: j['uniqueWhenActive'] == true,
                encrypted: encrypted);
          case FieldKind.int:
            return Field.int(name, required: required, encrypted: encrypted);
          case FieldKind.real:
            return Field.real(name, required: required, encrypted: encrypted);
          case FieldKind.bool:
            return Field.bool(name, required: required);
          case FieldKind.date:
            return Field.date(name, required: required);
          case FieldKind.enumValue:
            return Field.enumValue(
                name, (j['enumValues'] as List).cast<String>(),
                required: required);
          case FieldKind.json:
            return Field.json(name, encrypted: encrypted);
          case FieldKind.jsonList:
            return Field.jsonList(name, encrypted: encrypted);
          case FieldKind.ref:
            return Field.ref(name,
                to: j['refTo'] as String, enforceFk: j['enforceFk'] == true);
        }
      });
}

/// Controls which records are included in an index.
enum IndexScope { live, notArchived }

/// Declares a SQLite index for one or more fields.
class IndexSpec {
  /// Ordered indexed column names.
  final List<String> columns;

  /// Whether indexed values must be unique within [scope].
  final bool unique;

  /// Record visibility scope covered by this index.
  final IndexScope scope;

  /// Creates an index declaration.
  const IndexSpec(this.columns,
      {this.unique = false, this.scope = IndexScope.live});

  Map<String, Object?> toJson() => {
        'columns': columns,
        'unique': unique,
        'scope': scope.name,
      };

  static IndexSpec fromJson(Map<String, Object?> j) =>
      _parseSchemaJson(() => IndexSpec(
            (j['columns'] as List).cast<String>(),
            unique: j['unique'] == true,
            scope: IndexScope.values.byName(j['scope'] as String),
          ));
}

/// Enables FTS5 over the declared text fields in [fields].
class FtsSpec {
  /// Declared fields indexed for full-text search.
  final List<String> fields;

  /// Creates an FTS5 configuration.
  const FtsSpec(this.fields);

  /// Serializes this FTS config to a JSON-compatible map.
  Map<String, Object?> toJson() => {'fields': fields};

  /// Reconstructs an FTS config from a JSON-compatible map.
  static FtsSpec fromJson(Map<String, Object?> j) =>
      _parseSchemaJson(() => FtsSpec((j['fields'] as List).cast<String>()));
}

/// A store schema migration step.
///
/// - Additive (`destructive: false`): `ADD COLUMN` for each of [addedFields],
///   then (optionally) a chunked backfill driven by [transform].
/// - Destructive (`destructive: true`): the 12-step table rebuild. Rows are
///   copied through [transform] (old logical row -> new logical row).
class StoreMigration {
  /// Target store schema version after this step.
  final int toVersion;

  /// Whether the store must be rebuilt rather than altered in place.
  final bool destructive;

  /// Fields added by an additive migration.
  final List<Field> addedFields;

  /// Optional row transformation used during backfill or rebuild.
  final Map<String, Object?> Function(Map<String, Object?> oldRow)? transform;

  /// Creates a forward store migration.
  const StoreMigration({
    required this.toVersion,
    this.destructive = false,
    this.addedFields = const [],
    this.transform,
  });

  /// Serializes migration metadata that can cross the web worker boundary.
  /// Function transforms are intentionally omitted: closures are not
  /// structured-clone-safe and cannot be reconstructed in the worker.
  Map<String, Object?> toJson() => {
        'toVersion': toVersion,
        'destructive': destructive,
        'addedFields': [for (final field in addedFields) field.toJson()],
      };

  static StoreMigration fromJson(Map<String, Object?> json) =>
      _parseSchemaJson(() => StoreMigration(
            toVersion: json['toVersion'] as int,
            destructive: json['destructive'] == true,
            addedFields: [
              for (final field in (json['addedFields'] as List? ?? const []))
                Field.fromJson(field as Map<String, Object?>),
            ],
          ));
}

/// A lazy, deterministic, never-pushed document-format migration.
typedef DocumentMigration = Map<String, Object?> Function(
    Map<String, Object?> doc);

/// Conflict resolution policy. Resolver implementations are provided by the
/// sync layer; this type exists now so `CollectionSchema` can carry it.
class ConflictPolicy {
  /// Optional resolver for whole-record conflicts.
  final Object? collectionResolver;

  /// Resolver overrides keyed by field name.
  final Map<String, Object> fieldOverrides;

  /// Whether local content edits should unarchive a record.
  final bool editsUnarchive;

  /// Creates a conflict policy.
  const ConflictPolicy({
    this.collectionResolver,
    this.fieldOverrides = const {},
    this.editsUnarchive = false,
  });

  /// Creates the default policy with optional resolver overrides.
  factory ConflictPolicy.defaults({
    Object? collectionResolver,
    Map<String, Object> fieldOverrides = const {},
    bool editsUnarchive = false,
  }) =>
      ConflictPolicy(
        collectionResolver: collectionResolver,
        fieldOverrides: fieldOverrides,
        editsUnarchive: editsUnarchive,
      );
}

/// Runtime schema for one LocalPocket collection.
class CollectionSchema<T> {
  /// Collection and SQLite table name.
  final String name;

  /// Monotonically increasing local schema version.
  final int version;

  /// Typed fields owned by the collection.
  final List<Field> fields;

  /// Additional indexes generated for the collection.
  final List<IndexSpec> indexes;

  /// Conflict resolution policy for this collection.
  final ConflictPolicy conflictPolicy;

  /// Whether remote file references should be prefetched.
  final bool prefetchFiles;

  /// Whether records created and archived offline should remain pushable.
  final bool keepUnsyncedArchives;

  /// Optional FTS5 configuration.
  final FtsSpec? fts;

  /// Forward store migrations.
  final List<StoreMigration> migrations;

  /// Lazy document-format migrations keyed by target version.
  final Map<int, DocumentMigration> documentMigrations;

  /// Optional application-level validation callback.
  final List<String> Function(Map<String, Object?> record)? validator;

  /// Creates a collection schema.
  const CollectionSchema({
    required this.name,
    required this.version,
    required this.fields,
    this.indexes = const [],
    this.conflictPolicy = const ConflictPolicy(),
    this.prefetchFiles = false,
    this.keepUnsyncedArchives = false,
    this.fts,
    this.migrations = const [],
    this.documentMigrations = const {},
    this.validator,
  });

  /// Cached declared-name set. The identity-keyed Expando preserves the const
  /// constructor while avoiding rebuilding the Set on every encode/payload
  /// pass (cache immutable schema metadata).
  static final Expando<Set<String>> _declaredNamesCache =
      Expando<Set<String>>('declaredNames');

  Set<String> get declaredFieldNames =>
      _declaredNamesCache[this] ??= {for (final f in fields) f.name};

  /// Cached name → field lookup (cache immutable schema
  /// metadata; avoids linear scans in projection-aware decode).
  static final Expando<Map<String, Field>> _fieldByNameCache =
      Expando<Map<String, Field>>('fieldByName');

  /// Looks up a declared field by [name].
  Field? fieldByName(String name) =>
      (_fieldByNameCache[this] ??= {for (final f in fields) f.name: f})[name];

  /// Serializes this schema to a JSON-compatible map.
  Map<String, Object?> toJson() => {
        'name': name,
        'version': version,
        'fields': [for (final f in fields) f.toJson()],
        'indexes': [for (final ix in indexes) ix.toJson()],
        'keepUnsyncedArchives': keepUnsyncedArchives,
        if (fts != null) 'fts': fts!.toJson(),
        'migrations': [for (final migration in migrations) migration.toJson()],
      };

  factory CollectionSchema.fromJson(Map<String, Object?> j) =>
      _parseSchemaJson(() => CollectionSchema(
            name: j['name'] as String,
            version: j['version'] as int,
            fields: [
              for (final f in (j['fields'] as List))
                Field.fromJson(f as Map<String, Object?>)
            ],
            indexes: [
              for (final ix in (j['indexes'] as List))
                IndexSpec.fromJson(ix as Map<String, Object?>)
            ],
            keepUnsyncedArchives: j['keepUnsyncedArchives'] == true,
            fts: j['fts'] is Map
                ? FtsSpec.fromJson(j['fts'] as Map<String, Object?>)
                : null,
            migrations: [
              for (final migration in (j['migrations'] as List? ?? const []))
                StoreMigration.fromJson(migration as Map<String, Object?>),
            ],
          ));
}

/// Applies document migrations `from+1 .. to` to a logical document.
/// Pure, deterministic, idempotent — never pushes anything.
Map<String, Object?> applyDocumentMigrations(
  CollectionSchema schema,
  Map<String, Object?> doc, {
  required int from,
  required int to,
}) {
  var result = doc;
  for (var v = from + 1; v <= to; v++) {
    final m = schema.documentMigrations[v];
    if (m != null) result = m(result);
  }
  return result;
}
