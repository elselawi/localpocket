import 'codec.dart';
import 'local_pocket.dart';
import 'query_plan.dart';
import 'sql_utils.dart';

/// Executes a validated compiled [plan] against a raw-SQL runner and shapes
/// the result envelope exactly as the web worker does.
///
/// This is the single execution path for engine-compiled query plans. The web
/// worker and the VM parity tests both call it, so plan execution cannot
/// drift between the two platforms. [pocket] supplies the schema and field
/// cipher used to decode rows; [run] executes raw SQL with bound parameters.
Future<Map<String, Object?>> executeCompiledQuery(
  LocalPocket pocket,
  Future<List<Map<String, Object?>>> Function(String sql, List<Object?> params)
      run,
  QueryPlan plan, {
  int? pageLimit,
}) async {
  final sql =
      plan.operation == 'explain' ? 'EXPLAIN QUERY PLAN ${plan.sql}' : plan.sql;
  if (plan.operation == 'query' && pageLimit == 0) {
    return {
      'items': <Map<String, Object?>>[],
      'lastRow': null,
      'hasMore': false,
    };
  }
  final rows = await run(sql, plan.args);

  switch (plan.operation) {
    case 'query':
      final hasMore = pageLimit != null && rows.length > pageLimit;
      final pageRows = pageLimit == null ? rows : rows.take(pageLimit).toList();
      final schema = pocket.requireTable(plan.store).schema;
      final columns = plan.decodeColumns;
      final decoded = columns != null
          ? decodeDbRowsProjected(schema, pageRows,
              columns: columns,
              cipher: pocket.fieldCipher,
              cryptoProvider: pocket.cryptoProvider)
          : decodeDbRows(schema, pageRows,
              cipher: pocket.fieldCipher,
              cryptoProvider: pocket.cryptoProvider);
      final projection = plan.projection;
      final projected = projection == null
          ? decoded
          : [
              for (final row in decoded)
                {
                  for (final k in projection)
                    if (row.containsKey(k)) k: row[k]
                }
            ];
      return {
        'items': projected,
        'lastRow': hasMore && decoded.isNotEmpty ? decoded.last : null,
        'hasMore': hasMore,
      };
    case 'count':
    case 'countDistinct':
      return {'value': firstIntValue(rows) ?? 0};
    case 'distinct':
      return {
        'values': [
          for (final r in rows)
            if (r.isNotEmpty) r.values.first
        ]
      };
    case 'ids':
      return {
        'ids': [for (final r in rows) r['id']! as String]
      };
    case 'explain':
      return {'plan': rows.map((r) => r['detail']).join('\n')};
    case 'sum':
    case 'avg':
    case 'min':
    case 'max':
      return {'value': rows.isEmpty ? null : rows.first['v']};
    case 'search':
      return {
        'results': [
          for (final r in rows) {'id': r['id']! as String, 'score': r['score']}
        ]
      };
    default:
      throw StateError('Unsupported compiled operation: ${plan.operation}');
  }
}
