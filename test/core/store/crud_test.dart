import 'package:localpocket/localpocket.dart';
import 'package:sqlite3/sqlite3.dart' as sqlite;
import 'package:test/test.dart';

import '../../support/helpers.dart';

class FakeSqliteException implements Exception {
  final String message;
  FakeSqliteException(this.message);
  @override
  String toString() => message;
}

/// Store CRUD tests.
void main() {
  group('store CRUD', () {
    test('insert get replace patch roundtrip', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();

      await col.put(record(id: id, name: 'first', qty: 1));
      var r = await col.get(id);
      expect(r!['name'], 'first');
      expect(r['qty'], 1);

      // Replace
      await col.put(record(id: id, name: 'second', qty: 2));
      r = await col.get(id);
      expect(r!['name'], 'second');
      expect(r['qty'], 2);

      // Patch
      await col.patch(id, {'qty': 5});
      r = await col.get(id);
      expect(r!['qty'], 5);
      expect(r['name'], 'second');

      // Null handling
      await col.patch(id, {'qty': null});
      r = await col.get(id);
      expect(r!['qty'], isNull);
      expect(r.containsKey('qty'), isTrue);

      await col.put(
          record(id: generateRecordId(), name: 'third', extra: {'x': null}));
    });

    test('point_read_cache_hit_and_invalidation', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();

      // Initial read: miss (negative cached)
      expect(await col.get(id), isNull);

      // Put invalidates cache key
      await col.put(record(id: id, name: 'cached', qty: 10));
      final r1 = await col.get(id);
      expect(r1!['name'], 'cached');

      // Subsequent get hits cache
      final r2 = await col.get(id);
      expect(r2!['name'], 'cached');

      // Patch invalidates key
      await col.patch(id, {'qty': 20});
      final r3 = await col.get(id);
      expect(r3!['qty'], 20);
    });

    test('patch absent record throws typed', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      await expectLater(
          pocket.collection('widgets').patch(generateRecordId(), {'qty': 1}),
          throwsA(isA<RecordNotFoundException>()));
    });

    test('archive restore flags', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();
      await col.put(record(id: id, name: 'a'));
      // Sync the record so archive is an update-path op, not a vanish.
      await pocket.outbox
          .ack('widgets', id, serverUpdated: '2026-01-01 00:00:00.000Z');

      await col.archive(id);
      var r = await col.get(id);
      expect(r!['archived'], isTrue);
      expect(await col.query().count(), 0,
          reason: 'default scope excludes archived');
      expect(await col.query().includeArchived().count(), 1);

      await col.restore(id);
      r = await col.get(id);
      expect(r!['archived'], isFalse);
      expect(await col.query().count(), 1);
    });

    test('constraint errors translated', () async {
      // Unique (real, through the DB)
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final a = generateRecordId();
      final b = generateRecordId();
      await col.put(record(id: a, name: 'a', phone: 'same'));
      await expectLater(
          col.put(record(id: b, name: 'b', phone: 'same')),
          throwsA(isA<UniqueConstraintException>()
              .having((e) => e.field, 'field', 'phone')));

      // NOT NULL translation (unit)
      final notNull = translateConstraintError(
          FakeSqliteException('NOT NULL constraint failed: widgets.name'));
      expect(notNull, isA<NotNullConstraintException>());

      // CHECK translation (unit)
      final check = translateConstraintError(
          FakeSqliteException('CHECK constraint failed: widgets'));
      expect(check, isA<CheckConstraintException>());

      // Storage error fallback
      expect(translateConstraintError(FakeSqliteException('some weird error')),
          isA<StorageError>());
    });

    test('2mb json ceiling rejected locally', () async {
      final pocket = await openPocket(maxDocBytes: 1900000);
      addTearDown(pocket.close);
      final id = generateRecordId();
      // Just over the 1.9 MB ceiling.
      await expectLater(
          pocket.collection('widgets').put(record(id: id, name: 'x' * 1900001)),
          throwsA(isA<ValidationException>()));
      expect(await pocket.collection('widgets').get(id), isNull);
      // Under the ceiling is fine.
      await pocket.collection('widgets').put(record(id: id, name: 'small'));
      expect(await pocket.collection('widgets').get(id), isNotNull);
    });

    test('unicode emoji roundtrip', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final id = generateRecordId();
      final value = 'héllo wörld 🎉 emoji 👨‍👩‍👧‍👦';
      await pocket.collection('widgets').put(record(id: id, name: value));
      final r = await pocket.collection('widgets').get(id);
      expect(r!['name'], value);
    });

    test('100k rows bounded memory', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      const total = 100000;
      const chunk = 5000;
      for (var start = 0; start < total; start += chunk) {
        await pocket.transaction((tx) async {
          for (var i = start; i < start + chunk; i++) {
            await tx
                .collection('widgets')
                .put(record(id: generateRecordId(), name: 'r$i', qty: i));
          }
        });
      }
      expect(await pocket.collection('widgets').query().count(), total);
    }, timeout: const Timeout(Duration(minutes: 2)));

    test('concurrent reader sees snapshot during writer', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket = await openPocket(path: t.path);
      addTearDown(pocket.close);

      final conn2 = sqlite.sqlite3.open(t.path);
      addTearDown(conn2.close);
      final id = generateRecordId();

      conn2.execute('BEGIN');
      try {
        final before = conn2.select('SELECT * FROM widgets');
        expect(before, isEmpty);

        // Write on the pocket's connection while conn2 holds a read snapshot.
        await pocket.collection('widgets').put(record(id: id, name: 'written'));

        final during =
            conn2.select('SELECT id FROM widgets WHERE id = ?', [id]);
        expect(during, isEmpty,
            reason: 'WAL snapshot hides the concurrent write');
      } finally {
        conn2.execute('COMMIT');
      }

      final after = conn2.select('SELECT id FROM widgets WHERE id = ?', [id]);
      expect(after, hasLength(1));
    });

    test('extra column lossless json roundtrip', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final id = generateRecordId();
      final schema = widgetsSchema();
      final written = record(id: id, name: 'x', extra: {
        'mystery': {
          'deep': [1, 2, 3],
          'nested': {'ok': true}
        },
        'flat_key': 'v',
      });
      await pocket.collection('widgets').put(written);
      final r = await pocket.collection('widgets').get(id);
      expect(r!['mystery'], written['mystery']);
      expect(r['flat_key'], 'v');
      // Canonical payload bytes round-trip losslessly (nulls are omitted from
      // the payload, so compare payload canonical forms).
      expect(canonicalPayload(schema, r), canonicalPayload(schema, written));
    });

    test('ref column index and optional fk', () async {
      // Default: no FK clause, insert with any owner_id.
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final ddl = DdlCompiler(SqliteCapabilities.forVersion('3.44.2'))
          .compile(widgetsSchema())
          .tableDdl;
      expect(ddl, isNot(contains('REFERENCES')));

      await pocket.collection('widgets').put(
          record(id: generateRecordId(), name: 'x', ownerId: 'whatever-owner'));
      final indexes = await pocket.db.rawQuery(
          "SELECT name FROM sqlite_master WHERE type='index' AND tbl_name='widgets' AND name='ix_widgets_live_owner_id'");
      expect(indexes, hasLength(1));

      // With FK enforcement: invalid owner is rejected with a typed error.
      final owners = CollectionSchema<Object?>(
        name: 'owners',
        version: 1,
        fields: [Field.text('name')],
      );
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocketFk = await openPocket(path: t.path, stores: [
        owners,
        widgetsSchema(refFk: true),
      ]);
      addTearDown(pocketFk.close);
      final fkDdl = DdlCompiler(SqliteCapabilities.forVersion('3.44.2'))
          .compile(widgetsSchema(refFk: true))
          .tableDdl;
      expect(fkDdl, contains('REFERENCES "owners"("id")'));

      final bad = generateRecordId();
      await expectLater(
          pocketFk
              .collection('widgets')
              .put(record(id: bad, name: 'x', ownerId: 'no-such-owner')),
          throwsA(isA<ForeignKeyConstraintException>()));

      // Valid owner passes.
      final ownerId = generateRecordId();
      await pocketFk.collection('owners').put(recordForOwners(ownerId));
      await pocketFk
          .collection('widgets')
          .put(record(id: generateRecordId(), name: 'ok', ownerId: ownerId));
    });

    test('crash during local write txn rolls back', () async {
      final hooks = TestHooks()
        ..mutationCrashPoint = (marker) {
          if (marker == 'after-domain-write') {
            throw StateError('simulated crash mid-write');
          }
        };
      final pocket = await openPocket(testHooks: hooks);
      addTearDown(pocket.close);
      final id = generateRecordId();

      await expectLater(
          pocket.collection('widgets').put(record(id: id, name: 'x')),
          throwsA(isA<StateError>()));

      // Nothing persisted: no row, no outbox, no sync row.
      expect(await pocket.collection('widgets').get(id), isNull);
      expect(await pocket.outbox.readOp(pocket.db, 'widgets', id), isNull);
      expect(await pocket.outbox.readSyncRow(pocket.db, 'widgets', id), isNull);
    });
  });
}

Map<String, Object?> recordForOwners(String id) => {'id': id, 'name': 'owner'};
