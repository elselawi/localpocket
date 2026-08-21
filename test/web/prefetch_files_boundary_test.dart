import 'package:localpocket/localpocket.dart';
import 'package:localpocket/sync.dart';
import 'package:localpocket/src/web/open_options.dart';
import 'package:localpocket/src/web/protocol.dart';
import 'package:localpocket/src/web/worker_engine.dart';
import 'package:test/test.dart';

import '../sync/engine/engine_helpers.dart';
import '../sync/engine/mock_backend.dart';
import 'support/worker_harness.dart';

/// `prefetchFiles` is serialized by `CollectionSchema.toJson` and survives
/// the worker boundary: the store declared on the page keeps its prefetch
/// policy in the engine-side schema the file sync lane consults, so remote
/// files for that store are prefetched on web exactly as they are natively.
/// (Regression guard: this flag was once silently dropped at the boundary —
/// the file lane then ran with prefetch disabled without any error.)
void main() {
  CollectionSchema<Object?> prefetchSchema() => CollectionSchema(
        name: 'docs',
        version: 1,
        fields: [Field.text('title')],
        prefetchFiles: true,
        keepUnsyncedArchives: true,
      );

  test('worker schema reconstruction drops prefetchFiles from a store', () {
    final schema = prefetchSchema();

    // Both wire paths rebuild engine-side schemas through [parseSchema]: the
    // openArgs parse (`parseOpenOptions`, used by the controller at connect
    // time) and the `WireOp.open` handler.
    final viaOpenArgs = (parseOpenOptions({
      'stores': [schema.toJson()],
    })['stores'] as List)
        .cast<CollectionSchema>();
    final viaWireOpen = parseSchema(schema.toJson());

    expect(viaOpenArgs.single.prefetchFiles, isTrue,
        reason: 'prefetchFiles must survive the openArgs boundary');
    expect(viaWireOpen.prefetchFiles, isTrue,
        reason: 'prefetchFiles must survive the WireOp.open boundary');
    expect(viaWireOpen.keepUnsyncedArchives, isTrue,
        reason: 'the sibling plain-bool flag still crosses the boundary');
  });

  test('a store registered over the wire prefetches remote files', () async {
    final h = await WorkerHarness.open(stores: []);
    addTearDown(h.close);

    // The exact envelope the facade sends after connecting: the store's
    // `toJson()` payload, rebuilt inside the worker by the `open` handler.
    await h.sendOk(h.req(WireOp.open, args: {
      'stores': [prefetchSchema().toJson()],
    }));

    // The engine-side schema the file sync lane consults retains the flag.
    expect(h.pocket.requireTable('docs').schema.prefetchFiles, isTrue);

    final mock = MockSyncBackend();
    final engine =
        SyncEngine(pocket: h.pocket, backend: mock, config: testConfig());
    addTearDown(engine.stop);
    await engine.start();

    final recId = mock.seed(
      store: 'docs',
      data: {'title': 't'},
      imgs: ['pic.png'],
    );
    await engine.syncNow();

    final refs = await h.pocket.files.list(store: 'docs', recordId: recId);
    expect(refs, hasLength(1));
    expect(refs.single.state, 'synced',
        reason: 'the engine-side schema kept prefetchFiles across the wire, '
            'so the file lane downloaded during the sync cycle');
    expect(mock.downloadFileCalls, 1);
  });

  test('the same store declared locally does prefetch remote files (control)',
      () async {
    // The schema is handed straight to the engine without crossing the wire,
    // so the flag survives — proving the boundary (not the sync pipeline) is
    // what loses prefetch on web.
    final h = await WorkerHarness.open(stores: [prefetchSchema()]);
    addTearDown(h.close);

    final mock = MockSyncBackend();
    final engine =
        SyncEngine(pocket: h.pocket, backend: mock, config: testConfig());
    addTearDown(engine.stop);
    await engine.start();

    final recId = mock.seed(
      store: 'docs',
      data: {'title': 't'},
      imgs: ['pic.png'],
    );
    await engine.syncNow();

    final refs = await h.pocket.files.list(store: 'docs', recordId: recId);
    expect(refs.single.state, 'synced');
    expect(mock.downloadFileCalls, 1);
  });
}
