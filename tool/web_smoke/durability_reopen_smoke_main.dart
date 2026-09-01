import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'package:localpocket/src/kernel/schema.dart';
import 'package:localpocket/src/web/facade.dart';

Future<void> main() async {
  var stage = 'start';
  void mark(String next) => stage = next;
  void report(String status, [String? detail]) {
    globalContext.setProperty('__durability_reopen_smoke'.toJS, status.toJS);
    if (detail != null) {
      globalContext.setProperty(
          '__durability_reopen_smoke_detail'.toJS, detail.toJS);
    }
  }

  try {
    final schema = CollectionSchema<Object?>(
      name: 'durability',
      version: 1,
      fields: [Field.text('value', required: true), Field.int('batch')],
    );
    final path = 'durability_reopen_${DateTime.now().microsecondsSinceEpoch}';
    mark('open-initial');
    final pocket = await LocalPocket.open(path: path, stores: [schema]);
    final ids = <String>[];
    try {
      final records = [
        for (var i = 0; i < 2000; i++)
          {
            'id': 'durab${i.toString().padLeft(10, '0')}',
            'value': 'value-$i',
            'batch': 1,
          }
      ];
      ids.addAll(records.map((record) => record['id']! as String));
      mark('large-put');
      await pocket.collection('durability').putAll(records);
      final count = await pocket.collection('durability').query().count();
      if (count != records.length) {
        throw StateError('Large batch count mismatch before reopen: $count');
      }
    } finally {
      await pocket.close();
    }

    mark('reopen');
    final reopened = await LocalPocket.open(path: path, stores: [schema]);
    try {
      final count = await reopened.collection('durability').query().count();
      if (count != ids.length) {
        throw StateError('OPFS/IndexedDB reopen count mismatch: $count');
      }
      final sample = await reopened.collection('durability').get(ids[1500]);
      if (sample?['value'] != 'value-1500') {
        throw StateError('Reopened record contents mismatch: $sample');
      }
    } finally {
      await reopened.close();
    }

    // `:memory:` is currently covered as a documented unsupported path: the
    // production facade uses DedicatedOnlyConnector, while sqlite3_web's
    // inMemoryShared implementation requires a SharedWorker connection.
    // Repeated lifecycle cleanup with no active work must remain stable.
    mark('cycles');
    for (var i = 0; i < 3; i++) {
      final cycle =
          await LocalPocket.open(path: 'durability_cycle_$i', stores: [schema]);
      await cycle.close();
      await cycle.close();
    }

    report('passed');
  } catch (error, stack) {
    report('failed', 'stage=$stage\n$error\n$stack');
  }
}
