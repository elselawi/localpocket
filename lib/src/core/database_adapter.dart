import 'dart:async';
import 'package:sqlite3/common.dart';

/// LocalPocket database execution abstraction over [CommonDatabase].
///
/// Implemented by direct native SQLite and managed web/worker runtimes.
abstract class DatabaseExecutor {
  /// Executes a SQL statement (DDL / DML without return rows).
  Future<void> execute(String sql, [List<Object?> parameters = const []]);

  /// Executes a SQL query and returns a list of rows as column-name to value maps.
  Future<List<Map<String, Object?>>> query(
    String table, {
    bool? distinct,
    List<String>? columns,
    String? where,
    List<Object?>? whereArgs,
    String? groupBy,
    String? having,
    String? orderBy,
    int? limit,
    int? offset,
  });

  /// Executes a raw SQL query and returns rows as column-name to value maps.
  Future<List<Map<String, Object?>>> rawQuery(String sql,
      [List<Object?> parameters = const []]);

  /// Inserts a row into [table] and returns the inserted `rowid`.
  Future<int> insert(
    String table,
    Map<String, Object?> values, {
    String? nullColumnHack,
    ConflictAlgorithm? conflictAlgorithm,
  });

  /// Updates rows in [table] matching [where] and returns the count of updated rows.
  Future<int> update(
    String table,
    Map<String, Object?> values, {
    String? where,
    List<Object?>? whereArgs,
    ConflictAlgorithm? conflictAlgorithm,
  });

  /// Deletes rows in [table] matching [where] and returns the count of deleted rows.
  Future<int> delete(
    String table, {
    String? where,
    List<Object?>? whereArgs,
  });
}

/// Conflict resolution algorithm for inserts/updates.
enum ConflictAlgorithm {
  rollback,
  abort,
  fail,
  ignore,
  replace,
}

/// Database handle extending [DatabaseExecutor] with transaction and statement management.
abstract class Database extends DatabaseExecutor {
  /// Whether the database is currently open.
  bool get isOpen;

  /// Closes the database connection.
  Future<void> close();

  /// Runs [action] inside a database transaction.
  CommonPreparedStatement getPreparedStatement(String sql);

  /// Runs [action] inside a database transaction.
  Future<T> transaction<T>(
    Future<T> Function(DatabaseExecutor txn) action, {
    bool? exclusive,
  });

  /// Prepares a reusable statement with [sql].
  CommonPreparedStatement prepare(String sql);

  /// Executes a raw query synchronously if the driver allows it.
  List<Map<String, Object?>> selectSync(String sql,
      [List<Object?> parameters = const []]);

  /// Executes a statement synchronously if the driver allows it.
  void executeSync(String sql, [List<Object?> parameters = const []]);
}

/// A direct synchronous-backed implementation of [Database] wrapping [CommonDatabase].
class DirectSqliteDatabase implements Database {
  final Map<String, CommonPreparedStatement> _statementCache = {};
  final CommonDatabase _db;
  bool _isOpen = true;

  /// Hook for tracing executions (e.g. TestHooks / profilers).
  void Function(String sql, List<Object?> params)? onExecute;

  /// Hook for tracing queries (e.g. TestHooks / profilers).
  void Function(String sql, List<Object?> params)? onQuery;

  DirectSqliteDatabase(this._db);

  CommonDatabase get rawDb => _db;

  @override
  bool get isOpen => _isOpen;

  @override
  Future<void> close() async {
    if (!_isOpen) return;
    _isOpen = false;
    for (final stmt in _statementCache.values) {
      stmt.close();
    }
    _statementCache.clear();
    _db.close();
  }

  @override
  CommonPreparedStatement prepare(String sql) => _db.prepare(sql);

  @override
  CommonPreparedStatement getPreparedStatement(String sql) {
    var stmt = _statementCache[sql];
    if (stmt == null) {
      if (_statementCache.length >= 256) {
        final oldest = _statementCache.keys.first;
        _statementCache.remove(oldest)?.close();
      }
      stmt = _db.prepare(sql);
      _statementCache[sql] = stmt;
    }
    return stmt;
  }

  @override
  List<Map<String, Object?>> selectSync(String sql,
      [List<Object?> parameters = const []]) {
    onQuery?.call(sql, parameters);
    final ResultSet cursor;
    if (onQuery != null) {
      cursor = _db.select(sql, parameters);
    } else {
      cursor = getPreparedStatement(sql).select(parameters);
    }
    return cursor.map((row) => Map<String, Object?>.from(row)).toList();
  }

  @override
  void executeSync(String sql, [List<Object?> parameters = const []]) {
    onExecute?.call(sql, parameters);
    if (onExecute != null) {
      _db.execute(sql, parameters);
    } else {
      getPreparedStatement(sql).execute(parameters);
    }
  }

  @override
  Future<void> execute(String sql,
      [List<Object?> parameters = const []]) async {
    executeSync(sql, parameters);
  }

  @override
  Future<List<Map<String, Object?>>> rawQuery(String sql,
      [List<Object?> parameters = const []]) async {
    return selectSync(sql, parameters);
  }

  @override
  Future<List<Map<String, Object?>>> query(
    String table, {
    bool? distinct,
    List<String>? columns,
    String? where,
    List<Object?>? whereArgs,
    String? groupBy,
    String? having,
    String? orderBy,
    int? limit,
    int? offset,
  }) async {
    final sql = _buildQuerySql(
      table: table,
      distinct: distinct,
      columns: columns,
      where: where,
      groupBy: groupBy,
      having: having,
      orderBy: orderBy,
      limit: limit,
      offset: offset,
    );
    return rawQuery(sql, whereArgs ?? const []);
  }

  @override
  Future<int> insert(
    String table,
    Map<String, Object?> values, {
    String? nullColumnHack,
    ConflictAlgorithm? conflictAlgorithm,
  }) async {
    if (values.isEmpty) {
      if (nullColumnHack == null) {
        throw ArgumentError('insert with empty values requires nullColumnHack');
      }
      final conflictClause = _conflictClause(conflictAlgorithm);
      executeSync(
          'INSERT$conflictClause INTO "$table" ("$nullColumnHack") VALUES (NULL)');
      return _db.lastInsertRowId;
    }

    final cols = values.keys.map((k) => '"$k"').join(', ');
    final placeholders = List.filled(values.length, '?').join(', ');
    final conflictClause = _conflictClause(conflictAlgorithm);
    final sql =
        'INSERT$conflictClause INTO "$table" ($cols) VALUES ($placeholders)';
    executeSync(sql, values.values.toList());
    return _db.lastInsertRowId;
  }

  @override
  Future<int> update(
    String table,
    Map<String, Object?> values, {
    String? where,
    List<Object?>? whereArgs,
    ConflictAlgorithm? conflictAlgorithm,
  }) async {
    if (values.isEmpty) return 0;
    final setClause = values.keys.map((k) => '"$k" = ?').join(', ');
    final conflictClause = _conflictClause(conflictAlgorithm);
    final sql = StringBuffer('UPDATE$conflictClause "$table" SET $setClause');
    final params = <Object?>[...values.values];
    if (where != null && where.isNotEmpty) {
      sql.write(' WHERE $where');
      if (whereArgs != null) params.addAll(whereArgs);
    }
    executeSync(sql.toString(), params);
    return _db.updatedRows;
  }

  @override
  Future<int> delete(
    String table, {
    String? where,
    List<Object?>? whereArgs,
  }) async {
    final sql = StringBuffer('DELETE FROM "$table"');
    final params = <Object?>[];
    if (where != null && where.isNotEmpty) {
      sql.write(' WHERE $where');
      if (whereArgs != null) params.addAll(whereArgs);
    }
    executeSync(sql.toString(), params);
    return _db.updatedRows;
  }

  @override
  Future<T> transaction<T>(
    Future<T> Function(DatabaseExecutor txn) action, {
    bool? exclusive,
  }) async {
    final beginSql =
        (exclusive == true) ? 'BEGIN EXCLUSIVE' : 'BEGIN IMMEDIATE';
    executeSync(beginSql);
    try {
      final result = await action(this);
      executeSync('COMMIT');
      return result;
    } catch (e) {
      try {
        executeSync('ROLLBACK');
      } catch (_) {}
      rethrow;
    }
  }

  static String _conflictClause(ConflictAlgorithm? algorithm) {
    if (algorithm == null) return '';
    switch (algorithm) {
      case ConflictAlgorithm.rollback:
        return ' OR ROLLBACK';
      case ConflictAlgorithm.abort:
        return ' OR ABORT';
      case ConflictAlgorithm.fail:
        return ' OR FAIL';
      case ConflictAlgorithm.ignore:
        return ' OR IGNORE';
      case ConflictAlgorithm.replace:
        return ' OR REPLACE';
    }
  }

  static String _buildQuerySql({
    required String table,
    bool? distinct,
    List<String>? columns,
    String? where,
    String? groupBy,
    String? having,
    String? orderBy,
    int? limit,
    int? offset,
  }) {
    final buf = StringBuffer();
    buf.write('SELECT ');
    if (distinct == true) buf.write('DISTINCT ');
    if (columns != null && columns.isNotEmpty) {
      buf.write(columns.join(', '));
    } else {
      buf.write('*');
    }
    buf.write(' FROM "$table"');
    if (where != null && where.isNotEmpty) {
      buf.write(' WHERE $where');
    }
    if (groupBy != null && groupBy.isNotEmpty) {
      buf.write(' GROUP BY $groupBy');
    }
    if (having != null && having.isNotEmpty) {
      buf.write(' HAVING $having');
    }
    if (orderBy != null && orderBy.isNotEmpty) {
      buf.write(' ORDER BY $orderBy');
    }
    if (limit != null) {
      buf.write(' LIMIT $limit');
    }
    if (offset != null) {
      buf.write(' OFFSET $offset');
    }
    return buf.toString();
  }
}
