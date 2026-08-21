import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';

/// Schema model serialization round-trip, immutability, and cache tests.
void main() {
  group('Field toJson/fromJson', () {
    test('round-trips every field kind', () {
      final fields = <Field>[
        Field.text('title', required: true, uniqueWhenActive: true),
        Field.text('plain'),
        Field.text('secret', encrypted: true),
        Field.int('count', required: true),
        Field.int('encrypted_count', encrypted: true),
        Field.real('price'),
        Field.real('encrypted_price', encrypted: true),
        Field.bool('active', required: true),
        Field.date('made_on'),
        Field.enumValue('size', ['S', 'M', 'L'], required: true),
        Field.json('meta'),
        Field.json('secret_json', encrypted: true),
        Field.jsonList('tags'),
        Field.ref('owner_id', to: 'owners'),
        Field.ref('parent_id', to: 'folders', enforceFk: true),
      ];
      for (final f in fields) {
        final roundTripped = Field.fromJson(f.toJson());
        expect(roundTripped.name, f.name, reason: '${f.kind} name');
        expect(roundTripped.kind, f.kind);
        expect(roundTripped.required, f.required);
        expect(roundTripped.encrypted, f.encrypted);
        expect(roundTripped.uniqueWhenActive, f.uniqueWhenActive);
        expect(roundTripped.enumValues, f.enumValues);
        expect(roundTripped.refTo, f.refTo);
        expect(roundTripped.enforceFk, f.enforceFk);
      }
    });

    test('toJson omits absent optional keys', () {
      final text = Field.text('name');
      expect(text.toJson().containsKey('enumValues'), isFalse);
      expect(text.toJson().containsKey('refTo'), isFalse);

      final en = Field.enumValue('size', ['S', 'L']);
      expect(en.toJson()['enumValues'], ['S', 'L']);
      expect(en.toJson().containsKey('refTo'), isFalse);

      final ref = Field.ref('owner', to: 'owners');
      expect(ref.toJson()['refTo'], 'owners');
      expect(ref.toJson()['enforceFk'], false);
      expect(ref.toJson().containsKey('enumValues'), isFalse);
    });

    test('sqlType follows logical kind', () {
      expect(Field.text('a').sqlType, 'TEXT');
      expect(Field.enumValue('a', ['x']).sqlType, 'TEXT');
      expect(Field.json('a').sqlType, 'TEXT');
      expect(Field.jsonList('a').sqlType, 'TEXT');
      expect(Field.ref('a', to: 'b').sqlType, 'TEXT');
      expect(Field.int('a').sqlType, 'INTEGER');
      expect(Field.bool('a').sqlType, 'INTEGER');
      expect(Field.date('a').sqlType, 'INTEGER');
      expect(Field.real('a').sqlType, 'REAL');
    });

    test('encrypted fields always store as TEXT regardless of logical kind',
        () {
      expect(Field.int('a', encrypted: true).sqlType, 'TEXT');
      expect(Field.real('a', encrypted: true).sqlType, 'TEXT');
      expect(Field.text('a', encrypted: true).sqlType, 'TEXT');
      expect(Field.json('a', encrypted: true).sqlType, 'TEXT');
      expect(Field.jsonList('a', encrypted: true).sqlType, 'TEXT');
    });

    test('enumValues are defensively copied by the factory', () {
      final values = <String>['S', 'M'];
      final f = Field.enumValue('size', values);
      values.add('L');
      expect(f.enumValues, ['S', 'M'], reason: 'factory copies the list');
    });
  });

  group('IndexSpec toJson/fromJson', () {
    test('round-trips columns, unique, and scope', () {
      for (final ix in [
        const IndexSpec(['a', 'b']),
        const IndexSpec(['a'], unique: true),
        const IndexSpec(['b'], scope: IndexScope.notArchived),
        const IndexSpec(['a', 'b'],
            unique: true, scope: IndexScope.notArchived),
      ]) {
        final rt = IndexSpec.fromJson(ix.toJson());
        expect(rt.columns, ix.columns);
        expect(rt.unique, ix.unique);
        expect(rt.scope, ix.scope);
      }
    });

    test('scope serializes by name', () {
      expect(const IndexSpec(['a']).toJson()['scope'], 'live');
      expect(
          const IndexSpec(['a'], scope: IndexScope.notArchived)
              .toJson()['scope'],
          'notArchived');
    });
  });

  group('CollectionSchema toJson/fromJson', () {
    test('round-trips name, version, fields, indexes, keepUnsyncedArchives',
        () {
      final schema = widgetsSchema(
        keepUnsyncedArchives: true,
        indexes: const [
          IndexSpec(['name', 'qty']),
          IndexSpec(['phone'], unique: true),
          IndexSpec(['owner_id'], scope: IndexScope.notArchived),
        ],
      );
      final rt = CollectionSchema<Object?>.fromJson(schema.toJson());
      expect(rt.name, 'widgets');
      expect(rt.version, 1);
      expect(rt.fields, hasLength(schema.fields.length));
      for (var i = 0; i < schema.fields.length; i++) {
        final a = Field.fromJson(schema.fields[i].toJson());
        final b = rt.fields[i];
        expect(b.name, a.name);
        expect(b.kind, a.kind);
        expect(b.required, a.required);
        expect(b.uniqueWhenActive, a.uniqueWhenActive);
        expect(b.encrypted, a.encrypted);
      }
      expect(rt.indexes, hasLength(3));
      expect(rt.indexes[1].unique, isTrue);
      expect(rt.indexes[2].scope, IndexScope.notArchived);
      expect(rt.keepUnsyncedArchives, isTrue);
    });

    test('toJson includes exactly the serializable keys (documented gap)', () {
      final schema = CollectionSchema<Object?>(
        name: 'notes',
        version: 3,
        fields: [Field.text('title')],
        indexes: const [
          IndexSpec(['title'])
        ],
        conflictPolicy: const ConflictPolicy(editsUnarchive: true),
        prefetchFiles: true,
        keepUnsyncedArchives: true,
        fts: const FtsSpec(['title']),
        migrations: const [StoreMigration(toVersion: 2)],
        documentMigrations: const {
          2: _renameTitle,
        },
        validator: (doc) => const [],
      );
      final json = schema.toJson();
      expect(json['name'], 'notes');
      expect(json['version'], 3);
      expect(json.containsKey('fields'), isTrue);
      expect(json.containsKey('indexes'), isTrue);
      expect(json['keepUnsyncedArchives'], true);
      // `fts` is plain data (a list of field names) and IS serialized so FTS
      // stores can cross the web worker boundary (§ Task 3).
      expect(json['fts'], {
        'fields': ['title']
      });
      // Migration metadata is plain data and crosses the worker boundary;
      // function transforms and validators remain intentionally omitted.
      expect(json['migrations'], [
        {
          'toVersion': 2,
          'destructive': false,
          'addedFields': <Object?>[],
        }
      ]);
      expect(json['prefetchFiles'], true,
          reason: 'prefetchFiles is a plain bool and IS serialized so the '
              'file-lane prefetch policy crosses the web worker boundary');
      expect(json.containsKey('conflictPolicy'), isFalse);
      expect(json.containsKey('documentMigrations'), isFalse);
      expect(json.containsKey('validator'), isFalse);
    });

    test('FtsSpec and migration metadata round-trip through schema JSON', () {
      final schema = CollectionSchema<Object?>(
        name: 'articles',
        version: 2,
        fields: [Field.text('title'), Field.text('body')],
        fts: const FtsSpec(['title', 'body']),
      );
      final rt = CollectionSchema<Object?>.fromJson(schema.toJson());
      expect(rt.fts, isNotNull);
      expect(rt.fts!.fields, ['title', 'body']);
      expect(rt.migrations, isEmpty);

      final migrated = CollectionSchema<Object?>(
        name: 'migrated',
        version: 2,
        fields: [Field.text('title'), Field.text('body')],
        migrations: [
          StoreMigration(
            toVersion: 2,
            destructive: true,
            addedFields: [Field.int('views')],
          ),
        ],
      );
      final migratedRoundTrip =
          CollectionSchema<Object?>.fromJson(migrated.toJson());
      expect(migratedRoundTrip.migrations, hasLength(1));
      expect(migratedRoundTrip.migrations.single.toVersion, 2);
      expect(migratedRoundTrip.migrations.single.destructive, isTrue);
      expect(
          migratedRoundTrip.migrations.single.addedFields.single.name, 'views');
    });

    test('fromJson default properties are absent', () {
      final rt = CollectionSchema<Object?>.fromJson(widgetsSchema().toJson());
      expect(rt.fts, isNull);
      expect(rt.prefetchFiles, isFalse);
      expect(rt.conflictPolicy.collectionResolver, isNull);
      expect(rt.migrations, isEmpty);
      expect(rt.documentMigrations, isEmpty);
      expect(rt.validator, isNull);
    });
  });

  group('CollectionSchema caching and list aliasing', () {
    test('declaredFieldNames and fieldByName are stable for const schemas', () {
      final schema = widgetsSchema();
      final names1 = schema.declaredFieldNames;
      final names2 = schema.declaredFieldNames;
      expect(identical(names1, names2), isTrue,
          reason: 'result is cached per schema instance');
      expect(
          names1,
          containsAll([
            'name',
            'qty',
            'price',
            'active',
            'made_on',
            'size',
            'meta',
            'tags',
            'owner_id',
            'phone'
          ]));
      expect(schema.fieldByName('name')!.kind, FieldKind.text);
      expect(schema.fieldByName('ghost'), isNull);
      expect(identical(schema.fieldByName('name'), schema.fieldByName('name')),
          isTrue,
          reason: 'field lookup is cached too');
    });

    test(
        'mutating the caller-provided fields list after first access leaves '
        'the cache stale (documented)', () {
      final fields = <Field>[Field.text('a')];
      final schema =
          CollectionSchema<Object?>(name: 't', version: 1, fields: fields);
      // Warm the cache.
      expect(schema.declaredFieldNames, {'a'});
      expect(schema.fieldByName('a'), isNotNull);
      // Caller mutates the list it passed in.
      fields.add(Field.text('b'));
      // The schema shares the same list reference...
      expect(schema.fields, hasLength(2));
      // ...but the already-populated cache is not refreshed.
      expect(schema.declaredFieldNames, {'a'},
          reason: 'cached set is not recomputed after mutation');
      expect(schema.fieldByName('b'), isNull,
          reason: 'cached lookup map is stale after mutation');
    });

    test('mutating the fields list before first access is reflected', () {
      final fields = <Field>[Field.text('a')];
      final schema =
          CollectionSchema<Object?>(name: 't', version: 1, fields: fields);
      fields.add(Field.text('b'));
      expect(schema.declaredFieldNames, {'a', 'b'});
      expect(schema.fieldByName('b'), isNotNull);
    });

    test('mutating caller-provided index list after construction is reflected',
        () {
      final indexes = <IndexSpec>[
        const IndexSpec(['a'])
      ];
      final schema = CollectionSchema<Object?>(
          name: 't', version: 1, fields: [Field.text('a')], indexes: indexes);
      indexes.add(const IndexSpec(['b'], unique: true));
      expect(schema.indexes, hasLength(2));
    });

    test('each schema instance has its own cache', () {
      final s1 = widgetsSchema(name: 's1');
      final s2 = widgetsSchema(name: 's2');
      expect(identical(s1.declaredFieldNames, s2.declaredFieldNames), isFalse);
      s2.declaredFieldNames.add('bogus'); // mutating one cache
      expect(s1.declaredFieldNames.contains('bogus'), isFalse);
    });
  });

  group('ConflictPolicy', () {
    test('constructor and defaults factory preserve properties', () {
      const policy = ConflictPolicy(
        collectionResolver: 'resolver',
        fieldOverrides: {'a': 'ra', 'b': 'rb'},
        editsUnarchive: true,
      );
      expect(policy.collectionResolver, 'resolver');
      expect(policy.fieldOverrides, {'a': 'ra', 'b': 'rb'});
      expect(policy.editsUnarchive, isTrue);

      final defaults = ConflictPolicy.defaults(
        collectionResolver: 'cr',
        fieldOverrides: {'x': 'rx'},
        editsUnarchive: true,
      );
      expect(defaults.collectionResolver, 'cr');
      expect(defaults.fieldOverrides, {'x': 'rx'});
      expect(defaults.editsUnarchive, isTrue);

      const empty = ConflictPolicy();
      expect(empty.collectionResolver, isNull);
      expect(empty.fieldOverrides, isEmpty);
      expect(empty.editsUnarchive, isFalse);
    });
  });

  group('FtsSpec', () {
    test('carries the indexed field list', () {
      const fts = FtsSpec(['title', 'body']);
      expect(fts.fields, ['title', 'body']);
      const empty = FtsSpec([]);
      expect(empty.fields, isEmpty);
    });
  });

  group('document migrations', () {
    test('applyDocumentMigrations applies each step in order', () {
      final schema = CollectionSchema<Object?>(
        name: 'docs',
        version: 1,
        fields: [Field.text('title')],
        documentMigrations: const {
          1: _addVersion,
          2: _renameTitle,
          3: _incrementVersion,
        },
      );
      final result =
          applyDocumentMigrations(schema, {'title': 'hello'}, from: 0, to: 3);
      expect(result, {
        'title': 'renamed:hello',
        'version': 2, // incremented once by step 3 (step 2 renames)
      });
    });

    test('partial range applies only the steps in (from, to]', () {
      final schema = CollectionSchema<Object?>(
        name: 'docs',
        version: 1,
        fields: [Field.text('title')],
        documentMigrations: const {
          1: _addVersion,
          2: _renameTitle,
        },
      );
      expect(applyDocumentMigrations(schema, {'title': 'x'}, from: 0, to: 1),
          {'title': 'x', 'version': 1});
      expect(applyDocumentMigrations(schema, {'title': 'x'}, from: 1, to: 2),
          {'title': 'renamed:x'});
      // from == to -> no-op.
      expect(applyDocumentMigrations(schema, {'title': 'x'}, from: 2, to: 2),
          {'title': 'x'});
      // from > to -> no-op.
      expect(applyDocumentMigrations(schema, {'title': 'x'}, from: 3, to: 1),
          {'title': 'x'});
    });

    test('migrations are pure and do not mutate the input doc', () {
      final schema = CollectionSchema<Object?>(
        name: 'docs',
        version: 1,
        fields: [Field.text('title')],
        documentMigrations: const {1: _addVersion},
      );
      final doc = {'title': 'x'};
      final result = applyDocumentMigrations(schema, doc, from: 0, to: 1);
      expect(result, isNot(same(doc)));
      expect(doc.containsKey('version'), isFalse);
      expect(result['version'], 1);
    });

    test('with no applicable steps the input map reference is returned', () {
      final schema = CollectionSchema<Object?>(
        name: 'docs',
        version: 1,
        fields: [Field.text('title')],
        documentMigrations: const {1: _addVersion},
      );
      final doc = {'title': 'x'};
      final result = applyDocumentMigrations(schema, doc, from: 5, to: 9);
      expect(identical(result, doc), isTrue,
          reason: 'no step ran; the same map is returned');
    });
  });

  group('validators', () {
    test('validator callback is invoked and can return errors', () {
      final schema = CollectionSchema<Object?>(
        name: 'validated',
        version: 1,
        fields: [Field.text('name', required: true)],
        validator: (doc) =>
            (doc['name'] == 'blocked') ? const ['name is blocked'] : const [],
      );
      expect(schema.validator!({'name': 'ok'}), isEmpty);
      expect(schema.validator!({'name': 'blocked'}), ['name is blocked']);
    });
  });

  group('malformed schema JSON', () {
    // Schema `fromJson` guards against corruption: any malformed value (wrong
    // type, unknown enum string, missing required key) surfaces as a typed
    // `StorageError` naming the failure — never a raw TypeError/ArgumentError.
    // Definitions are persisted in `lp_stores.definition_json` and cross the
    // web worker boundary, so an opaque cast error would be undiagnosable.
    Matcher storageError() => isA<StorageError>()
        .having((e) => e.message, 'message', contains('Malformed schema JSON'));

    test('Field.fromJson with a missing kind throws StorageError', () {
      expect(() => Field.fromJson({'name': 'x'}), throwsA(storageError()));
    });

    test('Field.fromJson with an unknown kind string throws StorageError', () {
      expect(() => Field.fromJson({'name': 'x', 'kind': 'bogus'}),
          throwsA(storageError()));
    });

    test('Field.fromJson with a ref but no refTo throws StorageError', () {
      expect(() => Field.fromJson({'name': 'owner', 'kind': 'ref'}),
          throwsA(storageError()));
    });

    test('Field.fromJson with an enum but no enumValues throws StorageError',
        () {
      expect(() => Field.fromJson({'name': 'size', 'kind': 'enumValue'}),
          throwsA(storageError()));
    });

    test('Field.fromJson with non-list enumValues throws StorageError', () {
      expect(
          () => Field.fromJson(
              {'name': 'size', 'kind': 'enumValue', 'enumValues': 'S'}),
          throwsA(storageError()));
    });

    test(
        'Field.fromJson with a non-string member in enumValues throws '
        'StorageError', () {
      expect(
          () => Field.fromJson({
                'name': 'size',
                'kind': 'enumValue',
                'enumValues': [1, 2]
              }),
          throwsA(storageError()));
    });

    test('CollectionSchema.fromJson without a name throws StorageError', () {
      expect(
          () => CollectionSchema<Object?>.fromJson(
              {'version': 1, 'fields': const []}),
          throwsA(storageError()));
    });

    test('CollectionSchema.fromJson without a version throws StorageError', () {
      expect(
          () => CollectionSchema<Object?>.fromJson(
              {'name': 'x', 'fields': const []}),
          throwsA(storageError()));
    });

    test('CollectionSchema.fromJson without fields throws StorageError', () {
      expect(
          () => CollectionSchema<Object?>.fromJson({'name': 'x', 'version': 1}),
          throwsA(storageError()));
    });

    test('CollectionSchema.fromJson without indexes throws StorageError', () {
      expect(
          () => CollectionSchema<Object?>.fromJson(
              {'name': 'x', 'version': 1, 'fields': const []}),
          throwsA(storageError()));
    });

    test(
        'CollectionSchema.fromJson with a non-map field entry throws '
        'StorageError', () {
      expect(
          () => CollectionSchema<Object?>.fromJson({
                'name': 'x',
                'version': 1,
                'fields': const ['nope']
              }),
          throwsA(storageError()));
    });

    test(
        'CollectionSchema.fromJson with a non-map index entry throws '
        'StorageError', () {
      expect(
          () => CollectionSchema<Object?>.fromJson({
                'name': 'x',
                'version': 1,
                'fields': const [],
                'indexes': const ['nope'],
              }),
          throwsA(storageError()));
    });

    test(
        'CollectionSchema.fromJson with a malformed migration entry throws '
        'StorageError', () {
      expect(
          () => CollectionSchema<Object?>.fromJson({
                'name': 'x',
                'version': 1,
                'fields': const [],
                'indexes': const [],
                'migrations': const ['nope'],
              }),
          throwsA(storageError()));
    });

    test('IndexSpec.fromJson with an unknown scope throws StorageError', () {
      expect(
          () => IndexSpec.fromJson({
                'columns': const ['a'],
                'scope': 'bogus'
              }),
          throwsA(storageError()));
    });

    test('FtsSpec.fromJson without fields throws StorageError', () {
      expect(() => FtsSpec.fromJson(const {}), throwsA(storageError()));
    });

    test(
        'StoreMigration.fromJson with a non-int toVersion throws '
        'StorageError', () {
      expect(
          () => StoreMigration.fromJson(
              {'toVersion': 'two', 'addedFields': const []}),
          throwsA(storageError()));
    });

    test('a nested corruption surfaces a single unwrapped StorageError', () {
      // A corrupt field inside a schema must not double-wrap the message.
      try {
        CollectionSchema<Object?>.fromJson({
          'name': 'x',
          'version': 1,
          'fields': [
            {'name': 'broken', 'kind': 'bogus'}
          ],
          'indexes': const [],
        });
        fail('expected StorageError');
      } on StorageError catch (e) {
        expect(e.message, contains('Malformed schema JSON'));
        expect(e.message, isNot(contains('Malformed schema JSON: Malformed')),
            reason: 'a nested failure must not be wrapped twice');
      }
    });

    test(
        'CollectionSchema.fromJson round-trips the schema produced by '
        'toJson', () {
      final schema = widgetsSchema(
        fts: const FtsSpec(['name', 'body']),
      );
      final rt = CollectionSchema<Object?>.fromJson(schema.toJson());
      expect(rt.name, schema.name);
      expect(rt.version, schema.version);
      expect(rt.fields.map((f) => f.name), schema.fields.map((f) => f.name));
      expect(rt.fts!.fields, const ['name', 'body']);
    });
  });
}

Map<String, Object?> _addVersion(Map<String, Object?> doc) => {
      ...doc,
      'version': 1,
    };

Map<String, Object?> _renameTitle(Map<String, Object?> doc) => {
      ...doc,
      'title': 'renamed:${doc['title']}',
    };

Map<String, Object?> _incrementVersion(Map<String, Object?> doc) => {
      ...doc,
      'version': (doc['version'] as int) + 1,
    };
