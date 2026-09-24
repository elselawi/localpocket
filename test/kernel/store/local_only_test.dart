import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';

import 'package:localpocket/src/kernel/change_bus.dart' show ChangeSet;
import 'package:localpocket/src/kernel/cipher.dart' show AesGcmFieldCipher;
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
import 'package:test/test.dart';

import '../../support/helpers.dart';

void main() {
  group('localOnly record writes', () {
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
      final id = generateRecordId();
      final store = pocket.collection('local_everything');

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
      expect(
        changes.any((change) =>
            change.store == 'local_everything' && change.ids.contains(id)),
        isTrue,
      );
      await _expectEmptyJournals(pocket, 'local_everything');

      await store.archive(id);
      await Future<void>.delayed(const Duration(milliseconds: 50));
      expect(await store.get(id), isNull);
      expect(
        changes.where((change) =>
            change.store == 'local_everything' && change.ids.contains(id)),
        hasLength(2),
      );
      await _expectEmptyJournals(pocket, 'local_everything');
    });

    test('attachments stay local and all op-queue paths reject the store',
        () async {
      final blobStore = MemoryBlobStore();
      final pocket = await openPocket(
        stores: [widgetsSchema(name: 'local_files', localOnly: true)],
        blobStore: blobStore,
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
