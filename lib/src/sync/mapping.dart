/// Inbound remote mapping: `RemoteRecord` → a normalized logical
/// document suitable for the domain codec. Strict coercion: a type mismatch or
/// a missing required field raises [MapFailure], which the applier quarantines
/// instead of stalling the store.
library;

import 'dart:convert';

import '../core/canonical_json.dart';
import '../core/codec.dart';
import '../core/hashing.dart';
import '../core/schema.dart';
import 'sync_backend.dart';

class MapFailure implements Exception {
  final String message;
  MapFailure(this.message);
  @override
  String toString() => 'MapFailure: $message';
}

/// Precomputed normalization outcome for a remote record.
class NormalizedRemoteRecord {
  final RemoteRecord remote;
  final Map<String, Object?>? logical;
  final String? remotePayloadJson;
  final String? remoteHash;
  final String? error;

  const NormalizedRemoteRecord({
    required this.remote,
    this.logical,
    this.remotePayloadJson,
    this.remoteHash,
    this.error,
  });

  bool get isSuccess => error == null;
}

/// Normalizes a single remote record and precomputes its canonical payload JSON and hash.
///
/// Every failure — a typed [MapFailure] or any other parsing/casting error —
/// is captured into [NormalizedRemoteRecord.error] so one poison record is
/// quarantined instead of stalling the whole store.
NormalizedRemoteRecord normalizeSingleRemote(
    CollectionSchema schema, RemoteRecord remote) {
  try {
    final logical = normalizeRemote(schema, remote);
    final remotePayload = buildPayload(schema, logical);
    final remotePayloadJson = canonicalize(remotePayload);
    final remoteHash = sha256Hex(remotePayloadJson);
    return NormalizedRemoteRecord(
      remote: remote,
      logical: logical,
      remotePayloadJson: remotePayloadJson,
      remoteHash: remoteHash,
    );
  } on MapFailure catch (e) {
    return NormalizedRemoteRecord(
      remote: remote,
      error: e.message,
    );
  } catch (e) {
    // Any other failure (TypeError, FormatException, …) is still a per-record
    // quarantine: a malformed payload must never stall valid records.
    return NormalizedRemoteRecord(
      remote: remote,
      error: '$e',
    );
  }
}

/// Normalizes a batch of remote records synchronously.
List<NormalizedRemoteRecord> normalizeRemoteBatch(
  CollectionSchema schema,
  List<RemoteRecord> remotes,
) {
  return [
    for (final r in remotes) normalizeSingleRemote(schema, r),
  ];
}

/// Normalizes a batch of remote records, offloading to an isolate if [remotes]
/// meets or exceeds [isolateThreshold] (default 20 records) to prevent UI frame drops.
Future<List<NormalizedRemoteRecord>> normalizeRemoteBatchAsync(
  CollectionSchema schema,
  List<RemoteRecord> remotes, {
  int isolateThreshold = 20,
}) async {
  // Keep the async API for source compatibility, but do not cross a one-shot
  // dart:isolate boundary. Isolate.run is unsupported by dart2js and the
  // transfer/spawn cost was slower than inline normalization on native pages.
  // The threshold remains accepted for compatibility with existing callers.
  return normalizeRemoteBatch(schema, remotes);
}

Map<String, Object?> normalizeRemote(
    CollectionSchema schema, RemoteRecord remote) {
  final data = Map<String, Object?>.from(remote.data);
  final declared = schema.declaredFieldNames;

  // The server does not enforce data.id; normalize it.
  final dataId = data['id'];
  if (dataId == null) {
    data['id'] = remote.id;
  } else if (dataId != remote.id) {
    throw MapFailure(
        'data.id "$dataId" does not match record id "${remote.id}"');
  }

  final logical = <String, Object?>{'id': remote.id};
  for (final f in schema.fields) {
    final v = data[f.name];
    if (v == null) {
      if (f.required) {
        throw MapFailure('Required field "${f.name}" is missing.');
      }
      logical[f.name] = null;
      continue;
    }
    final violation = fieldKindViolation(f, v);
    if (violation != null) {
      throw MapFailure(_remoteKindViolationMessage(f, v, violation));
    }
    logical[f.name] = v;
  }

  for (final e in data.entries) {
    if (e.key == 'id' || e.key == 'archived' || declared.contains(e.key)) {
      continue;
    }
    logical[e.key] = e.value;
  }
  logical['archived'] = data['archived'] == true;
  return logical;
}

/// Renders a [KindViolation] with wire-visible type detail. The message shape
/// is deliberately distinct from the local write message (it names the
/// offending runtime type) so a quarantine reason records what arrived.
String _remoteKindViolationMessage(
    Field f, Object? value, KindViolation violation) {
  final name = f.name;
  final got = value.runtimeType;
  return switch (violation) {
    KindViolation.textExpected => 'Field "$name" must be a string, got $got.',
    KindViolation.intExpected => 'Field "$name" must be an integer, got $got.',
    KindViolation.numberExpected => 'Field "$name" must be a number, got $got.',
    KindViolation.boolExpected => 'Field "$name" must be a boolean, got $got.',
    KindViolation.jsonExpected => 'Field "$name" must be JSON, got $got.',
    KindViolation.jsonListExpected =>
      'Field "$name" must be a JSON array, got $got.',
    KindViolation.enumValueRejected =>
      'Field "$name" has unknown enum value "$value".',
  };
}

/// Parses a payload JSON string into a Map, returning an empty map on null/empty/invalid payload.
Map<String, Object?> parsePayloadJson(String? json) {
  if (json == null || json.isEmpty) return const {};
  try {
    final decoded = jsonDecode(json);
    if (decoded is Map) return Map<String, Object?>.from(decoded);
  } catch (_) {}
  return const {};
}
