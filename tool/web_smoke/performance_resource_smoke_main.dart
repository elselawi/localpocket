import 'dart:async';
import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'package:localpocket/src/core/schema.dart';
import 'package:localpocket/src/web/facade.dart';

Future<void> main() async {
  void report(String status, [String? detail]) {
    globalContext.setProperty('__performance_resource_smoke'.toJS, status.toJS);
    if (detail != null) {
      globalContext.setProperty(
          '__performance_resource_smoke_detail'.toJS, detail.toJS);
    }
  }

  int elapsedUs(Stopwatch sw) => sw.elapsedMicroseconds;

  try {
    final schema = CollectionSchema<Object?>(
      name: 'performance',
      version: 1,
      fields: [Field.text('value', required: true), Field.int('batch')],
    );
    final startup = Stopwatch()..start();
    final pocket = await LocalPocket.open(
      path: 'performance_${DateTime.now().microsecondsSinceEpoch}',
      stores: [schema],
    );
    startup.stop();
    try {
      final collection = pocket.collection('performance');
      final requestTimes = <int>[];
      for (var i = 0; i < 20; i++) {
        final sw = Stopwatch()..start();
        await collection.query().limit(1).count();
        sw.stop();
        requestTimes.add(elapsedUs(sw));
      }

      final batchTimes = <String, int>{};
      for (final size in [500, 5000]) {
        final records = [
          for (var i = 0; i < size; i++)
            {
              'id':
                  'p${size.toString().padLeft(5, '0')}${i.toString().padLeft(9, '0')}',
              'value': 'value-$i',
              'batch': size,
            }
        ];
        final sw = Stopwatch()..start();
        await collection.putAll(records);
        sw.stop();
        batchTimes['$size'] = elapsedUs(sw);
      }

      final txTimes = <int>[];
      for (var i = 0; i < 5; i++) {
        final sw = Stopwatch()..start();
        await pocket.transaction((tx) async {
          await tx.collection('performance').put({
            'id': 'txp${i.toString().padLeft(12, '0')}',
            'value': 'tx-$i',
            'batch': 1,
          });
          await tx.query('performance').limit(1).count();
        });
        sw.stop();
        txTimes.add(elapsedUs(sw));
      }

      final page = await collection.query().limit(10).fetch();
      final watchEvents = <List<Map<String, Object?>>>[];
      final watchSub =
          collection.query().limit(10).watch().listen(watchEvents.add);
      await Future<void>.delayed(const Duration(milliseconds: 200));
      await watchSub.cancel();
      if (watchEvents.isEmpty) {
        throw StateError('Performance watch did not initialize.');
      }

      for (var cycle = 0; cycle < 3; cycle++) {
        final sw = Stopwatch()..start();
        await collection.query().limit(10).fetch();
        sw.stop();
      }

      report(
          'passed',
          'startupUs=${startup.elapsedMicroseconds}; requestUs=${requestTimes.join(',')}; '
              'batchUs=$batchTimes; txUs=${txTimes.join(',')}; rows=${page.items.length}; '
              'watchEvents=${watchEvents.length}');
    } finally {
      await pocket.close();
    }
  } catch (error, stack) {
    report('failed', '$error\n$stack');
  }
}
