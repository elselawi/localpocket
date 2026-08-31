import 'dart:async';

import 'package:localpocket/src/contract/contract.dart' as contract;
import 'package:localpocket/src/core/change_bus.dart';
import 'package:localpocket/src/runtime/remote_runtime_client.dart';
import 'package:localpocket/src/web/conversions.dart';
import 'package:localpocket/src/web/facade/web_contract_events.dart';
import 'package:localpocket/src/web/lifecycle.dart';
import 'package:localpocket/src/web/protocol.dart';
import 'package:test/test.dart';

void main() {
  ChangeBus changeBus() => ChangeBus();

  group('handleWorkerEventEnvelope', () {
    test('sync_status is wire-decoded onto the status controller', () async {
      final syncStatus = StreamController<Map<String, Object?>>.broadcast();
      final statuses = <Map<String, Object?>>[];
      syncStatus.stream.listen(statuses.add);

      handleWorkerEventEnvelope(
        {
          'v': webProtocolVersion,
          'op': WireOp.syncStatus,
          'status': {
            'lastSyncAt': encodeWireValue(DateTime.utc(2026, 1, 1)),
          },
        },
        authRequiredController: StreamController<void>.broadcast(),
        syncStatusController: syncStatus,
        changeBus: changeBus(),
      );

      await pumpEventQueue();
      expect(statuses.single['lastSyncAt'], DateTime.utc(2026, 1, 1));
      await syncStatus.close();
    });

    test('auth_required emits a null notification', () async {
      final authRequired = StreamController<void>.broadcast();
      final notifications = <void>[];
      authRequired.stream.listen((e) => notifications.add(e));

      handleWorkerEventEnvelope(
        {
          'v': webProtocolVersion,
          'op': WireOp.authRequired,
        },
        authRequiredController: authRequired,
        syncStatusController:
            StreamController<Map<String, Object?>>.broadcast(),
        changeBus: changeBus(),
      );

      await pumpEventQueue();
      expect(notifications, hasLength(1));
      await authRequired.close();
    });

    test('unknown ops and version mismatches are ignored', () async {
      final syncStatus = StreamController<Map<String, Object?>>.broadcast();
      final statuses = <Map<String, Object?>>[];
      syncStatus.stream.listen(statuses.add);

      void dispatch(Map<String, Object?> event) {
        handleWorkerEventEnvelope(
          event,
          authRequiredController: StreamController<void>.broadcast(),
          syncStatusController: syncStatus,
          changeBus: changeBus(),
        );
      }

      dispatch({'v': 1, 'op': WireOp.syncStatus, 'status': {}});
      dispatch({
        'v': webProtocolVersion,
        'op': 'mystery_op',
        'value': encodeWireValue('x'),
      });
      dispatch({
        'v': webProtocolVersion,
        'op': WireOp.syncStatus,
        'status': 'not-a-map',
      });

      await pumpEventQueue();
      expect(statuses, isEmpty);
      await syncStatus.close();
    });
  });

  group('contract event stream', () {
    test(
        'committed facts ride the contract stream: bindRecordEventStream '
        're-publishes them on the change bus', () async {
      final bus = changeBus();
      final events = <RecordChangeEvent>[];
      bus.events.listen(events.add);

      // A contract runtime whose transport records nothing and answers
      // nothing; only its event stream matters here.
      final runtime = RemoteRuntimeClient(transport: (_) async => null);
      bindRecordEventStream(runtime: runtime, changeBus: bus);

      runtime.handleWorkerEvent({
        'v': webProtocolVersion,
        'op': WireOp.contractEvent,
        'event': contract.ContractCodec.encodeEvent(contract.CommittedChange(
          store: 'widgets',
          id: 'abc',
          origin: contract.ChangeOrigin.local,
          action: contract.ChangeAction.create,
          newRecord: const {'id': 'abc', 'name': 'x'},
          changedFields: const {'name'},
        )),
      });

      await pumpEventQueue();
      expect(events, hasLength(1));
      expect(events.single.store, 'widgets');
      expect(events.single.id, 'abc');
      expect(events.single.action, ChangeAction.create);
      expect(events.single.newRecord, {'id': 'abc', 'name': 'x'});
      bus.close();
    });
  });
}
