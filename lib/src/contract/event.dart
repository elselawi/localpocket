part of 'contract.dart';

/// Base of every asynchronous runtime notification.
sealed class Event {
  const Event();

  /// Stable wire tag, independent of Dart class names or minification.
  String get tag;

  Map<String, Object?> toJson();
}

/// A committed change: emitted only after the transaction that caused it has
/// committed, for exactly the ids affected. One envelope feeds watch
/// invalidation, record-event streams, and remote listeners alike.
final class CommittedChange extends Event {
  const CommittedChange({required this.store, required this.ids});

  static const String tagValue = 'committedChange';
  @override
  String get tag => tagValue;

  final String store;
  final List<String> ids;

  @override
  Map<String, Object?> toJson() => {'store': store, 'ids': ids};
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
