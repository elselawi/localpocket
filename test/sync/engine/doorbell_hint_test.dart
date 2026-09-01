import 'package:localpocket/src/kernel/sync/sync_backend.dart';
import 'package:test/test.dart';

import 'engine_helpers.dart';

/// Realtime doorbell routing: a backend hint WITHOUT an embedded record
/// (`deleted`, `authChanged`, or a `changed` event that omits the payload) is
/// a plain "something changed" signal — the engine must schedule a pull of
/// the hinted store rather than try to apply anything. Only a `changed` hint
/// carrying a full record may take the fast-path.
void main() {
  group('record-less doorbell hints', () {
    Future<void> expectDoorbellSchedulesPull(
        String label, BackendHint hint) async {
      final h = await EngineHarness.create(
          config: testConfig(pushDebounce: Duration.zero));
      addTearDown(h.close);
      final before = h.mock.listChangesCalls;

      h.engine.handleHint(hint);
      await Future<void>.delayed(const Duration(milliseconds: 20));

      expect(h.engine.debugActions, contains('pull:widgets'),
          reason: '$label must be routed to a pull');
      expect(h.mock.listChangesCalls, greaterThan(before),
          reason: '$label must schedule an actual pull of the hinted store');
    }

    test('a deleted doorbell without a record schedules a pull', () async {
      await expectDoorbellSchedulesPull(
          'deleted doorbell', BackendHint('widgets', BackendHintKind.deleted));
    });

    test('an authChanged doorbell without a record schedules a pull', () async {
      await expectDoorbellSchedulesPull('authChanged doorbell',
          BackendHint('widgets', BackendHintKind.authChanged));
    });

    test('a changed hint without an embedded record schedules a pull',
        () async {
      await expectDoorbellSchedulesPull(
          'record-less changed hint', BackendHint('widgets'));
    });

    test('a pull-only doorbell does not run a full sweep', () async {
      final h = await EngineHarness.create(
          config: testConfig(pushDebounce: Duration.zero));
      addTearDown(h.close);
      final sweepsBefore = h.mock.sweepListChangesCalls;

      h.engine.handleHint(BackendHint('widgets', BackendHintKind.deleted));
      await Future<void>.delayed(const Duration(milliseconds: 20));

      expect(h.mock.sweepListChangesCalls, sweepsBefore,
          reason: 'a doorbell schedules a pull-only cycle, not a full sweep');
    });
  });

  group('embedded-record fast path', () {
    test('a changed hint with a full record applies directly (no pull)',
        () async {
      // Default (365-day) push debounce: the fast-path apply's own change
      // emission must not arm an immediate follow-up cycle.
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1'});
      await h.engine.syncNow(); // local row is clean at v1
      final pullsBefore = h.mock.listChangesCalls;

      h.engine.handleHint(BackendHint(
        'widgets',
        BackendHintKind.changed,
        RemoteRecord(
          id: id,
          store: 'widgets',
          updated: h.mock.nextUpdated(),
          data: {'name': 'v2'},
        ),
      ));
      await Future<void>.delayed(const Duration(milliseconds: 20));

      expect(h.engine.debugActions, contains('fast:widgets'));
      expect(h.mock.listChangesCalls, pullsBefore,
          reason: 'a clean-row fast-path apply must not trigger a pull');
      expect((await h.pocket.collection('widgets').get(id))!['name'], 'v2');
    });
  });
}
