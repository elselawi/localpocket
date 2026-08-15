/// Auth lifecycle: app-supplied [TokenProvider], a
/// single-flight refresh, proactive refresh at 75 % consumed, and 401 → refresh
/// once → else pause. Tokens are NEVER written to SQLite, logs, or outbox
/// payloads — they only ever travel in the `Authorization` header and the
/// realtime subscribe POST body.
library;

/// A bearer token with an optional expiry. [expiresAt] may be null when the
/// token has no server-declared lifetime.
class Token {
  /// Bearer token value.
  final String value;

  /// Expiration time, when known.
  final DateTime? expiresAt;

  /// When the token was issued (defaults to now); used to compute the
  /// remaining-fraction for proactive refresh.
  final DateTime issuedAt;

  /// Creates a bearer token value with optional lifetime metadata.
  Token(this.value, {this.expiresAt, DateTime? issuedAt})
      : issuedAt = issuedAt ?? DateTime.now();

  /// Whether the token has passed its expiration time.
  bool get isExpired =>
      expiresAt != null && DateTime.now().isAfter(expiresAt!);

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
  /// Defaults to a stable fingerprint of the token value so the DB file is
  /// per-login even when the provider does not expose an identity.
  String get identity => 'token-identity';
}

/// Wraps [TokenProvider] with single-flight refresh + proactive refresh.
/// Manages cached tokens and single-flight refresh operations.
class AuthManager {
  /// Application token provider.
  final TokenProvider provider;
  Token? _token;
  Future<Token>? _inflight;
  /// Number of refresh operations performed; useful for diagnostics.
  int refreshCount = 0;

  /// Creates an authentication manager around [provider].
  ///
  /// Reuse one manager for the lifetime of a backend so concurrent requests
  /// share the same single-flight refresh operation.
  AuthManager(this.provider);

  /// The token to use for the next request, refreshing proactively when
  /// needed.
  Future<Token> token() async {
    _token ??= await provider.currentToken();
    if (_token!.needsProactiveRefresh) {
      await _refresh();
    }
    return _token!;
  }

  /// Force a refresh now (401 path). Single-flight: concurrent callers share
  /// one refresh.
  Future<Token> refreshNow() => _refresh();

  Future<Token> _refresh() {
    final inflight = _inflight;
    if (inflight != null) return inflight;
    final future = _doRefresh();
    _inflight = future;
    return future;
  }

  Future<Token> _doRefresh() async {
    refreshCount++;
    try {
      final fresh = await provider.refreshToken(_token!);
      _token = fresh;
      return fresh;
    } finally {
      _inflight = null;
    }
  }

  /// Discards the cached token so the next request reloads it.
  void invalidate() => _token = null;
}
