import 'package:flutter/material.dart';
import 'package:localpocket/src/internal/raw_surface.dart';

import '../../core/app_state.dart';
import '../widgets/demo_panel.dart';

class AggregatesPage extends StatefulWidget {
  const AggregatesPage({super.key, required this.state});
  final PlaygroundAppState state;

  @override
  State<AggregatesPage> createState() => _AggregatesPageState();
}

class _AggregatesPageState extends State<AggregatesPage> {
  bool _loading = false;
  String? _error;
  Map<String, Object?> _agg = {};
  Duration? _duration;

  @override
  void initState() {
    super.initState();
    _run();
  }

  LocalPocket? get _db => widget.state.db;

  Future<void> _run() async {
    final db = _db;
    if (db == null) return;
    setState(() => _loading = true);
    final sw = Stopwatch()..start();
    try {
      final q = db.collection('metrics').query();
      final count = await q.count();
      final sum = await q.sum('value');
      final min = await q.min('value');
      final max = await q.max('value');
      final avg = await q.avg('value');
      final distinctLabel = await q.countDistinct('label');
      final distincts = await q.distinct('label');
      sw.stop();
      setState(() {
        _agg = {
          'count': count,
          'sum': sum,
          'min': min,
          'max': max,
          'avg': avg,
          'countDistinct(label)': distinctLabel,
          'distinct labels': distincts,
        };
        _duration = sw.elapsed;
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
    return SingleChildScrollView(
      padding: const EdgeInsets.all(24),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Aggregates',
            style: Theme.of(
              context,
            ).textTheme.headlineMedium?.copyWith(fontWeight: FontWeight.w800),
          ),
          const SizedBox(height: 8),
          Text(
            'COUNT, SUM, MIN, MAX, AVG, DISTINCT and COUNT(DISTINCT) compile '
            'straight to native SQLite. No records are pulled into Dart.',
            style: Theme.of(context).textTheme.bodyLarge,
          ),
          const SizedBox(height: 20),
          DemoPanel(
            title: 'Native aggregate pushdown',
            icon: Icons.calculate_outlined,
            description:
                'Run the whole aggregate set over the seeded metrics store '
                '(1,200 rows) and see how long it takes.',
            code: _aggCode,
            actions: [
              FilledButton.icon(
                onPressed: _loading ? null : _run,
                icon: const Icon(Icons.refresh),
                label: const Text('Re-run aggregates'),
              ),
            ],
            child: _loading
                ? const LoadingState(message: 'Computing aggregates…')
                : _error != null
                ? ResultView(
                    message: _error!,
                    color: Theme.of(context).colorScheme.error,
                    icon: Icons.error_outline,
                  )
                : Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      ResultView(
                        message: 'Aggregates computed over 1,200 metric rows.',
                        duration: _duration,
                      ),
                      const SizedBox(height: 12),
                      Wrap(
                        spacing: 10,
                        runSpacing: 10,
                        children: [
                          for (final e in _agg.entries)
                            _aggPill(e.key, '${e.value}'),
                        ],
                      ),
                    ],
                  ),
          ),
          const SizedBox(height: 16),
          DemoPanel(
            title: 'How it works',
            icon: Icons.info_outline,
            description:
                'Each aggregate is a single SQL expression executed by the '
                'engine. No rows are transferred to Dart.',
            code: _explain,
            child: const SizedBox.shrink(),
          ),
        ],
      ),
    );
  }

  Widget _aggPill(String label, String value) {
    final scheme = Theme.of(context).colorScheme;
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
      decoration: BoxDecoration(
        color: scheme.surfaceContainerHigh,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: scheme.outlineVariant.withValues(alpha: 0.5)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            label,
            style: Theme.of(
              context,
            ).textTheme.labelSmall?.copyWith(color: scheme.onSurfaceVariant),
          ),
          const SizedBox(height: 2),
          Text(
            value,
            style: Theme.of(
              context,
            ).textTheme.titleMedium?.copyWith(fontWeight: FontWeight.w700),
          ),
        ],
      ),
    );
  }

  static const _aggCode = '''
final q = db.collection('metrics').query();
final count = await q.count();          // COUNT(*)
final sum   = await q.sum('value');     // SUM(value)
final min   = await q.min('value');
final max   = await q.max('value');
final avg   = await q.avg('value');
final distinctLabels = await q.countDistinct('label');
final labels = await q.distinct('label');
''';

  static const _explain = '''
// Each call becomes a single parameterized aggregate SQL:
//   SELECT COUNT(*) FROM "metrics" WHERE archived = 0 AND hidden = 0
//   SELECT SUM("value") FROM "metrics" ...
''';
}
