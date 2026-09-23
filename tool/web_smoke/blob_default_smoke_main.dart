import 'dart:convert';
import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'package:localpocket/localpocket.dart';

/// Browser smoke for the platform-neutral blob-store spelling.
///
/// Shared application code can pass `NativeBlobStore(root)` on every platform
/// — no conditional import. On web that open must ACCEPT the value and drop it
/// (the worker's own OPFS-backed store is the durable store in a browser),
/// instead of rejecting it as a store that cannot cross the worker boundary.
/// The drop is narrow: a store it does not cover (here `MemoryBlobStore`) must
/// still fail the open, so nothing is ever silently reinterpreted.
final class BlobDefaultNotes extends StoreDef<BlobDefaultNotes> {
  BlobDefaultNotes._() : super(name: 'blobdefault', version: 1);

  static final BlobDefaultNotes store = BlobDefaultNotes._();

  static final title = store.schema.text('title').req();

  @override
  List<FieldDef<BlobDefaultNotes, Object?>> get fields => [title];

  @override
  List<IndexSpec> get indexes => const [];

  @override
  FtsSpec? get fts => null;
}

/// The asset paths the smoke server serves from the repository root.
const BootstrapOptions _bootstrap = BootstrapOptions(
  workerAssetPath: 'assets/localpocket_worker.js',
  wasmAssetPath: 'assets/sqlite3.wasm',
);

LocalPocketOptions _options(String path, BlobStore blobStore) =>
    LocalPocketOptions(
      path: path,
      stores: [BlobDefaultNotes.store],
      blobStore: blobStore,
      bootstrap: _bootstrap,
    );

Future<void> main() async {
  void report(String status, [String? detail]) {
    globalContext.setProperty('__blob_default_smoke'.toJS, status.toJS);
    if (detail != null) {
      globalContext.setProperty(
          '__blob_default_smoke_detail'.toJS, detail.toJS);
    }
  }

  try {
    final path = 'blob_default_${DateTime.now().microsecondsSinceEpoch}';

    // 1. The shared-code spelling: a NativeBlobStore reaches the web open.
    final pocket = await LocalPocket.open(
        _options(path, NativeBlobStore('ignored-on-web')));
    final store = pocket.store(BlobDefaultNotes.store);
    final files = store.files;
    final durable = await files.isBlobStorageDurable;

    // 2. The dropped store stored nothing page-side; the worker's own store
    //    carries the bytes.
    final payload = utf8.encode('dropped native store payload');
    final record = await store.put([BlobDefaultNotes.title.set('shared code')]);
    final ref = await files.attach(
      recordId: record.id,
      source: FileSource.bytes(payload, name: 'shared.bin'),
      // OPFS is the durable path in every matrix browser, but a volatile
      // fallback must not turn this scenario into an unrelated failure.
      allowVolatileBlobs: true,
    );
    final written = await (await files.open(ref))
        .fold<List<int>>(<int>[], (acc, chunk) => acc..addAll(chunk));
    if (!_sameBytes(written, payload)) {
      throw StateError('attachment bytes did not round-trip on web');
    }
    await pocket.close();

    // 3. Reopen through the same shared-code options: OPFS keeps the bytes.
    if (durable) {
      final reopened = await LocalPocket.open(
          _options(path, NativeBlobStore('ignored-on-web')));
      try {
        final again =
            await (await reopened.store(BlobDefaultNotes.store).files.open(ref))
                .fold<List<int>>(<int>[], (acc, chunk) => acc..addAll(chunk));
        if (!_sameBytes(again, payload)) {
          throw StateError('reopened attachment bytes differ');
        }
      } finally {
        await reopened.close();
      }
    }

    // 4. Narrowness: a store the drop does NOT cover still fails typed.
    var rejected = false;
    try {
      final other = await LocalPocket.open(
          _options('${path}_rejected', MemoryBlobStore()));
      await other.close();
    } catch (_) {
      rejected = true;
    }
    if (!rejected) {
      throw StateError('MemoryBlobStore must still be rejected on web');
    }

    report(
        'passed',
        'NativeBlobStore accepted and dropped on web (durable=$durable); '
            'attachment bytes round-tripped through the worker store and a '
            'reopen; MemoryBlobStore still rejected.');
  } catch (error, stack) {
    report('failed', '$error\n$stack');
  }
}

bool _sameBytes(List<int> a, List<int> b) {
  if (a.length != b.length) return false;
  for (var i = 0; i < a.length; i++) {
    if (a[i] != b[i]) return false;
  }
  return true;
}
