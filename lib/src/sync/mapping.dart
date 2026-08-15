/// Inbound remote mapping: `RemoteRecord` → a normalized logical
/// document suitable for the domain codec. Strict coercion: a type mismatch or
/// a missing required field raises [MapFailure], which the applier quarantines
/// instead of stalling the store.
library;

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
    switch (f.kind) {
      case FieldKind.text:
      case FieldKind.enumValue:
      case FieldKind.ref:
        if (v is! String) {
          throw MapFailure(
              'Field "${f.name}" must be a string, got ${v.runtimeType}.');
        }
        if (f.kind == FieldKind.enumValue && !f.enumValues!.contains(v)) {
          throw MapFailure('Field "${f.name}" has unknown enum value "$v".');
        }
      case FieldKind.int:
      case FieldKind.date:
        if (v is! int) {
          throw MapFailure(
              'Field "${f.name}" must be an integer, got ${v.runtimeType}.');
        }
      case FieldKind.real:
        if (v is! num) {
          throw MapFailure(
              'Field "${f.name}" must be a number, got ${v.runtimeType}.');
        }
      case FieldKind.bool:
        if (v is! bool) {
          throw MapFailure(
              'Field "${f.name}" must be a boolean, got ${v.runtimeType}.');
        }
      case FieldKind.json:
        if (v is! Map && v is! List) {
          throw MapFailure(
              'Field "${f.name}" must be JSON, got ${v.runtimeType}.');
        }
      case FieldKind.jsonList:
        // Matches local validation: a jsonList field only accepts arrays.
        // (A JSON object here is a wire-format violation, not a valid list.)
        if (v is! List) {
          throw MapFailure(
              'Field "${f.name}" must be a JSON array, got ${v.runtimeType}.');
        }
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
