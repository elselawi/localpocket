import 'dart:async';

/// A post-commit change notification for one store.
///
/// `ids` is the set of affected record ids; an empty set means "unknown /
/// external change — be conservative".
class ChangeSet {
  /// Store whose committed state changed.
  final String store;

  /// Affected record IDs. Empty means the affected IDs are unknown.
  final Set<String> ids;

  /// Creates a committed-change notification.
  const ChangeSet(this.store, this.ids);
}

/// Broadcast bus of post-commit [ChangeSet]s.
/// Broadcasts committed change notifications to local watchers.
class ChangeBus {
  static const int maxPendingEvents = 10000;
  final StreamController<ChangeSet> _controller =
      StreamController<ChangeSet>.broadcast();

  /// Stream of committed change notifications.
  Stream<ChangeSet> get stream => _controller.stream;

  /// Publishes [change] unless the bus has been closed.
  void emit(ChangeSet change) {
    if (_controller.isClosed) return;
    if (_controller.hasListener) {
      _controller.add(change);
    }
  }

  /// Closes the notification stream.
  void close() => _controller.close();
}
