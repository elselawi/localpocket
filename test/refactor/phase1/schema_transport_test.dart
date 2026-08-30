import 'package:localpocket/localpocket.dart';
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

/// Phase 1 characterization — refactor plan §4.1, §4.16, §4.17.
///
/// These tests DOCUMENT the lossy/lenient schema-transport behavior the
/// destination architecture removes:
///
/// - §4.1: executable callbacks (conflict resolvers, migration transforms) are
///   absent from `CollectionSchema.toJson()`, so two schemas with DIFFERENT
///   behavior share ONE fingerprint. Phase 3 replaces this with the complete
///   `SchemaManifest` and rejects unsupported callbacks before open.
/// - §4.16: a same-version behavior-affecting definition change reopens with
///   stale physical columns. Phase 3 rejects it without a version bump.
/// - §4.17: duplicate store names currently resolve to "last handle wins".
///   Phase 3 rejects duplicates before opening.
void main() {
  group('§4.1 schema transport drops executable callbacks', () {
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
        reason: 'documents §4.1: resolver behavior is NOT transported today',
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
        reason: 'documents §4.1: transform behavior is NOT transported today',
      );
    });

    test('conflictPolicy is absent from schema JSON entirely', () {
      final json = _schema(
              name: 'policy',
              conflictPolicy: ConflictPolicy(editsUnarchive: true))
          .toJson();
      expect(json.containsKey('conflictPolicy'), isFalse,
          reason: 'policy is not part of the transport today (§4.1)');
    });
  });

  group('§4.16 same-version behavior change reopens with stale columns', () {
    test('reopen with a new field at the SAME version leaves it unbacked',
        () async {
      final db = await tempDbPath();
      addTearDown(db.cleanup);

      final p1 = await openPocket(
          path: db.path, stores: [widgetsSchema(name: 'stale', version: 1)]);
      final id = generateRecordId();
      await p1.collection('stale').put(record(name: 'row', qty: 3, id: id));
      await p1.close();

      // SAME version, but the definition gained a field.
      final after = widgetsSchema(
        name: 'stale',
        version: 1,
        extraFields: [Field.text('brand_new')],
      );
      final p2 = await openPocket(
          path: db.path, stores: [after], destructiveBackup: true);
      addTearDown(p2.close);

      // Current behavior: reopen succeeds and the row round-trips.
      final row = await p2.collection('stale').get(id);
      expect(row?['name'], 'row');

      // The physical table has NO column for the new field — definition and
      // physical schema diverge silently on a same-version change.
      final physical = await _physicalColumns(p2, 'stale');
      expect(physical, contains('name'));
      expect(physical, isNot(contains('brand_new')));
      expect(after.fieldByName('brand_new'), isNotNull,
          reason: 'the definition claims the field exists');
    });
  });

  group('§4.17 store identity', () {
    test('duplicate store names: FIRST table wins, LAST definition wins — '
        'and the mismatch breaks writes', () async {
      final p = await openPocket(
        stores: [
          widgetsSchema(name: 'dup', version: 1),
          widgetsSchema(
              name: 'dup',
              version: 1,
              extraFields: [Field.text('other')]),
        ],
      );
      addTearDown(p.close);

      // The FIRST registration created the physical table...
      final table = p.requireTable('dup');
      expect(table.schema.version, 1);

      // ...but the LAST definition owns the in-memory handle, and its INSERT
      // enumerates every declared field — including `other`, which has no
      // physical column. EVERY write through the last handle fails.
      final id = generateRecordId();
      await expectLater(
        p.collection('dup').put(record(name: 'x', qty: 1, id: id)),
        throwsA(isA<StorageError>()),
        reason: '§4.17: the duplicate registration leaves the store unusable '
            'for writes through the last definition',
      );
    });
  });
}

Future<List<String>> _physicalColumns(LocalPocket pocket, String store) async {
  final res = await pocket.db.rawQuery('PRAGMA table_info($store)');
  return [for (final row in res) row['name']! as String];
}
