import 'package:localpocket/localpocket.dart';
import 'package:localpocket/src/kernel/hashing.dart' show sha256Hex;
import 'package:localpocket/src/kernel/ids.dart' show generateRecordId;
import 'package:localpocket/src/kernel/schema.dart' show FieldKind;
import 'package:localpocket/src/kernel/sync/sync_backend.dart'
    show BackendHintKind, formatPbTimestamp, pbTimestampToDateTime;
import 'package:localpocket/src/kernel/sync/sync_tables.dart'
    show OpQueueKind, SyncState;

enum _SmokeRole { author, reader }

final class _SmokeNotes extends StoreDef<_SmokeNotes> {
  _SmokeNotes._() : super(name: 'typednotes', version: 1);

  static final _SmokeNotes store = _SmokeNotes._();

  late final _title = schema.text('title').req();
  late final _role = schema.enumOf('role', _SmokeRole.values).req();
  late final _createdAt = schema.dateTime('createdAt').req();
  late final _published = schema.boolean('published').req();

  static TextFieldReq<_SmokeNotes> get title => store._title;
  static EnumFieldReq<_SmokeNotes, _SmokeRole> get role => store._role;
  static DateTimeFieldReq<_SmokeNotes> get createdAt => store._createdAt;
  static BoolFieldReq<_SmokeNotes> get published => store._published;

  @override
  List<FieldDef<_SmokeNotes, Object?>> get fields => [
        _title,
        _role,
        _createdAt,
        _published,
      ];

  @override
  List<IndexSpec> get indexes => [
        indexSpec([_title])
      ];

  @override
  FtsSpec get fts => ftsSpec([_title]);
}

/// Retains representative typed CRUD/query/search/watch calls in both web
/// compiler outputs. It is not executed by the compile-only smoke.
Future<void> _retainTypedWebSurface(LocalPocket pocket) async {
  final notes = pocket.store(_SmokeNotes.store);
  const id = 'typedcompile001';
  await notes.put([
    Writes.id(id),
    _SmokeNotes.title.set('Typed compiler smoke'),
    _SmokeNotes.role.set(_SmokeRole.author),
    _SmokeNotes.createdAt.set(DateTime.utc(2026, 8, 26)),
    _SmokeNotes.published.set(false),
  ]);
  await notes.patch(id, [_SmokeNotes.published.set(true)]);
  await notes.get(id);
  await notes.query(
    QuerySpec(
      where: [_SmokeNotes.published.eq(true)],
      select: <FieldDef<_SmokeNotes, Object?>>[
        _SmokeNotes.title,
        _SmokeNotes.role,
      ],
      orderBy: [_SmokeNotes.createdAt.desc],
      limit: 5,
    ),
  );
  final querySub = notes.watch(const QuerySpec(limit: 5)).listen((_) {});
  final changeSub = notes.changes.listen((_) {});
  await notes.search(const SearchSpec(term: 'Typed', limit: 5));
  await querySub.cancel();
  await changeSub.cancel();
}

/// Web-compile smoke for the CORE + SYNC + TYPED public API.
///
/// If a VM-only import ever leaks into these entrypoints, this fixture fails
/// to compile for JS or WASM. The pocketbase adapter is intentionally absent.
void main() {
  // Touch a representative slice so tree-shaking retains the symbols.
  final id = generateRecordId();
  final hash = sha256Hex('smoke-$id');
  final schema = _SmokeNotes.store.compiledSchema;
  final ts = formatPbTimestamp(DateTime.utc(2026, 8, 15, 10, 0, 0, 123));
  final parsed = pbTimestampToDateTime(ts);

  // Ignore-the-result sink (web builds have no dart:io to print to).
  final Object? sink = <Object?>[
    schema.name,
    FieldKind.text.name,
    hash.length,
    parsed.isUtc,
    SyncState.clean.name,
    OpQueueKind.fileUpload.name,
    BackendHintKind.changed.name,
    _retainTypedWebSurface,
  ];
  if (sink is! List) throw StateError('unreachable');
}
