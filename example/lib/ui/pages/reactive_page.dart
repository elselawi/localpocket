import 'dart:async';

import 'package:flutter/material.dart';
import 'package:localpocket/src/internal/raw_surface.dart';

import '../../core/app_state.dart';
import '../widgets/demo_panel.dart';

class ReactivePage extends StatefulWidget {
  const ReactivePage({super.key, required this.state});
  final PlaygroundAppState state;

  @override
  State<ReactivePage> createState() => _ReactivePageState();
}

class _ReactivePageState extends State<ReactivePage> {
  StreamSubscription<List<Map<String, Object?>>>? _sub;
  List<Map<String, Object?>> _items = [];
  int _emissions = 0;
  int _todoCounter = 0;
  String _status = 'idle';
  String? _error;

  @override
  void initState() {
    super.initState();
    _startWatch();
  }

  @override
  void dispose() {
    _sub?.cancel();
    super.dispose();
  }

  LocalPocket? get _db => widget.state.db;

  void _startWatch() {
    _sub?.cancel();
    final db = _db;
    if (db == null) return;
    setState(() => _status = 'listening…');
    _sub = db
        .collection('tasks')
        .query()
        .where('status', eq: 'in_progress')
        .limit(50)
        .watch()
        .listen(
          (items) {
            if (mounted) {
              setState(() {
                _items = items;
                _emissions++;
                _status = 'emitted';
              });
            }
          },
          onError: (e) {
            if (mounted) setState(() => _error = '$e');
          },
        );
  }

  Future<void> _bump() async {
    final db = _db;
    if (db == null) return;
    // Find an existing in_progress task or a done one to flip.
    final page = await db
        .collection('tasks')
        .query()
        .orderBy('priority')
        .limit(10)
        .fetch();
    if (page.items.isEmpty) {
      if (mounted) {
        ScaffoldMessenger.of(
          context,
        ).showSnackBar(const SnackBar(content: Text('No tasks to bump.')));
      }
      return;
    }
    final target = page.items.first;
    final next = (target['status'] == 'done') ? 'in_progress' : 'done';
    await db.collection('tasks').patch(target['id'] as String, {
      'status': next,
      'completed': next == 'done',
    });
    // Also count open tasks.
    final count = await db
        .collection('tasks')
        .query()
        .where('completed', eq: false)
        .count();
    if (mounted) setState(() => _todoCounter = count);
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
            'Reactive Watches',
            style: Theme.of(
              context,
            ).textTheme.headlineMedium?.copyWith(fontWeight: FontWeight.w800),
          ),
          const SizedBox(height: 8),
          Text(
            'Watch a query and get live updates whenever committed changes '
            'affect the result set. NaN-free: identical snapshots do not re-emit.',
            style: Theme.of(context).textTheme.bodyLarge,
          ),
          const SizedBox(height: 20),
          DemoPanel(
            title: 'Live query watch',
            icon: Icons.sensors_outlined,
            description:
                'The list below is bound to tasks where status == in_progress. '
                'Click "Bump a task" to mutate data and watch it update live.',
            code: _watchCode,
            actions: [
              FilledButton.icon(
                onPressed: _bump,
                icon: const Icon(Icons.bolt),
                label: const Text('Bump a task'),
              ),
            ],
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    Chip(
                      avatar: Icon(
                        Icons.sensors,
                        size: 16,
                        color: scheme.primary,
                      ),
                      label: Text('$_emissions emissions'),
                    ),
                    const SizedBox(width: 8),
                    Chip(
                      avatar: Icon(Icons.sync, size: 16, color: scheme.primary),
                      label: Text(_status),
                    ),
                    const SizedBox(width: 8),
                    Chip(
                      avatar: Icon(
                        Icons.check_circle_outline,
                        size: 16,
                        color: scheme.onSurfaceVariant,
                      ),
                      label: Text('$_todoCounter open'),
                    ),
                    const SizedBox(width: 8),
                    Chip(
                      avatar: Icon(
                        Icons.inbox,
                        size: 16,
                        color: scheme.onSurfaceVariant,
                      ),
                      label: Text('${_items.length} rows'),
                    ),
                  ],
                ),
                const SizedBox(height: 12),
                if (_error != null)
                  ResultView(
                    message: _error!,
                    color: scheme.error,
                    icon: Icons.error_outline,
                  )
                else if (_items.isEmpty)
                  const EmptyState(
                    title: 'Watching…',
                    message:
                        'No in_progress tasks yet. Bump one to see live updates.',
                    icon: Icons.radar,
                  )
                else
                  for (final r in _items)
                    Container(
                      margin: const EdgeInsets.only(bottom: 6),
                      padding: const EdgeInsets.symmetric(
                        horizontal: 12,
                        vertical: 10,
                      ),
                      decoration: BoxDecoration(
                        color: scheme.surfaceContainerHigh,
                        borderRadius: BorderRadius.circular(10),
                      ),
                      child: Row(
                        children: [
                          const Icon(Icons.work_outline, size: 16),
                          const SizedBox(width: 10),
                          Expanded(child: Text(r['title'] as String? ?? '-')),
                          Text(
                            'p${r['priority']}',
                            style: Theme.of(context).textTheme.labelSmall,
                          ),
                        ],
                      ),
                    ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  static const _watchCode = '''
final sub = db.collection('tasks')
    .query()
    .where('status', eq: 'in_progress')
    .limit(50)
    .watch()
    .listen((items) => setState(() => rows = items));

// single record watch
final one = db.collection('tasks').watchOne(id)
    .listen((doc) => print(doc));

await sub.cancel();   // always cancel
''';
}
