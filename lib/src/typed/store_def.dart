/// Store definitions: the `Fields` factory object and the `StoreDef` base
/// class that compiles descriptors into an engine `CollectionSchema`.
library;

import 'dart:collection';

import 'package:localpocket/localpocket.dart';

import 'field_def.dart';
import 'schema_helpers.dart' as schema_helpers;

/// A system field descriptor: engine-owned column (`id`/`archived`) exposed
/// for typed reads, never settable through the typed write path and never
/// part of the schema `fields` list.
final class _SystemFieldDef<S, T> extends FieldDef<S, T> {
  _SystemFieldDef(super.owner, super.name) : super(required: false);

  @override
  Field toField() => throw StateError(
      'System field "$name" is not part of the schema fields list; the '
      'engine owns the "$name" column.');
}

/// The per-store field factory (`f.`).
///
/// One instance per store, created by [StoreDef]. Each factory method
/// returns a typed descriptor whose [FieldDef.owner] is bound to the store,
/// and records it so [StoreDef.verify] can detect a descriptor that was
/// created but omitted from the `fields` list.
final class Fields<S> {
  /// Creates the field factory for [owner].
  Fields(this._owner);

  final S _owner;

  /// Every descriptor created through this factory (identity set), used by
  /// [StoreDef.verify] for the omitted-field check.
  final Set<FieldDef<S, Object?>> _created = Set.identity();

  /// Declares an optional text field.
  TextFieldOpt<S> text(String name,
      {bool uniqueWhenActive = false, bool encrypted = false}) {
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
  /// `encrypted` parameter — the engine's `Field.bool` does not support it.
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
  /// epoch milliseconds on the wire; same engine column as [date]).
  DateTimeFieldOpt<S> dateTime(String name) {
    final fd = DateTimeFieldOpt<S>(_owner, name);
    _created.add(fd);
    return fd;
  }

  /// Declares an optional enum field over [values].
  ///
  /// The default wire codec is `E.name` / name-based decoding; [wire]
  /// overrides the wire string per value (unmapped values fall back to
  /// `.name`). The engine's `Field.enumValue` receives the wire strings.
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
  /// is no `.req()` — the engine's `Field.json` has no `required`.
  JsonField<S> json(String name, {bool encrypted = false}) {
    final fd = JsonField<S>(_owner, name, encrypted: encrypted);
    _created.add(fd);
    return fd;
  }

  /// Declares a JSON-array field (`List<T>`, optional). There is no
  /// `.req()` — the engine's `Field.jsonList` has no `required`.
  JsonListField<S, T> jsonList<T>(String name, {bool encrypted = false}) {
    final fd = JsonListField<S, T>(_owner, name, encrypted: encrypted);
    _created.add(fd);
    return fd;
  }

  /// Declares a reference field (a record id, optional). There is no
  /// `.req()` — the engine's `Field.ref` has no `required`.
  RefField<S> ref(String name, {required String to, bool enforceFk = false}) {
    final fd = RefField<S>(_owner, name, to: to, enforceFk: enforceFk);
    _created.add(fd);
    return fd;
  }
}

/// The typed definition of one store: the consumer-facing home of the
/// store's field descriptors and the schema extras (`indexes`, `fts`,
/// `migrations`, `conflictPolicy`, `documentMigrations`, `validator`).
///
/// ## The canonical-instance convention
///
/// ```dart
/// final class Tasks extends StoreDef<Tasks> {
///   static final Tasks instance = Tasks._();
///   Tasks._() : super(name: 'tasks', version: 1);
///
///   late final _title = f.text('title').req();
///
///   static FieldDef<Tasks, String> get title => instance._title;
///
///   @override
///   List<FieldDef<Tasks, Object?>> get fields => [_title];
///
///   @override
///   List<IndexSpec> get indexes => [indexSpec([_title])];
///
///   @override
///   FtsSpec? get fts => ftsSpec([_title]);
/// }
/// ```
///
/// The private constructor makes a second instance unconstructible outside
/// the class, so every file in the app reaches the same definition through
/// the static accessors (`Tasks.title`). The name-keyed
/// [TypedStoreRegistry] enforces uniqueness by **reference identity** at
/// bind time as the backstop for any definition that ignores the
/// convention.
///
/// [fields] is the single, explicit, ordered registry of user fields: it
/// *references* the descriptor objects — it never restates their metadata —
/// so there is still exactly one definition per field, and column order in
/// the compiled [schema] is list order (deterministic, independent of
/// declaration/access order). System columns (`id`, `archived`) are exposed
/// through [id]/[archived] and are **not** part of [fields].
abstract base class StoreDef<S extends StoreDef<S>> {
  /// Creates a store definition.
  StoreDef({required this.name, this.version = 1});

  /// Collection (and SQLite table) name.
  final String name;

  /// Monotonically increasing local schema version.
  final int version;

  /// The bound field factory. Descriptors are declared as
  /// `late final _title = f.text('title').req();` — `f.` avoids shadowing
  /// the `int`/`bool` type names inside the class body and binds each
  /// descriptor's owner without writing `this` per declaration.
  late final Fields<S> f = Fields<S>(this as S);

  /// The ordered registry of user fields. Descriptors are referenced, not
  /// restated: each field is declared exactly once, as a `late final`
  /// member initialized through [f].
  List<FieldDef<S, Object?>> get fields;

  /// Builds an index for this store from its field descriptors.
  ///
  /// The receiver fixes the owner type [S], so a foreign descriptor is an
  /// analysis error. Use the top-level `indexSpec` helper from
  /// `schema_helpers.dart` outside a [StoreDef]. When a list combines
  /// different descriptor subtypes, use an explicit list type such as
  /// `indexSpec(<FieldDef<S, Object?>>[first, second])`.
  IndexSpec indexSpec(
    List<FieldDef<S, Object?>> fields, {
    bool unique = false,
    IndexScope scope = IndexScope.live,
  }) =>
      schema_helpers.indexSpec<S>(fields, unique: unique, scope: scope);

  /// Builds an FTS declaration for this store from its field descriptors.
  ///
  /// The receiver fixes the owner type [S], so a foreign descriptor is an
  /// analysis error. Use the top-level `ftsSpec` helper from
  /// `schema_helpers.dart` outside a [StoreDef]. It is named `ftsSpec`
  /// rather than `fts` because that name is already occupied by this class's
  /// FTS getter.
  FtsSpec ftsSpec(
    List<FieldDef<S, Object?>> fields, {
    bool fuzzy = false,
    FtsNormalization normalize = const FtsNormalization(),
  }) =>
      schema_helpers.ftsSpec<S>(fields, fuzzy: fuzzy, normalize: normalize);

  /// Schema indexes, forwarded verbatim to the engine.
  ///
  /// Prefer the typed [indexSpec] helper so column names come from this store's
  /// field descriptors. Raw [IndexSpec] values remain supported for dynamic
  /// declarations and engine-boundary schemas. Helper-based declarations are
  /// non-const because descriptors are runtime objects.
  List<IndexSpec> get indexes => const [];

  /// Optional FTS5 configuration, forwarded verbatim to the engine.
  ///
  /// Prefer [ftsSpec] to derive FTS field names from this store's descriptors.
  /// The helper is intentionally named `ftsSpec`, not `fts`, because this
  /// getter already occupies the `fts` name. Raw [FtsSpec] values remain
  /// supported, and helper-based declarations are non-const.
  FtsSpec? get fts => null;

  /// Forward store migrations, forwarded verbatim to the engine.
  List<StoreMigration> get migrations => const [];

  /// Conflict resolution policy; `null` means the engine's default
  /// `ConflictPolicy()`.
  ConflictPolicy? get conflictPolicy => null;

  /// Lazy document-format migrations keyed by target version, forwarded
  /// verbatim to the engine.
  Map<int, DocumentMigration> get documentMigrations => const {};

  /// Optional application-level validation callback, forwarded verbatim to
  /// the engine.
  List<String> Function(Map<String, Object?> record)? get validator => null;

  /// The system `id` descriptor (engine-owned record id column). Readable
  /// and queryable, never settable through the typed write path.
  late final FieldDef<S, String> id =
      _SystemFieldDef<S, String>(this as S, 'id');

  /// The system `archived` descriptor (engine-owned archive flag). Readable
  /// and queryable; `archive()`/`restore()` own that state transition.
  late final FieldDef<S, bool> archived =
      _SystemFieldDef<S, bool>(this as S, 'archived');

  /// The compiled engine schema, memoized: repeated reads return the
  /// identical instance. Compilation forces [fields] first (deterministic
  /// column order), runs [verify], then maps each descriptor through its
  /// [FieldDef.toField].
  late final CollectionSchema<Object?> schema = _compile();

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
    );
  }

  /// Verifies that [registered] is exactly the engine schema compiled by
  /// this definition. A typed handle must never interpret a same-name raw
  /// schema with different fields, constraints, codecs, or versions.
  void verifyRegisteredSchema(CollectionSchema<Object?> registered) {
    final expectedJson = canonicalize(schema.toJson());
    final registeredJson = canonicalize(registered.toJson());
    if (expectedJson != registeredJson) {
      throw TypedStoreMismatchError(
        'Typed definition "$name" does not match the schema registered in '
        'this LocalPocket instance.',
      );
    }
  }

  /// Verifies the definition and throws a [StateError] on the first
  /// inconsistency:
  ///
  /// - a descriptor created through [f] but **omitted from [fields]** —
  ///   a field left out is an error, never silently dropped. (An
  ///   unforced `late final` descriptor is invisible — no mirrors — so the
  ///   check covers every descriptor that has actually been created,
  ///   e.g. through a static accessor);
  /// - a **foreign descriptor** whose [FieldDef.owner] is not this store;
  /// - a **duplicate column name**.
  ///
  /// Reserved-name and identifier checks stay with the engine
  /// (`DdlCompiler`/`Field.validateName`) and fire unchanged at
  /// registration; the nullability guard (`required: true` + nullable `T`)
  /// fires at descriptor construction, before [verify] can observe it.
  void verify() => _verify(fields);

  void _verify(List<FieldDef<S, Object?>> fs) {
    final registered = HashSet<FieldDef<S, Object?>>.identity()..addAll(fs);
    for (final created in f._created) {
      final counterpart = created.reqCounterpart;
      final isRegistered = registered.contains(created) ||
          (counterpart != null && registered.contains(counterpart));
      if (!isRegistered) {
        throw StateError(
            'Store "$name": field "${created.name}" was created but is '
            'missing from the fields list. Every declared field must be '
            'listed in fields.');
      }
    }
    final seen = <String>{};
    for (final fd in fs) {
      if (!identical(fd.owner, this)) {
        throw StateError(
            'Store "$name": field "${fd.name}" is not owned by this store '
            '(owner is ${fd.owner.runtimeType}). Declare fields with this '
            "store's f. factory.");
      }
      if (!seen.add(fd.name)) {
        throw StateError('Store "$name": duplicate field "${fd.name}".');
      }
    }
  }
}
