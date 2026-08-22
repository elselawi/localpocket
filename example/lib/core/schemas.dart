import 'package:localpocket/localpocket.dart';

/// All collection schemas used by the playground.
///
/// These demonstrate the package's real schema API: typed fields, secondary
/// indexes, full-text search (FTS5), reference fields, field-level encryption
/// flags, and conflict policies for sync.
class PlaygroundSchemas {
  PlaygroundSchemas._();

  /// A reference to `users`. Used by the relationships showcase.
  static final users = CollectionSchema(
    name: 'users',
    version: 1,
    fields: [
      Field.text('name', required: true),
      Field.text('email', uniqueWhenActive: true),
      Field.enumValue('role', const ['admin', 'member', 'viewer']),
      Field.bool('active'),
    ],
    indexes: const [
      IndexSpec(['role']),
    ],
  );

  /// Tasks col: FTS over title+description, indexed by (status, priority),
  /// and a reference to `users.assigned_to`.
  static final tasks = CollectionSchema(
    name: 'tasks',
    version: 1,
    fields: [
      Field.text('title', required: true),
      Field.text('description'),
      Field.enumValue('status', const ['todo', 'in_progress', 'done']),
      Field.int('priority'),
      Field.date('due_at'),
      Field.bool('completed'),
      Field.jsonList('tags'),
      Field.ref('assigned_to', to: 'users'),
    ],
    indexes: const [
      IndexSpec(['status', 'priority']),
    ],
    fts: const FtsSpec(['title', 'description']),
  );

  /// Posts col with numeric counters + jsonList tags + conflict resolvers.
  static final posts = CollectionSchema(
    name: 'posts',
    version: 1,
    fields: [
      Field.text('title', required: true),
      Field.int('views'),
      Field.int('likes'),
      Field.jsonList('tags'),
    ],
    conflictPolicy: ConflictPolicy(
      fieldOverrides: {
        'views': const CounterResolver(),
        'likes': const CounterResolver(),
        'tags': const SetUnionWithDeletionWinsResolver(),
      },
      editsUnarchive: true,
    ),
  );

  /// A dense numeric store for aggregate + performance demos.
  static final metrics = CollectionSchema(
    name: 'metrics',
    version: 1,
    fields: [Field.text('label'), Field.real('value'), Field.date('recorded')],
    indexes: const [
      IndexSpec(['label']),
    ],
  );

  /// A store with an encrypted field to demonstrate field-level encryption.
  static final secrets = CollectionSchema(
    name: 'secrets',
    version: 1,
    fields: [
      Field.text('label', required: true),
      Field.text('secret', encrypted: true),
      Field.text('category'),
    ],
  );

  static List<CollectionSchema> get all => [
    users,
    tasks,
    posts,
    metrics,
    secrets,
  ];
}
