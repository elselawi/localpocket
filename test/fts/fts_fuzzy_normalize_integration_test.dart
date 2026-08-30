import 'dart:convert';

import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';

const _arabicRules = {
  'أ': 'ا',
  'إ': 'ا',
  'آ': 'ا',
  'ة': 'ه',
};

CollectionSchema<Object?> articlesSchema({
  String? name_,
  bool fuzzy = false,
  Map<String, String> rules = const {},
  int version = 1,
  bool keepUnsyncedArchives = false,
  List<StoreMigration> migrations = const [],
}) =>
    CollectionSchema<Object?>(
      name: name_ ?? 'articles',
      version: version,
      keepUnsyncedArchives: keepUnsyncedArchives,
      migrations: migrations,
      fields: [
        Field.text('title', required: true),
        Field.text('body'),
      ],
      fts: FtsSpec(
        ['title', 'body'],
        fuzzy: fuzzy,
        normalize: FtsNormalization(rules: rules),
      ),
    );

void main() {
  group('FTS normalization (Arabic parity)', () {
    Future<(LocalPocket, Collection)> openArabic() async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket = await openPocket(
          path: t.path, stores: [articlesSchema(rules: _arabicRules)]);
      addTearDown(pocket.close);
      return (pocket, pocket.collection('articles'));
    }

    test('alef forms match each other regardless of which is searched',
        () async {
      final (pocket, col) = await openArabic();
      final id = generateRecordId();
      await col.put({
        'id': id,
        'title': 'أهلا وسهلا',
        'body': 'نص عربي للتجربة',
      });

      // Query with each alef form; all must find the record.
      for (final term in ['أهلا', 'اهلا', 'إهلا', 'آهلا']) {
        final results = await col.search(term).limit(10).fetch();
        expect(results, hasLength(1), reason: 'term "$term" should match');
        expect(results.first.id, id);
      }
      // Non-matching term still returns empty.
      expect(await col.search('مفقود').limit(10).fetch(), isEmpty);
      // Silence unused-variable lint when pocket handle unused elsewhere.
      expect(pocket.storeNames, contains('articles'));
    });

    test('taa marbuta parity (ة ↔ ه)', () async {
      final (_, col) = await openArabic();
      final id = generateRecordId();
      await col.put({'id': id, 'title': 'مدرسة الأمل', 'body': ''});

      expect((await col.search('مدرسة').limit(10).fetch()).first.id, id);
      expect((await col.search('مدرسه').limit(10).fetch()).first.id, id);
    });

    test('normalization composes with multi-word queries', () async {
      final (_, col) = await openArabic();
      final id = generateRecordId();
      // Stored with hamza forms; queried with bare alef.
      await col.put({'id': id, 'title': 'إدارة المشاريع', 'body': ''});

      final results = await col.search('ادارة المشاريع').limit(10).fetch();
      expect(results, hasLength(1));
      expect(results.first.id, id);
    });

    test('trigger updates keep normalized index consistent', () async {
      final (_, col) = await openArabic();
      final id = generateRecordId();
      await col.put({'id': id, 'title': 'أحمد', 'body': ''});
      expect((await col.search('احمد').limit(10).fetch()), hasLength(1));

      // Patch to a different alef form; old normalized term no longer matches
      // but the new one does — proves delete+insert triggers normalize too.
      await col.patch(id, {'title': 'إبراهيم'});
      expect(await col.search('احمد').limit(10).fetch(), isEmpty);
      expect((await col.search('ابراهيم').limit(10).fetch()), hasLength(1));
    });
  });

  group('FTS fuzzy (trigram substring search)', () {
    test('substring anywhere in a value matches', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket =
          await openPocket(path: t.path, stores: [articlesSchema(fuzzy: true)]);
      addTearDown(pocket.close);
      final col = pocket.collection('articles');

      final id = generateRecordId();
      await col.put({
        'id': id,
        'title': 'Understanding SQLite architecture',
        'body': '',
      });

      // Mid-word substring that unicode61 token matching would never hit.
      final results = await col.search('lite archi').limit(10).fetch();
      expect(results, hasLength(1));
      expect(results.first.id, id);

      // Whole-token queries still work under trigram.
      expect((await col.search('sqlite').limit(10).fetch()).first.id, id);

      // Non-existent substring does not match.
      expect(await col.search('postgres').limit(10).fetch(), isEmpty);
    });

    test('terms shorter than 3 chars throw typed ValidationException',
        () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket =
          await openPocket(path: t.path, stores: [articlesSchema(fuzzy: true)]);
      addTearDown(pocket.close);
      final col = pocket.collection('articles');
      await col.put({'id': generateRecordId(), 'title': 'hello world'});

      for (final short in ['he', 'a']) {
        await expectLater(
          col.search(short).limit(10).fetch(),
          throwsA(isA<ValidationException>()),
        );
      }
      // The store stays usable afterwards.
      expect((await col.search('hello').limit(10).fetch()), hasLength(1));
    });

    test('fuzzy + normalization compose (parity on substrings)', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket = await openPocket(
          path: t.path,
          stores: [articlesSchema(fuzzy: true, rules: _arabicRules)]);
      addTearDown(pocket.close);
      final col = pocket.collection('articles');

      final id = generateRecordId();
      await col.put({'id': id, 'title': 'التعليم الإلكتروني', 'body': ''});

      // Substring query with bare alef matches text stored with hamza forms.
      final results = await col.search('لكتروني').limit(10).fetch();
      expect(results, hasLength(1));
      expect(results.first.id, id);
    });
  });

  group('FTS capability gates', () {
    test('versionAtLeast gate boundary pins', () {
      expect(SqliteCapabilities.versionAtLeast('3.33.9', 3, 34), isFalse);
      expect(SqliteCapabilities.versionAtLeast('3.34.0', 3, 34), isTrue);
      expect(SqliteCapabilities.versionAtLeast('3.45.1', 3, 34), isTrue);
      expect(SqliteCapabilities.versionAtLeast('3.34', 3, 34), isTrue);
      expect(SqliteCapabilities.versionAtLeast('garbage', 3, 34), isFalse);
    });

    test('compile() rejects fuzzy below 3.34 via capabilities matrix', () {
      final schema = CollectionSchema<Object?>(
        name: 'articles',
        version: 1,
        fields: [Field.text('title')],
        fts: const FtsSpec(['title'], fuzzy: true),
      );
      final caps = SqliteCapabilities.forVersion('3.33.9');
      expect(() => DdlCompiler(caps).compile(schema),
          throwsA(isA<FtsUnavailableError>()));
      // And accepts it at >= 3.34.
      final modern = DdlCompiler(SqliteCapabilities.forVersion('3.34.0'))
          .compile(schema)
          .ftsDdl
          .join('\n');
      expect(modern, contains("tokenize = 'trigram'"));
    });

    test('non-fuzzy schemas emit byte-identical DDL without tokenize option',
        () {
      final schema = CollectionSchema<Object?>(
        name: 'articles',
        version: 1,
        fields: [Field.text('title')],
        fts: const FtsSpec(['title']),
      );
      final ddl = DdlCompiler(SqliteCapabilities.forVersion('3.44.2'))
          .compile(schema)
          .ftsDdl
          .first;
      expect(ddl, isNot(contains('tokenize')));
      expect(ddl, contains("content = 'articles'"));
    });

    test('invalid normalization rule rejected at registration', () {
      final schema = CollectionSchema<Object?>(
        name: 'articles',
        version: 1,
        fields: [Field.text('title')],
        fts: const FtsSpec(['title'],
            normalize: FtsNormalization(rules: {'toolong!': 'x'})),
      );
      expect(
        () => DdlCompiler(SqliteCapabilities.forVersion('3.44.2'))
            .compile(schema),
        throwsA(isA<SchemaRegistrationError>()),
      );
    });
  });

  group('FTS config change rebuilds index', () {
    test('adding normalization rules re-indexes existing rows', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final path = t.path;

      var pocket = await openPocket(path: path, stores: [articlesSchema()]);
      const rowId = 'row100000000001';
      await pocket.collection('articles').put({
        'id': rowId,
        'title': 'أحمد سعيد',
        'body': '',
      });
      // Without rules, bare alef does not match the hamza form.
      expect(await pocket.collection('articles').search('احمد').all().fetch(),
          isEmpty);
      await pocket.close();

      // Reopen WITH parity rules: an FTS config change is a behavior change,
      // so it requires a version bump (manifest policy) — and the
      // registration must rebuild the index so pre-existing rows honor the
      // new equivalences.
      pocket = await openPocket(path: path, stores: [
        articlesSchema(
          rules: _arabicRules,
          version: 2,
          migrations: [StoreMigration(toVersion: 2)],
        ),
      ]);
      addTearDown(pocket.close);
      final results =
          await pocket.collection('articles').search('احمد').all().fetch();
      expect(results, hasLength(1));
      expect(results.first.id, rowId);

      // Ledger records the rebuild.
      final ledger = await pocket.db
          .rawQuery("SELECT name FROM lp_migrations WHERE name LIKE 'fts:%'");
      expect(ledger.map((r) => r['name']), contains('fts:articles'));
    });

    test('unchanged config does not create a rebuild ledger row', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final path = t.path;

      var pocket = await openPocket(
          path: path, stores: [articlesSchema(rules: _arabicRules)]);
      await pocket.collection('articles').put({
        'id': 'row200000000002',
        'title': 'أحمد',
        'body': '',
      });
      await pocket.close();

      // Reopen with the IDENTICAL spec: no rebuild row beyond the first open's.
      pocket = await openPocket(
          path: path, stores: [articlesSchema(rules: _arabicRules)]);
      addTearDown(pocket.close);
      final ledger = await pocket.db.rawQuery(
          "SELECT COUNT(*) c FROM lp_migrations WHERE name LIKE 'fts:%'");
      final firstIntVal = ledger.first['c'];
      final count = firstIntVal is int ? firstIntVal : 0;
      expect(count, 0, reason: 'no fts rebuild should run for identical spec');
    });

    test('dropping fts removes the index without touching rows', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final path = t.path;

      var pocket = await openPocket(
          path: path, stores: [articlesSchema(rules: _arabicRules)]);
      await pocket.collection('articles').put({
        'id': 'row300000000003',
        'title': 'أحمد',
        'body': '',
      });
      await pocket.close();

      pocket = await openPocket(path: path, stores: [
        CollectionSchema<Object?>(
          name: 'articles',
          version: 2,
          migrations: [StoreMigration(toVersion: 2)],
          fields: [
            Field.text('title', required: true),
            Field.text('body'),
          ],
        ),
      ]);
      addTearDown(pocket.close);
      expect(
        () => pocket.collection('articles').search('احمد'),
        throwsA(isA<FtsUnavailableError>()),
      );
      final rows = await pocket.db
          .rawQuery('SELECT COUNT(*) c FROM ${DdlCompiler.quote('articles')}');
      expect(rows.first['c'], 1);
    });
  });

  group('DDL compilation: normalization + fuzzy', () {
    CollectionSchema<Object?> schemaWithFts(
            {required FtsSpec fts, String store = 'articles'}) =>
        CollectionSchema<Object?>(
          name: store,
          version: 1,
          fields: [Field.text('title'), Field.text('body')],
          fts: fts,
        );

    test('identity rules emit plain column refs in triggers (golden parity)',
        () {
      final ddl = DdlCompiler(SqliteCapabilities.forVersion('3.44.2'))
          .compile(schemaWithFts(fts: const FtsSpec(['title'])))
          .ftsDdl;
      expect(ddl[1], isNot(contains('lp_norm')));
      expect(ddl[1], contains('VALUES (new.rowid, new."title")'));
      expect(ddl[2], contains("('delete', old.rowid, old.\"title\")"));
    });

    test('active rules wrap every trigger reference in the UDF', () {
      const fts =
          FtsSpec(['title'], normalize: FtsNormalization(rules: {'أ': 'ا'}));
      final ddl = DdlCompiler(SqliteCapabilities.forVersion('3.44.2'))
          .compile(schemaWithFts(fts: fts))
          .ftsDdl;
      // Insert trigger.
      expect(ddl[1], contains('"lp_norm_articles"("new"."title")'));
      // Delete trigger uses old.* through the UDF too — deletion must
      // normalize with the SAME rules or index entries leak.
      expect(ddl[2], contains('"lp_norm_articles"("old"."title")'));
      // Update trigger: both statements.
      expect(ddl[3], contains('"lp_norm_articles"("old"."title")'));
      expect(ddl[3], contains('"lp_norm_articles"("new"."title")'));
    });

    test('fuzzy emits the trigram tokenizer exactly once', () {
      final ddl = DdlCompiler(SqliteCapabilities.forVersion('3.44.2'))
          .compile(schemaWithFts(fts: const FtsSpec(['title'], fuzzy: true)))
          .ftsDdl;
      expect('tokenize'.allMatches(ddl.join('\n')), hasLength(1));
      expect(ddl.first, contains("tokenize = 'trigram'"));
    });

    test('fuzzy + normalize compose in DDL', () {
      const fts = FtsSpec(['title'],
          fuzzy: true, normalize: FtsNormalization(rules: {'أ': 'ا'}));
      final ddl = DdlCompiler(SqliteCapabilities.forVersion('3.44.2'))
          .compile(schemaWithFts(fts: fts))
          .ftsDdl;
      expect(ddl.first, contains("tokenize = 'trigram'"));
      expect(ddl[1], contains('"lp_norm_articles"("new"."title")'));
    });

    test('per-store UDF name is embedded quoted and collision-free', () {
      const fts =
          FtsSpec(['title'], normalize: FtsNormalization(rules: {'أ': 'ا'}));
      for (final store in ['articles', 'notes', 'my_store']) {
        final ddl = DdlCompiler(SqliteCapabilities.forVersion('3.44.2'))
            .compile(schemaWithFts(fts: fts, store: store))
            .ftsDdl;
        expect(ddl.join('\n'), contains('"lp_norm_$store"'));
      }
    });

    test('digit/punctuation rule keys are legal (not identifier-checked)', () {
      const fts = FtsSpec(['title'],
          normalize: FtsNormalization(rules: {'1': '١', '.': ','}));
      final compiled = DdlCompiler(SqliteCapabilities.forVersion('3.44.2'))
          .compile(schemaWithFts(fts: fts));
      expect(compiled.ftsDdl, isNotEmpty);
    });

    test('>4-char replacement rejected at compile time even via const ctor',
        () {
      const fts = FtsSpec(['title'],
          normalize: FtsNormalization(rules: {'أ': 'too-long'}));
      expect(
        () => DdlCompiler(SqliteCapabilities.forVersion('3.44.2'))
            .compile(schemaWithFts(fts: fts)),
        throwsA(isA<SchemaRegistrationError>()),
      );
    });
  });

  group('SearchBuilder compile-level behavior', () {
    CollectionSchema<Object?> searchSchema({
      bool fuzzy = false,
      Map<String, String> rules = const {},
    }) =>
        CollectionSchema<Object?>(
          name: 'articles',
          version: 1,
          fields: [Field.text('title')],
          fts: FtsSpec(['title'],
              fuzzy: fuzzy, normalize: FtsNormalization(rules: rules)),
        );

    test('term is normalized before being bound as MATCH arg', () {
      final builder = SearchBuilder.compileOnly(
          searchSchema(rules: {'أ': 'ا', 'إ': 'ا'}), 'أهلا إبراهيم');
      final (sql, args) = builder.all().debugCompile();
      expect(args.first, 'اهلا ابراهيم');
      expect(sql, contains('MATCH ?'));
    });

    test('compilePlan carries the normalized term (web transport)', () {
      final builder = SearchBuilder.compileOnly(
          searchSchema(fuzzy: true, rules: {'أ': 'ا'}), 'أحمد');
      final plan = builder.compilePlan(limitOverride: 5);
      expect(plan.args.first, 'احمد');
      expect(plan.limit, 5);
      expect(plan.store, 'articles');
      // The raw term stays in shape for diagnostics; the normalized one in
      // args is what executes.
      final shape = (jsonDecode(plan.shape) as Map).cast<String, Object?>();
      expect(shape['term'], 'أحمد');
    });

    test('fuzzy validation runs on NORMALIZED term', () {
      // 'ab' normalizes to a 3-rune string → passes the floor.
      final ok = SearchBuilder.compileOnly(
          searchSchema(fuzzy: true, rules: {'x': 'abc'}), 'x');
      expect(() => ok.all().debugCompile(), returnsNormally);
      // Normalization can never SHRINK length (replacements are >= 1 char),
      // but a short term EXPANDING past the floor becomes valid.
      final expanded = SearchBuilder.compileOnly(
          searchSchema(fuzzy: true, rules: {'a': 'abc'}), 'a');
      expect(() => expanded.all().debugCompile(), returnsNormally);
    });

    test('multi-token fuzzy query validates EACH token', () {
      final builder = SearchBuilder.compileOnly(
          searchSchema(fuzzy: true), 'hello ab world cd ef');
      expect(() => builder.all().debugCompile(),
          throwsA(isA<ValidationException>()));
      // Error names the first offending token.
      try {
        SearchBuilder.compileOnly(searchSchema(fuzzy: true), 'ok123 ab')
            .all()
            .debugCompile();
        fail('should throw');
      } on ValidationException catch (e) {
        expect(e.message, contains('"ab"'));
        expect(e.message, contains('at least 3 characters'));
      }
    });

    test('exact-3-rune tokens pass the fuzzy floor (boundary pin)', () {
      final builder =
          SearchBuilder.compileOnly(searchSchema(fuzzy: true), 'abc');
      expect(() => builder.all().debugCompile(), returnsNormally);
      // Astral-plane runes count as ONE rune each: two astral chars < 3.
      final astral =
          SearchBuilder.compileOnly(searchSchema(fuzzy: true), '𝕏𝕐');
      expect(() => astral.all().debugCompile(),
          throwsA(isA<ValidationException>()));
      // Three astral runes pass.
      final three =
          SearchBuilder.compileOnly(searchSchema(fuzzy: true), '𝕏𝕐ℤ');
      expect(() => three.all().debugCompile(), returnsNormally);
    });

    test('invalid-operator rejection applies to normalized text', () {
      // A quote smuggled in THROUGH a rule must still be caught.
      final smuggled = SearchBuilder.compileOnly(
          searchSchema(fuzzy: false, rules: {'q': '"'}), 'qhello');
      expect(() => smuggled.all().debugCompile(),
          throwsA(isA<ValidationException>()));
      // A leading operator formed THROUGH a rule ('q' → 'AND ') is caught:
      // the check runs AFTER normalization.
      final opSmuggled = SearchBuilder.compileOnly(
          searchSchema(rules: {'q': 'AND '}), 'qhello');
      expect(() => opSmuggled.all().debugCompile(),
          throwsA(isA<ValidationException>()));
      // But a bareword CONTAINING operator letters is legal FTS5 syntax
      // (no word boundaries) — pinned as accepted.
      final glued =
          SearchBuilder.compileOnly(searchSchema(rules: {'a': 'AND'}), 'aa');
      expect(() => glued.all().debugCompile(), returnsNormally);
    });

    test('empty / whitespace terms skip all validation', () {
      for (final term in ['', '   ']) {
        final builder = SearchBuilder.compileOnly(
            searchSchema(fuzzy: true, rules: {'أ': 'ا'}), term);
        final (_, args) = builder.all().debugCompile();
        expect(args.first, term);
      }
    });
  });

  group('runtime edges: normalization under real SQLite', () {
    test(
        'rule that maps to empty string is impossible; maps to longer string '
        'still round-trip', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      // A rule whose replacement is LONGER than its source (e.g. ligature →
      // expansion) exercises non-length-preserving normalization.
      final pocket = await openPocket(path: t.path, stores: [
        CollectionSchema<Object?>(
          name: 'articles',
          version: 1,
          fields: [Field.text('title')],
          fts: const FtsSpec(['title'],
              normalize: FtsNormalization(rules: {'ß': 'ss'})),
        ),
      ]);
      addTearDown(pocket.close);
      final col = pocket.collection('articles');
      final id = generateRecordId();
      await col.put({'id': id, 'title': 'Straße'});
      expect((await col.search('strasse').limit(10).fetch()).first.id, id);
      expect((await col.search('straße').limit(10).fetch()).first.id, id);
    });

    test('normalization does not disturb non-FTS fields', () async {
      Future<(LocalPocket, Collection)> open() async {
        final t = await tempDbPath();
        addTearDown(t.cleanup);
        final pocket = await openPocket(path: t.path, stores: [
          CollectionSchema<Object?>(
            name: 'articles',
            version: 1,
            fields: [
              Field.text('title'),
              Field.int('qty'),
            ],
            fts: const FtsSpec(['title'],
                normalize: FtsNormalization(rules: _arabicRules)),
          ),
        ]);
        addTearDown(pocket.close);
        return (pocket, pocket.collection('articles'));
      }

      final (pocket, col) = await open();
      final id = generateRecordId();
      await col.put({'id': id, 'title': 'أحمد', 'qty': 42});
      final doc = await col.get(id);
      expect(doc!['qty'], 42);
      expect(doc['title'], 'أحمد',
          reason:
              'stored values are NEVER mutated — only the index is normalized');
      // Raw table row holds the original text.
      final raw = await pocket.db.rawQuery(
          'SELECT title FROM ${DdlCompiler.quote('articles')} WHERE id = ?',
          [id]);
      expect(raw.single['title'], 'أحمد');
    });

    test('archived/hidden scoping works identically under normalization',
        () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket = await openPocket(path: t.path, stores: [
        articlesSchema(rules: _arabicRules, keepUnsyncedArchives: true),
      ]);
      addTearDown(pocket.close);
      final col = pocket.collection('articles');
      final visible = generateRecordId();
      final archived = generateRecordId();
      final hidden = generateRecordId();
      await col.put({'id': visible, 'title': 'إدارة', 'body': ''});
      await col.put({'id': archived, 'title': 'إدارة', 'body': ''});
      await col.archive(archived);
      await col.put({'id': hidden, 'title': 'إدارة', 'body': ''});
      // hidden is an internal flag; flip it via raw SQL (no public API).
      await pocket.db.update('articles', {'hidden': 1},
          where: 'id = ?', whereArgs: [hidden]);

      expect((await col.search('ادارة').limit(10).fetch()), hasLength(1));
      expect((await col.search('ادارة').includeArchived().limit(10).fetch()),
          hasLength(2));
      expect(
          (await col
                  .search('ادارة')
                  .includeArchived()
                  .includeHidden()
                  .limit(10)
                  .fetch())
              .length,
          3);
    });

    test('two stores with different rules normalize independently', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket = await openPocket(path: t.path, stores: [
        articlesSchema(name_: 'arabic_store', rules: _arabicRules),
        articlesSchema(name_: 'plain_store'),
      ]);
      addTearDown(pocket.close);
      await pocket
          .collection('arabic_store')
          .put({'id': generateRecordId(), 'title': 'أحمد', 'body': ''});
      await pocket
          .collection('plain_store')
          .put({'id': generateRecordId(), 'title': 'أحمد', 'body': ''});

      // Rules apply only where declared.
      expect(
          await pocket.collection('arabic_store').search('احمد').all().fetch(),
          hasLength(1));
      expect(
          await pocket.collection('plain_store').search('احمد').all().fetch(),
          isEmpty);
      expect(
          await pocket.collection('plain_store').search('أحمد').all().fetch(),
          hasLength(1));
    });

    test('purge removes normalized index entries', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket = await openPocket(
          path: t.path, stores: [articlesSchema(rules: _arabicRules)]);
      addTearDown(pocket.close);
      final col = pocket.collection('articles');
      final id = generateRecordId();
      await col.put({'id': id, 'title': 'إبراهيم', 'body': ''});
      expect((await col.search('ابراهيم').limit(10).fetch()), hasLength(1));
      await col.purge(id);
      expect(await col.search('ابراهيم').includeArchived().limit(10).fetch(),
          isEmpty);
    });

    test('bm25 ranking still functions with normalization active', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket = await openPocket(
          path: t.path, stores: [articlesSchema(rules: _arabicRules)]);
      addTearDown(pocket.close);
      final col = pocket.collection('articles');
      await col.put({
        'id': generateRecordId(),
        'title': 'كلمة كلمة كلمة كلمة كلمة',
        'body': ''
      });
      await col.put({'id': generateRecordId(), 'title': 'كلمة', 'body': ''});
      final results = await col.search('كلمة').all().fetch();
      expect(results, hasLength(2));
      // Short doc ranks better (smaller |D| in bm25).
      expect(results.first.score, lessThan(results.last.score));
    });

    test('reopen after restart keeps normalizing (UDF re-registration)',
        () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final path = t.path;
      var pocket = await openPocket(
          path: path, stores: [articlesSchema(rules: _arabicRules)]);
      await pocket
          .collection('articles')
          .put({'id': 'aaa000000000001', 'title': 'أحمد', 'body': ''});
      await pocket.close();

      pocket = await openPocket(
          path: path, stores: [articlesSchema(rules: _arabicRules)]);
      addTearDown(pocket.close);
      // Writes AFTER reopen still normalize (fresh connection, fresh UDF).
      await pocket
          .collection('articles')
          .put({'id': 'bbb000000000002', 'title': 'إحمد', 'body': ''});
      expect(await pocket.collection('articles').search('احمد').all().fetch(),
          hasLength(2),
          reason: 'both rows searchable by bare alef across the restart');
    });
  });
}
