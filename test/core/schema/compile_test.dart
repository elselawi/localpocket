import 'package:localpocket/localpocket.dart';
import 'package:sqlite3/sqlite3.dart' as sqlite;
import 'package:test/test.dart';

import '../../support/helpers.dart';

/// Schema compiler tests.
void main() {
  final caps = SqliteCapabilities.forVersion('3.44.2');

  group('schema compiler', () {
    test('ddl golden every field kind', () async {
      // Default schema: declared [name,qty] index + auto ref index + unique.
      final compiled = DdlCompiler(caps).compile(widgetsSchema());

      final tableGolden = await readGolden('test/goldens/ddl_table.golden');
      expect(compiled.tableDdl.trim(), tableGolden, reason: 'table DDL golden');

      final indexesGolden = await readGolden('test/goldens/ddl_indexes.golden');
      expect(compiled.indexDdl.join('\n').trim(), indexesGolden,
          reason: 'index DDL golden');

      final ftsCompiled = DdlCompiler(caps)
          .compile(widgetsSchema(fts: const FtsSpec(['name', 'meta'])));
      final ftsGolden = await readGolden('test/goldens/ddl_fts.golden');
      expect(ftsCompiled.ftsDdl.join('\n').trim(), ftsGolden,
          reason: 'FTS DDL golden');
    });

    test('partial live indexes always scope archived hidden', () {
      final compiled = DdlCompiler(caps).compile(widgetsSchema(indexes: [
        const IndexSpec(['name', 'qty']),
        const IndexSpec(['owner_id'], scope: IndexScope.notArchived),
      ]));
      expect(
          compiled.indexDdl[0], contains('WHERE archived = 0 AND hidden = 0'));
      expect(compiled.indexDdl[1], contains('WHERE archived = 0'));
      expect(compiled.indexDdl[1], isNot(contains('hidden')));
    });

    test('reserved column collision rejected', () {
      for (final reserved in ['id', 'archived', 'hidden', 'extra']) {
        expect(
            () => DdlCompiler(caps).compile(CollectionSchema(
                  name: 'widgets',
                  version: 1,
                  fields: [Field.text(reserved)],
                )),
            throwsA(isA<SchemaRegistrationError>()));
      }
    });

    test('identifier quoting unicode and sql keywords', () {
      final compiled = DdlCompiler(caps).compile(CollectionSchema(
        name: 'widgets',
        version: 1,
        fields: [
          Field.text('select'),
          Field.text('名前'),
        ],
        indexes: const [
          IndexSpec(['select'])
        ],
      ));
      expect(compiled.tableDdl, contains('"select" TEXT'));
      expect(compiled.tableDdl, contains('"名前" TEXT'));
      expect(compiled.indexDdl.join('\n'), contains('"select"'));
    });

    test('encrypted field rejects index unique fts', () {
      expect(
          () => DdlCompiler(caps).compile(CollectionSchema(
                name: 'widgets',
                version: 1,
                fields: [
                  Field.text('secret', encrypted: true, uniqueWhenActive: true)
                ],
              )),
          throwsA(isA<SchemaRegistrationError>()));

      expect(
          () => DdlCompiler(caps).compile(CollectionSchema(
                name: 'widgets',
                version: 1,
                fields: [Field.text('secret', encrypted: true)],
                indexes: const [
                  IndexSpec(['secret'])
                ],
              )),
          throwsA(isA<SchemaRegistrationError>()));

      expect(
          () => DdlCompiler(caps).compile(CollectionSchema(
                name: 'widgets',
                version: 1,
                fields: [Field.text('secret', encrypted: true)],
                fts: const FtsSpec(['secret']),
              )),
          throwsA(isA<SchemaRegistrationError>()));
    });

    test('unique index compiles and constraint translated', () async {
      final compiled = DdlCompiler(caps).compile(widgetsSchema());
      expect(compiled.indexDdl.join('\n'),
          contains('CREATE UNIQUE INDEX "ux_widgets_phone"'));

      final pocket = await openPocket();
      addTearDown(pocket.close);
      final a = record(id: generateRecordId(), name: 'a', phone: '123');
      final b = record(id: generateRecordId(), name: 'b', phone: '123');
      await pocket.collection('widgets').put(a);
      await expectLater(
          pocket.collection('widgets').put(b),
          throwsA(isA<UniqueConstraintException>()
              .having((e) => e.field, 'field', 'phone')));
    });

    test('fts declaration generates external content and triggers', () async {
      final compiled = DdlCompiler(caps)
          .compile(widgetsSchema(fts: const FtsSpec(['name', 'meta'])));
      final ftsGolden = await readGolden('test/goldens/ddl_fts.golden');
      expect(compiled.ftsDdl.join('\n').trim(), ftsGolden);
      expect(compiled.ftsDdl.first, contains('content = \'widgets\''));
      expect(compiled.ftsDdl.join('\n'), contains('AFTER INSERT'));
      expect(compiled.ftsDdl.join('\n'), contains('AFTER DELETE'));
      expect(compiled.ftsDdl.join('\n'), contains('AFTER UPDATE'));
    });

    test('downgrade guard refuses newer schema', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final v2 =
          await openPocket(path: t.path, stores: [widgetsSchema(version: 2)]);
      await v2.close();
      await expectLater(
          openPocket(path: t.path, stores: [widgetsSchema(version: 1)]),
          throwsA(isA<SchemaTooNewError>()));
    });

    test('duplicate and prefix subsumed index warnings', () {
      final compiled = DdlCompiler(caps).compile(widgetsSchema(indexes: [
        const IndexSpec(['name', 'qty']),
        const IndexSpec(['name']),
        const IndexSpec(['name', 'qty']),
      ]));
      expect(
          compiled.warnings.any((w) => w.contains('Duplicate index columns')),
          isTrue);
      expect(
          compiled.warnings.any((w) => w.contains('prefix-subsumed')), isTrue);
    });
  });

  group('schema declaration validation', () {
    test('duplicate fields are rejected by the compiler and open()', () {
      final dup = CollectionSchema<Object?>(
        name: 't',
        version: 1,
        fields: [Field.text('a'), Field.text('a')],
      );
      expect(() => DdlCompiler(caps).compile(dup),
          throwsA(isA<SchemaRegistrationError>()));
      expect(
          () => DdlCompiler(caps).compile(dup),
          throwsA(isA<SchemaRegistrationError>().having(
              (e) => e.message, 'message', contains('Duplicate field'))));
      expect(
          openPocket(stores: [dup]), throwsA(isA<SchemaRegistrationError>()));
    });

    test('enum field with no values is rejected', () {
      final empty = CollectionSchema<Object?>(
        name: 't',
        version: 1,
        fields: [Field.enumValue('e', [])],
      );
      expect(() => DdlCompiler(caps).compile(empty),
          throwsA(isA<SchemaRegistrationError>()));
      expect(
          () => DdlCompiler(caps).compile(empty),
          throwsA(isA<SchemaRegistrationError>().having(
              (e) => e.message, 'message', contains('must declare values'))));
    });

    test('ref field with empty target is rejected', () {
      final bad = CollectionSchema<Object?>(
        name: 't',
        version: 1,
        fields: [Field.ref('r', to: '')],
      );
      expect(() => DdlCompiler(caps).compile(bad),
          throwsA(isA<SchemaRegistrationError>()));
      expect(
          () => DdlCompiler(caps).compile(bad),
          throwsA(isA<SchemaRegistrationError>().having((e) => e.message,
              'message', contains('must declare its target'))));
    });

    test('duplicate enum values are allowed (documented no-rejection)',
        () async {
      // The compiler does not deduplicate enum values; the generated CHECK
      // constraint contains the duplicates and the store opens fine.
      final dupEnum = CollectionSchema<Object?>(
        name: 't',
        version: 1,
        fields: [
          Field.enumValue('e', ['S', 'S', 'L'])
        ],
      );
      final compiled = DdlCompiler(caps).compile(dupEnum);
      expect(compiled.tableDdl, contains("CHECK (\"e\" IN ('S', 'S', 'L'))"));
      final pocket = await openPocket(stores: [dupEnum]);
      addTearDown(pocket.close);
      await pocket.collection('t').put({'id': generateRecordId(), 'e': 'S'});
      expect(await pocket.collection('t').query().all().count(), 1);
    });

    test('empty and whitespace store names compile and open (documented)',
        () async {
      final emptyName = CollectionSchema<Object?>(
        name: '',
        version: 1,
        fields: [Field.text('a')],
      );
      final wsName = CollectionSchema<Object?>(
        name: 'my store',
        version: 1,
        fields: [Field.text('a')],
      );
      expect(() => DdlCompiler(caps).compile(emptyName), returnsNormally);
      final pocket = await openPocket(stores: [emptyName, wsName]);
      addTearDown(pocket.close);
      expect(pocket.storeNames, containsAll(['', 'my store']));
    });

    test('ref to an unregistered store with enforceFk opens (FK deferred)',
        () async {
      final fkRef = CollectionSchema<Object?>(
        name: 't',
        version: 1,
        fields: [Field.ref('r', to: 'ghost', enforceFk: true)],
      );
      final pocket = await openPocket(stores: [fkRef]);
      addTearDown(pocket.close);
      // FK is only checked on write; DDL creation succeeds.
      expect(await pocket.collection('t').query().all().count(), 0);
    });

    test('index on an undeclared column compiles but fails at SQLite',
        () async {
      final ghostIx = CollectionSchema<Object?>(
        name: 't',
        version: 1,
        fields: [Field.text('a')],
        indexes: const [
          IndexSpec(['ghost'])
        ],
      );
      // Compiler-only: DDL is produced without a typed error...
      final compiled = DdlCompiler(caps).compile(ghostIx);
      expect(compiled.indexDdl.single, contains('"ghost"'));
      // ...but the real open fails at the SQLite level with no such column.
      expect(openPocket(stores: [ghostIx]),
          throwsA(isA<sqlite.SqliteException>()));
    });

    test('empty index degenerates to an id-only index and opens', () async {
      final emptyIx = CollectionSchema<Object?>(
        name: 't',
        version: 1,
        fields: [Field.text('a')],
        indexes: const [IndexSpec([])],
      );
      final compiled = DdlCompiler(caps).compile(emptyIx);
      expect(compiled.indexDdl.single, contains('("id")'));
      final pocket = await openPocket(stores: [emptyIx]);
      addTearDown(pocket.close);
    });

    test('duplicate index declarations warn but fail at SQLite open', () async {
      final dupIx = CollectionSchema<Object?>(
        name: 't',
        version: 1,
        fields: [Field.text('a')],
        indexes: const [
          IndexSpec(['a']),
          IndexSpec(['a'])
        ],
      );
      final compiled = DdlCompiler(caps).compile(dupIx);
      expect(compiled.warnings, hasLength(1));
      expect(compiled.indexDdl, hasLength(2));
      expect(compiled.indexDdl[0], compiled.indexDdl[1],
          reason: 'both declarations generate the same index name');
      // Two CREATE INDEX with the same name -> SQLite error at open.
      expect(
          openPocket(stores: [dupIx]), throwsA(isA<sqlite.SqliteException>()));
    });

    test('store name collision across stores: last registration wins silently',
        () async {
      final a = CollectionSchema<Object?>(
        name: 'same',
        version: 1,
        fields: [Field.text('a')],
      );
      final b = CollectionSchema<Object?>(
        name: 'same',
        version: 1,
        fields: [Field.text('b')],
      );
      final pocket = await openPocket(stores: [a, b]);
      addTearDown(pocket.close);
      // Only one store handle exists...
      expect(pocket.storeNames, ['same']);
      // ...and the table keeps the FIRST registration's columns (the second
      // registration does not rebuild the existing table).
      final cols = await pocket.db.rawQuery('PRAGMA table_info("same")');
      final colNames = cols.map((c) => c['name']).toList();
      expect(colNames, contains('a'));
      expect(colNames, isNot(contains('b')));
    });

    test('reserved system-table names fail at SQLite open', () {
      for (final name in [
        'lp_sync_row',
        'lp_outbox',
        'lp_migrations',
        'lp_stores'
      ]) {
        final schema = CollectionSchema<Object?>(
          name: name,
          version: 1,
          fields: [Field.text('a')],
        );
        expect(openPocket(stores: [schema]),
            throwsA(isA<sqlite.SqliteException>()),
            reason: 'store named $name collides with a system table');
      }
    });

    test('FTS fields with spaces, quotes, or reserved words fail at open', () {
      final withSpace = CollectionSchema<Object?>(
        name: 't',
        version: 1,
        fields: [Field.text('a b')],
        fts: const FtsSpec(['a b']),
      );
      expect(openPocket(stores: [withSpace]),
          throwsA(isA<sqlite.SqliteException>()));

      final withQuote = CollectionSchema<Object?>(
        name: 't',
        version: 1,
        fields: [Field.text('a"b')],
        fts: const FtsSpec(['a"b']),
      );
      expect(openPocket(stores: [withQuote]),
          throwsA(isA<sqlite.SqliteException>()));

      final reserved = CollectionSchema<Object?>(
        name: 't',
        version: 1,
        fields: [Field.text('select')],
        fts: const FtsSpec(['select']),
      );
      expect(openPocket(stores: [reserved]),
          throwsA(isA<sqlite.SqliteException>()));
    });

    test('FTS unicode field names open successfully', () async {
      final schema = CollectionSchema<Object?>(
        name: 't',
        version: 1,
        fields: [Field.text('名前')],
        fts: const FtsSpec(['名前']),
      );
      final pocket = await openPocket(stores: [schema]);
      addTearDown(pocket.close);
      final id = generateRecordId();
      await pocket.collection('t').put({'id': id, '名前': 'hello'});
      final res = await pocket.collection('t').search('hello').all().fetch();
      expect(res.single.id, id);
    });

    test('FTS field that is not declared is rejected', () {
      final missing = CollectionSchema<Object?>(
        name: 't',
        version: 1,
        fields: [Field.text('a')],
        fts: const FtsSpec(['ghost']),
      );
      expect(() => DdlCompiler(caps).compile(missing),
          throwsA(isA<SchemaRegistrationError>()));
      expect(
          () => DdlCompiler(caps).compile(missing),
          throwsA(isA<SchemaRegistrationError>().having(
              (e) => e.message, 'message', contains('not a declared field'))));
    });
  });

  group('DDL constraints and capability variants', () {
    test('enum CHECK present only with STRICT capability', () {
      final schema = CollectionSchema<Object?>(
        name: 't',
        version: 1,
        fields: [
          Field.enumValue('e', ['S', 'L'])
        ],
      );
      final strict = DdlCompiler(caps).compile(schema).tableDdl;
      final noStrict = DdlCompiler(SqliteCapabilities.forVersion('3.35.0'))
          .compile(schema)
          .tableDdl;
      expect(strict, contains('CHECK ("e" IN (\'S\', \'L\'))'));
      expect(noStrict, isNot(contains('CHECK')));
      expect(noStrict, contains('"e" TEXT'));
    });

    test('enum CHECK escapes single quotes in values', () {
      final schema = CollectionSchema<Object?>(
        name: 't',
        version: 1,
        fields: [
          Field.enumValue('e', ["it's", 'ok'])
        ],
      );
      final ddl = DdlCompiler(caps).compile(schema).tableDdl;
      expect(ddl, contains("CHECK (\"e\" IN ('it''s', 'ok'))"));
    });

    test('required columns are NOT NULL', () {
      final schema = CollectionSchema<Object?>(
        name: 't',
        version: 1,
        fields: [
          Field.text('a', required: true),
          Field.int('b'),
          Field.text('c', required: true),
        ],
      );
      final ddl = DdlCompiler(caps).compile(schema).tableDdl;
      expect(ddl, contains('"a" TEXT NOT NULL'));
      expect(ddl, contains('"b" INTEGER'));
      expect(ddl, contains('"c" TEXT NOT NULL'));
    });

    test('foreign keys across multiple stores generate REFERENCES', () {
      final owners = CollectionSchema<Object?>(
        name: 'owners',
        version: 1,
        fields: [Field.text('name')],
      );
      final widgets = CollectionSchema<Object?>(
        name: 'widgets',
        version: 1,
        fields: [Field.ref('owner_id', to: 'owners', enforceFk: true)],
      );
      final ddl = DdlCompiler(caps).compile(widgets).tableDdl;
      expect(ddl, contains('REFERENCES "owners"("id")'));
      // Owners itself has no REFERENCES.
      expect(DdlCompiler(caps).compile(owners).tableDdl,
          isNot(contains('REFERENCES')));
    });

    test('unique-active index scopes to non-null non-archived rows', () {
      final compiled = DdlCompiler(caps).compile(widgetsSchema());
      final unique =
          compiled.indexDdl.firstWhere((d) => d.contains('ux_widgets_phone'));
      expect(unique, contains('CREATE UNIQUE INDEX "ux_widgets_phone"'));
      expect(unique, contains('"phone" IS NOT NULL'));
      expect(unique, contains('archived = 0'));
    });

    test('composite indexes append the id tie-breaker column', () {
      final compiled = DdlCompiler(caps).compile(widgetsSchema(indexes: const [
        IndexSpec(['name', 'qty'])
      ]));
      final ix =
          compiled.indexDdl.firstWhere((d) => d.startsWith('CREATE INDEX'));
      expect(ix, contains('("name", "qty", "id")'));
    });

    test('ref fields get an automatic live index', () {
      final compiled = DdlCompiler(caps).compile(widgetsSchema());
      expect(
          compiled.indexDdl.any((d) => d.contains('ix_widgets_live_owner_id')),
          isTrue);
      expect(
          compiled.indexDdl
              .firstWhere((d) => d.contains('ix_widgets_live_owner_id')),
          contains('("owner_id", "id")'));
    });

    test('IndexScope.notArchived omits the hidden predicate', () {
      final compiled = DdlCompiler(caps).compile(widgetsSchema(indexes: const [
        IndexSpec(['name'], scope: IndexScope.notArchived),
      ]));
      final ix = compiled.indexDdl.firstWhere((d) => d.contains('ix_widgets'));
      expect(ix, contains('WHERE archived = 0'));
      expect(ix, isNot(contains('hidden')));
    });

    test('double quotes in identifiers are escaped', () {
      final schema = CollectionSchema<Object?>(
        name: 'we"ird',
        version: 1,
        fields: [Field.text('co"l')],
        indexes: const [
          IndexSpec(['co"l'])
        ],
      );
      final compiled = DdlCompiler(caps).compile(schema);
      expect(compiled.tableDdl, contains('"we""ird"'));
      expect(compiled.tableDdl, contains('"co""l" TEXT'));
      expect(compiled.indexDdl.single, contains('"co""l"'));
      expect(compiled.tableDdl, isNot(contains('"we"ird"')));
    });

    test('FTS table and trigger names follow the store name', () {
      final compiled = DdlCompiler(caps)
          .compile(widgetsSchema(fts: const FtsSpec(['name'])));
      expect(compiled.ftsDdl.first,
          contains('CREATE VIRTUAL TABLE "widgets_fts"'));
      expect(compiled.ftsDdl[1],
          contains('CREATE TRIGGER "widgets_ai" AFTER INSERT'));
      expect(compiled.ftsDdl[2],
          contains('CREATE TRIGGER "widgets_ad" AFTER DELETE'));
      expect(compiled.ftsDdl[3],
          contains('CREATE TRIGGER "widgets_au" AFTER UPDATE'));
    });

    test('unique index name collisions across stores are kept distinct',
        () async {
      final a = CollectionSchema<Object?>(
        name: 'alpha',
        version: 1,
        fields: [Field.text('phone', uniqueWhenActive: true)],
      );
      final b = CollectionSchema<Object?>(
        name: 'beta',
        version: 1,
        fields: [Field.text('phone', uniqueWhenActive: true)],
      );
      final da = DdlCompiler(caps).compile(a).indexDdl.join('\n');
      final db = DdlCompiler(caps).compile(b).indexDdl.join('\n');
      expect(da, contains('ux_alpha_phone'));
      expect(db, contains('ux_beta_phone'));
      expect(da, isNot(contains('ux_beta_phone')));
      // Both open together without a name clash.
      final p = await openPocket(stores: [a, b]);
      addTearDown(p.close);
      expect(p.storeNames, containsAll(['alpha', 'beta']));
    });
  });
}
