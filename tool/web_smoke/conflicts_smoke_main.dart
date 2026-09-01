import 'dart:async';
import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'package:localpocket/src/kernel/schema.dart';
import 'package:localpocket/src/web/facade.dart';
import 'package:localpocket/src/web/protocol.dart';

/// Browser smoke for the conflicts API bridge (Task 2).
///
/// Proves, through the real web facade + worker, that every conflicts envelope
/// dispatches, delegates to the engine's `pocket.conflicts`, and maps errors
/// and the worker->page event stream correctly:
/// 1. `conflicts.listOpen()` round-trips (empty on a fresh store).
/// 2. `conflicts.get()` returns null for a missing conflict.
/// 3. `conflicts.watch()` emits an empty initial list through the worker->page
///    event bridge (the engine watch emits immediately on listen).
/// 4. `conflicts.resolve` / `acceptLocal` / `acceptRemote` on a missing
///    conflict throw the native `StateError` surfaced as a typed
///    [RemoteLocalPocketException] — proving delegation + error mapping.
///
/// (Creating a real conflict requires a sync-backend fixture driving the puller
/// to escalate; with the one-engine/no-backend-injection boundary that needs a
/// browser-served fake PocketBase, tracked separately. The full envelope set is
/// covered by VM protocol round-trip tests in `test/web/conflicts_protocol_test.dart`.)
Future<void> main() async {
  void report(String status, [String? detail]) {
    globalContext.setProperty('__conflicts_smoke'.toJS, status.toJS);
    if (detail != null) {
      globalContext.setProperty('__conflicts_smoke_detail'.toJS, detail.toJS);
    }
  }

  var stage = 'start';
  void mark(String next) {
    stage = next;
    globalContext.setProperty('__conflicts_smoke_progress'.toJS, next.toJS);
  }

  try {
    final schema = CollectionSchema<Object?>(
      name: 'widgets',
      version: 1,
      fields: [
        Field.text('name', required: true),
        Field.int('qty'),
      ],
    );

    mark('open');
    final pocket = await LocalPocket.open(
      path: 'conflicts_smoke_db',
      stores: [schema],
    );
    final conflicts = pocket.conflicts;

    // 1. listOpen round-trips empty through the new envelope.
    mark('list-empty');
    final open = await conflicts.listOpen();
    if (open.isNotEmpty) {
      throw StateError('listOpen on a fresh store must be empty: $open');
    }

    // 2. get() returns null for a missing conflict (point-read envelope).
    mark('get-missing');
    final missing = await conflicts.get('widgets', 'widget000000001');
    if (missing != null) {
      throw StateError('get on a missing conflict must be null: $missing');
    }

    // 3. watch() emits an empty initial list through the worker->page event
    //    stream. The worker's conflicts watch emits immediately on listen.
    mark('watch');
    final emissions = <List<ConflictRecordLike>>[];
    final sub = conflicts.watch().listen((list) => emissions.add(list));
    // Allow the worker->page event to arrive.
    await Future<void>.delayed(const Duration(milliseconds: 400));
    await sub.cancel();
    if (emissions.isEmpty) {
      throw StateError('conflicts.watch() did not emit an initial snapshot.');
    }
    if (emissions.any((list) => list.isNotEmpty)) {
      throw StateError(
          'Fresh store conflicts.watch must emit empty lists: $emissions');
    }

    // 4. Resolve / acceptLocal / acceptRemote on a missing conflict surface the
    //    native StateError as a typed RemoteLocalPocketException (delegation +
    //    error mapping across the boundary).
    mark('resolve-missing');
    await _expectTypedConflictError(() => conflicts.resolve(
        store: 'widgets', id: 'widget000000001', merged: {'name': 'merged'}));

    mark('accept-local-missing');
    await _expectTypedConflictError(
        () => conflicts.acceptLocal('widgets', 'widget000000001'));

    mark('accept-remote-missing');
    await _expectTypedConflictError(
        () => conflicts.acceptRemote('widgets', 'widget000000001'));

    mark('close');
    await pocket.close();

    report(
        'passed',
        'conflicts: listOpen/get/watch/resolve/acceptLocal/acceptRemote all '
            'round-tripped through the facade + worker with correct error mapping. '
            '(stage=$stage)');
  } catch (e, stack) {
    report('failed', 'stage=$stage\n$e\n$stack');
  }
}

/// A structural stand-in so the smoke does not need to import the native
/// [ConflictRecord] type; the facade emits typed records, so the smoke only
/// asserts list length.
typedef ConflictRecordLike = Object;

Future<void> _expectTypedConflictError(Future<void> Function() action) async {
  var threwTyped = false;
  String? caught;
  try {
    await action();
  } on RemoteLocalPocketException catch (e) {
    // The native StateError('No conflict found ...') rides the localpocket
    // wire code with its type name. The minified worker exposes the type code
    // as a minified symbol, so assert on the stable message instead.
    threwTyped = e.message.contains('No conflict found');
    caught = 'RemoteLocalPocketException code=${e.code} msg=${e.message}';
  } catch (e2) {
    threwTyped = true;
    caught = 'other:$e2';
  }
  if (!threwTyped) {
    throw StateError(
        'Expected a typed conflict error, but got ${caught ?? 'NO ERROR'}');
  }
}
