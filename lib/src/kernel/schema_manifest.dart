import 'canonical_json.dart';
import 'errors.dart';
import 'hashing.dart';
import 'query_plan.dart' show queryCompilerVersion;
import 'schema.dart' show CollectionSchema;

/// The query-compiler version recorded in every manifest (top-level alias so
/// factory constructors can reference it without instance-member lookup).
const int kQueryCompilerVersion = queryCompilerVersion;

/// The manifest format version. Bumped whenever the manifest encoding changes
/// meaningfully; a persisted manifest with a newer format version is rejected
/// at open.
const int schemaManifestFormatVersion = 1;

/// Immutable, versioned, wire-safe schema description.
///
/// The manifest contains EVERY behavior-affecting value of a store: ordered
/// fields, indexes, FTS configuration, archive/file options, conflict-policy
/// descriptors, migration-operation descriptors, and the query compiler
/// version. Executable features that CANNOT cross a worker boundary (custom
/// resolvers, validator callbacks, document-migration transforms) are not
/// carried as code — they are recorded as explicit unsupported-feature flags
/// so a manifest can never silently drop behavior.
///
/// The [fingerprint] is computed over canonical serialized bytes of the
/// complete manifest — never over an incomplete legacy object.
final class SchemaManifest {
  const SchemaManifest._({
    required this.formatVersion,
    required this.store,
    required this.version,
    required this.definition,
    required this.unsupportedFeatures,
    required this.queryCompilerVersion,
  });

  /// Compiles the manifest for [schema] and collects every unsupported
  /// executable feature. Pure — no database access.
  factory SchemaManifest.compile(CollectionSchema<Object?> schema) {
    final definition = _completeDefinitionJson(schema);
    final unsupported = <String>[];
    final policy = schema.conflictPolicy;
    if (policy.collectionResolver != null) {
      unsupported.add('conflictResolver');
    }
    if (policy.fieldOverrides.isNotEmpty) {
      unsupported.add('fieldResolvers');
    }
    if (schema.migrations.any((m) => m.transform != null)) {
      unsupported.add('migrationTransform');
    }
    if (schema.documentMigrations.isNotEmpty) {
      unsupported.add('documentMigrations');
    }
    if (schema.validator != null) {
      unsupported.add('validatorCallback');
    }
    return SchemaManifest._(
      formatVersion: schemaManifestFormatVersion,
      store: schema.name,
      version: schema.version,
      definition: definition,
      unsupportedFeatures: List.unmodifiable(unsupported),
      queryCompilerVersion: kQueryCompilerVersion,
    );
  }

  /// Parses a manifest from its wire/persisted form. Malformed input and
  /// newer format versions fail with typed errors — never a raw cast.
  factory SchemaManifest.fromJson(Object? raw) {
    if (raw is! Map) {
      throw SchemaRegistrationError('Malformed schema manifest: not an object');
    }
    final json = raw.map((k, v) => MapEntry(k.toString(), v));
    final format = json['formatVersion'];
    if (format is! int) {
      throw SchemaRegistrationError(
          'Malformed schema manifest: missing formatVersion');
    }
    if (format > schemaManifestFormatVersion) {
      throw SchemaTooNewError(
          'Schema manifest format v$format is newer than supported '
          'v$schemaManifestFormatVersion.');
    }
    final store = json['store'];
    final version = json['version'];
    final definition = json['definition'];
    final unsupported = json['unsupportedFeatures'];
    final compiler = json['queryCompilerVersion'];
    if (store is! String ||
        version is! int ||
        definition is! Map ||
        unsupported is! List ||
        compiler is! int) {
      throw SchemaRegistrationError(
          'Malformed schema manifest for store "${store ?? '???'}"');
    }
    return SchemaManifest._(
      formatVersion: format,
      store: store,
      version: version,
      definition: definition.map((k, v) => MapEntry(k.toString(), v)),
      unsupportedFeatures:
          List.unmodifiable(unsupported.map((e) => e.toString())),
      queryCompilerVersion: compiler,
    );
  }

  /// The complete schema definition in manifest form: every behavior-affecting
  /// value, including policy/migration descriptors the legacy
  /// `CollectionSchema.toJson()` omits. Callbacks appear only as boolean
  /// descriptors, never as code.
  final Map<String, Object?> definition;

  /// Executable features present in the schema that a worker cannot run.
  final List<String> unsupportedFeatures;

  /// The manifest encoding version.
  final int formatVersion;

  /// The store this manifest describes.
  final String store;

  /// The schema version described.
  final int version;

  /// The query compiler version the schema was compiled with.
  final int queryCompilerVersion;

  /// Canonical serialized bytes → stable fingerprint.
  String get fingerprint => sha256Hex(canonicalize(toJson()));

  /// Canonical JSON encoding for wire/persistence use.
  String get encodedJson => canonicalize(toJson());

  /// Serializes the manifest into its wire/persisted form.
  Map<String, Object?> toJson() => {
        'formatVersion': formatVersion,
        'store': store,
        'version': version,
        'definition': definition,
        'unsupportedFeatures': unsupportedFeatures,
        'queryCompilerVersion': queryCompilerVersion,
      };

  /// Whether the behavior-affecting content of this manifest is identical to
  /// [other]'s (fingerprint equality without re-hashing semantics).
  bool behaviorallyEquals(SchemaManifest other) =>
      fingerprint == other.fingerprint;
}

/// Builds the COMPLETE definition map: the legacy JSON plus conflict-policy
/// descriptors, migration-operation descriptors, document-migration count,
/// and validator presence — everything `CollectionSchema.toJson()` omits.
Map<String, Object?> _completeDefinitionJson(CollectionSchema<Object?> schema) {
  final policy = schema.conflictPolicy;
  return {
    ...schema.toJson(),
    'conflictPolicy': {
      'editsUnarchive': policy.editsUnarchive,
      'missingRemote': policy.missingRemote.name,
      'hasCollectionResolver': policy.collectionResolver != null,
      'fieldOverrideNames': policy.fieldOverrides.keys.toList()..sort(),
    },
    'migrations': [
      for (final m in schema.migrations)
        {
          ...m.toJson(),
          'hasTransform': m.transform != null,
        },
    ],
    'documentMigrationVersions': schema.documentMigrations.keys.toList()
      ..sort(),
    'hasValidatorCallback': schema.validator != null,
  };
}
