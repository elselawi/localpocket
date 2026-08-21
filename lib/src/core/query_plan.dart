/// Version of the engine compiler that produced a [QueryPlan].
const int queryCompilerVersion = 2;

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
final class QueryPlan {
  /// Stable discriminator for this wire artifact.
  static const String type = 'query_plan';

  final String typeName;
  final String operation;
  final int compilerVersion;
  final String store;
  final int schemaVersion;
  final String schemaFingerprint;
  final String sql;
  final List<Object?> args;
  final int? limit;
  final List<String>? projection;

  /// Columns to unpack with the projection-aware decoder, when the projection
  /// touches only declared fields. `null` means full row decode. Mirrors the
  /// native fetch path's `decodeDbRowsProjected` optimization.
  final List<String>? decodeColumns;
  final String shape;

  int get argumentCount => args.length;

  const QueryPlan({
    this.typeName = type,
    required this.operation,
    required this.compilerVersion,
    required this.store,
    required this.schemaVersion,
    required this.schemaFingerprint,
    required this.sql,
    required this.args,
    required this.limit,
    required this.projection,
    this.decodeColumns,
    required this.shape,
  });
}
