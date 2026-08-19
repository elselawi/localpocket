import 'package:flutter/material.dart';

import '../widgets/demo_panel.dart';

class GettingStartedPage extends StatelessWidget {
  const GettingStartedPage({super.key, required this.state});

  final dynamic state;

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      padding: const EdgeInsets.all(24),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Getting Started',
            style: Theme.of(
              context,
            ).textTheme.headlineMedium?.copyWith(fontWeight: FontWeight.w800),
          ),
          const SizedBox(height: 8),
          Text(
            'Define a schema, open the database, and you are ready to go. '
            'The playground already did this for you in the background — here '
            'is exactly how.',
            style: Theme.of(context).textTheme.bodyLarge,
          ),
          const SizedBox(height: 20),
          DemoPanel(
            title: '1 · Define your schema',
            icon: Icons.schema_outlined,
            description:
                'Collections are typed: text, int, real, bool, date, '
                'enum, json, and references. Add indexes and FTS in one place.',
            code: _schemaCode,
            child: const SizedBox.shrink(),
          ),
          const SizedBox(height: 16),
          DemoPanel(
            title: '2 · Open the database',
            icon: Icons.storage_outlined,
            description:
                'One call registers stores and compiles them into '
                'typed SQLite tables, indexes, and FTS tables.',
            code: _openCode,
            child: ShellChip(
              label:
                  'Same API on native and web — the engine '
                  'runs in a Worker on web automatically.',
            ),
          ),
          const SizedBox(height: 16),
          DemoPanel(
            title: '3 · First query',
            icon: Icons.bolt_outlined,
            description:
                'Fluent keyset queries with filters, sorting, and '
                'pagination, compiled to parameterized SQL.',
            code: _queryCode,
            child: const SizedBox.shrink(),
          ),
          const SizedBox(height: 16),
          const DemoPanel(
            title: '4 · Next steps',
            icon: Icons.rocket_launch_outlined,
            child: _NextSteps(),
          ),
        ],
      ),
    );
  }

  static const _schemaCode = '''
final taskSchema = CollectionSchema(
  name: 'tasks',
  version: 1,
  fields: [
    Field.text('title', required: true),
    Field.text('description'),
    Field.enumValue('status', ['todo', 'in_progress', 'done']),
    Field.int('priority'),
    Field.date('due_at'),
    Field.bool('completed'),
    Field.jsonList('tags'),
    Field.ref('assigned_to', to: 'users'),
  ],
  indexes: const [IndexSpec(['status', 'priority'])],
  fts: const FtsSpec(['title', 'description']),
);
''';

  static const _openCode = '''
final db = await LocalPocket.open(
  path: ':memory:',          // or a real file path
  stores: [taskSchema, ...],
  fieldCipher: myCipher,     // optional: encrypt sensitive fields
);
final tasks = db.collection('tasks');
''';

  static const _queryCode = '''
final page = await tasks
    .query()
    .where('completed', eq: false)
    .orderBy('priority')
    .limit(20)
    .fetch();

if (page.hasMore) {
  final next = await tasks.query()
      .where('completed', eq: false)
      .orderBy('priority')
      .limit(20)
      .keysetAfter(page.nextCursor!)
      .fetch();
}
''';
}

class ShellChip extends StatelessWidget {
  final String label;
  const ShellChip({super.key, required this.label});

  @override
  Widget build(BuildContext context) {
    final scheme = Theme.of(context).colorScheme;
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: scheme.surfaceContainerHigh,
        borderRadius: BorderRadius.circular(10),
        border: Border.all(color: scheme.outlineVariant.withValues(alpha: 0.5)),
      ),
      child: Row(
        children: [
          Icon(Icons.info_outline, color: scheme.primary, size: 18),
          const SizedBox(width: 8),
          Expanded(
            child: Text(label, style: Theme.of(context).textTheme.bodySmall),
          ),
        ],
      ),
    );
  }
}

class _NextSteps extends StatelessWidget {
  const _NextSteps();
  @override
  Widget build(BuildContext context) {
    final steps = [
      ('CRUD', 'Create, read, patch, archive, restore, and purge records.'),
      ('Queries', 'Filter, sort, paginate, and aggregate with real SQLite.'),
      ('Reactive', 'Watch queries and records live as data changes.'),
      ('Encryption', 'Store sensitive fields encrypted at rest.'),
      ('Files', 'Attach blobs with deduplication and GC.'),
      ('Connect', 'Sync your data to your own PocketBase server.'),
    ];
    return Wrap(
      spacing: 10,
      runSpacing: 10,
      children: [for (final s in steps) Chip(label: Text('${s.$1} — ${s.$2}'))],
    );
  }
}
