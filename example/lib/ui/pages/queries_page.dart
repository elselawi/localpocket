import 'package:flutter/material.dart';
// Flutter exports `Row` (widget) and `Page<T>` (navigator); the typed
// snapshot and page types need the prefixed import.
import 'package:localpocket/localpocket.dart' as lp;

import '../../core/app_state.dart';
import '../../core/tasks.dart';
import '../widgets/demo_panel.dart';

class QueriesPage extends StatefulWidget {
  const QueriesPage({super.key, required this.state});
  final PlaygroundAppState state;

  @override
  State<QueriesPage> createState() => _QueriesPageState();
}

class _QueriesPageState extends State<QueriesPage> {
  String _status = 'all';
  String _sort = 'priority';
  bool _desc = false;
  String? _query;
  bool _loading = false;
  int _count = 0;
  List<Map<String, Object?>> _items = [];
  String? _nextCursor;
  lp.Page<PlaygroundTasks>? _lastPage;
  String? _error;

  @override
  void initState() {
    super.initState();
    _run();
  }

  lp.LocalPocket? get _db => widget.state.db;

  /// Maps the dropdown's wire status strings onto the typed enum.
  static TaskStatus? _taskStatus(String s) => switch (s) {
    'todo' => TaskStatus.todo,
    'in_progress' => TaskStatus.inProgress,
    'done' => TaskStatus.done,
    _ => null,
  };

  Future<void> _run({bool next = false}) async {
    final db = _db;
    if (db == null) return;
    setState(() => _loading = true);
    try {
      final store = db.store(PlaygroundTasks.store);
      final conditions = <lp.Cond<PlaygroundTasks>>[];
      final q = _query?.trim();
      if (q != null && q.isNotEmpty) {
        conditions.add(PlaygroundTasks.title.contains(q));
      }
      final status = _taskStatus(_status);
      if (status != null) {
        conditions.add(PlaygroundTasks.status.eq(status));
      }
      final spec = lp.QuerySpec<PlaygroundTasks>(
        where: conditions,
        orderBy: [
          PlaygroundTasks.priority.asc,
          if (_desc) PlaygroundTasks.title.desc else PlaygroundTasks.title.asc,
        ],
        limit: 5,
      );
      final lp.Page<PlaygroundTasks> page;
      if (next && _lastPage != null) {
        final p = await _lastPage!.next();
        if (p == null) {
          if (mounted) setState(() => _loading = false);
          return;
        }
        page = p;
      } else {
        page = await store.query(spec);
      }
      _lastPage = page;
      final cnt = await store.count(
        lp.QuerySpec(where: [PlaygroundTasks.completed.eq(false)]),
      );
      if (mounted) {
        setState(() {
          _count = cnt;
          _items = [for (final r in page.items) r.toJson()];
          if (_sort == 'title') {
            _items.sort(
              (a, b) => (a['title'] as String? ?? '').compareTo(
                b['title'] as String? ?? '',
              ),
            );
          }
          _nextCursor = page.nextCursor?.token;
          _error = null;
        });
      }
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
            'Queries & Filters',
            style: Theme.of(
              context,
            ).textTheme.headlineMedium?.copyWith(fontWeight: FontWeight.w800),
          ),
          const SizedBox(height: 8),
          Text(
            'Build parameterized filters, sorting, and keyset pagination with '
            'declarative specs. Every value is bound — never interpolated.',
            style: Theme.of(context).textTheme.bodyLarge,
          ),
          const SizedBox(height: 20),
          DemoPanel(
            title: 'Compose a query',
            icon: Icons.filter_alt_outlined,
            description: 'Choose filters/sort and run it against the live DB.',
            code: _queryCode,
            actions: [
              FilledButton.icon(
                onPressed: _loading ? null : () => _run(),
                icon: const Icon(Icons.play_arrow),
                label: const Text('Run query'),
              ),
              if (_nextCursor != null)
                OutlinedButton.icon(
                  onPressed: _loading ? null : () => _run(next: true),
                  icon: const Icon(Icons.chevron_right),
                  label: const Text('Next page'),
                ),
            ],
            child: Column(
              children: [
                Row(
                  children: [
                    Expanded(
                      flex: 2,
                      child: TextField(
                        onSubmitted: (_) => _run(),
                        decoration: const InputDecoration(
                          labelText: 'Filter title contains',
                          hintText: 'e.g. search',
                        ),
                        onChanged: (v) => _query = v,
                      ),
                    ),
                    const SizedBox(width: 12),
                    Expanded(
                      child: DropdownButtonFormField<String>(
                        initialValue: _status,
                        decoration: const InputDecoration(labelText: 'Status'),
                        items: const [
                          DropdownMenuItem(value: 'all', child: Text('all')),
                          DropdownMenuItem(value: 'todo', child: Text('todo')),
                          DropdownMenuItem(
                            value: 'in_progress',
                            child: Text('in_progress'),
                          ),
                          DropdownMenuItem(value: 'done', child: Text('done')),
                        ],
                        onChanged: (v) => setState(() => _status = v ?? 'all'),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 12),
                Row(
                  children: [
                    const Text('Sort:'),
                    const SizedBox(width: 8),
                    ChoiceChip(
                      label: const Text('Priority'),
                      selected: _sort == 'priority',
                      onSelected: (_) {
                        setState(() => _sort = 'priority');
                      },
                    ),
                    const SizedBox(width: 8),
                    ChoiceChip(
                      label: const Text('Title'),
                      selected: _sort == 'title',
                      onSelected: (_) => setState(() => _sort = 'title'),
                    ),
                    const Spacer(),
                    IconButton(
                      tooltip: 'Toggle direction',
                      icon: Icon(
                        _desc ? Icons.arrow_downward : Icons.arrow_upward,
                      ),
                      onPressed: () => setState(() => _desc = !_desc),
                    ),
                  ],
                ),
              ],
            ),
          ),
          const SizedBox(height: 16),
          if (_error != null)
            Padding(
              padding: const EdgeInsets.only(bottom: 16),
              child: ResultView(
                message: _error!,
                color: Theme.of(context).colorScheme.error,
                icon: Icons.error_outline,
              ),
            ),
          DemoPanel(
            title: 'Results',
            icon: Icons.table_rows_outlined,
            description:
                'Showing 5 per page (keyset). Count = open (non-completed) tasks.',
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Open tasks: $_count',
                  style: Theme.of(context).textTheme.labelMedium?.copyWith(
                    fontWeight: FontWeight.w700,
                  ),
                ),
                const SizedBox(height: 8),
                if (_loading)
                  const LoadingState()
                else if (_items.isEmpty)
                  const EmptyState(
                    title: 'No results',
                    message: 'Nothing matches that query.',
                    icon: Icons.search_off,
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
                        color: Theme.of(
                          context,
                        ).colorScheme.surfaceContainerHigh,
                        borderRadius: BorderRadius.circular(10),
                      ),
                      child: Row(
                        children: [
                          Icon(
                            (r['completed'] as bool? ?? false)
                                ? Icons.check_circle
                                : Icons.radio_button_unchecked,
                            size: 16,
                            color: (r['completed'] as bool? ?? false)
                                ? Colors.green
                                : Theme.of(
                                    context,
                                  ).colorScheme.onSurfaceVariant,
                          ),
                          const SizedBox(width: 10),
                          Expanded(child: Text(r['title'] as String? ?? '-')),
                          Text(
                            'p${r['priority']}',
                            style: Theme.of(context).textTheme.labelSmall,
                          ),
                          const SizedBox(width: 8),
                          Text(
                            r['status'] as String? ?? '',
                            style: Theme.of(context).textTheme.labelSmall,
                          ),
                        ],
                      ),
                    ),
                if (_items.isNotEmpty && _nextCursor != null)
                  Padding(
                    padding: const EdgeInsets.only(top: 6),
                    child: Text(
                      'hasNext: true — use the Next page button.',
                      style: Theme.of(context).textTheme.labelSmall?.copyWith(
                        color: Theme.of(context).colorScheme.onSurfaceVariant,
                      ),
                    ),
                  ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  static const _queryCode = '''
final page = await tasks.query(
  QuerySpec(
    where: [PlaygroundTasks.completed.eq(false)],
    orderBy: [PlaygroundTasks.priority.asc],
    limit: 5,
  ),
);

// keyset pagination
final next = await page.next();
''';
}
