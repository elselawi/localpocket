/// Lightweight, opt-in performance counters.
///
/// Cheap (a few integer adds) and safe to leave on. Statement/query counts
/// cover calls routed through `LocalPocket.traceExecute`/`traceQuery`; raw
/// `db` access is not observable here.
class PerfCounters {
  /// Number of completed write transactions.
  int writeTransactions = 0;

  /// Number of group-commit transactions that coalesced 2+ queued mutations
  /// into one SQLite transaction (one fsync for the whole group).
  int groupCommits = 0;

  /// Total number of mutations that ever joined a group-commit transaction.
  int groupCommitMembers = 0;

  /// Sum of write transaction durations in microseconds.
  int totalWriteTransactionUs = 0;

  /// Number of traced SQL statements.
  int statements = 0;
  /// Number of traced queries.
  int queries = 0;

  /// Number of rows reported as written by transactions.
  int rowsWritten = 0;

  /// Largest observed write-queue depth.
  int maxQueueDepth = 0;

  /// Current write-queue depth.
  int currentQueueDepth = 0;
  /// Number of query-watch refreshes.
  int watchRefreshes = 0;

  /// Number of query-watch emissions.
  int watchEmissions = 0;

  /// Canonicalized digest bytes processed by query watches.
  int watchDigestBytes = 0;

  /// Number of push preflight requests.
  int pushPreflightRequests = 0;

  /// Number of items settled by batch push settlement.
  int pushSettlementItems = 0;

  /// Number of pull pages processed.
  int pullPages = 0;

  /// Number of remote rows applied during pulls.
  int pullAppliedRows = 0;

  int _queued = 0;

  /// Called when a write enters/leaves the single-writer queue.
  void queueChanged(int depth) {
    _queued = depth;
    currentQueueDepth = depth;
    if (depth > maxQueueDepth) maxQueueDepth = depth;
  }

  /// Number of actions currently queued or running.
  int get queued => _queued;

  /// Records one traced SQL statement.
  void recordStatement() => statements++;

  /// Records one traced query.
  void recordQuery() => queries++;

  /// Adds [n] to the written-row count.
  void recordRowsWritten(int n) => rowsWritten += n;

  /// Records a completed write transaction duration in microseconds.
  void recordWriteTransaction(int us) {
    writeTransactions++;
    totalWriteTransactionUs += us;
  }

  /// Average write transaction duration in microseconds.
  double get avgWriteTransactionUs =>
      writeTransactions == 0 ? 0 : totalWriteTransactionUs / writeTransactions;

  /// Resets all counters to zero.
  void reset() {
    writeTransactions = 0;
    groupCommits = 0;
    groupCommitMembers = 0;
    totalWriteTransactionUs = 0;
    statements = 0;
    queries = 0;
    rowsWritten = 0;
    maxQueueDepth = 0;
    currentQueueDepth = 0;
    watchRefreshes = 0;
    watchEmissions = 0;
    watchDigestBytes = 0;
    pushPreflightRequests = 0;
    pushSettlementItems = 0;
    pullPages = 0;
    pullAppliedRows = 0;
    _queued = 0;
  }

  /// Returns the counters as a JSON-friendly map.
  Map<String, Object?> snapshot() => {
        'writeTransactions': writeTransactions,
        'groupCommits': groupCommits,
        'groupCommitMembers': groupCommitMembers,
        'totalWriteTransactionUs': totalWriteTransactionUs,
        'avgWriteTransactionUs': avgWriteTransactionUs,
        'statements': statements,
        'queries': queries,
        'rowsWritten': rowsWritten,
        'maxQueueDepth': maxQueueDepth,
        'currentQueueDepth': currentQueueDepth,
        'watchRefreshes': watchRefreshes,
        'watchEmissions': watchEmissions,
        'watchDigestBytes': watchDigestBytes,
        'pushPreflightRequests': pushPreflightRequests,
        'pushSettlementItems': pushSettlementItems,
        'pullPages': pullPages,
        'pullAppliedRows': pullAppliedRows,
      };
}
