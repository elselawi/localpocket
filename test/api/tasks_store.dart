import 'package:localpocket/src/typed/typed.dart';

/// The canonical store definition shared by the api tests.
final class Tasks extends StoreDef<Tasks> {
  Tasks._() : super(name: 'tasks', version: 1);
  static final Tasks store = Tasks._();

  static final title = store.schema.text('title').req();
  static final done = store.schema.boolean('done');
  static final priority = store.schema.integer('priority');
  static final dueAt = store.schema.dateTime('due_at');
  static final tags = store.schema.jsonList<String>('tags');

  @override
  List<FieldDef<Tasks, Object?>> get fields =>
      [title, done, priority, dueAt, tags];

  @override
  List<IndexSpec> get indexes => [
        store.indexSpec([done, priority])
      ];

  @override
  FtsSpec? get fts => store.ftsSpec([title]);

  @override
  bool get keepUnsyncedArchives => true;
}
