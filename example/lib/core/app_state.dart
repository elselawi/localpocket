import 'package:flutter/foundation.dart';
import 'package:localpocket/src/internal/raw_surface.dart';

import 'database_service.dart';
import 'drivers/sync_driver.dart';
import 'drivers/sync_factory.dart';

/// The global app state for the playground.
///
/// Manages the [LocalPocket] instance, its lifecycle, the current mode
/// (`demo` with built-in data, or `pocketbase` when connected to a user's
/// server), and the platform-appropriate [SyncDriver].
class PlaygroundAppState extends ChangeNotifier {
  LocalPocket? _db;
  SyncDriver? _sync;

  bool get isDemo => _sync == null;
  bool _busy = false;

  /// True while the database is opening.
  bool get opening => _db == null;
  bool get ready => _db != null;
  bool get busy => _busy;

  LocalPocket? get db => _db;
  SyncDriver? get sync => _sync;

  Future<void> openDemo() async {
    _busy = true;
    notifyListeners();
    try {
      await _closeExisting();
      final db = await DatabaseService.openPlayground();
      _db = db;
      _sync = null;
    } finally {
      _busy = false;
      notifyListeners();
    }
  }

  /// Opens a fresh (empty) database for PocketBase mode. Data pulled from the
  /// user's server is created locally/live.
  Future<void> openPocketBase() async {
    _busy = true;
    notifyListeners();
    try {
      await _closeExisting();
      final db = await DatabaseService.openPlayground(seed: false);
      _db = db;
      _sync = await createSyncDriver(db);
    } finally {
      _busy = false;
      notifyListeners();
    }
  }

  Future<void> _closeExisting() async {
    final s = _sync;
    if (s != null) {
      await s.dispose();
      _sync = null;
    }
    final db = _db;
    if (db != null) {
      try {
        await db.close();
      } catch (_) {}
    }
    _db = null;
  }

  /// Connects the currently-opened (PocketBase-mode) database to a server.
  Future<void> connectPocketBase({required String url, String? token}) async {
    final sync = _sync;
    if (sync == null) {
      throw StateError('Open PocketBase mode first.');
    }
    await sync.connect(baseUrl: _normalizeUrl(url), token: token);
  }

  Future<void> disconnectPocketBase() async {
    await _sync?.disconnect();
  }

  Uri _normalizeUrl(String input) {
    var u = input.trim();
    if (u.isEmpty) {
      throw ArgumentError('Enter a server URL.');
    }
    if (!u.startsWith('http://') && !u.startsWith('https://')) {
      u = 'https://$u';
    }
    final uri = Uri.parse(u);
    if (uri.host.isEmpty) {
      throw ArgumentError('"$input" is not a valid server URL.');
    }
    return uri;
  }

  @override
  Future<void> dispose() async {
    await _closeExisting();
    super.dispose();
  }
}
