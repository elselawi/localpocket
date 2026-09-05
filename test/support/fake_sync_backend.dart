import 'dart:async';

import 'package:localpocket/src/kernel/errors.dart';
import 'package:localpocket/src/kernel/page_callbacks.dart'
    show CallbackInvoker;
import 'package:localpocket/src/kernel/sync/sync_backend.dart';
import 'package:localpocket/src/platform/web/page/protocol.dart';

/// A configurable page-side [SyncBackend] fake for the proxy-channel tests:
/// records every call, replays scripted results, and throws scripted typed
/// errors so the exact error reconstruction can be asserted end-to-end.
class FakeSyncBackend implements SyncBackend {
  FakeSyncBackend({
    this.scopeId = 'fake-scope',
    BackendCapabilities? capabilities,
  }) : capabilities = capabilities ??
            const BackendCapabilities(
                batchEnabled: true, maxBatch: 10, maxPage: 300);

  @override
  BackendCapabilities capabilities;

  @override
  String scopeId;

  /// The token source the page server handed to the fake at create; used to
  /// prove live token reads cross the channel.
  SyncTokenSource? tokenSource;

  int prepareCalls = 0;
  bool disposed = false;

  final List<
      ({
        String store,
        String? fromUpdated,
        String? fromId,
        String? idPrefix,
        int perPage
      })> listChangesCalls = [];
  List<RemoteRecord> changes = const [];

  final List<({String id, String store, String dataJson})> created = [];
  final List<({String id, String dataJson, String? baseUpdated})> updated = [];

  final List<List<PushOp>> pushBatchCalls = [];
  List<PushResult> batchResults = const [];

  /// Bytes received through chunked uploads, keyed by field.
  final Map<String, List<int>> receivedFiles = {};

  /// Bytes received through streamed uploads, keyed by field, with the
  /// filename the [StreamFileUpload] declared.
  final Map<String, ({String filename, List<int> bytes})> receivedStreams = {};

  /// The download source served by [downloadFile], keyed by filename.
  final Map<String, List<int>> downloadable = {};
  final List<({String recordId, String filename, String? thumb})>
      downloadCalls = [];

  /// Scripted typed errors, thrown by the matching method.
  SyncError? throwOnPrepare;
  SyncError? throwOnGet;
  SyncError? throwOnCreate;
  SyncError? throwOnUpdate;
  SyncError? throwOnBatch;

  RemoteRecord? recordToReturn;

  final StreamController<BackendHint> hintController =
      StreamController<BackendHint>.broadcast();

  /// Pushes one hint to the realtime stream (the page side of the
  /// page→worker hint flow).
  void emitHint(BackendHint hint) => hintController.add(hint);

  @override
  Stream<BackendHint> hints() => hintController.stream;

  @override
  Future<void> prepare() async {
    prepareCalls++;
    final error = throwOnPrepare;
    if (error != null) throw error;
  }

  @override
  Future<List<RemoteRecord>> listChanges(
    String store, {
    String? fromUpdated,
    String? fromId,
    String? idPrefix,
    int perPage = 200,
  }) async {
    listChangesCalls.add((
      store: store,
      fromUpdated: fromUpdated,
      fromId: fromId,
      idPrefix: idPrefix,
      perPage: perPage,
    ));
    return changes;
  }

  @override
  Future<RemoteRecord?> getRecord(String id) async {
    final error = throwOnGet;
    if (error != null) throw error;
    return recordToReturn;
  }

  @override
  Future<RemoteRecord> createRecord({
    required String id,
    required String store,
    required String dataJson,
  }) async {
    created.add((id: id, store: store, dataJson: dataJson));
    final error = throwOnCreate;
    if (error != null) throw error;
    // Echo the current token so a live read through the channel is
    // observable in the returned record.
    final tokenSource = this.tokenSource;
    final token = tokenSource == null ? null : await tokenSource.currentToken();
    return RemoteRecord(
      id: id,
      store: store,
      updated: '2026-01-01 00:00:00.000Z',
      data: {'echo': dataJson, if (token != null) 'token': token},
    );
  }

  @override
  Future<RemoteRecord> updateRecord({
    required String id,
    required String dataJson,
    String? baseUpdated,
  }) async {
    updated.add((id: id, dataJson: dataJson, baseUpdated: baseUpdated));
    final error = throwOnUpdate;
    if (error != null) throw error;
    return RemoteRecord(
      id: id,
      store: 'widgets',
      updated: '2026-01-02 00:00:00.000Z',
      data: {'echo': dataJson},
    );
  }

  @override
  Future<RemoteRecord> updateRecordFiles({
    required String id,
    String? dataJson,
    Map<String, List<int>>? uploads,
    List<String>? keepNames,
    List<String>? removeNames,
  }) async {
    receivedFiles.addAll(uploads ?? const {});
    return _filesRecord(id, dataJson);
  }

  @override
  Future<RemoteRecord> updateRecordFilesStream({
    required String id,
    String? dataJson,
    Map<String, StreamFileUpload>? uploads,
    List<String>? keepNames,
    List<String>? removeNames,
  }) async {
    for (final e in (uploads ?? const <String, StreamFileUpload>{}).entries) {
      final stream = await e.value.streamFactory();
      final builder = <int>[];
      await for (final chunk in stream) {
        builder.addAll(chunk);
      }
      receivedStreams[e.key] = (filename: e.value.filename, bytes: builder);
    }
    return _filesRecord(id, dataJson);
  }

  RemoteRecord _filesRecord(String id, String? dataJson) => RemoteRecord(
        id: id,
        store: 'widgets',
        updated: '2026-01-03 00:00:00.000Z',
        data: {
          if (dataJson != null) 'echo': dataJson,
          'received': receivedFiles.length + receivedStreams.length,
        },
      );

  @override
  Future<Stream<List<int>>> downloadFile({
    required String recordId,
    required String filename,
    String? thumb,
  }) async {
    downloadCalls.add((recordId: recordId, filename: filename, thumb: thumb));
    final bytes = downloadable[filename];
    if (bytes == null) throw NotFoundError('no file "$filename"');
    return Stream.value(bytes);
  }

  @override
  Future<List<PushResult>> pushBatch(List<PushOp> ops) async {
    pushBatchCalls.add(ops);
    final error = throwOnBatch;
    if (error != null) throw error;
    if (batchResults.isNotEmpty) return batchResults;
    // Echo the opIds the request carried, untouched — proving the proxy
    // forwards the idempotency keys without reinterpretation.
    return [for (final op in ops) PushResult(opId: op.opId, ok: true)];
  }
}

/// A [SyncBackendFactory] fake handing out [FakeSyncBackend], recording the
/// create arguments exactly as the proxy forwarded them.
class FakeSyncBackendFactory implements SyncBackendFactory {
  final backend = FakeSyncBackend();

  final List<({Uri baseUrl, List<String> stores, String identity})> creates =
      [];

  @override
  Future<SyncBackend> create({
    required Uri baseUrl,
    required SyncTokenSource tokenSource,
    required List<String> stores,
    required String identity,
  }) async {
    creates.add((baseUrl: baseUrl, stores: stores, identity: identity));
    backend.tokenSource = tokenSource;
    return backend;
  }

  @override
  Future<void> dispose(SyncBackend backend) async {
    (backend as FakeSyncBackend).disposed = true;
  }
}

/// The kernel-side token source the tests own: the value `syncUpdateAuth`
/// replaces is served to the page backend through the channel.
class ScriptedTokenSource implements SyncTokenSource {
  ScriptedTokenSource([this.token]);

  String? token;

  @override
  Future<String> currentToken() async => token ?? '';

  @override
  String? get identity => 'account-1';
}

/// A loopback [CallbackInvoker] for VM tests: drives [server] through the
/// exact callback-RPC envelope the page's custom-request handler sees, and
/// answers the page→worker pushes ([WireOp.backendCall]) through [onPush]
/// (the worker-side hub), wrapped in the same WebResponse envelope the
/// worker's request path returns.
class ServerCallbackInvoker implements CallbackInvoker {
  ServerCallbackInvoker(this._serve, {required this.onPush});

  /// The page server's `serve` method (any of the page RPC servers — sync
  /// backend, blob store, schema callbacks).
  final Future<Map<String, Object?>?> Function(Map<Object?, Object?>) _serve;

  /// Handles one page→worker push: receives the full `WireOp.backendCall`
  /// request envelope (as the worker's request path does) and returns the
  /// worker-side result value.
  final Future<Object?> Function(Map<String, Object?> envelope) onPush;

  /// Every method invocation sent to the server, in arrival order (for
  /// asserting session/chunk structure).
  final List<Map<String, Object?>> sent = [];

  int _nextRpcId = 0;

  @override
  Future<Object?> invoke(String channel, Map<String, Object?> args) async {
    sent.add(args);
    final reply = await _serve({
      'kind': CallbackRpc.requestKind,
      CallbackRpc.rpcId: _nextRpcId++,
      CallbackRpc.channel: channel,
      CallbackRpc.args: args,
    });
    if (reply == null) {
      throw ValidationException('No server answered the "$channel" callback.');
    }
    if (reply[CallbackRpc.ok] != true) {
      throw ValidationException(
          'The "$channel" callback failed: ${reply[CallbackRpc.error]}');
    }
    return reply[CallbackRpc.value];
  }

  /// The page-side push handle: sends a `WireOp.backendCall` request and
  /// returns the raw worker response envelope — the same shape
  /// `Database.customRequest` hands back in the browser, validated by the
  /// caller (the page-side token source).
  Future<Object?> push(Map<String, Object?> envelope) async => {
        'v': webProtocolVersion,
        'i': _nextRpcId++,
        'r': await onPush(envelope),
      };
}
