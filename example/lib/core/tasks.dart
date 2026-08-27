import 'package:localpocket/typed.dart';

enum TaskStatus { todo, inProgress, done }

/// Canonical typed definition for the playground's `tasks` store.
final class PlaygroundTasks extends StoreDef<PlaygroundTasks> {
  PlaygroundTasks._() : super(name: 'tasks', version: 1);

  static final PlaygroundTasks instance = PlaygroundTasks._();

  late final _title = schema.text('title').req();
  late final _description = schema.text('description');
  late final _status = schema.enumOf(
    'status',
    TaskStatus.values,
    wire: const {TaskStatus.inProgress: 'in_progress'},
  );
  late final _priority = schema.integer('priority');
  late final _dueAt = schema.dateTime('due_at');
  late final _completed = schema.boolean('completed');
  late final _tags = schema.jsonList<String>('tags');
  late final _assignedTo = schema.ref('assigned_to', to: 'users');

  static TextFieldReq<PlaygroundTasks> get title => instance._title;
  static TextFieldOpt<PlaygroundTasks> get description => instance._description;
  static EnumFieldOpt<PlaygroundTasks, TaskStatus> get status =>
      instance._status;
  static IntFieldOpt<PlaygroundTasks> get priority => instance._priority;
  static DateTimeFieldOpt<PlaygroundTasks> get dueAt => instance._dueAt;
  static BoolFieldOpt<PlaygroundTasks> get completed => instance._completed;
  static JsonListField<PlaygroundTasks, String> get tags => instance._tags;
  static RefField<PlaygroundTasks> get assignedTo => instance._assignedTo;

  @override
  List<FieldDef<PlaygroundTasks, Object?>> get fields => [
    _title,
    _description,
    _status,
    _priority,
    _dueAt,
    _completed,
    _tags,
    _assignedTo,
  ];

  @override
  List<IndexSpec> get indexes => [
    indexSpec(<FieldDef<PlaygroundTasks, Object?>>[_status, _priority]),
  ];

  @override
  FtsSpec get fts =>
      ftsSpec(<FieldDef<PlaygroundTasks, Object?>>[_title, _description]);
}
