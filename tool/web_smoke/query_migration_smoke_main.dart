import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'package:localpocket/src/kernel/errors.dart';
import 'package:localpocket/src/kernel/schema.dart';
import 'package:localpocket/src/web/facade.dart';
import 'package:localpocket/src/web/protocol.dart';

Future<void> main() async {
  void report(String status, [String? detail]) {
    globalContext.setProperty('__query_migration_smoke'.toJS, status.toJS);
    if (detail != null) {
      globalContext.setProperty(
          '__query_migration_smoke_detail'.toJS, detail.toJS);
    }
  }

  Future<void> expectRemoteValidation(Future<void> Function() action) async {
    Object? received;
    try {
      await action();
    } catch (error) {
      received = error;
    }
    if (received is ValidationException) return;
    if (received is! RemoteLocalPocketException ||
        received.code != 'ValidationException') {
      throw StateError('Expected ValidationException, got $received');
    }
  }

  try {
    final path = 'query_migration_${DateTime.now().microsecondsSinceEpoch}';
    final v1 = CollectionSchema<Object?>(
      name: 'articles',
      version: 1,
      keepUnsyncedArchives: true,
      fields: [Field.text('title', required: true), Field.text('body')],
      indexes: const [
        IndexSpec(['title'])
      ],
      fts: const FtsSpec(['title', 'body']),
    );
    final first = await LocalPocket.open(path: path, stores: [v1]);
    await first.collection('articles').put({
      'id': 'article00000001',
      'title': 'Database database database',
      'body': 'migration and search',
    });
    await first.collection('articles').put({
      'id': 'article00000002',
      'title': 'Database introduction',
      'body': 'migration guide',
    });
    await first.close();

    final v2 = CollectionSchema<Object?>(
      name: 'articles',
      version: 2,
      keepUnsyncedArchives: true,
      fields: [
        Field.text('title', required: true),
        Field.text('body'),
        Field.int('views'),
      ],
      indexes: const [
        IndexSpec(['title']),
        IndexSpec(['views'])
      ],
      fts: const FtsSpec(['title', 'body']),
      migrations: [
        StoreMigration(toVersion: 2, addedFields: [Field.int('views')]),
      ],
    );
    final pocket = await LocalPocket.open(path: path, stores: [v2]);
    try {
      final articles = pocket.collection('articles');
      final migrated = await articles.get('article00000001');
      if (migrated == null || migrated['views'] != null) {
        throw StateError(
            'Additive migration did not preserve nullable column.');
      }
      await articles.patch('article00000001', {'views': 7});
      final migratedQuery =
          await articles.query().orderBy('views').limit(10).fetch();
      if (!migratedQuery.items.any((item) => item['views'] == 7)) {
        throw StateError('Migrated field/index query behavior failed.');
      }

      final ranked = await articles.search('database').limit(10).fetch();
      if (ranked.length != 2 || ranked.first.id != 'article00000001') {
        throw StateError('Browser FTS ranking mismatch: $ranked');
      }
      if ((await articles.search('').fetch()).isNotEmpty ||
          (await articles.search('   ').limit(5).fetch()).isNotEmpty ||
          (await articles.search('zzzznonexistent').limit(5).fetch())
              .isNotEmpty) {
        throw StateError('Empty/no-match FTS behavior failed.');
      }
      for (final term in ['"', 'AND', 'OR', 'NOT', '-database', 'a OR']) {
        await expectRemoteValidation(
            () => articles.search(term).limit(5).fetch());
      }

      await articles.archive('article00000002');
      final archivedDefault =
          await articles.search('introduction').limit(5).fetch();
      final archivedIncluded = await articles
          .search('introduction')
          .includeArchived()
          .limit(5)
          .fetch();
      if (archivedDefault.isNotEmpty ||
          archivedIncluded.length != 1 ||
          archivedIncluded.single.id != 'article00000002') {
        throw StateError(
            'Archived FTS scope behavior failed: default=${archivedDefault.map((r) => r.id).toList()} '
            'included=${archivedIncluded.map((r) => r.id).toList()}');
      }
      await articles.restore('article00000002');

      final page = await articles.query().orderBy('title').limit(1).fetch();
      if (!page.hasNext || page.nextCursor == null) {
        throw StateError('Expected a cursor for stale-cursor test.');
      }
      await articles.patch('article00000002', {'title': 'Changed title'});
      try {
        await articles
            .query()
            .orderBy('views')
            .limit(1)
            .keysetAfter(page.nextCursor!);
        throw StateError(
            'Stale cursor unexpectedly succeeded after shape change.');
      } on StaleCursorError {
        // The compile-only facade can reject the shape before the worker call.
      } on RemoteLocalPocketException catch (error) {
        if (error.code != 'StaleCursorError') rethrow;
      }
    } finally {
      await pocket.close();
    }

    report('passed');
  } catch (error, stack) {
    report('failed', '$error\n$stack');
  }
}
