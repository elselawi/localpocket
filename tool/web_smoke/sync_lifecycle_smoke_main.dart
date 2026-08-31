import 'dart:async';
import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'package:localpocket/src/core/schema.dart';
import 'package:localpocket/src/sync/status.dart';
import 'package:localpocket/src/web/facade.dart';

Future<void> main() async {
  void report(String status, [String? detail]) {
    globalContext.setProperty('__sync_lifecycle_smoke'.toJS, status.toJS);
    if (detail != null) {
      globalContext.setProperty(
          '__sync_lifecycle_smoke_detail'.toJS, detail.toJS);
    }
  }

  try {
    final schema = CollectionSchema<Object?>(
      name: 'sync_items',
      version: 1,
      fields: [Field.text('title', required: true), Field.bool('done')],
    );
    final pocket = await LocalPocket.open(
      path: 'sync_lifecycle_${DateTime.now().microsecondsSinceEpoch}',
      stores: [schema],
    );
    try {
      final statuses = <SyncStatus>[];
      final statusSub = pocket.syncStatus.listen(statuses.add);
      await pocket.startSync(
        baseUrl: 'http://127.0.0.1:8125',
        scopeId: 'browser-sync',
        token: 'valid-token',
      );
      await pocket.syncNow();
      final remote =
          await pocket.collection('sync_items').get('syncitem0000001');
      if (remote?['title'] != 'remote seed') {
        throw StateError('Browser sync pull failed: $remote');
      }

      await pocket.collection('sync_items').put({
        'id': 'syncitem0000002',
        'title': 'local push',
        'done': false,
      });
      await pocket.syncNow();

      await pocket.pauseSync();
      await pocket.resumeSync();
      await pocket.setConnectivity(false);
      await pocket.setConnectivity(true);
      await pocket.updateAuth('refreshed-token');
      if (statuses.isEmpty) {
        throw StateError('Sync status was not delivered through the worker.');
      }
      await pocket.stopSync();
      await statusSub.cancel();
    } finally {
      await pocket.close();
    }
    report('passed');
  } catch (error, stack) {
    report('failed', '$error\n$stack');
  }
}
