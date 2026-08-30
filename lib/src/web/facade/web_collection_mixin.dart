import 'package:localpocket/src/core/local_pocket.dart';
import 'package:localpocket/src/web/conversions.dart';
import 'package:localpocket/src/web/facade/facade_host.dart';

/// Wire-CRUD surface for the transaction-bound collection proxy.
///
/// The root collection speaks the typed contract
/// (`WebContractCrudForwarder`); [WebTxCollection] still lowers its
/// reads/writes to the interactive-transaction wire ops (`tx_get`,
/// `tx_mutate_batch`) because its int session id is minted by the worker's
/// tx handshake. When the transaction surface rides the contract sessions
/// (string-keyed, kernel-minted), this adapter is deleted with the ops it
/// speaks.
mixin WireCollectionMixin {
  /// The facade host used to send wire requests.
  WebFacadeHost get pocket;

  /// Collection name carried in every envelope.
  String get name;

  /// Single-record read op (`WireOp.txGet`).
  String get getOp;

  /// Batched-mutation op (`WireOp.txMutateBatch`).
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
  ///
  /// Mirrors native `Collection.put`: [durability] selects the commit's
  /// durability class (`DurabilityClass.normal` by default,
  /// `DurabilityClass.full` when the write must survive an OS/power loss).
  /// The worker applies it to the transaction that commits this batch.
  Future<void> put(Map<String, Object?> record,
          {DurabilityClass durability = DurabilityClass.normal}) =>
      _sendMutations([
        {'action': 'put', 'record': encodeWireValue(record)}
      ], durability: durability);

  /// Inserts or replaces [records] in one batch.
  ///
  /// Mirrors native `Collection.putAll` (see [put] for [durability]).
  Future<void> putAll(List<Map<String, Object?>> records,
          {DurabilityClass durability = DurabilityClass.normal}) =>
      _sendMutations([
        for (final record in records)
          {'action': 'put', 'record': encodeWireValue(record)}
      ], durability: durability);

  /// Inserts or merges [record] into the record with the same id.
  ///
  /// Mirrors native `Collection.upsert`: only the fields present in [record]
  /// change and the record is created when absent (see [put] for
  /// [durability]).
  Future<void> upsert(Map<String, Object?> record,
          {DurabilityClass durability = DurabilityClass.normal}) =>
      _sendMutations([
        {'action': 'upsert', 'record': encodeWireValue(record)}
      ], durability: durability);

  /// Inserts or merges [records] in one batch.
  ///
  /// Mirrors native `Collection.upsertAll` (see [put] for [durability]).
  Future<void> upsertAll(List<Map<String, Object?>> records,
          {DurabilityClass durability = DurabilityClass.normal}) =>
      _sendMutations([
        for (final record in records)
          {'action': 'upsert', 'record': encodeWireValue(record)}
      ], durability: durability);

  /// Applies a partial update to the record with [id].
  ///
  /// Mirrors native `Collection.patch` (see [put] for [durability]).
  Future<void> patch(String id, Map<String, Object?> changes,
          {DurabilityClass durability = DurabilityClass.normal}) =>
      _sendMutations([
        {'action': 'patch', 'id': id, 'record': encodeWireValue(changes)}
      ], durability: durability);

  /// Applies partial updates to many records in one batched request.
  ///
  /// Mirrors native `Collection.patchAll` (see [put] for [durability]).
  Future<void> patchAll(Map<String, Map<String, Object?>> patches,
          {DurabilityClass durability = DurabilityClass.normal}) =>
      _sendMutations([
        for (final e in patches.entries)
          {'action': 'patch', 'id': e.key, 'record': encodeWireValue(e.value)}
      ], durability: durability);

  /// Archives the record with [id].
  ///
  /// Mirrors native `Collection.archive` (see [put] for [durability]).
  Future<void> archive(String id,
          {DurabilityClass durability = DurabilityClass.normal}) =>
      _sendMutations([
        {'action': 'archive', 'id': id}
      ], durability: durability);

  /// Restores the archived record with [id].
  ///
  /// Mirrors native `Collection.restore` (see [put] for [durability]).
  Future<void> restore(String id,
          {DurabilityClass durability = DurabilityClass.normal}) =>
      _sendMutations([
        {'action': 'restore', 'id': id}
      ], durability: durability);

  /// Hard-deletes the record with [id] and its metadata.
  ///
  /// Mirrors native `Collection.purge` (see [put] for [durability]).
  Future<void> purge(String id,
          {DurabilityClass durability = DurabilityClass.normal}) =>
      _sendMutations([
        {'action': 'purge', 'id': id}
      ], durability: durability);

  Future<void> _sendMutations(List<Map<String, Object?>> mutations,
          {DurabilityClass durability = DurabilityClass.normal}) =>
      pocket.send(mutateOp, {
        ..._envelope(),
        'mutations': mutations,
        if (durability != DurabilityClass.normal) 'durability': durability.name,
      });
}
