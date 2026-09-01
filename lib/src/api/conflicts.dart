/// Store-scoped conflict listing, watching, and resolution over the runtime
/// contract.
///
/// `Store.conflicts` is the typed conflict surface: open conflicts come back
/// as immutable [Conflict] snapshots (the same shape on native and web),
/// watch emits the current list on every add/resolve/modify, and the three
/// resolution paths are explicit commands — a custom decision lowers typed
/// [Write]s into the merged document, `acceptLocal`/`acceptRemote` choose
/// one side wholesale.
library;

import 'dart:async';

import '../contract/contract.dart';
import '../runtime/runtime_client.dart';
import '../kernel/sync/conflicts.dart' show remoteDeletedKey;
import '../schema/store_def.dart';
import '../api/writes.dart';
import 'row.dart';

/// {@template localpocket.conflict}
/// One immutable open conflict snapshot for a store.
///
/// The shared [base] plus the [local] and [remote] documents at detection
/// time, the [dirtyLocal]/[dirtyRemote] field sets, and the
/// application-selected [resolved] document when one is stored. Documents are
/// typed [Row]s over the store's descriptors, so field reads are strictly
/// typed.
/// {@endtemplate}
final class Conflict<S extends StoreDef<S>> {
  Conflict.internal({
    required this.def,
    required this.store,
    required this.recordId,
    required this.base,
    required this.local,
    required this.remote,
    required this.dirtyLocal,
    required this.dirtyRemote,
    required this.detectedAt,
    this.resolved,
  });

  /// Maps the contract's wire snapshot onto the typed view.
  ///
  /// The stored conflict documents carry field maps (no system columns); the
  /// [Row] views are enriched with `id: recordId` so `row.id` and the
  /// resolve base work naturally. Archive state is not part of a conflict
  /// document and is left absent.
  factory Conflict.fromData(S def, ConflictData data) => Conflict.internal(
        def: def,
        store: data.store,
        recordId: data.recordId,
        base: Row<S>(def, {...data.base, 'id': data.recordId}),
        local: Row<S>(def, {...data.local, 'id': data.recordId}),
        remote: Row<S>(def, {...data.remote, 'id': data.recordId}),
        dirtyLocal: Set<String>.of(data.dirtyLocal),
        dirtyRemote: Set<String>.of(data.dirtyRemote),
        detectedAt: DateTime.fromMillisecondsSinceEpoch(data.detectedAt),
        resolved: data.resolved == null
            ? null
            : Row<S>(def, {...data.resolved!, 'id': data.recordId}),
      );

  /// The store definition the conflict belongs to.
  final S def;

  /// Store whose record is conflicted.
  final String store;

  /// Conflicted record id.
  final String recordId;

  /// Shared base used for conflict detection.
  final Row<S> base;

  /// Local document at conflict detection time.
  final Row<S> local;

  /// Remote document at conflict detection time.
  final Row<S> remote;

  /// Fields changed locally from [base].
  final Set<String> dirtyLocal;

  /// Fields changed remotely from [base].
  final Set<String> dirtyRemote;

  /// Detection timestamp.
  final DateTime detectedAt;

  /// Application-selected resolution, when stored.
  final Row<S>? resolved;

  /// Whether the remote side is a deletion tombstone (a delete-conflict).
  bool get remoteDeleted {
    // The kernel marks a delete-conflict's remote as a tombstone map whose
    // only entry is [remoteDeletedKey]; the injected `id` enrichment is
    // ignored for the check.
    final doc = Map<String, Object?>.of(remote.toJson())..remove('id');
    return doc.length == 1 && doc[remoteDeletedKey] == true;
  }
}

/// {@template localpocket.store_conflicts}
/// Conflict listing, watching, and resolution for one store.
///
/// Obtain one from `store.conflicts`. Every method sends one typed command
/// through the runtime; the same surface behaves identically on native and
/// web.
/// {@endtemplate}
final class StoreConflicts<S extends StoreDef<S>> {
  StoreConflicts.internal({
    required RuntimeClient runtime,
    required this.def,
    required void Function() ensureOpen,
    required Map<String, Object?> Function(
      List<Write<S>> writes, {
      required bool allowId,
    }) lowerWrites,
  })  : _runtime = runtime,
        _ensureOpen = ensureOpen,
        _lowerWrites = lowerWrites;

  /// The canonical store definition this view is bound to.
  final S def;

  final RuntimeClient _runtime;
  final void Function() _ensureOpen;
  final Map<String, Object?> Function(
    List<Write<S>> writes, {
    required bool allowId,
  }) _lowerWrites;

  /// The store's name.
  String get name => def.name;

  /// All currently open conflicts for this store, sorted by detection time
  /// (ascending).
  Future<List<Conflict<S>>> listOpen() async {
    _ensureOpen();
    final result = await _send(ConflictsListRequest(store: name));
    return [for (final c in result.conflicts) Conflict<S>.fromData(def, c)];
  }

  /// The open conflict for [id], or `null` when none is open.
  Future<Conflict<S>?> get(String id) async {
    _ensureOpen();
    final result = await _send(ConflictGetRequest(store: name, id: id));
    return result.conflict == null
        ? null
        : Conflict<S>.fromData(def, result.conflict!);
  }

  /// Watches open conflicts for this store, emitting a new list whenever
  /// conflicts are added, resolved, or modified. The kernel mints the
  /// subscription and emits [ConflictsSnapshot] events on the shared runtime
  /// stream; the current list arrives with the first snapshot.
  Stream<List<Conflict<S>>> watch() {
    _ensureOpen();
    // ignore: close_sinks
    late final StreamController<List<Conflict<S>>> controller;
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

    controller = StreamController<List<Conflict<S>>>(
      onListen: () async {
        final started = await _runtime.send(ConflictsWatchRequest(store: name));
        if (cancelled) return;
        subscription = started.subscription;
        events = _runtime.events.listen(
          (event) {
            if (event is ConflictsSnapshot &&
                event.subscription == subscription) {
              controller.add([
                for (final c in event.conflicts) Conflict<S>.fromData(def, c),
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

  /// Resolves the open conflict for [id] with an application-selected merged
  /// document.
  ///
  /// [merged] is a list of typed writes naming the fields the caller chooses
  /// for the resolution. The final document is the conflict's current local
  /// document with those writes applied on top — unmentioned fields keep
  /// their local values — and is lowered through the store's field codecs
  /// before crossing the runtime boundary.
  Future<void> resolve(String id, {required List<Write<S>> merged}) async {
    _ensureOpen();
    final current = await get(id);
    if (current == null) {
      throw StateError('No conflict found for $name/$id');
    }
    // Start from the current local document and apply the chosen writes:
    // an explicit resolution names the fields it decides, everything else
    // keeps the local value. The kernel forces `id` to the conflicted
    // record's id either way.
    final lowered = _lowerWrites(merged, allowId: false);
    final document = <String, Object?>{...current.local.toJson(), ...lowered};
    await _send(ResolveConflictRequest(
      store: name,
      id: id,
      merged: document,
    ));
  }

  /// Accepts the local version as the resolution for [id].
  Future<void> acceptLocal(String id) =>
      _send(AcceptLocalRequest(store: name, id: id));

  /// Accepts the remote version as the resolution for [id].
  Future<void> acceptRemote(String id) =>
      _send(AcceptRemoteRequest(store: name, id: id));

  Future<R> _send<R extends Result>(Request<R> request) {
    _ensureOpen();
    return _runtime.send(request);
  }
}
