import 'package:localpocket/src/core/query.dart';
import 'package:localpocket/src/core/store.dart';
import 'package:localpocket/src/web/conversions.dart';

/// Decodes a page response produced by the worker's compiled `query` path.
Page pageFromCompiled(QueryBuilder core, Map<String, Object?> res) {
  final items = (res['items'] as List).map((i) {
    final d = decodeWireValue(i) as Map;
    return d.map((k, v) => MapEntry(k.toString(), v));
  }).toList();
  final hasMore = res['hasMore'] as bool;
  final rawLast = res['lastRow'];
  return Page(
    items: items,
    hasMore: hasMore,
    nextCursor: hasMore && rawLast is Map
        ? core.cursorForCompiledRow(
            rawLast.map((k, v) => MapEntry(k.toString(), decodeWireValue(v))))
        : null,
  );
}
