/// The kernel-owned result shaper (plan Rule 6).
///
/// The kernel owns projection decoding, page facts, and cursor minting; this
/// module is the single place a decoded window of rows is shaped into the
/// final result values. The live query builder and the compiled-plan runner
/// both shape through here, so page assembly cannot drift between the two
/// execution paths (or between native and the web worker).
library;

/// Projects one decoded row onto [projection]: only the projected keys that
/// exist in the row survive, in the projection's declared order. Rows are
/// value snapshots — the input map is never mutated.
Map<String, Object?> projectRow(
  Map<String, Object?> row,
  List<String> projection,
) =>
    {
      for (final k in projection)
        if (row.containsKey(k)) k: row[k]
    };

/// Projects every decoded row of a window (see [projectRow]).
List<Map<String, Object?>> projectRows(
  List<Map<String, Object?>> rows,
  List<String> projection,
) =>
    [for (final row in rows) projectRow(row, projection)];

/// Splits one overflowing window into the final page window and the page
/// facts: the window is the first [limit] rows (or everything when [limit]
/// is null) and [overflow] reports whether rows beyond the window arrived.
({List<Map<String, Object?>> window, bool overflow}) takeWindow(
  List<Map<String, Object?>> rows,
  int? limit,
) =>
    (
      window: limit == null ? rows : rows.take(limit).toList(),
      overflow: limit != null && rows.length > limit,
    );
