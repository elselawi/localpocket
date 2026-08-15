import 'package:localpocket/localpocket.dart';
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
}
