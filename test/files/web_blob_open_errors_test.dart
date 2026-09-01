import 'dart:async';
import 'dart:io';
import 'dart:typed_data';

import 'package:localpocket/src/kernel/files/blob_store.dart';
import 'package:test/test.dart';

/// Unit tests for the not-found-vs-storage-failure classification that
/// `WebBlobStore.open`/`delete` rely on.
///
/// `WebBlobStore` itself cannot be imported by VM tests: it transitively
/// imports sqlite3's wasm JS-interop layer, which triggers the native-assets
/// build hook (see the note in `blob_durability_test.dart`). So these tests
/// exercise the classification contract in three VM-runnable ways:
///
/// 1. [isBlobMissing] — the actual function `WebBlobStore.open`/`delete` call
///    to distinguish a genuinely absent blob from a real storage failure.
/// 2. The `OpfsDir` contract — a pure-Dart fake throwing `BlobMissingError`
///    (absent) vs. a real failure error, verifying the documented outcomes
///    (`Blob not found` StateError vs. `BlobStorageException`) that
///    `WebBlobStore.open`/`delete` produce from each.
/// 3. A structural scan of `web_blob_store.dart` confirming `open`/`delete`
///    wire `isBlobMissing` + `BlobStorageException` (no `catch (_) {}`
///    swallow) — matching `blob_durability_test.dart`'s convention.

/// A valid 64-char lowercase-hex SHA-256 placeholder; contents are irrelevant
/// (only the shape matters for [BlobStore.validateHash]).
const _validHash =
    '0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef';

/// Stands in for a real OPFS storage failure (permission denied, quota
/// exceeded, corruption, ...) under the VM, where `DOMException` cannot be
/// constructed. Mirrors the shape `WebBlobStore._RealOpfsDir` would rethrow
/// unchanged (and `open`/`delete` then wrap as [BlobStorageException]).
class _StorageFailure implements Exception {
  const _StorageFailure(this.name);
  final String name;
  @override
  String toString() => 'DOMException: $name';
}

/// Pure-Dart [OpfsDir] fake. [read]/[remove] throw [readError]/[removeError]
/// when set, else [BlobMissingError] for an absent entry — exactly the
/// contract `WebBlobStore` consumes via [isBlobMissing].
class _FakeOpfsDir implements OpfsDir {
  _FakeOpfsDir(
      {this.readError, this.removeError, Map<String, Uint8List>? blobs})
      : _blobs = blobs ?? {};

  Object? readError;
  Object? removeError;
  final Map<String, Uint8List> _blobs;

  @override
  Future<Uint8List> read(String name) async {
    final e = readError;
    if (e != null) throw e;
    final data = _blobs[name];
    if (data == null) throw BlobMissingError(name);
    return data;
  }

  @override
  Future<void> write(String name, Uint8List bytes) async =>
      _blobs[name] = bytes;

  @override
  Future<void> remove(String name) async {
    final e = removeError;
    if (e != null) throw e;
    _blobs.remove(name);
  }

  @override
  Future<bool> exists(String name) async => _blobs.containsKey(name);

  @override
  Future<int?> size(String name) async => _blobs[name]?.length;

  @override
  Future<List<String>> list() async => _blobs.keys.toList();
}

/// Reproduces `WebBlobStore.open`'s decision over a given [OpfsDir] so the
/// exact documented outcomes are exercised under the VM. This mirrors the
/// store's `open` body (which cannot be imported here); if the store's logic
/// ever drifts, the structural scan group below fails first.
Future<Stream<List<int>>> _openFromBackend(OpfsDir opfs, String hash) async {
  BlobStore.validateHash(hash);
  try {
    final uint8 = await opfs.read(hash);
    return Stream.value(uint8);
  } catch (e) {
    if (!isBlobMissing(e)) {
      throw BlobStorageException(e, hash);
    }
  }
  throw StateError('Blob not found: $hash');
}

/// Reproduces `WebBlobStore.delete`'s decision over a given [OpfsDir].
Future<void> _deleteFromBackend(OpfsDir opfs, String hash) async {
  BlobStore.validateHash(hash);
  try {
    await opfs.remove(hash);
  } catch (e) {
    if (!isBlobMissing(e)) {
      throw BlobStorageException(e, hash);
    }
  }
}

void main() {
  group('isBlobMissing (the classification WebBlobStore.open/delete call)', () {
    test('true for BlobMissingError (the platform-neutral not-found signal)',
        () {
      expect(isBlobMissing(BlobMissingError(_validHash)), isTrue);
    });

    test('false for a real storage failure (permission/quota/corruption)', () {
      expect(isBlobMissing(const _StorageFailure('SecurityError')), isFalse);
      expect(
          isBlobMissing(const _StorageFailure('QuotaExceededError')), isFalse);
      expect(isBlobMissing(const _StorageFailure('NotReadableError')), isFalse);
    });

    test('false for an arbitrary error', () {
      expect(isBlobMissing(Exception('boom')), isFalse);
      expect(isBlobMissing(StateError('x')), isFalse);
    });
  });

  group('WebBlobStore.open behavior (via OpfsDir contract)', () {
    test(
        'a permission/quota failure surfaces as BlobStorageException '
        '(not "Blob not found")', () async {
      final opfs =
          _FakeOpfsDir(readError: const _StorageFailure('SecurityError'));

      await expectLater(
        _openFromBackend(opfs, _validHash),
        throwsA(
          isA<BlobStorageException>()
              .having((e) => e.hash, 'hash', _validHash)
              .having(
                (e) => e.cause,
                'cause',
                isA<_StorageFailure>()
                    .having((c) => c.name, 'name', 'SecurityError'),
              ),
        ),
      );
    });

    test('a quota-exceeded failure surfaces as BlobStorageException', () async {
      final opfs = _FakeOpfsDir(
        readError: const _StorageFailure('QuotaExceededError'),
      );

      await expectLater(
        _openFromBackend(opfs, _validHash),
        throwsA(
          isA<BlobStorageException>().having((e) => e.hash, 'hash', _validHash),
        ),
      );
    });

    test('a genuinely absent blob throws StateError "Blob not found"',
        () async {
      // No blobs, no readError -> read() throws BlobMissingError, which the
      // store must translate into the documented "Blob not found" StateError.
      final opfs = _FakeOpfsDir();

      await expectLater(
        _openFromBackend(opfs, _validHash),
        throwsA(
          isA<StateError>().having(
            (e) => e.message,
            'message',
            'Blob not found: $_validHash',
          ),
        ),
      );
    });

    test('open returns bytes for a present blob', () async {
      final data = Uint8List.fromList([1, 2, 3, 4]);
      final opfs = _FakeOpfsDir(blobs: {_validHash: data});

      final stream = await _openFromBackend(opfs, _validHash);
      final bytes = await stream.fold<List<int>>([], (p, e) => p..addAll(e));
      expect(bytes, equals([1, 2, 3, 4]));
    });
  });

  group('WebBlobStore.delete behavior (via OpfsDir contract)', () {
    test(
        'a permission failure on delete surfaces as BlobStorageException '
        '(not silently swallowed)', () async {
      final opfs = _FakeOpfsDir(
        removeError: const _StorageFailure('SecurityError'),
      );

      await expectLater(
        _deleteFromBackend(opfs, _validHash),
        throwsA(
          isA<BlobStorageException>()
              .having((e) => e.hash, 'hash', _validHash)
              .having(
                (e) => e.cause,
                'cause',
                isA<_StorageFailure>()
                    .having((c) => c.name, 'name', 'SecurityError'),
              ),
        ),
      );
    });

    test('deleting a genuinely absent blob is best-effort (no throw)',
        () async {
      // No removeError and no blob -> remove() throws BlobMissingError, which
      // delete() must swallow (the blob may have been removed concurrently).
      final opfs = _FakeOpfsDir();

      await expectLater(_deleteFromBackend(opfs, _validHash), completes);
    });
  });

  group('WebBlobStore.open/delete wiring (structural)', () {
    // Mirrors blob_durability_test.dart's convention: since WebBlobStore can't
    // be imported under the VM, pin the error-handling contract on the source.
    final source = File('lib/src/platform/web/worker/blob_store.dart').readAsStringSync();

    test('open wraps real failures as BlobStorageException, not "not found"',
        () {
      // The catch must not swallow — it must classify and rethrow as typed.
      expect(source, contains('if (!isBlobMissing(e)) {'));
      expect(source, contains('throw BlobStorageException(e, hash);'));
      // "Blob not found" is reserved for the true missing case only.
      expect(source, contains("throw StateError('Blob not found: \$hash');"));
    });

    test('delete wraps real failures as BlobStorageException', () {
      // delete() must classify remove() failures, not swallow them.
      expect(source, contains('if (!isBlobMissing(e)) {'));
      expect(source, contains('throw BlobStorageException(e, hash);'));
    });

    test(
        'the platform not-found DOMException is translated to BlobMissingError',
        () {
      // _RealOpfsDir translates NotFoundError/TypeMismatchError DOMExceptions
      // into BlobMissingError so the store classifies uniformly.
      expect(source, contains('_isNotFoundDomException'));
      expect(source, contains('throw BlobMissingError(name);'));
      expect(source, contains("'NotFoundError'"));
      expect(source, contains("'TypeMismatchError'"));
    });
  });
}
