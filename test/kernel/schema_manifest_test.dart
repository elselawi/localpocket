import 'dart:convert';

import 'package:localpocket/src/kernel/capabilities.dart';
import 'package:localpocket/src/kernel/errors.dart';
import 'package:localpocket/src/kernel/query_plan.dart';
import 'package:localpocket/src/kernel/schema.dart';
import 'package:localpocket/src/kernel/sync/merge.dart';
import 'package:localpocket/src/kernel/schema_manifest.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';

SchemaManifest _compile(CollectionSchema<Object?> schema) =>
    SchemaManifest.compile(schema);

CollectionSchema<Object?> _schema({
  required String name,
  int version = 1,
  ConflictPolicy? conflictPolicy,
  List<StoreMigration> migrations = const [],
  Map<int, DocumentMigration> documentMigrations = const {},
  bool validator = false,
}) =>
    CollectionSchema(
      name: name,
      version: version,
      fields: [
        Field.text('name', required: true),
        Field.int('qty'),
        Field.enumValue('size', ['S', 'M']),
        Field.ref('owner_id', to: 'owners', enforceFk: true),
      ],
      indexes: const [
        IndexSpec(['name', 'qty'])
      ],
      conflictPolicy: conflictPolicy ?? const ConflictPolicy(),
      migrations: migrations,
      documentMigrations: documentMigrations,
      validator: validator ? ((_) => const []) : null,
    );

/// The complete schema manifest.
///
/// Every behavior-affecting value is in the manifest; executable features are
/// explicit flags (never silently dropped); duplicate stores, same-version
/// behavior changes, and unrepresentable behavior are rejected before any
/// schema mutation.
void main() {
  group('manifest completeness', () {
    test('captures every declared field kind and constraint', () {
      final manifest = _compile(_schema(name: 'complete'));
      final definition = manifest.definition;
      final fields = definition['fields']! as List;
      final byName = {
        for (final f in fields) (f as Map)['name'] as String: f,
      };
      expect(byName['name']!['required'], true);
      expect(byName['qty']!['kind'], 'int');
      expect(byName['size']!['enumValues'], ['S', 'M']);
      expect(byName['owner_id']!['refTo'], 'owners');
      expect(byName['owner_id']!['enforceFk'], true);
      expect((definition['indexes']! as List), hasLength(1));
    });

    test('captures conflict-policy descriptors', () {
      final manifest = _compile(_schema(
        name: 'policy',
        conflictPolicy: ConflictPolicy(
          editsUnarchive: true,
          missingRemote: MissingRemotePolicy.recreate,
          fieldOverrides: {'qty': SetUnionWithDeletionWinsResolver()},
        ),
      ));
      final policy = manifest.definition['conflictPolicy']! as Map;
      expect(policy['editsUnarchive'], true);
      expect(policy['missingRemote'], 'recreate');
      expect(policy['fieldOverrideNames'], ['qty'],
          reason: 'override KEYS are serializable descriptors');
      expect(manifest.unsupportedFeatures, contains('fieldResolvers'));
    });

    test('round-trips through JSON with a stable fingerprint', () {
      final manifest = _compile(widgetsSchema(name: 'roundtrip', version: 3));
      final restored = SchemaManifest.fromJson(_decode(manifest.encodedJson));
      expect(restored.store, 'roundtrip');
      expect(restored.version, 3);
      expect(restored.fingerprint, manifest.fingerprint);
      expect(restored.queryCompilerVersion, queryCompilerVersion);
    });

    test('malformed manifests and newer formats fail with typed errors', () {
      expect(() => SchemaManifest.fromJson('not-a-map'),
          throwsA(isA<SchemaRegistrationError>()));
      expect(() => SchemaManifest.fromJson({'nope': 1}),
          throwsA(isA<SchemaRegistrationError>()));
      expect(
        () => SchemaManifest.fromJson({
          'formatVersion': schemaManifestFormatVersion + 1,
          'store': 'x',
          'version': 1,
          'definition': <String, Object?>{},
          'unsupportedFeatures': <String>[],
          'queryCompilerVersion': 1,
        }),
        throwsA(isA<SchemaTooNewError>()),
      );
    });
  });

  group('unsupported executable features are explicit flags', () {
    test('each callback kind is named', () {
      expect(
        _compile(_schema(
          name: 'a',
          conflictPolicy:
              ConflictPolicy(collectionResolver: CustomResolver((ctx) => null)),
        )).unsupportedFeatures,
        ['conflictResolver'],
      );
      expect(
        _compile(_schema(
          name: 'b',
          version: 2,
          migrations: [
            StoreMigration(
                toVersion: 2, transform: (row) => {...row, 'qty': 0}),
          ],
        )).unsupportedFeatures,
        contains('migrationTransform'),
      );
      expect(
        _compile(_schema(name: 'c', documentMigrations: {
          2: (row) => row,
        })).unsupportedFeatures,
        contains('documentMigrations'),
      );
      expect(
        _compile(_schema(name: 'd', validator: true)).unsupportedFeatures,
        contains('validatorCallback'),
      );
    });

    test('a clean schema has none', () {
      expect(
          _compile(widgetsSchema(name: 'clean')).unsupportedFeatures, isEmpty);
    });

    test('the manifest fingerprint differs when a callback differs', () {
      final plain =
          _compile(_schema(name: 'e', conflictPolicy: ConflictPolicy()));
      final withResolver = _compile(_schema(
        name: 'e',
        conflictPolicy:
            ConflictPolicy(collectionResolver: CustomResolver((ctx) => null)),
      ));
      expect(plain.fingerprint, isNot(withResolver.fingerprint));
      // And the fingerprint is stable across compilations.
      expect(plain.fingerprint, _compile(_schema(name: 'e')).fingerprint);
    });
  });

  group('open-time enforcement', () {
    test('web runtime rejects unrepresentable behavior BEFORE any DDL',
        () async {
      final db = await tempDbPath();
      addTearDown(db.cleanup);

      await expectLater(
        openPocket(
          path: db.path,
          platform: PlatformProfile.web,
          stores: [
            _schema(
              name: 'webbad',
              conflictPolicy: ConflictPolicy(
                  collectionResolver: CustomResolver((ctx) => null)),
            ),
          ],
        ),
        throwsA(isA<UnsupportedSchemaFeatureError>()),
      );
      // Nothing was created: no lp_stores row for the store.
      final raw = await openPocket(path: db.path);
      addTearDown(raw.close);
      expect(raw.storeNames, isNot(contains('webbad')),
          reason: 'rejection happened before any schema mutation');
    });

    test('web runtime accepts a manifest without unsupported features',
        () async {
      final db = await openPocket(
        platform: PlatformProfile.web,
        stores: [widgetsSchema(name: 'webok')],
      );
      addTearDown(db.close);
      expect(db.requireTable('webok').manifest.store, 'webok');
      expect(db.requireTable('webok').manifest.unsupportedFeatures, isEmpty);
    });

    test('native runtime keeps executing callbacks (flagged in the manifest)',
        () async {
      final db = await openPocket(
        stores: [
          _schema(
            name: 'nativecb',
            conflictPolicy: ConflictPolicy(
                collectionResolver: CustomResolver((ctx) => null)),
          ),
        ],
      );
      addTearDown(db.close);
      expect(db.requireTable('nativecb').manifest.unsupportedFeatures,
          contains('conflictResolver'),
          reason: 'flagged in the manifest, still executable on native');
    });

    test('duplicate store names in one open are rejected', () async {
      await expectLater(
        openPocket(stores: [
          widgetsSchema(name: 'dup'),
          widgetsSchema(name: 'dup'),
        ]),
        throwsA(isA<SchemaRegistrationError>()),
      );
    });
  });
}

Object? _decode(String json) => jsonDecode(json);
