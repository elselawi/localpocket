import 'dart:async';

import '../../../kernel/errors.dart';
import '../../../kernel/page_callbacks.dart'
    show
        StorePageCallbacks,
        callbackChannelDocumentMigration,
        callbackChannelMigrationTransform,
        callbackChannelResolver,
        callbackChannelValidator,
        decodeMergeContext,
        encodeMergeResult,
        resolverScopeField,
        stringKeyedDeepMap;
import '../../../kernel/schema.dart' show DocumentMigration;
import '../../../kernel/sync/merge.dart'
    show ConflictResolver, CustomResolver, MergeResult, resolveFieldValue;
import 'protocol.dart';

/// Executes worker callback requests against the page's registered
/// [StorePageCallbacks].
///
/// Pure Dart (no `dart:js_interop`): the web open wires [serve] into the
/// page-side custom-request handler; VM tests drive it directly. Every
/// failure comes back to the worker as a failed result envelope carrying a
/// typed message — never a raw exception across the boundary.
final class PageCallbackServer {
  /// Creates a server over the page's per-store callback registry.
  PageCallbackServer({required Map<String, StorePageCallbacks> stores})
      : _stores = stores;

  final Map<String, StorePageCallbacks> _stores;

  /// The channels this server claims (the open's dispatch routes by channel
  /// before calling [serve]).
  static const Set<String> channels = {
    callbackChannelResolver,
    callbackChannelValidator,
    callbackChannelDocumentMigration,
    callbackChannelMigrationTransform,
  };

  /// Whether [channel] belongs to this server.
  bool handles(String channel) => channels.contains(channel);

  /// Serves one worker callback request envelope and returns the reply
  /// envelope, or null when [message] is not a callback request (so callers
  /// can fall through to event handling).
  Future<Map<String, Object?>?> serve(Map<Object?, Object?> message) async {
    final request = stringKeyedDeepMap(message);
    if (request['kind'] != CallbackRpc.requestKind) return null;
    final rpcId = request[CallbackRpc.rpcId];
    final channel = request[CallbackRpc.channel];
    final args = request[CallbackRpc.args];
    try {
      if (channel is! String) {
        throw ValidationException(
            'Callback request "channel" must be a string.');
      }
      if (args is! Map) {
        throw ValidationException('Callback request "args" must be a map.');
      }
      final value = await _execute(channel, stringKeyedDeepMap(args));
      return {
        'kind': CallbackRpc.resultKind,
        CallbackRpc.rpcId: rpcId,
        CallbackRpc.ok: true,
        CallbackRpc.value: value,
      };
    } catch (e) {
      return {
        'kind': CallbackRpc.resultKind,
        CallbackRpc.rpcId: rpcId,
        CallbackRpc.ok: false,
        CallbackRpc.error: e.toString(),
      };
    }
  }

  Future<Object?> _execute(String channel, Map<String, Object?> args) async {
    switch (channel) {
      case callbackChannelResolver:
        return _resolve(args);
      case callbackChannelValidator:
        return _validate(args);
      case callbackChannelDocumentMigration:
      case callbackChannelMigrationTransform:
        return _migrate(channel, args);
      default:
        throw ValidationException('Unknown callback channel "$channel".');
    }
  }

  Future<Object?> _resolve(Map<String, Object?> args) async {
    final store = _requireString(args, 'store');
    final id = _requireString(args, 'id');
    final scope = _requireString(args, 'scope');
    final registered = _requireStore(store);
    final ConflictResolver? resolver = registered.resolvers[id];
    if (resolver == null) {
      throw ValidationException(
          'No resolver "$id" is registered for store "$store".');
    }
    final ctx =
        decodeMergeContext(args['ctx'], where: 'resolver "$id" of "$store"');
    if (scope == resolverScopeField) {
      final field = _requireString(args, 'field');
      if (resolver is CustomResolver) {
        final result = await resolver.resolve(ctx);
        return result == null ? null : encodeMergeResult(result);
      }
      // Field-level built-ins resolve exactly as the merge engine resolves
      // them locally.
      final value = resolveFieldValue(
        field,
        ctx.base[field],
        ctx.local[field],
        ctx.remote[field],
        resolver,
      );
      return encodeMergeResult(MergeResult(merged: {field: value}));
    }
    final result = await resolver.resolve(ctx);
    return result == null ? null : encodeMergeResult(result);
  }

  Future<Object?> _validate(Map<String, Object?> args) async {
    final store = _requireString(args, 'store');
    final registered = _requireStore(store);
    final validator = registered.validator;
    if (validator == null) {
      throw ValidationException(
          'No validator is registered for store "$store".');
    }
    final record = args['record'];
    if (record is! Map) {
      throw ValidationException(
          'The validator record for "$store" must be a map.');
    }
    final messages = await validator(stringKeyedDeepMap(record));
    return messages;
  }

  Future<Object?> _migrate(String channel, Map<String, Object?> args) async {
    final store = _requireString(args, 'store');
    final versionRaw = args['toVersion'];
    if (versionRaw is! int) {
      throw ValidationException('"toVersion" must be an int.');
    }
    final registered = _requireStore(store);
    final DocumentMigration? migration =
        channel == callbackChannelDocumentMigration
            ? registered.documentMigrations[versionRaw]
            : registered.migrationTransforms[versionRaw];
    if (migration == null) {
      throw ValidationException(
          'No migration hook for version $versionRaw is registered on '
          'store "$store".');
    }
    final document = args['document'];
    if (document is! Map) {
      throw ValidationException(
          'The migrated document for "$store" must be a map.');
    }
    return migration(stringKeyedDeepMap(document));
  }

  StorePageCallbacks _requireStore(String store) {
    final registered = _stores[store];
    if (registered == null) {
      throw ValidationException(
          'No page callbacks are registered for store "$store".');
    }
    return registered;
  }

  String _requireString(Map<String, Object?> args, String key) {
    final value = args[key];
    if (value is String) return value;
    throw ValidationException('Callback argument "$key" must be a string.');
  }
}
