/// Part of `local_pocket.dart` — the kernel command handler.
///
/// One exhaustive dispatcher from typed contract requests to named results,
/// implemented directly over the kernel services (mutation, read, transaction
/// coordination, maintenance). Because the request hierarchy is sealed, the
/// compiler rejects this switch the moment a new command variant is added
/// without a corresponding case — no wildcard, no silent omission.
part of '../core/local_pocket.dart';

/// Marker used to unwind a held transaction/savepoint body on rollback.
class _RollbackSignal implements Exception {
  const _RollbackSignal();
}

/// A held-open interactive transaction.
class _TxSession {
  _TxSession(this.id, this.readOnly);

  final String id;
  final bool readOnly;
  final Completer<void> release = Completer<void>();
  final Completer<void> ready = Completer<void>();
  final List<_SavepointSession> savepoints = [];
  bool rollback = false;
  Tx? tx;
  late final Future<void> future;
}

/// A held-open savepoint within a transaction.
class _SavepointSession {
  _SavepointSession(this.name);
  final String name;
  final Completer<void> release = Completer<void>();
  final Completer<void> ready = Completer<void>();
  bool rollback = false;
  Tx? tx;
  late final Future<void> future;
}

/// The kernel-side command dispatcher.
class KernelCommandHandler implements CommandHandler {
  /// Internal: constructed by [KernelDatabase].
  KernelCommandHandler(this.context) {
    // Committed changes feed the event stream with the record's old/new
    // payloads; nothing is emitted before the causing transaction has
    // committed (the change bus guarantees this). One envelope per affected
    // record: record-event streams and change notifications derive from it.
    _changeSub = context.changeBus.events.listen((event) {
      _events.add(CommittedChange(
        store: event.store,
        id: event.id,
        origin: event.origin,
        action: event.action,
        oldRecord: event.oldRecord == null ? null : Map.of(event.oldRecord!),
        newRecord: event.newRecord == null ? null : Map.of(event.newRecord!),
        changedFields: Set.of(event.changedFields),
      ));
    });
  }

  /// The shared kernel dependencies.
  final KernelContext context;

  final _events = StreamController<Event>.broadcast();
  late final StreamSubscription<RecordChangeEvent> _changeSub;
  final _sessions = <String, _TxSession>{};
  final _watches = <String, StreamSubscription<dynamic>>{};
  int _counter = 0;

  @override
  Stream<Event> get events => _events.stream;

  @override
  Future<Result> handle(Request request) => switch (request) {
        OpenRequest(:final stores, :final manifestFingerprints) => _open(
            stores,
            manifestFingerprints,
          ),
        CapabilitiesRequest() => Future.value(_capabilities()),
        HealthRequest() => Future.value(
            HealthResult(
              ok: true,
              sqliteVersion: context.capabilities.sqliteVersion,
            ),
          ),
        CloseRequest() => close().then((_) => const OkResult()),
        GetRequest(:final store, :final id, :final session) => _withSession(
            session,
            () => _collection(store, session: session).get(id),
            (row) => RowResult(row),
          ),
        RowsRequest(:final store, :final ids, :final session) => _withSession(
            session,
            () async => [
              for (final id in ids)
                await _collection(store, session: session).get(id),
            ],
            (rows) => RowsResult(rows),
          ),
        MutateRequest(:final store, :final mutation, :final session) =>
          _mutate(store, mutation, session),
        QueryRequest(:final store, :final spec, :final session) => _page(
            store,
            spec,
            session,
          ),
        CountRequest(:final store, :final spec, :final session) => _withSession(
            session,
            () => _query(store, spec, session).count(),
            CountResult.new,
          ),
        CountDistinctRequest(
          :final store,
          :final field,
          :final spec,
          :final session,
        ) =>
          _withSession(
            session,
            () => _query(store, spec, session).countDistinct(field),
            CountResult.new,
          ),
        DistinctRequest(
          :final store,
          :final field,
          :final spec,
          :final session,
        ) =>
          _withSession(
            session,
            () => _query(store, spec, session).distinct(field),
            DistinctResult.new,
          ),
        IdsRequest(:final store, :final spec, :final session) => _withSession(
            session,
            () => _query(store, spec, session).ids(),
            IdsResult.new,
          ),
        AggregateRequest(
          :final store,
          :final fn,
          :final field,
          :final spec,
          :final session
        ) =>
          _withSession(
            session,
            () => switch (fn) {
              AggregateFn.sum => _query(store, spec, session).sum(field),
              AggregateFn.avg => _query(store, spec, session).avg(field),
              AggregateFn.min => _query(store, spec, session).min(field),
              AggregateFn.max => _query(store, spec, session).max(field),
            },
            AggregateResult.new,
          ),
        ExplainRequest(:final store, :final spec, :final session) =>
          _withSession(
            session,
            () => _query(store, spec, session).explain(),
            ExplainResult.new,
          ),
        SearchRequest(:final store, :final spec, :final session) => _search(
            store,
            spec,
            session,
          ),
        TransactionBeginRequest(:final readOnly, :final durability) =>
          _begin(readOnly, durability),
        TransactionCommitRequest(:final session) => _settle(session, true),
        TransactionRollbackRequest(:final session) => _settle(session, false),
        TransactionSavepointRequest(:final session, :final name) =>
          _savepoint(session, name),
        TransactionRollbackToRequest(:final session, :final name) =>
          _rollbackTo(session, name),
        TransactionReleaseRequest(:final session, :final name) =>
          _release(session, name),
        WatchOneRequest(:final store, :final id) => _watchOne(store, id),
        WatchRequest(:final store, :final spec) => _watch(store, spec),
        WatchCancelRequest(:final subscription) => _unwatch(subscription),
        AnalyzeRequest(:final store) =>
          context.database.analyze(store).then((_) => const OkResult()),
        WalCheckpointRequest() =>
          context.database.walCheckpoint().then((_) => const OkResult()),
        VacuumRequest() =>
          context.database.vacuum().then((_) => const OkResult()),
        PruneOutboxRequest() => context.database
            .pruneOutbox()
            .then((removed) => PruneOutboxResult(removed: removed)),
        CompactRequest(:final store, :final olderThanMs) => context.database
            .compact(store, olderThan: Duration(milliseconds: olderThanMs))
            .then((removed) => CompactResult(removed: removed)),
      };

  // -- lifecycle ------------------------------------------------------------

  Future<Result> _open(
    List<Map<String, Object?>> stores,
    Map<String, String> fingerprints,
  ) async {
    for (final raw in stores) {
      final schema = CollectionSchema<Object?>.fromJson(raw);
      if (!context.database.storeNames.contains(schema.name)) {
        await context.database.registerStore(schema);
      } else {
        final registered = context.database.requireTable(schema.name).manifest;
        final compiled = SchemaManifest.compile(schema);
        if (registered.fingerprint != compiled.fingerprint) {
          throw StateError('Schema manifest mismatch for "${schema.name}".');
        }
      }
      final expected = fingerprints[schema.name];
      if (expected != null &&
          expected !=
              context.database.requireTable(schema.name).manifest.fingerprint) {
        throw StateError('Schema manifest mismatch for "${schema.name}".');
      }
    }
    return const OkResult();
  }

  CapabilitiesResult _capabilities() {
    final caps = context.capabilities;
    return CapabilitiesResult(
      sqliteVersion: caps.sqliteVersion,
      hasStrict: caps.hasStrict,
      walSupported: caps.walSupported,
      hasFts5: caps.hasFts5,
      isWeb: caps.platform == PlatformProfile.web,
    );
  }

  // -- store ----------------------------------------------------------------

  Collection _collection(String store, {String? session}) {
    final table = context.database.requireTable(store);
    if (session != null) {
      final tx = _sessionExecutor(session);
      return Collection.internal(
        context.database,
        table,
        exec: tx,
        tx: _requireSession(session).tx,
      );
    }
    return Collection.internal(context.database, table);
  }

  Future<Result> _mutate(String store, Mutation mutation, String? session) =>
      _withSession<List<String>>(
        session,
        () async {
          final col = _collection(store, session: session);
          final mutations = context.database.mutations;
          switch (mutation) {
            case MutationPut(:final record):
              if (session == null) {
                await col.put(record);
              } else {
                await mutations.put(col, record);
              }
              return record['id'] is String
                  ? [record['id']! as String]
                  : const [];
            case MutationUpsert(:final record):
              if (session == null) {
                await col.upsert(record);
              } else {
                await mutations.upsert(col, record);
              }
              return record['id'] is String
                  ? [record['id']! as String]
                  : const [];
            case MutationPutAll(:final records):
              if (session == null) {
                await col.putAll(records);
              } else {
                await mutations.putAll(col, records);
              }
              return [
                for (final r in records)
                  if (r['id'] is String) r['id']! as String,
              ];
            case MutationUpsertAll(:final records):
              if (session == null) {
                await col.upsertAll(records);
              } else {
                await mutations.upsertAll(col, records);
              }
              return [
                for (final r in records)
                  if (r['id'] is String) r['id']! as String,
              ];
            case MutationPatch(:final id, :final changes):
              if (session == null) {
                await col.patch(id, changes);
              } else {
                await mutations.patch(col, id, changes);
              }
              return [id];
            case MutationPatchAll(:final patches):
              if (session == null) {
                await col.patchAll(patches);
              } else {
                await mutations.patchAll(col, patches);
              }
              return patches.keys.toList();
            case MutationArchive(:final id):
              if (session == null) {
                await col.archive(id);
              } else {
                await mutations.archive(col, id);
              }
              return [id];
            case MutationRestore(:final id):
              if (session == null) {
                await col.restore(id);
              } else {
                await mutations.restore(col, id);
              }
              return [id];
            case MutationPurge(:final id):
              if (session == null) {
                await col.purge(id);
              } else {
                await mutations.purge(col, id);
              }
              return [id];
          }
        },
        (ids) => MutationResult(ids: ids),
      );

  // -- reads ----------------------------------------------------------------

  QueryBuilder _query(String store, QuerySpecData spec, String? session) {
    var builder = _collection(store, session: session).query();
    for (final c in spec.where) {
      builder = _applyCondition(builder, c);
    }
    for (final group in spec.orGroups) {
      builder = builder.orWhere([
        for (final c in group)
          if (c.op == QueryConditionOp.eq) {c.field: c.value},
      ]);
    }
    // A structured predicate tree is the authoritative filter when present;
    // it compiles through the same builder path as the flat conditions.
    final predicate = spec.predicate;
    if (predicate != null) {
      builder = builder.wherePredicate(predicateNode(predicate));
    }
    for (final o in spec.order) {
      builder = builder.orderBy(o.field, desc: o.desc);
    }
    if (spec.select != null) builder = builder.select(spec.select!);
    if (spec.includeArchived) builder = builder.includeArchived();
    if (spec.includeHidden) builder = builder.includeHidden();
    if (spec.all) {
      builder = builder.all();
    } else if (spec.limit != null) {
      builder = builder.limit(spec.limit!);
    }
    return builder;
  }

  QueryBuilder _applyCondition(QueryBuilder builder, QueryConditionData c) {
    switch (c.op) {
      case QueryConditionOp.eq:
        return builder.where(c.field, eq: c.value);
      case QueryConditionOp.neq:
        return builder.where(c.field, neq: c.value);
      case QueryConditionOp.gt:
        return builder.where(c.field, gt: c.value);
      case QueryConditionOp.gte:
        return builder.where(c.field, gte: c.value);
      case QueryConditionOp.lt:
        return builder.where(c.field, lt: c.value);
      case QueryConditionOp.lte:
        return builder.where(c.field, lte: c.value);
      case QueryConditionOp.inValues:
        return builder.where(c.field, inValues: c.values);
      case QueryConditionOp.between:
        final v = c.values ?? const [];
        if (v.length != 2) {
          throw ArgumentError('between requires exactly two values.');
        }
        return builder.where(c.field, between: (v[0], v[1]));
      case QueryConditionOp.startsWith:
        return builder.where(c.field, startsWith: c.value as String?);
      case QueryConditionOp.endsWith:
        return builder.where(c.field, endsWith: c.value as String?);
      case QueryConditionOp.contains:
        return builder.where(c.field, contains: c.value as String?);
      case QueryConditionOp.isNull:
        return builder.where(c.field, isNull: true);
      case QueryConditionOp.isNotNull:
        return builder.where(c.field, isNotNull: true);
    }
  }

  Future<Result> _page(String store, QuerySpecData spec, String? session) =>
      _withSession(
        session,
        () async {
          if (spec.cursor != null) {
            final page = spec.backward
                ? await _query(store, spec, session).keysetBefore(spec.cursor!)
                : await _query(store, spec, session).keysetAfter(spec.cursor!);
            return page;
          }
          return _query(store, spec, session).fetch();
        },
        (Page page) => QueryRowsResult(
          items: page.items,
          hasNext: page.hasNext,
          hasPrev: page.hasPrev,
          nextCursor: page.nextCursor,
          prevCursor: page.prevCursor,
        ),
      );

  Future<Result> _search(String store, SearchSpecData spec, String? session) =>
      _withSession(
        session,
        () async {
          var builder = _collection(store, session: session).search(spec.term);
          if (spec.all) {
            builder = builder.all();
          } else if (spec.limit != null) {
            builder = builder.limit(spec.limit!);
          }
          if (spec.includeArchived) builder = builder.includeArchived();
          if (spec.includeHidden) builder = builder.includeHidden();
          return builder.fetch();
        },
        (List<SearchResult> hits) => SearchHitsResult([
          for (final h in hits) SearchHitData(id: h.id, score: h.score),
        ]),
      );

  // -- interactive transactions ----------------------------------------------

  Future<Result> _begin(bool readOnly, TransactionDurability durability) {
    final id = 'tx${++_counter}';
    final session = _TxSession(id, readOnly);
    _sessions[id] = session;
    final db = context.database;
    Future<void> run(Tx tx) async {
      session.tx = tx;
      session.ready.complete();
      await session.release.future;
      if (session.rollback) throw const _RollbackSignal();
    }

    session.future = readOnly
        ? db.read(run)
        : db.transaction(
            run,
            durability: durability == TransactionDurability.full
                ? DurabilityClass.full
                : DurabilityClass.normal,
          );
    return session.ready.future
        .then((_) => TransactionBeginResult(session: id));
  }

  Future<Result> _settle(String sessionId, bool commit) async {
    final session = _requireSession(sessionId);
    for (final sp in session.savepoints.reversed) {
      sp.release.complete();
    }
    session.rollback = !commit;
    session.release.complete();
    try {
      await session.future;
    } on _RollbackSignal {
      if (commit) rethrow;
    } finally {
      _sessions.remove(sessionId);
    }
    return const OkResult();
  }

  Future<Result> _savepoint(String sessionId, String name) async {
    final session = _requireSession(sessionId);
    final sp = _SavepointSession(name);
    sp.future = session.tx!.transaction((nested) async {
      sp.tx = nested;
      sp.ready.complete();
      await sp.release.future;
      if (sp.rollback) throw const _RollbackSignal();
    });
    session.savepoints.add(sp);
    await sp.ready.future;
    return const OkResult();
  }

  Future<Result> _rollbackTo(String sessionId, String name) async {
    final session = _requireSession(sessionId);
    final index = session.savepoints.indexWhere((s) => s.name == name);
    if (index < 0) {
      throw StateError('No open savepoint "$name" in session "$sessionId".');
    }
    // Rolling back to a savepoint ends it and everything opened after it.
    for (final sp in session.savepoints.reversed.toList()) {
      sp.rollback = sp.name == name || session.savepoints.indexOf(sp) > index;
      sp.release.complete();
      try {
        await sp.future;
      } on _RollbackSignal {
        // expected
      }
    }
    session.savepoints.removeRange(index, session.savepoints.length);
    return const OkResult();
  }

  Future<Result> _release(String sessionId, String name) async {
    final session = _requireSession(sessionId);
    final sp = session.savepoints.lastOrNull;
    if (sp == null || sp.name != name) {
      throw StateError(
          'Savepoint "$name" is not the innermost open savepoint of session '
          '"$sessionId".');
    }
    sp.release.complete();
    try {
      await sp.future;
    } on _RollbackSignal {
      rethrow;
    }
    session.savepoints.removeLast();
    return const OkResult();
  }

  // -- watches ----------------------------------------------------------------

  /// Watches one record. Snapshots carry the record's current state; an
  /// empty item list means the record is absent (never created or purged).
  Future<Result> _watchOne(String store, String id) async {
    final table = context.database.requireTable(store);
    // The initial fetch validates the record decodes: a corrupt record fails
    // the request typed instead of poisoning the event stream later.
    await _collection(store).get(id);
    final subscription = 'w${++_counter}';
    final watcher = OneWatcher(context.database, table, id);
    late final StreamSubscription<dynamic> sub;
    sub = watcher.startStream().listen(
          (item) {
            _events.add(WatchSnapshot(
              subscription: subscription,
              items: item == null ? const [] : [item],
            ));
          },
          onError: (Object _) {
            // A refresh failure kills the watch: cancel it so the broken
            // subscription stops emitting instead of leaking.
            unawaited(sub.cancel());
            _watches.remove(subscription);
          },
        );
    _watches[subscription] = sub;
    return Future.value(WatchStartedResult(subscription: subscription));
  }

  Future<Result> _watch(String store, QuerySpecData spec) {
    final id = 'w${++_counter}';
    final builder = _query(store, spec, null);
    // The subscription is owned by the watch registry and cancelled on
    // watch_cancel or handler close.
    // ignore: cancel_subscriptions
    final sub = builder.watch().listen((List<Map<String, Object?>> rows) {
      _events.add(WatchSnapshot(subscription: id, items: rows));
    });
    // The subscription is owned by the watch registry and cancelled on
    // watch_cancel or handler close.
    // ignore: cancel_subscriptions
    _watches[id] = sub;
    return Future.value(WatchStartedResult(subscription: id));
  }

  Future<Result> _unwatch(String subscription) async {
    unawaited(_watches.remove(subscription)?.cancel());
    return const OkResult();
  }

  // -- session helpers ----------------------------------------------------------

  _TxSession _requireSession(String sessionId) {
    final session = _sessions[sessionId];
    if (session == null) {
      throw StateError('Unknown transaction session "$sessionId".');
    }
    if (!session.ready.isCompleted) {
      throw StateError('Transaction session "$sessionId" is not ready yet.');
    }
    return session;
  }

  DatabaseExecutor _sessionExecutor(String sessionId) {
    final session = _requireSession(sessionId);
    final sp = session.savepoints.lastOrNull;
    final tx = sp?.tx ?? session.tx;
    if (tx == null) {
      throw StateError('Transaction session "$sessionId" has no executor.');
    }
    return tx.executor;
  }

  /// Runs [body] and maps its value into a [Result]. Session-scoped bodies
  /// resolve their collection against the session's executor; an unknown or
  /// unready session fails with a typed error, never a silent fallback.
  Future<Result> _withSession<T>(
    String? session,
    Future<T> Function() body,
    Result Function(T value) map,
  ) async {
    if (session != null) _requireSession(session);
    final value = await body();
    return map(value);
  }

  @override
  Future<void> close() async {
    for (final sub in _watches.values) {
      await sub.cancel();
    }
    _watches.clear();
    unawaited(_changeSub.cancel());
    await context.database.close();
    await _events.close();
  }
}

/// Lowers a serializable predicate tree into the builder's in-memory
/// predicate algebra. The switch is exhaustive over the sealed wire tree; the
/// two contract operators the tree compiler does not spell directly (`neq`,
/// `isNotNull`) lower to negations of their positive forms, which match the
/// same rows (`field <> v` is NULL-excluding exactly like `NOT (field = v)`).
PredicateNode predicateNode(PredicateSpecData node) => switch (node) {
      LeafSpecData(:final condition) => _predicateLeaf(condition),
      NotSpecData(:final child) => NotPredicate(predicateNode(child)),
      AllSpecData(:final children) => AllPredicate([
          for (final child in children) predicateNode(child),
        ]),
      AnySpecData(:final children) => AnyPredicate([
          for (final child in children) predicateNode(child),
        ]),
    };

PredicateNode _predicateLeaf(QueryConditionData condition) {
  final field = condition.field;
  switch (condition.op) {
    case QueryConditionOp.eq:
      final value = condition.value;
      if (value == null) {
        return LeafPredicate(field, 'isNull', const <Object?>[]);
      }
      return LeafPredicate(field, 'eq', <Object?>[value]);
    case QueryConditionOp.neq:
      final value = condition.value;
      if (value == null) {
        throw ArgumentError('neq(null) matches no rows; use isNotNull.');
      }
      return NotPredicate(LeafPredicate(field, 'eq', <Object?>[value]));
    case QueryConditionOp.gt:
      return LeafPredicate(field, 'gt', <Object?>[condition.value]);
    case QueryConditionOp.gte:
      return LeafPredicate(field, 'gte', <Object?>[condition.value]);
    case QueryConditionOp.lt:
      return LeafPredicate(field, 'lt', <Object?>[condition.value]);
    case QueryConditionOp.lte:
      return LeafPredicate(field, 'lte', <Object?>[condition.value]);
    case QueryConditionOp.inValues:
      return LeafPredicate(field, 'inValues', condition.values ?? const []);
    case QueryConditionOp.between:
      final v = condition.values ?? const [];
      if (v.length != 2) {
        throw ArgumentError('between requires exactly two values.');
      }
      return LeafPredicate(field, 'between', v);
    case QueryConditionOp.startsWith:
      return LeafPredicate(field, 'startsWith', <Object?>[condition.value]);
    case QueryConditionOp.endsWith:
      return LeafPredicate(field, 'endsWith', <Object?>[condition.value]);
    case QueryConditionOp.contains:
      return LeafPredicate(field, 'contains', <Object?>[condition.value]);
    case QueryConditionOp.isNull:
      return LeafPredicate(field, 'isNull', const <Object?>[]);
    case QueryConditionOp.isNotNull:
      return NotPredicate(LeafPredicate(field, 'isNull', const <Object?>[]));
  }
}
