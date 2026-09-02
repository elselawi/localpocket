/// Engine-side predicate tree: the lowering target of the typed condition
/// algebra (`&`/`|`/`~`). Each tree compiles to one self-contained, fully
/// parameterized WHERE fragment, parenthesized at every composite boundary
/// so nothing leaks into the surrounding WHERE assembly. Values travel as
/// bound arguments; LIKE patterns are escaped here.
library;

import 'package:localpocket/src/kernel/ddl_compiler.dart';

/// {@template localpocket.predicate_node}
/// One node of a predicate tree. Leaves are single-field predicates;
/// composites combine their children with `AND`, `OR`, or `NOT`.
/// {@endtemplate}
sealed class PredicateNode {
  /// {@macro localpocket.predicate_node}
  const PredicateNode();
}

/// {@template localpocket.leaf_predicate}
/// One predicate over one field.
///
/// [field] is the unquoted field name — the query builder validates it
/// against the schema and quotes it. [operator] is one of the canonical
/// operator names (`eq`, `gt`, `gte`, `lt`, `lte`, `inValues`, `between`,
/// `isNull`, `startsWith`, `endsWith`, `contains`) and [args] carries the
/// already-encoded bound values.
/// {@endtemplate}
final class LeafPredicate extends PredicateNode {
  /// Creates one field predicate.
  ///
  /// {@macro localpocket.leaf_predicate}
  const LeafPredicate(this.field, this.operator, this.args);

  /// The unquoted field name.
  final String field;

  /// The canonical operator name.
  final String operator;

  /// The already-encoded bound values.
  final List<Object?> args;
}

/// {@template localpocket.not_predicate}
/// Negation of [child]: SQL `NOT (child)`.
/// {@endtemplate}
final class NotPredicate extends PredicateNode {
  /// Creates a negation node.
  ///
  /// {@macro localpocket.not_predicate}
  const NotPredicate(this.child);

  /// The negated subtree.
  final PredicateNode child;
}

/// {@template localpocket.all_predicate}
/// Conjunction: the children AND together.
/// {@endtemplate}
final class AllPredicate extends PredicateNode {
  /// Creates a conjunction. The children must not be empty — the compiler
  /// rejects an empty node rather than emitting an empty `()`.
  ///
  /// {@macro localpocket.all_predicate}
  const AllPredicate(this.children);

  /// The ANDed children.
  final List<PredicateNode> children;
}

/// {@template localpocket.any_predicate}
/// Disjunction: the children OR together, each as its own parenthesized arm.
/// {@endtemplate}
final class AnyPredicate extends PredicateNode {
  /// Creates a disjunction. The children must not be empty — the compiler
  /// rejects an empty node rather than emitting an empty `()`.
  ///
  /// {@macro localpocket.any_predicate}
  const AnyPredicate(this.children);

  /// The ORed children.
  final List<PredicateNode> children;
}

/// Escapes SQL LIKE wildcards and the escape character itself in [value], so
/// a caller-supplied needle matches literally.
String escapeLikePattern(String value) =>
    value.replaceAll(r'\', r'\\').replaceAll('%', r'\%').replaceAll('_', r'\_');

/// Compiles [node] into one self-contained WHERE fragment and its bound
/// arguments. Top-level conjunctions stay unparenthesized (byte-identical to
/// the raw `where(...)` output); nested composites are wrapped; every OR arm
/// is its own parenthesized group.
(String, List<Object?>) compilePredicateTree(PredicateNode node) {
  _checkStructure(node);
  return _compile(node, topLevel: true);
}

/// Structural validation independent of any schema: composites must have
/// children and leaves must carry the arity their operator needs.
void _checkStructure(PredicateNode node) {
  switch (node) {
    case LeafPredicate():
      final expected = switch (node.operator) {
        'eq' ||
        'gt' ||
        'gte' ||
        'lt' ||
        'lte' ||
        'startsWith' ||
        'endsWith' ||
        'contains' =>
          1,
        'between' => 2,
        'isNull' => 0,
        'inValues' => null,
        _ => throw ArgumentError.value(
            node.operator,
            'operator',
            'Unknown predicate operator.',
          ),
      };
      if (expected != null && node.args.length != expected) {
        throw ArgumentError.value(
          node.args,
          'args',
          'The "${node.operator}" predicate carries exactly $expected '
              'argument(s), got ${node.args.length}.',
        );
      }
      if (node.operator == 'inValues' && node.args.isEmpty) {
        throw ArgumentError.value(
          node.args,
          'args',
          'An inValues predicate needs at least one value '
              '(the database would otherwise emit invalid SQL).',
        );
      }
      if (node.operator == 'eq' && node.args.single == null) {
        throw ArgumentError.value(
          node.args,
          'args',
          'eq(null) never reaches the compiler: route it to the isNull '
              'predicate (SQL `= NULL` never matches).',
        );
      }
    case NotPredicate():
      _checkStructure(node.child);
    case AllPredicate(:final children) || AnyPredicate(:final children):
      if (children.isEmpty) {
        throw ArgumentError.value(
          children,
          'children',
          'A predicate composite needs at least one child.',
        );
      }
      for (final child in children) {
        _checkStructure(child);
      }
  }
}

(String, List<Object?>) _compile(PredicateNode node, {required bool topLevel}) {
  switch (node) {
    case LeafPredicate():
      return _compileLeaf(node, topLevel: topLevel);
    case NotPredicate():
      // Disjunction children already carry their own parens (and NOT is
      // prefix-bound), so only the remaining shapes get one wrapping pair:
      // `NOT (a = ? AND b = ?)`, `NOT ((a) OR (b))`, `NOT NOT (a = ?)`.
      final (sql, args) = _compile(node.child, topLevel: true);
      return switch (node.child) {
        AnyPredicate() || NotPredicate() => ('NOT $sql', args),
        _ => ('NOT ($sql)', args),
      };
    case AllPredicate():
      final parts = <String>[];
      final args = <Object?>[];
      for (final child in node.children) {
        final (childSql, childArgs) = _compile(child, topLevel: false);
        parts.add(childSql);
        args.addAll(childArgs);
      }
      final body = parts.join(' AND ');
      // A top-level conjunction stays unparenthesized so a plain where-list
      // compiles byte-identically to the raw builder's clause chain.
      return (topLevel ? body : '($body)', args);
    case AnyPredicate():
      final parts = <String>[];
      final args = <Object?>[];
      for (final child in node.children) {
        final (armSql, armArgs) = _compileOrArm(child);
        parts.add(armSql);
        args.addAll(armArgs);
      }
      return ('(${parts.join(' OR ')})', args);
  }
}

/// Compiles one OR arm. Every arm is wrapped in its own parentheses —
/// `AND` binds tighter than `OR`, so the grouping must be explicit (this
/// also keeps the output byte-identical to the raw `orWhere` lowering).
(String, List<Object?>) _compileOrArm(PredicateNode node) => switch (node) {
      LeafPredicate() => _compileLeaf(node, topLevel: false, forceParens: true),
      // All/Any/Not compile to fragments that are already self-contained:
      // a conjunction gets its own parens at the non-top level, a
      // disjunction is always parenthesized, and NOT binds tighter than OR.
      _ => _compile(node, topLevel: false),
    };

(String, List<Object?>) _compileLeaf(
  LeafPredicate leaf, {
  required bool topLevel,
  bool forceParens = false,
}) {
  final col = DdlCompiler.quote(leaf.field);
  final args = List<Object?>.of(leaf.args);
  final String sql;
  switch (leaf.operator) {
    case 'eq':
      sql = '$col = ?';
    case 'gt':
      sql = '$col > ?';
    case 'gte':
      sql = '$col >= ?';
    case 'lt':
      sql = '$col < ?';
    case 'lte':
      sql = '$col <= ?';
    case 'inValues':
      sql = '$col IN (${List.filled(args.length, '?').join(', ')})';
    case 'between':
      sql = '$col >= ? AND $col <= ?';
    case 'isNull':
      sql = '$col IS NULL';
    case 'startsWith':
      sql = "$col LIKE ? ESCAPE '\\'";
      args[0] = '${escapeLikePattern(args[0]! as String)}%';
    case 'endsWith':
      sql = "$col LIKE ? ESCAPE '\\'";
      args[0] = '%${escapeLikePattern(args[0]! as String)}';
    case 'contains':
      sql = "$col LIKE ? ESCAPE '\\'";
      args[0] = '%${escapeLikePattern(args[0]! as String)}%';
    default:
      throw ArgumentError.value(
        leaf.operator,
        'operator',
        'Unknown predicate operator.',
      );
  }
  // A range predicate embeds its own AND — wrap it unless it is the whole
  // top-level clause, or the inner AND would leak into the outer chain.
  final needsParens = forceParens || (leaf.operator == 'between' && !topLevel);
  return (needsParens ? '($sql)' : sql, args);
}
