import 'dart:async';

import 'package:localpocket/localpocket.dart';
import 'package:localpocket/src/core/codec.dart';

/// Compiled query plan watcher for web worker engine.
/// Watches a compiled SQL query by subscribing to [ChangeBus] and re-running
/// the compiled plan whenever matching stores are mutated.
class CompiledWatcher extends CoalescedWatcher<List<Map<String, Object?>>> {
  final CollectionSchema _schema;
  final String _sql;
  final List<Object?> _params;
  final List<String>? _projection;
  final List<String>? _decodeColumns;
  final void Function(List<Map<String, Object?>> items) _emit;
  final void Function(Object error, StackTrace stackTrace)? _onError;

  CompiledWatcher(
    super.pocket,
    this._schema,
    this._sql,
    this._params,
    this._projection,
    this._decodeColumns,
    this._emit, {
    void Function(Object error, StackTrace stackTrace)? onError,
    super.coalesceWindow,
  }) : _onError = onError;

  @override
  bool shouldInvalidate(ChangeSet cs) => cs.store == _schema.name;

  @override
  Future<List<Map<String, Object?>>> fetchSnapshot() async {
    final rows = await pocket.traceQuery(_sql, _params);
    final columns = _decodeColumns;
    final decoded = columns != null
        ? decodeDbRowsProjected(_schema, rows,
            columns: columns,
            cipher: pocket.fieldCipher,
            cryptoProvider: pocket.cryptoProvider)
        : decodeDbRows(_schema, rows,
            cipher: pocket.fieldCipher, cryptoProvider: pocket.cryptoProvider);
    final projection = _projection;
    if (projection == null) return decoded;
    return [
      for (final row in decoded)
        {
          for (final k in projection)
            if (row.containsKey(k)) k: row[k]
        }
    ];
  }

  @override
  String computeDigest(List<Map<String, Object?>> data) =>
      computeSnapshotDigest(data,
          onDigestBytes: (b) => pocket.perf.watchDigestBytes += b);

  @override
  void onEmit(List<Map<String, Object?>> data) => _emit(data);

  @override
  void onError(Object error, StackTrace stackTrace) =>
      _onError?.call(error, stackTrace);
}
