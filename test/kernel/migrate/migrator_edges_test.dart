import 'package:localpocket/src/kernel/errors.dart';
import 'package:localpocket/src/kernel/local_pocket.dart' as kernel;
import 'package:localpocket/src/kernel/schema.dart'
    show CollectionSchema, Field, StoreMigration;
import 'package:test/test.dart';

import '../../support/helpers.dart';

/// Migrator edges beyond the resume/crash matrix: the migration-gap guard,
/// and the backfill value-validation rules (unknown field, required-null,
/// wrong-kind messages, empty transform advancing the cursor).
///
/// Migrations only RUN against an existing database whose stored schema
/// version is below the definition's — so every scenario here seeds a v1
/// file database first and reopens it at the target version.
CollectionSchema<Object?> schema({
  required String name,
  required int version,
  List<Field> extraFields = const [],
  List<StoreMigration> migrations = const [],
}) =>
    CollectionSchema<Object?>(
      name: name,
      version: version,
      fields: [
        Field.text('title', required: true),
        ...extraFields,
      ],
      migrations: migrations,
    );

Future<void> seedV1(String path, String name) async {
  final db = await kernel.KernelDatabase.open(
    path: path,
    stores: [schema(name: name, version: 1)],
  );
  await db
      .collection(name)
      .put({'id': 'mg0000000000001', 'title': 'seeded row'});
  await db.close();
}

void main() {
  group('migration plan validation', () {
    test('a gap in the migration plan is a registration error', () async {
      final dbPath = await tempDbPath();
      await seedV1(dbPath.path, 'gapdb');
      addTearDown(dbPath.cleanup);

      await expectLater(
        kernel.KernelDatabase.open(
          path: dbPath.path,
          stores: [
            schema(name: 'gapdb', version: 3, migrations: [
              const StoreMigration(toVersion: 2),
              const StoreMigration(toVersion: 4),
            ]),
          ],
        ),
        throwsA(isA<SchemaRegistrationError>().having(
            (e) => e.message, 'message', contains('Missing migration steps'))),
      );
    });
  });

  group('backfill value validation', () {
    test('a transform producing an unknown field fails the migration',
        () async {
      final dbPath = await tempDbPath();
      await seedV1(dbPath.path, 'unknownf');
      addTearDown(dbPath.cleanup);

      await expectLater(
        kernel.KernelDatabase.open(
          path: dbPath.path,
          stores: [
            schema(
              name: 'unknownf',
              version: 2,
              extraFields: [Field.int('extra_qty')],
              migrations: [
                StoreMigration(
                  toVersion: 2,
                  addedFields: [Field.int('extra_qty')],
                  transform: (oldRow) => {'bogus_field': 1},
                ),
              ],
            ),
          ],
        ),
        throwsA(isA<SchemaRegistrationError>()
            .having((e) => e.message, 'message', contains('bogus_field'))),
      );
    });

    test('a transform producing null for a required field fails', () async {
      final dbPath = await tempDbPath();
      await seedV1(dbPath.path, 'requirednull');
      addTearDown(dbPath.cleanup);

      await expectLater(
        kernel.KernelDatabase.open(
          path: dbPath.path,
          stores: [
            schema(name: 'requirednull', version: 2, migrations: [
              StoreMigration(
                toVersion: 2,
                addedFields: [Field.int('extra_qty')],
                transform: (oldRow) => {'title': null},
              ),
            ]),
          ],
        ),
        throwsA(isA<ValidationException>()
            .having((e) => e.message, 'message', contains('required'))),
      );
    });

    test('a wrong-kind transform names the kind in the error', () async {
      final dbPath = await tempDbPath();
      await seedV1(dbPath.path, 'wrongkind');
      addTearDown(dbPath.cleanup);

      await expectLater(
        kernel.KernelDatabase.open(
          path: dbPath.path,
          stores: [
            schema(
              name: 'wrongkind',
              version: 2,
              extraFields: [Field.int('extra_qty')],
              migrations: [
                StoreMigration(
                  toVersion: 2,
                  addedFields: [Field.int('extra_qty')],
                  transform: (oldRow) => {'extra_qty': 'not-a-number'},
                ),
              ],
            ),
          ],
        ),
        throwsA(isA<ValidationException>()
            .having((e) => e.message, 'message', contains('integer'))),
      );
    });

    test('kind violation messages cover the declared kinds', () async {
      // int value for a text field → "must be a string".
      final dbPathText = await tempDbPath();
      await seedV1(dbPathText.path, 'wrongtext');
      addTearDown(dbPathText.cleanup);
      await expectLater(
        kernel.KernelDatabase.open(
          path: dbPathText.path,
          stores: [
            schema(name: 'wrongtext', version: 2, migrations: [
              StoreMigration(
                toVersion: 2,
                addedFields: [Field.int('extra_qty')],
                transform: (oldRow) => {'title': 5},
              ),
            ]),
          ],
        ),
        throwsA(isA<ValidationException>()
            .having((e) => e.message, 'message', contains('string'))),
      );

      // string value for a boolean field → "must be a boolean".
      final dbPathBool = await tempDbPath();
      await seedV1(dbPathBool.path, 'wrongbool');
      addTearDown(dbPathBool.cleanup);
      await expectLater(
        kernel.KernelDatabase.open(
          path: dbPathBool.path,
          stores: [
            schema(
              name: 'wrongbool',
              version: 2,
              extraFields: [Field.bool('extra_flag')],
              migrations: [
                StoreMigration(
                  toVersion: 2,
                  addedFields: [Field.bool('extra_flag')],
                  transform: (oldRow) => {'extra_flag': 'yes'},
                ),
              ],
            ),
          ],
        ),
        throwsA(isA<ValidationException>()
            .having((e) => e.message, 'message', contains('boolean'))),
      );

      // scalar value for a json field → "must be JSON".
      final dbPathJson = await tempDbPath();
      await seedV1(dbPathJson.path, 'wrongjson');
      addTearDown(dbPathJson.cleanup);
      await expectLater(
        kernel.KernelDatabase.open(
          path: dbPathJson.path,
          stores: [
            schema(
              name: 'wrongjson',
              version: 2,
              extraFields: [Field.json('extra_meta')],
              migrations: [
                StoreMigration(
                  toVersion: 2,
                  addedFields: [Field.json('extra_meta')],
                  transform: (oldRow) => {'extra_meta': 3},
                ),
              ],
            ),
          ],
        ),
        throwsA(isA<ValidationException>()
            .having((e) => e.message, 'message', contains('JSON'))),
      );
    });

    test('an enum transform outside the accepted values is rejected', () async {
      final dbPath = await tempDbPath();
      await seedV1(dbPath.path, 'badenum');
      addTearDown(dbPath.cleanup);

      await expectLater(
        kernel.KernelDatabase.open(
          path: dbPath.path,
          stores: [
            schema(
              name: 'badenum',
              version: 2,
              extraFields: [
                Field.enumValue('stage', ['draft', 'done'])
              ],
              migrations: [
                StoreMigration(
                  toVersion: 2,
                  addedFields: [
                    Field.enumValue('stage', ['draft', 'done'])
                  ],
                  transform: (oldRow) => {'stage': 'archived'},
                ),
              ],
            ),
          ],
        ),
        throwsA(isA<ValidationException>()
            .having((e) => e.message, 'message', contains('unknown enum'))),
      );
    });

    test('a valid backfill runs per row and never re-runs on reopen', () async {
      final dbPath = await tempDbPath();
      await seedV1(dbPath.path, 'backfill');
      addTearDown(dbPath.cleanup);

      final v2 = await kernel.KernelDatabase.open(
        path: dbPath.path,
        stores: [
          schema(
            name: 'backfill',
            version: 2,
            extraFields: [Field.int('extra_qty')],
            migrations: [
              StoreMigration(
                toVersion: 2,
                addedFields: [Field.int('extra_qty')],
                transform: (oldRow) => {'extra_qty': 7},
              ),
            ],
          ),
        ],
      );
      final page = await v2.collection('backfill').query().limit(10).fetch();
      expect(page.items.map((r) => r['extra_qty']), everyElement(7));
      await v2.close();

      // Reopen once more: the ledger must prevent a second backfill.
      final v3 = await kernel.KernelDatabase.open(
        path: dbPath.path,
        stores: [
          schema(
            name: 'backfill',
            version: 2,
            extraFields: [Field.int('extra_qty')],
            migrations: [
              StoreMigration(
                toVersion: 2,
                addedFields: [Field.int('extra_qty')],
                transform: (oldRow) => {'extra_qty': 99},
              ),
            ],
          ),
        ],
      );
      final still = await v3.collection('backfill').query().limit(10).fetch();
      expect(still.items.map((r) => r['extra_qty']), everyElement(7));
      await v3.close();
    });

    test('a transform returning nothing still advances and completes',
        () async {
      final dbPath = await tempDbPath();
      await seedV1(dbPath.path, 'emptybackfill');
      addTearDown(dbPath.cleanup);

      final db = await kernel.KernelDatabase.open(
        path: dbPath.path,
        stores: [
          schema(
            name: 'emptybackfill',
            version: 2,
            extraFields: [Field.int('extra_qty')],
            migrations: [
              StoreMigration(
                toVersion: 2,
                addedFields: [Field.int('extra_qty')],
                transform: (oldRow) => const {},
              ),
            ],
          ),
        ],
      );
      final col = db.collection('emptybackfill');
      await col.put({'id': 'mg0000000000002', 'title': 'after'});
      expect((await col.get('mg0000000000002'))!['title'], 'after',
          reason: 'the store is fully usable after the no-op backfill');
      await db.close();
    });
  });
}
