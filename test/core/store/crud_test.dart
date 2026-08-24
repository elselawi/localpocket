import 'package:localpocket/localpocket.dart';
import 'package:sqlite3/sqlite3.dart' as sqlite;
import 'package:test/test.dart';

import '../../support/helpers.dart';

class FakeSqliteException implements Exception {
  FakeSqliteException(this.message);
  final String message;
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
      const value = 'héllo wörld 🎉 emoji 👨‍👩‍👧‍👦';
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

  group('store validation matrix', () {
    test('invalid ids are rejected and generated ids are valid', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');

      for (final bad in [
        '',
        'a' * 14,
        'A' * 15,
        'bad-id!',
        'name with space',
        'é' * 15
      ]) {
        await expectLater(
          col.put({'id': bad, 'name': 'x'}),
          throwsA(
              isA<ValidationException>().having((e) => e.field, 'field', 'id')),
          reason: 'id "$bad" must be rejected',
        );
      }

      // No id: a valid 15-char id is generated.
      await col.put({'name': 'generated'});
      final rows = await col.query().all().fetch();
      expect(rows.items.single['id'], hasLength(15));
      expect(isValidRecordId(rows.items.single['id'] as String), isTrue);
    });

    test('missing required field is rejected with the field name', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      await expectLater(
        pocket.collection('widgets').put({'id': generateRecordId()}),
        throwsA(
            isA<ValidationException>().having((e) => e.field, 'field', 'name')),
      );
      // Patch to null on a required field is also rejected.
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'x'));
      await expectLater(
        pocket.collection('widgets').patch(id, {'name': null}),
        throwsA(
            isA<ValidationException>().having((e) => e.field, 'field', 'name')),
      );
    });

    test('every wrong field type is rejected with the field name', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final cases = <String, Object?>{
        'name': 42, // text must be string
        'qty': 'not-an-int',
        'price': 'not-a-number',
        'active': 1, // bool must be bool
        'made_on': '2026-01-01',
        'size': 5, // enum must be string
        'meta': 'a plain string', // json must be map/list
        'tags': {'a': 1}, // jsonList must be list
        'owner_id': 123, // ref must be string
      };
      for (final entry in cases.entries) {
        await expectLater(
          col.put(
              {'id': generateRecordId(), 'name': 'x', entry.key: entry.value}),
          throwsA(isA<ValidationException>()
              .having((e) => e.field, 'field', entry.key)),
          reason: 'field ${entry.key} with ${entry.value} must be rejected',
        );
      }
      expect(await col.query().all().count(), 0);
    });

    test('invalid enum values are rejected', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      await expectLater(
        col.put({'id': generateRecordId(), 'name': 'x', 'size': 'XXL'}),
        throwsA(
            isA<ValidationException>().having((e) => e.field, 'field', 'size')),
      );
      // Valid values pass.
      await col.put({'id': generateRecordId(), 'name': 'x', 'size': 'S'});
      await col.put({'id': generateRecordId(), 'name': 'x', 'size': 'L'});
      expect(await col.query().all().count(), 2);
    });

    test('NaN and infinity real values', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');

      // NaN passes validation but SQLite stores it as NULL.
      final nanId = generateRecordId();
      await col.put({'id': nanId, 'name': 'nan', 'price': double.nan});
      final nanDoc = await col.get(nanId);
      expect(nanDoc!['price'], isNull, reason: 'SQLite stores NaN as NULL');

      // +Infinity is a valid REAL and round-trips.
      final infId = generateRecordId();
      await col.put({'id': infId, 'name': 'inf', 'price': double.infinity});
      expect((await col.get(infId))!['price'], double.infinity);

      // -Infinity round-trips too.
      final ninfId = generateRecordId();
      await col.put(
          {'id': ninfId, 'name': 'ninf', 'price': double.negativeInfinity});
      expect((await col.get(ninfId))!['price'], double.negativeInfinity);
    });

    test('application validator failures are rejected', () async {
      final schema = CollectionSchema<Object?>(
        name: 'validated',
        version: 1,
        fields: [Field.text('name', required: true)],
        validator: (doc) =>
            (doc['name'] == 'blocked') ? const ['name is blocked'] : const [],
      );
      final pocket = await openPocket(stores: [schema]);
      addTearDown(pocket.close);
      await expectLater(
        pocket
            .collection('validated')
            .put({'id': generateRecordId(), 'name': 'blocked'}),
        throwsA(isA<ValidationException>()
            .having((e) => e.message, 'message', contains('name is blocked'))),
      );
      await pocket
          .collection('validated')
          .put({'id': generateRecordId(), 'name': 'ok'});
      expect(await pocket.collection('validated').query().all().count(), 1);
    });

    test('null transitions: non-required fields can be cleared', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();
      await col.put(record(id: id, name: 'x', qty: 5, size: 'M'));
      await col.patch(id, {'qty': null, 'size': null});
      final doc = await col.get(id);
      expect(doc!['qty'], isNull);
      expect(doc['size'], isNull);
      expect(doc['name'], 'x');
    });

    test('UTF-8 byte-size boundaries and exact max-document size', () async {
      // maxDocBytes counts UTF-8 bytes of the canonical payload.
      final pocket = await openPocket(maxDocBytes: 500);
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      const id = 'aaaaaaaaaaaaaaa';
      final schema = widgetsSchema();
      final base = canonicalPayload(schema, {'id': id, 'name': ''}).length;
      final exactNameLen = 500 - base;

      // Exactly at the limit: accepted.
      await col.put({'id': id, 'name': 'x' * exactNameLen});
      expect((await col.get(id))!['name'], 'x' * exactNameLen);

      // One byte over the limit: rejected, nothing persisted.
      final overId = generateRecordId();
      await expectLater(
        col.put({'id': overId, 'name': 'x' * (exactNameLen + 1)}),
        throwsA(isA<ValidationException>()),
      );
      expect(await col.get(overId), isNull);

      // Multi-byte UTF-8 counts bytes, not characters.
      final uniId = generateRecordId();
      // é is 2 UTF-8 bytes: 250 é chars = 500 bytes of name content.
      final uniName = 'é' * (exactNameLen ~/ 2);
      await col.put({'id': uniId, 'name': uniName});
      expect(await col.get(uniId), isNotNull);
    });

    test(
        'failed writes leave domain, outbox, sync, cache, and change-bus '
        'state unchanged', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final emitted = <ChangeSet>[];
      final sub = pocket.changes.listen(emitted.add);
      addTearDown(sub.cancel);
      final col = pocket.collection('widgets');

      final id = generateRecordId();
      // Negative-cache the id first (read miss).
      expect(await col.get(id), isNull);

      // A validation failure.
      await expectLater(
          col.put({'id': id, 'name': 42}), throwsA(isA<ValidationException>()));
      expect(await col.get(id), isNull);
      expect(await pocket.outbox.readOp(pocket.db, 'widgets', id), isNull);
      expect(await pocket.outbox.readSyncRow(pocket.db, 'widgets', id), isNull);
      expect(emitted, isEmpty);

      // A constraint failure (unique phone) leaves the second row untouched.
      final a = generateRecordId();
      final b = generateRecordId();
      await col.put(record(id: a, name: 'a', phone: 'same'));
      // Let the successful write's post-commit notification land BEFORE
      // clearing: group commit emits at end-of-turn.
      await Future<void>.delayed(Duration.zero);
      emitted.clear();
      await expectLater(col.put(record(id: b, name: 'b', phone: 'same')),
          throwsA(isA<UniqueConstraintException>()));
      expect(await col.get(b), isNull);
      expect(await pocket.outbox.readOp(pocket.db, 'widgets', b), isNull);
      expect(await pocket.outbox.readSyncRow(pocket.db, 'widgets', b), isNull);
      expect(emitted, isEmpty);
      // The successful first write is intact.
      expect((await col.get(a))!['phone'], 'same');
    });
  });
}

Map<String, Object?> recordForOwners(String id) => {'id': id, 'name': 'owner'};
