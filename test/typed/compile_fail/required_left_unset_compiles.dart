// Case 156: a .req() field left unset is NOT a compile error (the known
// limit — the engine's required-missing ValidationException is the
// authority). This fixture must analyze with no errors.
import 'package:localpocket/src/internal/raw_surface.dart';

import '../support/tasks.dart';

Future<void> f(TypedCollection<Tasks> tasks) => tasks.put([
      Tasks.priority.set(Priority.low),
      Writes.extra('note', 'title intentionally unset'),
    ]);
