import 'dart:async';
import 'dart:typed_data';

import 'package:localpocket/src/kernel/files/blob_store.dart';

/// A configurable page-side [BlobStore] fake for the proxy-channel tests:
/// records every call and its parameters, emits multiple chunks on `open`
/// (so the chunked transfer is really exercised), and scripts typed errors.
class ScriptedBlobStore extends BlobStore {
  /// Bytes stored by `put`, keyed by hash.
  final Map<String, List<int>> blobs = {};

  /// The parameters `put` received, per hash — for asserting the page
  /// reassembled the bytes and forwarded the expectations.
  final Map<String, ({String? expectedSha256, int? expectedSize, String? key})>
      puts = {};

  final Map<String, int> modified = {};

  /// Whether the store reports itself durable (the PAGE store's honesty).
  bool durable = true;

  /// `cleanTmp` return value.
  int cleanedCount = 0;

  /// When set, `put` throws this (a [BlobMissingError] or
  /// [BlobStorageException] reconstructs typed across the channel).
  Object? putError;

  int putCalls = 0;

  @override
  Future<String> put(
    Stream<List<int>> bytes, {
    String? expectedSha256,
    int? expectedSize,
    String? key,
  }) async {
    putCalls++;
    final error = putError;
    if (error != null) throw error;
    final builder = BytesBuilder(copy: false);
    var total = 0;
    await for (final chunk in bytes) {
      builder.add(chunk);
      total += chunk.length;
    }
    final stored = builder.takeBytes();
    if (expectedSize != null && total != expectedSize) {
      throw StateError('size mismatch');
    }
    final hash = expectedSha256 ?? 'f' * 64;
    blobs[hash] = stored;
    puts[hash] = (
      expectedSha256: expectedSha256,
      expectedSize: expectedSize,
      key: key,
    );
    modified[hash] = 1234;
    return hash;
  }

  @override
  Future<Stream<List<int>>> open(String hash) async {
    final bytes = blobs[hash];
    if (bytes == null) throw BlobMissingError(hash);
    // Several chunks per blob so the proxy pulls more than one message.
    return Stream.fromIterable(_slices(bytes, 70000));
  }

  @override
  Future<void> delete(String hash) async {
    if (!blobs.containsKey(hash)) throw BlobMissingError(hash);
    blobs.remove(hash);
    modified.remove(hash);
  }

  @override
  Future<bool> exists(String hash) async => blobs.containsKey(hash);

  @override
  Future<int?> size(String hash) async => blobs[hash]?.length;

  @override
  Future<int> cleanTmp({Duration olderThan = const Duration(hours: 24)}) =>
      Future.value(cleanedCount);

  @override
  Future<List<String>> listHashes() async => blobs.keys.toList();

  // Absent hashes report an honest null — never a fabricated timestamp.
  @override
  Future<int?> modifiedAt(String hash) async => modified[hash];

  @override
  Future<bool> get isDurable => Future.value(durable);
}

List<Uint8List> _slices(List<int> bytes, int size) {
  final out = <Uint8List>[];
  for (var offset = 0; offset < bytes.length; offset += size) {
    final end =
        offset + size > bytes.length ? bytes.length : offset + size;
    out.add(Uint8List.fromList(bytes.sublist(offset, end)));
  }
  return out;
}
