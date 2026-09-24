import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';

import 'package:localpocket/src/kernel/change_bus.dart'
    show ChangeAction, ChangeSet, RecordChangeEvent;
import 'package:localpocket/src/kernel/cipher.dart' show AesGcmFieldCipher;
import 'package:localpocket/src/kernel/database_adapter.dart'
    show DirectSqliteDatabase;
import 'package:localpocket/src/kernel/errors.dart' show ValidationException;
import 'package:localpocket/src/kernel/files/blob_store.dart'
    show MemoryBlobStore;
import 'package:localpocket/src/kernel/ids.dart' show generateRecordId;
import 'package:localpocket/src/kernel/local_pocket.dart'
    show LocalPocket, TestHooks;
import 'package:localpocket/src/kernel/schema.dart'
    show CollectionSchema, Field;
import 'package:localpocket/src/kernel/sync/sync_tables.dart' show OpQueueKind;
import 'package:path/path.dart' as p;
import 'package:sqlite3/sqlite3.dart' as sqlite;
import 'package:test/test.dart';

import '../../support/helpers.dart';

void main() {
  test('patch SQL count skips sync bookkeeping only for local-only stores',
      () async {
    Future<List<String>> patchStatements({required bool localOnly}) async {
      final database = DirectSqliteDatabase(sqlite.sqlite3.openInMemory());
      final statements = <String>[];
      database.onQuery = (sql, _) => statements.add(sql);
      database.onExecute = (sql, _) => statements.add(sql);
      final pocket = await openPocket(
        database: database,
        stores: [
          widgetsSchema(
            name: 'statement_count',
            localOnly: localOnly,
          ),
        ],
      );
      final collection = pocket.collection('statement_count');
      final id = generateRecordId();
      await collection.put(record(id: id, name: 'before', qty: 1));
      statements.clear();

      await collection.patch(id, {'qty': 2});
      final executed = List<String>.of(statements);
      await pocket.close();
      return executed;
    }

    // Before optimization on 0.3.7 the measured counts were 7 local-only and
    // 6 normal, including transaction begin and commit.
    final localStatements = await patchStatements(localOnly: true);
    final normalStatements = await patchStatements(localOnly: false);
    expect(localStatements, hasLength(4));
    expect(
      localStatements.where(
          (sql) => sql.contains('lp_sync_row') || sql.contains('lp_outbox')),
      isEmpty,
    );
    expect(normalStatements, hasLength(6));
    expect(
      normalStatements.any((sql) => sql.contains('lp_sync_row')),
      isTrue,
    );
  });

  test('patchAll and versioned get skip sync-table probes', () async {
    final database = DirectSqliteDatabase(sqlite.sqlite3.openInMemory());
    final statements = <String>[];
    database.onQuery = (sql, _) => statements.add(sql);
    database.onExecute = (sql, _) => statements.add(sql);
    final pocket = await openPocket(
      database: database,
      stores: [
        widgetsSchema(
          name: 'local_versioned',
          version: 2,
          localOnly: true,
        ),
      ],
    );
    addTearDown(pocket.close);
    final store = pocket.collection('local_versioned');
    final firstId = generateRecordId();
    final secondId = generateRecordId();
    await store.putAll([
      record(id: firstId, name: 'first', qty: 1),
      record(id: secondId, name: 'second', qty: 2),
    ]);

    statements.clear();
    await store.patchAll({
      firstId: {'qty': 3},
      secondId: {'qty': 4},
    });
    expect(
      statements.where(
          (sql) => sql.contains('lp_sync_row') || sql.contains('lp_outbox')),
      isEmpty,
    );

    statements.clear();
    expect((await store.get(firstId))?['qty'], 3);
    expect(statements, hasLength(1));
    expect(statements.single, isNot(contains('lp_sync_row')));
  });

  test('local-only explicit purge skips all sync-table statements', () async {
    final database = DirectSqliteDatabase(sqlite.sqlite3.openInMemory());
    final statements = <String>[];
    database.onQuery = (sql, _) => statements.add(sql);
    database.onExecute = (sql, _) => statements.add(sql);
    final pocket = await openPocket(
      database: database,
      stores: [widgetsSchema(name: 'local_purge', localOnly: true)],
    );
    addTearDown(pocket.close);
    final store = pocket.collection('local_purge');
    final id = generateRecordId();
    await store.put(record(id: id, name: 'delete me', qty: 1));
    statements.clear();

    await store.purge(id);

    expect(
      statements.where((sql) => sql.contains(RegExp(
          r'lp_(?:sync_row|outbox|conflicts|op_queue|dead_letter|sync_state)'))),
      isEmpty,
    );
  });

  test('local-only versioned get applies document migrations without sync rows',
      () async {
    final pocket = await openPocket(
      stores: [
        widgetsSchema(
          name: 'local_versioned_document',
          version: 2,
          localOnly: true,
          documentMigrations: {
            2: (document) => {...document, 'migration_ran': true},
          },
        ),
      ],
    );
    addTearDown(pocket.close);
    final store = pocket.collection('local_versioned_document');
    final id = generateRecordId();
    await store.put(record(id: id, name: 'current schema', qty: 1));

    final row = await store.get(id);
    expect(row?['name'], 'current schema');
    expect(row?['migration_ran'], isTrue);
  });

  group('localOnly record writes', () {
    test('database localOnly applies to stores without a per-store flag',
        () async {
      final pocket = await openPocket(
        localOnly: true,
        stores: [
          widgetsSchema(name: 'database_local_only'),
          widgetsSchema(name: 'database_local_only_other'),
        ],
      );
      addTearDown(pocket.close);
      final store = pocket.collection('database_local_only');
      final otherStore = pocket.collection('database_local_only_other');
      final id = generateRecordId();
      final bulkId = generateRecordId();
      final otherId = generateRecordId();

      await store.putAll([
        record(id: id, name: 'local', qty: 1),
        record(id: bulkId, name: 'bulk local', qty: 3),
      ]);
      await store.patch(id, {'qty': 2});
      await store.patchAll({
        bulkId: {'qty': 4}
      });
      await otherStore.put(record(id: otherId, name: 'other', qty: 5));

      expect((await store.get(id))?['qty'], 2);
      expect((await store.get(bulkId))?['qty'], 4);
      expect((await otherStore.get(otherId))?['qty'], 5);
      await _expectEmptyJournals(pocket, 'database_local_only');
      await _expectEmptyJournals(pocket, 'database_local_only_other');
    });

    test('put and patch keep encrypted values out of every database file',
        () async {
      const firstSecret = 'local-only-original-secret-1a2b3c';
      const secondSecret = 'local-only-patched-secret-4d5e6f';
      final fixture = await _openFileDb(
        widgetsSchema(
          name: 'private_records',
          localOnly: true,
          extraFields: [Field.text('token', encrypted: true)],
        ),
      );
      final id = generateRecordId();
      final store = fixture.pocket.collection('private_records');

      await store.put(_record(id, firstSecret));
      await store.patch(id, {'token': secondSecret});

      await _expectEmptyJournals(fixture.pocket, 'private_records');
      expect((await store.get(id))?['token'], secondSecret);
      await fixture.close();
      final found = await _scanDatabaseDirectory(
          fixture.database.path, [firstSecret, secondSecret]);
      expect(found[firstSecret], isFalse);
      expect(found[secondSecret], isFalse);
    });

    test('putAll direct bulk insert keeps encrypted values off disk', () async {
      const firstSecret = 'bulk-secret-alpha-789abc';
      const secondSecret = 'bulk-secret-beta-def012';
      final fixture = await _openFileDb(
        widgetsSchema(
          name: 'private_bulk',
          localOnly: true,
          extraFields: [Field.text('token', encrypted: true)],
        ),
      );
      final store = fixture.pocket.collection('private_bulk');
      await store.putAll([
        _record(generateRecordId(), firstSecret),
        _record(generateRecordId(), secondSecret),
      ]);

      await _expectEmptyJournals(fixture.pocket, 'private_bulk');
      await fixture.close();
      final found = await _scanDatabaseDirectory(
          fixture.database.path, [firstSecret, secondSecret]);
      expect(found[firstSecret], isFalse);
      expect(found[secondSecret], isFalse);
    });

    test('putAll per-record fallback keeps encrypted values off disk',
        () async {
      const firstSecret = 'fallback-secret-alpha-345678';
      const secondSecret = 'fallback-secret-beta-9abcde';
      final fixture = await _openFileDb(
        widgetsSchema(
          name: 'private_fallback',
          localOnly: true,
          extraFields: [Field.text('token', encrypted: true)],
        ),
        testHooks: TestHooks(onExecute: (_) {}),
      );
      final store = fixture.pocket.collection('private_fallback');
      await store.putAll([
        _record(generateRecordId(), firstSecret),
        _record(generateRecordId(), secondSecret),
      ]);

      await _expectEmptyJournals(fixture.pocket, 'private_fallback');
      await fixture.close();
      final found = await _scanDatabaseDirectory(
          fixture.database.path, [firstSecret, secondSecret]);
      expect(found[firstSecret], isFalse);
      expect(found[secondSecret], isFalse);
    });

    test('default store still journals and persists the plaintext control',
        () async {
      const secret = 'default-store-journal-control-112233';
      final fixture = await _openFileDb(
        widgetsSchema(
          name: 'synced_records',
          extraFields: [Field.text('token', encrypted: true)],
        ),
      );
      final id = generateRecordId();
      await fixture.pocket
          .collection('synced_records')
          .put(_record(id, secret));

      final outbox = await fixture.pocket.db.rawQuery(
          'SELECT payload_json FROM lp_outbox '
          'WHERE store = ? AND record_id = ?',
          ['synced_records', id]);
      expect(outbox, hasLength(1));
      expect(outbox.single['payload_json'], contains(secret));
      expect(
          await _countRows(fixture.pocket, 'lp_sync_row', 'synced_records'), 1);

      await fixture.close();
      final found =
          await _scanDatabaseDirectory(fixture.database.path, [secret]);
      expect(found[secret], isTrue);
    });

    test('all field kinds round-trip, emit changes, and hard-delete on archive',
        () async {
      const secret = 'all-kinds-local-secret-a1b2c3';
      final pocket = await openPocket(
        stores: [
          widgetsSchema(
            name: 'local_everything',
            localOnly: true,
            extraFields: [Field.text('token', encrypted: true)],
          ),
        ],
        fieldCipher: _cipher(),
      );
      addTearDown(pocket.close);
      final changes = <ChangeSet>[];
      final subscription = pocket.changes.listen(changes.add);
      addTearDown(subscription.cancel);
      final recordEvents = <RecordChangeEvent>[];
      final recordSubscription = pocket.changeBus.events
          .where((event) => event.store == 'local_everything')
          .listen(recordEvents.add);
      addTearDown(recordSubscription.cancel);
      final id = generateRecordId();
      final store = pocket.collection('local_everything');
      final watchSnapshots = <List<String>>[];
      final watchSubscription = store.query().limit(10).watch().listen((rows) =>
          watchSnapshots.add([for (final row in rows) row['id'] as String]));
      addTearDown(watchSubscription.cancel);

      await store.put(_record(id, secret));
      await Future<void>.delayed(const Duration(milliseconds: 50));
      final row = await store.get(id);
      expect(row, isNotNull);
      expect(row!['name'], 'private-$id');
      expect(row['qty'], 7);
      expect(row['price'], 2.75);
      expect(row['active'], isTrue);
      expect(row['made_on'], 1700000000000);
      expect(row['size'], 'M');
      expect(row['meta'], {
        'nested': [1, true]
      });
      expect(row['tags'], ['local-only', 'round-trip']);
      expect(row['owner_id'], 'owner-$id');
      expect(row['token'], secret);
      expect(watchSnapshots.any((ids) => ids.contains(id)), isTrue);
      expect(
        changes.any((change) =>
            change.store == 'local_everything' && change.ids.contains(id)),
        isTrue,
      );

      await store.patch(id, {'qty': 8});
      await Future<void>.delayed(const Duration(milliseconds: 50));
      expect((await store.get(id))?['qty'], 8);
      final updateEvent = recordEvents
          .singleWhere((event) => event.action == ChangeAction.update);
      expect(updateEvent.changedFields, {'qty'});
      await _expectEmptyJournals(pocket, 'local_everything');

      await store.archive(id);
      await Future<void>.delayed(const Duration(milliseconds: 50));
      expect(await store.get(id), isNull);
      expect(watchSnapshots.last, isEmpty);
      expect(recordEvents.last.action, ChangeAction.purge);
      expect(
        changes.where((change) =>
            change.store == 'local_everything' && change.ids.contains(id)),
        hasLength(3),
      );
      await _expectEmptyJournals(pocket, 'local_everything');
    });

    test('attachments stay local and all op-queue paths reject the store',
        () async {
      final blobStore = MemoryBlobStore();
      final pocket = await openPocket(
        stores: [widgetsSchema(name: 'local_files')],
        blobStore: blobStore,
        localOnly: true,
      );
      addTearDown(pocket.close);
      final id = generateRecordId();
      await pocket
          .collection('local_files')
          .put(record(id: id, name: 'local file owner'));
      final ref = await pocket.files.attach(
        store: 'local_files',
        recordId: id,
        field: 'attachment',
        bytes: Stream<List<int>>.value([65, 66, 67]),
        allowVolatileBlobs: true,
      );

      final bytes = <int>[];
      await for (final chunk in await pocket.files.open(
          store: 'local_files',
          recordId: id,
          field: 'attachment',
          refId: ref.refId)) {
        bytes.addAll(chunk);
      }
      expect(bytes, [65, 66, 67]);
      expect(await _countRows(pocket, 'lp_op_queue', 'local_files'), 0);
      expect(await pocket.opQueue.drain(store: 'local_files'), isEmpty);
      expect(await pocket.outbox.drain(store: 'local_files'), isEmpty);
      expect(
        () => pocket.opQueue.enqueue(
          store: 'local_files',
          recordId: id,
          kind: OpQueueKind.fileUpload,
          payload: const {'name': 'must-not-be-journaled'},
        ),
        throwsA(isA<ValidationException>()),
      );
      expect(await _countRows(pocket, 'lp_op_queue', 'local_files'), 0);

      await pocket.files.remove(
          store: 'local_files',
          recordId: id,
          field: 'attachment',
          refId: ref.refId);
      expect(
          await pocket.files
              .list(store: 'local_files', recordId: id, field: 'attachment'),
          isEmpty);
      expect(await _countRows(pocket, 'lp_op_queue', 'local_files'), 0);
    });
  });
}

Map<String, Object?> _record(String id, String secret) => record(
      id: id,
      name: 'private-$id',
      qty: 7,
      price: 2.75,
      active: true,
      madeOn: 1700000000000,
      size: 'M',
      meta: const {
        'nested': [1, true]
      },
      tags: const ['local-only', 'round-trip'],
      ownerId: 'owner-$id',
      phone: 'phone-$id',
      extra: {'token': secret},
    );

Future<_FileDatabase> _openFileDb(
  CollectionSchema<Object?> schema, {
  TestHooks? testHooks,
}) async {
  final database = await tempDbPath();
  final pocket = await openPocket(
    path: database.path,
    stores: [schema],
    fieldCipher: _cipher(),
    testHooks: testHooks,
  );
  final fixture = _FileDatabase(database, pocket);
  addTearDown(fixture.dispose);
  return fixture;
}

AesGcmFieldCipher _cipher() =>
    AesGcmFieldCipher(Uint8List.fromList(List.filled(32, 7)));

Future<void> _expectEmptyJournals(LocalPocket pocket, String store) async {
  for (final table in ['lp_outbox', 'lp_sync_row', 'lp_op_queue']) {
    expect(await _countRows(pocket, table, store), 0,
        reason: '$table must stay empty for localOnly store "$store"');
  }
}

Future<int> _countRows(LocalPocket pocket, String table, String store) async {
  final rows = await pocket.db
      .rawQuery('SELECT COUNT(*) AS c FROM $table WHERE store = ?', [store]);
  return firstInt(rows) ?? -1;
}

Future<Map<String, bool>> _scanDatabaseDirectory(
    String databasePath, List<String> values) async {
  final found = {for (final value in values) value: false};
  var filesScanned = 0;
  await for (final entity
      in Directory(p.dirname(databasePath)).list(recursive: true)) {
    if (entity is! File) continue;
    filesScanned++;
    final bytes = await entity.readAsBytes();
    for (final value in values) {
      if (!found[value]! && _containsBytes(bytes, utf8.encode(value))) {
        found[value] = true;
      }
    }
  }
  expect(filesScanned, greaterThan(0),
      reason: 'the closed database directory must contain files to scan');
  return found;
}

bool _containsBytes(List<int> haystack, List<int> needle) {
  for (var offset = 0; offset <= haystack.length - needle.length; offset++) {
    var matches = true;
    for (var index = 0; index < needle.length; index++) {
      if (haystack[offset + index] != needle[index]) {
        matches = false;
        break;
      }
    }
    if (matches) return true;
  }
  return false;
}

final class _FileDatabase {
  _FileDatabase(this.database, this.pocket);

  final TempDb database;
  final LocalPocket pocket;
  bool _closed = false;

  Future<void> close() async {
    if (_closed) return;
    await pocket.close();
    _closed = true;
  }

  Future<void> dispose() async {
    await close();
    await database.cleanup();
    final directory = Directory(p.dirname(database.path));
    if (await directory.exists()) await directory.delete(recursive: true);
  }
}
