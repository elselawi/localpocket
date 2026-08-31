/// Minimal main-thread host surface the web facade proxy classes
/// ([WebCollection], [WebQueryBuilder], [WebTx], [WebConflicts],
/// [WebLocalPocketFiles], ...) depend on.
///
/// Declared separately from the JS-bound `LocalPocket` facade so VM tests can
/// drive every proxy class against an in-memory fake host (recording sent
/// envelopes, returning canned wire responses, delivering worker events)
/// without `dart:js_interop`. The production facade implements this
/// interface; the wire format is unchanged.
library;

import 'dart:async';
import 'dart:typed_data';

import '../../core/change_bus.dart';
import '../../core/schema.dart';
import '../../runtime/remote_runtime_client.dart';
import '../../typed/registry.dart';
import '../lifecycle.dart';

/// Host operations exposed to the web facade proxy classes.
abstract interface class WebFacadeHost {
  /// Sends a typed request envelope and returns the decoded result.
  Future<Object?> send(String op, [Map<String, Object?> args = const {}]);

  /// The shared contract runtime the query/search/watch families run over.
  /// One per facade: every builder of the same facade must observe the same
  /// event stream so watch subscriptions resolve deterministically.
  RemoteRuntimeClient get contractRuntime;

  /// Monotonic id shared by watch registrations and request envelopes.
  int get nextRequestId;
  set nextRequestId(int value);

  /// Tracks pending watch registrations/unregistrations across the async
  /// worker boundary.
  WatchSubscriptionTracker get watchTracker;

  /// Resolves a registered store schema by name.
  CollectionSchema<Object?> schemaFor(String store);

  /// The typed store registry backing typed store handles (`store(def)` and
  /// `WebTx.store(def)`) — one per facade, keyed by store name, enforced by
  /// reference identity.
  TypedStoreRegistry get typedRegistry;

  /// Detailed committed record change events (old vs new, origin, action).
  Stream<RecordChangeEvent> get events;

  // ---- file attachment / lifecycle RPCs (delegated to the worker) ----

  /// Uploads a file attachment to a record.
  Future<Map<String, Object?>> filesUpload({
    required String store,
    required String recordId,
    required List<int> bytes,
    String field = 'imgs',
    String name = 'blob.bin',
    int? expectedSize,
    String? expectedSha256,
    bool allowVolatileBlobs = false,
  });

  /// Lists file attachments on a record.
  Future<List<Map<String, Object?>>> filesList({
    required String store,
    required String recordId,
    String field = 'imgs',
  });

  /// Opens a file attachment and returns its bytes.
  Future<Uint8List> filesOpen({
    required String store,
    required String recordId,
    String field = 'imgs',
    int index = 0,
    String? refId,
  });

  /// Removes a file attachment from a record.
  Future<void> filesRemove({
    required String store,
    required String recordId,
    String field = 'imgs',
    int index = 0,
    String? refId,
  });

  /// Garbage-collects unreferenced blobs and temporary files.
  Future<int> filesGc({
    Duration blobGrace = const Duration(days: 7),
    Duration tmpGrace = const Duration(hours: 24),
  });

  /// Enforces a maximum total size for stored file attachments.
  Future<int> filesEnforceStorageCap({required int maxBytes});
}
