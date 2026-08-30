part of 'contract.dart';

/// The kernel side of the runtime boundary: one exhaustive dispatcher from
/// typed requests to named results, plus the committed-event stream.
abstract interface class CommandHandler {
  Future<Result> handle(Request request);

  /// Events are committed facts only: nothing is emitted before the
  /// transaction that caused it has committed.
  Stream<Event> get events;

  /// Shuts the runtime down. Pending requests and live streams fail with a
  /// typed closed error afterwards.
  Future<void> close();
}
