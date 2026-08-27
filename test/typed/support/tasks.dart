/// Shared typed store definitions for the typed-layer test suites.
///
/// `Tasks` follows the **canonical-instance convention** the package will
/// document: a `final class` extending `StoreDef<Tasks>` with a private
/// constructor, a single static `instance`, `late final` descriptors, and
/// static accessors so every file writes `Tasks.title` with zero plumbing.
/// The tests double as the pattern's proof.
library;

import 'package:localpocket/typed.dart';

/// Access roles for the tasks store.
enum Role { admin, member, guest }

/// Task priorities.
enum Priority { low, normal, high, urgent }

/// The canonical typed definition of the `tasks` store.
final class Tasks extends StoreDef<Tasks> {
  Tasks._() : super(name: 'tasks', version: 1);

  /// The single instance. The private constructor makes a second `Tasks()`
  /// unconstructible outside this class — uniqueness by construction.
  static final Tasks instance = Tasks._();

  late final _title = f.text('title').req();
  late final _priority = f.enumOf('priority', Priority.values);
  // Optional here so raw-path fixtures can omit it; `title` carries the
  // required-missing coverage.
  late final _role = f.enumOf('role', Role.values);
  late final _done = f.boolean('done');
  late final _dueDay = f.date('dueDay');
  late final _dueAt = f.dateTime('dueAt');
  late final _estimate = f.real('estimate');
  late final _count = f.integer('count');
  late final _tags = f.jsonList<String>('tags');
  late final _meta = f.json('meta');
  late final _ownerId = f.ref('ownerId', to: 'users');

  /// Static accessors: any file writes `Tasks.title` with zero plumbing.
  /// The concrete descriptor types keep `Draft.set` (and the Phase-3
  /// kind-scoped query operators) available through the accessor.
  static TextFieldReq<Tasks> get title => instance._title;
  static EnumFieldOpt<Tasks, Priority> get priority => instance._priority;
  static EnumFieldOpt<Tasks, Role> get role => instance._role;
  static BoolFieldOpt<Tasks> get done => instance._done;
  static DateFieldOpt<Tasks> get dueDay => instance._dueDay;
  static DateTimeFieldOpt<Tasks> get dueAt => instance._dueAt;
  static RealFieldOpt<Tasks> get estimate => instance._estimate;
  static IntFieldOpt<Tasks> get count => instance._count;
  static JsonListField<Tasks, String> get tags => instance._tags;
  static JsonField<Tasks> get meta => instance._meta;
  static RefField<Tasks> get ownerId => instance._ownerId;

  @override
  List<FieldDef<Tasks, Object?>> get fields => [
        _title,
        _priority,
        _role,
        _done,
        _dueDay,
        _dueAt,
        _estimate,
        _count,
        _tags,
        _meta,
        _ownerId,
      ];

  @override
  List<IndexSpec> get indexes => [
        indexSpec<Tasks>([_title])
      ];
}
