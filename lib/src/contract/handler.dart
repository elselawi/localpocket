part of 'contract.dart';

/// The kernel side of the runtime boundary: one exhaustive dispatcher from
/// typed requests to named results, plus the committed-event stream.
abstract interface class CommandHandler {
  /// Runs one typed request and answers with the matching result family.
  Future<Result> handle(Request request);

  /// Events are committed facts only: nothing emits before its causing
  /// transaction commits.
  Stream<Event> get events;

  /// Shuts the runtime down; pending requests and live streams fail with a
  /// typed closed error afterwards.
  Future<void> close();
}
