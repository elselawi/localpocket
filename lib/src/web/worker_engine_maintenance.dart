/// Part of `worker_engine.dart` — engine introspection + maintenance ops.
///
/// Wire handlers for live health/capability reporting (`health`,
/// `capabilities`) and the maintenance surface (`analyze`,
/// `wal_checkpoint`, `vacuum`, `prune_outbox`, `compact`,
/// `run_maintenance`).
///
/// Every handler delegates to a core `LocalPocket` method; nothing here
/// re-implements engine behavior. Capabilities report the LIVE probed engine
/// (`pocket.capabilities`) rather than a hard-coded matrix.
part of 'worker_engine.dart';

/// Introspection + maintenance handlers (see the file doc above).
mixin WorkerMaintenanceHandlers on WorkerEngineHost {
  Future<Object?> _handleHealth(WorkerEventSink sink, WebRequest req) async {
    final v = rawDatabase.select('SELECT sqlite_version() AS v').first['v'];
    final mode = rawDatabase.select('PRAGMA journal_mode').first.columnAt(0);
    return {
      'ok': true,
      'sqliteVersion': v,
      'journalMode': mode,
    };
  }

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

  Future<Object?> _handleAnalyze(WorkerEventSink sink, WebRequest req) async {
    final store = WireArgs(req.args).optionalString('store');
    await pocket.analyze(store);
    return {'ok': true};
  }

  Future<Object?> _handleWalCheckpoint(
      WorkerEventSink sink, WebRequest req) async {
    await pocket.walCheckpoint();
    return {'ok': true};
  }

  Future<Object?> _handleVacuum(WorkerEventSink sink, WebRequest req) async {
    final pages = WireArgs(req.args).optionalInt('pages');
    await pocket.vacuum(pages: pages);
    return {'ok': true};
  }

  Future<Object?> _handlePruneOutbox(
      WorkerEventSink sink, WebRequest req) async {
    final maxEntries = WireArgs(req.args).optionalInt('maxEntries') ?? 10000;
    final pruned = await pocket.pruneOutbox(maxEntries: maxEntries);
    return {'pruned': pruned};
  }

  Future<Object?> _handleCompact(WorkerEventSink sink, WebRequest req) async {
    final w = WireArgs(req.args);
    final store = w.requireString('store', op: 'compact');
    final olderThanMs = w.requireInt('olderThanMs', op: 'compact');
    final nowMs = w.optionalInt('nowMs');
    final count = await pocket.compact(store,
        olderThan: Duration(milliseconds: olderThanMs), nowMs: nowMs);
    return {'compacted': count};
  }

  Future<Object?> _handleRunMaintenance(
      WorkerEventSink sink, WebRequest req) async {
    final olderThanMs = WireArgs(req.args).optionalInt('compactOlderThanMs') ??
        const Duration(days: 90).inMilliseconds;
    await pocket.runMaintenance(
        compactOlderThan: Duration(milliseconds: olderThanMs));
    return {'ok': true};
  }
}
