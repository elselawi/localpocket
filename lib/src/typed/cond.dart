/// Typed predicate conditions and order terms: one descriptor, one operator,
/// encoded values.
///
/// Conditions are **values** built beside the descriptor
/// (`Tasks.done.eq(false)`, `Tasks.priority.gt(0)`) — that call site is where
/// the field's value type is enforced, so query entry points can accept
/// plain lists of conditions and stay strictly typed. Values are encoded
/// through the descriptor's boundary codec at construction: enum wire
/// strings, `DateTime` epoch-milliseconds, and the int pass-through form for
/// `schema.date` all normalize before they reach the database.
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

  /// the database field name.
  final String field;

  /// the database operator name (`eq`, `gt`, `startsWith`, …).
  final String operator;

  /// Encoded operator arguments.
  final List<Object?> args;
}

/// An equality condition — the only condition kind an OR group accepts
/// (`TypedCollection.query(anyOf: ...)`).
///
/// the database's OR groups can express field-equality alternatives only, so
/// narrowing the static type from [Cond] to [EqCond] moves that restriction
/// from a runtime error to a compile error: a range condition can never
/// enter an OR group in the first place.
final class EqCond<S> extends Cond<S> {
  // Not const: conditions are runtime values built beside the descriptor.
  EqCond(S owner, String field, Object? value)
      : super(owner, field, 'eq', <Object?>[value]);
}

/// One ordering term, built through a descriptor's `asc`/`desc` getters.
/// the database supplies its normal id tiebreaker.
final class OrderTerm<S> {
  const OrderTerm(this.field, {required this.desc});

  /// The field descriptor itself, so owner checks stay exact.
  final FieldDef<S, Object?> field;

  /// Whether the order is descending.
  final bool desc;
}

/// Equality condition for [value], usable in `TypedQuery.orWhere`.
@Deprecated('Build the condition on the descriptor: field.eq(value).')
Cond<S> eqCond<S, V>(FieldDef<S, V> field, V value) => field.eq(value);

/// The null-testing family, mixed into every OPTIONAL (nullable) descriptor.
///
/// Required columns are `NOT NULL`, so `IS NULL` / `IS NOT NULL` are
/// meaningless there — these members are deliberately unspellable on
/// `.req()` descriptors. For optional fields the shorthand forms exist too:
/// `field.eq(null)` routes to [isNull] and `field.neq(null)` routes to
/// [isNotNull].
base mixin NullableFieldCond<S, V> on FieldDef<S, V> {
  /// SQL `IS NULL`.
  Cond<S> isNull() => Cond<S>(owner, name, 'isNull', const <Object?>[]);

  /// SQL `IS NOT NULL`.
  Cond<S> isNotNull() => Cond<S>(owner, name, 'isNotNull', const <Object?>[]);
}

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
  /// Prefix match. Escaping remains the database builder's responsibility.
  Cond<S> startsWith(String value) =>
      Cond<S>(owner, name, 'startsWith', <Object?>[value]);

  /// Suffix match. Escaping remains the database builder's responsibility.
  Cond<S> endsWith(String value) =>
      Cond<S>(owner, name, 'endsWith', <Object?>[value]);

  /// Substring match. Escaping remains the database builder's responsibility.
  Cond<S> contains(String value) =>
      Cond<S>(owner, name, 'contains', <Object?>[value]);
}
