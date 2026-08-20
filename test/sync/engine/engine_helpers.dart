/// Shared engine test setup: a fresh pocket + mock + engine with timers that
/// never fire on their own (tests drive cycles explicitly).
library;

import 'package:localpocket/localpocket.dart';
import 'package:localpocket/sync.dart';

import '../../support/helpers.dart';
import 'mock_backend.dart';

SyncConfig testConfig({
  int maxPage = 200,
  int maxPagesPerPass = 100,
  Duration? sweepInterval,
  Duration? rewind,
  int maxBatch = 25,
  int maxAttempts = 8,
  Duration backoffBase = const Duration(seconds: 1),
  double Function(int attempt)? jitter,
  // Default is effectively disabled: engine tests drive cycles explicitly via
  // syncNow(), so an auto-push timer must never race a manual cycle.
  Duration pushDebounce = const Duration(days: 365),
  Duration? connectivitySettle,
  Duration? purgeHiddenAfter,
  int Function()? now,
}) {
  return SyncConfig(
    maxPage: maxPage,
    maxPagesPerPass: maxPagesPerPass,
    rewind: rewind ?? const Duration(seconds: 5),
    sweepInterval: sweepInterval ?? const Duration(days: 365),
    syncInterval: const Duration(days: 365),
    pushDebounce: pushDebounce,
    connectivitySettle: connectivitySettle ?? Duration.zero,
    maxBatch: maxBatch,
    maxAttempts: maxAttempts,
    backoffBase: backoffBase,
    backoffCap: const Duration(minutes: 5),
    jitter: jitter ?? (_) => 1.0,
    purgeHiddenAfter: purgeHiddenAfter,
    now: now,
  );
}

class EngineHarness {
  final LocalPocket pocket;
  final MockSyncBackend mock;
  final SyncEngine engine;

  EngineHarness(this.pocket, this.mock, this.engine);

  static Future<EngineHarness> create({
    List<CollectionSchema>? stores,
    SyncConfig? config,
    MockSyncBackend? mock,
    TestHooks? testHooks,
    bool start = true,
    String? path,
    BlobStore? blobStore,
    FieldCipher? fieldCipher,
    CryptoProvider? cryptoProvider,
    int Function()? now,
  }) async {
    final p = await openPocket(
      stores: stores ?? [widgetsSchema()],
      testHooks: testHooks,
      path: path,
      blobStore: blobStore,
      fieldCipher: fieldCipher,
      cryptoProvider: cryptoProvider,
      now: now,
    );
    final m = mock ?? MockSyncBackend();
    final e = SyncEngine(
      pocket: p,
      backend: m,
      config: config ?? testConfig(now: now),
    );
    if (start) await e.start();
    return EngineHarness(p, m, e);
  }

  Future<void> close() async {
    await engine.stop();
    await pocket.close();
  }
}
