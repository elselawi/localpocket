// v2: a range condition can never enter an OR group — `anyOf` only accepts
// `EqCond` values, so the equality-only restriction is a compile error.
import 'package:localpocket/typed.dart';

import '../support/tasks.dart';

Future<TypedPage<Tasks>> f(TypedCollection<Tasks> tasks) {
  // expect: argument_type_not_assignable
  return tasks.query(anyOf: [Tasks.count.lt(9)]);
}
