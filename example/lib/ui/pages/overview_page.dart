import 'package:flutter/material.dart';

import '../../core/app_state.dart';

class OverviewPage extends StatelessWidget {
  const OverviewPage({super.key, required this.state});

  final PlaygroundAppState state;

  @override
  Widget build(BuildContext context) {
    final scheme = Theme.of(context).colorScheme;

    return SingleChildScrollView(
      padding: const EdgeInsets.all(24),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Overview',
            style: Theme.of(
              context,
            ).textTheme.headlineMedium?.copyWith(fontWeight: FontWeight.w800),
          ),
          const SizedBox(height: 8),
          Text(
            'LocalPocket is a fast, local-first SQLite database for Flutter and '
            'Dart with automatic, eventually-consistent synchronization to '
            'PocketBase. Everything in this playground uses the package’s real '
            'APIs against a live local database — no backend required.',
            style: Theme.of(context).textTheme.bodyLarge?.copyWith(
              color: scheme.onSurfaceVariant,
              height: 1.5,
            ),
          ),
          const SizedBox(height: 20),
          _FeatureGrid(),
          const SizedBox(height: 24),
          if (state.db != null) _LiveDbCard(db: state.db!),
        ],
      ),
    );
  }
}

class _FeatureGrid extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final items = [
      (
        Icons.bolt_outlined,
        'Sub-microsecond point reads',
        'LRU read cache + in-memory statement pool. Get a record by ID in microseconds.',
      ),
      (
        Icons.storage_outlined,
        'Direct SQLite FFI',
        'Zero message-passing overhead on desktop/mobile; engine-in-worker on web.',
      ),
      (
        Icons.calculate_outlined,
        'Native aggregates',
        'COUNT, DISTINCT, SUM, MIN, MAX and AVG compile straight to SQLite.',
      ),
      (
        Icons.manage_search_outlined,
        'FTS5 full-text search',
        'BM25-ranked full-text search over declared fields.',
      ),
      (
        Icons.sensors_outlined,
        'Reactive live watches',
        'Query and single-record streams that re-emit on committed changes.',
      ),
      (
        Icons.lock_outlined,
        'Field-level encryption',
        'AES-256-GCM with per-write random nonces, transparent decrypt on read.',
      ),
      (
        Icons.cloud_sync_outlined,
        'PocketBase sync',
        'Bidirectional pull/push, conflict resolvers, SSE realtime, file lanes.',
      ),
      (
        Icons.offline_bolt_outlined,
        'Offline-first',
        'Everything works with no network. Sync when you reconnect.',
      ),
    ];
    return LayoutBuilder(
      builder: (context, c) {
        final columns = c.maxWidth >= 1000
            ? 3
            : c.maxWidth >= 640
            ? 2
            : 1;
        final width = (c.maxWidth - 16 * (columns - 1)) / columns;
        return Wrap(
          spacing: 16,
          runSpacing: 16,
          children: [
            for (final it in items)
              SizedBox(
                width: width,
                child: Card(
                  elevation: 0,
                  color: Theme.of(context).colorScheme.surfaceContainerLow,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(14),
                    side: BorderSide(
                      color: Theme.of(
                        context,
                      ).colorScheme.outlineVariant.withValues(alpha: 0.5),
                    ),
                  ),
                  child: Padding(
                    padding: const EdgeInsets.all(16),
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Icon(
                          it.$1,
                          color: Theme.of(context).colorScheme.primary,
                        ),
                        const SizedBox(width: 12),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                it.$2,
                                style: Theme.of(context).textTheme.titleSmall
                                    ?.copyWith(fontWeight: FontWeight.w700),
                              ),
                              const SizedBox(height: 4),
                              Text(
                                it.$3,
                                style: Theme.of(context).textTheme.bodySmall
                                    ?.copyWith(
                                      color: Theme.of(
                                        context,
                                      ).colorScheme.onSurfaceVariant,
                                    ),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
          ],
        );
      },
    );
  }
}

class _LiveDbCard extends StatelessWidget {
  final dynamic db;
  const _LiveDbCard({required this.db});

  @override
  Widget build(BuildContext context) {
    final scheme = Theme.of(context).colorScheme;
    return Card(
      color: scheme.primaryContainer.withValues(alpha: 0.5),
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(16),
        side: BorderSide(color: scheme.primary.withValues(alpha: 0.3)),
      ),
      child: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Icon(Icons.check_circle, color: scheme.primary),
                const SizedBox(width: 10),
                Text(
                  'Live database ready',
                  style: Theme.of(context).textTheme.titleMedium?.copyWith(
                    fontWeight: FontWeight.w700,
                  ),
                ),
              ],
            ),
            const SizedBox(height: 8),
            Text(
              'The playground opened a real LocalPocket database and seeded it '
              'with sample tasks, users, posts, metrics, and encrypted secrets. '
              'Explore the sections on the left to interact with it.',
              style: TextStyle(color: scheme.onSurfaceVariant, height: 1.4),
            ),
            const SizedBox(height: 12),
            Text(
              'capabilities.sqliteVersion: safe to read at runtime · stores: '
              'users, tasks, posts, metrics, secrets',
              style: Theme.of(context).textTheme.labelSmall?.copyWith(
                fontFamily: 'monospace',
                color: scheme.onSurfaceVariant,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
