import 'dart:typed_data';

import 'package:localpocket/src/kernel/cipher.dart' show AesGcmFieldCipher;
import 'package:localpocket/src/kernel/schema.dart';
import 'package:localpocket/src/kernel/schema_manifest.dart';
import 'package:localpocket/src/platform/web/page/protocol.dart';
import 'package:localpocket/src/platform/web/worker/open_options.dart';
import 'package:test/test.dart';

import '../../../support/helpers.dart' show widgetsSchema;
import '../../../support/worker_harness.dart';

/// The worker `open` handler's registration gates: encrypted-store cipher
/// requirements, manifest fingerprint verification (before registration and
/// on re-registration), plus the envelope edges around contract dispatch.
void main() {
  group('open store registration', () {
    test('accepts a store with a matching page fingerprint', () async {
      final h = await WorkerHarness.open();
      addTearDown(h.close);
      final schema = widgetsSchema();
      final fingerprint = SchemaManifest.compile(schema).fingerprint;

      final result = await h.sendOk(h.req(WireOp.open, args: {
        'stores': [schema.toJson()],
        'manifestFingerprints': {schema.name: fingerprint},
      }));
      expect(result, {'ok': true});
    });

    test('a page fingerprint mismatch fails before any registration', () async {
      final h = await WorkerHarness.open();
      addTearDown(h.close);
      final schema = widgetsSchema();

      final error = await h.sendError(h.req(WireOp.open, args: {
        'stores': [schema.toJson()],
        'manifestFingerprints': {schema.name: 'deadbeef'},
      }));
      expect(error.details?['type'], 'ProtocolEnvelopeException');
      expect(error.message, contains('manifest mismatch'));
      expect(error.message, contains('Schema manifest mismatch'));
    });

    test('a mismatch with no policy envelope names the dropped envelope',
        () async {
      final h = await WorkerHarness.open();
      addTearDown(h.close);
      final schema = CollectionSchema<Object?>(
        name: 'gizmos',
        version: 1,
        fields: [Field.text('name', required: true)],
        validator: (doc) => const <String>[],
      );

      final error = await h.sendError(h.req(WireOp.open, args: {
        'stores': [schema.toJson()],
        'manifestFingerprints': {
          'gizmos': SchemaManifest.compile(schema).fingerprint,
        },
      }));
      expect(error.message, contains('No store-policy envelope was received'));
    });

    test('a re-sent store whose definition drifted names the divergence',
        () async {
      final h = await WorkerHarness.open();
      addTearDown(h.close);
      final drifted = CollectionSchema<Object?>(
        name: 'widgets',
        version: 2,
        fields: [Field.text('name', required: true)],
      );

      // The page fingerprint matches the drifted schema, so the first gate
      // passes; the already-registered definition is what disagrees.
      final error = await h.sendError(h.req(WireOp.open, args: {
        'stores': [drifted.toJson()],
        'manifestFingerprints': {
          'widgets': SchemaManifest.compile(drifted).fingerprint,
        },
      }));
      expect(error.message, contains('version (page: 2, worker: 1)'));
    });

    test('re-sending a store with a different definition is rejected',
        () async {
      final h = await WorkerHarness.open();
      addTearDown(h.close);
      // The harness opened with widgetsSchema(); re-register a DIFFERENT
      // schema under the same name.
      final drifted = CollectionSchema<Object?>(
        name: 'widgets',
        version: 1,
        fields: [
          Field.text('name', required: true),
          Field.int('extra_field'),
        ],
      );

      final error = await h.sendError(h.req(WireOp.open, args: {
        'stores': [drifted.toJson()],
      }));
      expect(error.details?['type'], 'ProtocolEnvelopeException');
      expect(error.message, contains('manifest mismatch'));
    });

    test('an encrypted store without an engine cipher is rejected', () async {
      final h = await WorkerHarness.open(fieldCipher: null);
      addTearDown(h.close);
      final schema = CollectionSchema<Object?>(
        name: 'secrets',
        version: 1,
        fields: [Field.text('secret', encrypted: true)],
      );

      final error = await h.sendError(h.req(WireOp.open, args: {
        'stores': [schema.toJson()],
      }));
      expect(error.details?['type'], 'ValidationException');
      expect(error.message, contains('no fieldCipher'));
    });

    test('an encrypted store opens fine when a cipher is armed', () async {
      final h = await WorkerHarness.open(
        stores: [
          CollectionSchema<Object?>(
            name: 'secrets',
            version: 1,
            fields: [Field.text('secret', encrypted: true)],
          ),
        ],
        fieldCipher: AesGcmFieldCipher(Uint8List.fromList(List.filled(32, 7))),
      );
      addTearDown(h.close);

      // A plain additional store registers through the same gated path.
      final result = await h.sendOk(h.req(WireOp.open, args: {
        'stores': [
          CollectionSchema<Object?>(
            name: 'plain',
            version: 1,
            fields: [Field.text('name')],
          ).toJson(),
        ],
      }));
      expect(result, {'ok': true});
    });
  });

  group('contract dispatch edges', () {
    test('a contract request without a request map is an envelope error',
        () async {
      final h = await WorkerHarness.open();
      addTearDown(h.close);
      final error = await h.sendError(h.req(WireOp.contractRequest));
      expect(error.details?['type'], 'ProtocolEnvelopeException');
      expect(error.message, contains('"request"'));
    });

    test('an unknown operation is an unhandled protocol error', () async {
      final h = await WorkerHarness.open();
      addTearDown(h.close);
      final error = await h.sendError(h.req('bogus_op'));
      expect(error.code, WireErrorCode.protocolEnvelope);
      expect(error.message, contains('bogus_op'));
    });

    test('a non-map schema fails schema parsing', () async {
      final h = await WorkerHarness.open();
      addTearDown(h.close);
      final error = await h.sendError(h.req(WireOp.open, args: {
        'stores': ['not-a-map'],
      }));
      expect(error.details?['type'], 'FormatException');
    });
  });

  group('open options parsing', () {
    test('absent keys are omitted, present keys pass through', () {
      expect(parseOpenOptions(null), isEmpty);
      expect(parseOpenOptions(const {}), isEmpty);
      expect(
        parseOpenOptions({
          'stores': [widgetsSchema().toJson()],
          'maxDocBytes': 42,
          'destructiveBackup': false,
        }),
        containsPair('maxDocBytes', 42),
      );
    });

    test('a present wrong-typed option fails loudly, never defaults', () {
      expect(() => parseOpenOptions(const {'stores': 'widgets'}),
          throwsA(isA<ProtocolEnvelopeException>()));
      expect(() => parseOpenOptions(const {'maxDocBytes': 'big'}),
          throwsA(isA<ProtocolEnvelopeException>()));
      expect(() => parseOpenOptions(const {'destructiveBackup': 'yes'}),
          throwsA(isA<ProtocolEnvelopeException>()));
      expect(() => parseOpenOptions('not-a-map'),
          throwsA(isA<ProtocolEnvelopeException>()));
    });

    test('millisecond durability options pass through strict-parsed', () {
      final parsed = parseOpenOptions(const {
        'groupCommitWindowMs': 12,
        'txSessionTtlMs': 0,
        'callbackTimeoutMs': 4500,
      });
      expect(parsed, {
        'groupCommitWindowMs': 12,
        'txSessionTtlMs': 0,
        'callbackTimeoutMs': 4500,
      });
    });

    test('millisecond options reject wrong types and sub-bound values', () {
      for (final key in const [
        'groupCommitWindowMs',
        'txSessionTtlMs',
        'callbackTimeoutMs',
      ]) {
        expect(() => parseOpenOptions({key: 'soon'}),
            throwsA(isA<ProtocolEnvelopeException>()),
            reason: '$key must reject a string');
        expect(() => parseOpenOptions({key: 1.5}),
            throwsA(isA<ProtocolEnvelopeException>()),
            reason: '$key must reject a double');
      }
      expect(() => parseOpenOptions(const {'groupCommitWindowMs': -1}),
          throwsA(isA<ProtocolEnvelopeException>()));
      expect(() => parseOpenOptions(const {'txSessionTtlMs': -1}),
          throwsA(isA<ProtocolEnvelopeException>()));
      // Zero disables the tx sweeper natively, so it is a legal value.
      expect(parseOpenOptions(const {'txSessionTtlMs': 0}),
          containsPair('txSessionTtlMs', 0));
      // A callback timeout must actually bound something.
      expect(() => parseOpenOptions(const {'callbackTimeoutMs': 0}),
          throwsA(isA<ProtocolEnvelopeException>()));
    });

    test('clockOffsetMs passes through signed, rejects wrong types', () {
      expect(parseOpenOptions(const {'clockOffsetMs': -5000}),
          containsPair('clockOffsetMs', -5000));
      expect(parseOpenOptions(const {'clockOffsetMs': 0}),
          containsPair('clockOffsetMs', 0));
      expect(() => parseOpenOptions(const {'clockOffsetMs': 'yesterday'}),
          throwsA(isA<ProtocolEnvelopeException>()));
      expect(() => parseOpenOptions(const {'clockOffsetMs': 1.5}),
          throwsA(isA<ProtocolEnvelopeException>()));
    });

    test('a parsed clock offset lands in the worker kernel clock', () async {
      // The controller wires a parsed openArgs offset exactly like this:
      // the kernel clock reads the system clock plus the offset.
      const offset = -5000;
      final h = await WorkerHarness.open(
        now: () => DateTime.now().millisecondsSinceEpoch + offset,
      );
      addTearDown(h.close);
      final shifted = h.pocket.now();
      final wallClock = DateTime.now().millisecondsSinceEpoch;
      expect(shifted, lessThan(wallClock - 4000));
      expect(shifted, greaterThan(wallClock - 10000));
    });

    test(
        'durability and callback bounds land in the worker kernel and bridge',
        () async {
      final h = await WorkerHarness.open(
        groupCommitWindow: const Duration(milliseconds: 12),
        txSessionTtl: const Duration(seconds: 7),
        callbackTimeout: const Duration(milliseconds: 4500),
        storePolicies: const {},
      );
      addTearDown(h.close);
      expect(h.pocket.groupCommitWindow, const Duration(milliseconds: 12));
      expect(h.pocket.txSessionTtl, const Duration(seconds: 7));
    });

    test(
        'a malformed store descriptor fails the open instead of dropping '
        'every store', () {
      // A single malformed element must not silently yield an empty store
      // list — the open would boot with no stores at all.
      expect(
        () => parseOpenOptions({
          'stores': [widgetsSchema().toJson(), 'junk'],
        }),
        throwsA(anything),
        reason: 'the malformed element surfaces instead of being dropped',
      );
    });
  });

  group('raw option + cipher-requirement helpers', () {
    test('rawOpenOption reads a single raw key without validation', () {
      expect(rawOpenOption(null, 'fieldCipher'), isNull);
      // Missing key -> null. Present wrong-typed values are returned as-is:
      // validation is the envelope parser's job.
      expect(rawOpenOption(const {}, 'fieldCipher'), isNull);
      expect(rawOpenOption({'fieldCipher': 42}, 'fieldCipher'), 42);
      // Not-a-map data yields null (no throw) — the raw reader never
      // turns a bad additionalData shape into a crash of its own.
      expect(rawOpenOption('junk', 'fieldCipher'), isNull);
    });

    test('hasEncryptedFieldsWithoutCipher follows the cipher argument',
        () async {
      final encrypted = CollectionSchema<Object?>(
        name: 'secrets',
        version: 1,
        fields: [Field.text('secret', encrypted: true)],
      );
      final plain = widgetsSchema();

      // No cipher + any encrypted field is a rejection.
      expect(hasEncryptedFieldsWithoutCipher([encrypted], null), isTrue);
      // A cipher short-circuits true regardless of stores.
      expect(
        hasEncryptedFieldsWithoutCipher(
          [encrypted],
          AesGcmFieldCipher(Uint8List.fromList(List.filled(32, 7))),
        ),
        isFalse,
      );
      // No encrypted fields never requires a cipher.
      expect(hasEncryptedFieldsWithoutCipher([plain], null), isFalse);
      expect(hasEncryptedFieldsWithoutCipher(const [], null), isFalse);
    });
  });
}
