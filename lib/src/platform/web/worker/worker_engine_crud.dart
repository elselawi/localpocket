/// Part of `worker_engine.dart` — store registration over the wire.
///
/// The `open` handler registers additional stores and verifies the
/// page-computed schema manifest fingerprint. Collection CRUD has no
/// dedicated handlers: reads and mutations travel as typed contract
/// requests (`contract_request`) and the kernel command handler answers
/// them directly. The mutation action vocabulary shared with
/// `tx_mutate_batch` lives in `WorkerEngineHost._applyMutation` (main file).
part of 'worker_engine.dart';

/// Store-registration handlers (see the file doc above).
mixin WorkerCrudHandlers on WorkerEngineHost {
  Future<Object?> _handleOpen(WorkerEventSink sink, WebRequest req) async {
    final storesRaw = WireArgs(req.args).optionalList('stores');
    final fingerprintsRaw = req.args['manifestFingerprints'];
    final expectedFingerprints = <String, String>{};
    if (fingerprintsRaw is Map) {
      fingerprintsRaw.forEach((k, v) {
        if (k is String && v is String) expectedFingerprints[k] = v;
      });
    }
    if (storesRaw != null) {
      for (final s in storesRaw) {
        final schema = parseSchema(s);
        // Defense in depth: never register an encrypted store when the engine
        // has no field cipher — the facade already rejects this at open.
        final hasEncrypted = schema.fields.any((f) => f.encrypted);
        if (hasEncrypted && pocket.fieldCipher == null) {
          throw ValidationException(
              'Store "${schema.name}" declares encrypted fields but no '
              'fieldCipher was provided.');
        }
        // The open handshake validates the schema
        // manifest BEFORE any registration — the page-computed fingerprint
        // must match the worker's own compilation (so both runtimes provably
        // mean the same schema), and unsupported executable features fail in
        // registerStore on the web runtime — all before any DDL.
        final manifest = SchemaManifest.compile(schema);
        final expected = expectedFingerprints[schema.name];
        if (expected != null && expected != manifest.fingerprint) {
          throw ProtocolEnvelopeException(
              'Schema manifest mismatch for "${schema.name}": the page and '
              'the worker compiled different schemas.');
        }
        if (!pocket.storeNames.contains(schema.name)) {
          await pocket.registerStore(schema);
        } else {
          // Re-sent store: the definition must still match what the worker
          // already registered.
          final registered = pocket.requireTable(schema.name).manifest;
          if (registered.fingerprint != manifest.fingerprint) {
            throw ProtocolEnvelopeException(
                'Schema manifest mismatch for "${schema.name}".');
          }
        }
      }
    }
    return {'ok': true};
  }
}
