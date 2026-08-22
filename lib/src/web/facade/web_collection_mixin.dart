import 'package:localpocket/src/web/conversions.dart';
import 'package:localpocket/src/web/facade/facade_host.dart';

/// Shared wire-CRUD surface for the main-thread collection proxies.
///
/// [WebCollection] (top-level) and [WebTxCollection] (transaction-bound) send
/// the same request envelopes; only the wire op names and the optional
/// [sessionId] differ. Keeping the CRUD bodies here means a new mutation is
/// added once, never twice.
mixin WireCollectionMixin {
  /// The facade host used to send wire requests.
  WebFacadeHost get pocket;

  /// Collection name carried in every envelope.
  String get name;

  /// Single-record read op (`WireOp.get` or `WireOp.txGet`).
  String get getOp;

  /// Batched-mutation op (`WireOp.mutateBatch` or `WireOp.txMutateBatch`).
  String get mutateOp;

  /// Transaction session id included in every envelope, or null when this
  /// collection is not bound to a transaction session.
  int? get sessionId => null;

  Map<String, Object?> _envelope() => {
        if (sessionId != null) 'sessionId': sessionId,
        'store': name,
      };

  /// Reads the record with [id], or null when absent.
  Future<Map<String, Object?>?> get(String id) async {
    final res = await pocket.send(getOp, {..._envelope(), 'id': id});
    if (res == null) return null;
    final decoded = decodeWireValue(res);
    if (decoded is Map) {
      return decoded.map((k, v) => MapEntry(k.toString(), v));
    }
    return null;
  }

  /// Inserts or replaces [record].
  Future<void> put(Map<String, Object?> record) => _sendMutations([
        {'action': 'put', 'record': encodeWireValue(record)}
      ]);

  /// Inserts or replaces [records] in one batch.
  Future<void> putAll(List<Map<String, Object?>> records) => _sendMutations([
        for (final record in records)
          {'action': 'put', 'record': encodeWireValue(record)}
      ]);

  /// Applies a partial update to the record with [id].
  Future<void> patch(String id, Map<String, Object?> changes) =>
      _sendMutations([
        {'action': 'patch', 'id': id, 'record': encodeWireValue(changes)}
      ]);

  /// Applies partial updates to many records in one batched request.
  Future<void> patchAll(Map<String, Map<String, Object?>> patches) =>
      _sendMutations([
        for (final e in patches.entries)
          {'action': 'patch', 'id': e.key, 'record': encodeWireValue(e.value)}
      ]);

  /// Archives the record with [id].
  Future<void> archive(String id) => _sendMutations([
        {'action': 'archive', 'id': id}
      ]);

  /// Restores the archived record with [id].
  Future<void> restore(String id) => _sendMutations([
        {'action': 'restore', 'id': id}
      ]);

  /// Hard-deletes the record with [id] and its metadata.
  Future<void> purge(String id) => _sendMutations([
        {'action': 'purge', 'id': id}
      ]);

  Future<void> _sendMutations(List<Map<String, Object?>> mutations) =>
      pocket.send(mutateOp, {..._envelope(), 'mutations': mutations});
}
