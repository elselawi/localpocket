import 'package:localpocket/src/internal/raw_surface.dart';
import 'package:localpocket/src/core/compiled_query_runner.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';

/// Envelope edge cases of the compiled-query execution runner: the zero-page
/// short-circuit and rejection of unknown plan operations.
void main() {
  late LocalPocket pocket;

  setUp(() async {
    pocket = await openPocket();
    final col = pocket.collection('widgets');
    for (var i = 0; i < 5; i++) {
      await col.put(record(id: generateRecordId(), name: 'n$i', qty: i));
    }
  });

  tearDown(() => pocket.close());

  test('pageLimit of zero returns an empty page without executing SQL',
      () async {
    final plan = pocket
        .collection('widgets')
        .query()
        .limit(10)
        .compilePlan(limitOverride: 11);
    var ran = false;
    final res = await executeCompiledQuery(
      pocket,
      (sql, args) async {
        ran = true;
        return const <Map<String, Object?>>[];
      },
      plan,
      pageLimit: 0,
    );
    expect(ran, isFalse, reason: 'a zero-page query must not hit the database');
    expect(res, {
      'items': <Map<String, Object?>>[],
      'lastRow': null,
      'firstRow': null,
      'hasNext': false,
    });
  });

  test('pageLimit of zero only short-circuits query plans', () async {
    final plan = pocket.collection('widgets').query().compileCountPlan();
    var ran = false;
    final res = await executeCompiledQuery(
      pocket,
      (sql, args) async {
        ran = true;
        return pocket.traceQuery(sql, args);
      },
      plan,
      pageLimit: 0,
    );
    expect(ran, isTrue, reason: 'scalar plans ignore pageLimit');
    expect(res['value'], 5);
  });

  test('unknown plan operation raises StateError', () async {
    final plan = QueryPlan(
      operation: 'bogus',
      compilerVersion: queryCompilerVersion,
      store: 'widgets',
      schemaVersion: 1,
      schemaFingerprint: '0' * 64,
      sql: 'SELECT * FROM "widgets"',
      args: const [],
      limit: null,
      projection: null,
      shape: '{}',
    );
    await expectLater(
      executeCompiledQuery(pocket, (sql, args) async => const [], plan),
      throwsA(isA<StateError>()
          .having((e) => e.message, 'message', contains('bogus'))),
    );
  });
}
