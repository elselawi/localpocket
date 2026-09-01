import 'package:flutter/material.dart';
import 'package:localpocket/src/internal/raw_surface.dart';

import '../../core/app_state.dart';
import '../widgets/demo_panel.dart';

class MaintenancePage extends StatefulWidget {
  const MaintenancePage({super.key, required this.state});
  final PlaygroundAppState state;

  @override
  State<MaintenancePage> createState() => _MaintenancePageState();
}

class _MaintenancePageState extends State<MaintenancePage> {
  bool _loading = false;
  String? _error;
  String? _planned;
  String? _explain;

  LocalPocket? get _db => widget.state.db;

  Future<void> _explainQuery(String sql) async {
    final db = _db;
    if (db == null) return;
    setState(() => _loading = true);
    try {
      final plan = await db
          .collection('tasks')
          .query()
          .where('completed', eq: false)
          .orderBy('priority')
          .limit(20)
          .explain();
      setState(() {
        _explain = plan;
        _error = null;
      });
    } catch (e) {
      setState(() => _error = '$e');
    } finally {
      setState(() => _loading = false);
    }
  }

  Future<void> _runMaintenance(String kind) async {
    final db = _db;
    if (db == null) return;
    setState(() => _loading = true);
    try {
      switch (kind) {
        case 'maintenance':
          await db.runMaintenance();
          _planned =
              'runMaintenance() completed: WAL checkpointed, settled '
              'outbox pruned, archived data compacted.';
        case 'analyze':
          await db.analyze();
          _planned = 'ANALYZE refreshed the query planner statistics.';
        case 'vacuum':
          await db.vacuum();
          _planned = 'VACUUM compacted the database file.';
        case 'prune':
          final pruned = await db.pruneOutbox();
          _planned = 'pruneOutbox() removed $pruned settled outbox rows.';
      }
      setState(() => _error = null);
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
            'Advanced & Maintenance',
            style: Theme.of(
              context,
            ).textTheme.headlineMedium?.copyWith(fontWeight: FontWeight.w800),
          ),
          const SizedBox(height: 8),
          Text(
            'Operator features for long-lived clients: query plans, WAL '
            'checkpoints, VACUUM, outbox pruning, and full maintenance.',
            style: Theme.of(context).textTheme.bodyLarge,
          ),
          const SizedBox(height: 20),
          DemoPanel(
            title: 'EXPLAIN QUERY PLAN',
            icon: Icons.account_tree_outlined,
            description:
                'Inspect how SQLite executes a query. Does it use the '
                '(status, priority) index?',
            code: _explainCode,
            actions: [
              FilledButton.icon(
                onPressed: _loading ? null : () => _explainQuery(''),
                icon: const Icon(Icons.query_stats),
                label: const Text('Explain plan'),
              ),
            ],
            child: _loading
                ? const LoadingState()
                : _explain != null
                ? Container(
                    width: double.infinity,
                    padding: const EdgeInsets.all(14),
                    decoration: BoxDecoration(
                      color: scheme.surfaceContainerHigh,
                      borderRadius: BorderRadius.circular(10),
                    ),
                    child: Text(
                      _explain!,
                      style: const TextStyle(fontFamily: 'monospace'),
                    ),
                  )
                : const EmptyState(
                    title: 'No plan yet',
                    message: 'Run explain to see the query plan.',
                    icon: Icons.query_stats,
                  ),
          ),
          const SizedBox(height: 16),
          DemoPanel(
            title: 'Maintenance operations',
            icon: Icons.settings_outlined,
            description: 'Keep disk usage and indexes healthy over time.',
            code: _maintainCode,
            actions: [
              for (final (label, kind) in [
                ('Run maintenance', 'maintenance'),
                ('ANALYZE', 'analyze'),
                ('VACUUM', 'vacuum'),
                ('Prune outbox', 'prune'),
              ])
                Padding(
                  padding: const EdgeInsets.only(right: 8),
                  child: OutlinedButton(
                    onPressed: _loading ? null : () => _runMaintenance(kind),
                    child: Text(label),
                  ),
                ),
            ],
            child: _error != null
                ? ResultView(
                    message: _error!,
                    color: scheme.error,
                    icon: Icons.error_outline,
                  )
                : _planned != null
                ? ResultView(message: _planned!, label: 'Maintenance')
                : const SizedBox.shrink(),
          ),
          const SizedBox(height: 16),
          DemoPanel(
            title: 'Schema migrations & conflict policies',
            icon: Icons.alt_route_outlined,
            description:
                'Versioned migrations with safe table rebuilds, and '
                'field-level conflict resolvers ready for sync.',
            code: _policyCode,
            child: const SizedBox.shrink(),
          ),
        ],
      ),
    );
  }

  static const _explainCode = '''
final plan = await tasks
    .query()
    .where('completed', eq: false)
    .orderBy('priority')
    .limit(20)
    .explain();
print(plan);   // e.g. "USING INDEX tasks_status_priority"
''';

  static const _maintainCode = '''
await db.runMaintenance();   // checkpoint WAL, prune outbox, compact
await db.analyze();          // refresh planner stats
await db.vacuum();           // reclaim space
await db.pruneOutbox();      // drop settled outbox rows
''';

  static const _policyCode = '''
final postSchema = CollectionSchema(
  name: 'posts',
  version: 2,
  fields: [
    Field.text('title'),
    Field.int('views'),
    Field.jsonList('tags'),
  ],
  conflictPolicy: ConflictPolicy(
    fieldOverrides: {
      'views': const CounterResolver(),   // base + localΔ + remoteΔ
      'tags':  const SetUnionWithDeletionWinsResolver(),  // merge tag sets
    },
    editsUnarchive: true,
  ),
);
''';
}
