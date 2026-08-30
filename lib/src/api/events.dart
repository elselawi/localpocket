/// Committed-fact notifications for the facade.
///
/// Every notification on these streams is a committed fact: nothing is
/// delivered before the transaction that caused it has committed.
library;

/// {@template localpocket.change_notification}
/// A committed change to one or more records of one store.
///
/// Delivered through [LocalPocket.changes] (every store) and
/// `Store.changes` (one store). Record payloads ride with the event stream
/// once the contract's committed-change event carries them; today the
/// notification names what changed.
/// {@endtemplate}
final class ChangeNotification {
  /// {@macro localpocket.change_notification}
  const ChangeNotification({required this.storeName, required this.ids});

  /// The store that changed.
  final String storeName;

  /// The record ids touched by the committing transaction.
  final List<String> ids;

  @override
  String toString() => 'ChangeNotification($storeName, $ids)';
}
