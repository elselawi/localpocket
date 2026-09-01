import 'package:localpocket/src/internal/raw_surface.dart';

import 'tasks.dart';

/// All collection schemas used by the playground.
///
/// `tasks` is defined with the typed API; the other stores deliberately retain
/// raw schemas to demonstrate that both access styles coexist.
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

  /// Tasks: the canonical typed definition compiles to the same engine schema.
  static CollectionSchema<Object?> get tasks =>
      PlaygroundTasks.store.collectionSchema;

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
