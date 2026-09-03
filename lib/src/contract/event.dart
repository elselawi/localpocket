part of 'contract.dart';

/// {@template localpocket.event}
/// Base of every asynchronous runtime notification.
/// {@endtemplate}
sealed class Event {
  /// {@macro localpocket.event}
  const Event();

  /// Stable wire tag, independent of Dart class names or minification.
  String get tag;

  /// Serializes the event into its wire map (the envelope carries the tag).
  Map<String, Object?> toJson();
}

/// A committed change to one record — emitted only after the causing
/// transaction commits. One envelope feeds record-event streams, change
/// notifications, and remote listeners (old/new payloads ride along).
///
/// {@template localpocket.committed_change}
/// {@endtemplate}
final class CommittedChange extends Event {
  /// {@macro localpocket.committed_change}
  const CommittedChange({
    required this.store,
    required this.id,
    required this.origin,
    required this.action,
    this.oldRecord,
    this.newRecord,
    this.changedFields = const {},
  });

  /// Stable wire tag for this event type.
  static const String tagValue = 'committedChange';
  @override
  String get tag => tagValue;

  /// Store whose committed state changed.
  final String store;

  /// The affected record.
  final String id;

  /// Where the change came from (local code, remote ingestion, resolution).
  final ChangeOrigin origin;

  /// The mutation action performed on the record.
  final ChangeAction action;

  /// Previous logical state before this change (null if newly created).
  final Map<String, Object?>? oldRecord;

  /// New logical state after this change (null if hard-purged).
  final Map<String, Object?>? newRecord;

  /// Field names the change touched.
  final Set<String> changedFields;

  @override
  Map<String, Object?> toJson() => {
        'store': store,
        'id': id,
        'origin': origin.name,
        'action': action.name,
        if (oldRecord != null) 'oldRecord': oldRecord,
        if (newRecord != null) 'newRecord': newRecord,
        'changedFields': changedFields.toList()..sort(),
      };
}

/// A live conflicts subscription: the current open-conflict list, initially
/// and on every add, resolve, or modify.
///
/// {@template localpocket.conflicts_snapshot}
/// {@endtemplate}
final class ConflictsSnapshot extends Event {
  /// {@macro localpocket.conflicts_snapshot}
  const ConflictsSnapshot(
      {required this.subscription, required this.conflicts});

  /// Stable wire tag for this event type.
  static const String tagValue = 'conflictsSnapshot';
  @override
  String get tag => tagValue;

  /// Id of the conflicts subscription this snapshot belongs to.
  final String subscription;

  /// The current open conflicts, sorted by detection time.
  final List<ConflictData> conflicts;

  @override
  Map<String, Object?> toJson() => {
        'subscription': subscription,
        'conflicts': [for (final c in conflicts) c.toJson()],
      };
}

/// A watch snapshot (kernel-shaped rows plus ordering), emitted whenever the
/// watched digest changes.
///
/// {@template localpocket.watch_snapshot}
/// {@endtemplate}
final class WatchSnapshot extends Event {
  /// {@macro localpocket.watch_snapshot}
  const WatchSnapshot({required this.subscription, required this.items});

  /// Stable wire tag for this event type.
  static const String tagValue = 'watchSnapshot';
  @override
  String get tag => tagValue;

  /// Id of the watch subscription this snapshot belongs to.
  final String subscription;

  /// The current rows of the watched result set.
  final List<Map<String, Object?>> items;

  @override
  Map<String, Object?> toJson() =>
      {'subscription': subscription, 'items': items};
}
