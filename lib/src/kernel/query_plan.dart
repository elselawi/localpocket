/// Version of the engine compiler that produced a [QueryPlan].
const int queryCompilerVersion = 2;

/// {@template localpocket.query_plan}
/// SQL plan produced by the engine query compiler for the web transport.
/// This is a typed compiler artifact, not an arbitrary SQL API.
///
/// [operation] identifies the requested result shape and is one of:
/// `query`, `count`, `countDistinct`, `distinct`, `ids`, `explain`,
/// `sum`, `avg`, `min`, `max`, or `search`. All plans carry compiler-owned
/// SQL (`SELECT ...`) and bound [args]; values are never interpolated.
/// [limit] is the resolved SQL-level limit baked into [sql] (for `query`
/// plans compiled for the web it is the page limit + 1; the transport passes
/// the page limit separately).
/// {@endtemplate}
final class QueryPlan {
  /// {@macro localpocket.query_plan}
  const QueryPlan({
    required this.operation,
    required this.compilerVersion,
    required this.store,
    required this.schemaVersion,
    required this.schemaFingerprint,
    required this.sql,
    required this.args,
    required this.limit,
    required this.projection,
    required this.shape,
    this.typeName = type,
    this.decodeColumns,
  });

  /// Stable discriminator for this wire artifact.
  static const String type = 'query_plan';

  /// Type discriminator field (mirrors [type]).
  final String typeName;

  /// Requested result shape (`query`, `count`, `sum`, `search`, ...).
  final String operation;

  /// [queryCompilerVersion] that produced this plan.
  final int compilerVersion;

  /// Store the plan reads from.
  final String store;

  /// Store schema version the plan was compiled against.
  final int schemaVersion;

  /// Manifest fingerprint of the schema the plan was compiled against.
  final String schemaFingerprint;

  /// Compiler-owned SQL (`SELECT ...`); values are bound, never interpolated.
  final String sql;

  /// Bound arguments for [sql].
  final List<Object?> args;

  /// Resolved SQL-level limit baked into [sql], when the operation pages.
  final int? limit;

  /// Requested field projection, when the caller projected columns.
  final List<String>? projection;

  /// Columns to unpack with the projection-aware decoder, when the projection
  /// touches only declared fields. `null` means full row decode. Mirrors the
  /// native fetch path's `decodeDbRowsProjected` optimization.
  final List<String>? decodeColumns;

  /// Row shape marker the transport uses to pick a decoder.
  final String shape;

  /// Number of bound arguments in the plan.
  int get argumentCount => args.length;
}
