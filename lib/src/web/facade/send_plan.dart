import 'package:localpocket/src/core/query_plan.dart';
import 'package:localpocket/src/web/conversions.dart';
import 'package:localpocket/src/web/facade/facade_host.dart';
import 'package:localpocket/src/web/protocol.dart';

/// Sends an engine-compiled [QueryPlan] to the worker as the single read
/// envelope and returns the decoded response map.
Future<Map<String, Object?>> sendCompiledPlan(
  WebFacadeHost pocket,
  QueryPlan plan, {
  int? sessionId,
  int? pageLimit,
  int? watchId,
}) async {
  final res = await pocket
      .send(watchId != null ? WireOp.watchQuery : WireOp.compiledQuery, {
    'type': plan.typeName,
    'operation': plan.operation,
    'compilerVersion': plan.compilerVersion,
    'store': plan.store,
    'schemaVersion': plan.schemaVersion,
    'schemaFingerprint': plan.schemaFingerprint,
    'argumentCount': plan.argumentCount,
    'sql': plan.sql,
    'args': plan.args.map(encodeWireValue).toList(),
    'limit': plan.limit,
    'projection': plan.projection,
    'decodeColumns': plan.decodeColumns,
    'shape': plan.shape,
    if (sessionId != null) 'sessionId': sessionId,
    if (pageLimit != null) 'pageLimit': pageLimit,
    if (watchId != null) 'watchId': watchId,
  });
  return (res! as Map).map((k, v) => MapEntry(k.toString(), v));
}
