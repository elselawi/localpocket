/// A FIFO serialization lane for remote-application work.
///
/// Every transaction that writes REMOTE state into the local database — pull
/// pages, sweep fetch batches, visibility hides, and realtime fast-path
/// applies — is chained through a single [ApplyLane], so those writes execute
/// strictly one after another regardless of which sync flow (cycle, sweep, or
/// fast path) initiated them. The network work that feeds them stays
/// concurrent: only the database application is serialized.
///
/// This keeps the interleaving state space small: remote application is one
/// logical stream, which makes the sync invariants substantially easier to
/// reason about (see `test/sync/invariants_oracle.dart`).
///
/// Errors are contained: a failing operation completes its slot and its error
/// propagates only to its own caller ([run]); the lane keeps serving the next
/// operation.
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
