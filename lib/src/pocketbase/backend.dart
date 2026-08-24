/// The PocketBase adapter: a [SyncBackend] over the real PB wire
/// contract. Confined to `localpocket/pocketbase.dart` — core and sync never
/// import it (layering rule 3).
///
/// Owns:
/// - the wire client (list/get/create/update/batch),
/// - the auth manager (single-flight refresh, proactive 75 %),
/// - the realtime SSE layer (debounced 300 ms per store, delete verification,
///   reconnect → gap hints, fast-path records),
/// - the batch probe (200 enables; 403 disables permanently).
library;

import 'dart:async';

import '../core/hashing.dart';
import '../sync/sync_backend.dart';
import 'auth.dart';
import 'pb_client.dart';
import 'sse.dart';
import 'transport.dart';

/// PocketBase implementation of [SyncBackend].
///
/// Create one backend for the authenticated user and pass it to [SyncEngine]:
///
/// ```dart
/// final backend = PocketBaseBackend(
///   baseUrl: Uri.parse('https://pb.example.com'),
///   tokenProvider: tokenProvider,
///   stores: const ['tasks'],
/// );
/// final engine = SyncEngine(pocket: db, backend: backend);
/// await engine.start();
/// ```
///
/// PocketBase batch support is probed during [prepare]. Realtime is optional;
/// polling and anti-entropy sweeps remain the correctness backstop.
class PocketBaseBackend implements SyncBackend {
  /// Creates a PocketBase synchronization backend.
  PocketBaseBackend({
    required this.baseUrl,
    required this.tokenProvider,
    this.stores = const [],
    this.realtimeDebounce = const Duration(milliseconds: 300),
    this.maxPage = 200,
    this.maxBatch = 25,
    this.identity,
    this.realtimeCollection = 'data',
    HttpTransport? transport,
  }) : transport = transport ?? PackageHttpTransport() {
    _auth = AuthManager(tokenProvider);
    _client =
        PbClient(transport: this.transport, baseUrl: baseUrl, auth: _auth);
  }

  /// PocketBase server base URL.
  final Uri baseUrl;

  /// Application-supplied token provider.
  final TokenProvider tokenProvider;

  /// LocalPocket stores represented in the remote data collection.
  final List<String> stores;

  /// Realtime coalescing window per store (default 300 ms).
  final Duration realtimeDebounce;

  /// Maximum records requested per pull page.
  final int maxPage;

  /// Maximum operations sent in one remote batch.
  final int maxBatch;

  /// Stable login identity (used for scope file naming). When null, derived
  /// from [TokenProvider.identity].
  final String? identity;

  /// The remote collection the realtime client subscribes to (every
  /// store lives in the single `data` collection; PB realtime is per-collection).
  final String realtimeCollection;

  /// HTTP transport used by the adapter.
  final HttpTransport transport;

  late final AuthManager _auth;
  late final PbClient _client;
  PbRealtime? _realtime;

  bool _batchEnabled = false;
  bool _probeDone = false;
  bool _probePermanentlyDisabled = false;

  final StreamController<BackendHint> _hints =
      StreamController<BackendHint>.broadcast();
  final Map<String, Timer> _debounceTimers = {};
  final Map<String, BackendHint> _pendingHints = {};

  // ---------------------------------------------------------------- probe --

  /// Batch capability probe: 200 → enable, 403 → disable permanently
  /// (never re-probed). Called by the engine on `start()`.
  @override
  Future<void> prepare() async {
    if (_probeDone) return;
    _probeDone = true;
    if (_probePermanentlyDisabled) return;
    try {
      _batchEnabled = await _client.probeBatch();
    } on ForbiddenError {
      _batchEnabled = false;
      _probePermanentlyDisabled = true;
    } on SyncError {
      _batchEnabled = false; // transient: stay off, may re-probe next start
      _probeDone = false;
    }
  }

  /// Current capabilities negotiated with PocketBase.
  @override
  BackendCapabilities get capabilities => BackendCapabilities(
        batchEnabled: _batchEnabled,
        maxBatch: maxBatch,
        maxPage: maxPage,
      );

  /// Identity fingerprint: a change of (baseUrl, identity) switches the DB
  /// scope and therefore invalidates every cursor.
  @override
  String get scopeId {
    final id = identity ?? tokenProvider.identity;
    return sha256Hex('$baseUrl|$id').substring(0, 12);
  }

  // ------------------------------------------------------------ lifecycle --

  /// Opens the realtime SSE connection. Idempotent.
  ///
  /// Realtime events are treated as hints. The sync engine still performs
  /// authoritative pulls when events are missed or a connection reconnects.
  Future<void> startRealtime() async {
    if (_realtime != null) return;
    final rt = PbRealtime(
      client: _client,
      collectionNames: [realtimeCollection],
      reconnectDelay: const Duration(milliseconds: 200),
      onGapClosed: _onGapClosed,
      onEvent: _onRealtimeEvent,
    );
    _realtime = rt;
    await rt.start();
  }

  /// Stops the realtime connection and clears pending hints.
  Future<void> stopRealtime() async {
    await _realtime?.stop();
    _realtime = null;
    for (final t in _debounceTimers.values) {
      t.cancel();
    }
    _debounceTimers.clear();
    _pendingHints.clear();
  }

  /// Stops realtime and closes the HTTP transport.
  void close() {
    unawaited(stopRealtime());
    if (!_hints.isClosed) unawaited(_hints.close());
    transport.close();
  }

  // ------------------------------------------------------------- realtime --

  void _onGapClosed() {
    // A connect (or reconnect) just happened: a gap is closed, so every store
    // must be re-pulled — never assume nothing changed.
    for (final s in stores) {
      _debounce(s, BackendHint(s));
    }
  }

  void _onRealtimeEvent(PbRealtimeEvent ev) {
    // The remote collection carries every store; only events for stores this
    // backend manages may become hints (the engine also guards, but dropping
    // foreign events here avoids the wasted delete-verification GET too).
    if (!stores.contains(ev.record.store)) return;
    if (ev.action == 'delete') {
      // delete events always verify via targeted GET.
      unawaited(_verifyDelete(ev.record));
      return;
    }
    _debounce(ev.record.store,
        BackendHint(ev.record.store, BackendHintKind.changed, ev.record));
  }

  Future<void> _verifyDelete(RemoteRecord ev) async {
    if (!stores.contains(ev.store)) return;
    RemoteRecord? current;
    try {
      current = await _client.getRecord(ev.id);
    } on NotFoundError {
      // Genuinely gone (or rule-hidden): hint so the engine hides it.
      _debounce(ev.store, BackendHint(ev.store, BackendHintKind.deleted));
      return;
    } on SyncError {
      return; // transient: the periodic pull is the backstop
    }
    if (current == null) {
      _debounce(ev.store, BackendHint(ev.store, BackendHintKind.deleted));
      return;
    }
    // Still visible: re-deliver as a changed event (fast-path or pull).
    _debounce(
        ev.store, BackendHint(ev.store, BackendHintKind.changed, current));
  }

  void _debounce(String store, BackendHint hint) {
    _pendingHints[store] = hint;
    _debounceTimers[store]?.cancel();
    _debounceTimers[store] = Timer(realtimeDebounce, () {
      _debounceTimers.remove(store);
      final pending = _pendingHints.remove(store);
      if (pending != null && !_hints.isClosed) {
        _hints.add(pending);
      }
    });
  }

  /// Emits debounced realtime hints for the sync engine.
  @override
  Stream<BackendHint> hints() => _hints.stream;

  // ------------------------------------------------------------- backend --

  /// Lists one ordered pull or sweep page from PocketBase.
  @override
  Future<List<RemoteRecord>> listChanges(
    String store, {
    String? fromUpdated,
    String? fromId,
    String? idPrefix,
    int perPage = 200,
  }) =>
      _client.listRecords(
        store,
        fromUpdated: fromUpdated,
        fromId: fromId,
        idPrefix: idPrefix,
        perPage: perPage,
        // Sweeps only need the keyset (fields=id,updated projection).
        fields: idPrefix != null ? const ['id', 'updated'] : null,
      );

  /// Fetches one remote record by ID.
  @override
  Future<RemoteRecord?> getRecord(String id) => _client.getRecord(id);

  @override
  Future<RemoteRecord> createRecord({
    required String id,
    required String store,
    required String dataJson,
  }) =>
      _client.createRecord(id: id, store: store, dataJson: dataJson);

  @override
  Future<RemoteRecord> updateRecordFiles({
    required String id,
    String? dataJson,
    Map<String, List<int>>? uploads,
    List<String>? keepNames,
    List<String>? removeNames,
  }) {
    if (uploads == null &&
        keepNames == null &&
        removeNames == null &&
        dataJson != null) {
      return updateRecord(id: id, dataJson: dataJson);
    }
    return updateRecordFilesStream(
      id: id,
      dataJson: dataJson,
      uploads: uploads?.map((name, bytes) => MapEntry(
            name,
            StreamFileUpload(
              filename: name,
              length: bytes.length,
              streamFactory: () async => Stream.value(bytes),
            ),
          )),
      keepNames: keepNames,
      removeNames: removeNames,
    );
  }

  @override
  Future<RemoteRecord> updateRecordFilesStream({
    required String id,
    String? dataJson,
    Map<String, StreamFileUpload>? uploads,
    List<String>? keepNames,
    List<String>? removeNames,
  }) async {
    final mapped = uploads?.map((field, file) => MapEntry(
          field,
          HttpMultipartFile(
            field: 'imgs+',
            filename: file.filename,
            length: file.length,
            streamFactory: file.streamFactory,
          ),
        ));
    return _client.updateRecordFiles(
      id: id,
      dataJson: dataJson,
      uploads: mapped,
      keepNames: keepNames,
      removeNames: removeNames,
    );
  }

  @override
  Future<Stream<List<int>>> downloadFile({
    required String recordId,
    required String filename,
    String? thumb,
  }) =>
      _client.downloadFile(
        recordId: recordId,
        filename: filename,
        thumb: thumb,
      );

  /// Updates one remote record with a canonical JSON document.
  @override
  Future<RemoteRecord> updateRecord({
    required String id,
    required String dataJson,
    String? baseUpdated,
  }) =>
      _client.updateRecord(
          id: id, dataJson: dataJson, baseUpdated: baseUpdated);

  /// Sends a transactional PocketBase batch of record upserts.
  @override
  Future<List<PushResult>> pushBatch(List<PushOp> ops) =>
      _client.pushBatch(ops);
}
