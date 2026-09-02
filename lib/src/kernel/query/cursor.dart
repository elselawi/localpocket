/// The kernel-owned keyset cursor codec (plan Rule 6, §6.7).
///
/// Cursors are opaque tokens minted and consumed ONLY here. A payload binds
/// every identity component a cursor is valid for — store, schema version,
/// query shape, sort signature, IR version, and query-compiler version — so
/// replaying a cursor against a different shape, a migrated schema, or a new
/// compiler fails with [StaleCursorError] instead of returning a wrong page.
library;

import 'dart:convert';

import '../errors.dart';
import '../query_plan.dart' show queryCompilerVersion;

/// The format version of the kernel query IR. Bumped whenever the payload
/// identity semantics change.
const int queryIrVersion = 1;

/// Mints and validates keyset cursor tokens for one query shape.
final class KeysetCursorCodec {
  /// Creates a codec bound to one store/schema/sort/shape identity.
  const KeysetCursorCodec({
    required this.store,
    required this.schemaVersion,
    required this.sortSignature,
    required this.shapeFingerprint,
  });

  /// The store the cursor is minted for.
  final String store;

  /// The store schema version at mint time.
  final int schemaVersion;

  /// The declared sort signature (field names in sort order).
  final List<String> sortSignature;

  /// Fingerprint of every query-shape component the cursor is valid for
  /// (scope flags, predicates with bound values, projection).
  final String shapeFingerprint;

  /// Mints one bidirectional cursor token: [forward] is the window's last
  /// row tuple (consumed by forward continuation), [backward] the window's
  /// first row tuple (consumed by backward continuation).
  String encode({
    required List<Object?> forward,
    required List<Object?> backward,
  }) {
    final payload = {
      'store': store,
      'schemaVer': schemaVersion,
      'sort': sortSignature,
      'shape': shapeFingerprint,
      'ir': queryIrVersion,
      'cv': queryCompilerVersion,
      'values': forward,
      'pv': backward,
    };
    return base64UrlEncode(utf8.encode(jsonEncode(payload)));
  }

  /// Decodes the tuple a cursor continues from. [backward] selects the
  /// first-row tuple instead of the last-row tuple. Any identity mismatch or
  /// malformed token throws [StaleCursorError].
  List<Object?> decode(String cursor, {required bool backward}) {
    Object? storeName;
    Object? schemaVer;
    Object? shape;
    Object? irVersion;
    List<String> sort;
    List<Object?> values;
    try {
      final m = jsonDecode(utf8.decode(base64Url.decode(cursor)))
          as Map<String, Object?>;
      storeName = m['store'];
      schemaVer = m['schemaVer'];
      shape = m['shape'];
      irVersion = m['ir'];
      sort = List<String>.from(m['sort'] as List? ?? const []);
      // Forward consumption continues from the window's last row (`values`);
      // backward consumption continues from its first row (`pv`). Both
      // tuples are minted over the same forward sort signature.
      final raw = backward ? m['pv'] : m['values'];
      values = List<Object?>.from(raw as List? ?? const []);
    } catch (_) {
      // Any malformed cursor (bad base64, invalid UTF-8/JSON, wrong field
      // types) is a stale cursor, never a FormatException/TypeError.
      throw StaleCursorError('Malformed cursor.');
    }
    final expectedSort = sortSignature;
    if (storeName != store ||
        schemaVer != schemaVersion ||
        shape != shapeFingerprint ||
        irVersion != queryIrVersion ||
        !const _StringListEquality().equals(sort, expectedSort) ||
        values.length != expectedSort.length) {
      throw StaleCursorError(
          'Cursor does not match this query shape (store/schema/sort/filters).');
    }
    // Values must be scalars; anything else (maps, lists, ...) could only
    // come from a hand-crafted cursor and would leak an untyped binding
    // error.
    for (final v in values) {
      if (v != null &&
          v is! bool &&
          v is! int &&
          v is! double &&
          v is! String) {
        throw StaleCursorError('Malformed cursor.');
      }
    }
    return values;
  }
}

/// Element-wise string-list equality (same order, same length).
class _StringListEquality {
  const _StringListEquality();

  bool equals(List<String> a, List<String> b) {
    if (a.length != b.length) return false;
    for (var i = 0; i < a.length; i++) {
      if (a[i] != b[i]) return false;
    }
    return true;
  }
}
