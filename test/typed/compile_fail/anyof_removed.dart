// The typed condition algebra replaced `anyOf:` — conditions compose with
// `&`, `|`, and `~` inside `where:`, so the named parameter no longer exists.
import 'package:localpocket/src/internal/raw_surface.dart';

import '../support/tasks.dart';

Future<TypedPage<Tasks>> f(TypedCollection<Tasks> tasks) {
  // expect: undefined_named_parameter
  return tasks.query(anyOf: [Tasks.done.eq(true)]);
}
