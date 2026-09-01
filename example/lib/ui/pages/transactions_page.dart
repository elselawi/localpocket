import 'package:flutter/material.dart';
import 'package:localpocket/src/internal/raw_surface.dart';

import '../../core/app_state.dart';
import '../widgets/demo_panel.dart';

class TransactionsPage extends StatefulWidget {
  const TransactionsPage({super.key, required this.state});
  final PlaygroundAppState state;

  @override
  State<TransactionsPage> createState() => _TransactionsPageState();
}

class _TransactionsPageState extends State<TransactionsPage> {
  bool _loading = false;
  String? _error;
  String? _ok;
  Duration? _duration;
  int _taskCount = 0;

  @override
  void initState() {
    super.initState();
    _loadCount();
  }

  LocalPocket? get _db => widget.state.db;

  Future<void> _loadCount() async {
    final db = _db;
    if (db == null) return;
    final c = await db.collection('tasks').query().count();
    if (mounted) setState(() => _taskCount = c);
  }

  Future<void> _runAllOrNothing() async {
    final db = _db;
    if (db == null) return;
    setState(() {
      _loading = true;
      _ok = null;
      _error = null;
    });
    final sw = Stopwatch()..start();
    try {
      // Batch of atomic writes.
      await db.transaction((tx) async {
        final tasks = tx.collection('tasks');
        await tasks.putAll([
          {
            'title': 'Tx task A',
            'status': 'in_progress',
            'priority': 2,
            'completed': false,
          },
          {
            'title': 'Tx task B',
            'status': 'todo',
            'priority': 4,
            'completed': false,
          },
        ]);
      });
      sw.stop();
      setState(() {
        _ok = 'Committed batch: 2 tasks written atomically.';
        _duration = sw.elapsed;
      });
      await _loadCount();
    } catch (e) {
      setState(() => _error = '$e');
    } finally {
      setState(() => _loading = false);
    }
  }

  Future<void> _runRollback() async {
    final db = _db;
    if (db == null) return;
    setState(() {
      _loading = true;
      _ok = null;
      _error = null;
    });
    final sw = Stopwatch()..start();
    try {
      try {
        await db.transaction((tx) async {
          final tasks = tx.collection('tasks');
          await tasks.put({
            'title': 'This should roll back',
            'status': 'todo',
            'priority': 9,
          });
          // Force a failure mid-transaction.
          throw StateError(
            'Simulated failure — any writes in this tx are rolled back.',
          );
        });
      } catch (_) {
        // expected
      }
      sw.stop();
      final count = await db.collection('tasks').query().count();
      setState(() {
        _ok =
            'Transaction rolled back. Task count unchanged: $count (was $_taskCount). '
            'The failed write left no trace.';
        _duration = sw.elapsed;
      });
      await _loadCount();
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
            'Transactions',
            style: Theme.of(
              context,
            ).textTheme.headlineMedium?.copyWith(fontWeight: FontWeight.w800),
          ),
          const SizedBox(height: 8),
          Text(
            'Domain rows, outbox intent, and sync state commit atomically in '
            'one serialized write transaction. If anything throws, everything '
            'rolls back.',
            style: Theme.of(context).textTheme.bodyLarge,
          ),
          const SizedBox(height: 20),
          DemoPanel(
            title: 'Atomic batch write',
            icon: Icons.all_inclusive_outlined,
            description:
                'Put all records in one transaction. Current task count: $_taskCount.',
            code: _txCode,
            actions: [
              FilledButton.icon(
                onPressed: _loading ? null : _runAllOrNothing,
                icon: const Icon(Icons.check),
                label: const Text('Commit batch'),
              ),
            ],
            child: const SizedBox.shrink(),
          ),
          const SizedBox(height: 16),
          DemoPanel(
            title: 'Rollback on failure',
            icon: Icons.undo_outlined,
            description:
                'A transaction that throws mid-way rolls back every write it '
                'made — no partial state.',
            code: _rollbackCode,
            actions: [
              OutlinedButton.icon(
                onPressed: _loading ? null : _runRollback,
                icon: const Icon(Icons.replay),
                label: const Text('Simulate rollback'),
              ),
            ],
            child: const SizedBox.shrink(),
          ),
          const SizedBox(height: 16),
          if (_error != null)
            ResultView(
              message: _error!,
              color: Theme.of(context).colorScheme.error,
              icon: Icons.error_outline,
            ),
          if (_ok != null)
            ResultView(
              message: _ok!,
              duration: _duration,
              label: 'Transaction',
            ),
        ],
      ),
    );
  }

  static const _txCode = '''
await db.transaction((tx) async {
  final tasks = tx.collection('tasks');
  await tasks.putAll([
    {'title': 'A', 'priority': 2},
    {'title': 'B', 'priority': 4},
  ]);
});
// Commits atomically: rows + outbox + sync state all-or-nothing.
''';

  static const _rollbackCode = '''
try {
  await db.transaction((tx) async {
    await tx.collection('tasks').put({'title': 'doomed'});
    throw StateError('boom');   // any exception rolls back
  });
} catch (_) {
  // Nothing was committed.
}
''';
}
