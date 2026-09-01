import 'package:flutter/foundation.dart';
import 'package:localpocket/localpocket.dart';

import '../sync_status.dart';

/// A [TokenProvider] that supplies a fixed bearer token.
///
/// Shared by the native and web sync drivers — the destination
/// [PocketBaseSync] attachment is platform-neutral.
class StaticTokenProvider implements TokenProvider {
  StaticTokenProvider(this.value);

  String value;

  @override
  Future<Token> currentToken() async => Token(value);

  @override
  Future<Token> refreshToken(Token current) async => Token(value);

  @override
  String get identity => _fingerprint(value);

  static String _fingerprint(String v) {
    var h = 0x811c9dc5;
    for (final code in v.codeUnits) {
      h ^= code;
      h = (h * 0x01000193) & 0x7fffffff;
    }
    return h.toRadixString(16);
  }
}

/// Platform-neutral interface for driving PocketBase sync.
///
/// The destination [PocketBaseSync] attachment drives the kernel-owned engine
/// over the shared contract runtime on every target, so both the native and
/// web drivers implement this identically.
abstract class SyncDriver {
  /// Live sync status (a [ValueNotifier]).
  ValueListenable<PlaygroundSyncStatus> get status;

  /// Whether a connect request has succeeded.
  bool get isConnected;

  /// Connects to [baseUrl] with an optional [token].
  Future<void> connect({required Uri baseUrl, String? token});

  /// Disconnects (best-effort).
  Future<void> disconnect();

  /// Triggers an immediate sync cycle.
  Future<void> syncNow();

  /// Releases resources.
  Future<void> dispose();
}
