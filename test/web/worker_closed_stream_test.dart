import 'dart:async';

import 'package:localpocket/src/web/lifecycle.dart';
import 'package:localpocket/src/web/protocol.dart';
import 'package:test/test.dart';

void main() {
  group('terminateWorkerStreams', () {
    test('emits error then done on all worker-owned streams and clears maps',
        () async {
      // These controllers are closed by terminateWorkerStreams, which owns
      // their lifecycle for this test.
      // ignore: close_sinks
      final watchController1 = StreamController<dynamic>();
      // ignore: close_sinks
      final watchController2 = StreamController<dynamic>();
      // ignore: close_sinks
      final syncStatusController =
          StreamController<Map<String, Object?>>.broadcast();
      // ignore: close_sinks
      final authRequiredController = StreamController<void>.broadcast();

      final workerStreams = <int, StreamController<dynamic>>{
        1: watchController1,
        2: watchController2,
      };
      final workerDecoders = <int, Object? Function(Object?)>{
        1: (x) => x,
      };

      final c1Events = <dynamic>[];
      final c1Errors = <dynamic>[];
      var c1Done = false;
      watchController1.stream.listen(
        c1Events.add,
        onError: c1Errors.add,
        onDone: () => c1Done = true,
      );

      final c2Events = <dynamic>[];
      final c2Errors = <dynamic>[];
      var c2Done = false;
      watchController2.stream.listen(
        c2Events.add,
        onError: c2Errors.add,
        onDone: () => c2Done = true,
      );

      final syncErrors = <dynamic>[];
      var syncDone = false;
      syncStatusController.stream.listen(
        (_) {},
        onError: syncErrors.add,
        onDone: () => syncDone = true,
      );

      final authErrors = <dynamic>[];
      var authDone = false;
      authRequiredController.stream.listen(
        (_) {},
        onError: authErrors.add,
        onDone: () => authDone = true,
      );

      terminateWorkerStreams(
        workerStreams: workerStreams,
        workerEventDecoders: workerDecoders,
        syncStatusController: syncStatusController,
        authRequiredController: authRequiredController,
      );

      // Give microtasks a turn to deliver stream events
      await pumpEventQueue();

      expect(c1Errors.single, isA<DatabaseWorkerClosedException>());
      expect(c1Done, isTrue);

      expect(c2Errors.single, isA<DatabaseWorkerClosedException>());
      expect(c2Done, isTrue);

      expect(syncErrors.single, isA<DatabaseWorkerClosedException>());
      expect(syncDone, isTrue);

      expect(authErrors.single, isA<DatabaseWorkerClosedException>());
      expect(authDone, isTrue);

      expect(workerStreams, isEmpty);
      expect(workerDecoders, isEmpty);
      await watchController1.close();
      await watchController2.close();
      await syncStatusController.close();
      await authRequiredController.close();
    });

    test(
        'handles already-closed stream controllers gracefully without throwing',
        () async {
      final alreadyClosed = StreamController<dynamic>();
      alreadyClosed.stream.listen((_) {});
      await alreadyClosed.close();

      final syncClosed = StreamController<Map<String, Object?>>.broadcast();
      await syncClosed.close();

      final authClosed = StreamController<void>.broadcast();
      await authClosed.close();

      final workerStreams = <int, StreamController<dynamic>>{
        1: alreadyClosed,
      };
      final workerDecoders = <int, Object? Function(Object?)>{};

      expect(
        () => terminateWorkerStreams(
          workerStreams: workerStreams,
          workerEventDecoders: workerDecoders,
          syncStatusController: syncClosed,
          authRequiredController: authClosed,
        ),
        returnsNormally,
      );

      expect(workerStreams, isEmpty);
    });
  });
}
