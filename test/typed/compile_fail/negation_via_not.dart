// Negation lives in the `~` operator now: the descriptor surface has no
// not-equal method and no IS NOT NULL member (`~field.isNull()` covers it).
import 'package:localpocket/src/internal/raw_surface.dart';

import '../support/tasks.dart';

void f() {
  // expect: undefined_method
  final badNeq = Tasks.done.neq(true);

  // expect: undefined_method
  final badIsNotNull = Tasks.estimate.isNotNull();
}
