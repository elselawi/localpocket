/// Typed field descriptors: one declaration per field, serving as both the
/// schema declaration and the compile-time-typed accessor.
///
/// Each descriptor **wraps** the database's public `Field` factories — it
/// never extends `Field` (the database class has a private constructor).
/// The database continues to see plain maps and plain `Field`s; typing lives
/// entirely at this consumer-facing boundary.
library;

import 'package:localpocket/src/kernel/errors.dart';
import 'package:localpocket/src/kernel/schema.dart';
import 'cond.dart';

/// Decodes a raw stored value into a value of type `T`.
typedef FieldDecodeFn<T> = T Function(Object? raw);

/// Encodes a value of type `T` into its raw logical-map form.
typedef FieldEncodeFn<T> = Object? Function(T value);

/// {@template localpocket.field_def}
/// A typed field descriptor for store type [S] holding logical values of
/// type [T].
///
/// The base class holds no state of type [T]: [T] appears only in member
/// signatures ([decode]/[encode]), never in stored values — that is what
/// makes the `.req()` nullability flip sound with no cast.
///
/// [owner] is the store definition instance this field belongs to
/// (the phantom store type [S] binds it for compile-time cross-store
/// checks); [required] marks a non-nullable field.
/// {@endtemplate}
abstract base class FieldDef<S, T> {
  /// [decode]/[encode] default to an unchecked cast / identity; kinds with a
  /// boundary codec (enum, dateTime) pass closures instead. A guard rejects
  /// `required: true` with a nullable [T] — hand-buildable only, never via
  /// the [Fields] factories.
  ///
  /// {@macro localpocket.field_def}
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

  /// Builds the database [Field] this descriptor maps to — the single place
  /// the kind → `Field` factory mapping lives, so constraints can never
  /// diverge.
  Field toField();

  // Universal query family: conditions/order terms are values built beside
  // the descriptor — this call site is where the value type is enforced.

  /// `field == value`. For an optional field, `eq(null)` reads as SQL
  /// `IS NULL` (the typed layer routes it there; SQL `= NULL` never matches);
  /// on a required field the null case is a compile error.
  ///
  /// Conditions compose into boolean trees with `&`, `|`, and `~` —
  /// `~field.eq(v)` spells not-equal.
  FieldCond<S> eq(T value) =>
      FieldCond<S>(owner, name, 'eq', <Object?>[encode(value)]);

  /// `field IN (values)`. The list must not be empty — the database would
  /// otherwise emit invalid SQL. A `null` member is rejected: SQL `IN (NULL)`
  /// never matches, so the condition would silently shrink the result set
  /// (`eq(null)` has real IS NULL semantics; `inValues` does not).
  FieldCond<S> inValues(List<T> values) {
    if (values.isEmpty) {
      throw ArgumentError.value(values, 'values', 'inValues cannot be empty.');
    }
    if (values.contains(null)) {
      throw ArgumentError.value(
          values, 'values', 'inValues cannot contain null — use isNull().');
    }
    return FieldCond<S>(owner, name, 'inValues',
        <Object?>[for (final value in values) encode(value)]);
  }

  /// `field BETWEEN a AND b` — inclusive on both ends. For a half-open
  /// window use `gte(a)` with `lt(b)`. A `null` bound is rejected: it would
  /// compile to SQL that never matches.
  FieldCond<S> between(T a, T b) {
    if (a == null || b == null) {
      throw ArgumentError.value(
          null, 'a/b', 'between(null, …) never matches — use isNull().');
    }
    return FieldCond<S>(
        owner, name, 'between', <Object?>[encode(a), encode(b)]);
  }

  /// Ascending order term for this field.
  OrderTerm<S> get asc => OrderTerm<S>(this, desc: false);

  /// Descending order term for this field.
  OrderTerm<S> get desc => OrderTerm<S>(this, desc: true);

  /// The required counterpart of an optional descriptor after `req()`; null
  /// otherwise. Bookkeeping for `StoreDef.verify()` (omitted-field check) —
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
/// `Tasks.store.id.set(...)` is a compile error, while typed reads
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

// text

/// {@template localpocket.text_field_opt}
/// Optional (nullable [String]) text descriptor.
/// {@endtemplate}
base class TextFieldOpt<S> extends FieldDef<S, String?>
    with TextFieldDef<S, String?>, NullableFieldCond<S, String?>
    implements SettableFieldDef<S, String?> {
  /// Creates an optional text descriptor.
  ///
  /// {@macro localpocket.text_field_opt}
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

/// {@template localpocket.text_field_req}
/// Required (non-nullable [String]) text descriptor.
/// {@endtemplate}
final class TextFieldReq<S> extends FieldDef<S, String>
    with TextFieldDef<S, String>
    implements SettableFieldDef<S, String> {
  /// Creates a required text descriptor.
  ///
  /// {@macro localpocket.text_field_req}
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

// int

/// {@template localpocket.int_field_opt}
/// Optional (nullable [int]) integer descriptor.
/// {@endtemplate}
base class IntFieldOpt<S> extends FieldDef<S, int?>
    with ComparableFieldDef<S, int?>, NullableFieldCond<S, int?>
    implements SettableFieldDef<S, int?>, NumericFieldDef<S> {
  /// Creates an optional integer descriptor.
  ///
  /// {@macro localpocket.int_field_opt}
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

/// {@template localpocket.int_field_req}
/// Required (non-nullable [int]) integer descriptor.
/// {@endtemplate}
final class IntFieldReq<S> extends FieldDef<S, int>
    with ComparableFieldDef<S, int>
    implements SettableFieldDef<S, int>, NumericFieldDef<S> {
  /// Creates a required integer descriptor.
  ///
  /// {@macro localpocket.int_field_req}
  IntFieldReq(super.owner, super.name, {this.encrypted = false})
      : super(required: true);

  /// Whether the value is encrypted at rest.
  final bool encrypted;

  @override
  Field toField() => Field.int(name, required: true, encrypted: encrypted);
}

// real

/// {@template localpocket.real_field_opt}
/// Optional (nullable [num]) real-number descriptor.
/// {@endtemplate}
base class RealFieldOpt<S> extends FieldDef<S, num?>
    with ComparableFieldDef<S, num?>, NullableFieldCond<S, num?>
    implements SettableFieldDef<S, num?>, NumericFieldDef<S> {
  /// Creates an optional real descriptor.
  ///
  /// {@macro localpocket.real_field_opt}
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

/// {@template localpocket.real_field_req}
/// Required (non-nullable [num]) real-number descriptor.
/// {@endtemplate}
final class RealFieldReq<S> extends FieldDef<S, num>
    with ComparableFieldDef<S, num>
    implements SettableFieldDef<S, num>, NumericFieldDef<S> {
  /// Creates a required real descriptor.
  ///
  /// {@macro localpocket.real_field_req}
  RealFieldReq(super.owner, super.name, {this.encrypted = false})
      : super(required: true);

  /// Whether the value is encrypted at rest.
  final bool encrypted;

  @override
  Field toField() => Field.real(name, required: true, encrypted: encrypted);
}

// bool

/// {@template localpocket.bool_field_opt}
/// Optional (nullable [bool]) boolean descriptor.
///
/// `schema.boolean` has **no** `encrypted` parameter: the database's
/// `Field.bool` does not support encryption, so the impossible constraint
/// is unspellable.
/// {@endtemplate}
base class BoolFieldOpt<S> extends FieldDef<S, bool?>
    with NullableFieldCond<S, bool?>
    implements SettableFieldDef<S, bool?> {
  /// Creates an optional boolean descriptor.
  ///
  /// {@macro localpocket.bool_field_opt}
  BoolFieldOpt(super.owner, super.name) : super(required: false);

  BoolFieldReq<S>? _req;

  /// Returns the required (non-nullable [bool]) counterpart descriptor.
  BoolFieldReq<S> req() => _req ??= BoolFieldReq<S>(owner, name);

  @override
  Field toField() => Field.bool(name, required: false);

  @override
  FieldDef<S, Object?>? get reqCounterpart => _req;
}

/// {@template localpocket.bool_field_req}
/// Required (non-nullable [bool]) boolean descriptor.
/// {@endtemplate}
final class BoolFieldReq<S> extends FieldDef<S, bool>
    implements SettableFieldDef<S, bool> {
  /// Creates a required boolean descriptor.
  ///
  /// {@macro localpocket.bool_field_req}
  BoolFieldReq(super.owner, super.name) : super(required: true);

  @override
  Field toField() => Field.bool(name, required: true);
}

// date

/// {@template localpocket.date_field_opt}
/// Optional (nullable [int]) date descriptor.
///
/// Logical type is epoch milliseconds (the database's `Field.date` type);
/// pass-through, no `DateTime` conversion — use `schema.dateTime` for that.
/// {@endtemplate}
base class DateFieldOpt<S> extends FieldDef<S, int?>
    with ComparableFieldDef<S, int?>, NullableFieldCond<S, int?>
    implements SettableFieldDef<S, int?>, NumericFieldDef<S> {
  /// Creates an optional date descriptor.
  ///
  /// {@macro localpocket.date_field_opt}
  DateFieldOpt(super.owner, super.name) : super(required: false);

  DateFieldReq<S>? _req;

  /// Returns the required (non-nullable [int]) counterpart descriptor.
  DateFieldReq<S> req() => _req ??= DateFieldReq<S>(owner, name);

  @override
  Field toField() => Field.date(name, required: false);

  @override
  FieldDef<S, Object?>? get reqCounterpart => _req;
}

/// {@template localpocket.date_field_req}
/// Required (non-nullable [int]) date descriptor.
/// {@endtemplate}
final class DateFieldReq<S> extends FieldDef<S, int>
    with ComparableFieldDef<S, int>
    implements SettableFieldDef<S, int>, NumericFieldDef<S> {
  /// Creates a required date descriptor.
  ///
  /// {@macro localpocket.date_field_req}
  DateFieldReq(super.owner, super.name) : super(required: true);

  @override
  Field toField() => Field.date(name, required: true);
}

// dateTime

/// Shared UTC boundary codec for the date-time pair: decode yields an
/// `isUtc: true` value; encode converts through [DateTime.toUtc]. The two
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

/// {@template localpocket.date_time_field_opt}
/// Optional (nullable [DateTime]) date-time descriptor.
///
/// Maps to the same `Field.date` column as [DateFieldOpt] — only the
/// boundary codec differs. Both directions are **UTC-pinned**: decode
/// yields `isUtc: true`; encode converts through [DateTime.toUtc].
/// {@endtemplate}
base class DateTimeFieldOpt<S> extends FieldDef<S, DateTime?>
    with ComparableFieldDef<S, DateTime?>, NullableFieldCond<S, DateTime?>
    implements SettableFieldDef<S, DateTime?> {
  /// Creates an optional date-time descriptor.
  ///
  /// {@macro localpocket.date_time_field_opt}
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

/// {@template localpocket.date_time_field_req}
/// Required (non-nullable [DateTime]) date-time descriptor.
/// {@endtemplate}
final class DateTimeFieldReq<S> extends FieldDef<S, DateTime>
    with ComparableFieldDef<S, DateTime>
    implements SettableFieldDef<S, DateTime> {
  /// Creates a required date-time descriptor.
  ///
  /// {@macro localpocket.date_time_field_req}
  DateTimeFieldReq(super.owner, super.name) : super(required: true);

  @override
  DateTime decode(Object? raw) => _decodeUtcReq(name, raw);

  @override
  Object? encode(DateTime value) => _encodeUtc(value);

  @override
  Field toField() => Field.date(name, required: true);
}

// enum

/// Shared enum codec members for the optional/required enum descriptor
/// pair: value snapshot, wire mapping, raw decode.
base mixin EnumCodec<E extends Enum> {
  /// The database field name this codec is bound to (from the descriptor).
  String get name;

  /// The accepted enum values (unmodifiable snapshot; cannot diverge after
  /// schema compilation).
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

/// {@template localpocket.enum_field_opt}
/// Optional (nullable [E]) enum descriptor.
///
/// Encodes to the wire string by default (`E.name`) with optional per-value
/// [wire] overrides (unmapped values fall back to `.name`).
/// {@endtemplate}
base class EnumFieldOpt<S, E extends Enum> extends FieldDef<S, E?>
    with NullableFieldCond<S, E?>, EnumCodec<E>
    implements SettableFieldDef<S, E?> {
  /// Creates an optional enum descriptor.
  ///
  /// {@macro localpocket.enum_field_opt}
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

/// {@template localpocket.enum_field_req}
/// Required (non-nullable [E]) enum descriptor.
/// {@endtemplate}
final class EnumFieldReq<S, E extends Enum> extends FieldDef<S, E>
    with EnumCodec<E>
    implements SettableFieldDef<S, E> {
  /// Creates a required enum descriptor.
  ///
  /// {@macro localpocket.enum_field_req}
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
  if (values.isEmpty) {
    throw StateError('Enum field "$name" must accept at least one value.');
  }
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

/// {@template localpocket.json_field}
/// JSON-object descriptor (`Map<String, Object?>`), optional by definition.
///
/// There is no `.req()`/`required` flag: the database's `Field.json` has no
/// `required` parameter. (The raw path also admits a `List` — a documented
/// asymmetry; the typed surface is the stricter one.)
/// {@endtemplate}
final class JsonField<S> extends FieldDef<S, Map<String, Object?>?>
    with NullableFieldCond<S, Map<String, Object?>?>
    implements SettableFieldDef<S, Map<String, Object?>?> {
  /// Creates a JSON-object descriptor.
  ///
  /// {@macro localpocket.json_field}
  JsonField(super.owner, super.name, {this.encrypted = false})
      : super(required: false);

  /// Whether the value is encrypted at rest.
  final bool encrypted;

  @override
  Field toField() => Field.json(name, encrypted: encrypted);
}

/// {@template localpocket.json_list_field}
/// JSON-array descriptor (`List<T>`), optional by definition.
/// {@endtemplate}
final class JsonListField<S, T> extends FieldDef<S, List<T>?>
    with NullableFieldCond<S, List<T>?>
    implements SettableFieldDef<S, List<T>?> {
  /// Creates a JSON-array descriptor.
  ///
  /// {@macro localpocket.json_list_field}
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
    // jsonDecode yields List<dynamic>; per-element cast makes an
    // off-contract element fail loudly.
    return [for (final e in raw) e as T];
  }

  @override
  Field toField() => Field.jsonList(name, encrypted: encrypted);
}

/// {@template localpocket.ref_field}
/// Reference descriptor (a record id of type [String]), optional by
/// definition.
///
/// There is no `.req()`/`required` flag: the database's `Field.ref` has no
/// `required` parameter.
/// {@endtemplate}
final class RefField<S> extends FieldDef<S, String?>
    with NullableFieldCond<S, String?>
    implements SettableFieldDef<S, String?> {
  /// Creates a reference descriptor.
  ///
  /// {@macro localpocket.ref_field}
  RefField(
    super.owner,
    super.name, {
    required this.to,
    this.enforceFk = false,
  }) : super(required: false);

  /// The referenced store name.
  final String to;

  /// Whether SQLite should enforce the reference as a foreign key.
  final bool enforceFk;

  @override
  Field toField() => Field.ref(name, to: to, enforceFk: enforceFk);
}
