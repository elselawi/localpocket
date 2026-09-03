/// The kernel mutation owner: the named entry points for the local mutation
/// path (validation, payload construction, base capture, outbox/sync-row
/// atomicity, event buffering). Command handlers call this, not the
/// collection.
library;

import 'kernel_context.dart';
import 'store.dart';

/// {@template localpocket.mutation_service}
/// The kernel mutation owner.
/// {@endtemplate}
class MutationService {
  /// Internal: constructed by [KernelDatabase].
  ///
  /// {@macro localpocket.mutation_service}
  MutationService(this.context);

  /// The shared kernel dependencies.
  final KernelContext context;

  /// Creates a record (create-or-replace).
  Future<void> put(Collection col, Map<String, Object?> record) =>
      col.mutateDirect(MutationAction.createOrUpdate, record: record);

  /// Creates a record, or merges the given fields into the existing record.
  Future<void> upsert(Collection col, Map<String, Object?> record) =>
      col.mutateDirect(MutationAction.createOrUpdateMerge, record: record);

  /// Atomically inserts or updates a list of records (one transaction).
  Future<void> putAll(Collection col, List<Map<String, Object?>> records) =>
      col.putAllDirect(records);

  /// Atomically inserts or merges a list of records (one transaction).
  Future<void> upsertAll(Collection col, List<Map<String, Object?>> records) =>
      col.putAllDirect(records, action: MutationAction.createOrUpdateMerge);

  /// Applies partial updates to an existing record.
  Future<void> patch(Collection col, String id, Map<String, Object?> changes,
          {bool coalesceChanges = false}) =>
      col.patchDirect(id, changes, coalesceChanges: coalesceChanges);

  /// Applies partial updates to many records in one transaction.
  Future<void> patchAll(
          Collection col, Map<String, Map<String, Object?>> patches) =>
      col.patchAllDirect(patches);

  /// Soft-deletes (or drops a never-synced record per schema policy).
  Future<void> archive(Collection col, String id) =>
      col.mutateDirect(MutationAction.archive, id: id);

  /// Removes the archive flag.
  Future<void> restore(Collection col, String id) =>
      col.mutateDirect(MutationAction.restore, id: id);

  /// Hard-deletes a local record and its file references.
  Future<void> purge(Collection col, String id) => col.purgeDirect(id);
}
