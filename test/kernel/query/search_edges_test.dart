import 'package:localpocket/src/kernel/errors.dart';
import 'package:localpocket/src/kernel/local_pocket.dart' as kernel;
import 'package:localpocket/src/kernel/query/search_builder/search_builder.dart'
    show SearchBuilder, SearchResult;
import 'package:localpocket/src/kernel/schema.dart';
import 'package:test/test.dart';

/// Search-surface edges: the result value type, the missing-limit guard on
/// the builder, and the spec-lowering snapshot getters the web runtime uses.
CollectionSchema<Object?> articles() => CollectionSchema<Object?>(
      name: 'articles',
      version: 1,
      fields: [Field.text('title', required: true)],
      fts: const FtsSpec(['title']),
    );

void main() {
  group('SearchResult value type', () {
    test('equality keys on id and score', () {
      const a = SearchResult(id: 'r1', score: 1.5);
      const sameIdDifferentScore = SearchResult(id: 'r1', score: 2.0);
      expect(a, const SearchResult(id: 'r1', score: 1.5));
      expect(a.hashCode, const SearchResult(id: 'r1', score: 1.5).hashCode);
      expect(a == sameIdDifferentScore, isFalse);
      expect(a == Object(), isFalse);
      expect(a.toString(), 'SearchResult(id: r1, score: 1.5)');
    });
  });

  group('builder guards and spec snapshot', () {
    test('fetch without a limit or all() is a MissingLimitError', () async {
      // The compile-only builder refuses execution outright...
      final compileOnly = SearchBuilder.compileOnly(articles(), 'hello');
      expect(compileOnly.fetch, throwsStateError);

      // ...while a live builder reaches the limit guard.
      final db = await kernel.KernelDatabase.open(
        path: ':memory:',
        stores: [articles()],
      );
      addTearDown(db.close);
      final live = db.collection('articles').search('hello');
      expect(live.fetch, throwsA(isA<MissingLimitError>()));
    });

    test('the spec snapshot exposes the lowering inputs', () {
      final schema = articles();
      final limited = SearchBuilder.compileOnly(schema, 'hello').limit(5);
      expect(limited.store, 'articles');
      expect(limited.limitValue, 5);
      expect(limited.allMode, isFalse);
      expect(limited.includeArchivedFlag, isFalse);
      expect(limited.includeHiddenFlag, isFalse);

      final all = SearchBuilder.compileOnly(schema, 'hello').all();
      expect(all.limitValue, isNull);
      expect(all.allMode, isTrue);

      final scoped = SearchBuilder.compileOnly(schema, 'hello')
          .limit(1)
          .includeArchived()
          .includeHidden();
      expect(scoped.includeArchivedFlag, isTrue);
      expect(scoped.includeHiddenFlag, isTrue);
    });

    test('a store without FTS cannot build a search at all', () {
      final plain = CollectionSchema<Object?>(
        name: 'plain',
        version: 1,
        fields: [Field.text('title')],
      );
      expect(
        () => SearchBuilder.compileOnly(plain, 'hello'),
        throwsA(isA<FtsUnavailableError>()),
      );
    });
  });
}
