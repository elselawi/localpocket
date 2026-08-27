import 'package:localpocket/localpocket.dart';
import 'package:localpocket/sync.dart';
import 'package:localpocket/typed.dart';

enum _SmokeRole { author, reader }

final class _SmokeNotes extends StoreDef<_SmokeNotes> {
  _SmokeNotes._() : super(name: 'typednotes', version: 1);

  static final _SmokeNotes instance = _SmokeNotes._();

  late final _title = f.text('title').req();
  late final _role = f.enumOf('role', _SmokeRole.values).req();
  late final _createdAt = f.dateTime('createdAt').req();
  late final _published = f.boolean('published').req();

  static TextFieldReq<_SmokeNotes> get title => instance._title;
  static EnumFieldReq<_SmokeNotes, _SmokeRole> get role => instance._role;
  static DateTimeFieldReq<_SmokeNotes> get createdAt => instance._createdAt;
  static BoolFieldReq<_SmokeNotes> get published => instance._published;

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
  final notes = pocket.store(_SmokeNotes.instance);
  const id = 'typedcompile001';
  await notes.put((draft) => draft
    ..setId(id)
    ..set(_SmokeNotes.title)('Typed compiler smoke')
    ..set(_SmokeNotes.role)(_SmokeRole.author)
    ..set(_SmokeNotes.createdAt)(DateTime.utc(2026, 8, 26))
    ..set(_SmokeNotes.published)(false));
  await notes.patch(id, (draft) => draft..set(_SmokeNotes.published)(true));
  await notes.get(id);
  await notes
      .query()
      .where(_SmokeNotes.published)(eq: true)
      .select(<FieldDef<_SmokeNotes, Object?>>[
        _SmokeNotes.title,
        _SmokeNotes.role,
      ])
      .orderBy(_SmokeNotes.createdAt, desc: true)
      .limit(5)
      .fetch();
  final querySub = notes.query().limit(5).watch().listen((_) {});
  final oneSub = notes.watchOne(id).listen((_) {});
  await notes.search('Typed').limit(5).fetch();
  await querySub.cancel();
  await oneSub.cancel();
}

/// Web-compile smoke for the CORE + SYNC + TYPED public API.
///
/// If a VM-only import ever leaks into these entrypoints, this fixture fails
/// to compile for JS or WASM. The pocketbase adapter is intentionally absent.
void main() {
  // Touch a representative slice so tree-shaking retains the symbols.
  final id = generateRecordId();
  final hash = sha256Hex('smoke-$id');
  final schema = _SmokeNotes.instance.schema;
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
