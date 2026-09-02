import 'package:localpocket/src/kernel/canonical_json.dart';
import 'package:localpocket/src/kernel/errors.dart';
import 'package:localpocket/src/kernel/hashing.dart';
import 'package:localpocket/src/kernel/ids.dart';
import 'package:localpocket/src/kernel/schema.dart';
import 'package:localpocket/src/kernel/sync/merge.dart';
import 'package:localpocket/src/kernel/schema_manifest.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';

String _fingerprint(CollectionSchema<Object?> schema) =>
    sha256Hex(canonicalize(schema.toJson()));

CollectionSchema<Object?> _schema(
        {required String name,
        int version = 1,
        ConflictPolicy? conflictPolicy,
        List<StoreMigration> migrations = const []}) =>
    CollectionSchema(
      name: name,
      version: version,
      fields: [
        Field.text('name', required: true),
        Field.int('qty'),
      ],
      conflictPolicy: conflictPolicy ?? const ConflictPolicy(),
      migrations: migrations,
    );

/// Schema transport characterization.
///
/// These tests DOCUMENT the lossy/lenient schema-transport behavior the
/// destination architecture removes:
///
/// - Executable callbacks (conflict resolvers, migration transforms) are
///   absent from `CollectionSchema.toJson()`, so two schemas with DIFFERENT
///   behavior share ONE legacy fingerprint; the complete
///   `SchemaManifest` and rejects unsupported callbacks before open.
/// - A same-version behavior-affecting definition change would reopen with
///   stale physical columns; it is rejected without a version bump.
/// - Duplicate store names previously resolved to "last handle wins";
///   they are now rejected before opening.
void main() {
  group('schema transport drops executable callbacks', () {
    test('a custom conflict resolver is invisible to the fingerprint', () {
      final plain = _schema(name: 'resolved');
      final withResolver = _schema(
        name: 'resolved',
        conflictPolicy:
            ConflictPolicy(collectionResolver: CustomResolver((ctx) => null)),
      );
      expect(withResolver.conflictPolicy.collectionResolver, isNotNull);
      expect(
        _fingerprint(plain),
        _fingerprint(withResolver),
        reason: 'resolver behavior is NOT transported today',
      );
    });

    test('a migration transform is invisible to the fingerprint', () {
      // Two IDENTICAL migration steps — the only difference is the transform
      // callback — must fingerprint the same for the test to document the
      // transport loss (the step itself is transported; the callback is not).
      final withTransform = _schema(name: 'm', version: 2, migrations: [
        StoreMigration(
          toVersion: 2,
          transform: (row) => {...row, 'qty': row['qty'] ?? 0},
        ),
      ]);
      final withoutTransform = _schema(name: 'm', version: 2, migrations: [
        const StoreMigration(toVersion: 2),
      ]);
      expect(withTransform.migrations.single.transform, isNotNull);
      expect(withoutTransform.migrations.single.transform, isNull);
      expect(
        _fingerprint(withoutTransform),
        _fingerprint(withTransform),
        reason: 'transform behavior is NOT transported today',
      );
    });

    test('conflictPolicy is absent from schema JSON entirely', () {
      final json = _schema(
              name: 'policy',
              conflictPolicy: ConflictPolicy(editsUnarchive: true))
          .toJson();
      expect(json.containsKey('conflictPolicy'), isFalse,
          reason: 'policy is not part of the transport today');
    });

    test('the MANIFEST fingerprint is honest about callbacks', () {
      final plain = SchemaManifest.compile(_schema(name: 'resolved'));
      final withResolver = SchemaManifest.compile(_schema(
        name: 'resolved',
        conflictPolicy:
            ConflictPolicy(collectionResolver: CustomResolver((ctx) => null)),
      ));
      // The legacy JSON fingerprint above is blind; the manifest is not.
      expect(withResolver.unsupportedFeatures, contains('conflictResolver'));
      expect(plain.unsupportedFeatures, isEmpty);
      expect(plain.fingerprint, isNot(withResolver.fingerprint),
          reason: '§4.1 is closed at the manifest level');
    });
  });

  group('same-version behavior change', () {
    test('is REJECTED at reopen', () async {
      final db = await tempDbPath();
      addTearDown(db.cleanup);

      final p1 = await openPocket(
          path: db.path, stores: [widgetsSchema(name: 'stale', version: 1)]);
      final id = generateRecordId();
      await p1.collection('stale').put(record(name: 'row', qty: 3, id: id));
      await p1.close();

      // SAME version, but the definition gained a field: the persisted
      // manifest fingerprint no longer matches → typed rejection instead of
      // the old silent unbacked-column drift.
      final after = widgetsSchema(
        name: 'stale',
        version: 1,
        extraFields: [Field.text('brand_new')],
      );
      await expectLater(
        openPocket(path: db.path, stores: [after], destructiveBackup: true),
        throwsA(isA<SchemaRegistrationError>()),
      );
    });

    test('an identical reopen is accepted (fingerprint stability)', () async {
      final db = await tempDbPath();
      addTearDown(db.cleanup);

      final schema = widgetsSchema(name: 'stable', version: 1);
      final p1 = await openPocket(path: db.path, stores: [schema]);
      final id = generateRecordId();
      await p1.collection('stable').put(record(name: 'row', qty: 3, id: id));
      await p1.close();

      final p2 = await openPocket(path: db.path, stores: [schema]);
      addTearDown(p2.close);
      expect((await p2.collection('stable').get(id))?['name'], 'row');
    });

    test('a version BUMP with an additive migration is accepted', () async {
      final db = await tempDbPath();
      addTearDown(db.cleanup);

      final p1 = await openPocket(
          path: db.path, stores: [widgetsSchema(name: 'bump', version: 1)]);
      final id = generateRecordId();
      await p1.collection('bump').put(record(name: 'row', qty: 3, id: id));
      await p1.close();

      final p2 = await openPocket(
        path: db.path,
        stores: [
          widgetsSchema(
            name: 'bump',
            version: 2,
            extraFields: [Field.text('brand_new')],
            migrations: [
              StoreMigration(
                  toVersion: 2, addedFields: [Field.text('brand_new')]),
            ],
          ),
        ],
      );
      addTearDown(p2.close);
      expect((await p2.collection('bump').get(id))?['name'], 'row');
    });
  });

  group('store identity', () {
    test('duplicate store names in one open are REJECTED', () async {
      await expectLater(
        openPocket(
          stores: [
            widgetsSchema(name: 'dup', version: 1),
            widgetsSchema(
                name: 'dup', version: 1, extraFields: [Field.text('other')]),
          ],
        ),
        throwsA(isA<SchemaRegistrationError>()),
      );
    });
  });
}
