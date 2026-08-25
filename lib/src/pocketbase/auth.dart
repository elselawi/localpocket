/// Auth lifecycle: app-supplied [TokenProvider], a
/// single-flight refresh, proactive refresh at 75 % consumed, and 401 → refresh
/// once → else pause. Tokens are NEVER written to SQLite, logs, or outbox
/// payloads — they only ever travel in the `Authorization` header and the
/// realtime subscribe POST body.
library;

/// A bearer token with an optional expiry. [expiresAt] may be null when the
/// token has no server-declared lifetime.
class Token {
  /// Creates a bearer token value with optional lifetime metadata.
  Token(this.value, {this.expiresAt, DateTime? issuedAt})
      : issuedAt = issuedAt ?? DateTime.now();

  /// Bearer token value.
  final String value;

  /// Expiration time, when known.
  final DateTime? expiresAt;

  /// When the token was issued (defaults to now); used to compute the
  /// remaining-fraction for proactive refresh.
  final DateTime issuedAt;

  /// Whether the token has passed its expiration time.
  bool get isExpired => expiresAt != null && DateTime.now().isAfter(expiresAt!);

  /// 1.0 (fresh) → 0.0 (expired). Used for the 75 % proactive refresh rule.
  double get remainingFraction {
    final exp = expiresAt;
    if (exp == null) return 1.0;
    final total = exp.difference(issuedAt).inMilliseconds;
    if (total <= 0) return 0.0;
    final left = exp.difference(DateTime.now()).inMilliseconds;
    return (left < 0 ? 0.0 : left / total).clamp(0.0, 1.0);
  }

  /// Refresh when 75 % of the token lifetime has elapsed.
  bool get needsProactiveRefresh => remainingFraction < 0.25;
}

/// Supplies and refreshes authentication tokens for PocketBase.
///
/// Implementations normally delegate to platform-secure storage and the
/// application's auth service:
///
/// ```dart
/// class MyTokens implements TokenProvider {
///   @override
///   Future<Token> currentToken() => secureStorage.readToken();
///
///   @override
///   Future<Token> refreshToken(Token current) => authApi.refresh(current);
///
///   @override
///   String get identity => 'user-123';
/// }
/// ```
///
/// Tokens are never persisted by LocalPocket in SQLite, logs, or outbox
/// payloads.
abstract class TokenProvider {
  /// The currently stored token (may be expired; the caller refreshes).
  Future<Token> currentToken();

  /// Exchange [current] (expired or near-expiry) for a fresh token.
  Future<Token> refreshToken(Token current);

  /// The stable identity the token belongs to (used for the sync scope id).
  ///
  /// Must be stable across refreshes and account switches. Token values
  /// rotate on refresh, so a fingerprint of the current token value is NOT
  /// stable — return a stable account/user id instead (e.g. `'user-123'`).
  ///
  /// Defaults to `null` when the provider cannot expose a stable identity.
  /// When both this and the backend's `identity` are null, accessing
  /// `PocketBaseBackend.scopeId` throws instead of silently sharing one sync
  /// scope across all accounts on the same server.
  String? get identity => null;
}

/// Wraps [TokenProvider] with single-flight refresh + proactive refresh.
/// Manages cached tokens and single-flight refresh operations.
class AuthManager {
  /// Creates an authentication manager around [provider].
  ///
  /// Reuse one manager for the lifetime of a backend so concurrent requests
  /// share the same single-flight refresh operation.
  AuthManager(this.provider);

  /// Application token provider.
  final TokenProvider provider;
  Token? _token;
  Future<Token>? _inflight;
  Future<Token>? _initialLoad;

  /// Number of refresh operations performed; useful for diagnostics.
  int refreshCount = 0;

  /// The token to use for the next request, refreshing proactively when
  /// needed. The initial load is single-flight: a burst of concurrent callers
  /// before any token is cached share one `currentToken()` call.
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

  /// Force a refresh now (401 path). Single-flight: concurrent callers share
  /// one refresh. When no token is cached yet, the current token is loaded
  /// first so the provider always receives a non-null token to refresh.
  Future<Token> refreshNow() async {
    // Keep the token returned by the load. This prevents invalidate() from
    // clearing the source between the await and starting the refresh.
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
    // Capture the source before awaiting: invalidate() may be called while
    // the provider is refreshing, but the in-flight operation must still
    // refresh the token it started with.
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

  /// Discards the cached token so the next request reloads it.
  void invalidate() => _token = null;
}
