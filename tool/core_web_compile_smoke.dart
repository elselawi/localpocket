import 'package:localpocket/localpocket.dart';
import 'package:localpocket/sync.dart';

/// Web-compile smoke for the CORE + SYNC public API.
///
/// If `dart:io` or `package:http` ever leaked into core or sync, this would
/// fail to compile for JS. The pocketbase adapter is intentionally NOT
/// imported here — it is a separate entrypoint compiled by its own gate.
void main() {
  // Touch a representative slice of the core + sync surface so the compiler
  // retains the symbols (tree-shaking would otherwise drop them).
  final id = generateRecordId();
  final hash = sha256Hex('smoke-$id');
  final schema = CollectionSchema<Object?>(
    name: 'notes',
    version: 1,
    fields: [Field.text('title', required: true)],
  );
  final ts = formatPbTimestamp(DateTime.utc(2026, 8, 15, 10, 0, 0, 123));
  final parsed = pbTimestampToDateTime(ts);

  // Ignore-the-result sink (web builds have no dart:io to print to).
  Object? sink = <Object?>[
    schema.name,
    FieldKind.text.name,
    hash.length,
    parsed.isUtc,
    SyncState.clean.name,
    OpQueueKind.fileUpload.name,
    BackendHintKind.changed.name,
  ];
  if (sink is! List) throw StateError('unreachable');
}
