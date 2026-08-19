import 'package:flutter/material.dart';
import 'package:localpocket/localpocket.dart';

import '../../core/app_state.dart';
import '../widgets/demo_panel.dart';

class SearchPage extends StatefulWidget {
  const SearchPage({super.key, required this.state});
  final PlaygroundAppState state;

  @override
  State<SearchPage> createState() => _SearchPageState();
}

class _SearchPageState extends State<SearchPage> {
  final _termCtrl = TextEditingController(text: 'search');
  bool _loading = false;
  String? _error;
  List<Map<String, Object?>> _results = [];
  Duration? _duration;

  @override
  void initState() {
    super.initState();
    _run();
  }

  @override
  void dispose() {
    _termCtrl.dispose();
    super.dispose();
  }

  LocalPocket? get _db => widget.state.db;

  Future<void> _run() async {
    final db = _db;
    if (db == null) return;
    final term = _termCtrl.text.trim();
    setState(() => _loading = true);
    final sw = Stopwatch()..start();
    try {
      final ranked = await db
          .collection('tasks')
          .search(term)
          .limit(10)
          .fetch();
      final rows = <Map<String, Object?>>[];
      for (final hit in ranked) {
        final rec = await db.collection('tasks').get(hit.id);
        if (rec != null) {
          rows.add({...rec, '__score': hit.score});
        }
      }
      sw.stop();
      setState(() {
        _results = rows;
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
    final scheme = Theme.of(context).colorScheme;
    return SingleChildScrollView(
      padding: const EdgeInsets.all(24),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Full-Text Search',
            style: Theme.of(
              context,
            ).textTheme.headlineMedium?.copyWith(fontWeight: FontWeight.w800),
          ),
          const SizedBox(height: 8),
          Text(
            'FTS5 full-text search over the tasks title and description, '
            'ranked by BM25 score.',
            style: Theme.of(context).textTheme.bodyLarge,
          ),
          const SizedBox(height: 20),
          DemoPanel(
            title: 'Search the tasks',
            icon: Icons.manage_search_outlined,
            description:
                'Type a term (try: "sync", "search", "encryption", "fts").',
            code: _searchCode,
            actions: [
              FilledButton.icon(
                onPressed: _loading ? null : _run,
                icon: const Icon(Icons.search),
                label: const Text('Search'),
              ),
            ],
            child: TextField(
              controller: _termCtrl,
              decoration: const InputDecoration(
                labelText: 'Search term',
                hintText: 'e.g. sync',
                prefixIcon: Icon(Icons.search),
              ),
              onSubmitted: (_) => _run(),
            ),
          ),
          const SizedBox(height: 16),
          if (_error != null)
            ResultView(
              message: _error!,
              color: scheme.error,
              icon: Icons.error_outline,
            ),
          const SizedBox(height: 16),
          DemoPanel(
            title: 'Ranked results',
            icon: Icons.format_list_numbered,
            description: 'Ordered by BM25 relevance score.',
            child: _loading
                ? const LoadingState()
                : _results.isEmpty
                ? const EmptyState(
                    title: 'No matches',
                    message: 'Try another term.',
                    icon: Icons.search_off,
                  )
                : Column(
                    children: [
                      if (_duration != null)
                        Align(
                          alignment: Alignment.centerLeft,
                          child: Text(
                            'Found ${_results.length} in '
                            '${_duration!.inMicroseconds} µs',
                            style: Theme.of(context).textTheme.labelMedium
                                ?.copyWith(color: scheme.onSurfaceVariant),
                          ),
                        ),
                      const SizedBox(height: 8),
                      for (final r in _results)
                        Container(
                          margin: const EdgeInsets.only(bottom: 6),
                          padding: const EdgeInsets.symmetric(
                            horizontal: 12,
                            vertical: 10,
                          ),
                          decoration: BoxDecoration(
                            color: scheme.surfaceContainerHigh,
                            borderRadius: BorderRadius.circular(10),
                            border: Border.all(
                              color: scheme.outlineVariant.withValues(
                                alpha: 0.4,
                              ),
                            ),
                          ),
                          child: Row(
                            children: [
                              Icon(
                                Icons.description_outlined,
                                size: 16,
                                color: scheme.primary,
                              ),
                              const SizedBox(width: 10),
                              Expanded(
                                child: Text(r['title'] as String? ?? '-'),
                              ),
                              Text(
                                'score ${(r['__score'] as double).toStringAsFixed(6)}',
                                style: Theme.of(context).textTheme.labelSmall
                                    ?.copyWith(
                                      color: scheme.primary,
                                      fontFamily: 'monospace',
                                    ),
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

  static const _searchCode = '''
final results = await db
    .collection('tasks')
    .search('sync')      // FTS5 BM25 ranked
    .limit(10)
    .fetch();

for (final hit in results) {
  print('\${hit.id}: \${hit.score}');
}
''';
}
