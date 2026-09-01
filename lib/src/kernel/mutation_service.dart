/// Part of `store.dart` — the mutation service.
///
/// [MutationService] is the named owner of the local mutation path: validation,
/// canonical payload construction, dirty-base capture, outbox/sync-row
/// atomicity, file dependencies, cache invalidation, and committed event
/// buffering. The implementation is the existing private pipeline on
/// [Collection] (moved to this ownership without changing SQL or event
/// semantics); command handlers call THIS service rather than the collection.
part of 'store.dart';

/// The kernel mutation owner.
class MutationService {
  /// Internal: constructed by [KernelDatabase].
  MutationService(this.context);

  /// The shared kernel dependencies.
  final KernelContext context;

  /// Creates a record (create-or-replace).
  Future<void> put(Collection col, Map<String, Object?> record) =>
      col._mutate(MutationAction.createOrUpdate, record: record);

  /// Creates a record, or merges the given fields into the existing record.
  Future<void> upsert(Collection col, Map<String, Object?> record) =>
      col._mutate(MutationAction.createOrUpdateMerge, record: record);

  /// Atomically inserts or updates a list of records (one transaction).
  Future<void> putAll(Collection col, List<Map<String, Object?>> records) =>
      col._putAll(records);

  /// Atomically inserts or merges a list of records (one transaction).
  Future<void> upsertAll(Collection col, List<Map<String, Object?>> records) =>
      col._putAll(records, action: MutationAction.createOrUpdateMerge);

  /// Applies partial updates to an existing record.
  Future<void> patch(Collection col, String id, Map<String, Object?> changes,
          {bool coalesceChanges = false}) =>
      col._patch(id, changes, coalesceChanges: coalesceChanges);

  /// Applies partial updates to many records in one transaction.
  Future<void> patchAll(
          Collection col, Map<String, Map<String, Object?>> patches) =>
      col._patchAll(patches);

  /// Soft-deletes (or drops a never-synced record per schema policy).
  Future<void> archive(Collection col, String id) =>
      col._mutate(MutationAction.archive, id: id);

  /// Removes the archive flag.
  Future<void> restore(Collection col, String id) =>
      col._mutate(MutationAction.restore, id: id);

  /// Hard-deletes a local record and its file references.
  Future<void> purge(Collection col, String id) => col._purge(id);
}
