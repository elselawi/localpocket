part of 'contract.dart';

/// One wire-level request envelope: a stable tag plus its typed payload.
final class WireRequest {
  const WireRequest({required this.tag, required this.payload});
  final String tag;
  final Map<String, Object?> payload;
}

/// One wire-level result envelope. Decoding verifies the tag is the result
/// family expected for the request being answered.
final class WireResult {
  const WireResult({required this.tag, required this.payload});
  final String tag;
  final Map<String, Object?> payload;
}

/// One wire-level event envelope.
final class WireEvent {
  const WireEvent({required this.tag, required this.payload});
  final String tag;
  final Map<String, Object?> payload;
}

/// Exhaustive codecs for the contract. Encoding is compiler-exhaustive over
/// the sealed hierarchies; decoding validates every payload and rejects
/// unknown tags, missing fields, and wrong types with [WireException].
abstract final class ContractCodec {
  /// One representative instance per request variant. Used by contract tests
  /// to prove every variant round-trips and every tag is unique.
  static const List<Request> requestSamples = [
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
  ];

  /// One representative instance per event variant.
  static const List<Event> eventSamples = [
    CommittedChange(
      store: 's',
      id: 'i',
      origin: ChangeOrigin.local,
      action: ChangeAction.create,
      newRecord: {'id': 'i'},
      changedFields: {'name'},
    ),
    WatchSnapshot(subscription: 'x', items: []),
  ];

  /// request tag → the result tag that answers it.
  static final Map<String, String> requestResultTags = {
    for (final r in requestSamples) r.tag: r.resultTag,
  };

  // -- requests -------------------------------------------------------------

  static Map<String, Object?> encodeRequest(Request request) => {
        'tag': request.tag,
        'payload': encodeWireValue(request.toJson()),
      };

  static WireRequest encodeRequestEnvelope(Request request) {
    final m = encodeRequest(request);
    return WireRequest(
        tag: m['tag']! as String,
        payload: m['payload']! as Map<String, Object?>);
  }

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
        final durability = TransactionDurability.values
            .where((d) => d.name == durabilityName)
            .firstOrNull;
        if (durabilityName is String && durability == null) {
          throw WireException('Unknown tx durability: $durabilityName');
        }
        return TransactionBeginRequest(
          readOnly: readOnly,
          durability: durability ?? TransactionDurability.normal,
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

  static Map<String, Object?> encodeResult(Result result) => {
        'tag': result.tag,
        'payload': encodeWireValue(result.toJson()),
      };

  /// Decodes a result envelope, verifying it is the result family expected
  /// for [request]. A valid result for the wrong operation is rejected.
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
          for (final r in rows) r == null ? null : _stringMap(r, 'rows'),
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
          items: [for (final i in items) _stringMap(i, 'items')],
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
      default:
        throw WireException('Unknown result tag: $tag');
    }
  }

  // -- events ---------------------------------------------------------------

  static Map<String, Object?> encodeEvent(Event event) => {
        'tag': event.tag,
        'payload': event.toJson(),
      };

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
          items: [for (final i in items) _stringMap(i, 'items')],
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
