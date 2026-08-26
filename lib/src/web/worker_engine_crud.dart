/// Part of `worker_engine.dart` — collection CRUD + store registration.
///
/// Wire handlers for the single-record read (`get`), the batched-mutation
/// envelope (`mutate_batch` — single-op fast path and multi-op transaction
/// path), and `open` (registering additional stores over the wire).
///
/// These are thin adapters over the core `Collection` API. The mutation
/// action vocabulary lives in `WorkerEngineHost._applyMutation` (main file)
/// so `mutate_batch` and `tx_mutate_batch` share one implementation and
/// cannot drift apart.
part of 'worker_engine.dart';

/// CRUD + store-registration handlers (see the file doc above).
mixin WorkerCrudHandlers on WorkerEngineHost {
  Future<Object?> _handleGet(WorkerEventSink sink, WebRequest req) async {
    final w = WireArgs(req.args);
    final store = w.requireString('store', op: 'get');
    final id = w.requireString('id', op: 'get');
    final col = pocket.collection(store);
    final doc = await col.get(id);
    return encodeWireValue(doc);
  }

  Future<Object?> _handleMutateBatch(
      WorkerEventSink sink, WebRequest req) async {
    final w = WireArgs(req.args);
    final store = w.requireString('store', op: 'mutate_batch');
    final mutations = w.requireList('mutations', op: 'mutate_batch');
    final durability =
      _parseDurability(w.optionalString('durability'), op: 'mutate_batch');

    // Fast path: a lone mutation at the default durability class skips the
    // transaction machinery entirely. Any explicit durability request must
    // ride the transaction path below so its synchronous mode is honored.
    if (mutations.length == 1 && durability == DurabilityClass.normal) {
      await _applyMutation(pocket.collection(store), mutations.first);
      return {'ok': true};
    }

    await pocket.transaction((tx) async {
      final txCol = tx.collection(store);
      for (final m in mutations) {
        await _applyMutation(txCol, m);
      }
    }, durability: durability);
    return {'ok': true};
  }

  /// Parses the optional wire `durability` argument (`"normal"` / `"full"`).
  /// Absent means [DurabilityClass.normal]; an unrecognized value is a typed
  /// protocol error, never a silent fallback.
  DurabilityClass _parseDurability(String? raw, {required String op}) {
    switch (raw) {
      case null:
        return DurabilityClass.normal;
      case 'normal':
        return DurabilityClass.normal;
      case 'full':
        return DurabilityClass.full;
      default:
        throw ProtocolEnvelopeException(
            'Invalid "$op" durability argument: expected "normal" or "full", '
            'got "$raw".');
    }
  }

  Future<Object?> _handleOpen(WorkerEventSink sink, WebRequest req) async {
    final storesRaw = WireArgs(req.args).optionalList('stores');
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
        if (!pocket.storeNames.contains(schema.name)) {
          await pocket.registerStore(schema);
        }
      }
    }
    return {'ok': true};
  }
}
