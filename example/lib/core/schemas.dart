import 'package:localpocket/localpocket.dart';

import 'tasks.dart';

/// Roles for the playground's `users` store.
enum UserRole { admin, member, viewer }

/// All store definitions used by the playground.
///
/// Every store is declared as a typed [StoreDef]; the destination facade
/// compiles them into the engine's schemas at open time. The tasks store is
/// defined in `tasks.dart`; the others live here.
class PlaygroundSchemas {
  PlaygroundSchemas._();

  /// The canonical store definitions, one per playground store.
  static final PlaygroundUsers users = PlaygroundUsers.store;
  static final PlaygroundTasks tasks = PlaygroundTasks.store;
  static final PlaygroundPosts posts = PlaygroundPosts.store;
  static final PlaygroundMetrics metrics = PlaygroundMetrics.store;
  static final PlaygroundSecrets secrets = PlaygroundSecrets.store;

  static List<StoreDef<Object?>> get all => [
    users,
    tasks,
    posts,
    metrics,
    secrets,
  ];
}

/// Users referenced by the tasks' `assigned_to` field.
final class PlaygroundUsers extends StoreDef<PlaygroundUsers> {
  PlaygroundUsers._() : super(name: 'users', version: 1);

  static final PlaygroundUsers store = PlaygroundUsers._();

  // The column is literally `name`; the accessor avoids `StoreDef.name`.
  static final fullName = store.schema.text('name').req();
  static final email = store.schema.text('email', uniqueWhenActive: true);
  static final role = store.schema.enumOf('role', UserRole.values);
  static final active = store.schema.boolean('active');

  @override
  List<FieldDef<PlaygroundUsers, Object?>> get fields => [
    fullName,
    email,
    role,
    active,
  ];

  @override
  List<IndexSpec> get indexes => [
    store.indexSpec([role]),
  ];
}

/// Posts with numeric counters + jsonList tags.
final class PlaygroundPosts extends StoreDef<PlaygroundPosts> {
  PlaygroundPosts._() : super(name: 'posts', version: 1);

  static final PlaygroundPosts store = PlaygroundPosts._();

  static final title = store.schema.text('title').req();
  static final views = store.schema.integer('views');
  static final likes = store.schema.integer('likes');
  static final tags = store.schema.jsonList<String>('tags');

  @override
  List<FieldDef<PlaygroundPosts, Object?>> get fields => [
    title,
    views,
    likes,
    tags,
  ];
}

/// A dense numeric store for aggregate + performance demos.
final class PlaygroundMetrics extends StoreDef<PlaygroundMetrics> {
  PlaygroundMetrics._() : super(name: 'metrics', version: 1);

  static final PlaygroundMetrics store = PlaygroundMetrics._();

  static final label = store.schema.text('label');
  static final value = store.schema.real('value');
  static final recorded = store.schema.date('recorded');

  @override
  List<FieldDef<PlaygroundMetrics, Object?>> get fields => [
    label,
    value,
    recorded,
  ];

  @override
  List<IndexSpec> get indexes => [
    store.indexSpec([label]),
  ];
}

/// A store with an encrypted field to demonstrate field-level encryption.
final class PlaygroundSecrets extends StoreDef<PlaygroundSecrets> {
  PlaygroundSecrets._() : super(name: 'secrets', version: 1);

  static final PlaygroundSecrets store = PlaygroundSecrets._();

  static final label = store.schema.text('label').req();
  static final secret = store.schema.text('secret', encrypted: true);
  static final category = store.schema.text('category');

  @override
  List<FieldDef<PlaygroundSecrets, Object?>> get fields => [
    label,
    secret,
    category,
  ];
}
