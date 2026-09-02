part of 'contract.dart';

/// A typed mutation command for one store. Records stay the wire-safe data
/// language; the typed write layer lowers its writes into these variants.
sealed class Mutation {
  const Mutation();
}

/// {@template localpocket.mutation_put}
/// Writes a whole record; fails when the id already exists.
/// {@endtemplate}
final class MutationPut extends Mutation {
  /// {@macro localpocket.mutation_put}
  const MutationPut(this.record);

  /// The record to create.
  final Map<String, Object?> record;
}

/// {@template localpocket.mutation_upsert}
/// Writes a whole record, creating it when the id does not exist yet.
/// {@endtemplate}
final class MutationUpsert extends Mutation {
  /// {@macro localpocket.mutation_upsert}
  const MutationUpsert(this.record);

  /// The record to write.
  final Map<String, Object?> record;
}

/// {@template localpocket.mutation_put_all}
/// Writes several whole records in one tx; fails if any id exists.
/// {@endtemplate}
final class MutationPutAll extends Mutation {
  /// {@macro localpocket.mutation_put_all}
  const MutationPutAll(this.records);

  /// The records to create.
  final List<Map<String, Object?>> records;
}

/// {@template localpocket.mutation_upsert_all}
/// Writes several whole records in one transaction, creating missing ids.
/// {@endtemplate}
final class MutationUpsertAll extends Mutation {
  /// {@macro localpocket.mutation_upsert_all}
  const MutationUpsertAll(this.records);

  /// The records to write.
  final List<Map<String, Object?>> records;
}

/// {@template localpocket.mutation_patch}
/// Merges [MutationPatch.changes] into an existing record.
/// {@endtemplate}
final class MutationPatch extends Mutation {
  /// {@macro localpocket.mutation_patch}
  const MutationPatch(this.id, this.changes);

  /// Id of the record to patch.
  final String id;

  /// Field values to merge into the record.
  final Map<String, Object?> changes;
}

/// {@template localpocket.mutation_patch_all}
/// Patches several records in one transaction (id → field changes).
/// {@endtemplate}
final class MutationPatchAll extends Mutation {
  /// {@macro localpocket.mutation_patch_all}
  const MutationPatchAll(this.patches);

  /// Record id → field values to merge.
  final Map<String, Map<String, Object?>> patches;
}

/// {@template localpocket.mutation_archive}
/// Archives a record (out of the default query scope, still synced).
/// {@endtemplate}
final class MutationArchive extends Mutation {
  /// {@macro localpocket.mutation_archive}
  const MutationArchive(this.id);

  /// Id of the record to archive.
  final String id;
}

/// {@template localpocket.mutation_restore}
/// Restores an archived record into the default query scope.
/// {@endtemplate}
final class MutationRestore extends Mutation {
  /// {@macro localpocket.mutation_restore}
  const MutationRestore(this.id);

  /// Id of the record to restore.
  final String id;
}

/// {@template localpocket.mutation_purge}
/// Hard-deletes a record together with its sync bookkeeping.
/// {@endtemplate}
final class MutationPurge extends Mutation {
  /// {@macro localpocket.mutation_purge}
  const MutationPurge(this.id);

  /// Id of the record to purge.
  final String id;
}

Map<String, Object?> _encodeMutation(Mutation m) => switch (m) {
      MutationPut(:final record) => {'kind': 'put', 'record': record},
      MutationUpsert(:final record) => {'kind': 'upsert', 'record': record},
      MutationPutAll(:final records) => {'kind': 'putAll', 'records': records},
      MutationUpsertAll(:final records) => {
          'kind': 'upsertAll',
          'records': records,
        },
      MutationPatch(:final id, :final changes) => {
          'kind': 'patch',
          'id': id,
          'changes': changes,
        },
      MutationPatchAll(:final patches) => {
          'kind': 'patchAll',
          'patches': patches
        },
      MutationArchive(:final id) => {'kind': 'archive', 'id': id},
      MutationRestore(:final id) => {'kind': 'restore', 'id': id},
      MutationPurge(:final id) => {'kind': 'purge', 'id': id},
    };

Mutation _decodeMutation(Object? raw) {
  if (raw is! Map) throw WireException('Malformed mutation payload.');
  final m = raw.map((k, v) => MapEntry(k.toString(), v));
  final kind = m['kind'];
  switch (kind) {
    case 'put':
      return MutationPut(_stringMap(m['record'], 'record'));
    case 'upsert':
      return MutationUpsert(_stringMap(m['record'], 'record'));
    case 'putAll':
      return MutationPutAll(_stringMapList(m['records'], 'records'));
    case 'upsertAll':
      return MutationUpsertAll(_stringMapList(m['records'], 'records'));
    case 'patch':
      return MutationPatch(
        _requiredString(m['id'], 'id'),
        _stringMap(m['changes'], 'changes'),
      );
    case 'patchAll':
      final patches = m['patches'];
      if (patches is! Map) throw WireException('Malformed patchAll patches.');
      return MutationPatchAll({
        for (final e in patches.entries)
          e.key.toString(): _stringMap(e.value, 'patches'),
      });
    case 'archive':
      return MutationArchive(_requiredString(m['id'], 'id'));
    case 'restore':
      return MutationRestore(_requiredString(m['id'], 'id'));
    case 'purge':
      return MutationPurge(_requiredString(m['id'], 'id'));
    default:
      throw WireException('Unknown mutation kind: $kind');
  }
}

String _requiredString(Object? v, String field) {
  if (v is String) return v;
  throw WireException('Malformed mutation field "$field".');
}

Map<String, Object?> _stringMap(Object? v, String field) {
  if (v is Map) {
    return {for (final e in v.entries) e.key.toString(): e.value};
  }
  throw WireException('Malformed mutation field "$field".');
}

List<Map<String, Object?>> _stringMapList(Object? v, String field) {
  if (v is List) {
    return [for (final e in v) _stringMap(e, field)];
  }
  throw WireException('Malformed mutation field "$field".');
}
