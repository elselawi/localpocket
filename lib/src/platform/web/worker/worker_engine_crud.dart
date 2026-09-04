/// Part of `worker_engine.dart` — store registration over the wire.
///
/// The `open` handler registers additional stores and verifies the
/// page-computed manifest fingerprint. Collection CRUD has no dedicated
/// handlers: reads and mutations travel as typed contract requests answered
/// directly by the kernel command handler; the mutation action vocabulary
/// shared with `tx_mutate_batch` lives in `WorkerEngineHost._applyMutation`.
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
    final storePolicies = _parseStorePolicies(req.args);
    if (storesRaw != null) {
      for (final s in storesRaw) {
        var schema = parseSchema(s);
        schema = attachStorePolicy(
          schema,
          storePolicies[schema.name],
          invoker: callbackBridge,
        );
        // Never register an encrypted store without an engine cipher — the
        // facade already rejects this at open.
        final hasEncrypted = schema.fields.any((f) => f.encrypted);
        if (hasEncrypted && pocket.fieldCipher == null) {
          throw ValidationException(
              'Store "${schema.name}" declares encrypted fields but no '
              'fieldCipher was provided.');
        }
        // The open handshake validates the manifest BEFORE any registration:
        // the page-computed fingerprint must match the worker's compilation
        // (both runtimes provably mean the same schema), and unsupported
        // features fail in registerStore — all before any DDL.
        final manifest = SchemaManifest.compile(schema);
        final expected = expectedFingerprints[schema.name];
        if (expected != null && expected != manifest.fingerprint) {
          throw ProtocolEnvelopeException(
              'Schema manifest mismatch for "${schema.name}": the page and '
              'the worker compiled different schemas.');
        }
        if (!pocket.storeNames.contains(schema.name)) {
          await pocket.schemaService.registerStore(schema);
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

  /// Parses the optional `storePolicies` argument: store name → envelope.
  Map<String, Object?> _parseStorePolicies(Map<String, Object?> args) {
    final raw = args['storePolicies'];
    if (raw == null) return const {};
    if (raw is! Map) {
      throw ProtocolEnvelopeException('"storePolicies" must be a map.');
    }
    return {
      for (final e in raw.entries)
        e.key.toString(): _requireEnvelope(e.value, e.key.toString()),
    };
  }

  Map<String, Object?> _requireEnvelope(Object? raw, String store) {
    if (raw is! Map) {
      throw ProtocolEnvelopeException(
          'The store policy for "$store" must be a map.');
    }
    return deepStringMap(raw);
  }
}
