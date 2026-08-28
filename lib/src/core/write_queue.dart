import 'dart:async';

/// {@template localpocket.write_queue}
/// Serializes mutations through a single-writer queue.
/// {@endtemplate}
class WriteQueue {
  /// Creates a queue and optionally observes changes to its depth.
  ///
  /// {@macro localpocket.write_queue}
  WriteQueue({this.onQueueDepthChanged});

  Future<void> _tail = Future.value();
  int _depth = 0;

  /// Called with the number of queued (submitted, not yet finished) actions
  /// whenever it changes.
  final void Function(int depth)? onQueueDepthChanged;

  /// Number of queued actions (submitted but not yet finished).
  int get depth => _depth;

  /// Enqueues [action] and returns its eventual result.
  Future<T> run<T>(Future<T> Function() action) {
    _depth++;
    _notifyDepthChanged();
    final completer = Completer<T>();
    _tail = _tail.then((_) async {
      try {
        completer.complete(await action());
      } catch (e, st) {
        completer.completeError(e, st);
      } finally {
        _depth--;
        _notifyDepthChanged();
      }
    });
    return completer.future;
  }

  // Depth reporting is diagnostic only and must never break queue progress.
  void _notifyDepthChanged() {
    try {
      onQueueDepthChanged?.call(_depth);
    } catch (_) {
      // Ignore observer failures so queued actions remain serialized.
    }
  }
}
