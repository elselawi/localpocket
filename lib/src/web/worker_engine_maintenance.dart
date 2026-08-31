/// Part of `worker_engine.dart` — engine introspection.
///
/// The live-capability report is the only introspection handler left:
/// maintenance (`analyze`, `wal_checkpoint`, `vacuum`, `prune_outbox`,
/// `compact`, `run_maintenance`) and `health` travel as typed contract
/// requests answered by the kernel command handler. Capabilities still
/// report the LIVE probed engine (`pocket.capabilities`) plus the browser
/// storage facts the facade reconciles at open; when those storage facts
/// join the contract's capability snapshot, this handler retires too.
part of 'worker_engine.dart';

/// Introspection handlers (see the file doc above).
mixin WorkerMaintenanceHandlers on WorkerEngineHost {
  Future<Object?> _handleCapabilities(
      WorkerEventSink sink, WebRequest req) async {
    // Report the LIVE engine capabilities probed against this worker's actual
    // SQLite build (SqliteCapabilities.probe runs during worker open), not a
    // hard-coded matrix that could drift from a changed WASM asset or an
    // alternate build. `walSupported` is always false on web (TRUNCATE mode).
    final caps = pocket.capabilities;
    final journalMode =
        rawDatabase.select('PRAGMA journal_mode').first.columnAt(0);
    return {
      'storage': 'opfs',
      'durable': true,
      'persistent': true,
      'journal': journalMode,
      'multiTabStorage': true,
      'multiTabSync': false,
      'worker': true,
      // live engine capability snapshot (see SqliteCapabilities.toJson)
      'sqliteVersion': caps.sqliteVersion,
      'hasStrict': caps.hasStrict,
      'walSupported': caps.walSupported,
      'hasFts5': caps.hasFts5,
    };
  }
}
