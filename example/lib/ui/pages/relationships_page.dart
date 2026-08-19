import 'package:flutter/material.dart';
import 'package:localpocket/localpocket.dart';

import '../../core/app_state.dart';
import '../helpers.dart';
import '../widgets/demo_panel.dart';

class RelationshipsPage extends StatefulWidget {
  const RelationshipsPage({super.key, required this.state});
  final PlaygroundAppState state;

  @override
  State<RelationshipsPage> createState() => _RelationshipsPageState();
}

class _RelationshipsPageState extends State<RelationshipsPage> {
  bool _loading = false;
  String? _error;
  List<Map<String, Object?>> _rows = [];
  List<Map<String, Object?>> _users = [];

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
    try {
      final users = await db.collection('users').query().all().fetch();
      final tasks = await Helpers.tasksWithAssignee(db, limit: 30);
      setState(() {
        _users = users.items;
        _rows = tasks;
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
            'Relationships',
            style: Theme.of(
              context,
            ).textTheme.headlineMedium?.copyWith(fontWeight: FontWeight.w800),
          ),
          const SizedBox(height: 8),
          Text(
            'Relate records across collections with reference fields. '
            'tasks.assigned_to points to users.id.',
            style: Theme.of(context).textTheme.bodyLarge,
          ),
          const SizedBox(height: 20),
          DemoPanel(
            title: 'Users',
            icon: Icons.people_outline,
            description: 'The seeded users collection.',
            code: _userCode,
            child: _loading
                ? const LoadingState()
                : Column(
                    children: [
                      for (final r in _users)
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
                              CircleAvatar(
                                radius: 14,
                                child: Text(
                                  ((r['name'] as String? ?? '?')
                                      .split(' ')
                                      .map((e) => e.isEmpty ? '' : e[0])
                                      .take(2)
                                      .join()),
                                  style: const TextStyle(fontSize: 11),
                                ),
                              ),
                              const SizedBox(width: 10),
                              Expanded(
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      r['name'] as String? ?? '-',
                                      style: const TextStyle(
                                        fontWeight: FontWeight.w600,
                                      ),
                                    ),
                                    Text(
                                      r['email'] as String? ?? '',
                                      style: Theme.of(context)
                                          .textTheme
                                          .labelSmall
                                          ?.copyWith(
                                            color: scheme.onSurfaceVariant,
                                          ),
                                    ),
                                  ],
                                ),
                              ),
                              Chip(label: Text(r['role'] as String? ?? '')),
                            ],
                          ),
                        ),
                    ],
                  ),
          ),
          const SizedBox(height: 16),
          DemoPanel(
            title: 'Tasks joined to their assignee',
            icon: Icons.account_tree_outlined,
            description:
                'Reference fields are plain IDs; the app resolves them. '
                'Try the contact page to see CRUD across both.',
            code: _relCode,
            child: _loading
                ? const LoadingState()
                : _error != null
                ? ResultView(
                    message: _error!,
                    color: scheme.error,
                    icon: Icons.error_outline,
                  )
                : _rows.isEmpty
                ? const EmptyState(
                    title: 'No tasks',
                    message: 'Create tasks on the CRUD page first.',
                    icon: Icons.task_alt,
                  )
                : Column(
                    children: [
                      for (final r in _rows)
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
                              Icon(
                                Icons.task_alt,
                                size: 16,
                                color: scheme.primary,
                              ),
                              const SizedBox(width: 10),
                              Expanded(
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(r['title'] as String? ?? '-'),
                                    Text(
                                      '#${Helpers.shortId(r['id'] as String?)} · ${r['status']}',
                                      style: Theme.of(context)
                                          .textTheme
                                          .labelSmall
                                          ?.copyWith(
                                            color: scheme.onSurfaceVariant,
                                          ),
                                    ),
                                  ],
                                ),
                              ),
                              Chip(
                                avatar: const Icon(Icons.person, size: 14),
                                label: Text('→ ${r['assignee']}'),
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

  static const _userCode = '''
final users = await db.collection('users')
    .query().all().fetch();
''';

  static const _relCode = '''
// Store: a reference field holds the target record id
await tasks.put({
  'title': 'Design auth',
  'assigned_to': user['id'],   // users.id
});

// Resolve: read the user by id
final u = await db.collection('users').get(task['assigned_to']);
''';
}
