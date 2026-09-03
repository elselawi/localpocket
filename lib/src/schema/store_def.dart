/// Store definitions: the `Fields` factory object and the `StoreDef` base
/// class that compiles descriptors into a database `CollectionSchema`.
library;

import 'dart:collection';

import 'package:localpocket/src/kernel/errors.dart';
import 'package:localpocket/src/kernel/schema.dart';
import 'package:meta/meta.dart';
import 'field_def.dart';

import 'schema_helpers.dart' as schema_helpers;

/// The cross-store mismatch thrown when an identity check finds a foreign
/// definition — the runtime backstop behind the compile-time phantom types.
///
/// [targetKind] names what was touched (`row`, `handle`); [target] is its
/// store type.
TypedStoreMismatchError typedStoreMismatch({
  required Object? owner,
  required String name,
  required Object? target,
  required String targetKind,
}) =>
    TypedStoreMismatchError(
      'Field "$name" belongs to store ${owner.runtimeType}, but this '
      '$targetKind belongs to $target. Cross-store usage is a compile '
      'error; a cast has defeated the type system.',
    );

/// {@template localpocket.__system_field_def}
/// A system field descriptor: database-owned column (`id`/`archived`) exposed
/// for typed reads, never settable through the typed write path and never
/// part of the schema `fields` list.
/// {@endtemplate}
final class _SystemFieldDef<S, T> extends FieldDef<S, T> {
  /// {@macro localpocket.__system_field_def}
  _SystemFieldDef(super.owner, super.name) : super(required: false);

  @override
  Field toField() => throw SchemaRegistrationError(
      'System field "$name" is not part of the schema fields list; the '
      'engine owns the "$name" column.');
}

/// {@template localpocket.fields}
/// The per-store field factory.
///
/// One instance per store, created by [StoreDef]. Each factory method returns
/// a typed descriptor with [FieldDef.owner] bound to the store, and records
/// it so [StoreDef.verify] can detect one omitted from the `fields` list.
/// {@endtemplate}
final class Fields<S> {
  /// Creates the field factory for [owner].
  ///
  /// {@macro localpocket.fields}
  Fields(this._owner);

  final S _owner;

  /// Every descriptor created through this factory (identity set), used by
  /// [StoreDef.verify] for the omitted-field check.
  final Set<FieldDef<S, Object?>> _created = Set.identity();

  /// Declares an optional text field.
  TextFieldOpt<S> text(
    String name, {
    /// Whether non-archived records must have unique values.
    bool uniqueWhenActive = false,
    bool encrypted = false,
  }) {
    final fd = TextFieldOpt<S>(_owner, name,
        uniqueWhenActive: uniqueWhenActive, encrypted: encrypted);
    _created.add(fd);
    return fd;
  }

  /// Declares an optional integer field.
  IntFieldOpt<S> integer(String name, {bool encrypted = false}) {
    final fd = IntFieldOpt<S>(_owner, name, encrypted: encrypted);
    _created.add(fd);
    return fd;
  }

  /// Declares an optional real-number field.
  RealFieldOpt<S> real(String name, {bool encrypted = false}) {
    final fd = RealFieldOpt<S>(_owner, name, encrypted: encrypted);
    _created.add(fd);
    return fd;
  }

  /// Declares an optional boolean field. There is deliberately no
  /// `encrypted` parameter — the database's `Field.bool` does not support it.
  BoolFieldOpt<S> boolean(String name) {
    final fd = BoolFieldOpt<S>(_owner, name);
    _created.add(fd);
    return fd;
  }

  /// Declares an optional date field (logical type `int`, epoch
  /// milliseconds).
  DateFieldOpt<S> date(String name) {
    final fd = DateFieldOpt<S>(_owner, name);
    _created.add(fd);
    return fd;
  }

  /// Declares an optional date-time field (logical type [DateTime], UTC
  /// epoch milliseconds on the wire; same database column as [date]).
  DateTimeFieldOpt<S> dateTime(String name) {
    final fd = DateTimeFieldOpt<S>(_owner, name);
    _created.add(fd);
    return fd;
  }

  /// Declares an optional enum field over [values].
  ///
  /// Default wire codec is `E.name`; [wire] overrides per value (unmapped
  /// values fall back to `.name`). The database receives the wire strings.
  EnumFieldOpt<S, E> enumOf<E extends Enum>(
    String name,
    List<E> values, {
    Map<E, String>? wire,
  }) {
    final fd = EnumFieldOpt<S, E>(_owner, name, values, wire: wire);
    _created.add(fd);
    return fd;
  }

  /// Declares a JSON-object field (`Map<String, Object?>`, optional). There
  /// is no `.req()` — the database's `Field.json` has no `required`.
  JsonField<S> json(String name, {bool encrypted = false}) {
    final fd = JsonField<S>(_owner, name, encrypted: encrypted);
    _created.add(fd);
    return fd;
  }

  /// Declares a JSON-array field (`List<T>`, optional). There is no
  /// `.req()` — the database's `Field.jsonList` has no `required`.
  JsonListField<S, T> jsonList<T>(String name, {bool encrypted = false}) {
    final fd = JsonListField<S, T>(_owner, name, encrypted: encrypted);
    _created.add(fd);
    return fd;
  }

  /// Declares a reference field (a record id, optional). There is no
  /// `.req()` — the database's `Field.ref` has no `required`.
  RefField<S> ref(String name, {required String to, bool enforceFk = false}) {
    final fd = RefField<S>(_owner, name, to: to, enforceFk: enforceFk);
    _created.add(fd);
    return fd;
  }
}

/// {@template localpocket.store_def}
/// The typed definition of one store: the consumer-facing home of the
/// store's field descriptors and the schema extras (`indexes`, `fts`,
/// `migrations`, `conflictPolicy`, `documentMigrations`, `validator`).
///
/// ## The canonical-instance convention
///
/// ```dart
/// final class Tasks extends StoreDef<Tasks> {
///   static final Tasks store = Tasks._();
///   Tasks._() : super(name: 'tasks', version: 1);
///
///   static final title = store.schema.text('title').req();
///
///   @override
///   List<FieldDef<Tasks, Object?>> get fields => [title];
///
///   @override
///   List<IndexSpec> get indexes => [indexSpec([title])];
///
///   @override
///   FtsSpec? get fts => ftsSpec([title]);
/// }
/// ```
///
/// Descriptors are public statics: they initialize lazily after `store` has
/// settled, so every file reaches the same typed descriptor objects through
/// `Tasks.title` with zero plumbing. The private constructor makes a second
/// instance unconstructible outside the class; binding a second instance
/// under a used name throws [TypedStoreMismatchError].
///
/// [fields] *references* descriptors — it never restates their metadata —
/// so there is exactly one definition per field, and compiled column order
/// is list order (deterministic, independent of declaration/access order).
/// System columns (`id`, `archived`) are exposed through [id]/[archived] and
/// are **not** part of [fields].
/// {@endtemplate}
abstract base class StoreDef<S extends StoreDef<S>> {
  /// Creates a store definition.
  ///
  /// {@macro localpocket.store_def}
  StoreDef({required this.name, this.version = 1});

  /// Collection (and SQLite table) name.
  final String name;

  /// Monotonically increasing local schema version.
  final int version;

  /// Descriptors are declared as:
  /// `static final title = store.schema.text('title').req();`
  late final Fields<S> schema = Fields<S>(this as S);

  /// The ordered registry of user fields. Descriptors are referenced, not
  /// restated: each field is declared exactly once, as a `static final`
  /// member initialized through [schema].
  List<FieldDef<S, Object?>> get fields;

  /// Builds an index for this store from its field descriptors — the typed
  /// twin of a raw [IndexSpec], with column names derived from the
  /// descriptors. The receiver fixes owner type [S], so a foreign descriptor
  /// is an analysis error. Outside a [StoreDef] use the top-level `indexSpec`.
  IndexSpec indexSpec(
    List<FieldDef<S, Object?>> fields, {
    bool unique = false,
    IndexScope scope = IndexScope.live,
  }) =>
      schema_helpers.indexSpec<S>(fields, unique: unique, scope: scope);

  /// Builds an FTS declaration for this store from its field descriptors —
  /// the typed twin of a raw [FtsSpec]. Named `ftsSpec` because the `fts`
  /// getter below occupies that name. Outside a [StoreDef] use the top-level
  /// `ftsSpec`.
  FtsSpec ftsSpec(
    List<FieldDef<S, Object?>> fields, {
    bool fuzzy = false,
    FtsNormalization normalize = const FtsNormalization(),
  }) =>
      schema_helpers.ftsSpec<S>(fields, fuzzy: fuzzy, normalize: normalize);

  /// Schema indexes, forwarded verbatim to the database. Prefer [indexSpec]
  /// so column names come from this store's descriptors; raw [IndexSpec]
  /// values remain supported for dynamic declarations.
  List<IndexSpec> get indexes => const [];

  /// Optional FTS5 configuration, forwarded verbatim to the database.
  /// Prefer [ftsSpec] to derive FTS field names from descriptors; raw
  /// [FtsSpec] values remain supported.
  FtsSpec? get fts => null;

  /// Forward store migrations, forwarded verbatim to the database.
  ///
  /// Descriptor policy: callbacks never cross a runtime boundary. The
  /// manifest records their presence (`SchemaManifest.unsupportedFeatures`)
  /// and the web worker rejects any store carrying one before DDL runs, so
  /// worker-backed databases are descriptor-only. Native targets keep the
  /// legacy in-process path; the split is pinned by `test/refactor/manifest/`.
  List<StoreMigration> get migrations => const [];

  /// Conflict resolution policy; `null` means the database's default
  /// `ConflictPolicy()`.
  ConflictPolicy? get conflictPolicy => null;

  /// Lazy document-format migrations keyed by target version, forwarded
  /// verbatim to the database. See the descriptor policy on [migrations].
  Map<int, DocumentMigration> get documentMigrations => const {};

  /// Optional application-level validation callback, forwarded verbatim to
  /// the database. See the descriptor policy on [migrations].
  List<String> Function(Map<String, Object?> record)? get validator => null;

  /// Whether archived records that never existed remotely stay archived
  /// locally (soft archive) instead of vanishing on [Collection.archive].
  ///
  /// The database drops such rows (no network operation recorded them);
  /// override to keep them locally. Forwarded verbatim like every schema
  /// extra.
  bool get keepUnsyncedArchives => false;

  /// Whether remote file references on this store should be prefetched
  /// during sync pulls. Forwarded verbatim like every other schema extra;
  /// database default is false.
  bool get prefetchFiles => false;

  /// The local attachment field name for this store's files, or `null` for
  /// the shared default (`attachmentFieldDefault`).
  ///
  /// A metadata label on the store's file references and the default `field:`
  /// of the file API (`store.files.attach/list/open`); bytes live in the local
  /// blob store and the sync backend's attachment storage. The PocketBase
  /// adapter owns the REMOTE field name — declare the matching file field on
  /// your PB collection (default `imgs`) or configure it via adapter options.
  String? get attachmentField => null;

  /// The system `id` descriptor (database-owned record id column). Readable
  /// and queryable, never settable through the typed write path.
  late final FieldDef<S, String> id =
      _SystemFieldDef<S, String>(this as S, 'id');

  /// The system `archived` descriptor (database-owned archive flag). Readable
  /// and queryable; `archive()`/`restore()` own that state transition.
  late final FieldDef<S, bool> archived =
      _SystemFieldDef<S, bool>(this as S, 'archived');

  /// Verifies the definition and throws a [SchemaRegistrationError] on the
  /// first
  /// inconsistency:
  ///
  /// - a descriptor created through [schema] but **omitted from [fields]** —
  ///   a field left out is an error, never silently dropped (an unforced
  ///   `late final` descriptor is invisible — no mirrors — so the check
  ///   covers every descriptor actually created);
  /// - a **foreign descriptor** whose [FieldDef.owner] is not this store;
  /// - a **duplicate column name**.
  ///
  /// Reserved-name/identifier checks stay with the database
  /// (`DdlCompiler`/`Field.validateName`); the nullability guard
  /// (`required: true` + nullable `T`) fires at descriptor construction,
  /// before [verify] runs.
  void verify() => _verify(fields);

  /// The compiled database schema, memoized: repeated reads return the
  /// identical instance. Compilation forces [fields] first (deterministic
  /// column order), runs [verify], then maps each descriptor through its
  /// [FieldDef.toField]. Library-internal seam (`@internal`): the public API
  /// surface carries only the typed definition; the kernel boots from this —
  /// applications never touch it.
  @internal
  CollectionSchema<Object?> get compiledSchema =>
      _compiledSchema ??= _compile();

  CollectionSchema<Object?>? _compiledSchema;

  CollectionSchema<Object?> _compile() {
    final fs = fields; // force late-final descriptors in LIST order, once
    _verify(fs);
    return CollectionSchema<Object?>(
      name: name,
      version: version,
      fields: [for (final fd in fs) fd.toField()],
      indexes: indexes,
      conflictPolicy: conflictPolicy ?? const ConflictPolicy(),
      fts: fts,
      migrations: migrations,
      documentMigrations: documentMigrations,
      validator: validator,
      keepUnsyncedArchives: keepUnsyncedArchives,
      prefetchFiles: prefetchFiles,
      attachmentField: attachmentField,
    );
  }

  void _verify(List<FieldDef<S, Object?>> fs) {
    final registered = HashSet<FieldDef<S, Object?>>.identity()..addAll(fs);
    for (final created in schema._created) {
      final counterpart = created.reqCounterpart;
      final isRegistered = registered.contains(created) ||
          (counterpart != null && registered.contains(counterpart));
      if (!isRegistered) {
        throw SchemaRegistrationError(
            'Store "$name": field "${created.name}" was created but is '
            'missing from the fields list. Every declared field must be '
            'listed in fields.');
      }
    }
    final seen = <String>{};
    for (final fd in fs) {
      if (!identical(fd.owner, this)) {
        throw SchemaRegistrationError(
            'Store "$name": field "${fd.name}" is not owned by this store '
            '(owner is ${fd.owner.runtimeType}). Declare fields with this '
            "store's schema factory.");
      }
      if (!seen.add(fd.name)) {
        throw SchemaRegistrationError(
            'Store "$name": duplicate field "${fd.name}".');
      }
    }
  }
}
