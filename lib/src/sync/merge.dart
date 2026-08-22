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
      if (bVal is Map &&
          cVal is Map &&
          bVal.keys.every((k) => k is String) &&
          cVal.keys.every((k) => k is String)) {
        // Only recurse into String-keyed maps; a non-JSON map (e.g. int keys)
        // is treated atomically instead of crashing `Map<String, Object?>.from`.
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

/// Three-way conservative field-by-field merge used when a collection resolver
/// declines resolution.
///
/// Unlike a naive `{...base, ...remote, ...local}` spread (which overwrites
/// remote-only edits with stale base values), each field is taken from:
/// - [local] when both sides agree, or when only local changed it, or
/// - [remote] when only remote changed it, and
/// - [remote] when both sides changed it differently (the record still
///   escalates to review).
///
/// This never loses a remote-only or local-only change.
Map<String, Object?> conservativeReviewMerge({
  required Map<String, Object?> base,
  required Map<String, Object?> local,
  required Map<String, Object?> remote,
}) {
  final keys = <String>{...base.keys, ...local.keys, ...remote.keys};
  final result = <String, Object?>{};
  for (final key in keys) {
    final b = base[key];
    final l = local[key];
    final r = remote[key];
    if (deepEquals(l, r)) {
      result[key] = l;
    } else if (deepEquals(l, b)) {
      result[key] = r;
    } else if (deepEquals(r, b)) {
      result[key] = l;
    } else {
      result[key] = r;
    }
  }
  return result;
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

/// Set union with deletion wins:
/// `base ∪ (local − base) ∪ (remote − base)` minus deletions from either side.
/// For list/set fields.
///
/// NOT a true OR-set: elements are compared with ordinary Dart [Set]
/// equality — numbers by VALUE (2 and 2.0 are the same element), non-primitive
/// elements (maps/lists) by IDENTITY. A base element missing from either side
/// is removed even if the other side re-adds an equal value, and two
/// structurally equal nested objects stay distinct elements. (The merge
/// engine itself compares with deep equality; this resolver deliberately
/// does not — see the pinned tests.)
class SetUnionWithDeletionWinsResolver extends ConflictResolver {
  const SetUnionWithDeletionWinsResolver();

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

/// Previous name of [SetUnionWithDeletionWinsResolver].
@Deprecated(
    'Renamed to SetUnionWithDeletionWinsResolver: it is a deletion-wins set '
    'union, not a true OR-set.')
typedef SetUnionResolver = SetUnionWithDeletionWinsResolver;

/// Counter resolver:
/// `base + (local − base) + (remote − base)`.
///
/// The unconstrained formula can produce domain-invalid values (e.g. negative
/// inventory when both sides decrement, or a quantity above a cap). Optional
/// [min]/[max] bounds clamp the result into a valid range; without them the
/// result is unconstrained (default behavior).
class CounterResolver extends ConflictResolver {
  /// Lower bound for the resolved value, when provided.
  final num? min;

  /// Upper bound for the resolved value, when provided.
  final num? max;

  /// Creates a counter resolver with optional [min]/[max] clamps.
  const CounterResolver({this.min, this.max});

  @override
  MergeResult resolve(MergeContext ctx) {
    return const RemoteWinsResolver().resolve(ctx);
  }

  /// Field-level counter resolution.
  num resolveField(Object? baseVal, Object? localVal, Object? remoteVal) {
    final b = (baseVal is num) ? baseVal : 0;
    final l = (localVal is num) ? localVal : 0;
    final r = (remoteVal is num) ? remoteVal : 0;

    final isInt = b is int && l is int && r is int;
    final deltaL = l - b;
    final deltaR = r - b;
    var result = b + deltaL + deltaR;
    if (min != null && result < min!) result = min!;
    if (max != null && result > max!) result = max!;
    return isInt ? result.toInt() : result.toDouble();
  }
}

/// Append-only LIST resolver: `base + local + remote` with deduplication.
///
/// By default items are deduplicated by deep content equality. Pass an
/// [identity] function to key items instead (e.g. an event id) when two
/// identical-looking entries are distinct events and must both survive, or
/// when equal content with different keys must stay distinct.
class AppendOnlyListResolver extends ConflictResolver {
  /// Optional per-item identity key: two items sharing a key are duplicates
  /// even when their content differs, and equal content with different keys
  /// stays distinct.
  final String Function(Object? value)? identity;

  const AppendOnlyListResolver({this.identity});

  @override
  MergeResult resolve(MergeContext ctx) {
    return const RemoteWinsResolver().resolve(ctx);
  }

  /// Field-level append-only resolution.
  Object? resolveField(Object? baseVal, Object? localVal, Object? remoteVal) {
    final bList = baseVal is List ? baseVal : const <Object?>[];
    final lList = localVal is List ? localVal : const <Object?>[];
    final rList = remoteVal is List ? remoteVal : const <Object?>[];

    final result = <Object?>[];
    if (identity != null) {
      final seen = <String>{};
      for (final item in [...bList, ...lList, ...rList]) {
        if (seen.add(identity!(item))) result.add(item);
      }
    } else {
      for (final item in [...bList, ...lList, ...rList]) {
        if (!result.any((existing) => deepEquals(existing, item))) {
          result.add(item);
        }
      }
    }
    return result;
  }
}

/// Append-only LINES resolver for string fields.
///
/// Concatenates the base, local, and remote strings line by line: each line
/// is trimmed, empty/whitespace-only lines are skipped, and identical lines
/// are deduplicated; the result joins with `\n`. This is NOT a generic text
/// append — it normalizes whitespace and drops duplicate lines by design.
class AppendOnlyLinesResolver extends ConflictResolver {
  const AppendOnlyLinesResolver();

  @override
  MergeResult resolve(MergeContext ctx) {
    return const RemoteWinsResolver().resolve(ctx);
  }

  /// Field-level line-append resolution.
  Object? resolveField(Object? baseVal, Object? localVal, Object? remoteVal) {
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
}

/// Previous name of [AppendOnlyListResolver].
///
/// The former `AppendOnlyResolver` handled BOTH string values (line-based
/// append) and list values; the two behaviours are now separate — use
/// [AppendOnlyListResolver] for lists and [AppendOnlyLinesResolver] for text
/// fields.
@Deprecated('Split into AppendOnlyListResolver (list values) and '
    'AppendOnlyLinesResolver (string values).')
typedef AppendOnlyResolver = AppendOnlyListResolver;

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
  ///
  /// Keys may be top-level (`'meta'`) or dotted paths (`'meta.name'`). The
  /// most specific key wins, and a top-level key also governs its nested
  /// children — so a policy on `meta` follows into `meta.name` unless a
  /// dotted override says otherwise.
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
  if (resolverOrPolicy is SetUnionWithDeletionWinsResolver) {
    return resolverOrPolicy.resolveField(baseVal, localVal, remoteVal);
  }
  if (resolverOrPolicy is CounterResolver) {
    return resolverOrPolicy.resolveField(baseVal, localVal, remoteVal);
  }
  if (resolverOrPolicy is AppendOnlyListResolver) {
    return resolverOrPolicy.resolveField(baseVal, localVal, remoteVal);
  }
  if (resolverOrPolicy is AppendOnlyLinesResolver) {
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

/// Mutable review-escalation flag threaded through the recursive merge.
class _ReviewFlag {
  bool value = false;
}

/// The most specific `fieldOverrides` entry governing [path], walking up from
/// the exact dotted path to the top-level key. A top-level entry therefore
/// governs all its nested children (audit #24).
Object? _overrideForPath(MergePolicy? policy, String path) {
  final overrides = policy?.fieldOverrides;
  if (overrides == null || overrides.isEmpty) return null;
  var p = path;
  while (true) {
    final override = overrides[p];
    if (override != null) return override;
    final dot = p.lastIndexOf('.');
    if (dot <= 0) return null;
    p = p.substring(0, dot);
  }
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

    // A collection resolver arbitrates CONFLICTS. When only one side diverged
    // from base there is nothing to arbitrate: the ordinary three-way rules
    // decide deterministically (r == b -> local; l == b -> remote). Running a
    // declining resolver on a one-sided change would escalate routine
    // convergence (e.g. an acceptLocal resolution push) into a conflict loop.
    final bothChanged = dirtyLocal.isNotEmpty && dirtyRemote.isNotEmpty;
    if (policy?.collectionResolver != null && bothChanged) {
      MergeResult handleCustomResult(MergeResult? customRes) {
        if (customRes == null) {
          // The resolver declined: fall back to a conservative field-by-field
          // merge that never loses a remote-only or local-only change (a naive
          // `{...base, ...remote, ...local}` spread would overwrite remote-only
          // edits with stale base values). The record still escalates for
          // review.
          return MergeResult(
            merged: conservativeReviewMerge(
                base: base, local: local, remote: remote),
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
      policy: policy,
      store: store,
      recordId: recordId,
      adapter: adapter,
      dirtyLocal: dirtyLocal,
      dirtyRemote: dirtyRemote,
      review: _ReviewFlag(),
    );
  }

  static FutureOr<MergeResult> _mergeKeyRange({
    required List<String> keys,
    required int index,
    required Map<String, Object?> base,
    required Map<String, Object?> local,
    required Map<String, Object?> remote,
    required Map<String, Object?> out,
    required MergePolicy? policy,
    required String store,
    required String recordId,
    required _ResolverAdapter adapter,
    required Set<String> dirtyLocal,
    required Set<String> dirtyRemote,
    required _ReviewFlag review,
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
        needsReview: review.value,
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
        policy: policy,
        store: store,
        recordId: recordId,
        adapter: adapter,
        dirtyLocal: dirtyLocal,
        dirtyRemote: dirtyRemote,
        review: review,
      );
    }

    final valueOrFuture = _mergeFieldValue(
      path: k,
      b: b,
      l: l,
      r: r,
      policy: policy,
      store: store,
      recordId: recordId,
      adapter: adapter,
      review: review,
    );
    if (valueOrFuture is Future<Object?>) {
      return valueOrFuture.then((v) {
        out[k] = v;
        return _mergeKeyRange(
          keys: keys,
          index: index + 1,
          base: base,
          local: local,
          remote: remote,
          out: out,
          policy: policy,
          store: store,
          recordId: recordId,
          adapter: adapter,
          dirtyLocal: dirtyLocal,
          dirtyRemote: dirtyRemote,
          review: review,
        );
      });
    }
    out[k] = valueOrFuture;
    return _mergeKeyRange(
      keys: keys,
      index: index + 1,
      base: base,
      local: local,
      remote: remote,
      out: out,
      policy: policy,
      store: store,
      recordId: recordId,
      adapter: adapter,
      dirtyLocal: dirtyLocal,
      dirtyRemote: dirtyRemote,
      review: review,
    );
  }

  /// Three-way merge of one field at [path] (a top-level key or a dotted
  /// nested path).
  ///
  /// The classic rules apply per path:
  ///   l == r -> l
  ///   l == b -> r          # only remote changed
  ///   r == b -> l          # only local changed
  ///   else   -> recursion into nested String-keyed maps (a nested field
  ///             follows the most specific `fieldOverrides` entry walking up
  ///             from its dotted path — a top-level policy follows into its
  ///             children, a dotted override wins at its exact path), or the
  ///             most specific override on a non-recursable value, or remote
  ///             wins.
  static FutureOr<Object?> _mergeFieldValue({
    required String path,
    required Object? b,
    required Object? l,
    required Object? r,
    required MergePolicy? policy,
    required String store,
    required String recordId,
    required _ResolverAdapter adapter,
    required _ReviewFlag review,
  }) {
    if (deepEquals(l, r)) return l;
    if (deepEquals(l, b)) return r;
    if (deepEquals(r, b)) return l;

    // Both changed. Recurse into nested String-keyed maps FIRST so nested
    // fields follow the same three-way rules and the most specific override
    // governs each nested conflict (audit #24). A type change on either side
    // (or a non-String-keyed map) keeps the value atomic.
    if (l is Map &&
        r is Map &&
        l.keys.every((k) => k is String) &&
        r.keys.every((k) => k is String) &&
        (b == null || (b is Map && b.keys.every((k) => k is String)))) {
      final lMap = Map<String, Object?>.from(l);
      final rMap = Map<String, Object?>.from(r);
      final bMap = b == null ? null : Map<String, Object?>.from(b as Map);
      final keys = <String>{...?bMap?.keys, ...lMap.keys, ...rMap.keys};
      final out = <String, Object?>{};
      var pendingFuture = false;
      final resolved = <Object?>[];
      for (final key in keys) {
        final child = _mergeFieldValue(
          path: '$path.$key',
          b: bMap?[key],
          l: lMap[key],
          r: rMap[key],
          policy: policy,
          store: store,
          recordId: recordId,
          adapter: adapter,
          review: review,
        );
        if (child is Future) pendingFuture = true;
        resolved.add(child);
      }
      if (!pendingFuture) {
        var i = 0;
        for (final key in keys) {
          out[key] = resolved[i++];
        }
        return out;
      }
      return Future.wait(
              resolved.map((v) => v is Future ? v : Future<Object?>.value(v)))
          .then((values) {
        var i = 0;
        for (final key in keys) {
          out[key] = values[i++];
        }
        return out;
      });
    }

    final override = _overrideForPath(policy, path);
    if (override != null) {
      if (override is CustomResolver) {
        final key = path.substring(path.lastIndexOf('.') + 1);
        final fieldCtx = MergeContext(
          store: store,
          recordId: recordId,
          base: {key: b},
          local: {key: l},
          remote: {key: r},
          dirtyLocal: {key},
          dirtyRemote: {key},
        );
        final resOrFuture = adapter.invoke(override, fieldCtx);
        if (resOrFuture is Future<MergeResult?>) {
          return resOrFuture.then((res) {
            if (res == null || res.needsReview) {
              review.value = true;
              return r;
            }
            return res.merged[key];
          });
        }
        final res = resOrFuture;
        if (res == null || res.needsReview) {
          review.value = true;
          return r;
        }
        return res.merged[key];
      }
      return resolveFieldValue(path, b, l, r, override);
    }
    return r;
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
