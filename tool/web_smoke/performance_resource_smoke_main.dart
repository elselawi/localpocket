import 'dart:async';
import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'package:localpocket/src/kernel/schema.dart';
import 'package:localpocket/src/web/facade.dart';

Future<void> main() async {
  void report(String status, [String? detail]) {
    globalContext.setProperty('__performance_resource_smoke'.toJS, status.toJS);
    if (detail != null) {
      globalContext.setProperty(
          '__performance_resource_smoke_detail'.toJS, detail.toJS);
    }
  }

  /// Progress marker reported to the runner on timeout, matching the other
  /// smoke pages so a stall pinpoints its stage (`__performance_resource_smoke_progress`).
  void mark(String stage) {
    globalContext.setProperty(
        '__performance_resource_smoke_progress'.toJS, stage.toJS);
  }

  int elapsedUs(Stopwatch sw) => sw.elapsedMicroseconds;

  try {
    final schema = CollectionSchema<Object?>(
      name: 'performance',
      version: 1,
      fields: [Field.text('value', required: true), Field.int('batch')],
    );
    final startup = Stopwatch()..start();
    mark('open');
    final pocket = await LocalPocket.open(
      path: 'performance_${DateTime.now().microsecondsSinceEpoch}',
      stores: [schema],
    );
    startup.stop();
    mark('opened');
    try {
      final collection = pocket.collection('performance');
      final requestTimes = <int>[];
      mark('counts');
      for (var i = 0; i < 20; i++) {
        final sw = Stopwatch()..start();
        await collection.query().limit(1).count();
        sw.stop();
        requestTimes.add(elapsedUs(sw));
      }

      mark('batches');
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
        mark('batch_$size');
      }

      mark('tx');
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

      mark('fetch');
      final page = await collection.query().limit(10).fetch();
      mark('watch');
      final watchEvents = <List<Map<String, Object?>>>[];
      final watchReady = Completer<void>();
      final watchSub = collection.query().limit(10).watch().listen((e) {
        watchEvents.add(e);
        if (!watchReady.isCompleted) watchReady.complete();
      });
      // The initial snapshot is emitted asynchronously from the worker. Wait
      // for the first event with a generous timeout instead of a fixed sleep,
      // which flakes on slow browsers (Firefox/WebKit under load) where the
      // snapshot can arrive later than 200ms.
      await watchReady.future.timeout(const Duration(seconds: 10));
      await watchSub.cancel();
      mark('watch_done');
      if (watchEvents.isEmpty) {
        throw StateError('Performance watch did not initialize.');
      }

      mark('cycles');
      for (var cycle = 0; cycle < 3; cycle++) {
        final sw = Stopwatch()..start();
        await collection.query().limit(10).fetch();
        sw.stop();
      }

      mark('reporting');

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
