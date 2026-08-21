import 'package:localpocket/src/core/cipher.dart';
import 'package:localpocket/src/core/schema.dart';
import 'package:localpocket/src/web/open_options.dart';
import 'package:localpocket/src/web/protocol.dart';
import 'package:localpocket/src/web/worker_engine.dart';
import 'package:test/test.dart';

import 'support/worker_harness.dart';

void main() {
  CollectionSchema encryptedStore() => CollectionSchema(
        name: 'vault',
        version: 1,
        fields: [Field.text('secret', encrypted: true)],
      );

  group('parseOpenOptions', () {
    test('parses stores into a CollectionSchema list', () {
      final schema = encryptedStore();
      final options = parseOpenOptions({
        'stores': [schema.toJson()]
      });
      final stores = (options['stores'] as List).cast<CollectionSchema>();
      expect(stores, hasLength(1));
      expect(stores.single.name, 'vault');
      expect(stores.single.version, 1);
      expect(stores.single.fields.single.encrypted, isTrue);
    });

    test('maxDocBytes and destructiveBackup read through', () {
      final options = parseOpenOptions({
        'maxDocBytes': 999,
        'destructiveBackup': false,
      });
      expect(options['maxDocBytes'], 999);
      expect(options['destructiveBackup'], isFalse);
    });

    test('a null or non-map input yields empty defaults', () {
      expect(parseOpenOptions(null), isEmpty);
      expect(parseOpenOptions('nope'), isEmpty);
      expect(parseOpenOptions(42), isEmpty);
    });

    test('malformed options are swallowed and defaults returned', () {
      // Wrong-typed values are dropped.
      final wrongTypes = parseOpenOptions({
        'stores': 'not-a-list',
        'maxDocBytes': 'many',
        'destructiveBackup': 1,
      });
      expect(wrongTypes, isEmpty);

      // A stores list containing non-map garbage is dropped entirely.
      final badStore = parseOpenOptions({
        'stores': ['garbage']
      });
      expect(badStore, isEmpty);

      // A stores list whose schema JSON is malformed is dropped.
      final malformed = parseOpenOptions({
        'stores': [
          {'name': 42, 'version': 'x', 'fields': 'nope'}
        ]
      });
      expect(malformed, isEmpty);

      // Well-formed keys survive alongside malformed ones.
      final mixed = parseOpenOptions({
        'stores': 'bad',
        'maxDocBytes': 777,
      });
      expect(mixed, {'maxDocBytes': 777});
    });
  });

  group('rawOpenOption', () {
    test('reads a raw key without swallowing malformed values', () {
      final data = {
        'fieldCipher': {
          'type': 'aes-gcm',
          'key': [1, 2, 3]
        },
      };
      final raw = rawOpenOption(data, 'fieldCipher');
      expect(raw, {
        'type': 'aes-gcm',
        'key': [1, 2, 3]
      });
    });

    test('returns null for a missing key or non-map data', () {
      expect(rawOpenOption({'a': 1}, 'missing'), isNull);
      expect(rawOpenOption(null, 'fieldCipher'), isNull);
      expect(rawOpenOption('nope', 'fieldCipher'), isNull);
    });

    test('nested map keys are stringified recursively', () {
      final raw = rawOpenOption({
        'fieldCipher': {
          1: {'inner': 'value'},
        }
      }, 'fieldCipher');
      expect(raw, {
        '1': {'inner': 'value'},
      });
    });
  });

  group('hasEncryptedFieldsWithoutCipher', () {
    test('true when an encrypted store is opened without a cipher', () {
      expect(
        hasEncryptedFieldsWithoutCipher([encryptedStore()], null),
        isTrue,
      );
    });

    test('false when a cipher is provided', () {
      expect(
        hasEncryptedFieldsWithoutCipher([encryptedStore()], 'cipher-object'),
        isFalse,
      );
    });

    test('false when no store declares encrypted fields', () {
      final plain = CollectionSchema<Object?>(
        name: 'plain',
        version: 1,
        fields: [Field.text('name')],
      );
      expect(hasEncryptedFieldsWithoutCipher([plain], null), isFalse);
      expect(hasEncryptedFieldsWithoutCipher([], null), isFalse);
    });
  });

  group('worker open defense-in-depth', () {
    test('the open wire op rejects an encrypted store without a cipher',
        () async {
      final schema = encryptedStore();
      final harness = await WorkerHarness.open(stores: [schema]);
      addTearDown(() => harness.rawDb.close());

      final reply = await harness.send(harness.req(WireOp.open, args: {
        'stores': [schema.toJson()],
      }));

      expect(reply, isA<WorkerError>());
      final err = reply as WorkerError;
      expect(err.code, WireErrorCode.localpocket);
      expect(err.details?['type'], 'ValidationException');
      expect(err.message, contains('no fieldCipher was provided'));
    });

    test('the open wire op accepts the same store when a cipher is present',
        () async {
      final schema = encryptedStore();
      final harness = await WorkerHarness.open(
        stores: [schema],
        fieldCipher: AesGcmFieldCipher(List<int>.filled(32, 7)),
      );
      addTearDown(() => harness.rawDb.close());

      final reply = await harness.send(harness.req(WireOp.open, args: {
        'stores': [schema.toJson()],
      }));
      expect(reply, isA<WorkerSuccess>());
    });
  });
}
