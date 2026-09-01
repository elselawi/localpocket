/// Shared typed store definitions for the typed-layer test suites.
///
/// `Tasks` follows the **canonical-instance convention** the package will
/// document: a `final class` extending `StoreDef<Tasks>` with a private
/// constructor, a single static `instance`, `late final` descriptors, and
/// static accessors so every file writes `Tasks.title` with zero plumbing.
/// The tests double as the pattern's proof.
library;

import 'package:localpocket/src/internal/raw_surface.dart';

/// Access roles for the tasks store.
enum Role { admin, member, guest }

/// Task priorities.
enum Priority { low, normal, high, urgent }

/// The canonical typed definition of the `tasks` store.
final class Tasks extends StoreDef<Tasks> {
  Tasks._() : super(name: 'tasks', version: 1);

  /// The single instance. The private constructor makes a second `Tasks()`
  /// unconstructible outside this class — uniqueness by construction.
  static final Tasks store = Tasks._();

  late final _title = schema.text('title').req();
  late final _priority = schema.enumOf('priority', Priority.values);
  // Optional here so raw-path fixtures can omit it; `title` carries the
  // required-missing coverage.
  late final _role = schema.enumOf('role', Role.values);
  late final _done = schema.boolean('done');
  late final _dueDay = schema.date('dueDay');
  late final _dueAt = schema.dateTime('dueAt');
  late final _estimate = schema.real('estimate');
  late final _count = schema.integer('count');
  late final _tags = schema.jsonList<String>('tags');
  late final _meta = schema.json('meta');
  late final _ownerId = schema.ref('ownerId', to: 'users');

  /// Static accessors: any file writes `Tasks.title` with zero plumbing.
  /// The concrete descriptor types keep `Draft.set` (and the Phase-3
  /// kind-scoped query operators) available through the accessor.
  static TextFieldReq<Tasks> get title => store._title;
  static EnumFieldOpt<Tasks, Priority> get priority => store._priority;
  static EnumFieldOpt<Tasks, Role> get role => store._role;
  static BoolFieldOpt<Tasks> get done => store._done;
  static DateFieldOpt<Tasks> get dueDay => store._dueDay;
  static DateTimeFieldOpt<Tasks> get dueAt => store._dueAt;
  static RealFieldOpt<Tasks> get estimate => store._estimate;
  static IntFieldOpt<Tasks> get count => store._count;
  static JsonListField<Tasks, String> get tags => store._tags;
  static JsonField<Tasks> get meta => store._meta;
  static RefField<Tasks> get ownerId => store._ownerId;

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
