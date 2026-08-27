// Typed index and FTS declarations accept descriptors owned by the same store.
import 'package:localpocket/typed.dart';

import '../support/tasks.dart';

final indexes = <IndexSpec>[
  indexSpec<Tasks>(<FieldDef<Tasks, Object?>>[Tasks.title, Tasks.priority]),
  indexSpec<Tasks>([]),
];

final search = ftsSpec<Tasks>(<FieldDef<Tasks, Object?>>[Tasks.title]);

void main() {}
