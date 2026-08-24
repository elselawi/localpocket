import 'dart:async';

import 'package:localpocket/src/core/change_bus.dart';
import 'package:localpocket/src/web/conversions.dart';
import 'package:localpocket/src/web/lifecycle.dart';
import 'package:localpocket/src/web/protocol.dart';
import 'package:test/test.dart';

void main() {
  group('handleWorkerEventEnvelope', () {
    test('worker_event value is wire-decoded and added to the watch stream',
        () async {
      final controller = StreamController<dynamic>();
      final values = <Object?>[];
      controller.stream.listen(values.add);

      final streams = <int, StreamController<dynamic>>{1: controller};
      handleWorkerEventEnvelope(
        {
          'v': webProtocolVersion,
          'op': WireOp.workerEvent,
          'watchId': 1,
          'value': encodeWireValue({
            'id': 'abc',
            'made_on': DateTime.utc(2026, 1, 2, 3, 4, 5),
          }),
        },
        workerStreams: streams,
        workerEventDecoders: const {},
        authRequiredController: StreamController<void>.broadcast(),
        syncStatusController:
            StreamController<Map<String, Object?>>.broadcast(),
        changeBus: ChangeBus(),
      );

      await pumpEventQueue();
      final value = values.single! as Map;
      expect(value['id'], 'abc');
      expect(value['made_on'], DateTime.utc(2026, 1, 2, 3, 4, 5));
      await controller.close();
    });

    test('a decoder transform is applied before the value is added', () async {
      final controller = StreamController<dynamic>();
      final values = <Object?>[];
      controller.stream.listen(values.add);

      final streams = <int, StreamController<dynamic>>{2: controller};
      final decoders = <int, Object? Function(Object?)>{
        2: (raw) => 'decoded:${(raw! as List).length}',
      };
      handleWorkerEventEnvelope(
        {
          'v': webProtocolVersion,
          'op': WireOp.workerEvent,
          'watchId': 2,
          'value': encodeWireValue([1, 2, 3]),
        },
        workerStreams: streams,
        workerEventDecoders: decoders,
        authRequiredController: StreamController<void>.broadcast(),
        syncStatusController:
            StreamController<Map<String, Object?>>.broadcast(),
        changeBus: ChangeBus(),
      );

      await pumpEventQueue();
      expect(values.single, 'decoded:3');
      await controller.close();
    });

    test(
        'an error field is delivered as a typed watch error and closes the stream',
        () async {
      // The event handler closes this controller after delivering the error.
      // ignore: close_sinks
      final controller = StreamController<dynamic>();
      final errors = <Object?>[];
      controller.stream.listen((_) {}, onError: errors.add);

      final streams = <int, StreamController<dynamic>>{3: controller};
      handleWorkerEventEnvelope(
        {
          'v': webProtocolVersion,
          'op': WireOp.workerEvent,
          'watchId': 3,
          'error': 'watch failed',
        },
        workerStreams: streams,
        workerEventDecoders: const {},
        authRequiredController: StreamController<void>.broadcast(),
        syncStatusController:
            StreamController<Map<String, Object?>>.broadcast(),
        changeBus: ChangeBus(),
      );

      await pumpEventQueue();
      expect(errors.single, isA<RemoteLocalPocketException>());
      final err = errors.single as RemoteLocalPocketException;
      expect(err.code, 'watch');
      expect(err.message, 'watch failed');
      expect(controller.isClosed, isTrue);
    });

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
        workerStreams: const {},
        workerEventDecoders: const {},
        authRequiredController: StreamController<void>.broadcast(),
        syncStatusController: syncStatus,
        changeBus: ChangeBus(),
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
        workerStreams: const {},
        workerEventDecoders: const {},
        authRequiredController: authRequired,
        syncStatusController:
            StreamController<Map<String, Object?>>.broadcast(),
        changeBus: ChangeBus(),
      );

      await pumpEventQueue();
      expect(notifications, hasLength(1));
      await authRequired.close();
    });

    test('record_event is re-emitted on the change bus', () async {
      final changeBus = ChangeBus();
      final events = <RecordChangeEvent>[];
      changeBus.events.listen(events.add);

      handleWorkerEventEnvelope(
        {
          'v': webProtocolVersion,
          'op': WireOp.recordEvent,
          'event': encodeWireValue({
            'store': 'widgets',
            'id': 'abc',
            'action': 'create',
            'origin': 'local',
            'changedFields': <Object?>['name'],
          }),
        },
        workerStreams: const {},
        workerEventDecoders: const {},
        authRequiredController: StreamController<void>.broadcast(),
        syncStatusController:
            StreamController<Map<String, Object?>>.broadcast(),
        changeBus: changeBus,
      );

      await pumpEventQueue();
      expect(events, hasLength(1));
      expect(events.single.store, 'widgets');
      expect(events.single.id, 'abc');
      changeBus.close();
    });

    test('unknown ops, version mismatches, and malformed watch ids are ignored',
        () async {
      final controller = StreamController<dynamic>();
      final values = <Object?>[];
      controller.stream.listen(values.add);
      final streams = <int, StreamController<dynamic>>{9: controller};

      void dispatch(Map<String, Object?> event) {
        handleWorkerEventEnvelope(
          event,
          workerStreams: streams,
          workerEventDecoders: const {},
          authRequiredController: StreamController<void>.broadcast(),
          syncStatusController:
              StreamController<Map<String, Object?>>.broadcast(),
          changeBus: ChangeBus(),
        );
      }

      dispatch({
        'v': webProtocolVersion,
        'op': 'mystery_op',
        'watchId': 9,
        'value': encodeWireValue('x'),
      });
      dispatch({
        'v': 1,
        'op': WireOp.workerEvent,
        'watchId': 9,
        'value': encodeWireValue('x'),
      });
      dispatch({
        'v': webProtocolVersion,
        'op': WireOp.workerEvent,
        'watchId': 'nine',
        'value': encodeWireValue('x'),
      });
      // Unknown watch id: no stream registered.
      dispatch({
        'v': webProtocolVersion,
        'op': WireOp.workerEvent,
        'watchId': 999,
        'value': encodeWireValue('x'),
      });

      await pumpEventQueue();
      expect(values, isEmpty);
      await controller.close();
    });

    test('malformed record_event payloads are ignored instead of crashing',
        () async {
      final changeBus = ChangeBus();
      final events = <RecordChangeEvent>[];
      changeBus.events.listen(events.add);

      expect(
        () => handleWorkerEventEnvelope(
          {
            'v': webProtocolVersion,
            'op': WireOp.recordEvent,
            'event': encodeWireValue({'id': 'abc'}),
          },
          workerStreams: const {},
          workerEventDecoders: const {},
          authRequiredController: StreamController<void>.broadcast(),
          syncStatusController:
              StreamController<Map<String, Object?>>.broadcast(),
          changeBus: changeBus,
        ),
        returnsNormally,
      );

      await pumpEventQueue();
      expect(events, isEmpty);
      changeBus.close();
    });

    test('events targeting a closed stream are dropped', () async {
      final controller = StreamController<dynamic>();
      controller.stream.listen((_) {});
      await controller.close();

      final streams = <int, StreamController<dynamic>>{5: controller};
      handleWorkerEventEnvelope(
        {
          'v': webProtocolVersion,
          'op': WireOp.workerEvent,
          'watchId': 5,
          'value': encodeWireValue('x'),
        },
        workerStreams: streams,
        workerEventDecoders: const {},
        authRequiredController: StreamController<void>.broadcast(),
        syncStatusController:
            StreamController<Map<String, Object?>>.broadcast(),
        changeBus: ChangeBus(),
      );
      // Should not throw despite the closed controller.
      await pumpEventQueue();
    });
  });
}
