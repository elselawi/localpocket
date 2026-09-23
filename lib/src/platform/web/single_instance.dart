import 'dart:async';
import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'package:meta/meta.dart';
import 'package:web/web.dart' as web;

final Set<String> _heldClaims = <String>{};
final Map<String, Completer<void>> _heldLocks = <String, Completer<void>>{};
final Map<String, Completer<bool>> _inFlightClaims =
    <String, Completer<bool>>{};

/// Releases a held claim for testing purposes.
@visibleForTesting
void releaseSingleInstanceForTesting(String path) {
  _heldClaims.remove(path);
  _heldLocks.remove(path)?.complete();
}

/// Web single-instance claim implementation via the Web Locks API.
///
/// Uses `navigator.locks.request` with `ifAvailable: true` to atomically claim
/// exclusive access to the database at [path] for this document. If another
/// document on the same origin already holds the claim, returns `false`.
///
/// The claim is held until the document unloads or terminates (including
/// crashes and kills), as guaranteed by the Web Locks specification.
/// Repeated calls for the same [path] in the same document return `true`.
Future<bool> claimSingleInstancePlatform(String path) async {
  if (_heldClaims.contains(path)) return true;

  final inFlight = _inFlightClaims[path];
  if (inFlight != null) return await inFlight.future;

  final completer = Completer<bool>();
  _inFlightClaims[path] = completer;
  try {
    final result = await _acquireClaim(path);
    completer.complete(result);
    return result;
  } catch (e, st) {
    completer.completeError(e, st);
    rethrow;
  } finally {
    _inFlightClaims.remove(path);
  }
}

Future<bool> _acquireClaim(String path) async {
  final nav = web.window.navigator as JSObject;
  if (!nav.has('locks')) {
    // If Web Locks API is unavailable (e.g. non-secure origin), cannot contend.
    return true;
  }

  final locks = web.window.navigator.locks;
  final granted = Completer<bool>();
  final holdLock = Completer<void>();

  final lockName = 'localpocket:single_instance:$path';
  final options = web.LockOptions(ifAvailable: true);

  unawaited(locks.request(
    lockName,
    options,
    ((web.Lock? lock) {
      if (lock == null) {
        if (!granted.isCompleted) granted.complete(false);
        return null;
      }
      _heldClaims.add(path);
      _heldLocks[path] = holdLock;
      if (!granted.isCompleted) granted.complete(true);
      return holdLock.future.toJS;
    }).toJS,
  ).toDart.catchError((Object error) {
    if (!granted.isCompleted) granted.complete(false);
    return null;
  }));

  return granted.future;
}

