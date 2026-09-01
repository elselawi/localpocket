import 'dart:convert';

import 'package:localpocket/src/internal/raw_surface.dart';
import 'package:localpocket/src/kernel/compiled_query_runner.dart';
import 'package:localpocket/src/web/conversions.dart' show encodeWireValue;

/// Measures compiled-plan execution and serialized wire size.
///
/// Run with: `dart run tool/compiled_plan_benchmark.dart`.
/// This is intentionally a tool, not a pass/fail performance test: report
/// values are machine-dependent and are persisted as JSON by CI if desired.
Future<void> main() async {
  final schema = CollectionSchema<Object?>(
    name: 'bench',
    version: 1,
    fields: [Field.text('name'), Field.int('value')],
  );
  final pocket = await LocalPocket.open(path: ':memory:', stores: [schema]);
  try {
    final col = pocket.collection('bench');
    for (var i = 0; i < 100; i++) {
      await col.put({
        'id': 'bench${i.toString().padLeft(10, '0')}',
        'name': 'name-${i % 10}',
        'value': i,
      });
    }

    final q = QueryBuilder.compileOnly(schema)
      ..where('value', gte: 25)
      ..orderBy('value')
      ..limit(25);
    final plan = q.compilePlan(limitOverride: 26);
    final envelope = {
      'type': plan.typeName,
      'operation': plan.operation,
      'compilerVersion': plan.compilerVersion,
      'store': plan.store,
      'schemaVersion': plan.schemaVersion,
      'schemaFingerprint': plan.schemaFingerprint,
      'argumentCount': plan.argumentCount,
      'sql': plan.sql,
      'args': plan.args.map(encodeWireValue).toList(),
      'limit': 25,
      'projection': plan.projection,
      'shape': plan.shape,
    };
    final descriptor = {
      'store': schema.name,
      'where': [
        {'field': 'value', 'op': 'gte', 'val': encodeWireValue(25)}
      ],
      'order': [
        {'field': 'value', 'desc': false}
      ],
      'limit': 25,
      'all': false,
      'includeArchived': false,
      'includeHidden': false,
    };

    const iterations = 1000;
    final sw = Stopwatch()..start();
    for (var i = 0; i < iterations; i++) {
      await executeCompiledQuery(
        pocket,
        (sql, args) => pocket.traceQuery(sql, args),
        plan,
        pageLimit: 25,
      );
    }
    sw.stop();

    final result = {
      'iterations': iterations,
      'compiledPlanUs': sw.elapsedMicroseconds,
      'compiledPlanAverageUs': sw.elapsedMicroseconds / iterations,
      'compiledWireBytes': utf8.encode(jsonEncode(envelope)).length,
      'descriptorWireBytes': utf8.encode(jsonEncode(descriptor)).length,
      'wireBytesDelta': utf8.encode(jsonEncode(envelope)).length -
          utf8.encode(jsonEncode(descriptor)).length,
      'queryCompilerVersion': queryCompilerVersion,
    };
    if ((result['compiledWireBytes'] as int) <= 0) {
      throw StateError('Compiled plan wire payload was empty.');
    }
    print(const JsonEncoder.withIndent('  ').convert(result));
  } finally {
    await pocket.close();
  }
}
