part of 'contract.dart';

/// A typed mutation command for one store. Records remain the wire-safe data
/// language of the raw surface; the typed write layer lowers its writes into
/// these variants.
sealed class Mutation {
  const Mutation();
}

final class MutationPut extends Mutation {
  const MutationPut(this.record);
  final Map<String, Object?> record;
}

final class MutationUpsert extends Mutation {
  const MutationUpsert(this.record);
  final Map<String, Object?> record;
}

final class MutationPutAll extends Mutation {
  const MutationPutAll(this.records);
  final List<Map<String, Object?>> records;
}

final class MutationUpsertAll extends Mutation {
  const MutationUpsertAll(this.records);
  final List<Map<String, Object?>> records;
}

final class MutationPatch extends Mutation {
  const MutationPatch(this.id, this.changes);
  final String id;
  final Map<String, Object?> changes;
}

final class MutationPatchAll extends Mutation {
  const MutationPatchAll(this.patches);
  final Map<String, Map<String, Object?>> patches;
}

final class MutationArchive extends Mutation {
  const MutationArchive(this.id);
  final String id;
}

final class MutationRestore extends Mutation {
  const MutationRestore(this.id);
  final String id;
}

final class MutationPurge extends Mutation {
  const MutationPurge(this.id);
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
