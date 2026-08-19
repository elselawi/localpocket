import 'package:localpocket/localpocket.dart';

/// Shared helpers for the playground pages.
class Helpers {
  Helpers._();

  /// Loads a batch of tasks joined with their assigned user name.
  static Future<List<Map<String, Object?>>> tasksWithAssignee(
    LocalPocket db, {
    int limit = 30,
  }) async {
    final tasks = await db
        .collection('tasks')
        .query()
        .orderBy('priority')
        .limit(limit)
        .fetch();
    final users = <String, Map<String, Object?>>{};
    final userIds = <String>{};
    for (final t in tasks.items) {
      final a = t['assigned_to'];
      if (a is String) userIds.add(a);
    }
    for (final id in userIds) {
      final u = await db.collection('users').get(id);
      if (u != null) users[id] = u;
    }
    return [
      for (final t in tasks.items)
        {...t, 'assignee': users[t['assigned_to']]?['name'] ?? '(unassigned)'},
    ];
  }

  static String shortId(String? id) {
    if (id == null) return '-';
    return id.length <= 8 ? id : id.substring(0, 8);
  }

  static String fmtDate(Object? epochMs, {bool withTime = false}) {
    if (epochMs is! int) return '-';
    final dt = DateTime.fromMillisecondsSinceEpoch(epochMs);
    return withTime
        ? '${dt.year}-${_pad2(dt.month)}-${_pad2(dt.day)} ${_pad2(dt.hour)}:${_pad2(dt.minute)}'
        : '${dt.year}-${_pad2(dt.month)}-${_pad2(dt.day)}';
  }

  static String _pad2(int n) => n.toString().padLeft(2, '0');

  static String pretty(Object? v) {
    if (v == null) return 'null';
    if (v is bool) return v ? 'true' : 'false';
    if (v is String) return v;
    if (v is int) return '$v';
    if (v is double) return v.toStringAsFixed(2);
    return v.toString();
  }
}
