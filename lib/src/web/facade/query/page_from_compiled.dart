import 'package:localpocket/src/core/query/query_builder/query_builder.dart';
import 'package:localpocket/src/core/store.dart';
import 'package:localpocket/src/web/conversions.dart';

/// Decodes a FORWARD page response produced by the worker's compiled `query`
/// path. Backward pages are assembled in [WebCompiledQueryForwarder]
/// (they need an extra forward probe round trip).
///
/// [consumedCursor] marks pages reached through a cursor: their [Page.hasPrev]
/// is a mint-time fact and their [Page.prevCursor] is minted bidirectionally.
Page pageFromCompiled(
  QueryBuilder core,
  Map<String, Object?> res, {
  bool consumedCursor = false,
}) {
  final items = (res['items']! as List).map((i) {
    final d = decodeWireValue(i)! as Map;
    return d.map((k, v) => MapEntry(k.toString(), v));
  }).toList();
  final hasNext = res['hasNext']! as bool;
  final rawLast = res['lastRow'];
  final rawFirst = res['firstRow'];
  Map<String, Object?>? decodedRow(Object? raw) => raw is Map
      ? raw.map((k, v) => MapEntry(k.toString(), decodeWireValue(v)))
      : null;
  final lastRow = decodedRow(rawLast);
  final firstRow = decodedRow(rawFirst);
  final hasPrev = consumedCursor && items.isNotEmpty;
  return Page(
    items: items,
    hasNext: hasNext,
    nextCursor: hasNext && lastRow != null && firstRow != null
        ? core.cursorForCompiledRow(lastRow, firstRow)
        : null,
    hasPrev: hasPrev,
    prevCursor: hasPrev && lastRow != null && firstRow != null
        ? core.cursorForCompiledRow(lastRow, firstRow)
        : null,
  );
}
