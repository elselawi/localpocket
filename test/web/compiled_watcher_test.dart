import 'dart:async';

import 'package:localpocket/localpocket.dart';
import 'package:localpocket/src/web/compiled_watcher.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';

void main() {
  test('CompiledWatcher forwards refresh error to onError callback without dying',
      () async {
    var failQuery = false;
    final hooks = TestHooks(
      onQuery: (sql) {
        if (failQuery && sql.contains('FROM "widgets"')) {
          throw StorageError('simulated query failure during watch refresh');
        }
      },
    );

    final pocket = await openPocket(testHooks: hooks);
    addTearDown(pocket.close);
    final schema = widgetsSchema();

    final emissions = <List<Map<String, Object?>>>[];
    final errors = <Object?>[];

    final watcher = CompiledWatcher(
      pocket,
      schema,
      'SELECT * FROM "widgets" WHERE "archived" = 0 ORDER BY "id" ASC LIMIT 50',
      const [],
      null,
      null,
      (items) => emissions.add(items),
      onError: (err, stack) => errors.add(err),
    );

    watcher.start();
    final initial = await watcher.initial();
    expect(initial, isEmpty);

    // Now trigger a change while failQuery is true
    final id = generateRecordId();
    failQuery = true;
    pocket.changeBus.emit(ChangeSet('widgets', {id}));

    // Wait for the coalesce window (16ms) and async refresh
    await Future<void>.delayed(const Duration(milliseconds: 60));

    expect(errors, hasLength(1),
        reason: 'The refresh failure should be observed via onError');
    expect(emissions, isEmpty,
        reason: 'No emission should occur for the failed refresh');

    // Next change when query succeeds should succeed and emit (retry policy)
    failQuery = false;
    await pocket.collection('widgets').put(record(id: id, name: 'Item 1'));
    await Future<void>.delayed(const Duration(milliseconds: 80));

    expect(emissions, hasLength(1),
        reason: 'Subsequent change should successfully refresh and emit');
    expect(errors, hasLength(1),
        reason: 'No additional errors should have been recorded');

    watcher.dispose();
  });
}
