import 'package:localpocket/src/contract/contract.dart' as contract;
import 'package:localpocket/src/core/local_pocket.dart' show DurabilityClass;
import 'package:localpocket/src/web/facade/facade_host.dart';

/// Typed-contract CRUD surface for the main-thread collection proxy.
///
/// Every read and mutation rides one contract envelope through the shared
/// [WebFacadeHost.contractRuntime]; the kernel compiles nothing and owns the
/// commit boundary — the root path lets the kernel's collection mutators open
/// their own transaction. An explicit [DurabilityClass.full] request begins a
/// contract transaction session so the commit runs at the requested
/// durability class (`synchronous=FULL`), exactly as the native root path
/// does.
mixin WebContractCrudForwarder {
  /// The facade host used to reach the shared contract runtime.
  WebFacadeHost get pocket;

  /// Collection name carried in every request.
  String get name;

  /// Reads the record with [id], or null when absent.
  Future<Map<String, Object?>?> get(String id) async =>
      (await pocket.contractRuntime
              .send(contract.GetRequest(store: name, id: id)))
          .row;

  /// Inserts or replaces [record].
  ///
  /// Mirrors native `Collection.put`: [durability] selects the commit's
  /// durability class (`DurabilityClass.normal` by default,
  /// `DurabilityClass.full` when the write must survive an OS/power loss).
  Future<void> put(Map<String, Object?> record,
          {DurabilityClass durability = DurabilityClass.normal}) =>
      _send(contract.MutationPut(record), durability);

  /// Inserts or replaces [records] in one batch.
  ///
  /// Mirrors native `Collection.putAll` (see [put] for [durability]).
  Future<void> putAll(List<Map<String, Object?>> records,
          {DurabilityClass durability = DurabilityClass.normal}) =>
      _send(contract.MutationPutAll(records), durability);

  /// Inserts or merges [record] into the record with the same id.
  ///
  /// Mirrors native `Collection.upsert`: only the fields present in [record]
  /// change and the record is created when absent (see [put] for
  /// [durability]).
  Future<void> upsert(Map<String, Object?> record,
          {DurabilityClass durability = DurabilityClass.normal}) =>
      _send(contract.MutationUpsert(record), durability);

  /// Inserts or merges [records] in one batch.
  ///
  /// Mirrors native `Collection.upsertAll` (see [put] for [durability]).
  Future<void> upsertAll(List<Map<String, Object?>> records,
          {DurabilityClass durability = DurabilityClass.normal}) =>
      _send(contract.MutationUpsertAll(records), durability);

  /// Applies a partial update to the record with [id].
  ///
  /// Mirrors native `Collection.patch` (see [put] for [durability]).
  Future<void> patch(String id, Map<String, Object?> changes,
          {DurabilityClass durability = DurabilityClass.normal}) =>
      _send(contract.MutationPatch(id, changes), durability);

  /// Applies partial updates to many records in one batched request.
  ///
  /// Mirrors native `Collection.patchAll` (see [put] for [durability]).
  Future<void> patchAll(Map<String, Map<String, Object?>> patches,
          {DurabilityClass durability = DurabilityClass.normal}) =>
      _send(contract.MutationPatchAll(patches), durability);

  /// Archives the record with [id].
  ///
  /// Mirrors native `Collection.archive` (see [put] for [durability]).
  Future<void> archive(String id,
          {DurabilityClass durability = DurabilityClass.normal}) =>
      _send(contract.MutationArchive(id), durability);

  /// Restores the archived record with [id].
  ///
  /// Mirrors native `Collection.restore` (see [put] for [durability]).
  Future<void> restore(String id,
          {DurabilityClass durability = DurabilityClass.normal}) =>
      _send(contract.MutationRestore(id), durability);

  /// Hard-deletes the record with [id] and its metadata.
  ///
  /// Mirrors native `Collection.purge` (see [put] for [durability]).
  Future<void> purge(String id,
          {DurabilityClass durability = DurabilityClass.normal}) =>
      _send(contract.MutationPurge(id), durability);

  Future<void> _send(contract.Mutation mutation, DurabilityClass durability) {
    if (durability == DurabilityClass.normal) {
      return pocket.contractRuntime
          .send(contract.MutateRequest(store: name, mutation: mutation));
    }
    return _sendDurable(mutation);
  }

  /// Commits [mutation] inside a contract transaction session at
  /// [DurabilityClass.full]. The session is always settled: a mutation or
  /// commit failure rolls back before the error is rethrown.
  Future<void> _sendDurable(contract.Mutation mutation) async {
    final session = (await pocket.contractRuntime.send(
      const contract.TransactionBeginRequest(
        readOnly: false,
        durability: contract.TransactionDurability.full,
      ),
    ))
        .session;
    try {
      await pocket.contractRuntime.send(contract.MutateRequest(
        store: name,
        mutation: mutation,
        session: session,
      ));
      await pocket.contractRuntime
          .send(contract.TransactionCommitRequest(session: session));
    } catch (e) {
      try {
        await pocket.contractRuntime
            .send(contract.TransactionRollbackRequest(session: session));
      } catch (_) {
        // The rollback attempt must never mask the original failure.
      }
      rethrow;
    }
  }
}
