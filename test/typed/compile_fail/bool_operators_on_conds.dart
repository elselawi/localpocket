// `&&` and `||` are boolean operators, not condition operators — the algebra
// uses the single-character `&` and `|`.
import 'package:localpocket/src/internal/raw_surface.dart';

import '../support/tasks.dart';

void f() {
  // expect: non_bool_operand
  final badAnd = Tasks.done.eq(false) && Tasks.count.gt(1);

  // expect: non_bool_operand
  final badOr = Tasks.done.eq(false) || Tasks.count.gt(1);
}
