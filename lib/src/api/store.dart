/// Typed access to one store over the runtime contract.
///
/// A `Store` is a value view: every method sends one typed command through
/// the runtime and wraps the kernel's answer. Records cross the boundary as
/// logical field maps — values already lowered through the field
/// descriptors' boundary codecs (enum wire strings, UTC datetimes, JSON
/// containers); encryption happens kernel-side and is never this layer's
/// business.
library;

import 'dart:async';

import '../core/ddl_compiler.dart' show DdlCompiler;
import '../core/ids.dart' show generateRecordId;
import '../contract/contract.dart';
import '../runtime/runtime_client.dart';
import '../typed/cond.dart';
import '../typed/field_def.dart';
import '../typed/store_def.dart';
import '../typed/write.dart';
import 'events.dart';
import 'query.dart';
import 'row.dart';

/// {@template localpocket.store}
/// Typed CRUD, queries, search, and watches for one store.
///
/// Obtain one from `db.store(Tasks.store)`. Inside a transaction,
/// `tx.store(Tasks.store)` returns a view bound to that transaction: its
/// requests carry the session id and the dispatcher routes them to the
/// session's executor, so its reads see its own uncommitted writes.
/// {@endtemplate}
final class Store<S extends StoreDef<S>> {
  Store.internal({
    required RuntimeClient runtime,
    required this.def,
    required void Function() ensureOpen,
    String? session,
  })  : _runtime = runtime,
        _ensureOpen = ensureOpen,
        _session = session;

  /// The canonical store definition this view is bound to.
  final S def;

  final RuntimeClient _runtime;
  final void Function() _ensureOpen;
  final String? _session;

  /// The store's name.
  String get name => def.name;

  // -- writes ---------------------------------------------------------------

  /// Creates a record and returns its snapshot.
  ///
  /// When no `Writes.id` is given, a record id is generated here so the
  /// created row can be returned.
  Future<Row<S>> put(List<Write<S>> writes) async {
    final record = _buildRecord(writes, allowId: true);
    record.putIfAbsent('id', generateRecordId);
    await _send(MutateRequest(
      store: name,
      mutation: MutationPut(record),
      session: _session,
    ));
    return _rowAfterWrite(record);
  }

  /// Inserts the record, or overwrites it in place when the id already
  /// exists, and returns the resulting snapshot.
  Future<Row<S>> upsert(List<Write<S>> writes) async {
    final record = _buildRecord(writes, allowId: true);
    record.putIfAbsent('id', generateRecordId);
    await _send(MutateRequest(
      store: name,
      mutation: MutationUpsert(record),
      session: _session,
    ));
    return _rowAfterWrite(record);
  }

  /// Creates a batch of records atomically.
  Future<void> putAll(List<List<Write<S>>> records) => _send(MutateRequest(
        store: name,
        mutation: MutationPutAll([
          for (final record in records) _buildRecord(record, allowId: true),
        ]),
        session: _session,
      ));

  /// Inserts or overwrites a batch of records atomically.
  Future<void> upsertAll(List<List<Write<S>>> records) => _send(MutateRequest(
        store: name,
        mutation: MutationUpsertAll([
          for (final record in records) _buildRecord(record, allowId: true),
        ]),
        session: _session,
      ));

  /// Applies a partial update and returns the updated snapshot.
  Future<Row<S>> patch(String id, List<Write<S>> writes) async {
    await _send(MutateRequest(
      store: name,
      mutation: MutationPatch(id, _buildRecord(writes, allowId: false)),
      session: _session,
    ));
    final row = await get(id);
    if (row == null) {
      throw RecordNotFoundException('Patched record "$id" is missing.');
    }
    return row;
  }

  /// Applies a batch of partial updates atomically.
  Future<void> patchAll(Map<String, List<Write<S>>> patches) =>
      _send(MutateRequest(
        store: name,
        mutation: MutationPatchAll({
          for (final e in patches.entries)
            e.key: _buildRecord(e.value, allowId: false),
        }),
        session: _session,
      ));

  /// Marks a record archived.
  Future<void> archive(String id) {
    _ensureOpen();
    return _send(MutateRequest(
        store: name, mutation: MutationArchive(id), session: _session));
  }

  /// Un-archives a record.
  Future<void> restore(String id) {
    _ensureOpen();
    return _send(MutateRequest(
        store: name, mutation: MutationRestore(id), session: _session));
  }

  /// Permanently removes a record.
  Future<void> purge(String id) {
    _ensureOpen();
    return _send(MutateRequest(
        store: name, mutation: MutationPurge(id), session: _session));
  }

  // -- reads ----------------------------------------------------------------

  /// Fetches one record by id, or `null` when it does not exist.
  Future<Row<S>?> get(String id) async {
    _ensureOpen();
    final result =
        await _send(GetRequest(store: name, id: id, session: _session));
    final map = result.row;
    return map == null ? null : Row<S>(def, map);
  }

  /// Fetches records by id — one entry per id occurrence, in order; misses
  /// are `null`. Deduplicating is the caller's job.
  Future<List<Row<S>?>> getAll(List<String> ids) async {
    _ensureOpen();
    final result =
        await _send(RowsRequest(store: name, ids: ids, session: _session));
    return [
      for (final map in result.rows) map == null ? null : Row<S>(def, map),
    ];
  }

  /// One page of rows for [spec]. The spec needs a page size
  /// ([QuerySpec.limit]) or [Limits.unbounded].
  Future<Page<S>> query(QuerySpec<S> spec) => _page(spec);

  /// Counts the records matching [spec].
  Future<int> count(QuerySpec<S> spec) async {
    _ensureOpen();
    final result = await _send(CountRequest(
      store: name,
      spec: lowerQuerySpec(spec, def),
      session: _session,
    ));
    return result.value;
  }

  /// Counts the distinct values of [field] among the records matching
  /// [where].
  Future<int> countDistinct(
    FieldDef<S, Object?> field, {
    List<Cond<S>> where = const [],
    int? limit,
  }) async {
    _checkOwner(field.owner, field.name);
    _ensureOpen();
    final result = await _send(CountDistinctRequest(
      store: name,
      field: field.name,
      spec: _whereSpec(where, limit: limit),
      session: _session,
    ));
    return result.value;
  }

  /// The distinct values of [field]. [limit] caps the scan; without it the
  /// kernel applies its default cap for unbounded distinct scans.
  Future<List<Object?>> distinct(
    FieldDef<S, Object?> field, {
    int? limit,
  }) async {
    _checkOwner(field.owner, field.name);
    _ensureOpen();
    final result = await _send(DistinctRequest(
      store: name,
      field: field.name,
      spec: QuerySpecData(limit: limit),
      session: _session,
    ));
    return result.values;
  }

  /// The ids of the records matching [spec]. The spec needs a page size or
  /// [Limits.unbounded].
  Future<List<String>> ids(QuerySpec<S> spec) async {
    _ensureOpen();
    final result = await _send(IdsRequest(
      store: name,
      spec: lowerQuerySpec(spec, def, requireLimit: true),
      session: _session,
    ));
    return result.ids;
  }

  /// Explains the compiled plan for [spec]. The spec needs a page size or
  /// [Limits.unbounded].
  Future<String> explain(QuerySpec<S> spec) async {
    _ensureOpen();
    final result = await _send(ExplainRequest(
      store: name,
      spec: lowerQuerySpec(spec, def, requireLimit: true),
      session: _session,
    ));
    return result.plan;
  }

  /// Sum of numeric [field] over the records matching [where].
  Future<num?> sum(NumericFieldDef<S> field,
          {List<Cond<S>> where = const []}) =>
      _aggregate(AggregateFn.sum, field, where);

  /// Average of numeric [field] over the records matching [where].
  Future<num?> avg(NumericFieldDef<S> field,
          {List<Cond<S>> where = const []}) =>
      _aggregate(AggregateFn.avg, field, where);

  /// Minimum of [field] over the records matching [where].
  Future<num?> min(NumericFieldDef<S> field,
          {List<Cond<S>> where = const []}) =>
      _aggregate(AggregateFn.min, field, where);

  /// Maximum of [field] over the records matching [where].
  Future<num?> max(NumericFieldDef<S> field,
          {List<Cond<S>> where = const []}) =>
      _aggregate(AggregateFn.max, field, where);

  /// One full-text search page. The spec needs a page size or
  /// [Limits.unbounded].
  Future<List<SearchHit<S>>> search(SearchSpec<S> spec) async {
    _ensureOpen();
    final result = await _send(SearchRequest(
      store: name,
      spec: lowerSearchSpec(spec, def, requireLimit: true),
      session: _session,
    ));
    return [
      for (final hit in result.hits)
        SearchHit<S>.internal(hit.id, hit.score, () => get(hit.id)),
    ];
  }

  // -- reactivity -----------------------------------------------------------

  /// Emits the matching rows of [spec] every time the store changes in a way
  /// that affects the query — including pure reorders, where the same rows
  /// come back in a different order. The spec needs a page size or
  /// [Limits.unbounded].
  ///
  /// Watches are rejected inside transactions: a watch outlives the body
  /// that would start it, so a session-bound watch is a caller bug.
  Stream<List<Row<S>>> watch(QuerySpec<S> spec) {
    if (_session != null) {
      throw ValidationException(
        'Watches cannot run inside a transaction.',
      );
    }
    final data = lowerQuerySpec(spec, def, requireLimit: true);
    // The returned stream's owner controls the controller's lifetime: it is
    // torn down on cancel, and the kernel-side watch dies with it.
    // ignore: close_sinks
    late final StreamController<List<Row<S>>> controller;
    StreamSubscription<Event>? events;
    String? subscription;
    var cancelled = false;

    Future<void> cancel() async {
      cancelled = true;
      await events?.cancel();
      final id = subscription;
      if (id != null) {
        subscription = null;
        try {
          await _runtime.send(WatchCancelRequest(subscription: id));
        } catch (_) {
          // The runtime may already be closed; the watch is dead either way.
        }
      }
    }

    controller = StreamController<List<Row<S>>>(
      // The caller owns the stream; the controller lives as long as the
      // subscription and is torn down in onCancel.
      // ignore: close_sinks
      onListen: () async {
        final started =
            await _runtime.send(WatchRequest(store: name, spec: data));
        if (cancelled) return;
        subscription = started.subscription;
        events = _runtime.events.listen(
          (event) {
            if (event is WatchSnapshot && event.subscription == subscription) {
              controller.add([
                for (final row in event.items) Row<S>(def, row),
              ]);
            }
          },
          onError: controller.addError,
          cancelOnError: false,
        );
      },
      onCancel: cancel,
    );
    return controller.stream;
  }

  /// Committed changes to this store.
  Stream<ChangeNotification> get changes => _runtime.events
      .where((event) => event is CommittedChange)
      .cast<CommittedChange>()
      .where((event) => event.store == name)
      .map((event) => ChangeNotification(
            storeName: event.store,
            ids: List<String>.unmodifiable(event.ids),
          ));

  // -- internals ------------------------------------------------------------

  Future<Row<S>> _rowAfterWrite(Map<String, Object?> record) async {
    final id = record['id']! as String;
    final row = await get(id);
    if (row == null) {
      throw StateError('Write reported success for "$id" but the record '
          'is not readable.');
    }
    return row;
  }

  Future<Page<S>> _page(
    QuerySpec<S> spec, {
    String? cursor,
    bool backward = false,
  }) async {
    final result = await _send(QueryRequest(
      store: name,
      spec: lowerQuerySpec(
        spec,
        def,
        requireLimit: true,
        cursor: cursor,
        backward: backward,
      ),
      session: _session,
    ));
    return Page<S>.internal(
      items: [
        for (final map in result.items)
          Row<S>(def, map, projected: projectedOf(spec)),
      ],
      hasNext: result.hasNext,
      hasPrev: result.hasPrev,
      nextCursor: result.nextCursor == null
          ? null
          : Cursor<S>.internal(result.nextCursor!),
      prevCursor: result.prevCursor == null
          ? null
          : Cursor<S>.internal(result.prevCursor!),
      continuation: (cursor, backward) => _page(
        spec,
        cursor: cursor.token,
        backward: backward,
      ),
    );
  }

  Future<num?> _aggregate(
    AggregateFn fn,
    NumericFieldDef<S> field,
    List<Cond<S>> where,
  ) async {
    _checkOwner(field.owner, field.name);
    _ensureOpen();
    final result = await _send(AggregateRequest(
      store: name,
      fn: fn,
      field: field.name,
      spec: lowerAggregateSpec(where, def),
      session: _session,
    ));
    return result.value;
  }

  /// A where-only spec for the distinct-count terminal: unbounded unless a
  /// limit was given.
  QuerySpecData _whereSpec(List<Cond<S>> where, {int? limit}) {
    final base = lowerAggregateSpec(where, def);
    return QuerySpecData(
      predicate: base.predicate,
      limit: limit,
      all: limit == null,
      includeArchived: base.includeArchived,
      includeHidden: base.includeHidden,
    );
  }

  Future<R> _send<R extends Result>(Request<R> request) {
    _ensureOpen();
    return _runtime.send(request);
  }

  /// Lowers one record's field-native writes into the database's logical
  /// map — the same shape the raw surface puts on the wire.
  Map<String, Object?> _buildRecord(
    List<Write<S>> writes, {
    required bool allowId,
  }) {
    final record = <String, Object?>{};
    for (final write in writes) {
      if (write is FieldWrite<S>) {
        _checkOwner(write.owner, write.name);
        record[write.name] = write.encoded;
      } else if (write is IdWrite<S>) {
        if (!allowId) {
          throw ArgumentError.value(
            write.id,
            'writes',
            'Record ids are immutable: put/putAll assign them, '
                'patch/patchAll cannot change them.',
          );
        }
        if (record.containsKey('id')) {
          throw ArgumentError.value(
            write.id,
            'writes',
            'Duplicate id write in one record.',
          );
        }
        record['id'] = write.id;
      } else if (write is ExtraWrite<S>) {
        _validateExtraKey(write.key);
        record[write.key] = write.value;
      }
    }
    return record;
  }

  void _validateExtraKey(String key) {
    if (DdlCompiler.reservedColumns.contains(key) ||
        def.collectionSchema.declaredFieldNames.contains(key)) {
      throw ValidationException(
        'Key "$key" is declared or reserved and cannot be set as extra.',
        field: key,
      );
    }
  }

  void _checkOwner(Object? owner, String name) {
    if (!identical(owner, def)) {
      throw typedStoreMismatch(
        owner: owner,
        name: name,
        target: S,
        targetKind: 'handle',
      );
    }
  }
}
