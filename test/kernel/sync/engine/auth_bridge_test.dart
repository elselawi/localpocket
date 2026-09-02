import 'package:localpocket/src/kernel/sync/engine.dart';
import 'package:localpocket/src/kernel/sync/status.dart';
import 'package:test/test.dart';

import '../../../support/engine_helpers.dart';

void main() {
  test('auth failure notifies host and refreshed auth resumes retry', () async {
    final h = await EngineHarness.create(start: false);
    var authRequired = 0;
    final engine = SyncEngine(
      pocket: h.pocket,
      backend: h.mock,
      config: testConfig(),
      onAuthRequired: () => authRequired++,
    );

    await engine.start();
    h.mock.authValid = false;
    await engine.syncNow();
    expect(authRequired, 1);
    expect(engine.state, SyncEngineState.authRequired);

    h.mock.authValid = true;
    await engine.markAuthValid();
    expect(engine.state, isNot(SyncEngineState.authRequired));
    expect(h.mock.listChangesCalls, greaterThan(1));

    await engine.stop();
    await h.pocket.close();
  });
}
