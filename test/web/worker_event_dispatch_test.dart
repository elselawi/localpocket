import 'dart:async';

import 'package:localpocket/src/contract/contract.dart' as contract;
import 'package:localpocket/src/core/change_bus.dart';
import 'package:localpocket/src/runtime/remote_runtime_client.dart';
import 'package:localpocket/src/web/facade/web_contract_events.dart';
import 'package:localpocket/src/web/protocol.dart';
import 'package:test/test.dart';

/// The old `worker_event` envelope dispatch died with the sync family:
/// `sync_status`/`auth_required` ride the contract event stream now, so the
/// only page-side event plumbing left is the committed-fact binding pinned
/// below (the retired `sync_status`/`auth_required` envelopes are asserted to
/// be ignored as unknown-op noise by the contract runtime's own decode path).
ChangeBus changeBus() => ChangeBus();

void main() {
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

    test('retired sync_status/auth_required envelopes are ignored', () async {
      final bus = changeBus();
      final events = <RecordChangeEvent>[];
      bus.events.listen(events.add);
      final runtime = RemoteRuntimeClient(transport: (_) async => null);
      bindRecordEventStream(runtime: runtime, changeBus: bus);

      runtime.handleWorkerEvent({
        'v': webProtocolVersion,
        'op': 'sync_status',
        'status': {'state': 'idle'},
      });
      runtime.handleWorkerEvent({
        'v': webProtocolVersion,
        'op': 'auth_required',
      });

      await pumpEventQueue();
      expect(events, isEmpty,
          reason: 'the retired envelopes are unknown-op noise now');
      bus.close();
    });
  });
}
