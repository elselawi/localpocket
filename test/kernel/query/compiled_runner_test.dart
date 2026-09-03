import 'package:localpocket/src/kernel/ids.dart';
import 'package:localpocket/src/kernel/query/result_shaper.dart';
import 'package:localpocket/src/kernel/local_pocket.dart';
import 'package:localpocket/src/kernel/query_plan.dart';
import 'package:localpocket/src/kernel/compiled_query_runner.dart';
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
        return pocket.maintenance.traceQuery(sql, args);
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
  _resultShaper();
}

/// Direct unit coverage of the result shaper: the projection and page-window
/// assembly both execution paths share (plan Rule 6).
void _resultShaper() {
  group('result shaper', () {
    test('projectRow keeps only projected keys, in declaration order', () {
      final row = {'zebra': 1, 'alpha': 2, 'extra': 3};
      // "declaration order" for a map literal comparison: the projected
      // output carries exactly the projected keys that exist.
      expect(projectRow(row, ['alpha', 'zebra']), {'alpha': 2, 'zebra': 1});
    });

    test('a projected key missing from the row is skipped', () {
      expect(projectRow({'a': 1}, ['a', 'absent']), {'a': 1});
    });

    test('projectRow never mutates the input snapshot', () {
      final row = <String, Object?>{'a': 1, 'b': 2};
      final projected = projectRow(row, ['b']);
      expect(projected, {'b': 2});
      expect(row, {'a': 1, 'b': 2});
    });

    test('projectRows projects every row', () {
      expect(
        projectRows([
          {'a': 1, 'b': 2},
          {'a': 3, 'b': 4},
        ], [
          'b'
        ]),
        [
          {'b': 2},
          {'b': 4},
        ],
      );
    });

    test('takeWindow with a limit splits window from overflow', () {
      final rows = List.generate(5, (i) => {'i': i});
      final bounded = takeWindow(rows, 3);
      expect(
        bounded.window,
        [
          {'i': 0},
          {'i': 1},
          {'i': 2},
        ],
      );
      expect(bounded.overflow, isTrue);

      final exact = takeWindow(rows, 5);
      expect(exact.window, hasLength(5));
      expect(exact.overflow, isFalse, reason: 'no rows beyond the window');

      final short = takeWindow(rows.take(2).toList(), 5);
      expect(short.window, hasLength(2));
      expect(short.overflow, isFalse);
    });

    test('takeWindow with no limit returns everything, never overflowing', () {
      final rows = [
        {'a': 1},
        {'a': 2},
      ];
      final unbounded = takeWindow(rows, null);
      expect(unbounded.window, same(rows));
      expect(unbounded.overflow, isFalse);
    });
  });
}
