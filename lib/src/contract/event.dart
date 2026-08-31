part of 'contract.dart';

/// Base of every asynchronous runtime notification.
sealed class Event {
  const Event();

  /// Stable wire tag, independent of Dart class names or minification.
  String get tag;

  Map<String, Object?> toJson();
}

/// A committed change to one record: emitted only after the transaction that
/// caused it has committed. One envelope feeds record-event streams, change
/// notifications, and remote listeners alike — the old/new record payloads
/// ride with it, so no second detailed stream exists or is needed.
final class CommittedChange extends Event {
  const CommittedChange({
    required this.store,
    required this.id,
    required this.origin,
    required this.action,
    this.oldRecord,
    this.newRecord,
    this.changedFields = const {},
  });

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

/// A live conflicts subscription: carries the current list of open conflicts
/// (initially and on every add, resolve, or modify).
final class ConflictsSnapshot extends Event {
  const ConflictsSnapshot(
      {required this.subscription, required this.conflicts});

  static const String tagValue = 'conflictsSnapshot';
  @override
  String get tag => tagValue;

  final String subscription;
  final List<ConflictData> conflicts;

  @override
  Map<String, Object?> toJson() => {
        'subscription': subscription,
        'conflicts': [for (final c in conflicts) c.toJson()],
      };
}

/// A watch snapshot: fully shaped by the kernel (rows plus ordering), emitted
/// for a live subscription whenever the digest changes.
final class WatchSnapshot extends Event {
  const WatchSnapshot({required this.subscription, required this.items});

  static const String tagValue = 'watchSnapshot';
  @override
  String get tag => tagValue;

  final String subscription;
  final List<Map<String, Object?>> items;

  @override
  Map<String, Object?> toJson() =>
      {'subscription': subscription, 'items': items};
}
