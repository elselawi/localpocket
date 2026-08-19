import 'package:localpocket/localpocket.dart';

import 'drivers/db_open.dart';
import 'sample_data.dart';
import 'schemas.dart';

/// Owns the lifecycle of the playground's [LocalPocket] database.
///
/// - On native: opens a clean `:memory:` database and seeds it with sample
///   data. A [MemoryBlobStore] enables the file-attachment demo without any
///   filesystem plugins.
/// - On web: opens a persistent named database (OPFS) with the engine running
///   in a worker; the worker owns a real OPFS blob store automatically.
///
/// [fieldCipher] enables the encrypted `secrets` store.
class DatabaseService {
  DatabaseService._();

  /// The seeded encryption key (fixed seed so re-opens can decrypt).
  static final AesGcmFieldCipher demoCipher = AesGcmFieldCipher(
    List<int>.filled(32, 17),
  );

  static Future<LocalPocket> openPlayground({
    bool seed = true,
    FieldCipher? cipher,
  }) async {
    final db = await openPlaygroundDb(
      PlaygroundSchemas.all,
      cipher: cipher ?? demoCipher,
    );
    if (seed) {
      await seedIfEmpty(db);
    }
    return db;
  }

  /// Seeds realistic demo content if the backing store is empty.
  static Future<void> seedIfEmpty(LocalPocket db) async {
    final users = db.collection('users');
    final count = await users.query().count();
    if (count > 0) return;

    // Insert users first so we can resolve assigned_to references.
    await users.putAll(SampleData.users);
    final userPage = await users.query().all().fetch();
    final nameToId = <String, String>{
      for (final u in userPage.items) u['name'] as String: u['id'] as String,
    };

    final now = DateTime.now();
    final tasks = <Map<String, Object?>>[];
    for (final t in SampleData.tasks) {
      final dueAt = now
          .add(Duration(days: (t['priority'] as int) * 3))
          .millisecondsSinceEpoch;
      tasks.add({
        ...t,
        'due_at': dueAt,
        'assigned_to': _assign(t['title'] as String, nameToId),
      });
    }
    await db.collection('tasks').putAll(tasks);
    await db.collection('posts').putAll(SampleData.posts);

    // Insert a modest metric set so aggregate/perf demos have data but remain
    // fast to seed.
    await db.collection('metrics').putAll(SampleData.metrics(1200));
    await db.collection('secrets').putAll(SampleData.secrets);
  }

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
