/// Schema declaration model.
library;

import 'dart:async';

import 'package:collection/collection.dart' show ListEquality;
import 'package:localpocket/src/kernel/sync/merge.dart';

import 'errors.dart';

/// Reconstructs a schema model from JSON, converting any malformed value into
/// a typed [StorageError] instead of leaking a raw `TypeError`/`FormatException`.
/// Schema JSON is persisted and crosses the worker boundary, so a parse
/// failure indicates corruption or a version mismatch.
T _parseSchemaJson<T>(T Function() build) {
  try {
    return build();
  } on LocalPocketError {
    // Typed localpocket errors (validation, registration rules, nested
    // corruption) are rethrown verbatim — never double-wrapped.
    rethrow;
  } catch (e) {
    throw StorageError('Malformed schema JSON: $e');
  }
}

/// Supported logical field types.
enum FieldKind {
  /// A UTF-8 text value.
  text,

  /// An integer value.
  int,

  /// A floating-point value.
  real,

  /// A boolean value stored as `0` or `1`.
  bool,

  /// A date/time value stored as epoch milliseconds.
  date,

  /// A string restricted to a declared set of values.
  enumValue,

  /// A JSON object or array.
  json,

  /// A JSON array.
  jsonList,

  /// A reference to another store.
  ref,
}

/// {@template localpocket.field}
/// Declares one typed field in a [CollectionSchema].
/// {@endtemplate}
class Field {
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
  ///
  /// {@macro localpocket.field}
  factory Field.text(
    String name, {
    bool required = false,
    bool uniqueWhenActive = false,
    bool encrypted = false,
  }) =>
      Field._(
        name: name,
        kind: FieldKind.text,
        required: required,
        uniqueWhenActive: uniqueWhenActive,
        encrypted: encrypted,
      );

  /// Declares an integer field.
  ///
  /// {@macro localpocket.field}
  factory Field.int(
    String name, {
    bool required = false,
    bool encrypted = false,
  }) =>
      Field._(
        name: name,
        kind: FieldKind.int,
        required: required,
        encrypted: encrypted,
      );

  /// Declares a real-number field.
  ///
  /// {@macro localpocket.field}
  factory Field.real(
    String name, {
    bool required = false,
    bool encrypted = false,
  }) =>
      Field._(
        name: name,
        kind: FieldKind.real,
        required: required,
        encrypted: encrypted,
      );

  /// Declares a boolean field stored as SQLite `0` or `1`.
  ///
  /// {@macro localpocket.field}
  factory Field.bool(String name, {bool required = false}) =>
      Field._(name: name, kind: FieldKind.bool, required: required);

  /// Declares a date/time field stored as epoch milliseconds.
  ///
  /// {@macro localpocket.field}
  factory Field.date(String name, {bool required = false}) =>
      Field._(name: name, kind: FieldKind.date, required: required);

  /// Declares a string field restricted to [values].
  ///
  /// {@macro localpocket.field}
  factory Field.enumValue(
    String name,
    List<String> values, {
    bool required = false,
  }) =>
      Field._(
        name: name,
        kind: FieldKind.enumValue,
        required: required,
        enumValues: List.unmodifiable(values),
      );

  /// Declares a JSON object or array field.
  ///
  /// {@macro localpocket.field}
  factory Field.json(String name, {bool encrypted = false}) =>
      Field._(name: name, kind: FieldKind.json, encrypted: encrypted);

  /// Declares a JSON array field.
  ///
  /// {@macro localpocket.field}
  factory Field.jsonList(String name, {bool encrypted = false}) =>
      Field._(name: name, kind: FieldKind.jsonList, encrypted: encrypted);

  /// Declares a reference to collection [to].
  ///
  /// {@macro localpocket.field}
  factory Field.ref(
    String name, {
    required String to,
    bool enforceFk = false,
  }) =>
      Field._(name: name, kind: FieldKind.ref, refTo: to, enforceFk: enforceFk);

  /// Column name exposed to queries and records.
  final String name;

  /// Logical type of the field.
  final FieldKind kind;

  /// Whether writes must provide a non-null value.
  final bool required;

  /// Whether non-archived records must have unique values.
  ///
  /// The uniqueness scope is `NOT archived` — it does NOT exclude hidden
  /// records: a record hidden by a sync sweep keeps occupying this index
  /// until it is purged, so re-creating a record with the same value while
  /// the hidden one exists is rejected (a declared `live`-scoped unique index
  /// excludes hidden and would allow it). Deliberate and documented.
  final bool uniqueWhenActive;

  /// Whether the value is encrypted at rest.
  final bool encrypted;

  /// Allowed values for an enum field.
  final List<String>? enumValues;

  /// Referenced collection name for a reference field.
  final String? refTo;

  /// Whether SQLite should enforce the reference as a foreign key.
  final bool enforceFk;

  /// Strict identifier charset for field names: letter/underscore then
  /// letters, digits, or underscores (Unicode letters allowed; punctuation
  /// and whitespace are not).
  static final RegExp _identifierPattern = RegExp(
    r'^[\p{L}_][\p{L}\p{N}_]*$',
    unicode: true,
  );

  /// Engine-owned physical columns: never legal as declared field names
  /// or extra keys. `rowid`/`_rowid_`/`oid` shadow SQLite's implicit rowid —
  /// FTS triggers' `new.rowid` would resolve to user TEXT and corrupt delete
  /// bookkeeping — so they are reserved too.
  static const Set<String> reservedColumns = {
    'id',
    'archived',
    'hidden',
    'extra',
    'rowid',
    '_rowid_',
    'oid',
  };

  /// Validates [name] against the strict identifier policy.
  ///
  /// Field names are quoted in generated SQL (keywords are legal names);
  /// this is defense-in-depth against unquoted contexts.
  static void validateName(String name) {
    if (!_identifierPattern.hasMatch(name)) {
      throw SchemaRegistrationError(
        'Field "$name" is not a valid identifier (must start with a letter '
        'or underscore and contain only letters, digits, or underscores).',
      );
    }
  }

  /// Validates a store (collection) name. Store names become SQL table names
  /// and are referenced in quoted and single-quoted contexts (FTS
  /// `content = '<name>'`, adapter `"<table>"` wrapping), so they must not
  /// carry quote characters — a `'` or `"` would break/inject those contexts —
  /// and must not use SQLite's or the engine's reserved prefixes. Spaces,
  /// unicode, and empty names remain legal (they are quoted throughout the
  /// DDL layer); only quote characters and reserved prefixes are rejected.
  static void validateStoreName(String name) {
    if (name.contains("'") || name.contains('"')) {
      throw SchemaRegistrationError(
        'Store name "$name" must not contain quote characters: a quote would '
        'break the FTS content reference and the database adapter\'s table '
        'quoting.',
      );
    }
    if (name.startsWith('sqlite_') || name.startsWith('lp_')) {
      throw SchemaRegistrationError(
        'Store name "$name" uses a reserved prefix (sqlite_ is SQLite-owned, '
        'lp_ is the engine metadata namespace).',
      );
    }
  }

  /// SQLite affinity for this field. Encrypted fields store base64
  /// ciphertext as TEXT (a STRICT INTEGER/REAL column would reject it).
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

  /// Serializes this field to a JSON-compatible map.
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

  /// Reconstructs a field from a JSON-compatible map.
  static Field fromJson(Map<String, Object?> j) => _parseSchemaJson(() {
        final kind = FieldKind.values.byName(j['kind']! as String);
        final name = j['name']! as String;
        final required = j['required'] == true;
        final encrypted = j['encrypted'] == true;
        switch (kind) {
          case FieldKind.text:
            return Field.text(
              name,
              required: required,
              uniqueWhenActive: j['uniqueWhenActive'] == true,
              encrypted: encrypted,
            );
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
              name,
              (j['enumValues']! as List).cast<String>(),
              required: required,
            );
          case FieldKind.json:
            return Field.json(name, encrypted: encrypted);
          case FieldKind.jsonList:
            return Field.jsonList(name, encrypted: encrypted);
          case FieldKind.ref:
            return Field.ref(
              name,
              to: j['refTo']! as String,
              enforceFk: j['enforceFk'] == true,
            );
        }
      });
}

/// Controls which records are included in an index.
enum IndexScope {
  /// The default query scope: excludes archived AND hidden records.
  live,

  /// Excludes archived records but INCLUDES hidden ones — the full
  /// non-archived set, regardless of visibility.
  notArchived,
}

/// {@template localpocket.index_spec}
/// Declares a SQLite index for one or more fields.
/// {@endtemplate}
class IndexSpec {
  /// Creates an index declaration.
  ///
  /// {@macro localpocket.index_spec}
  const IndexSpec(
    this.columns, {
    this.unique = false,
    this.scope = IndexScope.live,
  });

  /// Ordered indexed column names.
  ///
  /// During schema compilation, each explicit name must be a declared field
  /// or one of the engine-owned columns (`id`, `archived`, `hidden`, or
  /// `extra`); an unknown name throws [SchemaRegistrationError]. An empty
  /// list remains valid and produces an index over the implicit `id` column.
  final List<String> columns;

  /// Whether indexed values must be unique within [scope].
  final bool unique;

  /// Record visibility scope covered by this index.
  final IndexScope scope;

  /// Serializes this index declaration to a JSON-compatible map.
  Map<String, Object?> toJson() => {
        'columns': columns,
        'unique': unique,
        'scope': scope.name,
      };

  /// Reconstructs an index declaration from a JSON-compatible map.
  static IndexSpec fromJson(Map<String, Object?> j) => _parseSchemaJson(
        () => IndexSpec(
          (j['columns']! as List).cast<String>(),
          unique: j['unique'] == true,
          scope: IndexScope.values.byName(j['scope']! as String),
        ),
      );
}

/// {@template localpocket.fts_spec}
/// Enables FTS5 over the declared text fields in [fields].
///
/// Two optional, independently toggleable extensions:
///
/// - [fuzzy]: indexes every contiguous 3-character sequence (the FTS5 trigram
///   tokenizer) so queries match substrings anywhere in a value instead of
///   whole tokens only. Requires SQLite >= 3.34.0 and a larger index.
/// - [normalize]: consumer-declared character parity rules applied to both
///   the indexed text and the search term, e.g. mapping Arabic alef forms
///   (`أ`, `إ`, `آ`) to a single canonical letter (`ا`) so they all match.
/// {@endtemplate}
class FtsSpec {
  /// Creates an FTS5 configuration.
  ///
  /// {@macro localpocket.fts_spec}
  const FtsSpec(
    this.fields, {
    this.fuzzy = false,
    this.normalize = const FtsNormalization(),
  });

  /// Declared fields indexed for full-text search.
  final List<String> fields;

  /// Whether substring (trigram) matching is enabled.
  final bool fuzzy;

  /// Character parity rules applied before tokenization.
  ///
  /// An identity normalization (no rules) compiles to plain triggers.
  final FtsNormalization normalize;

  /// Whether this spec declares any parity rules.
  bool get hasNormalization => normalize.rules.isNotEmpty;

  /// Serializes this FTS config to a JSON-compatible map.
  Map<String, Object?> toJson() => {
        'fields': fields,
        if (fuzzy) 'fuzzy': true,
        if (hasNormalization) 'normalize': normalize.toJson(),
      };

  /// Reconstructs an FTS config from a JSON-compatible map.
  static FtsSpec fromJson(Map<String, Object?> j) => _parseSchemaJson(() {
        final normalizeRaw = j['normalize'];
        return FtsSpec(
          (j['fields']! as List).cast<String>(),
          fuzzy: j['fuzzy'] == true,
          normalize: normalizeRaw is Map
              ? FtsNormalization.fromJson(normalizeRaw.cast<String, Object?>())
              : const FtsNormalization(),
        );
      });

  /// Two specs are equal when fields, tokenizer mode, and parity rules all
  /// match — the exact inputs the compiled DDL depends on.
  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is FtsSpec &&
          fuzzy == other.fuzzy &&
          const ListEquality<String>().equals(fields, other.fields) &&
          normalize == other.normalize;

  @override
  int get hashCode => Object.hash(Object.hashAll(fields), fuzzy, normalize);
}

/// {@template localpocket.fts_normalization}
/// Consumer-declared character parity rules for full-text search.
///
/// Each rule maps one source character to its replacement string (usually a
/// single character; longer strings are rejected to keep token offsets
/// stable). The same pure-Dart transform is applied on BOTH sides of the
/// index: at write time inside generated FTS triggers via a per-store SQL
/// user function (`lp_norm_<store>`), and at query time in pure Dart inside
/// [SearchBuilder] — so the normalized term rides in plan args and crosses
/// the web worker boundary without needing a UDF there.
///
/// Example (Arabic alef unification):
///
/// ```dart
/// const FtsNormalization(rules: {'أ': 'ا', 'إ': 'ا', 'آ': 'ا', 'ة': 'ه'})
/// ```
/// {@endtemplate}
class FtsNormalization {
  /// Creates parity rules from a character → replacement map. Prefer
  /// [FtsNormalization.fromMap] for user input (it validates and copies);
  /// this const constructor trusts its arguments.
  ///
  /// {@macro localpocket.fts_normalization}
  const FtsNormalization({this.rules = const {}});

  /// Builds a validated, unmodifiable copy of [rules].
  ///
  /// {@macro localpocket.fts_normalization}
  factory FtsNormalization.fromMap(Map<String, String> rules) {
    for (final e in rules.entries) {
      validateRule(e.key, e.value);
    }
    return FtsNormalization(rules: Map.unmodifiable(rules));
  }

  /// The declared rules. Iteration order is preserved and deterministic.
  final Map<String, String> rules;

  /// Validates one parity rule: single-character source, non-empty
  /// replacement of at most 4 characters.
  static void validateRule(String from, String to) {
    if (from.runes.length != 1) {
      throw SchemaRegistrationError(
        'FtsNormalization keys must be single characters, got "$from".',
      );
    }
    if (to.isEmpty || to.length > 4) {
      throw SchemaRegistrationError(
        'FtsNormalization replacement for "$from" must be 1-4 characters.',
      );
    }
  }

  /// Whether any rule is declared.
  bool get isEmpty => rules.isEmpty;

  /// Applies the rules to [text]. Rules are applied in declaration order;
  /// output characters are never re-normalized by later rules.
  String normalize(String text) {
    var result = text;
    for (final e in rules.entries) {
      if (!result.contains(e.key)) continue;
      result = result.replaceAll(e.key, e.value);
    }
    return result;
  }

  /// Serializes these rules to a JSON-compatible map.
  Map<String, Object?> toJson() => {'rules': rules};

  /// Reconstructs parity rules from a JSON-compatible map.
  static FtsNormalization fromJson(Map<String, Object?> j) =>
      _parseSchemaJson(() {
        final raw = j['rules']! as Map<Object?, Object?>;
        final parsed = <String, String>{};
        for (final e in raw.entries) {
          final key = e.key! as String;
          final value = e.value! as String;
          validateRule(key, value);
          parsed[key] = value;
        }
        return FtsNormalization(rules: Map.unmodifiable(parsed));
      });

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is FtsNormalization && _mapsEqual(rules, other.rules);

  static bool _mapsEqual(Map<String, String> a, Map<String, String> b) {
    if (a.length != b.length) return false;
    for (final e in a.entries) {
      if (b[e.key] != e.value) return false;
    }
    return true;
  }

  /// Order-independent: two normalizations that are [==] equal always
  /// produce the same hash regardless of rule declaration order.
  @override
  int get hashCode {
    final keys = rules.keys.toList()..sort();
    return Object.hashAll([for (final k in keys) Object.hash(k, rules[k])]);
  }

  @override
  String toString() => 'FtsNormalization(${rules.length} rules)';
}

/// {@template localpocket.store_migration}
/// A store schema migration step.
///
/// - Additive (`destructive: false`): `ADD COLUMN` for each of [addedFields],
///   then (optionally) a chunked backfill driven by [transform].
/// - Destructive (`destructive: true`): the 12-step table rebuild. Rows are
///   copied through [transform] (old logical row -> new logical row).
/// {@endtemplate}
class StoreMigration {
  /// Creates a forward store migration.
  ///
  /// {@macro localpocket.store_migration}
  const StoreMigration({
    required this.toVersion,
    this.destructive = false,
    this.addedFields = const [],
    this.transform,
  });

  /// Target store schema version after this step.
  final int toVersion;

  /// Whether the store must be rebuilt rather than altered in place.
  final bool destructive;

  /// Fields added by an additive migration.
  final List<Field> addedFields;

  /// Optional row transformation used during backfill or rebuild. The hook
  /// may be synchronous (native in-process) or asynchronous (a
  /// channel-backed hook that executes on the page).
  final FutureOr<Map<String, Object?>> Function(Map<String, Object?> oldRow)?
      transform;

  /// Serializes migration metadata that can cross the web worker boundary.
  /// Function transforms are intentionally omitted: closures are not
  /// structured-clone-safe and cannot be reconstructed in the worker.
  Map<String, Object?> toJson() => {
        'toVersion': toVersion,
        'destructive': destructive,
        'addedFields': [for (final field in addedFields) field.toJson()],
      };

  /// Internal: rebuilds this migration with [transform] attached. The worker
  /// attach path rebinds transforms that execute on the page; the wire form
  /// never carries them.
  StoreMigration withTransform(
          FutureOr<Map<String, Object?>> Function(Map<String, Object?> oldRow)?
              transform) =>
      StoreMigration(
        toVersion: toVersion,
        destructive: destructive,
        addedFields: addedFields,
        transform: transform,
      );

  /// Reconstructs migration metadata from a JSON-compatible map.
  static StoreMigration fromJson(Map<String, Object?> json) => _parseSchemaJson(
        () => StoreMigration(
          toVersion: json['toVersion']! as int,
          destructive: json['destructive'] == true,
          addedFields: [
            for (final field in (json['addedFields'] as List? ?? const []))
              Field.fromJson(field as Map<String, Object?>),
          ],
        ),
      );
}

/// A lazy, deterministic, never-pushed document-format migration.
///
/// The hook may be synchronous (the native in-process path) or asynchronous
/// (a channel-backed hook that executes on the page); `await` accepts both.
typedef DocumentMigration = FutureOr<Map<String, Object?>> Function(
  Map<String, Object?> doc,
);

/// Policy applied when a pushed update's target record no longer exists
/// remotely (a remote deletion raced a local offline edit).
///
/// Purely a client-side decision: none of the options require backend support
/// beyond the existing `NotFoundError`/404 contract.
enum MissingRemotePolicy {
  /// Escalate to a delete-vs-edit conflict: the local edit is kept and the
  /// app resolves it (`acceptLocal` recreates, `acceptRemote` discards).
  /// This is the default — it never loses data and never resurrects an
  /// intentional deletion.
  conflict,

  /// Recreate the record remotely with the local content (same id).
  /// Converges automatically but resurrects a record whose deletion was
  /// intentional.
  recreate,

  /// Accept the remote deletion: discard the local edit and remove the row
  /// (the local DB mirrors the remote state).
  discardLocal,
}

/// {@template localpocket.conflict_policy}
/// Conflict resolution policy. Resolver implementations are provided by the
/// sync layer; this type exists now so `CollectionSchema` can carry it.
/// {@endtemplate}
class ConflictPolicy {
  /// Creates a conflict policy.
  ///
  /// {@macro localpocket.conflict_policy}
  const ConflictPolicy({
    this.collectionResolver,
    this.fieldOverrides = const {},
    this.editsUnarchive = false,
    this.missingRemote = MissingRemotePolicy.conflict,
  });

  /// Creates the default policy with optional resolver overrides.
  ///
  /// {@macro localpocket.conflict_policy}
  factory ConflictPolicy.defaults({
    ConflictResolver? collectionResolver,
    Map<String, ConflictResolver> fieldOverrides = const {},
    bool editsUnarchive = false,
    MissingRemotePolicy missingRemote = MissingRemotePolicy.conflict,
  }) =>

      /// {@macro localpocket.conflict_policy}
      ConflictPolicy(
        collectionResolver: collectionResolver,
        fieldOverrides: fieldOverrides,
        editsUnarchive: editsUnarchive,
        missingRemote: missingRemote,
      );

  /// Optional resolver for whole-record conflicts.
  final ConflictResolver? collectionResolver;

  /// Resolver overrides keyed by field name.
  final Map<String, ConflictResolver> fieldOverrides;

  /// Whether local content edits should unarchive a record.
  final bool editsUnarchive;

  /// How a pushed update reacts when its target no longer exists remotely.
  final MissingRemotePolicy missingRemote;
}

/// {@template localpocket.collection_schema}
/// Runtime schema for one LocalPocket collection.
/// {@endtemplate}
class CollectionSchema<T> {
  /// Creates a collection schema.
  ///
  /// {@macro localpocket.collection_schema}
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
    this.attachmentField,
  });

  /// Reconstructs a schema from a JSON-compatible map.
  ///
  /// {@macro localpocket.collection_schema}
  factory CollectionSchema.fromJson(Map<String, Object?> j) => _parseSchemaJson(
        () => CollectionSchema<T>(
          name: j['name']! as String,
          version: j['version']! as int,
          fields: [
            for (final f in (j['fields']! as List))
              Field.fromJson(f as Map<String, Object?>),
          ],
          indexes: [
            for (final ix in (j['indexes']! as List))
              IndexSpec.fromJson(ix as Map<String, Object?>),
          ],
          keepUnsyncedArchives: j['keepUnsyncedArchives'] == true,
          prefetchFiles: j['prefetchFiles'] == true,
          attachmentField: j['attachmentField'] is String
              ? j['attachmentField']! as String
              : null,
          fts: j['fts'] is Map
              ? FtsSpec.fromJson(j['fts']! as Map<String, Object?>)
              : null,
          migrations: [
            for (final migration in (j['migrations'] as List? ?? const []))
              StoreMigration.fromJson(migration as Map<String, Object?>),
          ],
        ),
      );

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

  /// Optional application-level validation callback. The hook may be
  /// synchronous (the native in-process path) or asynchronous (a
  /// channel-backed hook that executes on the page).
  final FutureOr<List<String>> Function(Map<String, Object?> record)? validator;

  /// The local attachment field name for this store's files, or `null` for
  /// the shared default (`attachmentFieldDefault`). A metadata label only;
  /// the sync adapter decides the remote field name.
  final String? attachmentField;

  /// Cached declared-name set. The identity-keyed Expando preserves the const
  /// constructor while avoiding rebuilding the Set on every encode/payload
  /// pass (cache immutable schema metadata).
  static final Expando<Set<String>> _declaredNamesCache = Expando<Set<String>>(
    'declaredNames',
  );

  /// Returns the names of all fields declared by this schema.
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
        'prefetchFiles': prefetchFiles,
        if (attachmentField != null) 'attachmentField': attachmentField,
        if (fts != null) 'fts': fts!.toJson(),
        'migrations': [for (final migration in migrations) migration.toJson()],
      };
}

/// Applies document migrations `from+1 .. to` to a logical document.
/// Pure, deterministic, idempotent — never pushes anything.
Future<Map<String, Object?>> applyDocumentMigrations(
  CollectionSchema<Object?> schema,
  Map<String, Object?> doc, {
  required int from,
  required int to,
}) async {
  var result = doc;
  for (var v = from + 1; v <= to; v++) {
    final m = schema.documentMigrations[v];
    if (m != null) result = await m(result);
  }
  return result;
}
