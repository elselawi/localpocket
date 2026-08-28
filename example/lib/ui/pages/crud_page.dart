import 'package:flutter/material.dart';
import 'package:localpocket/localpocket.dart';

import '../../core/app_state.dart';
import '../../core/tasks.dart';
import '../helpers.dart';
import '../widgets/demo_panel.dart';

class CrudPage extends StatefulWidget {
  const CrudPage({super.key, required this.state});
  final PlaygroundAppState state;

  @override
  State<CrudPage> createState() => _CrudPageState();
}

class _CrudPageState extends State<CrudPage> {
  final _titleCtrl = TextEditingController();
  final _descCtrl = TextEditingController();
  int _priority = 3;
  TaskStatus _status = TaskStatus.todo;
  bool _loading = false;
  String? _result;
  Duration? _lastDuration;
  List<Map<String, Object?>> _rows = [];
  String? _error;

  @override
  void initState() {
    super.initState();
    _refresh();
  }

  @override
  void dispose() {
    _titleCtrl.dispose();
    _descCtrl.dispose();
    super.dispose();
  }

  LocalPocket? get _db => widget.state.db;

  Future<void> _refresh() async {
    final db = _db;
    if (db == null) return;
    setState(() => _loading = true);
    try {
      final items = await Helpers.tasksWithAssignee(db, limit: 12);
      if (mounted) setState(() => _rows = items);
    } catch (e) {
      if (mounted) setState(() => _error = '$e');
    } finally {
      if (mounted) setState(() => _loading = false);
    }
  }

  Future<void> _create() async {
    final db = _db;
    if (db == null) return;
    final title = _titleCtrl.text.trim();
    if (title.isEmpty) {
      ScaffoldMessenger.of(
        context,
      ).showSnackBar(const SnackBar(content: Text('Title is required')));
      return;
    }
    setState(() => _loading = true);
    final sw = Stopwatch()..start();
    try {
      final tasks = db.store(PlaygroundTasks.instance);
      await tasks.put([
        PlaygroundTasks.title.set(title),
        PlaygroundTasks.description.set(
          _descCtrl.text.trim().isEmpty ? null : _descCtrl.text.trim(),
        ),
        PlaygroundTasks.status.set(_status),
        PlaygroundTasks.priority.set(_priority),
        PlaygroundTasks.completed.set(false),
        PlaygroundTasks.dueAt.set(
          DateTime.now().toUtc().add(Duration(days: _priority * 2)),
        ),
        PlaygroundTasks.tags.set(<String>['demo']),
      ]);
      _titleCtrl.clear();
      _descCtrl.clear();
      sw.stop();
      setState(() {
        _result = 'Created task "$title".';
        _lastDuration = sw.elapsed;
        _error = null;
      });
      await _refresh();
    } catch (e) {
      setState(() => _error = '$e');
      if (mounted) {
        ScaffoldMessenger.of(
          context,
        ).showSnackBar(SnackBar(content: Text('Create failed: $e')));
      }
    } finally {
      if (mounted) setState(() => _loading = false);
    }
  }

  Future<void> _patchCompleted(String id, bool completed, String title) async {
    final db = _db;
    if (db == null) return;
    final sw = Stopwatch()..start();
    try {
      await db.store(PlaygroundTasks.instance).patch(id, [
        PlaygroundTasks.completed.set(completed),
      ]);
      sw.stop();
      setState(() {
        _result =
            'Patched "$title" → completed=$completed. Targeted update, other fields untouched.';
        _lastDuration = sw.elapsed;
      });
      await _refresh();
    } catch (e) {
      setState(() => _error = '$e');
    }
  }

  Future<void> _archive(String id, String title) async {
    final db = _db;
    if (db == null) return;
    try {
      await db.collection('tasks').archive(id);
      setState(
        () => _result = 'Archived "$title" (soft delete, hidden from queries).',
      );
      await _refresh();
    } catch (e) {
      setState(() => _error = '$e');
    }
  }

  Future<void> _purge(String id, String title) async {
    final db = _db;
    if (db == null) return;
    final confirm = await showDialog<bool>(
      context: context,
      builder: (c) => AlertDialog(
        title: const Text('Purge record?'),
        content: Text(
          '"$title" will be permanently removed locally (no undo).',
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(c, false),
            child: const Text('Cancel'),
          ),
          FilledButton(
            onPressed: () => Navigator.pop(c, true),
            child: const Text('Purge'),
          ),
        ],
      ),
    );
    if (confirm != true) return;
    try {
      await db.collection('tasks').purge(id);
      setState(() => _result = 'Purged "$title" (hard local delete).');
      await _refresh();
    } catch (e) {
      setState(() => _error = '$e');
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
            'CRUD',
            style: Theme.of(
              context,
            ).textTheme.headlineMedium?.copyWith(fontWeight: FontWeight.w800),
          ),
          const SizedBox(height: 8),
          Text(
            'Create, read, patch, archive, restore, and purge records — with '
            'the full lifecycle the package supports.',
            style: Theme.of(context).textTheme.bodyLarge,
          ),
          const SizedBox(height: 20),
          DemoPanel(
            title: 'Create a task',
            icon: Icons.add_circle_outline,
            description: 'put() inserts or replaces; IDs are auto-generated.',
            code: _createCode,
            actions: [
              FilledButton.icon(
                onPressed: _loading ? null : _create,
                icon: const Icon(Icons.add),
                label: const Text('Create'),
              ),
            ],
            child: Column(
              children: [
                TextField(
                  controller: _titleCtrl,
                  decoration: const InputDecoration(
                    labelText: 'Title',
                    hintText: 'e.g. Write release notes',
                  ),
                ),
                const SizedBox(height: 12),
                TextField(
                  controller: _descCtrl,
                  decoration: const InputDecoration(
                    labelText: 'Description (optional)',
                    hintText: 'Add more detail…',
                  ),
                ),
                const SizedBox(height: 12),
                Row(
                  children: [
                    Expanded(
                      child: DropdownButtonFormField<TaskStatus>(
                        initialValue: _status,
                        decoration: const InputDecoration(labelText: 'Status'),
                        items: const [
                          DropdownMenuItem(
                            value: TaskStatus.todo,
                            child: Text('todo'),
                          ),
                          DropdownMenuItem(
                            value: TaskStatus.inProgress,
                            child: Text('in_progress'),
                          ),
                          DropdownMenuItem(
                            value: TaskStatus.done,
                            child: Text('done'),
                          ),
                        ],
                        onChanged: (v) =>
                            setState(() => _status = v ?? TaskStatus.todo),
                      ),
                    ),
                    const SizedBox(width: 12),
                    Expanded(
                      child: DropdownButtonFormField<int>(
                        initialValue: _priority,
                        decoration: const InputDecoration(
                          labelText: 'Priority',
                        ),
                        items: [
                          for (var p = 1; p <= 5; p++)
                            DropdownMenuItem(value: p, child: Text('$p')),
                        ],
                        onChanged: (v) => setState(() => _priority = v ?? 3),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
          const SizedBox(height: 16),
          if (_result != null || _error != null)
            Padding(
              padding: const EdgeInsets.only(bottom: 16),
              child: _error != null
                  ? ResultView(
                      message: _error!,
                      color: Theme.of(context).colorScheme.error,
                      icon: Icons.error_outline,
                      label: 'Error',
                    )
                  : ResultView(
                      message: _result!,
                      duration: _lastDuration,
                      color: Theme.of(context).colorScheme.primary,
                    ),
            ),
          DemoPanel(
            title: 'Records & lifecycle',
            icon: Icons.list_alt_outlined,
            description:
                'Click a checkbox to patch a field, or archive/purge a row.',
            code: _lifecycleCode,
            child: _loading
                ? const LoadingState()
                : _rows.isEmpty
                ? const EmptyState(
                    title: 'No tasks',
                    message: 'Create a task above to see it here.',
                    icon: Icons.task_alt,
                  )
                : Column(children: [for (final r in _rows) _taskRow(r)]),
          ),
        ],
      ),
    );
  }

  Widget _taskRow(Map<String, Object?> r) {
    final scheme = Theme.of(context).colorScheme;
    final id = (r['id'] as String?) ?? '';
    final title = (r['title'] as String?) ?? '';
    final completed = (r['completed'] as bool?) ?? false;
    final priority = (r['priority'] as int?) ?? 3;
    final status = (r['status'] as String?) ?? 'todo';

    return Container(
      margin: const EdgeInsets.only(bottom: 8),
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: scheme.surfaceContainerHigh,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: scheme.outlineVariant.withValues(alpha: 0.4)),
      ),
      child: Row(
        children: [
          Checkbox(
            value: completed,
            onChanged: (v) => _patchCompleted(id, v ?? false, title),
          ),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: TextStyle(
                    fontWeight: FontWeight.w600,
                    decoration: completed ? TextDecoration.lineThrough : null,
                  ),
                ),
                const SizedBox(height: 2),
                Text(
                  '#${Helpers.shortId(id)} · $status · p$priority · → ${r['assignee']}',
                  style: Theme.of(context).textTheme.labelSmall?.copyWith(
                    color: scheme.onSurfaceVariant,
                  ),
                ),
              ],
            ),
          ),
          IconButton(
            tooltip: 'Archive (soft delete)',
            icon: const Icon(Icons.archive_outlined),
            onPressed: () => _archive(id, title),
          ),
          IconButton(
            tooltip: 'Purge (hard delete)',
            icon: Icon(
              Icons.delete_outline,
              color: Theme.of(context).colorScheme.error,
            ),
            onPressed: () => _purge(id, title),
          ),
        ],
      ),
    );
  }

  static const _createCode = '''
final tasks = db.store(PlaygroundTasks.instance);
await tasks.put((draft) => draft
  ..set(PlaygroundTasks.title)('Write release notes')
  ..set(PlaygroundTasks.priority)(3)
  ..set(PlaygroundTasks.status)(TaskStatus.todo)
  ..set(PlaygroundTasks.completed)(false));
''';

  static const _lifecycleCode = '''
await tasks.patch(
  id,
  (draft) => draft..set(PlaygroundTasks.completed)(true),
);
await tasks.archive(id);   // soft delete (archived=true)
await tasks.restore(id);   // restore
await tasks.purge(id);     // hard local delete
''';
}
