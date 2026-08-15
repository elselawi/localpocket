import 'dart:async';

/// Serializes mutations through a single-writer queue.
class WriteQueue {
  Future<void> _tail = Future.value();
  int _depth = 0;

  /// Called with the number of queued (submitted, not yet finished) actions
  /// whenever it changes.
  final void Function(int depth)? onQueueDepthChanged;

  WriteQueue({this.onQueueDepthChanged});

  /// Number of queued actions (submitted but not yet finished).
  int get depth => _depth;

  Future<T> run<T>(Future<T> Function() action) {
    _depth++;
    onQueueDepthChanged?.call(_depth);
    final completer = Completer<T>();
    _tail = _tail.then((_) async {
      try {
        completer.complete(await action());
      } catch (e, st) {
        completer.completeError(e, st);
      } finally {
        _depth--;
        onQueueDepthChanged?.call(_depth);
      }
    });
    return completer.future;
  }
}
