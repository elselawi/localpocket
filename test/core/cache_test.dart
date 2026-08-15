import 'package:localpocket/localpocket.dart';
import 'package:sqlite3/sqlite3.dart' as sqlite;
import 'package:test/test.dart';

import '../support/helpers.dart';

/// Point-read cache correctness: LRU eviction order, hit refresh, negative
/// caching, invalidation on local/external writes, full invalidation, document
/// migration results, archive/restore/hidden changes, close, and the documented
/// top-level-only defensive copy behavior.
///
/// Cache hits issue no SQL query, so a query recorder distinguishes hits from
/// misses.
void main() {
  late List<String> queryLog;
  late DirectSqliteDatabase db;

  Future<LocalPocket> openCachedPocket({List<CollectionSchema>? stores}) async {
    queryLog = <String>[];
    db = DirectSqliteDatabase(sqlite.sqlite3.openInMemory());
    db.onQuery = (sql, _) => queryLog.add(sql);
    return LocalPocket.open(
      path: ':memory:',
      database: db,
      stores: stores ?? [widgetsSchema()],
    );
  }

  group('point-read cache', () {
    test('256-entry LRU evicts the oldest and keeps refreshed entries',
        () async {
      final pocket = await openCachedPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final ids = [for (var i = 0; i < 512; i++) generateRecordId()];

      // Fill the cache with 256 misses.
      for (final id in ids.take(256)) {
        await col.get(id);
      }
      // Refresh ids[0] so it moves to the most-recent end of the LRU chain.
      queryLog.clear();
      await col.get(ids[0]);
      expect(queryLog, isEmpty, reason: 'ids[0] is now a cache hit');

      // Add 255 more records (one short of a full pass); each insertion
      // evicts the current oldest entry. The refreshed ids[0] survives at the
      // most-recent end; ids[1] (oldest) is evicted by the first insertion.
      await col.putAll([
        for (final id in ids.skip(256).take(255)) record(id: id, name: 'n')
      ]);
      for (final id in ids.skip(256).take(255)) {
        await col.get(id);
      }

      queryLog.clear();
      await col.get(ids[0]);
      expect(queryLog, isEmpty,
          reason: 'the refreshed entry survived the evictions');
      await col.get(ids[1]);
      expect(queryLog, isNotEmpty,
          reason: 'the oldest entry (ids[1]) was evicted');
    });

    test('negative cache entries are invalidated by a local write', () async {
      final pocket = await openCachedPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();

      await col.get(id); // miss -> negative cache
      queryLog.clear();
      await col.get(id);
      expect(queryLog, isEmpty, reason: 'negative result is cached');

      await col.put(record(id: id, name: 'now-exists'));
      await col.get(id);
      expect(queryLog, isNotEmpty,
          reason: 'the local write invalidated the negative cache entry');
      expect((await col.get(id))!['name'], 'now-exists');
    });

    test('external changes require notifyExternalChange to invalidate',
        () async {
      final pocket = await openCachedPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();
      await col.put(record(id: id, name: 'v1'));
      await col.get(id); // cached v1

      await pocket.db
          .execute('UPDATE widgets SET name = ? WHERE id = ?', ['v2', id]);
      // Without invalidation the cache still serves v1.
      expect((await col.get(id))!['name'], 'v1');

      // Full invalidation for an unknown/external change set.
      pocket.notifyExternalChange({'widgets'});
      expect((await col.get(id))!['name'], 'v2');
    });

    test('external writes to unknown ids invalidate the whole cache', () async {
      final pocket = await openCachedPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final a = generateRecordId();
      final b = generateRecordId();
      await col.put(record(id: a, name: 'a'));
      await col.get(a); // cached
      queryLog.clear();

      // An external write to an unrelated id with an unknown-id ChangeSet
      // clears the cache conservatively.
      await pocket.db.execute(
          'INSERT INTO widgets (id, name, archived, hidden) '
          'VALUES (?, ?, 0, 0)',
          [b, 'b']);
      pocket.notifyExternalChange({'widgets'});
      await col.get(a);
      expect(queryLog, isNotEmpty, reason: 'cache fully cleared for the store');
    });

    test('document migration results are cached', () async {
      final schema = widgetsSchema(
        version: 2,
        documentMigrations: {
          2: (doc) => {...doc, 'migrated': true},
        },
      );
      final pocket = await openCachedPocket(stores: [schema]);
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();
      await col.put(record(id: id, name: 'x'));

      // Rewind the stored schema version so the lazy migration applies.
      await pocket.db.execute(
          'UPDATE lp_sync_row SET schema_ver = 1 WHERE store = ? AND record_id = ?',
          ['widgets', id]);

      final first = await col.get(id);
      expect(first!['migrated'], true, reason: 'lazy migration applied');
      queryLog.clear();
      final second = await col.get(id);
      expect(second!['migrated'], true);
      expect(queryLog, isEmpty,
          reason: 'the migrated result is served from cache');
    });

    test('archive, restore, and hidden changes invalidate the cache', () async {
      final pocket = await openCachedPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();
      await col.put(record(id: id, name: 'x'));
      await pocket.outbox
          .ack('widgets', id, serverUpdated: '2026-01-01 00:00:00.000Z');

      await col.get(id); // cached
      queryLog.clear();
      await col.archive(id);
      expect((await col.get(id))!['archived'], isTrue);
      await col.restore(id);
      expect((await col.get(id))!['archived'], isFalse);
      expect(queryLog, isNotEmpty, reason: 'archive/restore re-queried');

      // Hidden change via external write + notify.
      await pocket.db
          .execute('UPDATE widgets SET hidden = 1 WHERE id = ?', [id]);
      pocket.notifyExternalChange({'widgets'});
      await col.get(id);
      expect(queryLog, isNotEmpty, reason: 'external hidden change re-queried');
    });

    test('get after close throws', () async {
      final pocket = await openCachedPocket();
      await pocket.close();
      await expectLater(pocket.collection('widgets').get(generateRecordId()),
          throwsA(anything));
    });

    test(
        'returned records share nested maps with the cache (documented '
        'top-level-only defensive copy)', () async {
      final pocket = await openCachedPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();
      await col.put(record(id: id, name: 'x', meta: {
        'a': 1,
        'nested': {'x': 1}
      }));

      final r1 = await col.get(id);
      (r1!['meta'] as Map<String, Object?>)['nested'] = {'x': 999};

      // The mutation is visible on the next read because only the top level of
      // the cached record is copied (documented current behavior).
      final r2 = await col.get(id);
      expect(((r2!['meta'] as Map)['nested'] as Map)['x'], 999,
          reason: 'nested maps are shared with the cache');

      // A fresh record read from the DB is independent across reads.
      final fresh = generateRecordId();
      await col.put(record(id: fresh, name: 'y', meta: {'n': 1}));
      final f1 = await col.get(fresh);
      final f2 = await col.get(fresh);
      expect(identical(f1!['meta'], f2!['meta']), isTrue,
          reason: 'the same cached nested map is returned on each hit');
    });
  });
}
