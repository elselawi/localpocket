/// The PocketBase adapter: a [SyncBackend] over the real PB wire contract.
/// Confined to `localpocket/pocketbase.dart` — core and sync never import it
/// (layering rule 3). Owns the wire client, the auth manager, the realtime
/// SSE layer (debounce, delete verification, gap hints), and the batch probe
/// (200 enables; 403 disables permanently).
library;

import 'dart:async';

import '../../kernel/hashing.dart';
import '../../kernel/sync/sync_backend.dart';
import 'auth.dart';
import 'field_names.dart';
import 'pb_client.dart';
import 'sse.dart';
import 'transport.dart';

/// {@template localpocket.pocket_base_backend}
/// PocketBase implementation of [SyncBackend].
///
/// Create one backend per authenticated user and pass it to [SyncEngine]:
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
/// Batch support is probed during [prepare]; realtime is optional — polling
/// and anti-entropy sweeps remain the correctness backstop.
///
/// CONCURRENCY — LAST-WRITE-WINS AT THE WIRE: PocketBase has no conditional
/// writes, so concurrent edits resolve last-write-wins on the server; the
/// client-side 3-way merge only protects time-serialized pushes. Strict
/// optimistic concurrency must be enforced server-side.
/// {@endtemplate}
abstract base class PBBackend implements SyncBackend {
  /// Creates a PocketBase synchronization backend.
  ///
  /// {@macro localpocket.pocket_base_backend}
  PBBackend({
    required this.baseUrl,
    required this.tokenProvider,
    this.realtimeDebounce = const Duration(milliseconds: 300),
    this.maxPage = 200,
    this.maxBatch = 25,
    this.identity,
    String? realtimeCollection,
    HttpTransport? transport,
    this.fieldNames = const PbFieldNames(),
  })  : _explicitRealtimeCollection = realtimeCollection,
        transport = transport ?? PackageHttpTransport() {
    _auth = AuthManager(tokenProvider);
    _client = PbClient(
        transport: this.transport,
        baseUrl: baseUrl,
        auth: _auth,
        fieldNames: fieldNames);
  }

  /// LocalPocket stores represented in the remote data collection.
  ///
  /// Abstract: every concrete backend must declare the stores it serves. An
  /// empty default would silently present a backend that syncs nothing.
  List<String> get storeNames;

  /// The wire-field configuration: collection and record field names.
  ///
  /// This adapter is the ONLY place these names are known; the kernel sees
  /// only the generic `RemoteRecord` vocabulary.
  final PbFieldNames fieldNames;

  /// The realtime subscription collection: the explicitly set realtime
  /// collection when given, else [PbFieldNames.collection].
  String get effectiveCollection =>
      _explicitRealtimeCollection ?? fieldNames.collection;

  /// PocketBase server base URL.
  final Uri baseUrl;

  /// Application-supplied token provider.
  final TokenProvider tokenProvider;

  /// Realtime coalescing window per store (default 300 ms).
  final Duration realtimeDebounce;

  /// Maximum records requested per pull page.
  final int maxPage;

  /// Maximum operations sent in one remote batch.
  final int maxBatch;

  /// Stable login identity (used for scope file naming). When null, derived
  /// from [TokenProvider.identity]; when both are null, [scopeId] throws so
  /// sync state is never shared across accounts.
  final String? identity;

  /// Remote collection the realtime client subscribes to (PB realtime is
  /// per-collection). Defaults to [PbFieldNames.collection].
  final String? _explicitRealtimeCollection;

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
  /// scope and invalidates every cursor.
  ///
  /// Throws when neither this backend nor its [tokenProvider] exposes an
  /// identity — without one, every account on the server would share a single
  /// scope and bleed cursors/watermarks across users.
  @override
  String get scopeId {
    final id = identity ?? tokenProvider.identity;
    if (id == null) {
      throw StateError(
          'No sync identity: pass `identity:` to PocketBaseBackend or '
          'override TokenProvider.identity with a stable per-account id. '
          'Without one, sync state would be shared across all accounts on '
          'this server.');
    }
    return sha256Hex('$baseUrl|$id').substring(0, 12);
  }

  // ------------------------------------------------------------ lifecycle --

  /// Opens the realtime SSE connection. Idempotent. Realtime events are
  /// hints; the engine still performs authoritative pulls when events are
  /// missed or the connection reconnects.
  Future<void> startRealtime() async {
    if (_realtime != null) return;
    final rt = PbRealtime(
      client: _client,
      collectionNames: [effectiveCollection],
      backoffBase: const Duration(milliseconds: 200),
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
    // (Re)connect just closed a gap: every store must be re-pulled.
    for (final s in storeNames) {
      _debounce(s, BackendHint(s));
    }
  }

  void _onRealtimeEvent(PbRealtimeEvent ev) {
    // The remote collection carries every store; drop events for foreign
    // stores here so no wasted delete-verification GET is issued (the
    // engine also guards).
    if (!storeNames.contains(ev.record.store)) return;
    if (ev.action == 'delete') {
      // Deletes always verify via targeted GET.
      unawaited(_verifyDelete(ev.record));
      return;
    }
    _debounce(ev.record.store,
        BackendHint(ev.record.store, BackendHintKind.changed, ev.record));
  }

  Future<void> _verifyDelete(RemoteRecord ev) async {
    if (!storeNames.contains(ev.store)) return;
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
    // Still visible: re-deliver as changed (fast-path or pull).
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
            field: '${fieldNames.attachmentsField}+',
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

/// PocketBase backend with its realtime/SSE layer exposed for raw probing
/// (tests and tooling); regular clients use [PocketBaseBackend].
final class PocketBaseRawBackend extends PBBackend {
  /// Creates a PocketBase synchronization backend.
  ///
  /// {@macro localpocket.pocket_base_backend}
  PocketBaseRawBackend({
    required super.baseUrl,
    required super.tokenProvider,
    super.identity,
    super.maxBatch,
    super.maxPage,
    super.realtimeCollection,
    super.realtimeDebounce,
    super.transport,
    super.fieldNames,
    this.stores = const [],
  });

  /// LocalPocket stores represented in the remote data collection.
  final List<String> stores;

  @override
  List<String> get storeNames => stores;
}

/// Runtime-facing sync backend factory: the kernel's sync start builds its
/// engine backend through this seam and releases adapter state (realtime
/// connection, HTTP client) through [dispose]. Keeps the adapter layer out
/// of the runtime's import graph (R1/R3).
class PocketBaseSyncBackendFactory implements SyncBackendFactory {
  /// Creates the PocketBase backend factory.
  const PocketBaseSyncBackendFactory({this.fieldNames = const PbFieldNames()});

  /// Wire-field configuration every backend created by this factory uses.
  final PbFieldNames fieldNames;

  @override
  Future<SyncBackend> create({
    required Uri baseUrl,
    required SyncTokenSource tokenSource,
    required List<String> stores,
    required String identity,
  }) async {
    final backend = PocketBaseRawBackend(
      baseUrl: baseUrl,
      tokenProvider: _SourceTokenProvider(tokenSource),
      stores: stores,
      identity: identity,
      fieldNames: fieldNames,
    );
    // Sync start owns realtime: the SSE connection opens with the backend.
    await backend.startRealtime();
    return backend;
  }

  @override
  Future<void> dispose(SyncBackend backend) async {
    if (backend is PocketBaseRawBackend) {
      await backend.stopRealtime();
      backend.close();
    }
  }
}

/// Bridges the runtime-owned token source onto the adapter's
/// [TokenProvider]: the current value is always read fresh, so an auth
/// update crosses without rebuilding the backend.
final class _SourceTokenProvider implements TokenProvider {
  _SourceTokenProvider(this._source);

  final SyncTokenSource _source;

  @override
  Future<Token> currentToken() async => Token(await _source.currentToken());

  @override
  Future<Token> refreshToken(Token current) async =>
      Token(await _source.currentToken());

  @override
  String? get identity => _source.identity;
}
