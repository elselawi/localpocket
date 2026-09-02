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
      expect(error.message, contains('different schemas'));
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
}
