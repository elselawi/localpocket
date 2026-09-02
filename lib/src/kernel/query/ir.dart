/// The versioned, kernel-owned query IR (plan §6.6, Rule 3).
///
/// Commands carry meaning, not SQL: the wire's `QuerySpecData`/`PredicateSpecData`
/// are the serializable description of a read, and [QueryIR] is the kernel's
/// compiled, versioned form of one — bound to the store it was compiled
/// against and stamped with the IR format version. Only the kernel compiles
/// the IR further (into SQL, cursors, and page facts); nothing outside the
/// kernel may interpret it.
///
/// Coupling note (an honest statement of posture): the kernel and the wire
/// contract are deliberately ONE core-vocabulary layer. [QueryIR] carries the
/// wire's `QuerySpecData` as its payload rather than mirroring it into
/// kernel-own field structs — the `queryIrVersion` stamp and the schema
/// fingerprint guard the lowering, but the IR payload cannot evolve
/// independently of the wire format. Kernel enums therefore cross into the
/// contract and vice versa; this is a documented trade-off, not an accident.
library;

import '../../contract/contract.dart';
import 'cursor.dart' show queryIrVersion;

export 'cursor.dart' show queryIrVersion;

/// The kernel's versioned query IR.
final class QueryIR {
  const QueryIR._({
    required this.store,
    required this.spec,
    required this.schemaFingerprint,
  });

  /// Compiles one read into the kernel IR. Throws [ArgumentError] when the
  /// description cannot name a valid read — the kernel never lowers a
  /// partially-specified IR.
  factory QueryIR.compile({
    required String store,
    required QuerySpecData spec,
    required String schemaFingerprint,
  }) {
    if (store.isEmpty) {
      throw ArgumentError.value(store, 'store', 'must not be empty');
    }
    if (spec.limit != null && spec.limit! < 0) {
      throw ArgumentError.value(
          spec.limit, 'spec.limit', 'must not be negative');
    }
    return QueryIR._(
      store: store,
      spec: spec,
      schemaFingerprint: schemaFingerprint,
    );
  }

  /// The IR format version. A kernel that reads a foreign IR version must
  /// reject it rather than misinterpret it.
  int get version => queryIrVersion;

  /// The store this read targets.
  final String store;

  /// The serializable read description lowered from the command.
  final QuerySpecData spec;

  /// The store's manifest fingerprint at compile time: an IR compiled
  /// against one schema revision is never lowered against another.
  final String schemaFingerprint;

  @override
  String toString() => 'QueryIR(v$version, $store, limit: ${spec.limit}, '
      'backward: ${spec.backward})';
}
