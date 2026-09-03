import 'dart:typed_data';

import 'package:localpocket/localpocket.dart';

import 'drivers/db_open.dart';
import 'sample_data.dart';
import 'schemas.dart';
import 'tasks.dart';

/// Owns the lifecycle of the playground's [LocalPocket] database.
///
/// - On native: opens a clean `:memory:` database and seeds it with sample
///   data. An in-memory [MemoryBlobStore] enables the file-attachment demo
///   without any filesystem plugins.
/// - On web: opens a persistent named database (OPFS) with the engine running
///   in a worker; the worker owns a real OPFS blob store automatically.
///
/// [encryption] enables the encrypted `secrets` store.
class DatabaseService {
  DatabaseService._();

  /// The seeded encryption key (fixed seed so re-opens can decrypt).
  static final EncryptionConfig demoEncryption = EncryptionConfig.aesGcm256(
    key: Uint8List.fromList(List<int>.filled(32, 17)),
  );

  static Future<LocalPocket> openPlayground({
    bool seed = true,
    EncryptionConfig? encryption,
  }) async {
    final db = await openPlaygroundDb(
      PlaygroundSchemas.all,
      encryption: encryption ?? demoEncryption,
    );
    if (seed) {
      await seedIfEmpty(db);
    }
    return db;
  }

  /// Seeds realistic demo content if the backing store is empty.
  static Future<void> seedIfEmpty(LocalPocket db) async {
    final users = db.store(PlaygroundUsers.store);
    final count = await users.count(QuerySpec());
    if (count > 0) return;

    // Insert users first so we can resolve assigned_to references.
    await users.putAll([
      for (final u in SampleData.users)
        [
          PlaygroundUsers.fullName.set(u['name'] as String),
          PlaygroundUsers.email.set(u['email'] as String),
          PlaygroundUsers.role.set(_userRole(u['role'] as String)),
          PlaygroundUsers.active.set(u['active'] as bool? ?? false),
        ],
    ]);
    final userPage = await users.query(QuerySpec(limit: Limits.unbounded));
    final nameToId = <String, String>{
      for (final u in userPage.items) u(PlaygroundUsers.fullName): u.id,
    };

    final now = DateTime.now();
    await db.store(PlaygroundTasks.store).putAll([
      for (final t in SampleData.tasks)
        [
          PlaygroundTasks.title.set(t['title'] as String),
          PlaygroundTasks.description.set(t['description'] as String?),
          PlaygroundTasks.status.set(_taskStatus(t['status'] as String)),
          PlaygroundTasks.priority.set(t['priority'] as int),
          PlaygroundTasks.dueAt.set(
            now.add(Duration(days: (t['priority'] as int) * 3)),
          ),
          PlaygroundTasks.completed.set(t['completed'] as bool),
          PlaygroundTasks.tags.set((t['tags'] as List).cast<String>()),
          PlaygroundTasks.assignedTo.set(
            _assign(t['title'] as String, nameToId),
          ),
        ],
    ]);
    await db.store(PlaygroundPosts.store).putAll([
      for (final p in SampleData.posts)
        [
          PlaygroundPosts.title.set(p['title'] as String),
          PlaygroundPosts.views.set(p['views'] as int),
          PlaygroundPosts.likes.set(p['likes'] as int),
          PlaygroundPosts.tags.set((p['tags'] as List).cast<String>()),
        ],
    ]);

    // Insert a modest metric set so aggregate/perf demos have data but remain
    // fast to seed.
    await db.store(PlaygroundMetrics.store).putAll([
      for (final m in SampleData.metrics(1200))
        [
          PlaygroundMetrics.label.set(m['label'] as String),
          PlaygroundMetrics.value.set((m['value'] as num).toDouble()),
          PlaygroundMetrics.recorded.set(m['recorded'] as int),
        ],
    ]);
    await db.store(PlaygroundSecrets.store).putAll([
      for (final s in SampleData.secrets)
        [
          PlaygroundSecrets.label.set(s['label'] as String),
          PlaygroundSecrets.secret.set(s['secret'] as String),
          PlaygroundSecrets.category.set(s['category'] as String?),
        ],
    ]);
  }

  static UserRole _userRole(String value) =>
      UserRole.values.firstWhere((r) => r.name == value);

  static TaskStatus _taskStatus(String value) => switch (value) {
    'done' => TaskStatus.done,
    'in_progress' => TaskStatus.inProgress,
    _ => TaskStatus.todo,
  };

  static String? _assign(String title, Map<String, String> nameToId) {
    if (title.contains('FTS') || title.contains('search')) {
      return nameToId['Grace Hopper'];
    }
    if (title.contains('encryption') || title.contains('conflict')) {
      return nameToId['Ada Lovelace'];
    }
    if (title.contains('sync') || title.contains('web')) {
      return nameToId['Alan Turing'];
    }
    return nameToId['Katherine Johnson'];
  }
}
