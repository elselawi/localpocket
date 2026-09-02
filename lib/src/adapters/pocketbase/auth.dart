/// Auth lifecycle: single-flight refresh over an app-supplied [TokenProvider],
/// proactive refresh at 75 % consumed, 401 → refresh once → pause. Tokens
/// never touch SQLite, logs, or outbox payloads — they travel only in the
/// `Authorization` header of HTTP requests, including realtime connect and
/// subscribe.
library;

import '../../kernel/sync/sync_backend.dart';

export '../../kernel/sync/sync_backend.dart' show Token, TokenProvider;

/// {@template localpocket.auth_manager}
/// Wraps [TokenProvider] with single-flight + proactive refresh.
/// {@endtemplate}
class AuthManager {
  /// Creates an auth manager around [provider].
  ///
  /// Reuse one per backend so concurrent requests share the refresh.
  ///
  /// {@macro localpocket.auth_manager}
  AuthManager(this.provider);

  /// Application token provider.
  final TokenProvider provider;
  Token? _token;
  Future<Token>? _inflight;
  Future<Token>? _initialLoad;

  /// Refresh operations performed; useful for diagnostics.
  int refreshCount = 0;

  /// Token for the next request, refreshing proactively when near expiry.
  /// The initial load is single-flight: concurrent first callers share one
  /// `currentToken()` call.
  Future<Token> token() async {
    final cached = _token;
    if (cached == null) {
      final loaded = await _loadToken();
      // A freshly loaded token may already be near expiry.
      if (loaded.needsProactiveRefresh) await _refresh(loaded);
      return _token!;
    }
    if (cached.needsProactiveRefresh) {
      await _refresh(cached);
    }
    return _token!;
  }

  /// Force a refresh now (401 path); concurrent callers share one refresh.
  /// With no cached token, the current token is loaded first so the provider
  /// always receives a non-null token to refresh.
  Future<Token> refreshNow() async {
    // Keep the loaded token: invalidate() between the await and the refresh
    // must not clear the source.
    final current = await _loadToken();
    return _refresh(current);
  }

  Future<Token> _loadToken() async {
    final cached = _token;
    if (cached != null) return cached;

    final inflight = _initialLoad ??= provider.currentToken();
    try {
      final loaded = await inflight;
      _token = loaded;
      return loaded;
    } finally {
      if (identical(_initialLoad, inflight)) _initialLoad = null;
    }
  }

  Future<Token> _refresh([Token? source]) {
    final inflight = _inflight;
    if (inflight != null) return inflight;
    final future = _doRefresh(source ?? _token);
    _inflight = future;
    return future;
  }

  Future<Token> _doRefresh(Token? source) async {
    refreshCount++;
    // Captured before awaiting: invalidate() during the refresh must not
    // change the token being refreshed.
    final current = source;
    if (current == null) {
      throw StateError('Cannot refresh without a cached token');
    }
    try {
      final fresh = await provider.refreshToken(current);
      _token = fresh;
      return fresh;
    } finally {
      _inflight = null;
    }
  }

  /// Discards the cached token; the next request reloads it.
  void invalidate() => _token = null;
}
