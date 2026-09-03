/// Shared runtime-watch plumbing for the two watch surfaces (`Store.watch`
/// and `StoreConflicts.watch`). One implementation for both closes the drift
/// class that produced divergent bugs: in-flight cancellation, `onDone`
/// termination when the database closes, async `onListen` errors surfacing
/// on the stream instead of the zone, and the open guard.
library;

import 'dart:async';

import '../contract/contract.dart';

/// Starts a kernel-backed watch stream.
///
/// [ensureOpen] runs before anything else (a watch is a read). [start]
/// registers the kernel subscription and must resolve to the
/// [WatchStartedResult]. While the request is in flight a cancellation must
/// still tear the kernel subscription down. Snapshot events matching
/// [matches] are translated through [emit]. The stream closes when the
/// runtime's event stream ends (database closed) or on cancel; errors inside
/// the async registration become stream errors, never unhandled zone errors.
Stream<List<T>> runtimeWatch<T>({
  required Future<WatchStartedResult> Function() start,
  required Future<Result> Function(Request request) send,
  required Stream<Event> events,
  required void Function() ensureOpen,
  required bool Function(Event event, String subscription) matches,
  required List<T> Function(Event event) emit,
}) {
  ensureOpen();
  // The stream's owner controls the controller's lifetime (torn down on
  // cancel; the kernel-side watch dies with it).
  // ignore: close_sinks
  late final StreamController<List<T>> controller;
  StreamSubscription<Event>? eventsSub;
  String? subscription;
  var cancelled = false;

  Future<void> cancel() async {
    cancelled = true;
    await eventsSub?.cancel();
    final id = subscription;
    if (id != null) {
      subscription = null;
      try {
        await send(WatchCancelRequest(subscription: id));
      } catch (_) {
        // The runtime may already be closed; the watch is dead either way.
      }
    }
  }

  controller = StreamController<List<T>>(
    onListen: () {
      // StreamController.onListen errors do NOT route to the stream: an
      // async body throwing would surface as an unhandled zone error and the
      // stream would silently never emit. Run the body explicitly and funnel
      // failures through addError + close.
      unawaited(() async {
        try {
          final started = await start();
          if (cancelled) {
            // Cancelled while the request was in flight: the kernel already
            // registered the subscription, so it must be torn down explicitly
            // or it would keep re-querying on every store change forever.
            try {
              await send(
                  WatchCancelRequest(subscription: started.subscription));
            } catch (_) {
              // The runtime may already be closed; the watch dies with it.
            }
            return;
          }
          subscription = started.subscription;
          eventsSub = events.listen(
            (event) {
              final id = subscription;
              if (id != null && matches(event, id)) {
                controller.add(emit(event));
              }
            },
            onError: controller.addError,
            onDone: () {
              // The upstream event stream ends when the database closes; the
              // watch stream must end with it (`await for` must terminate).
              if (!controller.isClosed) unawaited(controller.close());
            },
            cancelOnError: false,
          );
        } catch (e, st) {
          if (!controller.isClosed) {
            controller.addError(e, st);
            await controller.close();
          }
        }
      }());
    },
    onCancel: cancel,
  );
  return controller.stream;
}
