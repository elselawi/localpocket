/// A FIFO serialization lane for remote-application work.
///
/// Every transaction writing REMOTE state (pull pages, sweep batches, hides,
/// fast-path applies) is chained through one [ApplyLane], so remote
/// application is a single logical stream (network work stays concurrent).
/// This keeps the interleaving state space small — see
/// `test/sync/invariants_oracle.dart`. Errors are contained: a failing
/// operation propagates only to its own caller.
class ApplyLane {
  Future<void> _tail = Future.value();

  /// Runs [operation] after every previously queued lane operation has
  /// completed, returning its result. If [operation] fails, the error is
  /// rethrown to this caller only and the lane continues.
  Future<T> run<T>(Future<T> Function() operation) {
    final result = _tail.then((_) => operation());
    _tail = result.then<void>(
      (_) {},
      onError: (Object _, StackTrace __) {},
    );
    return result;
  }

  /// Completes when every queued operation has finished (success or error).
  Future<void> get idle => _tail;
}
