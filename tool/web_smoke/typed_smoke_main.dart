import 'dart:async';
import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'package:localpocket/localpocket.dart';
import 'package:localpocket/typed.dart';

enum _WebRole { admin, member }

final class _WebTasks extends StoreDef<_WebTasks> {
  _WebTasks._() : super(name: 'typedtasks', version: 1);

  static final _WebTasks instance = _WebTasks._();

  late final _title = f.text('title').req();
  late final _role = f.enumOf(
    'role',
    _WebRole.values,
    wire: const {_WebRole.admin: 'administrator'},
  ).req();
  late final _dueAt = f.dateTime('dueAt').req();
  late final _done = f.boolean('done').req();

  static TextFieldReq<_WebTasks> get title => instance._title;
  static EnumFieldReq<_WebTasks, _WebRole> get role => instance._role;
  static DateTimeFieldReq<_WebTasks> get dueAt => instance._dueAt;
  static BoolFieldReq<_WebTasks> get done => instance._done;

  @override
  List<FieldDef<_WebTasks, Object?>> get fields => [
        _role,
        _title,
        _dueAt,
        _done,
      ];

  @override
  FtsSpec get fts => const FtsSpec(['title']);
}

final class _WebTasksImposter extends StoreDef<_WebTasksImposter> {
  _WebTasksImposter() : super(name: 'typedtasks', version: 1);

  @override
  List<FieldDef<_WebTasksImposter, Object?>> get fields => const [];
}

final class _BrokenNullableRequired<S> extends FieldDef<S, String?> {
  _BrokenNullableRequired(super.owner, super.name) : super(required: true);

  @override
  Field toField() => Field.text(name, required: true);
}

Future<void> main() async {
  var stage = 'start';
  LocalPocket? pocket;
  StreamSubscription<List<TypedRow<_WebTasks>>>? watchSub;

  void report(String status, [String? detail]) {
    globalContext.setProperty('__typed_smoke'.toJS, status.toJS);
    if (detail != null) {
      globalContext.setProperty('__typed_smoke_detail'.toJS, detail.toJS);
    }
  }

  void mark(String next) {
    stage = next;
    globalContext.setProperty('__typed_smoke_progress'.toJS, next.toJS);
  }

  try {
    // Access descriptors out of order before schema compilation. The explicit
    // fields list, not lazy initialization order, must own column order.
    mark('descriptor-order');
    final def = _WebTasks.instance;
    final touchedDone = _WebTasks.done;
    final touchedTitle = _WebTasks.title;
    if (touchedDone.name != 'done' || touchedTitle.name != 'title') {
      throw StateError('Descriptor initialization failed.');
    }
    final ordered = def.schema.fields.map((field) => field.name).toList();
    const expectedOrder = ['role', 'title', 'dueAt', 'done'];
    if (ordered.length != expectedOrder.length ||
        !ordered
            .asMap()
            .entries
            .every((entry) => entry.value == expectedOrder[entry.key])) {
      throw StateError('Descriptor order mismatch: $ordered');
    }

    // The defense-in-depth nullable-required guard is platform-independent
    // and must still fire in the browser build.
    try {
      _BrokenNullableRequired<_WebTasks>(def, 'broken');
      throw StateError('Nullable-required descriptor was accepted.');
    } on StateError catch (error) {
      if (!error.message.toString().contains('required: true')) rethrow;
    }

    mark('open');
    pocket = await LocalPocket.open(
      path: 'typed_phase4_worker_v1',
      stores: [def.schema],
    );

    mark('registry');
    final tasks = pocket.store(def);
    final rebound = pocket.store(def);
    if (!identical(tasks.def, def) || !identical(rebound.def, def)) {
      throw StateError('Canonical typed definition did not rebind.');
    }
    try {
      pocket.store(_WebTasksImposter());
      throw StateError('Non-identical same-name definition was accepted.');
    } on TypedStoreMismatchError catch (error) {
      if (!error.message.contains('typedtasks')) rethrow;
    }

    mark('required-guard');
    try {
      await tasks.put((draft) => draft
        ..setId('typedweb0000001')
        ..set(_WebTasks.role)(_WebRole.member)
        ..set(_WebTasks.dueAt)(DateTime.utc(2026, 8, 26))
        ..set(_WebTasks.done)(false));
      throw StateError('Worker accepted a missing required title.');
    } on Object catch (error) {
      if (error is StateError) rethrow;
      if (!error.toString().contains('title') ||
          !error.toString().contains('required')) {
        throw StateError('Unexpected required guard error: $error');
      }
    }

    const id = 'typedweb0000002';
    final dueAt = DateTime.utc(2026, 8, 26, 14, 15, 16, 789);
    mark('typed-put');
    await tasks.put((draft) => draft
      ..setId(id)
      ..set(_WebTasks.title)('Ship typed worker')
      ..set(_WebTasks.role)(_WebRole.admin)
      ..set(_WebTasks.dueAt)(dueAt)
      ..set(_WebTasks.done)(false));

    // The raw web facade sees logical primitives. Typed objects never cross
    // the worker boundary.
    mark('raw-wire-values');
    final raw = await pocket.collection(def.name).get(id);
    if (raw?['role'] != 'administrator' ||
        raw?['dueAt'] != dueAt.millisecondsSinceEpoch ||
        raw?['role'] is Enum ||
        raw?['dueAt'] is DateTime) {
      throw StateError('Worker did not transport logical map values: $raw');
    }

    mark('typed-query');
    final page = await tasks
        .query()
        .where(_WebTasks.done)(eq: false)
        .select(<FieldDef<_WebTasks, Object?>>[
          def.id,
          _WebTasks.title,
          _WebTasks.role,
          _WebTasks.dueAt,
        ])
        .orderBy(_WebTasks.dueAt, desc: true)
        .limit(10)
        .fetch();
    final row = page.items.single;
    if (row.id != id ||
        row(_WebTasks.title) != 'Ship typed worker' ||
        row(_WebTasks.role) != _WebRole.admin ||
        row(_WebTasks.dueAt) != dueAt ||
        !row(_WebTasks.dueAt).isUtc) {
      throw StateError('Typed worker row decode mismatch: ${row.asMap()}');
    }

    mark('query-watch');
    final watchReady = Completer<void>();
    final watchUpdated = Completer<void>();
    watchSub = tasks
        .query()
        .where(_WebTasks.done)(eq: false)
        .orderBy(_WebTasks.dueAt)
        .limit(10)
        .watch()
        .listen((rows) {
      if (rows.any((value) => value.id == id) && !watchReady.isCompleted) {
        watchReady.complete();
      }
      if (rows.isEmpty && !watchUpdated.isCompleted) {
        watchUpdated.complete();
      }
    });
    await watchReady.future.timeout(const Duration(seconds: 10));
    await tasks.patch(id, (draft) => draft..set(_WebTasks.done)(true));
    await watchUpdated.future.timeout(const Duration(seconds: 10));

    mark('typed-search');
    final hits = await tasks.search('Ship').limit(5).fetch();
    if (hits.length != 1 || hits.single.id != id) {
      throw StateError('Typed worker FTS mismatch: $hits');
    }
    final fetchedHit = await hits.single.fetch();
    if (fetchedHit == null || fetchedHit(_WebTasks.role) != _WebRole.admin) {
      throw StateError('Typed FTS hit fetch decode mismatch.');
    }

    mark('transaction-registry');
    await pocket.transaction((tx) async {
      if (!identical(tx.store(def).def, def)) {
        throw StateError('Transaction did not share canonical registry.');
      }
      try {
        tx.store(_WebTasksImposter());
        throw StateError('Transaction accepted a same-name imposter.');
      } on TypedStoreMismatchError {
        // Expected: transaction and facade share the same identity registry.
      }
    });

    mark('close');
    await watchSub.cancel();
    watchSub = null;
    await pocket.close();
    pocket = null;
    report('passed',
        'Typed CRUD/query/watch/search, codecs, descriptor order, guards, and registry identity passed through the real worker.');
  } catch (error, stack) {
    report('failed', 'stage=$stage\n$error\n$stack');
  } finally {
    await watchSub?.cancel();
    await pocket?.close();
  }
}
