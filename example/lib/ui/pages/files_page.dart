import 'dart:convert';

import 'package:flutter/material.dart';
// Flutter also exports a `Row` widget; hide the typed snapshot type and
// project rows to display maps below.
import 'package:localpocket/localpocket.dart' hide Row;

import '../../core/app_state.dart';
import '../../core/file_ref.dart';
import '../../core/files_helper.dart';
import '../../core/tasks.dart';
import '../helpers.dart';
import '../widgets/demo_panel.dart';

class FilesPage extends StatefulWidget {
  const FilesPage({super.key, required this.state});
  final PlaygroundAppState state;

  @override
  State<FilesPage> createState() => _FilesPageState();
}

class _FilesPageState extends State<FilesPage> {
  bool _loading = false;
  String? _error;
  String? _ok;
  List<Map<String, Object?>> _tasks = [];
  String? _selectedTaskId;
  List<PlaygroundFileRef> _refs = [];
  String? _lastOpenedText;

  @override
  void initState() {
    super.initState();
    _loadTasks();
  }

  LocalPocket? get _db => widget.state.db;

  Future<void> _loadTasks() async {
    final db = _db;
    if (db == null) return;
    final page = await db
        .store(PlaygroundTasks.store)
        .query(QuerySpec(limit: 8));
    if (mounted) {
      setState(() {
        _tasks = [for (final t in page.items) t.toJson()];
        _selectedTaskId ??= page.items.isNotEmpty ? page.items.first.id : null;
        _error = null;
      });
      if (_selectedTaskId != null) _loadRefs(_selectedTaskId!);
    }
  }

  Future<void> _loadRefs(String taskId) async {
    final db = _db;
    if (db == null) return;
    try {
      final refs = await listFiles(
        db.store(PlaygroundTasks.store).files,
        recordId: taskId,
        field: 'notes',
      );
      if (mounted) {
        setState(() {
          _refs = refs;
          _lastOpenedText = null;
        });
      }
    } catch (e) {
      setState(() => _error = '$e');
    }
  }

  Future<void> _attach() async {
    final db = _db;
    final taskId = _selectedTaskId;
    if (db == null || taskId == null) return;
    setState(() => _loading = true);
    try {
      final content =
          'LocalPocket demo note for ${Helpers.shortId(taskId)}\n'
          'Seeded by the playground at ${DateTime.now()}';
      final bytes = utf8.encode(content);
      final name = 'note_${DateTime.now().millisecondsSinceEpoch}.txt';
      await attachBytes(
        db.store(PlaygroundTasks.store).files,
        recordId: taskId,
        bytes: bytes,
        field: 'notes',
        name: name,
      );
      setState(() => _ok = 'Attached $name and enqueued its upload op.');
      await _loadRefs(taskId);
    } catch (e) {
      setState(() => _error = '$e');
    } finally {
      setState(() => _loading = false);
    }
  }

  Future<void> _openFirst() async {
    final db = _db;
    final taskId = _selectedTaskId;
    if (db == null || taskId == null || _refs.isEmpty) return;
    setState(() => _loading = true);
    try {
      final bytes = await openBytes(
        db.store(PlaygroundTasks.store).files,
        recordId: taskId,
        field: 'notes',
        index: 0,
      );
      setState(() {
        _lastOpenedText = utf8.decode(bytes);
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
            'Files & Blobs',
            style: Theme.of(
              context,
            ).textTheme.headlineMedium?.copyWith(fontWeight: FontWeight.w800),
          ),
          const SizedBox(height: 8),
          Text(
            'Content-addressed binary attachments with streaming SHA-256 '
            'hashing, deduplication, garbage collection, and a background '
            'upload lane.',
            style: Theme.of(context).textTheme.bodyLarge,
          ),
          const SizedBox(height: 20),
          DemoPanel(
            title: 'Pick a task',
            icon: Icons.folder_open_outlined,
            child: DropdownButtonFormField<String>(
              initialValue: _selectedTaskId,
              decoration: const InputDecoration(labelText: 'Task'),
              items: [
                for (final t in _tasks)
                  DropdownMenuItem(
                    value: (t['id'] as String?) ?? '',
                    child: Text(
                      (t['title'] as String? ?? '-').length > 26
                          ? '${(t['title'] as String).substring(0, 26)}…'
                          : (t['title'] as String? ?? '-'),
                    ),
                  ),
              ],
              onChanged: (v) {
                if (v == null) return;
                setState(() {
                  _selectedTaskId = v;
                  _lastOpenedText = null;
                });
                _loadRefs(v);
              },
            ),
          ),
          const SizedBox(height: 16),
          DemoPanel(
            title: 'Attach a file',
            icon: Icons.attach_file,
            description:
                'Attaches a small text note to the selected task and queues '
                'its upload op.',
            code: _attachCode,
            actions: [
              FilledButton.icon(
                onPressed: _loading ? null : _attach,
                icon: const Icon(Icons.upload_file),
                label: const Text('Attach note'),
              ),
              OutlinedButton.icon(
                onPressed: (_loading || _refs.isEmpty) ? null : _openFirst,
                icon: const Icon(Icons.download),
                label: const Text('Open first file'),
              ),
            ],
            child: _loading
                ? const LoadingState()
                : Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      if (_error != null)
                        ResultView(
                          message: _error!,
                          color: scheme.error,
                          icon: Icons.error_outline,
                        ),
                      if (_ok != null) ResultView(message: _ok!),
                      const SizedBox(height: 8),
                      Text(
                        '${_refs.length} file reference(s)',
                        style: Theme.of(context).textTheme.labelMedium
                            ?.copyWith(fontWeight: FontWeight.w700),
                      ),
                      const SizedBox(height: 6),
                      if (_refs.isEmpty)
                        const EmptyState(
                          title: 'No files attached',
                          message: 'Attach a note to this task.',
                          icon: Icons.attachment_outlined,
                        )
                      else
                        Column(
                          children: [
                            for (final r in _refs)
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
                                    const Icon(
                                      Icons.insert_drive_file,
                                      size: 16,
                                    ),
                                    const SizedBox(width: 10),
                                    Expanded(
                                      child: Text(
                                        '${r.displayName} · ${r.state}',
                                      ),
                                    ),
                                    Text(
                                      '#${Helpers.shortId(r.refId)}',
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
                          ],
                        ),
                      if (_lastOpenedText != null) ...[
                        const SizedBox(height: 8),
                        Container(
                          width: double.infinity,
                          padding: const EdgeInsets.all(12),
                          decoration: BoxDecoration(
                            color: scheme.surfaceContainerHigh,
                            borderRadius: BorderRadius.circular(10),
                          ),
                          child: Text(
                            _lastOpenedText!,
                            style: const TextStyle(fontFamily: 'monospace'),
                          ),
                        ),
                      ],
                    ],
                  ),
          ),
        ],
      ),
    );
  }

  static const _attachCode = '''
final files = db.store(PlaygroundTasks.store).files;

final ref = await files.attach(
  recordId: taskId,
  source: FileSource.bytes(bytes, name: 'note.txt'),
  field: 'notes',
);

final refs = await files.list(recordId: taskId, field: 'notes');
final stream = await files.open(refs.first);
''';
}
