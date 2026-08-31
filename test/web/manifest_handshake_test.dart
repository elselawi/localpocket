import 'package:localpocket/localpocket.dart';
import 'package:localpocket/src/contract/contract.dart' as contract;
import 'package:localpocket/src/core/schema_manifest.dart';
import 'package:localpocket/src/web/conversions.dart';
import 'package:localpocket/src/web/protocol.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import 'support/worker_harness.dart';

/// Worker open handshake.
///
/// The worker validates the schema manifest BEFORE any registration:
/// unsupported executable features fail with `UnsupportedSchemaFeatureError`
/// on the worker runtime, and the page-computed manifest fingerprint must
/// match the worker's own compilation — the two runtimes provably mean the
/// same schema. Capabilities returned by the worker remain authoritative.
void main() {
  test('open with matching manifest fingerprints succeeds', () async {
    final h = await WorkerHarness.open(stores: []);
    addTearDown(h.close);

    final schema = widgetsSchema(name: 'handshake');
    final manifest = SchemaManifest.compile(schema);
    final result = (await h.sendOk(h.req(WireOp.open, args: {
      'stores': [schema.toJson()],
      'manifestFingerprints': {schema.name: manifest.fingerprint},
    })))! as Map<String, Object?>;
    expect(result['ok'], isTrue);
    expect(h.pocket.requireTable('handshake').manifest.store, 'handshake');
  });

  test('open with a MISMATCHED manifest fingerprint is rejected', () async {
    final h = await WorkerHarness.open(stores: []);
    addTearDown(h.close);

    final schema = widgetsSchema(name: 'mismatch');
    await h.sendError(h.req(WireOp.open, args: {
      'stores': [schema.toJson()],
      'manifestFingerprints': {schema.name: 'deadbeef'},
    }));
  });

  test('a callback-carrying schema cannot cross the wire (parity enforced)',
      () async {
    final h = await WorkerHarness.open(
      stores: [],
      platform: PlatformProfile.web,
    );
    addTearDown(h.close);

    final schema = CollectionSchema<Object?>(
      name: 'callbacks',
      version: 1,
      fields: [Field.text('name')],
      conflictPolicy:
          ConflictPolicy(collectionResolver: CustomResolver((ctx) => null)),
    );
    // Schema JSON cannot carry the resolver, so the worker compiles a
    // DIFFERENT manifest than the page sent: the handshake rejects the
    // mismatch instead of silently running a reduced schema. (The typed
    // UnsupportedSchemaFeatureError is thrown by the facade/local open
    // before any wire traffic; the worker-side registerStore check enforces
    // the same policy for the real web runtime.)
    final err = await h.sendError(h.req(WireOp.open, args: {
      'stores': [schema.toJson()],
      'manifestFingerprints': {
        schema.name: SchemaManifest.compile(schema).fingerprint,
      },
    }));
    expect(err.details?['type'], 'ProtocolEnvelopeException');
    expect(err.message, contains('Schema manifest mismatch'));
    // Nothing was registered: rejection happened before any schema mutation.
    expect(h.pocket.storeNames, isEmpty);
  });

  test('re-sending a store with a DIFFERENT definition over the wire fails',
      () async {
    final schema = widgetsSchema(name: 'resent');
    final h = await WorkerHarness.open(stores: [schema]);
    addTearDown(h.close);

    final drifted = widgetsSchema(
      name: 'resent',
      extraFields: [Field.text('extra_field')],
    );
    await h.sendError(h.req(WireOp.open, args: {
      'stores': [drifted.toJson()],
    }));
  });

  test('worker capabilities remain authoritative after the handshake',
      () async {
    final h = await WorkerHarness.open();
    addTearDown(h.close);
    final caps = await h.runtime.send(const contract.CapabilitiesRequest());
    expect(caps.sqliteVersion, isA<String>());
  });

  test('encoded wire values survive the fingerprint map round-trip', () {
    final schema = widgetsSchema(name: 'wire');
    final manifest = SchemaManifest.compile(schema);
    // The facade encodes the whole args map through encodeWireValue; the
    // fingerprint strings must survive untouched.
    final encoded = encodeWireValue(manifest.fingerprint);
    expect(decodeWireValue(encoded), manifest.fingerprint);
  });
}
