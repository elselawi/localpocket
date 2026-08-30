import 'dart:io';

import 'package:crypto/crypto.dart';

/// Returns the bytes with CRLF sequences normalized to LF. Binary-safe: only
/// the `\r\n` byte pair is touched, everything else passes through verbatim.
List<int> _lfOnlyBytes(List<int> bytes) {
  final out = <int>[];
  for (var i = 0; i < bytes.length; i++) {
    if (bytes[i] == 13 && i + 1 < bytes.length && bytes[i + 1] == 10) {
      continue; // drop the CR of a CRLF pair
    }
    out.add(bytes[i]);
  }
  return out;
}

/// Proves the checked-in worker asset matches a fresh compile: the compile
/// step writes `build/web/localpocket_worker.js`, and this gate compares it
/// byte-for-byte against `assets/localpocket_worker.js`. A successful compile
/// into `build/` alone is not proof that the package ships current worker
/// code — a stale shipped asset silently serves old worker code in the
/// browser.
///
/// CRLF is normalized away before comparison: the compiler emits LF, while a
/// checkout may rewrite the working-tree copy to CRLF. Anything else — a
/// missing snippet, an old build, a hand edit — still fails.
Future<void> main() async {
  final compiled = File('build/web/localpocket_worker.js');
  final shipped = File('assets/localpocket_worker.js');
  if (!compiled.existsSync()) {
    throw StateError('Compiled worker missing: ${compiled.path}. Run '
        'tool/web_worker_compile.dart first.');
  }
  if (!shipped.existsSync()) {
    throw StateError('Shipped worker asset missing: ${shipped.path}');
  }
  final compiledDigest =
      sha256.convert(_lfOnlyBytes(await compiled.readAsBytes())).toString();
  final shippedDigest =
      sha256.convert(_lfOnlyBytes(await shipped.readAsBytes())).toString();
  if (compiledDigest != shippedDigest) {
    throw StateError(
        'Shipped worker asset is stale: ${compiled.path} differs from '
        '${shipped.path}. Recompile the worker, copy the output to '
        'assets/, and refresh the checksum manifest.');
  }
  stdout.writeln('PASS shipped worker asset is current ($compiledDigest)');
}
