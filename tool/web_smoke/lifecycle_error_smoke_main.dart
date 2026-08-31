import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'package:localpocket/src/core/schema.dart';
import 'package:localpocket/src/web/facade.dart';
import 'package:localpocket/src/web/protocol.dart';

Future<void> main() async {
  void report(String status, [String? detail]) {
    globalContext.setProperty('__lifecycle_error_smoke'.toJS, status.toJS);
    if (detail != null) {
      globalContext.setProperty(
          '__lifecycle_error_smoke_detail'.toJS, detail.toJS);
    }
  }

  Future<void> expectRemoteError(
      Future<void> Function() action, String expectedType) async {
    Object? received;
    try {
      await action();
    } catch (error) {
      received = error;
    }
    if (received is! RemoteLocalPocketException ||
        received.code != expectedType) {
      throw StateError(
          'Expected RemoteLocalPocketException[$expectedType], got $received');
    }
  }

  try {
    final schema = CollectionSchema<Object?>(
      name: 'lifecycle_errors',
      version: 1,
      fields: [Field.text('name', required: true)],
    );

    // The facade rejects unknown stores synchronously before any worker call.
    final pocket = await LocalPocket.open(
      path: 'lifecycle_errors_${DateTime.now().microsecondsSinceEpoch}',
      stores: [schema],
    );

    try {
      var unknownStoreRejected = false;
      try {
        pocket.collection('missing');
      } on StateError {
        unknownStoreRejected = true;
      }
      if (!unknownStoreRejected) {
        throw StateError('Unknown facade store was accepted.');
      }

      // Worker lifecycle ordering: sync controls require a started engine.
      await expectRemoteError(pocket.syncNow, 'StateError');
      await expectRemoteError(pocket.pauseSync, 'StateError');
      await expectRemoteError(pocket.resumeSync, 'StateError');
      await expectRemoteError(() => pocket.setConnectivity(true), 'StateError');
      await expectRemoteError(() => pocket.updateAuth('token'), 'StateError');
      // stopSync is intentionally idempotent before sync starts.
      await pocket.stopSync();

      // Removing an absent reference is intentionally idempotent; this also
      // verifies a valid no-op metadata request crosses the worker boundary.
      await pocket.files.remove(
        store: 'lifecycle_errors',
        recordId: 'record00000000001',
      );

      // A duplicate close is idempotent; every operation after close receives
      // the stable worker-closed exception from the facade.
      await pocket.close();
      await pocket.close();
      try {
        await pocket.collection('lifecycle_errors').get('record00000000001');
        throw StateError('Operation after close unexpectedly succeeded.');
      } catch (error) {
        if (error is! DatabaseWorkerClosedException) rethrow;
      }
    } finally {
      await pocket.close();
    }

    report('passed');
  } catch (error, stack) {
    report('failed', '$error\n$stack');
  }
}
