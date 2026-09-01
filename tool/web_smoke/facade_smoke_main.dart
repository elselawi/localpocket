import 'dart:async';
import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'package:localpocket/src/kernel/schema.dart';
import 'package:localpocket/src/web/facade.dart';
import 'package:localpocket/src/web/facade/query/web_query_builder.dart';

Future<void> main() async {
  var stage = 'start';
  void report(String status, [String? detail]) {
    globalContext.setProperty('__facade_smoke'.toJS, status.toJS);
    if (detail != null) {
      globalContext.setProperty('__facade_smoke_detail'.toJS, detail.toJS);
    }
  }

  void mark(String next) {
    stage = next;
    globalContext.setProperty('__facade_smoke_progress'.toJS, next.toJS);
  }

  try {
    final schema = CollectionSchema<Object?>(
      name: 'notes',
      version: 1,
      fields: [
        Field.text('title', required: true),
        Field.int('priority'),
        Field.bool('done'),
      ],
    );

    // FTS-enabled store for Collection.search() parity (Task 3).
    final articlesSchema = CollectionSchema<Object?>(
      name: 'articles',
      version: 1,
      fields: [
        Field.text('title', required: true),
        Field.text('body'),
      ],
      fts: const FtsSpec(['title', 'body']),
    );

    // 1. Open database through the facade. A versioned name keeps runs isolated
    //    from stale OPFS data a prior buggy worker may have left behind.
    mark('open');
    final pocket = await LocalPocket.open(
      path: 'facade_test_db_v2',
      stores: [schema, articlesSchema],
    );

    final notes = pocket.collection('notes');
    if (pocket.storageCapabilities.worker != true) {
      throw StateError('Expected worker-backed web capabilities.');
    }

    // 2. Put records via batched mutations
    mark('put');
    await notes.put({
      'id': 'note00000000001',
      'title': 'Task One',
      'priority': 10,
      'done': false,
    });

    mark('putAll');
    await notes.putAll([
      {
        'id': 'note00000000002',
        'title': 'Task Two',
        'priority': 20,
        'done': true,
      },
      {
        'id': 'note00000000003',
        'title': 'Task Three',
        'priority': 30,
        'done': false,
      },
    ]);

    // 3. Point read
    mark('get');
    final doc1 = await notes.get('note00000000001');
    if (doc1 == null || doc1['title'] != 'Task One') {
      throw StateError('Point read mismatch: $doc1');
    }

    // 4. Queries and predicates
    mark('query');
    final donePage =
        await notes.query().where('done', eq: true).limit(10).fetch();
    if (donePage.items.length != 1 ||
        donePage.items.first['id'] != 'note00000000002') {
      throw StateError('Query filter mismatch: ${donePage.items}');
    }

    mark('count');
    final count = await notes.query().count();
    if (count != 3) {
      throw StateError('Expected count 3, got $count');
    }

    mark('sum');
    final sumPriority = await notes.query().sum('priority');
    if (sumPriority != 60.0) {
      throw StateError('Expected sum 60.0, got $sumPriority');
    }

    // 4b. Full operator matrix through the facade's WebQueryBuilder.
    // Seed the remaining 7 rows so the matrix runs over the complete 10-row
    // dataset: priorities [null, 7, 8, 9, 10, 20, 30, 40, 50, 60].
    mark('matrix');
    await notes.putAll([
      {
        'id': 'note00000000004',
        'title': 'Task Four',
        'priority': 40,
        'done': false,
      },
      {
        'id': 'note00000000005',
        'title': 'Task Five',
        'priority': 50,
        'done': false,
      },
      {
        'id': 'note00000000006',
        'title': 'Task Six',
        'priority': 60,
        'done': false,
      },
      {
        'id': 'note00000000007',
        'title': 'alpha beta',
        'priority': null,
        'done': true,
      },
      {
        'id': 'note00000000008',
        'title': 'beta gamma',
        'priority': 7,
        'done': false,
      },
      {
        'id': 'note00000000009',
        'title': 'gamma alpha',
        'priority': 8,
        'done': true,
      },
      {
        'id': 'note00000000010',
        'title': 'omega',
        'priority': 9,
        'done': false,
      },
    ]);

    Future<int> matching(String label, WebQueryBuilder q) async {
      final page = await q.limit(50).fetch();
      return page.items.length;
    }

    if (await matching('eq', notes.query().where('priority', eq: 8)) != 1) {
      throw StateError('matrix eq failed');
    }
    if (await matching('neq', notes.query().where('priority', neq: 8)) != 8) {
      throw StateError('matrix neq failed');
    }
    if (await matching('gt', notes.query().where('priority', gt: 8)) != 7) {
      throw StateError('matrix gt failed');
    }
    if (await matching('gte', notes.query().where('priority', gte: 8)) != 8) {
      throw StateError('matrix gte failed');
    }
    if (await matching('lt', notes.query().where('priority', lt: 8)) != 1) {
      throw StateError('matrix lt failed');
    }
    if (await matching('lte', notes.query().where('priority', lte: 8)) != 2) {
      throw StateError('matrix lte failed');
    }
    if (await matching('inValues',
            notes.query().where('priority', inValues: [8, 10, 999])) !=
        2) {
      throw StateError('matrix inValues failed');
    }
    if (await matching(
            'between', notes.query().where('priority', between: (7, 10))) !=
        4) {
      throw StateError('matrix between failed');
    }
    if (await matching(
            'startsWith', notes.query().where('title', startsWith: 'alp')) !=
        1) {
      throw StateError('matrix startsWith failed');
    }
    if (await matching(
            'endsWith', notes.query().where('title', endsWith: 'mma')) !=
        1) {
      throw StateError('matrix endsWith failed');
    }
    if (await matching(
            'contains', notes.query().where('title', contains: 'eta')) !=
        2) {
      throw StateError('matrix contains failed');
    }
    if (await matching(
            'isNull', notes.query().where('priority', isNull: true)) !=
        1) {
      throw StateError('matrix isNull failed');
    }
    if (await matching(
            'isNotNull', notes.query().where('priority', isNotNull: true)) !=
        9) {
      throw StateError('matrix isNotNull failed');
    }

    // orWhere + ordering + projection
    final orPage = await notes
        .query()
        .orWhere([
          {'title': 'omega'},
          {'priority': 60},
        ])
        .orderBy('priority', desc: true)
        .limit(10)
        .fetch();
    if (orPage.items.length != 2 ||
        orPage.items.first['id'] != 'note00000000006') {
      throw StateError('matrix orWhere/orderBy failed: ${orPage.items}');
    }
    final projected = await notes
        .query()
        .select(['id', 'title'])
        .where('title', contains: 'alpha')
        .limit(10)
        .fetch();
    if (projected.items.length != 2 ||
        projected.items.any((r) =>
            r.keys.length != 2 ||
            !r.containsKey('id') ||
            !r.containsKey('title'))) {
      throw StateError('matrix select failed: ${projected.items}');
    }

    // Scalar operations
    if (await notes.query().countDistinct('done') != 2) {
      throw StateError('matrix countDistinct failed');
    }
    final distinctPriorities = await notes
        .query()
        .where('priority', isNotNull: true)
        .distinct('priority');
    if (distinctPriorities.length != 9) {
      throw StateError('matrix distinct failed: $distinctPriorities');
    }
    final ids = await notes.query().where('priority', gte: 8).limit(10).ids();
    if (ids.length != 8) {
      throw StateError('matrix ids failed: $ids');
    }
    if (await notes.query().min('priority') != 7) {
      throw StateError('matrix min failed');
    }
    if (await notes.query().max('priority') != 60) {
      throw StateError('matrix max failed');
    }
    if (await notes.query().avg('priority') != 26.0) {
      throw StateError('matrix avg failed');
    }
    final plan =
        await notes.query().where('done', eq: true).limit(10).explain();
    if (plan.isEmpty) {
      throw StateError('matrix explain failed');
    }

    // Keyset pagination
    final page1 = await notes.query().orderBy('priority').limit(4).fetch();
    if (!page1.hasNext || page1.nextCursor == null) {
      throw StateError('matrix pagination page1 failed');
    }
    final page2 = await notes
        .query()
        .orderBy('priority')
        .limit(4)
        .keysetAfter(page1.nextCursor!);
    if (page2.items.isEmpty) {
      throw StateError('matrix pagination page2 failed');
    }

    // 5b. FTS search parity via Collection.search() -> WebSearchQueryBuilder.
    mark('search');
    final articles = pocket.collection('articles');
    await articles.putAll([
      {
        'id': 'art000000000001',
        'title': 'SQLite full-text search',
        'body': 'database performance and indexing',
      },
      {
        'id': 'art000000000002',
        'title': 'Dart on the web',
        'body': 'database engines run in a worker',
      },
      {
        'id': 'art000000000003',
        'title': 'Local-first architecture',
        'body': 'offline first with eventual sync',
      },
      {
        'id': 'art000000000004',
        'title': 'untouched record',
        'body': 'no matching tokens here',
      },
    ]);

    // Ranked search for 'database' matches the first two articles only, with
    // the bm25 score reported as a double (which may be negative for a tiny
    // corpus — never assert > 0).
    final dbHits = await articles.search('database').limit(10).fetch();
    if (dbHits.length != 2) {
      throw StateError('search database expected 2 hits: $dbHits');
    }

    // .all() (no limit) returns all matching rows.
    final allHits = await articles.search('engines').all().fetch();
    if (allHits.length != 1 || allHits.single.id != 'art000000000002') {
      throw StateError('search engines .all() mismatch: $allHits');
    }

    // limit caps the result set.
    final limited = await articles.search('database').limit(1).fetch();
    if (limited.length != 1) {
      throw StateError('search limit(1) mismatch: $limited');
    }

    // No match for an absent term.
    if ((await articles.search('zzznonexistent').limit(5).fetch()).isNotEmpty) {
      throw StateError('absent search term must return no hits.');
    }

    // 5. Interactive transaction session (§7.1)
    // Notes 1–10 are already committed. The tx adds notes 11/12 in-session,
    // and a nested savepoint adds note 13.
    mark('tx');
    await pocket.transaction((tx) async {
      final txNotes = tx.collection('notes');
      await txNotes.patch('note00000000001', {'done': true});
      await txNotes.putAll([
        {
          'id': 'note00000000011',
          'title': 'Task Eleven',
          'priority': 110,
          'done': false,
        },
        {
          'id': 'note00000000012',
          'title': 'Task Twelve',
          'priority': 120,
          'done': false,
        },
      ]);
      // 10 committed rows + 2 added in this session.
      final txCount = await tx.query('notes').all().count();
      if (txCount != 12) {
        throw StateError('Transaction count mismatch: $txCount');
      }
      final txIds = await tx.query('notes').all().ids();
      if (txIds.length != 12) {
        throw StateError('Transaction ids mismatch: $txIds');
      }
      // between is inclusive [start, end]: priorities 7 (note8), 8 (note9),
      // 9 (note10) and note1's patched 10 all fall inside; notes 11/12
      // (110/120) fall outside. Note1's priority was set to 10 by the tx
      // patch above, so the window matches exactly four rows.
      final txBetween = await tx
          .query('notes')
          .where('priority', between: (7, 10))
          .all()
          .count();
      if (txBetween != 4) {
        throw StateError('Transaction between mismatch: $txBetween');
      }

      // Nested transaction as savepoint
      await tx.transaction((nestedTx) async {
        final nestedNotes = nestedTx.collection('notes');
        await nestedNotes.put({
          'id': 'note00000000013',
          'title': 'Task Thirteen',
          'priority': 130,
          'done': false,
        });
      });
    });

    mark('after-tx');
    final doc1AfterTx = await notes.get('note00000000001');
    if (doc1AfterTx?['done'] != true) {
      throw StateError('Transaction patch did not commit.');
    }

    final doc13 = await notes.get('note00000000013');
    if (doc13?['title'] != 'Task Thirteen') {
      throw StateError('Nested transaction did not commit.');
    }
    if (await notes.get('note00000000011') == null ||
        await notes.get('note00000000012') == null) {
      throw StateError('Transaction putAll did not commit.');
    }

    // 6. Close database
    mark('close');
    await pocket.close();

    report('passed',
        'CRUD, Queries, Counts, Aggregates, and Interactive Sessions all passed.');
  } catch (e, stack) {
    report('failed', 'stage=$stage\n$e\n$stack');
  }
}
