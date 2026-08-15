/// Shared helpers to persist benchmark results as JSON for future reference.
///
/// Every run writes a NEW timestamped file under `benchmark/results/`, e.g.
/// `localpocket_benchmark_2026-08-14_143825.json`, so runs never overwrite
/// each other and can be compared side by side. The `YYYY-MM-DD_HHMMSS` part
/// sorts chronologically, so listings order by date automatically.
///
/// Result files are git-ignored by basename pattern (see `.gitignore`): the
/// patterns have no slash, so they keep matching even if a file is moved out
/// of `benchmark/results/`.
library;

import 'dart:convert';
import 'dart:io';

/// The Dart VM build target, e.g. `windows_x64` (parsed from
/// `Platform.version`'s `on "..."` suffix; `Platform.architecture` is not
/// available on all SDKs).
String? _vmTarget() {
  final m = RegExp(r'on "([^"]+)"').firstMatch(Platform.version);
  return m?.group(1);
}

/// Machine/toolchain metadata to attach to every persisted run (every
/// published result states machine/OS, Dart and SQLite versions, etc.).
Map<String, Object?> buildMeta({String? sqliteVersion}) => {
      'generatedAt': DateTime.now().toUtc().toIso8601String(),
      'dartVersion': Platform.version.split(' ').first,
      'os': Platform.operatingSystem,
      'osVersion': Platform.operatingSystemVersion,
      'vmTarget': _vmTarget(),
      'processors': Platform.numberOfProcessors,
      if (sqliteVersion != null) 'sqliteVersion': sqliteVersion,
    };

/// A local timestamp in a lexicographically-sortable form: `2026-08-14_143825`.
String _timestamp() {
  final now = DateTime.now();
  String two(int v) => v.toString().padLeft(2, '0');
  return '${now.year}-${two(now.month)}-${two(now.day)}_'
      '${two(now.hour)}${two(now.minute)}${two(now.second)}';
}

/// Writes [data] as pretty-printed JSON to a NEW, timestamped file
/// `benchmark/results/localpocket_[baseName]_[timestamp].json`, creating the
/// directory if needed. If a file for the same second already exists, a
/// numeric suffix is appended, so a run never overwrites a previous one.
/// Returns the written file.
Future<File> writeJsonResults(
    String baseName, Map<String, Object?> data) async {
  final dir = Directory('benchmark/results');
  await dir.create(recursive: true);
  final stamp = _timestamp();
  var file = File('${dir.path}/localpocket_${baseName}_$stamp.json');
  var n = 2;
  while (await file.exists()) {
    file = File('${dir.path}/localpocket_${baseName}_${stamp}_$n.json');
    n++;
  }
  await file.writeAsString(const JsonEncoder.withIndent('  ').convert(data));
  return file;
}
