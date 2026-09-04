/// The page-callback channel: how executable schema features run on the
/// worker runtime.
///
/// Conflict resolvers, validators, document migrations, and backfill
/// transforms are code. On the worker runtime the engine executes in a
/// dedicated isolate while the application's closures live on the page, so
/// the kernel carries them across two seams:
///
/// - [CallbackInvoker] — the kernel's call-out seam. The worker supplies an
///   implementation that round-trips to a connected page; native runs
///   without one (closures execute in-process).
/// - [StorePageCallbacks] — the page's declaration of which callbacks it
///   serves, keyed per store. [encodeStorePolicies] validates coverage and
///   builds the wire envelope; [attachStorePolicy] reconstructs the policy
///   and channel-backed hooks on the worker side.
///
/// Structurally-representable resolvers ([LocalWinsResolver],
/// [RemoteWinsResolver], [SetUnionWithDeletionWinsResolver],
/// [CounterResolver] without closures, [AppendOnlyListResolver] without an
/// identity function, [AppendOnlyLinesResolver]) never leave the worker:
/// they cross as data descriptors and are reconstructed as the real
/// classes, so field-level dispatch behaves exactly as on native. Anything
/// not representable as data must be registered on the page and is invoked
/// through the channel.
library;

import 'dart:async';

import 'errors.dart';
import 'schema.dart';
import 'sync/merge.dart';

/// Resolver descriptor kind: structural reconstruction of
/// [RemoteWinsResolver].
const String _kindRemoteWins = 'remoteWins';

/// Resolver descriptor kind: structural reconstruction of
/// [LocalWinsResolver].
const String _kindLocalWins = 'localWins';

/// Resolver descriptor kind: structural reconstruction of
/// [SetUnionWithDeletionWinsResolver].
const String _kindSetUnion = 'setUnionDeletionWins';

/// Resolver descriptor kind: structural reconstruction of
/// [CounterResolver].
const String _kindCounter = 'counter';

/// Resolver descriptor kind: structural reconstruction of
/// [AppendOnlyListResolver] (without an identity function).
const String _kindAppendOnlyList = 'appendOnlyList';

/// Resolver descriptor kind: structural reconstruction of
/// [AppendOnlyLinesResolver].
const String _kindAppendOnlyLines = 'appendOnlyLines';

/// Resolver descriptor kind: page-registered resolver invoked through the
/// callback channel.
const String _kindCustom = 'custom';

/// Callback channel: conflict resolution. The worker sends a
/// [MergeContext]; the page answers with an encoded [MergeResult] or null
/// (declined).
const String callbackChannelResolver = 'resolver';

/// Callback channel: store validation. The worker sends a logical record;
/// the page answers with the list of violation messages.
const String callbackChannelValidator = 'validator';

/// Callback channel: lazy document-format migration. The worker sends a
/// document; the page answers with the migrated document.
const String callbackChannelDocumentMigration = 'documentMigration';

/// Callback channel: forward store-migration backfill transform. The worker
/// sends a logical row; the page answers with the transformed values.
const String callbackChannelMigrationTransform = 'migrationTransform';

/// Resolver scope: whole-record resolution (the collection resolver).
const String resolverScopeRecord = 'record';

/// Resolver scope: single-field resolution (a `fieldOverrides` entry). The
/// callback receives a single-key merge context and the resolved value
/// governs that field.
const String resolverScopeField = 'field';

/// Re-keys every map in a wire value to String keys, recursively.
///
/// JS-interop `dartify()` preserves key types as `Object?`; every decoder in
/// this library (and the worker's option parsing) requires String keys. Use
/// this at the boundary instead of casting.
Map<String, Object?> stringKeyedDeepMap(Map<Object?, Object?> raw) {
  final out = <String, Object?>{};
  raw.forEach((k, v) {
    final key = k.toString();
    if (v is Map) {
      out[key] = stringKeyedDeepMap(v);
    } else if (v is List) {
      out[key] = v
          .map((item) => item is Map ? stringKeyedDeepMap(item) : item)
          .toList();
    } else {
      out[key] = v;
    }
  });
  return out;
}

/// The kernel's call-out seam for executable schema features on the worker
/// runtime.
///
/// The worker supplies an implementation that round-trips one callback
/// invocation to a connected page and returns the page's response value.
/// The kernel never sees transport types (the seam is pure Dart), so
/// web-support code implements it outside the kernel.
abstract interface class CallbackInvoker {
  /// Invokes [channel] with [args] and resolves with the page's response
  /// value, or null when the page answered with no value.
  ///
  /// Failures (no connected page, timeout, page-side error) throw typed
  /// kernel errors — never raw transport exceptions.
  Future<Object?> invoke(String channel, Map<String, Object?> args);
}

/// {@template localpocket.store_page_callbacks}
/// The page-declared callbacks one store's executable features resolve to.
///
/// Every entry must cover exactly what the store's schema declares: a
/// validator closure when (and only when) the schema has one, a document
/// migration per declared version, a transform per migration that declares
/// one, and a [ConflictResolver] instance per executable resolver the
/// conflict policy uses (matched by identity). Mismatches fail the web open
/// with a typed error — coverage is never silently partial.
/// {@endtemplate}
final class StorePageCallbacks {
  /// {@macro localpocket.store_page_callbacks}
  const StorePageCallbacks({
    this.resolvers = const {},
    this.validator,
    this.documentMigrations = const {},
    this.migrationTransforms = const {},
  });

  /// Executable resolvers this store's conflict policy may call back to,
  /// keyed by a stable id. Structural resolvers (the built-in,
  /// closure-free classes) need no entry; anything else does.
  final Map<String, ConflictResolver> resolvers;

  /// The store's validator callback, when the schema declares one. Must be
  /// the same closure the schema carries.
  final FutureOr<List<String>> Function(Map<String, Object?> record)? validator;

  /// Document-format migrations keyed by the schema's declared versions.
  final Map<int, DocumentMigration> documentMigrations;

  /// Backfill transforms keyed by the target version of the declaring
  /// [StoreMigration].
  final Map<int, DocumentMigration> migrationTransforms;
}

/// A [CustomResolver] that executes a page-registered resolver through the
/// callback channel.
///
/// Extending [CustomResolver] is deliberate: the merge engine dispatches
/// field-level custom resolvers through the same single-key-context path on
/// every runtime, so a channel-backed resolver cannot drift from a local
/// one. Scope and field ride the invocation so the page applies the same
/// resolution rules the merge engine would apply locally.
final class ProxiedResolver extends CustomResolver {
  ProxiedResolver._(super.fn, this.id);

  /// Creates a resolver that invokes the page-registered resolver [id].
  ///
  /// [scope] is [resolverScopeRecord] for a collection resolver or
  /// [resolverScopeField] for a `fieldOverrides` entry, in which case
  /// [field] names the field the callback governs.
  factory ProxiedResolver({
    required CallbackInvoker invoker,
    required String id,
    required String scope,
    String? field,
  }) =>
      ProxiedResolver._(
        (ctx) async {
          final raw = await invoker.invoke(callbackChannelResolver, {
            'store': ctx.store,
            'recordId': ctx.recordId,
            'id': id,
            'scope': scope,
            if (field != null) 'field': field,
            'ctx': encodeMergeContext(ctx),
          });
          if (raw == null) return null;
          return decodeMergeResult(raw, where: 'resolver "$id"');
        },
        id,
      );

  /// The page-registered resolver id this proxy invokes.
  final String id;
}

/// Encodes a [MergeContext] for the callback channel.
Map<String, Object?> encodeMergeContext(MergeContext ctx) => {
      'store': ctx.store,
      'recordId': ctx.recordId,
      'base': ctx.base,
      'local': ctx.local,
      'remote': ctx.remote,
      'dirtyLocal': ctx.dirtyLocal.toList(),
      'dirtyRemote': ctx.dirtyRemote.toList(),
    };

/// Decodes a strict [MergeContext] from the callback channel. Wrong-typed
/// values throw [ValidationException] naming [where] — never a cast error.
MergeContext decodeMergeContext(Object? raw, {required String where}) {
  final map = _requireMap(raw, where);
  return MergeContext(
    store: _requireString(map['store'], where, 'store'),
    recordId: _requireString(map['recordId'], where, 'recordId'),
    base: _requireDocument(map['base'], where, 'base'),
    local: _requireDocument(map['local'], where, 'local'),
    remote: _requireDocument(map['remote'], where, 'remote'),
    dirtyLocal: _requireStringSet(map['dirtyLocal'], where, 'dirtyLocal'),
    dirtyRemote: _requireStringSet(map['dirtyRemote'], where, 'dirtyRemote'),
  );
}

/// Encodes a [MergeResult] for the callback channel. The dirty-field sets
/// are context-derived on the receiving side and are not carried.
Map<String, Object?> encodeMergeResult(MergeResult result) => {
      'merged': result.merged,
      'needsReview': result.needsReview,
      if (result.note != null) 'note': result.note,
    };

/// Decodes a strict [MergeResult] from the callback channel. Wrong-typed
/// values throw [ValidationException] naming [where] — never a cast error.
MergeResult decodeMergeResult(Object? raw, {required String where}) {
  final map = _requireMap(raw, where);
  return MergeResult(
    merged: _requireDocument(map['merged'], where, 'merged'),
    needsReview: map['needsReview'] == true,
    note: map['note'] is String ? map['note']! as String : null,
  );
}

/// Deterministic auto-registration id for a store's collection resolver.
String autoResolverId(String store) => '$store:collectionResolver';

/// Deterministic auto-registration id for a store's `fieldOverrides` entry
/// at [field] (a dotted path).
String autoFieldResolverId(String store, String field) => '$store:field:$field';

/// Deterministic auto-registration id for a store's validator.
String autoValidatorId(String store) => '$store:validator';

/// Deterministic auto-registration id for the document-format migration to
/// [version].
String autoDocumentMigrationId(String store, int version) =>
    '$store:documentMigration:$version';

/// Deterministic auto-registration id for the backfill transform targeting
/// store version [toVersion].
String autoTransformId(String store, int toVersion) =>
    '$store:transform:$toVersion';

/// Auto-collects every executable member of [schema] into a
/// [StorePageCallbacks] registry.
///
/// A member is executable when it is code the worker cannot reconstruct:
/// conflict resolvers that are not structurally representable, the store
/// validator, every document-format migration, and every store migration
/// that declares a backfill `transform`. Each entry lands under its
/// deterministic auto id (see [autoResolverId], [autoFieldResolverId],
/// [autoValidatorId], [autoDocumentMigrationId], [autoTransformId]), so a
/// web open with no explicit registry still covers exactly what the schema
/// declares.
StorePageCallbacks autoCollectStoreCallbacks(CollectionSchema<Object?> schema) {
  final store = schema.name;
  final policy = schema.conflictPolicy;
  final resolvers = <String, ConflictResolver>{};
  final collection = policy.collectionResolver;
  if (collection != null && _structuralDescriptor(collection) == null) {
    resolvers[autoResolverId(store)] = collection;
  }
  for (final e in policy.fieldOverrides.entries) {
    if (_structuralDescriptor(e.value) == null) {
      resolvers[autoFieldResolverId(store, e.key)] = e.value;
    }
  }
  return StorePageCallbacks(
    resolvers: resolvers,
    validator: schema.validator,
    documentMigrations: Map.of(schema.documentMigrations),
    migrationTransforms: {
      for (final m in schema.migrations)
        if (m.transform != null) m.toVersion: m.transform!,
    },
  );
}

/// Builds the page callback registry a web open serves: every store's
/// executable members are auto-collected under their deterministic ids, and
/// an explicit [explicit] registry is merged over the result.
///
/// Explicit entries win on id conflict; auto-collected entries fill the
/// gaps — including members the explicit registry omitted. An auto entry is
/// skipped when its resolver instance is already registered under an
/// explicit id, so the coverage/unused-registry checks in
/// [encodeStorePolicies] run over the merged result unchanged. Explicit
/// stores that are not part of [schemas] fail the open with a typed error,
/// exactly as before auto-registration existed.
Map<String, StorePageCallbacks> resolvePageCallbacks(
  List<CollectionSchema<Object?>> schemas,
  Map<String, StorePageCallbacks>? explicit,
) {
  if (explicit != null) {
    for (final name in explicit.keys) {
      final declared = schemas.any((s) => s.name == name);
      if (!declared) {
        throw ValidationException(
            'pageCallbacks declares store "$name", which is not part of this '
            'open call.');
      }
    }
  }
  return {
    for (final schema in schemas)
      schema.name: _mergeStoreCallbacks(schema, explicit?[schema.name]),
  };
}

StorePageCallbacks _mergeStoreCallbacks(
    CollectionSchema<Object?> schema, StorePageCallbacks? registered) {
  final auto = autoCollectStoreCallbacks(schema);
  if (registered == null) return auto;
  final resolvers = Map.of(registered.resolvers);
  for (final e in auto.resolvers.entries) {
    final alreadyRegistered =
        resolvers.values.any((r) => identical(r, e.value));
    if (!alreadyRegistered) resolvers[e.key] = e.value;
  }
  return StorePageCallbacks(
    resolvers: resolvers,
    validator: registered.validator ?? auto.validator,
    documentMigrations: {
      ...auto.documentMigrations,
      ...registered.documentMigrations,
    },
    migrationTransforms: {
      ...auto.migrationTransforms,
      ...registered.migrationTransforms,
    },
  );
}

/// Encodes every store's executable-feature envelope for the wire.
///
/// Returns null when no store declares anything the worker cannot parse
/// from its plain schema JSON. Coverage is validated against [callbacks]:
/// every executable feature must be registered, and every registration
/// must be referenced — a mismatch throws [ValidationException] naming the
/// store, so an open can never silently drop behavior.
Map<String, Object?>? encodeStorePolicies(
  List<CollectionSchema<Object?>> schemas,
  Map<String, StorePageCallbacks>? callbacks,
) {
  final byStore = callbacks ?? const <String, StorePageCallbacks>{};
  for (final name in byStore.keys) {
    final declared = schemas.any((s) => s.name == name);
    if (!declared) {
      throw ValidationException(
          'pageCallbacks declares store "$name", which is not part of this '
          'open call.');
    }
  }
  final out = <String, Object?>{};
  for (final schema in schemas) {
    final entry = _encodeStore(schema, byStore[schema.name]);
    if (entry != null) out[schema.name] = entry;
  }
  return out.isEmpty ? null : out;
}

Map<String, Object?>? _encodeStore(
    CollectionSchema<Object?> schema, StorePageCallbacks? registered) {
  final registeredResolvers = registered?.resolvers ?? const {};
  final usedResolverIds = <String>{};
  final policy = schema.conflictPolicy;
  final hasResolver =
      policy.collectionResolver != null || policy.fieldOverrides.isNotEmpty;
  final hasTransforms = schema.migrations.any((m) => m.transform != null);
  final needsEntry = hasResolver ||
      policy.editsUnarchive ||
      policy.missingRemote != MissingRemotePolicy.conflict ||
      schema.validator != null ||
      schema.documentMigrations.isNotEmpty ||
      hasTransforms;

  final registeredValidator = registered?.validator;
  if ((schema.validator == null) != (registeredValidator == null)) {
    throw ValidationException(
        'Store "${schema.name}" declares a validator callback that is not '
        'covered by pageCallbacks (or vice versa); register the same closure '
        'so the worker can call it back.');
  }
  _requireSameVersions(
      schema.documentMigrations.keys.toSet(),
      registered?.documentMigrations.keys.toSet() ?? const <int>{},
      'document migrations',
      schema.name);
  final declaredTransformVersions = schema.migrations
      .where((m) => m.transform != null)
      .map((m) => m.toVersion)
      .toSet();
  _requireSameVersions(
      declaredTransformVersions,
      registered?.migrationTransforms.keys.toSet() ?? const <int>{},
      'migration transforms',
      schema.name);

  if (!needsEntry) {
    if (registeredResolvers.isNotEmpty) {
      throw ValidationException(
          'pageCallbacks registers resolvers for store "${schema.name}", '
          'whose conflict policy uses no executable resolver.');
    }
    return null;
  }

  final entry = <String, Object?>{};
  final policyJson = <String, Object?>{};
  final collection = policy.collectionResolver;
  if (collection != null) {
    policyJson['collectionResolver'] = _encodeResolver(
        collection, registeredResolvers, usedResolverIds,
        where: 'collectionResolver of "${schema.name}"');
  }
  if (policy.fieldOverrides.isNotEmpty) {
    policyJson['fieldOverrides'] = {
      for (final e in policy.fieldOverrides.entries)
        e.key: _encodeResolver(e.value, registeredResolvers, usedResolverIds,
            where: 'field override "${e.key}" of "${schema.name}"'),
    };
  }
  if (policy.editsUnarchive) policyJson['editsUnarchive'] = true;
  if (policy.missingRemote != MissingRemotePolicy.conflict) {
    policyJson['missingRemote'] = policy.missingRemote.name;
  }
  if (policyJson.isNotEmpty) entry['conflictPolicy'] = policyJson;
  if (schema.validator != null) entry['validator'] = true;
  if (schema.documentMigrations.isNotEmpty) {
    entry['documentMigrations'] = schema.documentMigrations.keys.toList()
      ..sort();
  }
  if (hasTransforms) {
    entry['migrationTransforms'] = declaredTransformVersions.toList()..sort();
  }
  for (final id in registeredResolvers.keys) {
    if (!usedResolverIds.contains(id)) {
      throw ValidationException(
          'pageCallbacks registers resolver "$id" for store '
          '"${schema.name}", which its conflict policy never uses.');
    }
  }
  return entry;
}

void _requireSameVersions(
    Set<int> declared, Set<int> registered, String what, String store) {
  if (declared.length == registered.length &&
      declared.containsAll(registered)) {
    return;
  }
  throw ValidationException(
      'Store "$store" and pageCallbacks disagree on $what: the schema '
      'declares $declared, the page registers $registered.');
}

/// Encodes a resolver as data when it is structurally representable, or as
/// a page-registered `custom` descriptor otherwise. Subclasses of the
/// built-in resolvers are deliberately NOT structural: their behavior is
/// code, so they must be registered like any custom resolver.
Map<String, Object?> _encodeResolver(ConflictResolver resolver,
    Map<String, ConflictResolver> registered, Set<String> usedIds,
    {required String where}) {
  final structural = _structuralDescriptor(resolver);
  if (structural != null) return structural;
  for (final entry in registered.entries) {
    if (identical(entry.value, resolver)) {
      usedIds.add(entry.key);
      return {'kind': _kindCustom, 'id': entry.key};
    }
  }
  throw ValidationException(
      'The resolver at $where is executable but not registered in '
      'pageCallbacks.resolvers; register the instance so the worker can '
      'call it back.');
}

/// Whether [schema]'s executable features can run on the worker runtime.
///
/// Structurally-representable conflict resolvers reconstruct in the worker
/// and need no channel; everything else (page-registered resolvers,
/// validators, document migrations, backfill transforms) invokes the page
/// through [invoker], so the features are runnable exactly when a channel
/// is configured.
bool executableFeaturesSupported(
    CollectionSchema<Object?> schema, CallbackInvoker? invoker) {
  final policy = schema.conflictPolicy;
  final needsChannel = _resolverNeedsChannel(policy.collectionResolver) ||
      policy.fieldOverrides.values.any(_resolverNeedsChannel) ||
      schema.validator != null ||
      schema.documentMigrations.isNotEmpty ||
      schema.migrations.any((m) => m.transform != null);
  return !needsChannel || invoker != null;
}

bool _resolverNeedsChannel(ConflictResolver? resolver) =>
    resolver != null && _structuralDescriptor(resolver) == null;

Map<String, Object?>? _structuralDescriptor(ConflictResolver resolver) {
  final type = resolver.runtimeType;
  if (type == RemoteWinsResolver) return const {'kind': _kindRemoteWins};
  if (type == LocalWinsResolver) return const {'kind': _kindLocalWins};
  if (type == SetUnionWithDeletionWinsResolver) {
    return const {'kind': _kindSetUnion};
  }
  if (type == AppendOnlyLinesResolver) {
    return const {'kind': _kindAppendOnlyLines};
  }
  if (type == AppendOnlyListResolver) {
    if ((resolver as AppendOnlyListResolver).identity != null) return null;
    return const {'kind': _kindAppendOnlyList};
  }
  if (type == CounterResolver) {
    final counter = resolver as CounterResolver;
    return {
      'kind': _kindCounter,
      if (counter.min != null) 'min': counter.min,
      if (counter.max != null) 'max': counter.max,
    };
  }
  return null;
}

/// Reconstructs [schema] with the executable features the wire envelope
/// [raw] describes, using [invoker] for channel-backed callbacks.
///
/// The schema's plain JSON never carries code, so this is the only way a
/// worker-side schema gains resolvers, a validator, document migrations, or
/// backfill transforms. Structural resolvers reconstruct as the real
/// classes; channel-backed members require [invoker] and throw
/// [ValidationException] when it is absent. Wrong-typed envelope values
/// always throw — absence falls back to the schema as parsed.
CollectionSchema<Object?> attachStorePolicy(
  CollectionSchema<Object?> schema,
  Object? raw, {
  required CallbackInvoker? invoker,
}) {
  if (raw == null) return schema;
  if (raw is! Map) {
    throw ValidationException(
        'Store policy for "${schema.name}" must be a map.');
  }
  final envelope = stringKeyedDeepMap(raw);
  final policyJson = envelope['conflictPolicy'];
  final policy = policyJson == null
      ? schema.conflictPolicy
      : _decodePolicy(policyJson, schema.name, invoker);
  final validator = _decodeValidatorHook(envelope['validator'], schema.name,
      invoker: invoker);
  final documentMigrations = _decodeDocumentMigrations(
      envelope['documentMigrations'], schema,
      invoker: invoker);
  final migrations = _decodeMigrationTransforms(
      envelope['migrationTransforms'], schema,
      invoker: invoker);
  if (policy == schema.conflictPolicy &&
      validator == null &&
      documentMigrations.isEmpty &&
      migrations == null) {
    return schema;
  }
  return CollectionSchema<Object?>(
    name: schema.name,
    version: schema.version,
    fields: schema.fields,
    indexes: schema.indexes,
    conflictPolicy: policy,
    prefetchFiles: schema.prefetchFiles,
    keepUnsyncedArchives: schema.keepUnsyncedArchives,
    fts: schema.fts,
    migrations: migrations ?? schema.migrations,
    documentMigrations: documentMigrations.isEmpty
        ? schema.documentMigrations
        : documentMigrations,
    validator: validator ?? schema.validator,
    attachmentField: schema.attachmentField,
  );
}

ConflictPolicy _decodePolicy(
    Object? raw, String store, CallbackInvoker? invoker) {
  final map = _requireMap(raw, 'conflictPolicy of "$store"');
  final collection = map['collectionResolver'];
  final fieldOverridesRaw = map['fieldOverrides'];
  final fieldOverrides = <String, ConflictResolver>{};
  if (fieldOverridesRaw != null) {
    final overrides =
        _requireMap(fieldOverridesRaw, 'fieldOverrides of "$store"');
    overrides.forEach((name, descriptor) {
      fieldOverrides[name] = _decodeResolver(
        descriptor,
        where: 'field override "$name" of "$store"',
        scope: resolverScopeField,
        field: name,
        invoker: invoker,
      );
    });
  }
  return ConflictPolicy(
    collectionResolver: collection == null
        ? null
        : _decodeResolver(collection,
            where: 'collectionResolver of "$store"',
            scope: resolverScopeRecord,
            invoker: invoker),
    fieldOverrides: fieldOverrides,
    editsUnarchive: map['editsUnarchive'] == true,
    missingRemote: map['missingRemote'] is String
        ? MissingRemotePolicy.values.firstWhere(
            (v) => v.name == map['missingRemote'],
            orElse: () => throw ValidationException(
                '"missingRemote" of "$store" is not a known policy: '
                '${map['missingRemote']}'))
        : MissingRemotePolicy.conflict,
  );
}

ConflictResolver _decodeResolver(
  Object? raw, {
  required String where,
  required String scope,
  required CallbackInvoker? invoker,
  String? field,
}) {
  final map = _requireMap(raw, where);
  final kind = _requireString(map['kind'], where, 'kind');
  switch (kind) {
    case _kindRemoteWins:
      return const RemoteWinsResolver();
    case _kindLocalWins:
      return const LocalWinsResolver();
    case _kindSetUnion:
      return const SetUnionWithDeletionWinsResolver();
    case _kindAppendOnlyLines:
      return const AppendOnlyLinesResolver();
    case _kindAppendOnlyList:
      return const AppendOnlyListResolver();
    case _kindCounter:
      final min = map['min'];
      final max = map['max'];
      if (min != null && min is! num) {
        throw ValidationException('"min" at $where must be a number.');
      }
      if (max != null && max is! num) {
        throw ValidationException('"max" at $where must be a number.');
      }
      return CounterResolver(min: min as num?, max: max as num?);
    case _kindCustom:
      final id = _requireString(map['id'], where, 'id');
      if (invoker == null) {
        throw ValidationException(
            'The resolver at $where executes on the page, but no callback '
            'channel is configured for this runtime.');
      }
      return ProxiedResolver(
          invoker: invoker, id: id, scope: scope, field: field);
    default:
      throw ValidationException('Unknown resolver kind "$kind" at $where.');
  }
}

FutureOr<List<String>> Function(Map<String, Object?>)? _decodeValidatorHook(
    Object? raw, String store,
    {required CallbackInvoker? invoker}) {
  if (raw == null) return null;
  if (raw is! bool || !raw) {
    throw ValidationException(
        '"validator" of "$store" must be true when present.');
  }
  final invoker_ = invoker;
  if (invoker_ == null) {
    throw ValidationException(
        'Store "$store" declares a validator callback that executes on the '
        'page, but no callback channel is configured for this runtime.');
  }
  return (record) async {
    final raw = await invoker_
        .invoke(callbackChannelValidator, {'store': store, 'record': record});
    return _requireStringList(raw, 'validator of "$store"', 'response');
  };
}

Map<int, DocumentMigration> _decodeDocumentMigrations(
    Object? raw, CollectionSchema<Object?> schema,
    {required CallbackInvoker? invoker}) {
  if (raw == null) return const {};
  final versions =
      _requireIntList(raw, 'documentMigrations of "${schema.name}"');
  final invoker_ = invoker;
  if (invoker_ == null) {
    throw ValidationException(
        'Store "${schema.name}" declares document migrations that execute on '
        'the page, but no callback channel is configured for this runtime.');
  }
  return {
    for (final version in versions)
      version: (doc) async {
        final out = await invoker_.invoke(callbackChannelDocumentMigration, {
          'store': schema.name,
          'toVersion': version,
          'document': doc,
        });
        return _requireDocument(out,
            'document migration v$version of "${schema.name}"', 'response');
      },
  };
}

List<StoreMigration>? _decodeMigrationTransforms(
    Object? raw, CollectionSchema<Object?> schema,
    {required CallbackInvoker? invoker}) {
  if (raw == null) return null;
  final versions =
      _requireIntList(raw, 'migrationTransforms of "${schema.name}"');
  final invoker_ = invoker;
  if (invoker_ == null) {
    throw ValidationException(
        'Store "${schema.name}" declares migration transforms that execute '
        'on the page, but no callback channel is configured for this '
        'runtime.');
  }
  final byVersion = {for (final v in versions) v: true};
  return [
    for (final migration in schema.migrations)
      byVersion.containsKey(migration.toVersion)
          ? migration.withTransform((row) async {
              final out =
                  await invoker_.invoke(callbackChannelMigrationTransform, {
                'store': schema.name,
                'toVersion': migration.toVersion,
                'document': row,
              });
              return _requireDocument(
                  out,
                  'migration transform v${migration.toVersion} of '
                      '"${schema.name}"',
                  'response');
            })
          : migration,
  ];
}

Map<String, Object?> _requireMap(Object? raw, String where) {
  if (raw is Map) return stringKeyedDeepMap(raw);
  throw ValidationException('The value at $where must be a map.');
}

Map<String, Object?> _requireDocument(Object? raw, String where, String what) {
  if (raw is Map) return stringKeyedDeepMap(raw);
  throw ValidationException('"$what" at $where must be a map.');
}

String _requireString(Object? raw, String where, String what) {
  if (raw is String) return raw;
  throw ValidationException('"$what" at $where must be a string.');
}

Set<String> _requireStringSet(Object? raw, String where, String what) => {
      for (final item in _requireStringList(raw, where, what)) item,
    };

List<String> _requireStringList(Object? raw, String where, String what) {
  if (raw is! List) {
    throw ValidationException('"$what" at $where must be a list.');
  }
  return [
    for (final item in raw)
      if (item is String)
        item
      else
        throw ValidationException(
            '"$what" at $where must contain only strings.'),
  ];
}

List<int> _requireIntList(Object? raw, String where) {
  if (raw is! List) {
    throw ValidationException('The value at $where must be a list.');
  }
  return [
    for (final item in raw)
      if (item is int)
        item
      else
        throw ValidationException(
            'The value at $where must contain only ints.'),
  ];
}
