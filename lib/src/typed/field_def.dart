/// Typed field descriptors: the one declaration per field that is
/// simultaneously the schema declaration and the compile-time-typed
/// accessor.
///
/// Each descriptor **wraps** the database's public `Field` factories — it
/// never extends `Field` (the database class has a private constructor).
/// the database continues to see plain maps and plain `Field`s; typing lives
/// entirely at this consumer-facing boundary.
library;

import 'package:localpocket/src/core/errors.dart';
import 'package:localpocket/src/core/schema.dart';
import 'package:localpocket/src/typed/cond.dart';

/// Decodes a raw stored value into a value of type `T`.
typedef FieldDecodeFn<T> = T Function(Object? raw);

/// Encodes a value of type `T` into its raw logical-map form.
typedef FieldEncodeFn<T> = Object? Function(T value);

/// A typed field descriptor for store type [S] holding logical values of
/// type [T].
///
/// The base class holds no state of type [T]: [T] appears only in member
/// signatures ([decode]/[encode]), never in stored values. That is what
/// makes the `.req()` nullability flip sound with no cast — an optional
/// descriptor's `.req()` returns a *new* descriptor whose static type is
/// non-nullable, and the non-nullable [decode] is the only thing that
/// changed.
///
/// [owner] is the store definition instance this field belongs to
/// (the phantom store type [S] binds it for compile-time cross-store
/// checks); [required] marks a non-nullable field.
abstract base class FieldDef<S, T> {
  /// [decode]/[encode] default to an unchecked cast / identity; kinds with a
  /// boundary codec (enum, dateTime) pass closures instead. A defense-in-depth
  /// guard rejects the impossible combination `required: true` with a
  /// nullable [T] — such a descriptor can only be built by hand, never by
  /// the [Fields] factories.
  FieldDef(
    this.owner,
    this.name, {
    required this.required,
    FieldDecodeFn<T>? decode,
    FieldEncodeFn<T>? encode,
  })  : _decode = decode,
        _encode = encode {
    if (required && null is T) {
      throw StateError(
          'FieldDef<$T> "$name" on store "$owner": required: true cannot be '
          'combined with a nullable value type.');
    }
  }

  /// The store definition this field belongs to.
  final S owner;

  /// Column / record key name.
  final String name;

  /// Whether the field must hold a non-null value.
  final bool required;

  final FieldDecodeFn<T>? _decode;
  final FieldEncodeFn<T>? _encode;

  /// Decodes a raw stored value into [T].
  T decode(Object? raw) => _decode == null ? raw as T : _decode!(raw);

  /// Encodes a value of type [T] into its raw logical-map form.
  Object? encode(T value) => _encode == null ? value : _encode!(value);

  /// Builds the database [Field] this descriptor maps to.
  ///
  /// This is the single place the kind → `Field` factory mapping lives, so
  /// a descriptor can never disagree with the database about constraints.
  Field toField();

  // ---------------------------------------------------------------------
  // Universal query family: conditions and order terms are VALUES built
  // beside the descriptor — this call site is where the field's value type
  // is enforced. Query entry points accept them as plain named-argument
  // lists (`TypedCollection.query(where: [...])`) and stay fully typed.
  // ---------------------------------------------------------------------

  /// `field == value` — also the only condition kind an OR group accepts
  /// (its static type is [EqCond], so a range condition cannot enter
  /// `anyOf`).
  ///
  /// For an optional field, `eq(null)` reads as SQL `IS NULL` (the typed
  /// layer routes it there; SQL `= NULL` never matches). On a required
  /// field the null case is a compile error because the value type is
  /// non-nullable.
  EqCond<S> eq(T value) => EqCond<S>(owner, name, encode(value));

  /// `field <> value`.
  ///
  /// For an optional field, `neq(null)` reads as SQL `IS NOT NULL`.
  Cond<S> neq(T value) => Cond<S>(owner, name, 'neq', <Object?>[encode(value)]);

  /// `field IN (values)`. The list must not be empty — the database would
  /// otherwise emit invalid SQL.
  Cond<S> inValues(List<T> values) {
    if (values.isEmpty) {
      throw ArgumentError.value(values, 'values', 'inValues cannot be empty.');
    }
    return Cond<S>(owner, name, 'inValues',
        <Object?>[for (final value in values) encode(value)]);
  }

  /// `field BETWEEN a AND b` — inclusive on both ends, matching SQL
  /// `BETWEEN`. For a half-open window use `gte(a)` with `lt(b)`.
  Cond<S> between(T a, T b) =>
      Cond<S>(owner, name, 'between', <Object?>[encode(a), encode(b)]);

  /// Ascending order term for this field.
  OrderTerm<S> get asc => OrderTerm<S>(this, desc: false);

  /// Descending order term for this field.
  OrderTerm<S> get desc => OrderTerm<S>(this, desc: true);

  /// For an optional descriptor: the required counterpart returned by the
  /// most recent `req()` call, or `null` if `req()` was never called.
  /// Required descriptors return `null`.
  ///
  /// This is bookkeeping for `StoreDef.verify()` (detecting a field that
  /// was created through `f.` but omitted from the `fields` list) — normal
  /// consumers never need it.
  FieldDef<S, Object?>? get reqCounterpart => null;

  @override
  String toString() => 'FieldDef<$T>("$name")';
}

/// Decodes [raw] through [field] and wraps any failure other than a
/// [ValidationException] in one naming the field — a corrupt stored value
/// never surfaces as a bare cast error.
V decodeStored<V>(FieldDef<Object?, V> field, Object? raw) {
  try {
    return field.decode(raw);
  } on ValidationException {
    rethrow;
  } catch (error) {
    throw ValidationException(
      'Field "${field.name}" could not be decoded from its stored value: '
      '$error',
      field: field.name,
    );
  }
}

/// Marker for descriptors whose values are writable through field-native
/// writes (`field.set(value)` collected into `put([...])` / `patch(...)`).
///
/// Every user-field descriptor implements this; the system descriptors
/// (`StoreDef.id`, `StoreDef.archived`) deliberately do not — so
/// `Tasks.instance.id.set(...)` is a compile error, while typed reads
/// remain available on every [FieldDef].
abstract base class SettableFieldDef<S, T> implements FieldDef<S, T> {}

/// Marker implemented only by descriptor kinds accepted by typed numeric
/// aggregate terminals.
abstract interface class NumericFieldDef<S> {
  /// The canonical store definition instance that owns the field.
  S get owner;

  /// the database field name.
  String get name;
}

// ---------------------------------------------------------------------------
// text
// ---------------------------------------------------------------------------

/// Optional (nullable [String]) text descriptor.
base class TextFieldOpt<S> extends FieldDef<S, String?>
    with TextFieldDef<S, String?>, NullableFieldCond<S, String?>
    implements SettableFieldDef<S, String?> {
  /// Creates an optional text descriptor.
  TextFieldOpt(
    super.owner,
    super.name, {
    this.uniqueWhenActive = false,
    this.encrypted = false,
  }) : super(required: false);

  /// Whether non-archived records must have unique values (text-only
  /// constraint — it exists only on `Field.text`).
  final bool uniqueWhenActive;

  /// Whether the value is encrypted at rest.
  final bool encrypted;

  TextFieldReq<S>? _req;

  /// Returns the required (non-nullable [String]) counterpart descriptor.
  ///
  /// Repeat calls return the same descriptor instance.
  TextFieldReq<S> req() => _req ??= TextFieldReq<S>(owner, name,
      uniqueWhenActive: uniqueWhenActive, encrypted: encrypted);

  @override
  Field toField() => Field.text(name,
      required: false,
      uniqueWhenActive: uniqueWhenActive,
      encrypted: encrypted);

  @override
  FieldDef<S, Object?>? get reqCounterpart => _req;
}

/// Required (non-nullable [String]) text descriptor.
final class TextFieldReq<S> extends FieldDef<S, String>
    with TextFieldDef<S, String>
    implements SettableFieldDef<S, String> {
  /// Creates a required text descriptor.
  TextFieldReq(
    super.owner,
    super.name, {
    this.uniqueWhenActive = false,
    this.encrypted = false,
  }) : super(required: true);

  /// Whether non-archived records must have unique values.
  final bool uniqueWhenActive;

  /// Whether the value is encrypted at rest.
  final bool encrypted;

  @override
  Field toField() => Field.text(name,
      required: true, uniqueWhenActive: uniqueWhenActive, encrypted: encrypted);
}

// ---------------------------------------------------------------------------
// int
// ---------------------------------------------------------------------------

/// Optional (nullable [int]) integer descriptor.
base class IntFieldOpt<S> extends FieldDef<S, int?>
    with ComparableFieldDef<S, int?>, NullableFieldCond<S, int?>
    implements SettableFieldDef<S, int?>, NumericFieldDef<S> {
  /// Creates an optional integer descriptor.
  IntFieldOpt(super.owner, super.name, {this.encrypted = false})
      : super(required: false);

  /// Whether the value is encrypted at rest.
  final bool encrypted;

  IntFieldReq<S>? _req;

  /// Returns the required (non-nullable [int]) counterpart descriptor.
  IntFieldReq<S> req() =>
      _req ??= IntFieldReq<S>(owner, name, encrypted: encrypted);

  @override
  Field toField() => Field.int(name, required: false, encrypted: encrypted);

  @override
  FieldDef<S, Object?>? get reqCounterpart => _req;
}

/// Required (non-nullable [int]) integer descriptor.
final class IntFieldReq<S> extends FieldDef<S, int>
    with ComparableFieldDef<S, int>
    implements SettableFieldDef<S, int>, NumericFieldDef<S> {
  /// Creates a required integer descriptor.
  IntFieldReq(super.owner, super.name, {this.encrypted = false})
      : super(required: true);

  /// Whether the value is encrypted at rest.
  final bool encrypted;

  @override
  Field toField() => Field.int(name, required: true, encrypted: encrypted);
}

// ---------------------------------------------------------------------------
// real
// ---------------------------------------------------------------------------

/// Optional (nullable [num]) real-number descriptor.
base class RealFieldOpt<S> extends FieldDef<S, num?>
    with ComparableFieldDef<S, num?>, NullableFieldCond<S, num?>
    implements SettableFieldDef<S, num?>, NumericFieldDef<S> {
  /// Creates an optional real descriptor.
  RealFieldOpt(super.owner, super.name, {this.encrypted = false})
      : super(required: false);

  /// Whether the value is encrypted at rest.
  final bool encrypted;

  RealFieldReq<S>? _req;

  /// Returns the required (non-nullable [num]) counterpart descriptor.
  RealFieldReq<S> req() =>
      _req ??= RealFieldReq<S>(owner, name, encrypted: encrypted);

  @override
  Field toField() => Field.real(name, required: false, encrypted: encrypted);

  @override
  FieldDef<S, Object?>? get reqCounterpart => _req;
}

/// Required (non-nullable [num]) real-number descriptor.
final class RealFieldReq<S> extends FieldDef<S, num>
    with ComparableFieldDef<S, num>
    implements SettableFieldDef<S, num>, NumericFieldDef<S> {
  /// Creates a required real descriptor.
  RealFieldReq(super.owner, super.name, {this.encrypted = false})
      : super(required: true);

  /// Whether the value is encrypted at rest.
  final bool encrypted;

  @override
  Field toField() => Field.real(name, required: true, encrypted: encrypted);
}

// ---------------------------------------------------------------------------
// bool
// ---------------------------------------------------------------------------

/// Optional (nullable [bool]) boolean descriptor.
///
/// `schema.boolean` deliberately has **no** `encrypted` parameter: the database's
/// `Field.bool` does not support encryption, so the impossible constraint
/// is unspellable rather than a runtime error.
base class BoolFieldOpt<S> extends FieldDef<S, bool?>
    with NullableFieldCond<S, bool?>
    implements SettableFieldDef<S, bool?> {
  /// Creates an optional boolean descriptor.
  BoolFieldOpt(super.owner, super.name) : super(required: false);

  BoolFieldReq<S>? _req;

  /// Returns the required (non-nullable [bool]) counterpart descriptor.
  BoolFieldReq<S> req() => _req ??= BoolFieldReq<S>(owner, name);

  @override
  Field toField() => Field.bool(name, required: false);

  @override
  FieldDef<S, Object?>? get reqCounterpart => _req;
}

/// Required (non-nullable [bool]) boolean descriptor.
final class BoolFieldReq<S> extends FieldDef<S, bool>
    implements SettableFieldDef<S, bool> {
  /// Creates a required boolean descriptor.
  BoolFieldReq(super.owner, super.name) : super(required: true);

  @override
  Field toField() => Field.bool(name, required: true);
}

// ---------------------------------------------------------------------------
// date
// ---------------------------------------------------------------------------

/// Optional (nullable [int]) date descriptor.
///
/// The logical type is epoch milliseconds — the database's type for
/// `Field.date`. This adapter is pass-through (no `DateTime` conversion);
/// use `schema.dateTime` for a `DateTime` boundary codec over the same column.
base class DateFieldOpt<S> extends FieldDef<S, int?>
    with ComparableFieldDef<S, int?>, NullableFieldCond<S, int?>
    implements SettableFieldDef<S, int?>, NumericFieldDef<S> {
  /// Creates an optional date descriptor.
  DateFieldOpt(super.owner, super.name) : super(required: false);

  DateFieldReq<S>? _req;

  /// Returns the required (non-nullable [int]) counterpart descriptor.
  DateFieldReq<S> req() => _req ??= DateFieldReq<S>(owner, name);

  @override
  Field toField() => Field.date(name, required: false);

  @override
  FieldDef<S, Object?>? get reqCounterpart => _req;
}

/// Required (non-nullable [int]) date descriptor.
final class DateFieldReq<S> extends FieldDef<S, int>
    with ComparableFieldDef<S, int>
    implements SettableFieldDef<S, int>, NumericFieldDef<S> {
  /// Creates a required date descriptor.
  DateFieldReq(super.owner, super.name) : super(required: true);

  @override
  Field toField() => Field.date(name, required: true);
}

// ---------------------------------------------------------------------------
// dateTime
// ---------------------------------------------------------------------------

/// Shared UTC boundary codec for the date-time descriptor pair. Decode
/// produces an `isUtc: true` value; encode converts through
/// [DateTime.toUtc] before extracting epoch milliseconds, so the two
/// adapters are interchangeable on the wire over the same column.
DateTime? _decodeUtcOpt(String name, Object? raw) =>
    raw == null ? null : _decodeUtcReq(name, raw);

DateTime _decodeUtcReq(String name, Object? raw) {
  if (raw is! int) {
    throw ValidationException(
      'Field "$name" requires an epoch-milliseconds integer value.',
      field: name,
    );
  }
  return DateTime.fromMillisecondsSinceEpoch(raw, isUtc: true);
}

Object? _encodeUtc(DateTime? value) => value?.toUtc().millisecondsSinceEpoch;

/// Optional (nullable [DateTime]) date-time descriptor.
///
/// Maps to the same `Field.date` column as [DateFieldOpt] — only the
/// boundary codec differs. Both directions are **UTC-pinned**: decode
/// produces an `isUtc: true` value and encode converts through
/// [DateTime.toUtc] before extracting epoch milliseconds, so the two
/// adapters are interchangeable on the wire over the same column.
base class DateTimeFieldOpt<S> extends FieldDef<S, DateTime?>
    with ComparableFieldDef<S, DateTime?>, NullableFieldCond<S, DateTime?>
    implements SettableFieldDef<S, DateTime?> {
  /// Creates an optional date-time descriptor.
  DateTimeFieldOpt(super.owner, super.name)
      : super(
          required: false,
          decode: (raw) => _decodeUtcOpt(name, raw),
          encode: _encodeUtc,
        );

  DateTimeFieldReq<S>? _req;

  /// Returns the required (non-nullable [DateTime]) counterpart descriptor.
  DateTimeFieldReq<S> req() => _req ??= DateTimeFieldReq<S>(owner, name);

  @override
  Field toField() => Field.date(name, required: false);

  @override
  FieldDef<S, Object?>? get reqCounterpart => _req;
}

/// Required (non-nullable [DateTime]) date-time descriptor.
final class DateTimeFieldReq<S> extends FieldDef<S, DateTime>
    with ComparableFieldDef<S, DateTime>
    implements SettableFieldDef<S, DateTime> {
  /// Creates a required date-time descriptor.
  DateTimeFieldReq(super.owner, super.name) : super(required: true);

  @override
  DateTime decode(Object? raw) => _decodeUtcReq(name, raw);

  @override
  Object? encode(DateTime value) => _encodeUtc(value);

  @override
  Field toField() => Field.date(name, required: true);
}

// ---------------------------------------------------------------------------
// enum
// ---------------------------------------------------------------------------

/// Shared enum codec members for the optional/required enum descriptor
/// pair: the value snapshot, the wire mapping, and the raw decode.
base mixin EnumCodec<E extends Enum> {
  /// The database field name this codec is bound to (from the descriptor).
  String get name;

  /// The accepted enum values. This snapshot cannot diverge after schema
  /// compilation even if the caller later mutates its source list.
  abstract final List<E> values;

  /// Per-value wire-string overrides; unmapped values use [Enum.name].
  abstract final Map<E, String> wire;

  /// The wire string for [value].
  String wireOf(E value) => wire[value] ?? value.name;

  /// Shared raw decode: `null` passes through when [nullable], otherwise it
  /// is a required-field error; a non-string or unknown wire string fails
  /// with a [ValidationException] naming the field.
  E? decodeEnumRaw(String name, Object? raw, {required bool nullable}) {
    if (raw == null) {
      if (nullable) return null;
      throw ValidationException('Field "$name" is required.', field: name);
    }
    if (raw is! String) {
      throw ValidationException(
          'Value "$raw" is not a string for enum field "$name".',
          field: name);
    }
    for (final value in values) {
      if (wireOf(value) == raw) return value;
    }
    throw ValidationException(
        'Value "$raw" is not a member of enum field "$name".',
        field: name);
  }

  /// Builds the database enum field over this descriptor's wire strings, so
  /// its CHECK constraint can never disagree with the enum's members.
  Field toEnumField({required bool required}) => Field.enumValue(
        name,
        [for (final v in values) wireOf(v)],
        required: required,
      );
}

/// Optional (nullable [E]) enum descriptor.
///
/// Encodes to the wire string by default (`E.name`) with optional per-value
/// [wire] overrides (unmapped values fall back to `.name`).
base class EnumFieldOpt<S, E extends Enum> extends FieldDef<S, E?>
    with NullableFieldCond<S, E?>, EnumCodec<E>
    implements SettableFieldDef<S, E?> {
  /// Creates an optional enum descriptor.
  EnumFieldOpt(super.owner, super.name, List<E> values, {Map<E, String>? wire})
      : values = List.unmodifiable(values),
        wire = Map.unmodifiable(wire ?? const {}),
        super(required: false) {
    _verifyEnumCodec(name, this.values, this.wire);
  }

  @override
  final List<E> values;

  @override
  final Map<E, String> wire;

  @override
  E? decode(Object? raw) => decodeEnumRaw(name, raw, nullable: true);

  @override
  Object? encode(E? value) => value == null ? null : wireOf(value);

  EnumFieldReq<S, E>? _req;

  /// Returns the required (non-nullable [E]) counterpart descriptor.
  EnumFieldReq<S, E> req() =>
      _req ??= EnumFieldReq<S, E>(owner, name, values, wire: wire);

  @override
  Field toField() => toEnumField(required: false);

  @override
  FieldDef<S, Object?>? get reqCounterpart => _req;
}

/// Required (non-nullable [E]) enum descriptor.
final class EnumFieldReq<S, E extends Enum> extends FieldDef<S, E>
    with EnumCodec<E>
    implements SettableFieldDef<S, E> {
  /// Creates a required enum descriptor.
  EnumFieldReq(super.owner, super.name, List<E> values, {Map<E, String>? wire})
      : values = List.unmodifiable(values),
        wire = Map.unmodifiable(wire ?? const {}),
        super(required: true) {
    _verifyEnumCodec(name, this.values, this.wire);
  }

  @override
  final List<E> values;

  @override
  final Map<E, String> wire;

  @override
  E decode(Object? raw) => decodeEnumRaw(name, raw, nullable: false)!;

  @override
  Object? encode(E value) => wireOf(value);

  @override
  Field toField() => toEnumField(required: true);
}

void _verifyEnumCodec<E extends Enum>(
  String name,
  List<E> values,
  Map<E, String> wire,
) {
  if (values.toSet().length != values.length) {
    throw StateError('Enum field "$name" contains duplicate values.');
  }
  final accepted = values.toSet();
  final foreignOverrides =
      wire.keys.where((value) => !accepted.contains(value));
  if (foreignOverrides.isNotEmpty) {
    throw StateError(
      'Enum field "$name" has wire overrides for values it does not accept.',
    );
  }
  final wireNames = <String>{};
  for (final value in values) {
    final encoded = wire[value] ?? value.name;
    if (!wireNames.add(encoded)) {
      throw StateError(
        'Enum field "$name" maps multiple values to wire name "$encoded".',
      );
    }
  }
}

// ---------------------------------------------------------------------------
// json / jsonList / ref (no `required` — the engine factories have none)
// ---------------------------------------------------------------------------

/// JSON-object descriptor (`Map<String, Object?>`), optional by definition.
///
/// There is no `.req()` and no `required` flag: the database's `Field.json`
/// has no `required` parameter, so the impossible constraint is
/// unspellable. (The raw path also admits a `List` here — a documented
/// asymmetry; the typed surface is the stricter one.)
final class JsonField<S> extends FieldDef<S, Map<String, Object?>?>
    with NullableFieldCond<S, Map<String, Object?>?>
    implements SettableFieldDef<S, Map<String, Object?>?> {
  /// Creates a JSON-object descriptor.
  JsonField(super.owner, super.name, {this.encrypted = false})
      : super(required: false);

  /// Whether the value is encrypted at rest.
  final bool encrypted;

  @override
  Field toField() => Field.json(name, encrypted: encrypted);
}

/// JSON-array descriptor (`List<T>`), optional by definition.
final class JsonListField<S, T> extends FieldDef<S, List<T>?>
    with NullableFieldCond<S, List<T>?>
    implements SettableFieldDef<S, List<T>?> {
  /// Creates a JSON-array descriptor.
  JsonListField(super.owner, super.name, {this.encrypted = false})
      : super(required: false);

  /// Whether the value is encrypted at rest.
  final bool encrypted;

  @override
  List<T>? decode(Object? raw) {
    if (raw == null) return null;
    if (raw is! List) {
      throw ValidationException('Field "$name" must hold a JSON array.',
          field: name);
    }
    // jsonDecode yields `List<dynamic>`; cast per element so a well-formed
    // list decodes and an off-contract element fails loudly.
    return [for (final e in raw) e as T];
  }

  @override
  Field toField() => Field.jsonList(name, encrypted: encrypted);
}

/// Reference descriptor (a record id of type [String]), optional by
/// definition.
///
/// There is no `.req()` and no `required` flag: the database's `Field.ref`
/// has no `required` parameter.
final class RefField<S> extends FieldDef<S, String?>
    with NullableFieldCond<S, String?>
    implements SettableFieldDef<S, String?> {
  /// Creates a reference descriptor.
  RefField(
    super.owner,
    super.name, {
    required this.to,
    this.enforceFk = false,
  }) : super(required: false);

  /// The referenced collection name.
  final String to;

  /// Whether SQLite should enforce the reference as a foreign key.
  final bool enforceFk;

  @override
  Field toField() => Field.ref(name, to: to, enforceFk: enforceFk);
}
