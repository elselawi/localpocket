/// Inbound remote mapping: `RemoteRecord` → a normalized logical
/// document suitable for the domain codec. Strict coercion: a type mismatch or
/// a missing required field raises [MapFailure], which the applier quarantines
/// instead of stalling the store.
library;

import 'dart:convert';

import '../../kernel/canonical_json.dart';
import '../../kernel/codec.dart';
import '../../kernel/hashing.dart';
import '../../kernel/schema.dart';
import 'sync_backend.dart';

/// {@template localpocket.map_failure}
/// A failure encountered while mapping a remote record.
/// {@endtemplate}
class MapFailure implements Exception {
  /// Creates a mapping failure with [message].
  ///
  /// {@macro localpocket.map_failure}
  MapFailure(this.message);

  /// Description of the mapping failure.
  final String message;

  @override
  String toString() => 'MapFailure: $message';
}

/// {@template localpocket.normalized_remote_record}
/// Precomputed normalization outcome for a remote record.
/// {@endtemplate}
class NormalizedRemoteRecord {
  /// Creates a normalization outcome.
  ///
  /// {@macro localpocket.normalized_remote_record}
  const NormalizedRemoteRecord({
    required this.remote,
    this.logical,
    this.remotePayloadJson,
    this.remoteHash,
    this.error,
  });

  /// The source remote record.
  final RemoteRecord remote;

  /// The normalized logical document, when normalization succeeds.
  final Map<String, Object?>? logical;

  /// Canonical JSON for the normalized remote payload, when successful.
  final String? remotePayloadJson;

  /// SHA-256 hash of [remotePayloadJson], when successful.
  final String? remoteHash;

  /// The per-record failure description, when normalization fails.
  final String? error;

  /// Whether normalization and payload preparation succeeded.
  bool get isSuccess => error == null;
}

/// Normalizes a single remote record, precomputing its canonical payload
/// JSON and hash. Every failure (typed or not) is captured into
/// [NormalizedRemoteRecord.error] so one poison record is quarantined
/// instead of stalling the whole store.
NormalizedRemoteRecord normalizeSingleRemote(
    CollectionSchema<Object?> schema, RemoteRecord remote) {
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
    // Any other failure (TypeError, FormatException, …) is still a
    // per-record quarantine: it must never stall valid records.
    return NormalizedRemoteRecord(
      remote: remote,
      error: '$e',
    );
  }
}

/// Normalizes a batch of remote records synchronously.
List<NormalizedRemoteRecord> normalizeRemoteBatch(
  CollectionSchema<Object?> schema,
  List<RemoteRecord> remotes,
) =>
    [for (final r in remotes) normalizeSingleRemote(schema, r)];

/// Normalizes a batch of remote records asynchronously.
///
/// Runs inline; [isolateThreshold] is accepted for interface compatibility
/// and ignored (one-shot isolate offload was slower, and Isolate.run is
/// unsupported by dart2js).
Future<List<NormalizedRemoteRecord>> normalizeRemoteBatchAsync(
  CollectionSchema<Object?> schema,
  List<RemoteRecord> remotes, {
  int isolateThreshold = 20,
}) async =>
    normalizeRemoteBatch(schema, remotes);

/// Normalizes a remote record into the domain document shape.
Map<String, Object?> normalizeRemote(
    CollectionSchema<Object?> schema, RemoteRecord remote) {
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

  final archived = data['archived'];
  if (archived != null && archived is! bool) {
    throw MapFailure(
        'Field "archived" must be a boolean, got ${archived.runtimeType}.');
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
  logical['archived'] = archived == true;
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

/// Parses a canonical payload JSON string into a map.
///
/// Null/empty input returns an empty map (a legitimate "nothing yet" state);
/// non-empty input that fails to parse or is not an object is corruption and
/// raises [MapFailure] — it must never silently merge as an empty record.
Map<String, Object?> parsePayloadJson(String? json) {
  if (json == null || json.isEmpty) return const {};
  final Object? decoded;
  try {
    decoded = jsonDecode(json);
  } catch (e) {
    throw MapFailure('Corrupt payload JSON: $e');
  }
  if (decoded is! Map) {
    throw MapFailure(
        'Corrupt payload JSON: expected an object, got ${decoded.runtimeType}.');
  }
  return Map<String, Object?>.from(decoded);
}
