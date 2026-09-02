part of 'contract.dart';

/// {@template localpocket.wire_request}
/// One wire-level request envelope: a stable tag plus its typed payload.
/// {@endtemplate}
final class WireRequest {
  /// {@macro localpocket.wire_request}
  const WireRequest({required this.tag, required this.payload});

  /// Stable wire tag naming the request variant.
  final String tag;

  /// The typed payload of the request.
  final Map<String, Object?> payload;
}

/// One wire-level result envelope; decoding verifies the tag matches the
/// expected result family.
///
/// {@template localpocket.wire_result}
/// {@endtemplate}
final class WireResult {
  /// {@macro localpocket.wire_result}
  const WireResult({required this.tag, required this.payload});

  /// Stable wire tag naming the result variant.
  final String tag;

  /// The typed payload of the result.
  final Map<String, Object?> payload;
}

/// {@template localpocket.wire_event}
/// One wire-level event envelope.
/// {@endtemplate}
final class WireEvent {
  /// {@macro localpocket.wire_event}
  const WireEvent({required this.tag, required this.payload});

  /// Stable wire tag naming the event variant.
  final String tag;

  /// The typed payload of the event.
  final Map<String, Object?> payload;
}

/// Exhaustive codecs for the contract. Encoding is compiler-exhaustive over the
/// sealed hierarchies; decoding validates every payload and rejects unknown
/// tags, missing fields, and wrong types with [WireException].
abstract final class ContractCodec {
  /// One representative instance per request variant (contract-test fixture:
  /// round-trips and tag uniqueness). Final — the binary chunk sample can't be
  /// const and rides outside the const spread.
  static final List<Request> requestSamples = [
    ...const <Request>[
      OpenRequest(stores: [], manifestFingerprints: {}),
      CapabilitiesRequest(),
      HealthRequest(),
      CloseRequest(),
      GetRequest(store: 's', id: 'i'),
      RowsRequest(store: 's', ids: ['i']),
      MutateRequest(store: 's', mutation: MutationPut({})),
      QueryRequest(store: 's', spec: QuerySpecData()),
      CountRequest(store: 's', spec: QuerySpecData()),
      CountDistinctRequest(store: 's', field: 'f', spec: QuerySpecData()),
      DistinctRequest(
        store: 's',
        field: 'f',
        spec: QuerySpecData(
          predicate: LeafSpecData(
              QueryConditionData('qty', QueryConditionOp.gt, value: 3)),
          order: [QueryOrderTermData('qty', desc: true)],
          limit: 7,
        ),
      ),
      IdsRequest(store: 's', spec: QuerySpecData()),
      AggregateRequest(
          store: 's', fn: AggregateFn.sum, field: 'f', spec: QuerySpecData()),
      ExplainRequest(store: 's', spec: QuerySpecData()),
      SearchRequest(store: 's', spec: SearchSpecData(term: 't')),
      TransactionBeginRequest(readOnly: false),
      TransactionCommitRequest(session: 'x'),
      TransactionRollbackRequest(session: 'x'),
      TransactionSavepointRequest(session: 'x', name: 'n'),
      TransactionRollbackToRequest(session: 'x', name: 'n'),
      TransactionReleaseRequest(session: 'x', name: 'n'),
      WatchOneRequest(store: 's', id: 'i'),
      WatchRequest(store: 's', spec: QuerySpecData()),
      WatchCancelRequest(subscription: 'x'),
      AnalyzeRequest(),
      WalCheckpointRequest(),
      VacuumRequest(),
      PruneOutboxRequest(),
      CompactRequest(store: 's', olderThanMs: 0),
      RunMaintenanceRequest(compactOlderThanMs: 0),
      ConflictsListRequest(),
      ConflictGetRequest(store: 's', id: 'i'),
      ResolveConflictRequest(store: 's', id: 'i', merged: {'name': 'm'}),
      AcceptLocalRequest(store: 's', id: 'i'),
      AcceptRemoteRequest(store: 's', id: 'i'),
      ConflictsWatchRequest(),
      FileBeginUploadRequest(store: 's', recordId: 'i', size: 3),
      FileFinishRequest(session: 'x'),
      FileAbortRequest(session: 'x'),
      FilesListRequest(store: 's', recordId: 'i'),
      FileOpenRequest(store: 's', recordId: 'i'),
      FileCreditRequest(stream: 'x', bytes: 1),
      FileRemoveRequest(store: 's', recordId: 'i'),
      FileGcRequest(),
      EnforceStorageCapRequest(maxBytes: 1),
      StorageStatusRequest(),
      SyncStartRequest(baseUrl: 'http://x'),
      SyncStopRequest(),
      SyncNowRequest(),
      SyncPauseRequest(),
      SyncResumeRequest(),
      SyncUpdateAuthRequest(token: 't'),
      SyncSetConnectivityRequest(online: true),
      SyncStatusRequest(),
    ],
    // Binary payloads can't be const; rides outside the const spread.
    FileChunkRequest(session: 'x', chunk: Uint8List.fromList([1, 2, 3])),
  ];

  /// One representative instance per result variant.
  static const List<Result> resultSamples = [
    OkResult(),
    CapabilitiesResult(
      sqliteVersion: '3.0.0',
      hasStrict: true,
      walSupported: true,
      hasFts5: true,
      isWeb: false,
    ),
    HealthResult(ok: true, sqliteVersion: '3.0.0'),
    RowResult(null),
    RowsResult([]),
    MutationResult(ids: []),
    QueryRowsResult(
      items: [],
      hasNext: false,
      hasPrev: false,
      nextCursor: null,
      prevCursor: null,
    ),
    CountResult(0),
    DistinctResult([]),
    IdsResult([]),
    AggregateResult(null),
    ExplainResult(''),
    SearchHitsResult([]),
    TransactionBeginResult(session: 'x'),
    WatchStartedResult(subscription: 'x'),
    PruneOutboxResult(removed: 0),
    CompactResult(removed: 0),
    ConflictsResult([]),
    ConflictResult(null),
    FileUploadSessionResult(session: 'x', maxChunkBytes: 1),
    FileRefResult(
      FileRefData(
        refId: 'r',
        store: 's',
        recordId: 'i',
        field: attachmentFieldDefault,
        hash: 'h',
        state: 'pending_upload',
      ),
    ),
    FileRefsResult([]),
    FileOpenResult(stream: 'x'),
    FileGcResult(cleaned: 0),
    FileCapResult(evicted: 0),
    StorageStatusResult(durable: false),
    SyncStartResult(state: SyncEngineState.idle),
    SyncReportResult(report: SyncReportData(pushed: 1)),
    SyncStatusResult(status: SyncStatusData.closed),
  ];

  /// One representative instance per event variant (final — the binary chunk
  /// event can't be const and rides outside the const spread).
  static final List<Event> eventSamples = [
    ...const <Event>[
      CommittedChange(
        store: 's',
        id: 'i',
        origin: ChangeOrigin.local,
        action: ChangeAction.create,
        newRecord: {'id': 'i'},
        changedFields: {'name'},
      ),
      WatchSnapshot(subscription: 'x', items: []),
      ConflictsSnapshot(
        subscription: 'x',
        conflicts: [
          ConflictData(
            store: 's',
            recordId: 'i',
            base: {'id': 'i'},
            local: {'id': 'i'},
            remote: {'id': 'i'},
            dirtyLocal: {'name'},
            dirtyRemote: {'title'},
            detectedAt: 0,
          ),
        ],
      ),
      SyncStatusEvent(status: SyncStatusData.closed),
      AuthRequiredEvent(),
    ],
    FileChunkEvent(stream: 'x', chunk: Uint8List.fromList([9])),
  ];

  /// request tag → the result tag that answers it.
  static final Map<String, String> requestResultTags = {
    for (final r in requestSamples) r.tag: r.resultTag,
  };

  // -- requests -------------------------------------------------------------

  /// Encodes a request into its wire map (tag plus payload).
  static Map<String, Object?> encodeRequest(Request request) => {
        'tag': request.tag,
        'payload': encodeWireValue(request.toJson()),
      };

  /// Wraps a request into its wire envelope.
  static WireRequest encodeRequestEnvelope(Request request) {
    final m = encodeRequest(request);
    return WireRequest(
        tag: m['tag']! as String,
        payload: m['payload']! as Map<String, Object?>);
  }

  /// Decodes a request map (or envelope payload) into its typed variant;
  /// throws [WireException] for unknown tags or malformed payloads.
  static Request decodeRequest(Map<String, Object?> raw) {
    final tag = raw['tag'];
    if (tag is! String) throw WireException('Missing request tag.');
    final payloadRaw = raw['payload'];
    if (payloadRaw == null) throw WireException('Missing request payload.');
    final payload = decodeWireValue(payloadRaw);
    if (payload is! Map<String, Object?>) {
      throw WireException('Malformed request payload.');
    }
    final request = _decodeRequestPayload(tag, payload);
    if (request == null) throw WireException('Unknown request tag: $tag');
    return request;
  }

  static Request? _decodeRequestPayload(String tag, Map<String, Object?> m) {
    switch (tag) {
      case 'open':
        final stores = m['stores'];
        final fingerprints = m['manifestFingerprints'];
        if (stores is! List || fingerprints is! Map) {
          throw WireException('Malformed open payload.');
        }
        return OpenRequest(
          stores: [for (final s in stores) _stringMap(s, 'stores')],
          manifestFingerprints: {
            for (final e in fingerprints.entries)
              if (e.key is String && e.value is String)
                e.key as String: e.value as String,
          },
        );
      case 'capabilities':
        return const CapabilitiesRequest();
      case 'health':
        return const HealthRequest();
      case 'close':
        return const CloseRequest();
      case 'fileBeginUpload':
        final size = m['size'];
        if (size is! int) {
          throw WireException('Malformed fileBeginUpload payload.');
        }
        return FileBeginUploadRequest(
          store: _store(m),
          recordId: _required(m, 'recordId'),
          size: size,
          field: m['field'] is String
              ? m['field']! as String
              : attachmentFieldDefault,
          name: m['name'] is String ? m['name']! as String : 'blob.bin',
          expectedSha256: m['expectedSha256'] is String
              ? m['expectedSha256']! as String
              : null,
          allowVolatileBlobs: m['allowVolatileBlobs'] == true,
        );
      case 'fileChunk':
        final chunk = m['chunk'];
        if (chunk is! Uint8List) {
          throw WireException('Malformed fileChunk payload.');
        }
        return FileChunkRequest(session: _required(m, 'session'), chunk: chunk);
      case 'fileFinish':
        return FileFinishRequest(session: _required(m, 'session'));
      case 'fileAbort':
        return FileAbortRequest(session: _required(m, 'session'));
      case 'filesList':
        return FilesListRequest(
          store: _store(m),
          recordId: _required(m, 'recordId'),
          field: m['field'] is String
              ? m['field']! as String
              : attachmentFieldDefault,
        );
      case 'fileOpen':
        final index = m['index'];
        if (index != null && index is! int) {
          throw WireException('Malformed fileOpen payload.');
        }
        return FileOpenRequest(
          store: _store(m),
          recordId: _required(m, 'recordId'),
          field: m['field'] is String
              ? m['field']! as String
              : attachmentFieldDefault,
          index: index is int ? index : 0,
          refId: m['refId'] is String ? m['refId']! as String : null,
        );
      case 'fileCredit':
        final bytes = m['bytes'];
        if (bytes is! int) {
          throw WireException('Malformed fileCredit payload.');
        }
        return FileCreditRequest(stream: _required(m, 'stream'), bytes: bytes);
      case 'fileClose':
        return FileCloseRequest(stream: _required(m, 'stream'));
      case 'fileRemove':
        final index = m['index'];
        if (index != null && index is! int) {
          throw WireException('Malformed fileRemove payload.');
        }
        return FileRemoveRequest(
          store: _store(m),
          recordId: _required(m, 'recordId'),
          field: m['field'] is String
              ? m['field']! as String
              : attachmentFieldDefault,
          index: index is int ? index : 0,
          refId: m['refId'] is String ? m['refId']! as String : null,
        );
      case 'fileGc':
        final blobGraceMs = m['blobGraceMs'];
        final tmpGraceMs = m['tmpGraceMs'];
        if (blobGraceMs is! int || tmpGraceMs is! int) {
          throw WireException('Malformed fileGc payload.');
        }
        return FileGcRequest(blobGraceMs: blobGraceMs, tmpGraceMs: tmpGraceMs);
      case 'fileEnforceStorageCap':
        final maxBytes = m['maxBytes'];
        if (maxBytes is! int) {
          throw WireException('Malformed fileEnforceStorageCap payload.');
        }
        return EnforceStorageCapRequest(maxBytes: maxBytes);
      case 'fileStorageStatus':
        return const StorageStatusRequest();
      case 'syncStart':
        final baseUrl = m['baseUrl'];
        if (baseUrl is! String) {
          throw WireException('Malformed syncStart payload.');
        }
        return SyncStartRequest(
          baseUrl: baseUrl,
          scopeId: m['scopeId'] is String ? m['scopeId']! as String : null,
          token: m['token'] is String ? m['token']! as String : null,
        );
      case 'syncStop':
        return const SyncStopRequest();
      case 'syncNow':
        return const SyncNowRequest();
      case 'syncPause':
        return const SyncPauseRequest();
      case 'syncResume':
        return const SyncResumeRequest();
      case 'syncUpdateAuth':
        return SyncUpdateAuthRequest(
            token: m['token'] is String ? m['token']! as String : null);
      case 'syncSetConnectivity':
        final online = m['online'];
        if (online is! bool) {
          throw WireException('Malformed syncSetConnectivity payload.');
        }
        return SyncSetConnectivityRequest(online: online);
      case 'syncStatus':
        return const SyncStatusRequest();
      case 'get':
        return GetRequest(
          store: _store(m),
          id: _required(m, 'id'),
          session: _optionalSession(m),
        );
      case 'rows':
        final ids = m['ids'];
        if (ids is! List) throw WireException('Malformed rows payload.');
        return RowsRequest(
          store: _store(m),
          ids: [for (final i in ids) i as String],
          session: _optionalSession(m),
        );
      case 'mutate':
        return MutateRequest(
          store: _store(m),
          mutation: _decodeMutation(m['mutation']),
          session: _optionalSession(m),
        );
      case 'query':
        return QueryRequest(
          store: _store(m),
          spec: QuerySpecData.fromJson(m['spec']),
          session: _optionalSession(m),
        );
      case 'count':
        return CountRequest(
          store: _store(m),
          spec: QuerySpecData.fromJson(m['spec']),
          session: _optionalSession(m),
        );
      case 'countDistinct':
        return CountDistinctRequest(
          store: _store(m),
          field: _required(m, 'field'),
          spec: QuerySpecData.fromJson(m['spec']),
          session: _optionalSession(m),
        );
      case 'distinct':
        return DistinctRequest(
          store: _store(m),
          field: _required(m, 'field'),
          spec: QuerySpecData.fromJson(m['spec'] ?? const <String, Object?>{}),
          session: _optionalSession(m),
        );
      case 'ids':
        return IdsRequest(
          store: _store(m),
          spec: QuerySpecData.fromJson(m['spec']),
          session: _optionalSession(m),
        );
      case 'aggregate':
        final fnName = m['fn'];
        final fn =
            AggregateFn.values.where((a) => a.name == fnName).firstOrNull;
        if (fn == null) throw WireException('Unknown aggregate: $fnName');
        return AggregateRequest(
          store: _store(m),
          fn: fn,
          field: _required(m, 'field'),
          spec: QuerySpecData.fromJson(m['spec']),
          session: _optionalSession(m),
        );
      case 'explain':
        return ExplainRequest(
          store: _store(m),
          spec: QuerySpecData.fromJson(m['spec']),
          session: _optionalSession(m),
        );
      case 'search':
        return SearchRequest(
          store: _store(m),
          spec: SearchSpecData.fromJson(m['spec']),
          session: _optionalSession(m),
        );
      case 'txBegin':
        final readOnly = m['readOnly'];
        if (readOnly is! bool) {
          throw WireException('Malformed txBegin payload.');
        }
        final durabilityName = m['durability'];
        // Absent keeps the default; a present value must be a known
        // durability name — a wrong-typed one can never be silently
        // downgraded to `normal`.
        final durability = durabilityName == null
            ? TransactionDurability.normal
            : durabilityName is String
                ? TransactionDurability.values
                        .where((d) => d.name == durabilityName)
                        .firstOrNull ??
                    (throw WireException(
                        'Unknown tx durability: $durabilityName'))
                : throw WireException('Malformed txBegin durability.');
        return TransactionBeginRequest(
          readOnly: readOnly,
          durability: durability,
        );
      case 'txCommit':
      case 'txRollback':
        final session = m['session'];
        if (session is! String) throw WireException('Malformed tx payload.');
        return tag == 'txCommit'
            ? TransactionCommitRequest(session: session)
            : TransactionRollbackRequest(session: session);
      case 'txSavepoint':
      case 'txRollbackTo':
      case 'txRelease':
        final session = m['session'];
        final name = m['name'];
        if (session is! String || name is! String) {
          throw WireException('Malformed savepoint payload.');
        }
        return switch (tag) {
          'txSavepoint' =>
            TransactionSavepointRequest(session: session, name: name),
          'txRollbackTo' =>
            TransactionRollbackToRequest(session: session, name: name),
          _ => TransactionReleaseRequest(session: session, name: name),
        };
      case 'watchOne':
        return WatchOneRequest(store: _store(m), id: _required(m, 'id'));
      case 'watch':
        return WatchRequest(
            store: _store(m), spec: QuerySpecData.fromJson(m['spec']));
      case 'watchCancel':
        final subscription = m['subscription'];
        if (subscription is! String) {
          throw WireException('Malformed watchCancel payload.');
        }
        return WatchCancelRequest(subscription: subscription);
      case 'analyze':
        return AnalyzeRequest(
            store: m['store'] is String ? m['store']! as String : null);
      case 'walCheckpoint':
        return const WalCheckpointRequest();
      case 'vacuum':
        return const VacuumRequest();
      case 'pruneOutbox':
        return const PruneOutboxRequest();
      case 'compact':
        final store = m['store'];
        final olderThanMs = m['olderThanMs'];
        if (store is! String || olderThanMs is! int) {
          throw WireException('Malformed compact payload.');
        }
        return CompactRequest(store: store, olderThanMs: olderThanMs);
      case 'runMaintenance':
        final compactOlderThanMs = m['compactOlderThanMs'];
        if (compactOlderThanMs is! int) {
          throw WireException('Malformed runMaintenance payload.');
        }
        return RunMaintenanceRequest(compactOlderThanMs: compactOlderThanMs);
      case 'conflictsList':
        final store = m['store'];
        return ConflictsListRequest(store: store is String ? store : null);
      case 'conflictGet':
        return ConflictGetRequest(store: _store(m), id: _required(m, 'id'));
      case 'conflictsResolve':
        final merged = m['merged'];
        if (merged is! Map) {
          throw WireException('Malformed conflictsResolve payload.');
        }
        return ResolveConflictRequest(
          store: _store(m),
          id: _required(m, 'id'),
          merged: _stringMap(merged, 'merged'),
        );
      case 'conflictsAcceptLocal':
        return AcceptLocalRequest(store: _store(m), id: _required(m, 'id'));
      case 'conflictsAcceptRemote':
        return AcceptRemoteRequest(store: _store(m), id: _required(m, 'id'));
      case 'conflictsWatch':
        final store = m['store'];
        return ConflictsWatchRequest(store: store is String ? store : null);
      default:
        return null;
    }
  }

  static String _store(Map<String, Object?> m) {
    final store = m['store'];
    if (store is! String) throw WireException('Malformed store name.');
    return store;
  }

  static String _required(Map<String, Object?> m, String field) {
    final v = m[field];
    if (v is! String) throw WireException('Malformed field "$field".');
    return v;
  }

  static String? _optionalSession(Map<String, Object?> m) {
    final v = m['session'];
    if (v == null) return null;
    if (v is! String) throw WireException('Malformed session id.');
    return v;
  }

  // -- results --------------------------------------------------------------

  /// Encodes a result into its wire map (tag plus payload).
  static Map<String, Object?> encodeResult(Result result) => {
        'tag': result.tag,
        'payload': encodeWireValue(result.toJson()),
      };

  /// Decodes a result map for [request], verifying the tag matches the
  /// expected result family; throws [WireException] otherwise.
  static Result decodeResult(Request request, Map<String, Object?> raw) {
    final tag = raw['tag'];
    if (tag is! String) throw WireException('Missing result tag.');
    final expected = requestResultTags[request.tag];
    if (expected == null) {
      throw WireException('Unknown request tag: ${request.tag}');
    }
    if (tag != expected) {
      throw WireException(
          'Result tag "$tag" does not answer request "${request.tag}" '
          '(expected "$expected").');
    }
    final payloadRaw = raw['payload'];
    if (payloadRaw == null) throw WireException('Missing result payload.');
    final payload = decodeWireValue(payloadRaw);
    if (payload is! Map<String, Object?>) {
      throw WireException('Malformed result payload.');
    }
    return _decodeResultPayload(tag, payload);
  }

  static Result _decodeResultPayload(String tag, Map<String, Object?> m) {
    switch (tag) {
      case OkResult.tagValue:
        return const OkResult();
      case CapabilitiesResult.tagValue:
        return CapabilitiesResult(
          sqliteVersion: m['sqliteVersion'] as String? ?? '',
          hasStrict: m['hasStrict'] == true,
          walSupported: m['walSupported'] == true,
          hasFts5: m['hasFts5'] == true,
          isWeb: m['isWeb'] == true,
          storage: m['storage'] as String? ?? 'file',
          durable: m['durable'] != false,
          journal: m['journal'] as String? ?? 'unknown',
        );
      case HealthResult.tagValue:
        return HealthResult(
          ok: m['ok'] == true,
          sqliteVersion: m['sqliteVersion'] as String? ?? '',
        );
      case RowResult.tagValue:
        final row = m['row'];
        return RowResult(row == null ? null : _stringMap(row, 'row'));
      case RowsResult.tagValue:
        final rows = m['rows'];
        if (rows is! List) throw WireException('Malformed rows payload.');
        return RowsResult([
          for (var i = 0; i < rows.length; i++)
            rows[i] == null ? null : _stringMap(rows[i], 'rows[$i]'),
        ]);
      case MutationResult.tagValue:
        final ids = m['ids'];
        return MutationResult(
          ids: ids is List ? [for (final i in ids) i as String] : const [],
        );
      case QueryRowsResult.tagValue:
        final items = m['items'];
        if (items is! List) throw WireException('Malformed page payload.');
        return QueryRowsResult(
          items: _stringMapList(items, 'items'),
          hasNext: m['hasNext'] == true,
          hasPrev: m['hasPrev'] == true,
          nextCursor:
              m['nextCursor'] is String ? m['nextCursor']! as String : null,
          prevCursor:
              m['prevCursor'] is String ? m['prevCursor']! as String : null,
        );
      case CountResult.tagValue:
        final value = m['value'];
        if (value is! int) throw WireException('Malformed count payload.');
        return CountResult(value);
      case DistinctResult.tagValue:
        final values = m['values'];
        if (values is! List) throw WireException('Malformed distinct payload.');
        return DistinctResult([for (final v in values) v]);
      case IdsResult.tagValue:
        final ids = m['ids'];
        if (ids is! List) throw WireException('Malformed ids payload.');
        return IdsResult([for (final i in ids) i as String]);
      case AggregateResult.tagValue:
        final value = m['value'];
        return AggregateResult(value is num ? value : null);
      case ExplainResult.tagValue:
        final plan = m['plan'];
        if (plan is! String) throw WireException('Malformed explain payload.');
        return ExplainResult(plan);
      case SearchHitsResult.tagValue:
        final hits = m['hits'];
        if (hits is! List) throw WireException('Malformed search payload.');
        return SearchHitsResult([
          for (final h in hits) SearchHitData.fromJson(h),
        ]);
      case TransactionBeginResult.tagValue:
        final session = m['session'];
        if (session is! String) {
          throw WireException('Malformed txBegin payload.');
        }
        return TransactionBeginResult(session: session);
      case WatchStartedResult.tagValue:
        final subscription = m['subscription'];
        if (subscription is! String) {
          throw WireException('Malformed watchStarted payload.');
        }
        return WatchStartedResult(subscription: subscription);
      case PruneOutboxResult.tagValue:
      case CompactResult.tagValue:
        final removed = m['removed'];
        if (removed is! int) {
          throw WireException('Malformed maintenance payload.');
        }
        return tag == PruneOutboxResult.tagValue
            ? PruneOutboxResult(removed: removed)
            : CompactResult(removed: removed);
      case ConflictsResult.tagValue:
        final conflicts = m['conflicts'];
        if (conflicts is! List) {
          throw WireException('Malformed conflicts payload.');
        }
        return ConflictsResult([
          for (final c in conflicts)
            ConflictData.fromJson(_stringMap(c, 'conflicts')),
        ]);
      case ConflictResult.tagValue:
        final conflict = m['conflict'];
        return ConflictResult(conflict == null
            ? null
            : ConflictData.fromJson(_stringMap(conflict, 'conflict')));
      case FileUploadSessionResult.tagValue:
        final session = m['session'];
        final maxChunkBytes = m['maxChunkBytes'];
        if (session is! String || maxChunkBytes is! int) {
          throw WireException('Malformed fileUploadSession payload.');
        }
        return FileUploadSessionResult(
            session: session, maxChunkBytes: maxChunkBytes);
      case FileRefResult.tagValue:
        final ref = m['ref'];
        return FileRefResult(
            ref == null ? null : FileRefData.fromJson(_stringMap(ref, 'ref')));
      case FileRefsResult.tagValue:
        final refs = m['refs'];
        if (refs is! List) {
          throw WireException('Malformed fileRefs payload.');
        }
        return FileRefsResult([
          for (final r in _stringMapList(refs, 'refs')) FileRefData.fromJson(r),
        ]);
      case FileOpenResult.tagValue:
        final stream = m['stream'];
        if (stream is! String) {
          throw WireException('Malformed fileOpen payload.');
        }
        return FileOpenResult(stream: stream);
      case FileGcResult.tagValue:
        final cleaned = m['cleaned'];
        if (cleaned is! int) {
          throw WireException('Malformed fileGc payload.');
        }
        return FileGcResult(cleaned: cleaned);
      case FileCapResult.tagValue:
        final evicted = m['evicted'];
        if (evicted is! int) {
          throw WireException('Malformed fileCap payload.');
        }
        return FileCapResult(evicted: evicted);
      case StorageStatusResult.tagValue:
        return StorageStatusResult(durable: m['durable'] == true);
      case SyncStartResult.tagValue:
        final state = m['state'];
        if (state is! String) {
          throw WireException('Malformed syncStart payload.');
        }
        return SyncStartResult(state: _engineState(state));
      case SyncReportResult.tagValue:
        final report = m['report'];
        if (report is! Map) {
          throw WireException('Malformed syncReport payload.');
        }
        return SyncReportResult(
            report: SyncReportData.fromJson(_stringMap(report, 'report')));
      case SyncStatusResult.tagValue:
        final status = m['status'];
        if (status is! Map) {
          throw WireException('Malformed syncStatus payload.');
        }
        return SyncStatusResult(
            status: SyncStatusData.fromJson(_stringMap(status, 'status')));
      default:
        throw WireException('Unknown result tag: $tag');
    }
  }

  // -- events ---------------------------------------------------------------

  /// Encodes an event into its wire map (tag plus payload).
  static Map<String, Object?> encodeEvent(Event event) => {
        'tag': event.tag,
        'payload': event.toJson(),
      };

  /// Decodes an event map into its typed variant; throws [WireException] for
  /// unknown tags or malformed payloads.
  static Event decodeEvent(Map<String, Object?> raw) {
    final tag = raw['tag'];
    if (tag is! String) throw WireException('Missing event tag.');
    final payloadRaw = raw['payload'];
    if (payloadRaw is! Map) throw WireException('Missing event payload.');
    final payload = decodeWireValue(payloadRaw);
    if (payload is! Map<String, Object?>) {
      throw WireException('Malformed event payload.');
    }
    switch (tag) {
      case CommittedChange.tagValue:
        final store = payload['store'];
        final id = payload['id'];
        final changedFields = payload['changedFields'];
        if (store is! String || id is! String) {
          throw WireException('Malformed committedChange payload.');
        }
        final oldRecord = payload['oldRecord'];
        final newRecord = payload['newRecord'];
        return CommittedChange(
          store: store,
          id: id,
          origin: _changeOrigin(payload['origin']),
          action: _changeAction(payload['action']),
          oldRecord:
              oldRecord == null ? null : _stringMap(oldRecord, 'oldRecord'),
          newRecord:
              newRecord == null ? null : _stringMap(newRecord, 'newRecord'),
          changedFields: changedFields is List
              ? {for (final f in changedFields) f as String}
              : const {},
        );
      case WatchSnapshot.tagValue:
        final subscription = payload['subscription'];
        final items = payload['items'];
        if (subscription is! String || items is! List) {
          throw WireException('Malformed watchSnapshot payload.');
        }
        return WatchSnapshot(
          subscription: subscription,
          items: _stringMapList(items, 'items'),
        );
      case ConflictsSnapshot.tagValue:
        final subscription = payload['subscription'];
        final conflicts = payload['conflicts'];
        if (subscription is! String || conflicts is! List) {
          throw WireException('Malformed conflictsSnapshot payload.');
        }
        return ConflictsSnapshot(
          subscription: subscription,
          conflicts: [
            for (final c in conflicts)
              ConflictData.fromJson(_stringMap(c, 'conflicts'))
          ],
        );
      case FileChunkEvent.tagValue:
        final stream = payload['stream'];
        final chunk = payload['chunk'];
        if (stream is! String || chunk is! Uint8List) {
          throw WireException('Malformed fileChunk payload.');
        }
        return FileChunkEvent(
          stream: stream,
          chunk: chunk,
          last: payload['last'] == true,
          error:
              payload['error'] is String ? payload['error']! as String : null,
        );
      case SyncStatusEvent.tagValue:
        final status = payload['status'];
        if (status is! Map) {
          throw WireException('Malformed syncStatusEvent payload.');
        }
        return SyncStatusEvent(
            status: SyncStatusData.fromJson(_stringMap(status, 'status')));
      case AuthRequiredEvent.tagValue:
        return const AuthRequiredEvent();
      default:
        throw WireException('Unknown event tag: $tag');
    }
  }

  static Map<String, Object?> _stringMap(Object? v, String field) {
    if (v is Map) {
      return {for (final e in v.entries) e.key.toString(): e.value};
    }
    throw WireException('Malformed field "$field".');
  }

  /// Decodes a list of string-keyed maps; a malformed element names the
  /// failing index so large payloads stay debuggable.
  static List<Map<String, Object?>> _stringMapList(Object? v, String field) {
    if (v is! List) throw WireException('Malformed field "$field".');
    return [
      for (var i = 0; i < v.length; i++) _stringMap(v[i], '$field[$i]'),
    ];
  }

  static ChangeOrigin _changeOrigin(Object? v) => switch (v) {
        final String s when ChangeOrigin.values.any((o) => o.name == s) =>
          ChangeOrigin.values.byName(s),
        _ => throw WireException('Malformed committedChange origin.'),
      };

  static ChangeAction _changeAction(Object? v) => switch (v) {
        final String s when ChangeAction.values.any((o) => o.name == s) =>
          ChangeAction.values.byName(s),
        _ => throw WireException('Malformed committedChange action.'),
      };
}
