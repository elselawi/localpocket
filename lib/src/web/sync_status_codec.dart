/// Wire codec for sync status and cycle reports — the single encode/decode
/// source shared by the worker (encode) and the page-side adapters (decode),
/// so the pair can never drift.
///
/// Pure Dart (no `dart:js_interop`, no `dart:io`): unit-tested on the VM and
/// compiled for both dart2js and dart2wasm. DateTime values cross the wire
/// via [encodeWireValue]'s tagged form; the facade's event dispatch already
/// runs [decodeWireValue] before these decoders see the maps, so decoders
/// accept plain [DateTime]s (and tolerate anything else by defaulting).
library;

import '../sync/status.dart';
import 'conversions.dart';

/// Encodes a [SyncStatus] snapshot for the worker→client wire.
Map<String, Object?> encodeSyncStatus(SyncStatus status) => {
      'state': status.state.name,
      'pending': status.pending,
      'conflicts': status.conflicts,
      'hidden': status.hidden,
      'blocked': status.blocked,
      if (status.lastError != null) 'lastError': status.lastError,
      if (status.lastSyncAt != null)
        'lastSyncAt': encodeWireValue(status.lastSyncAt),
      if (status.lastSuccessfulSyncAt != null)
        'lastSuccessfulSyncAt': encodeWireValue(status.lastSuccessfulSyncAt),
    };

/// Decodes a wire status map into a [SyncStatus].
///
/// Tolerant by design: a malformed or partially-upgraded payload must never
/// break a status indicator, so unknown states fall back to `closed` and
/// wrong-typed/missing counters fall back to zero.
SyncStatus decodeSyncStatus(Map<String, Object?> wire) => SyncStatus(
      state: _stateFromWire(wire['state']),
      pending: _asInt(wire['pending']),
      conflicts: _asInt(wire['conflicts']),
      hidden: _asInt(wire['hidden']),
      blocked: _asInt(wire['blocked']),
      lastError:
          wire['lastError'] is String ? wire['lastError']! as String : null,
      lastSyncAt: _asDateTime(wire['lastSyncAt']),
      lastSuccessfulSyncAt: _asDateTime(wire['lastSuccessfulSyncAt']),
    );

/// Encodes a [SyncReport] for the worker→client wire.
///
/// Complete by contract: every field the model exposes —
/// including `blocked` — must survive the codec. A decoded report equals the
/// encoded report for every public field.
Map<String, Object?> encodeSyncReport(SyncReport report) => {
      'pulled': report.pulled,
      'swept': report.swept,
      'pushed': report.pushed,
      'deadLettered': report.deadLettered,
      'blocked': report.blocked,
      'discarded': report.discarded,
      'hadError': report.hadError,
    };

/// Decodes a wire report map into a [SyncReport]. Tolerant like
/// [decodeSyncStatus]: missing or wrong-typed fields default to zero.
SyncReport decodeSyncReport(Map<String, Object?> wire) => SyncReport(
      pulled: _asIntMap(wire['pulled']),
      swept: _asIntMap(wire['swept']),
      pushed: _asInt(wire['pushed']),
      deadLettered: _asInt(wire['deadLettered']),
      blocked: _asInt(wire['blocked']),
      discarded: _asInt(wire['discarded']),
      hadError: wire['hadError'] == true,
    );

SyncEngineState _stateFromWire(Object? raw) {
  if (raw is String) {
    for (final state in SyncEngineState.values) {
      if (state.name == raw) return state;
    }
  }
  return SyncEngineState.closed;
}

int _asInt(Object? value) {
  if (value is int) return value;
  if (value is num) return value.toInt();
  return 0;
}

DateTime? _asDateTime(Object? value) => value is DateTime ? value : null;

Map<String, int> _asIntMap(Object? value) {
  if (value is! Map) return const {};
  final out = <String, int>{};
  for (final entry in value.entries) {
    if (entry.key is String) out[entry.key as String] = _asInt(entry.value);
  }
  return out;
}
