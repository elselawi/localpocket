/// Typed predicate conditions and order terms: one descriptor, one operator,
/// encoded values — composed into boolean trees with `&`, `|`, and `~`.
///
/// Conditions are **values** built beside the descriptor
/// (`Tasks.done.eq(false)`, `Tasks.priority.gt(0)`) — that call site is where
/// the field's value type is enforced. The algebra composes them without any
/// builder:
///
/// ```dart
/// where: [
///   Tasks.done.eq(false),
///   (Tasks.priority.gte(4) | Tasks.dueAt.lt(now)) & ~Tasks.title.eq('Draft'),
/// ],
/// ```
///
/// The `where:` slot of every terminal is an AND-list of [Cond] trees: the
/// list elements AND together, and each element may itself be an arbitrarily
/// deep boolean expression. Values are encoded through the descriptor's
/// boundary codec at construction: enum wire strings, `DateTime`
/// epoch-milliseconds, and the int pass-through form for `schema.date` all
/// normalize before they reach the database.
library;

import 'field_def.dart';

/// {@template localpocket.cond}
/// One node of a typed predicate tree — a leaf predicate or a composed
/// boolean expression.
///
/// `&` (AND), `|` (OR), and `~` (NOT) are the only composition operators,
/// and they compose without restriction: any condition can stand on either
/// side of any operator. Because [Cond] is sealed, the compiler sees every
/// node kind — leaves ([FieldCond]) and composites ([AllCond], [AnyCond],
/// [NotCond]) — so lowering is total and an unknown node shape is
/// unspellable.
/// {@endtemplate}
sealed class Cond<S> {
  /// {@macro localpocket.cond}
  const Cond();

  /// AND-combines two conditions. Chained calls flatten
  /// (`a & b & c` is one conjunction with three children).
  AllCond<S> operator &(Cond<S> other) => AllCond<S>(<Cond<S>>[this, other]);

  /// OR-combines two conditions. Chained calls flatten
  /// (`a | b | c` is one disjunction with three children).
  AnyCond<S> operator |(Cond<S> other) => AnyCond<S>(<Cond<S>>[this, other]);

  /// Negates a condition: SQL `NOT (...)`. `~field.eq(v)` replaces a
  /// dedicated not-equal operator — for a non-null value the two match the
  /// same rows (`field <> v` is NULL-excluding exactly like
  /// `NOT (field = v)`), and `~field.isNull()` reads as `IS NOT NULL`.
  NotCond<S> operator ~() => NotCond<S>(this);
}

/// {@template localpocket.field_cond}
/// One typed predicate operator over one field of one store.
///
/// [owner] provides the runtime cross-store backstop when a cast defeats the
/// phantom type [S]. [args] have already passed through the descriptor's
/// boundary encoder.
/// {@endtemplate}
final class FieldCond<S> extends Cond<S> {
  /// Creates one leaf predicate.
  ///
  /// {@macro localpocket.field_cond}
  const FieldCond(this.owner, this.field, this.operator, this.args);

  /// The canonical store definition instance that owns the field.
  final S owner;

  /// the database field name.
  final String field;

  /// the database operator name (`eq`, `gt`, `startsWith`, …).
  final String operator;

  /// Encoded operator arguments.
  final List<Object?> args;
}

/// {@template localpocket.all_cond}
/// A conjunction — the children AND together.
///
/// Nested [AllCond] children are flattened at construction, so chained `&`
/// produces one node with one child per predicate and the compiled SQL stays
/// canonical (`a = ? AND b = ? AND c = ?`, never re-nested).
/// {@endtemplate}
final class AllCond<S> extends Cond<S> {
  /// AND-combines [conditions]. At least one condition is required — an
  /// empty conjunction would silently vanish from the compiled SQL.
  ///
  /// {@macro localpocket.all_cond}
  AllCond(List<Cond<S>> conditions) : children = _flatten(conditions);

  /// The ANDed children (nested conjunctions spliced in).
  final List<Cond<S>> children;

  static List<Cond<T>> _flatten<T>(List<Cond<T>> conditions) {
    if (conditions.isEmpty) {
      throw ArgumentError.value(
        conditions,
        'conditions',
        'A conjunction needs at least one condition.',
      );
    }
    return <Cond<T>>[
      for (final condition in conditions)
        if (condition is AllCond<T>) ...condition.children else condition,
    ];
  }
}

/// {@template localpocket.any_cond}
/// A disjunction — the children OR together.
///
/// Nested [AnyCond] children are flattened at construction, so chained `|`
/// produces one node with one child per alternative.
/// {@endtemplate}
final class AnyCond<S> extends Cond<S> {
  /// OR-combines [conditions]. At least one condition is required.
  ///
  /// {@macro localpocket.any_cond}
  AnyCond(List<Cond<S>> conditions) : children = _flatten(conditions);

  /// The ORed children (nested disjunctions spliced in).
  final List<Cond<S>> children;

  static List<Cond<T>> _flatten<T>(List<Cond<T>> conditions) {
    if (conditions.isEmpty) {
      throw ArgumentError.value(
        conditions,
        'conditions',
        'A disjunction needs at least one condition.',
      );
    }
    return <Cond<T>>[
      for (final condition in conditions)
        if (condition is AnyCond<T>) ...condition.children else condition,
    ];
  }
}

/// {@template localpocket.not_cond}
/// A negation — SQL `NOT (...)` around [child].
/// {@endtemplate}
final class NotCond<S> extends Cond<S> {
  /// Negates [condition].
  ///
  /// {@macro localpocket.not_cond}
  const NotCond(this.child);

  /// The negated subtree.
  final Cond<S> child;
}

/// {@template localpocket.order_term}
/// One ordering term, built through a descriptor's `asc`/`desc` getters.
/// the database supplies its normal id tiebreaker.
/// {@endtemplate}
final class OrderTerm<S> {
  /// {@macro localpocket.order_term}
  const OrderTerm(this.field, {required this.desc});

  /// The field descriptor itself, so owner checks stay exact.
  final FieldDef<S, Object?> field;

  /// Whether the order is descending.
  final bool desc;
}

/// The null-testing member, mixed into every OPTIONAL (nullable) descriptor.
///
/// Required columns are `NOT NULL`, so `IS NULL` is meaningless there — the
/// member is deliberately unspellable on `.req()` descriptors. `IS NOT NULL`
/// has no dedicated member: write `~field.isNull()`. The shorthand
/// `field.eq(null)` routes to [isNull].
base mixin NullableFieldCond<S, V> on FieldDef<S, V> {
  /// SQL `IS NULL`.
  FieldCond<S> isNull() =>
      FieldCond<S>(owner, name, 'isNull', const <Object?>[]);
}

/// Kind-scoped comparison operators mixed into integer, real, date, and
/// date-time descriptors.
base mixin ComparableFieldDef<S, V> on FieldDef<S, V> {
  /// `field > value`.
  FieldCond<S> gt(V value) =>
      FieldCond<S>(owner, name, 'gt', <Object?>[encode(value)]);

  /// `field >= value`.
  FieldCond<S> gte(V value) =>
      FieldCond<S>(owner, name, 'gte', <Object?>[encode(value)]);

  /// `field < value`.
  FieldCond<S> lt(V value) =>
      FieldCond<S>(owner, name, 'lt', <Object?>[encode(value)]);

  /// `field <= value`.
  FieldCond<S> lte(V value) =>
      FieldCond<S>(owner, name, 'lte', <Object?>[encode(value)]);
}

/// Kind-scoped LIKE operators mixed into text descriptors.
base mixin TextFieldDef<S, V extends String?> on FieldDef<S, V> {
  /// Prefix match. Escaping remains the database builder's responsibility.
  FieldCond<S> startsWith(String value) =>
      FieldCond<S>(owner, name, 'startsWith', <Object?>[value]);

  /// Suffix match. Escaping remains the database builder's responsibility.
  FieldCond<S> endsWith(String value) =>
      FieldCond<S>(owner, name, 'endsWith', <Object?>[value]);

  /// Substring match. Escaping remains the database builder's responsibility.
  FieldCond<S> contains(String value) =>
      FieldCond<S>(owner, name, 'contains', <Object?>[value]);
}
