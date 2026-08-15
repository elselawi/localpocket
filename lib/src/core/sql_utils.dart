/// Small SQLite result helpers.
library;

/// First column of the first row, coerced to int.
int? firstIntValue(List<Map<String, Object?>> rows) {
  if (rows.isEmpty) return null;
  final v = rows.first.values.first;
  if (v is int) return v;
  if (v is String) return int.tryParse(v);
  return null;
}

/// First column of the first row, coerced to String.
String? firstStringValue(List<Map<String, Object?>> rows) {
  if (rows.isEmpty) return null;
  final v = rows.first.values.first;
  return v?.toString();
}
