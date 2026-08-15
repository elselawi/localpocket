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

    test('missing limit raises MissingLimitError, all() opts out', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket = await openPocket(path: t.path, stores: [ftsSchema()]);
      addTearDown(pocket.close);
      final col = pocket.collection('articles');

      await expectLater(
          col.search('x').fetch(), throwsA(isA<MissingLimitError>()));

      final id = generateRecordId();
      await col.put({'id': id, 'title': 'x marks the spot'});
      final all = await col.search('spot').all().fetch();
      expect(all, hasLength(1));
      expect(all.single.id, id);
    });

    test('empty and whitespace terms are valid no-ops', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket = await openPocket(path: t.path, stores: [ftsSchema()]);
      addTearDown(pocket.close);
      final col = pocket.collection('articles');
      await col
          .put({'id': generateRecordId(), 'title': 'Something searchable'});

      expect(await col.search('').limit(5).fetch(), isEmpty);
      expect(await col.search('   ').limit(5).fetch(), isEmpty);
      expect(await col.search('\t\n').limit(5).fetch(), isEmpty);
      // An empty term never needs a limit: it always returns nothing.
      expect(await col.search('').fetch(), isEmpty);
    });

    test('malformed fts expressions throw typed ValidationException', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket = await openPocket(path: t.path, stores: [ftsSchema()]);
      addTearDown(pocket.close);
      final col = pocket.collection('articles');
      await col.put({
        'id': generateRecordId(),
        'title': 'Flutter localpocket guide',
        'body': 'sqlite storage',
      });

      for (final term in ['"', 'AND', 'OR', 'NOT', '-localpocket', 'a OR']) {
        await expectLater(
          col.search(term).limit(5).fetch(),
          throwsA(isA<ValidationException>()),
          reason: 'term "$term" should be a typed ValidationException',
        );
      }

      // Valid expressions still work alongside.
      expect(await col.search('flutter').limit(5).fetch(), hasLength(1));
    });

    test('prefix search and double score', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket = await openPocket(path: t.path, stores: [ftsSchema()]);
      addTearDown(pocket.close);
      final col = pocket.collection('articles');
      final id = generateRecordId();
      await col.put({'id': id, 'title': 'Flutter guide'});

      final r = await col.search('fl*').limit(5).fetch();
      expect(r, hasLength(1));
      expect(r.single.id, id);
      expect(r.single.score, isA<double>());
    });

    test('no-match returns empty results', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket = await openPocket(path: t.path, stores: [ftsSchema()]);
      addTearDown(pocket.close);
      final col = pocket.collection('articles');
      await col.put({'id': generateRecordId(), 'title': 'Real content'});

      expect(await col.search('zzzznonexistent').limit(5).fetch(), isEmpty);
      expect(await col.search('zzzznonexistent').all().fetch(), isEmpty);
    });

    test('repeated updates keep the index in sync', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket = await openPocket(path: t.path, stores: [ftsSchema()]);
      addTearDown(pocket.close);
      final col = pocket.collection('articles');
      final id = generateRecordId();

      await col.put({'id': id, 'title': 'first title', 'body': 'alpha'});
      expect(await col.search('first').limit(5).fetch(), hasLength(1));

      await col.patch(id, {'title': 'second title'});
      expect(await col.search('first').limit(5).fetch(), isEmpty);
      expect(await col.search('second').limit(5).fetch(), hasLength(1));

      await col.patch(id, {'title': 'third title', 'body': 'beta gamma'});
      expect(await col.search('third').limit(5).fetch(), hasLength(1));
      expect(await col.search('gamma').limit(5).fetch(), hasLength(1));

      await col.patch(id, {'body': 'omega'});
      expect(await col.search('gamma').limit(5).fetch(), isEmpty);
      expect(await col.search('omega').limit(5).fetch(), hasLength(1));

      // Restore re-indexes after an archive round-trip.
      await col.archive(id);
      expect(await col.search('omega').limit(5).fetch(), isEmpty);
      await col.restore(id);
      expect(await col.search('omega').limit(5).fetch(), hasLength(1));
    });

    test('null text fields do not break the index', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket = await openPocket(path: t.path, stores: [ftsSchema()]);
      addTearDown(pocket.close);
      final col = pocket.collection('articles');

      // body is NULL; the title is still indexed.
      final withBody = generateRecordId();
      await col.put({'id': withBody, 'title': 'Null body article'});
      expect((await col.search('body').limit(5).fetch()).single.id, withBody);

      // NULL FTS columns simply contribute no tokens — no crash, and other
      // rows with real content still rank normally.
      await col
          .put({'id': generateRecordId(), 'title': 'orphan', 'body': null});
      final results = await col.search('body').limit(5).fetch();
      expect(results, hasLength(1));
      expect(results.single.id, withBody,
          reason: 'NULL-body row has no tokens for "body"');
    });

    test('multiple fts stores search independently', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final notesSchema = CollectionSchema<Object?>(
        name: 'notes',
        version: 1,
        fields: [Field.text('content', required: true)],
        fts: const FtsSpec(['content']),
      );
      final pocket =
          await openPocket(path: t.path, stores: [ftsSchema(), notesSchema]);
      addTearDown(pocket.close);

      final articleId = generateRecordId();
      await pocket.collection('articles').put({
        'id': articleId,
        'title': 'localpocket offline article',
      });
      final noteId = generateRecordId();
      await pocket
          .collection('notes')
          .put({'id': noteId, 'content': 'localpocket quick note'});

      final articles = await pocket
          .collection('articles')
          .search('localpocket')
          .limit(5)
          .fetch();
      expect(articles.map((r) => r.id), [articleId]);

      final notes = await pocket
          .collection('notes')
          .search('localpocket')
          .limit(5)
          .fetch();
      expect(notes.map((r) => r.id), [noteId]);
    });

    test('additive migration preserves the fts index', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);

      var pocket =
          await openPocket(path: t.path, stores: [ftsSchema(version: 1)]);
      final id = generateRecordId();
      await pocket.collection('articles').put({
        'id': id,
        'title': 'Additive migration guide',
        'body': 'fts survives a column addition',
      });
      await pocket.close();

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
          StoreMigration(toVersion: 2, addedFields: [Field.int('views')]),
        ],
      );
      pocket = await openPocket(path: t.path, stores: [v2Schema]);
      addTearDown(pocket.close);

      expect(
          (await pocket
                  .collection('articles')
                  .search('column')
                  .limit(5)
                  .fetch())
              .single
              .id,
          id);
      // New column writes and search coexist.
      await pocket.collection('articles').patch(id, {'views': 42});
      expect(
          (await pocket
                  .collection('articles')
                  .search('addition')
                  .limit(5)
                  .fetch())
              .single
              .id,
          id);
    });

    test('patching only non-fts fields does not disturb the index', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket = await openPocket(path: t.path, stores: [ftsSchema()]);
      addTearDown(pocket.close);
      final col = pocket.collection('articles');
      final id = generateRecordId();
      await col.put({
        'id': id,
        'title': 'Dart guide',
        'body': 'sqlite internals',
        'tags': 'oldtag',
      });

      // tags is NOT part of the FtsSpec(['title', 'body']).
      await col.patch(id, {'tags': 'newtag'});
      expect((await col.search('sqlite').limit(5).fetch()).single.id, id,
          reason: 'non-FTS patch leaves index untouched');
      expect(await col.search('newtag').limit(5).fetch(), isEmpty,
          reason: 'tags is not indexed');

      // An FTS column change is reflected immediately.
      await col.patch(id, {'title': 'Flutter guide'});
      expect(await col.search('dart').limit(5).fetch(), isEmpty);
      expect((await col.search('flutter').limit(5).fetch()).single.id, id);
    });
  });
}
