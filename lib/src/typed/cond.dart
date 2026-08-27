/// Typed predicate conditions: one descriptor, one operator, encoded values.
///
/// `Cond<S, V>` is created by the descriptor-side kind-scoped operators
/// (`.gt`, `.startsWith`, …) or by `TypedQuery.where`, then consumed by
/// `TypedQuery.whereCond`. Values are encoded through the descriptor's
/// boundary codec at construction: enum wire strings, `DateTime` epoch-
/// milliseconds, and the int pass-through form for `f.date` all normalize
/// before they reach the engine.
library;

import 'field_def.dart';

/// One typed predicate operator over one field of one store.
///
/// [owner] provides the runtime cross-store backstop when a cast defeats the
/// phantom type [S]. [args] have already passed through the descriptor's
/// boundary encoder.
final class Cond<S> {
  const Cond(this.owner, this.field, this.operator, this.args);

  /// The canonical store definition instance that owns the field.
  final S owner;

  /// The engine field name.
  final String field;

  /// The engine operator name (`eq`, `gt`, `startsWith`, …).
  final String operator;

  /// Encoded operator arguments.
  final List<Object?> args;
}

/// Equality condition for [value], usable in `TypedQuery.orWhere`.
Cond<S> eqCond<S, V>(FieldDef<S, V> field, V value) =>
    Cond<S>(field.owner, field.name, 'eq', <Object?>[field.encode(value)]);

/// Kind-scoped comparison operators mixed into integer, real, date, and
/// date-time descriptors.
base mixin ComparableFieldDef<S, V> on FieldDef<S, V> {
  /// `field > value`.
  Cond<S> gt(V value) => Cond<S>(owner, name, 'gt', <Object?>[encode(value)]);

  /// `field >= value`.
  Cond<S> gte(V value) => Cond<S>(owner, name, 'gte', <Object?>[encode(value)]);

  /// `field < value`.
  Cond<S> lt(V value) => Cond<S>(owner, name, 'lt', <Object?>[encode(value)]);

  /// `field <= value`.
  Cond<S> lte(V value) => Cond<S>(owner, name, 'lte', <Object?>[encode(value)]);
}

/// Kind-scoped LIKE operators mixed into text descriptors.
base mixin TextFieldDef<S, V extends String?> on FieldDef<S, V> {
  /// Prefix match. Escaping remains the engine builder's responsibility.
  Cond<S> startsWith(String value) =>
      Cond<S>(owner, name, 'startsWith', <Object?>[value]);

  /// Suffix match. Escaping remains the engine builder's responsibility.
  Cond<S> endsWith(String value) =>
      Cond<S>(owner, name, 'endsWith', <Object?>[value]);

  /// Substring match. Escaping remains the engine builder's responsibility.
  Cond<S> contains(String value) =>
      Cond<S>(owner, name, 'contains', <Object?>[value]);
}
