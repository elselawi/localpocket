import 'dart:async';
import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'package:localpocket/src/kernel/schema.dart';
import 'package:localpocket/src/web/facade.dart';

Future<void> main() async {
  void report(String status, [String? detail]) {
    globalContext.setProperty('__watch_smoke'.toJS, status.toJS);
    if (detail != null) {
      globalContext.setProperty('__watch_smoke_detail'.toJS, detail.toJS);
    }
  }

  try {
    final schema = CollectionSchema<Object?>(
      name: 'items',
      version: 1,
      fields: [
        Field.text('title', required: true),
        Field.bool('done'),
      ],
    );

    final pocket = await LocalPocket.open(
      path: 'watch_test_db',
      stores: [schema],
    );

    final items = pocket.collection('items');

    // 1. Initial write
    await items.put({
      'id': 'item00000000001',
      'title': 'Original Item',
      'done': false,
    });

    // 2. Keep both subscriptions active so later worker events are tested.
    final watchOneEvents = <Map<String, Object?>?>[];
    final watchOneReady = Completer<void>();
    final watchOneUpdated = Completer<void>();
    final watchOneDeleted = Completer<void>();
    final watchOneStream = items.watchOne('item00000000001');
    final watchOneSub = watchOneStream.listen((item) {
      watchOneEvents.add(item);
      if (watchOneEvents.length == 1) watchOneReady.complete();
      if (item?['title'] == 'Updated Item' && !watchOneUpdated.isCompleted) {
        watchOneUpdated.complete();
      }
      if (item == null && !watchOneDeleted.isCompleted) {
        watchOneDeleted.complete();
      }
    });
    await watchOneReady.future.timeout(const Duration(seconds: 10));
    if (watchOneEvents.first?['title'] != 'Original Item') {
      throw StateError('watchOne initial mismatch: ${watchOneEvents.first}');
    }

    // 3. Keep a query watcher active and verify its result changes after patch.
    final queryEvents = <List<Map<String, Object?>>>[];
    final queryReady = Completer<void>();
    final queryUpdated = Completer<void>();
    final watchQueryStream =
        items.query().where('done', eq: false).limit(10).watch();
    final watchQuerySub = watchQueryStream.listen((rows) {
      queryEvents.add(rows);
      if (queryEvents.length == 1) queryReady.complete();
      if (rows.isEmpty && !queryUpdated.isCompleted) queryUpdated.complete();
    });
    await queryReady.future.timeout(const Duration(seconds: 10));
    if (queryEvents.first.isEmpty ||
        queryEvents.first.first['id'] != 'item00000000001') {
      throw StateError('watchQuery initial mismatch: ${queryEvents.first}');
    }

    // 4. A committed mutation must produce worker-originated stream events.
    await items.patch('item00000000001', {
      'title': 'Updated Item',
      'done': true,
    });
    await Future.wait([
      watchOneUpdated.future.timeout(const Duration(seconds: 10)),
      queryUpdated.future.timeout(const Duration(seconds: 10)),
    ]);

    // 5. Deleting the row must produce null from watchOne.
    await items.purge('item00000000001');
    await watchOneDeleted.future.timeout(const Duration(seconds: 10));

    await watchOneSub.cancel();
    await watchQuerySub.cancel();
    await pocket.close();
    report('passed',
        'watchOne and watchQuery delivered initial, update, and deletion events.');
  } catch (e, stack) {
    report('failed', '$e\n$stack');
  }
}
