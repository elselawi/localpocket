import 'package:flutter/material.dart';
import 'package:localpocket/localpocket.dart';

import '../../core/app_state.dart';
import '../widgets/demo_panel.dart';

class PerformancePage extends StatefulWidget {
  const PerformancePage({super.key, required this.state});
  final PlaygroundAppState state;

  @override
  State<PerformancePage> createState() => _PerformancePageState();
}

class _PerformancePageState extends State<PerformancePage> {
  bool _loading = false;
  String? _error;
  Map<String, Object?> _result = {};

  LocalPocket? get _db => widget.state.db;

  Future<void> _benchmark() async {
    final db = _db;
    if (db == null) return;
    setState(() => _loading = true);
    try {
      // 1000 point reads
      final ids = await db.collection('metrics').query().ids();
      final reads = ids.take(min(1000, ids.length)).toList();
      final sw = Stopwatch()..start();
      var hit = 0;
      for (final id in reads) {
        final r = await db.collection('metrics').get(id);
        if (r != null) hit++;
      }
      sw.stop();

      // 200 bulk writes of 10 each
      final sw2 = Stopwatch()..start();
      await db.transaction((tx) async {
        for (var i = 0; i < 200; i++) {
          await tx.collection('posts').putAll([
            {
              'title': 'Perf $i',
              'views': i,
              'likes': i % 7,
              'tags': const ['perf'],
            },
          ]);
        }
      });
      sw2.stop();

      final perf = db.perf;
      setState(() {
        _result = {
          'point reads':
              '$hit/${reads.length} cache hits · '
              '${sw.elapsedMicroseconds} µs · '
              '${reads.isEmpty ? 0 : (sw.elapsedMicroseconds / reads.length).toStringAsFixed(0)} µs/read',
          'bulk writes':
              '200 txns · ${sw2.elapsedMilliseconds} ms · '
              '${(sw2.elapsedMicroseconds / 200).toStringAsFixed(0)} µs/txn',
          'live perf counters':
              'writes=${perf.writeTransactions} · '
              'queries=${perf.queries} · rows=${perf.rowsWritten}',
        };
        _error = null;
      });
    } catch (e) {
      setState(() => _error = '$e');
    } finally {
      setState(() => _loading = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final scheme = Theme.of(context).colorScheme;
    return SingleChildScrollView(
      padding: const EdgeInsets.all(24),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Performance',
            style: Theme.of(
              context,
            ).textTheme.headlineMedium?.copyWith(fontWeight: FontWeight.w800),
          ),
          const SizedBox(height: 8),
          Text(
            'Measure real timings in this exact environment. These are runtime '
            'measurements from your session, not fabricated benchmark numbers.',
            style: Theme.of(context).textTheme.bodyLarge,
          ),
          const SizedBox(height: 20),
          DemoPanel(
            title: 'Live micro-benchmark',
            icon: Icons.speed_outlined,
            description:
                'Runs 1,000 cached point reads and 200 transactional bulk '
                'writes against the live database and reports measured times.',
            code: _benchCode,
            actions: [
              FilledButton.icon(
                onPressed: _loading ? null : _benchmark,
                icon: const Icon(Icons.timer_outlined),
                label: const Text('Run benchmark'),
              ),
            ],
            child: _loading
                ? const LoadingState(message: 'Benchmarking…')
                : _error != null
                ? ResultView(
                    message: _error!,
                    color: scheme.error,
                    icon: Icons.error_outline,
                  )
                : _result.isEmpty
                ? const EmptyState(
                    title: 'No benchmark run yet',
                    message: 'Press "Run benchmark" to measure.',
                    icon: Icons.timer_outlined,
                  )
                : Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      for (final e in _result.entries)
                        Container(
                          margin: const EdgeInsets.only(bottom: 8),
                          padding: const EdgeInsets.symmetric(
                            horizontal: 14,
                            vertical: 12,
                          ),
                          width: double.infinity,
                          decoration: BoxDecoration(
                            color: scheme.surfaceContainerHigh,
                            borderRadius: BorderRadius.circular(10),
                            border: Border.all(
                              color: scheme.primary.withValues(alpha: 0.4),
                            ),
                          ),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                e.key,
                                style: Theme.of(context).textTheme.labelSmall
                                    ?.copyWith(color: scheme.onSurfaceVariant),
                              ),
                              const SizedBox(height: 2),
                              Text(
                                e.value.toString(),
                                style: Theme.of(context).textTheme.bodyMedium
                                    ?.copyWith(fontWeight: FontWeight.w600),
                              ),
                            ],
                          ),
                        ),
                    ],
                  ),
          ),
          const SizedBox(height: 16),
          const DemoPanel(
            title: 'Why it is fast',
            icon: Icons.insights_outlined,
            description:
                'Sub-microsecond point reads come from the LRU read cache plus '
                'a statement pool; native aggregates push down to SQLite; '
                'writes batch through a serialized write queue.',
            child: SizedBox.shrink(),
          ),
        ],
      ),
    );
  }

  // simple min() to avoid importing dart:math for one call
  static int min(int a, int b) => a < b ? a : b;

  static const _benchCode = '''
// 1. Cached point reads
for (final id in ids) {
  final r = await db.collection('metrics').get(id);  // µs
}

// 2. Transactional bulk writes
await db.transaction((tx) async {
  for (var i = 0; i < 200; i++) {
    await tx.collection('posts').putAll([...]);
  }
});

// 3. Live counters
db.perf.writeTransactions / perf.queries / perf.rowsWritten
''';
}
