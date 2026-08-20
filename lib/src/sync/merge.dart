/// 3-way merge engine, dirty-diff, and conflict resolvers.
///
/// Detection is mechanical; resolution is policy.
/// Precedence: field-level > collection-level > package default (RemoteWins).
library;

import 'dart:async';
import 'package:collection/collection.dart';

/// Deep equality helper for primitive values, maps, sets, and lists.
bool deepEquals(Object? a, Object? b) =>
    const DeepCollectionEquality().equals(a, b);

/// Computes the set of dirty field paths between [base] and [current].
///
/// For nested objects (maps), differences are reported with dot-notation
/// (e.g. `meta.sub`) as well as the root key (`meta`).
/// Arrays/lists are compared as a whole unless element identity is provided.
Set<String> computeDirtyFields(
    Map<String, Object?> base, Map<String, Object?> current) {
  final dirty = <String>{};
  final allKeys = {...base.keys, ...current.keys};
  for (final k in allKeys) {
    final bVal = base[k];
    final cVal = current[k];
    if (!deepEquals(bVal, cVal)) {
      dirty.add(k);
      if (bVal is Map && cVal is Map) {
        final bMap = Map<String, Object?>.from(bVal);
        final cMap = Map<String, Object?>.from(cVal);
        final subDirty = computeDirtyFields(bMap, cMap);
        for (final sub in subDirty) {
          dirty.add('$k.$sub');
        }
      }
    }
  }
  return dirty;
}

/// Context passed to a [ConflictResolver].
class MergeContext {
  /// Collection being merged.
  final String store;

  /// Record being merged.
  final String recordId;

  /// Shared pre-edit document.
  final Map<String, Object?> base;

  /// Current local document.
  final Map<String, Object?> local;

  /// Current remote document.
  final Map<String, Object?> remote;

  /// Local fields changed from [base].
  final Set<String> dirtyLocal;

  /// Remote fields changed from [base].
  final Set<String> dirtyRemote;

  MergeContext({
    required this.store,
    required this.recordId,
    required this.base,
    required this.local,
    required this.remote,
    Set<String>? dirtyLocal,
    Set<String>? dirtyRemote,
  })  : dirtyLocal = dirtyLocal ?? computeDirtyFields(base, local),
        dirtyRemote = dirtyRemote ?? computeDirtyFields(base, remote);
}

/// Result of a resolver or 3-way merge operation.
class MergeResult {
  /// Resulting document after resolution.
  final Map<String, Object?> merged;

  /// Whether the application must review this result.
  final bool needsReview;

  /// Optional explanation for the result.
  final String? note;

  /// Local dirty fields used during detection.
  final Set<String> dirtyLocal;

  /// Remote dirty fields used during detection.
  final Set<String> dirtyRemote;

  const MergeResult({
    required this.merged,
    this.needsReview = false,
    this.note,
    this.dirtyLocal = const {},
    this.dirtyRemote = const {},
  });
}

/// Alias for backwards compatibility.
typedef MergeOutcome = MergeResult;

/// Abstract interface for whole-record or field-level conflict resolution.
abstract class ConflictResolver {
  const ConflictResolver();

  /// Given the shared base and both sides' divergence, produces the merged record or field.
  FutureOr<MergeResult?> resolve(MergeContext ctx);
}

/// Remote wins (default): for concurrently modified fields, take remote.
class RemoteWinsResolver extends ConflictResolver {
  const RemoteWinsResolver();

  @override
  MergeResult resolve(MergeContext ctx) {
    final merged = <String, Object?>{...ctx.base, ...ctx.local, ...ctx.remote};
    return MergeResult(
      merged: merged,
      dirtyLocal: ctx.dirtyLocal,
      dirtyRemote: ctx.dirtyRemote,
    );
  }
}

/// Local wins: for concurrently modified fields, take local.
class LocalWinsResolver extends ConflictResolver {
  const LocalWinsResolver();

  @override
  MergeResult resolve(MergeContext ctx) {
    final merged = <String, Object?>{...ctx.base, ...ctx.remote, ...ctx.local};
    return MergeResult(
      merged: merged,
      dirtyLocal: ctx.dirtyLocal,
      dirtyRemote: ctx.dirtyRemote,
    );
  }
}

/// OR-set union resolver:
/// `base ∪ (local − base) ∪ (remote − base)` minus deletions from either side.
/// For list/set fields.
class SetUnionResolver extends ConflictResolver {
  const SetUnionResolver();

  @override
  MergeResult resolve(MergeContext ctx) {
    // Default whole-record pass delegates to field-level merge
    return const RemoteWinsResolver().resolve(ctx);
  }

  /// Field-level set union resolution.
  Object? resolveField(Object? baseVal, Object? localVal, Object? remoteVal) {
    final baseList = baseVal is List ? baseVal : const <Object?>[];
    final localList = localVal is List ? localVal : const <Object?>[];
    final remoteList = remoteVal is List ? remoteVal : const <Object?>[];

    final baseSet = baseList.toSet();
    final localSet = localList.toSet();
    final remoteSet = remoteList.toSet();

    final localAdded = localSet.difference(baseSet);
    final remoteAdded = remoteSet.difference(baseSet);
    final localRemoved = baseSet.difference(localSet);
    final remoteRemoved = baseSet.difference(remoteSet);

    final allRemoved = {...localRemoved, ...remoteRemoved};
    final resultSet =
        baseSet.union(localAdded).union(remoteAdded).difference(allRemoved);

    // Preserve ordered appearance
    final resultList = <Object?>[];
    for (final item in [...localList, ...remoteList, ...baseList]) {
      if (resultSet.contains(item) && !resultList.contains(item)) {
        resultList.add(item);
      }
    }
    return resultList;
  }
}

/// Counter resolver:
/// `base + (local − base) + (remote − base)`
class CounterResolver extends ConflictResolver {
  const CounterResolver();

  @override
  MergeResult resolve(MergeContext ctx) {
    return const RemoteWinsResolver().resolve(ctx);
  }

  /// Field-level counter resolution.
  num resolveField(Object? baseVal, Object? localVal, Object? remoteVal) {
    final b = (baseVal is num) ? baseVal : 0;
    final l = (localVal is num) ? localVal : 0;
    final r = (remoteVal is num) ? remoteVal : 0;

    final deltaL = l - b;
    final deltaR = r - b;
    final result = b + deltaL + deltaR;
    if (b is int && l is int && r is int) {
      return result.toInt();
    }
    return result.toDouble();
  }
}

/// Append-only resolver:
/// Concatenation with deduplication by content.
class AppendOnlyResolver extends ConflictResolver {
  const AppendOnlyResolver();

  @override
  MergeResult resolve(MergeContext ctx) {
    return const RemoteWinsResolver().resolve(ctx);
  }

  /// Field-level append-only resolution.
  Object? resolveField(Object? baseVal, Object? localVal, Object? remoteVal) {
    if (localVal is String || remoteVal is String || baseVal is String) {
      final b = (baseVal is String) ? baseVal : '';
      final l = (localVal is String) ? localVal : '';
      final r = (remoteVal is String) ? remoteVal : '';

      final parts = <String>[];
      void addPart(String s) {
        final trimmed = s.trim();
        if (trimmed.isNotEmpty && !parts.contains(trimmed)) {
          parts.add(trimmed);
        }
      }

      for (final line in b.split('\n')) {
        addPart(line);
      }
      for (final line in l.split('\n')) {
        addPart(line);
      }
      for (final line in r.split('\n')) {
        addPart(line);
      }
      return parts.join('\n');
    }

    final bList = baseVal is List ? baseVal : const <Object?>[];
    final lList = localVal is List ? localVal : const <Object?>[];
    final rList = remoteVal is List ? remoteVal : const <Object?>[];

    final result = <Object?>[];
    for (final item in [...bList, ...lList, ...rList]) {
      if (!result.any((existing) => deepEquals(existing, item))) {
        result.add(item);
      }
    }
    return result;
  }
}

/// Custom resolver wrapping a user-supplied function.
class CustomResolver extends ConflictResolver {
  /// User callback used to resolve a merge context.
  final FutureOr<MergeResult?> Function(MergeContext ctx) fn;

  /// Creates a resolver backed by [fn].
  const CustomResolver(this.fn);

  @override
  FutureOr<MergeResult?> resolve(MergeContext ctx) => fn(ctx);
}

/// MergePolicy holding resolver overrides at collection and field levels.
/// Resolver precedence and archive behavior for a three-way merge.
class MergePolicy {
  /// Optional whole-record resolver.
  final ConflictResolver? collectionResolver;

  /// Per-field resolver overrides.
  final Map<String, Object> fieldOverrides;

  /// Whether local content edits should unarchive records.
  final bool editsUnarchive;

  /// Creates a merge policy.
  const MergePolicy({
    this.collectionResolver,
    this.fieldOverrides = const {},
    this.editsUnarchive = false,
  });
}

/// Resolves a single field value given base, local, remote, and an optional field-level resolver.
Object? resolveFieldValue(
  String key,
  Object? baseVal,
  Object? localVal,
  Object? remoteVal,
  Object? resolverOrPolicy,
) {
  if (resolverOrPolicy is SetUnionResolver) {
    return resolverOrPolicy.resolveField(baseVal, localVal, remoteVal);
  }
  if (resolverOrPolicy is CounterResolver) {
    return resolverOrPolicy.resolveField(baseVal, localVal, remoteVal);
  }
  if (resolverOrPolicy is AppendOnlyResolver) {
    return resolverOrPolicy.resolveField(baseVal, localVal, remoteVal);
  }
  if (resolverOrPolicy is LocalWinsResolver) {
    return localVal;
  }
  if (resolverOrPolicy is RemoteWinsResolver) {
    return remoteVal;
  }
  if (resolverOrPolicy is ConflictResolver) {
    // If a generic resolver was passed for a field, remote wins by default
    return remoteVal;
  }
  // Package default: remote wins
  return remoteVal;
}

abstract class _ResolverAdapter {
  const _ResolverAdapter();

  FutureOr<MergeResult?> invoke(ConflictResolver resolver, MergeContext ctx);
}

class _AsyncResolverAdapter extends _ResolverAdapter {
  const _AsyncResolverAdapter();

  @override
  FutureOr<MergeResult?> invoke(ConflictResolver resolver, MergeContext ctx) =>
      resolver.resolve(ctx);
}

class _SyncResolverAdapter extends _ResolverAdapter {
  const _SyncResolverAdapter();

  @override
  FutureOr<MergeResult?> invoke(ConflictResolver resolver, MergeContext ctx) {
    final value = resolver.resolve(ctx);
    if (value is Future) {
      throw StateError(
          'Async ConflictResolver used in sync merge path; use merge3WayAsync');
    }
    return value;
  }
}

/// Canonical merge engine with async/sync resolver adapters.
class MergeEngine {
  const MergeEngine._();

  /// Runs the core merge algorithm with async custom resolvers.
  static Future<MergeResult> runAsync({
    required Map<String, Object?> base,
    required Map<String, Object?> local,
    required Map<String, Object?> remote,
    String store = '',
    String recordId = '',
    MergePolicy? policy,
  }) async {
    return await _runWithAdapter(
      base: base,
      local: local,
      remote: remote,
      store: store,
      recordId: recordId,
      policy: policy,
      adapter: const _AsyncResolverAdapter(),
    );
  }

  /// Runs the same core merge logic with sync-only custom resolvers.
  static MergeResult runSync({
    required Map<String, Object?> base,
    required Map<String, Object?> local,
    required Map<String, Object?> remote,
    String store = '',
    String recordId = '',
    MergePolicy? policy,
  }) {
    final result = _runWithAdapter(
      base: base,
      local: local,
      remote: remote,
      store: store,
      recordId: recordId,
      policy: policy,
      adapter: const _SyncResolverAdapter(),
    );
    if (result is Future<MergeResult>) {
      throw StateError(
          'Async ConflictResolver used in sync merge3Way; use merge3WayAsync');
    }
    return result;
  }

  static FutureOr<MergeResult> _runWithAdapter({
    required Map<String, Object?> base,
    required Map<String, Object?> local,
    required Map<String, Object?> remote,
    required String store,
    required String recordId,
    required MergePolicy? policy,
    required _ResolverAdapter adapter,
  }) {
    final dirtyLocal = computeDirtyFields(base, local);
    final dirtyRemote = computeDirtyFields(base, remote);

    final ctx = MergeContext(
      store: store,
      recordId: recordId,
      base: base,
      local: local,
      remote: remote,
      dirtyLocal: dirtyLocal,
      dirtyRemote: dirtyRemote,
    );

    if (policy?.collectionResolver != null) {
      MergeResult handleCustomResult(MergeResult? customRes) {
        if (customRes == null) {
          return MergeResult(
            merged: {...base, ...remote, ...local},
            needsReview: true,
            dirtyLocal: dirtyLocal,
            dirtyRemote: dirtyRemote,
            note: 'Collection resolver declined resolution',
          );
        }
        return MergeResult(
          merged: customRes.merged,
          needsReview: customRes.needsReview,
          note: customRes.note,
          dirtyLocal: dirtyLocal,
          dirtyRemote: dirtyRemote,
        );
      }

      final customResOrFuture =
          adapter.invoke(policy!.collectionResolver!, ctx);
      if (customResOrFuture is Future<MergeResult?>) {
        return customResOrFuture.then(handleCustomResult);
      }
      return handleCustomResult(customResOrFuture);
    }

    final keys = [...local.keys, ...remote.keys, ...base.keys];
    return _mergeKeyRange(
      keys: keys,
      index: 0,
      base: base,
      local: local,
      remote: remote,
      out: <String, Object?>{},
      needsReview: false,
      policy: policy,
      store: store,
      recordId: recordId,
      adapter: adapter,
      dirtyLocal: dirtyLocal,
      dirtyRemote: dirtyRemote,
    );
  }

  static FutureOr<MergeResult> _mergeKeyRange({
    required List<String> keys,
    required int index,
    required Map<String, Object?> base,
    required Map<String, Object?> local,
    required Map<String, Object?> remote,
    required Map<String, Object?> out,
    required bool needsReview,
    required MergePolicy? policy,
    required String store,
    required String recordId,
    required _ResolverAdapter adapter,
    required Set<String> dirtyLocal,
    required Set<String> dirtyRemote,
  }) {
    if (index >= keys.length) {
      if (policy?.editsUnarchive == true) {
        final nonArchiveLocalDirty =
            dirtyLocal.where((f) => f != 'archived').isNotEmpty;
        if (nonArchiveLocalDirty && out['archived'] == true) {
          out['archived'] = false;
        }
      }
      return MergeResult(
        merged: out,
        needsReview: needsReview,
        dirtyLocal: dirtyLocal,
        dirtyRemote: dirtyRemote,
      );
    }

    final k = keys[index];
    final l = local[k];
    final r = remote[k];
    final b = base[k];

    if (k == 'archived') {
      final bArch = b == true;
      final lArch = l == true;
      final rArch = r == true;
      if (lArch == rArch) {
        out[k] = lArch;
      } else if (lArch == bArch) {
        out[k] = rArch;
      } else if (rArch == bArch) {
        out[k] = lArch;
      } else {
        final fieldOverride = policy?.fieldOverrides[k];
        if (fieldOverride != null) {
          out[k] = resolveFieldValue(k, b, l, r, fieldOverride);
        } else {
          out[k] = rArch;
        }
      }
      return _mergeKeyRange(
        keys: keys,
        index: index + 1,
        base: base,
        local: local,
        remote: remote,
        out: out,
        needsReview: needsReview,
        policy: policy,
        store: store,
        recordId: recordId,
        adapter: adapter,
        dirtyLocal: dirtyLocal,
        dirtyRemote: dirtyRemote,
      );
    }

    if (deepEquals(l, r)) {
      out[k] = l;
      return _mergeKeyRange(
        keys: keys,
        index: index + 1,
        base: base,
        local: local,
        remote: remote,
        out: out,
        needsReview: needsReview,
        policy: policy,
        store: store,
        recordId: recordId,
        adapter: adapter,
        dirtyLocal: dirtyLocal,
        dirtyRemote: dirtyRemote,
      );
    }

    if (deepEquals(l, b)) {
      out[k] = r;
      return _mergeKeyRange(
        keys: keys,
        index: index + 1,
        base: base,
        local: local,
        remote: remote,
        out: out,
        needsReview: needsReview,
        policy: policy,
        store: store,
        recordId: recordId,
        adapter: adapter,
        dirtyLocal: dirtyLocal,
        dirtyRemote: dirtyRemote,
      );
    }

    if (deepEquals(r, b)) {
      out[k] = l;
      return _mergeKeyRange(
        keys: keys,
        index: index + 1,
        base: base,
        local: local,
        remote: remote,
        out: out,
        needsReview: needsReview,
        policy: policy,
        store: store,
        recordId: recordId,
        adapter: adapter,
        dirtyLocal: dirtyLocal,
        dirtyRemote: dirtyRemote,
      );
    }

    final fieldOverride = policy?.fieldOverrides[k];
    if (fieldOverride != null) {
      if (fieldOverride is CustomResolver) {
        final fieldCtx = MergeContext(
          store: store,
          recordId: recordId,
          base: {k: b},
          local: {k: l},
          remote: {k: r},
          dirtyLocal: {k},
          dirtyRemote: {k},
        );
        final fieldResOrFuture = adapter.invoke(fieldOverride, fieldCtx);
        if (fieldResOrFuture is Future<MergeResult?>) {
          return fieldResOrFuture.then((fieldRes) {
            var nextNeedsReview = needsReview;
            if (fieldRes == null || fieldRes.needsReview) {
              nextNeedsReview = true;
              out[k] = r;
            } else {
              out[k] = fieldRes.merged[k];
            }
            return _mergeKeyRange(
              keys: keys,
              index: index + 1,
              base: base,
              local: local,
              remote: remote,
              out: out,
              needsReview: nextNeedsReview,
              policy: policy,
              store: store,
              recordId: recordId,
              adapter: adapter,
              dirtyLocal: dirtyLocal,
              dirtyRemote: dirtyRemote,
            );
          });
        }

        final fieldRes = fieldResOrFuture;
        var nextNeedsReview = needsReview;
        if (fieldRes == null || fieldRes.needsReview) {
          nextNeedsReview = true;
          out[k] = r;
        } else {
          out[k] = fieldRes.merged[k];
        }
        return _mergeKeyRange(
          keys: keys,
          index: index + 1,
          base: base,
          local: local,
          remote: remote,
          out: out,
          needsReview: nextNeedsReview,
          policy: policy,
          store: store,
          recordId: recordId,
          adapter: adapter,
          dirtyLocal: dirtyLocal,
          dirtyRemote: dirtyRemote,
        );
      }

      out[k] = resolveFieldValue(k, b, l, r, fieldOverride);
      return _mergeKeyRange(
        keys: keys,
        index: index + 1,
        base: base,
        local: local,
        remote: remote,
        out: out,
        needsReview: needsReview,
        policy: policy,
        store: store,
        recordId: recordId,
        adapter: adapter,
        dirtyLocal: dirtyLocal,
        dirtyRemote: dirtyRemote,
      );
    }

    out[k] = r;
    return _mergeKeyRange(
      keys: keys,
      index: index + 1,
      base: base,
      local: local,
      remote: remote,
      out: out,
      needsReview: needsReview,
      policy: policy,
      store: store,
      recordId: recordId,
      adapter: adapter,
      dirtyLocal: dirtyLocal,
      dirtyRemote: dirtyRemote,
    );
  }
}

/// 3-way merge over top-level and nested keys:
///
/// ```
/// for key in union(local, remote, base):
///   l == r -> l
///   l == b -> r          # only remote changed
///   r == b -> l          # only local changed
///   else   -> resolver(collection, key).resolve(l, r, b)   # both changed
/// ```
///
/// Precedence: field-level override > collection-level resolver > package default (RemoteWins).
FutureOr<MergeResult> merge3WayAsync({
  required Map<String, Object?> base,
  required Map<String, Object?> local,
  required Map<String, Object?> remote,
  String store = '',
  String recordId = '',
  MergePolicy? policy,
}) {
  return MergeEngine.runAsync(
    base: base,
    local: local,
    remote: remote,
    store: store,
    recordId: recordId,
    policy: policy,
  );
}

/// Synchronous 3-way merge wrapper (for non-async resolver chains or legacy calls).
MergeResult merge3Way({
  required Map<String, Object?> base,
  required Map<String, Object?> local,
  required Map<String, Object?> remote,
  String store = '',
  String recordId = '',
  MergePolicy? policy,
}) {
  return MergeEngine.runSync(
    base: base,
    local: local,
    remote: remote,
    store: store,
    recordId: recordId,
    policy: policy,
  );
}
