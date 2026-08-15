import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';

void main() {
  group('Full-text search', () {
    CollectionSchema<Object?> ftsSchema({
      int version = 1,
      List<StoreMigration> migrations = const [],
      bool keepUnsyncedArchives = true,
    }) {
      return CollectionSchema<Object?>(
        name: 'articles',
        version: version,
        keepUnsyncedArchives: keepUnsyncedArchives,
        fields: [
          Field.text('title', required: true),
          Field.text('body'),
          Field.text('tags'),
        ],
        fts: const FtsSpec(['title', 'body']),
        migrations: migrations,
      );
    }

    test('external content triggers keep index in sync', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket = await openPocket(path: t.path, stores: [ftsSchema()]);
      addTearDown(pocket.close);

      final col = pocket.collection('articles');
      final id = generateRecordId();

      // 1. Insert
      await col.put({
        'id': id,
        'title': 'Flutter architecture guide',
        'body': 'Deep dive into localpocket and offline storage',
      });

      var results = await col.search('localpocket').limit(10).fetch();
      expect(results, hasLength(1));
      expect(results.first.id, id);

      // 2. Update
      await col.patch(id, {
        'body': 'Deep dive into sqlite caching without the old keyword',
      });

      results = await col.search('localpocket').limit(10).fetch();
      expect(results, isEmpty);

      results = await col.search('sqlite').limit(10).fetch();
      expect(results, hasLength(1));
      expect(results.first.id, id);

      // 3. Archive
      await col.archive(id);
      results = await col.search('sqlite').limit(10).fetch();
      expect(results, isEmpty, reason: 'archived excluded by default scope');

      results = await col.search('sqlite').includeArchived().limit(10).fetch();
      expect(results, hasLength(1),
          reason: 'includeArchived includes archived row');

      // 4. Restore
      await col.restore(id);
      results = await col.search('sqlite').limit(10).fetch();
      expect(results, hasLength(1));

      // 5. Purge / delete
      await col.purge(id);
      results = await col.search('sqlite').includeArchived().limit(10).fetch();
      expect(results, isEmpty);
    });

    test('rank order via bm25', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket = await openPocket(path: t.path, stores: [ftsSchema()]);
      addTearDown(pocket.close);

      final col = pocket.collection('articles');
      final lowId = generateRecordId();
      final highId = generateRecordId();

      await col.put({
        'id': lowId,
        'title': 'Introduction',
        'body': 'Database storage system overview.',
      });

      await col.put({
        'id': highId,
        'title': 'Database database database',
        'body': 'Database indexing and database optimization.',
      });

      final results = await col.search('database').limit(10).fetch();
      expect(results.length, greaterThanOrEqualTo(2));
      // In SQLite FTS5 rank order, highest relevance comes first
      expect(results.first.id, highId);
      expect(results[1].id, lowId);
      // In FTS5 BM25, lower/more negative score = higher relevance
      expect(results.first.score, lessThan(results[1].score));
    });

    test('scope join excludes hidden archived', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket = await openPocket(path: t.path, stores: [ftsSchema()]);
      addTearDown(pocket.close);

      final col = pocket.collection('articles');
      final normalId = generateRecordId();
      final archivedId = generateRecordId();
      final hiddenId = generateRecordId();

      await col.put({
        'id': normalId,
        'title': 'Normal article',
        'body': 'Sync engine topic',
      });
      await col.put({
        'id': archivedId,
        'title': 'Archived article',
        'body': 'Sync engine topic',
      });
      await col.put({
        'id': hiddenId,
        'title': 'Hidden article',
        'body': 'Sync engine topic',
      });

      await col.archive(archivedId);
      await pocket.db
          .execute('UPDATE articles SET hidden = 1 WHERE id = ?', [hiddenId]);

      // Default scope excludes hidden and archived
      var results = await col.search('topic').limit(10).fetch();
      expect(results.map((r) => r.id), [normalId]);

      // includeArchived includes normal + archived
      results = await col.search('topic').includeArchived().limit(10).fetch();
      expect(results.map((r) => r.id).toSet(), {normalId, archivedId});

      // includeHidden includes normal + hidden
      results = await col.search('topic').includeHidden().limit(10).fetch();
      expect(results.map((r) => r.id).toSet(), {normalId, hiddenId});

      // Both flags include all 3
      results = await col
          .search('topic')
          .includeArchived()
          .includeHidden()
          .limit(10)
          .fetch();
      expect(
          results.map((r) => r.id).toSet(), {normalId, archivedId, hiddenId});
    });

    test('rebuild migration preserves docs', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);

      // Open v1
      var pocket =
          await openPocket(path: t.path, stores: [ftsSchema(version: 1)]);
      final id1 = generateRecordId();
      await pocket.collection('articles').put({
        'id': id1,
        'title': 'Migrated guide',
        'body': 'Full-text search survives migration',
      });
      await pocket.close();

      // Open v2 with migration adding a column
      final v2Schema = CollectionSchema<Object?>(
        name: 'articles',
        version: 2,
        fields: [
          Field.text('title', required: true),
          Field.text('body'),
          Field.text('tags'),
          Field.int('views'),
        ],
        fts: const FtsSpec(['title', 'body']),
        migrations: [
          StoreMigration(
            toVersion: 2,
            destructive: true,
          ),
        ],
      );

      pocket = await openPocket(path: t.path, stores: [v2Schema]);
      addTearDown(pocket.close);

      final results = await pocket
          .collection('articles')
          .search('survives')
          .limit(10)
          .fetch();
      expect(results, hasLength(1));
      expect(results.first.id, id1);
    });

    test('missing fts5 raises clear error', () async {
      final caps = SqliteCapabilities(
        sqliteVersion: '3.39.0',
        hasStrict: true,
        walSupported: true,
        hasFts5: false,
        platform: PlatformProfile.native,
      );

      expect(
        () => DdlCompiler(caps).compile(ftsSchema()),
        throwsA(isA<FtsUnavailableError>().having(
          (e) => e.message,
          'message',
          contains('FTS5 is not available'),
        )),
      );
    });

    test('encrypted field in fts rejected at registration', () {
      final caps = SqliteCapabilities.forVersion('3.39.0');
      final schema = CollectionSchema<Object?>(
        name: 'secrets',
        version: 1,
        fields: [
          Field.text('notes', encrypted: true),
        ],
        fts: const FtsSpec(['notes']),
      );

      expect(
        () => DdlCompiler(caps).compile(schema),
        throwsA(isA<SchemaRegistrationError>().having(
          (e) => e.message,
          'message',
          contains('cannot be included in FTS'),
        )),
      );
    });
  });
}
