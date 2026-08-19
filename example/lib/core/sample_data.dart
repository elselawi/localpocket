/// Realistic sample data used to seed the playground in Demo Mode.
///
/// No external backend is required — this is the "out of the box" experience.
class SampleData {
  SampleData._();

  static final List<Map<String, Object?>> users = [
    {
      'name': 'Ada Lovelace',
      'email': 'ada@example.com',
      'role': 'admin',
      'active': true,
    },
    {
      'name': 'Alan Turing',
      'email': 'alan@example.com',
      'role': 'member',
      'active': true,
    },
    {
      'name': 'Grace Hopper',
      'email': 'grace@example.com',
      'role': 'member',
      'active': true,
    },
    {
      'name': 'Katherine Johnson',
      'email': 'katherine@example.com',
      'role': 'viewer',
      'active': false,
    },
  ];
  // user ids get generated; capture them by looking them up by email in code.

  static final List<Map<String, Object?>> tasks = [
    {
      'title': 'Design the local-first sync protocol',
      'description':
          'Sketch the envelope model and the pull-before-push cycle for '
          'conflict-free multi-collection synchronization.',
      'status': 'done',
      'priority': 1,
      'completed': true,
      'tags': const ['sync', 'design', 'architecture'],
    },
    {
      'title': 'Implement FTS5 full-text search',
      'description':
          'Add BM25-ranked full-text search over the tasks title and '
          'description using native SQLite FTS5.',
      'status': 'done',
      'priority': 1,
      'completed': true,
      'tags': const ['search', 'fts', 'sqlite'],
    },
    {
      'title': 'Build the live query watcher',
      'description':
          'Reactive query streams that re-emit when committed changes '
          'intersect the query result set.',
      'status': 'done',
      'priority': 2,
      'completed': true,
      'tags': const ['reactive', 'watch'],
    },
    {
      'title': 'Add field-level AES-256-GCM encryption',
      'description':
          'Encrypt sensitive columns at rest with per-write random nonces.',
      'status': 'in_progress',
      'priority': 2,
      'completed': false,
      'tags': const ['security', 'encryption'],
    },
    {
      'title': 'Write the PocketBase conflict resolvers',
      'description':
          'Liked counters, tag set unions, and append-only audit logs.',
      'status': 'in_progress',
      'priority': 3,
      'completed': false,
      'tags': const ['sync', 'conflicts'],
    },
    {
      'title': 'Ship the web worker build',
      'description':
          'Compile the engine worker and publish the sqlite3.wasm asset.',
      'status': 'todo',
      'priority': 3,
      'completed': false,
      'tags': const ['web', 'build', 'release'],
    },
    {
      'title': 'Benchmark point reads and bulk writes',
      'description':
          'Measure LRU-cached point reads and transactional bulk writes '
          'against the baseline.',
      'status': 'todo',
      'priority': 4,
      'completed': false,
      'tags': const ['performance', 'benchmark'],
    },
    {
      'title': 'Document the manual conflict review UI',
      'description': 'Explain accept-local, accept-remote, and custom merge.',
      'status': 'todo',
      'priority': 4,
      'completed': false,
      'tags': const ['docs', 'sync'],
    },
  ];

  static final List<Map<String, Object?>> posts = [
    {
      'title': 'Local-first databases explained',
      'views': 2410,
      'likes': 188,
      'tags': const ['database', 'architecture'],
    },
    {
      'title': 'Conflict-free synchronization',
      'views': 187,
      'likes': 41,
      'tags': const ['sync', 'conflicts'],
    },
    {
      'title': 'FTS5 search in SQLite',
      'views': 992,
      'likes': 97,
      'tags': const ['fts', 'sqlite'],
    },
    {
      'title': 'Reactive UIs with query watches',
      'views': 640,
      'likes': 55,
      'tags': const ['reactive', 'ui'],
    },
  ];

  /// A set of dense numeric rows for the aggregate + performance demos.
  static List<Map<String, Object?>> metrics(int count) {
    final rows = <Map<String, Object?>>[];
    final labels = ['cpu', 'memory', 'disk', 'network', 'latency'];
    final now = DateTime.now();
    for (var i = 0; i < count; i++) {
      rows.add({
        'label': labels[i % labels.length],
        'value': (i * 1.7 % 100.0),
        'recorded': now
            .subtract(Duration(minutes: (count - i) * 5))
            .millisecondsSinceEpoch,
      });
    }
    return rows;
  }

  static final List<Map<String, Object?>> secrets = [
    {
      'label': 'API key',
      'secret': 'sk_live_till_pocketbase_01',
      'category': 'auth',
    },
    {
      'label': 'Recovery phrase',
      'secret': 'word word fix seed',
      'category': 'recovery',
    },
    {
      'label': 'Database password',
      'secret': 's3cr3t-p@ss',
      'category': 'credentials',
    },
  ];
}
