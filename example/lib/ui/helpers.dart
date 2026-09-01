import 'package:localpocket/localpocket.dart';

import '../core/schemas.dart';
import '../core/tasks.dart';

/// Shared helpers for the playground pages.
class Helpers {
  Helpers._();

  /// Loads a batch of tasks joined with their assigned user name.
  ///
  /// Returns a display-friendly map projection (the pages render map rows),
  /// built from typed rows.
  static Future<List<Map<String, Object?>>> tasksWithAssignee(
    LocalPocket db, {
    int limit = 30,
  }) async {
    final tasks = await db
        .store(PlaygroundTasks.store)
        .query(
          QuerySpec(orderBy: [PlaygroundTasks.priority.asc], limit: limit),
        );
    final users = <String, Row<PlaygroundUsers>>{};
    final userIds = <String>{};
    for (final t in tasks.items) {
      final a = t(PlaygroundTasks.assignedTo);
      if (a is String) userIds.add(a);
    }
    for (final id in userIds) {
      final u = await db.store(PlaygroundUsers.store).get(id);
      if (u != null) users[id] = u;
    }
    return [
      for (final t in tasks.items)
        {
          ...t.toJson(),
          'assignee':
              users[t(PlaygroundTasks.assignedTo)]?.get(
                PlaygroundUsers.fullName,
              ) ??
              '(unassigned)',
        },
    ];
  }

  static String shortId(String? id) {
    if (id == null) return '-';
    return id.length <= 8 ? id : id.substring(0, 8);
  }

  static String fmtDate(Object? epochMs, {bool withTime = false}) {
    if (epochMs is! int) return '-';
    final d = DateTime.fromMillisecondsSinceEpoch(epochMs);
    final date = '${d.year}-${_two(d.month)}-${_two(d.day)}';
    if (!withTime) return date;
    return '$date ${_two(d.hour)}:${_two(d.minute)}';
  }

  static String _two(int v) => v.toString().padLeft(2, '0');

  static String pretty(Object? v) {
    if (v == null) return 'null';
    if (v is bool) return v ? 'true' : 'false';
    if (v is String) return v;
    if (v is int) return '$v';
    if (v is double) return v.toStringAsFixed(2);
    return v.toString();
  }
}
