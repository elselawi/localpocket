import 'dart:async';
import 'package:collection/collection.dart';

/// The origin of a record mutation event.
enum ChangeOrigin {
  /// Initiated locally by user code (put, patch, archive, restore, purge).
  local,

  /// Ingested from the remote server (puller, realtime push/SSE, sweeper hide).
  remote,

  /// Resolved via 3-way merge, conflict resolution, or server push settlement transformation.
  /// when checking if a change came from remote server.
  /// this also means that it did came from remote server.
  resolution,
}

/// The specific mutation action performed on a record.
enum ChangeAction {
  /// A record was created.
  create,

  /// An existing record was updated.
  update,

  /// An existing record was archived.
  archive,

  /// An archived record was restored.
  restore,

  /// A record was purged (hard-deleted).
  purge,

  /// A record was marked hidden (e.g. server-side deletion or visibility loss).
  hide,
}

const Object _sentinelUnset = Object();

/// A post-commit notification of a specific record state transition.
class RecordChangeEvent {
  const RecordChangeEvent({
    required this.store,
    required this.id,
    required this.origin,
    required this.action,
    required this.changedFields,
    this.oldRecord,
    this.newRecord,
  });

  /// Constructs a [RecordChangeEvent] from a JSON map.
  factory RecordChangeEvent.fromJson(Map<String, Object?> json) =>
      RecordChangeEvent(
        store: json['store']! as String,
        id: json['id']! as String,
        origin: ChangeOrigin.values.byName(json['origin']! as String),
        action: ChangeAction.values.byName(json['action']! as String),
        oldRecord: (json['oldRecord'] as Map?)
            ?.map((k, v) => MapEntry(k.toString(), v)),
        newRecord: (json['newRecord'] as Map?)
            ?.map((k, v) => MapEntry(k.toString(), v)),
        changedFields: (json['changedFields'] as List?)
                ?.map((e) => e.toString())
                .toSet() ??
            const {},
      );

  /// Converts this event to a JSON map.
  Map<String, Object?> toJson() => {
        'store': store,
        'id': id,
        'origin': origin.name,
        'action': action.name,
        if (oldRecord != null) 'oldRecord': oldRecord,
        if (newRecord != null) 'newRecord': newRecord,
        'changedFields': changedFields.toList()..sort(),
      };

  /// Store whose committed state changed.
  final String store;

  /// Affected record ID.
  final String id;

  /// The origin of the change (local, remote, resolution).
  final ChangeOrigin origin;

  /// The mutation action performed on the record.
  final ChangeAction action;

  /// Previous logical state before this change (null if newly created).
  final Map<String, Object?>? oldRecord;

  /// New logical state after this change (null if hard-purged).
  final Map<String, Object?>? newRecord;

  /// Set of field names that were modified.
  final Set<String> changedFields;

  /// Whether the change was initiated locally by application code.
  bool get isLocal => origin == ChangeOrigin.local;

  /// Whether the change was pulled / ingested from the remote backend.
  bool get isRemote => origin == ChangeOrigin.remote;

  /// Whether the change was the result of a conflict/settlement resolution.
  bool get isResolution => origin == ChangeOrigin.resolution;

  /// Returns true if [field] was modified in this change.
  bool hasFieldChange(String field) => changedFields.contains(field);

  /// Returns the previous value of [field] before this change, or null.
  Object? oldValue(String field) => oldRecord?[field];

  /// Returns the new value of [field] after this change, or null.
  Object? newValue(String field) => newRecord?[field];

  /// Checks if [field] transitioned from [from] to [to].
  ///
  /// If [from] is provided, checks that the old value equals [from].
  /// If [to] is provided, checks that the new value equals [to].
  /// If neither is provided, checks that [field] was among [changedFields].
  bool isFieldTransition(
    String field, {
    Object? from = _sentinelUnset,
    Object? to = _sentinelUnset,
  }) {
    if (!changedFields.contains(field)) return false;
    const eq = DeepCollectionEquality();
    if (!identical(from, _sentinelUnset) &&
        !eq.equals(oldRecord?[field], from)) {
      return false;
    }
    if (!identical(to, _sentinelUnset) && !eq.equals(newRecord?[field], to)) {
      return false;
    }
    return true;
  }

  /// Returns true when the event matches the provided filter envelope.
  bool matches({
    String? store,
    ChangeOrigin? origin,
    ChangeAction? action,
    String? field,
    Object? from = _sentinelUnset,
    Object? to = _sentinelUnset,
  }) {
    if (store != null && this.store != store) return false;
    if (origin != null && this.origin != origin) return false;
    if (action != null && this.action != action) return false;

    if (field != null) {
      if (!hasFieldChange(field)) return false;
      if (!identical(from, _sentinelUnset) || !identical(to, _sentinelUnset)) {
        return isFieldTransition(field, from: from, to: to);
      }
    } else if (!identical(from, _sentinelUnset) ||
        !identical(to, _sentinelUnset)) {
      return false;
    }

    return true;
  }

  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;
    if (other is! RecordChangeEvent) return false;
    const eq = DeepCollectionEquality();
    return other.store == store &&
        other.id == id &&
        other.origin == origin &&
        other.action == action &&
        eq.equals(other.oldRecord, oldRecord) &&
        eq.equals(other.newRecord, newRecord) &&
        eq.equals(other.changedFields, changedFields);
  }

  @override
  int get hashCode {
    const eq = DeepCollectionEquality();
    return Object.hash(
      store,
      id,
      origin,
      action,
      eq.hash(oldRecord),
      eq.hash(newRecord),
      eq.hash(changedFields),
    );
  }

  @override
  String toString() =>
      'RecordChangeEvent($origin $action $store/$id changed: $changedFields)';
}

/// Extension methods for filtering streams of [RecordChangeEvent].
///
/// These helpers make it easier to subscribe to specific origin/action/field
/// combinations without manually writing repeated predicate logic.
extension RecordChangeEventStreamExtension on Stream<RecordChangeEvent> {
  /// Filters for local changes.
  Stream<RecordChangeEvent> whereLocal() => where((e) => e.isLocal);

  /// Filters for remote changes.
  Stream<RecordChangeEvent> whereRemote() => where((e) => e.isRemote);

  /// Filters for resolution changes.
  Stream<RecordChangeEvent> whereResolution() => where((e) => e.isResolution);

  /// Filters for events on a specific store.
  Stream<RecordChangeEvent> whereStore(String store) =>
      where((e) => e.store == store);

  /// Filters for events with a specific action.
  Stream<RecordChangeEvent> whereAction(ChangeAction action) =>
      where((e) => e.action == action);

  /// Filters for changes affecting a specific field.
  Stream<RecordChangeEvent> whereField(String field) =>
      where((e) => e.hasFieldChange(field));

  /// Filters for events matching a shared filter envelope.
  Stream<RecordChangeEvent> whereMatches({
    String? store,
    ChangeOrigin? origin,
    ChangeAction? action,
    String? field,
    Object? from = _sentinelUnset,
    Object? to = _sentinelUnset,
  }) =>
      where((e) => e.matches(
            store: store,
            origin: origin,
            action: action,
            field: field,
            from: from,
            to: to,
          ));

  /// Filters for a specific field transition.
  Stream<RecordChangeEvent> whereFieldTransition(
    String field, {
    Object? from = _sentinelUnset,
    Object? to = _sentinelUnset,
    ChangeOrigin? origin,
    ChangeAction? action,
  }) =>
      whereMatches(
        field: field,
        from: from,
        to: to,
        origin: origin,
        action: action,
      );
}

/// A post-commit change notification for one store.
///
/// `ids` is the set of affected record ids; an empty set means "unknown /
/// external change — be conservative".
class ChangeSet {
  /// Creates a committed change notification for a store.
  const ChangeSet(this.store, this.ids);

  /// Store whose committed state changed.
  final String store;

  /// Affected record IDs. Empty means the affected IDs are unknown.
  final Set<String> ids;

  /// Creates a committed-change notification.
}

/// Broadcast bus of post-commit [ChangeSet]s and [RecordChangeEvent]s.
/// Broadcasts committed change notifications to local watchers and hooks.
class ChangeBus {
  final StreamController<ChangeSet> _controller =
      StreamController<ChangeSet>.broadcast();
  final StreamController<RecordChangeEvent> _eventController =
      StreamController<RecordChangeEvent>.broadcast();

  /// number of pending events to buffer before dropping them
  static const int maxPendingEvents = 10000;

  /// Stream of committed change notifications (coarse, store+ids).
  Stream<ChangeSet> get stream => _controller.stream;

  /// Stream of detailed record change events (old vs new, origin, action, changedFields).
  Stream<RecordChangeEvent> get events => _eventController.stream;

  /// Whether there are active listeners on either stream.
  bool get hasListener =>
      _controller.hasListener || _eventController.hasListener;

  /// Whether there are active listeners on the record events stream.
  bool get hasEventListeners => _eventController.hasListener;

  /// Publishes [change] unless the bus has been closed.
  void emit(ChangeSet change) {
    if (_controller.isClosed) return;
    if (_controller.hasListener) {
      _controller.add(change);
    }
  }

  /// Publishes [event] unless the bus has been closed.
  void emitEvent(RecordChangeEvent event) {
    if (_eventController.isClosed) return;
    if (_eventController.hasListener) {
      _eventController.add(event);
    }
  }

  /// Closes the notification streams.
  void close() {
    unawaited(_controller.close());
    unawaited(_eventController.close());
  }
}

/// Mixin that exposes change-bus subscriptions for a broader application scope.
///
/// This is useful when an object needs to observe record mutations across all
/// stores without configuring each store individually.
mixin ChangeBusAwareLP {
  /// change bus for listening to record changes.
  final ChangeBus changeBus = ChangeBus();

  /// stream of committed record changes.
  Stream<ChangeSet> get changes => changeBus.stream;

  /// Emits detailed committed record change events (old vs new, origin, action, changedFields).
  Stream<RecordChangeEvent> get events => changeBus.events;

  /// Convenience stream for listening to local record changes across collections.
  Stream<RecordChangeEvent> onLocal({
    String? store,
    String? field,
    ChangeAction? action,
  }) =>
      events.whereMatches(
        store: store,
        origin: ChangeOrigin.local,
        action: action,
        field: field,
      );

  /// Convenience stream for listening to remote record changes across collections.
  Stream<RecordChangeEvent> onRemote({
    String? store,
    String? field,
    ChangeAction? action,
  }) =>
      events.whereMatches(
        store: store,
        origin: ChangeOrigin.remote,
        action: action,
        field: field,
      );
}

/// Mixin that exposes record-change subscriptions for a single store.
///
/// Implementors provide the store name and the underlying event stream for that
/// store's change feed.
mixin ChangeBusAwareStore {
  /// Name of the store represented by this mixin.
  String get name;

  /// Stream of all record events emitted for this store.
  Stream<RecordChangeEvent> get recordEvents;

  /// Stream of record events filtered to this store.
  Stream<RecordChangeEvent> get events =>
      recordEvents.where((e) => e.store == name);

  /// Convenience stream for listening to local record changes on this collection.
  Stream<RecordChangeEvent> onLocal({String? field, ChangeAction? action}) =>
      events.whereMatches(
        origin: ChangeOrigin.local,
        action: action,
        field: field,
      );

  /// Convenience stream for listening to remote record changes on this collection.
  Stream<RecordChangeEvent> onRemote({String? field, ChangeAction? action}) =>
      events.whereMatches(
        origin: ChangeOrigin.remote,
        action: action,
        field: field,
      );

  /// Convenience stream for listening to resolution record changes on this collection.
  Stream<RecordChangeEvent> onResolution(
          {String? field, ChangeAction? action}) =>
      events.whereMatches(
        origin: ChangeOrigin.resolution,
        action: action,
        field: field,
      );

  /// Convenience stream for listening to changes on a specific field.
  Stream<RecordChangeEvent> onFieldChange(
    String field, {
    ChangeOrigin? origin,
    ChangeAction? action,
  }) =>
      events.whereMatches(
        origin: origin,
        action: action,
        field: field,
      );

  /// Convenience stream for listening to a specific field transition from [from] to [to].
  Stream<RecordChangeEvent> onFieldTransition(
    String field, {
    Object? from = const _SentinelUnset(),
    Object? to = const _SentinelUnset(),
    ChangeOrigin? origin,
    ChangeAction? action,
  }) =>
      events.whereMatches(
        origin: origin,
        action: action,
        field: field,
        from: from,
        to: to,
      );
}

class _SentinelUnset {
  const _SentinelUnset();
}
