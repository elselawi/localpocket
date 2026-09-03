import 'dart:async';
import 'package:sqlite3/common.dart';

import 'errors.dart';

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
  /// Abort the statement on conflict (SQLite default).
  rollback,

  /// Abort the statement without unwinding prior changes.
  abort,

  /// Fail the statement and report the error.
  fail,

  /// Skip rows that would violate a constraint.
  ignore,

  /// Replace conflicting rows.
  replace,
}

/// Database handle extending [DatabaseExecutor] with transaction and statement management.
abstract class Database extends DatabaseExecutor {
  /// Whether the database is currently open.
  bool get isOpen;

  /// Closes the database connection.
  Future<void> close();

  /// Returns a cached prepared statement for [sql].
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

  /// Registers a scalar SQL user function on the underlying connection.
  ///
  /// Used for the per-store FTS text normalizer. Implementations delegate to
  /// `CommonDatabase.createFunction`, which is available on both native (FFI)
  /// and web (wasm) drivers.
  void createFunction({
    required String functionName,
    required Object? Function(Object? arguments) function,
    bool deterministic = false,
  });
}

/// {@template localpocket.direct_sqlite_database}
/// A direct synchronous-backed implementation of [Database] wrapping [CommonDatabase].
///
/// On native platforms all SQLite work executes SYNCHRONOUSLY on the calling
/// isolate. The `Future`-returning methods here (and on the public
/// `LocalPocket` API) provide API-level asynchrony only — they do NOT move
/// work to a background isolate. Large scans or heavy maintenance should be
/// run from a dedicated isolate to avoid blocking the UI isolate.
/// {@endtemplate}
class DirectSqliteDatabase implements Database {
  /// {@macro localpocket.direct_sqlite_database}
  DirectSqliteDatabase(this._db);
  final Map<String, CommonPreparedStatement> _statementCache = {};
  final CommonDatabase _db;
  bool _isOpen = true;

  /// Set when a rollback inside [transaction] failed: the single connection
  /// is left inside an open transaction, so every later BEGIN fails until the
  /// handle is recreated. Subsequent transactions fail fast and typed instead
  /// of surfacing a raw "cannot start a transaction within a transaction".
  bool _rollbackFailed = false;

  /// Platform hook reporting whether the destructive-migration backup file at
  /// [path] exists. Wired by the native factory (`dart:io`) and the web worker
  /// (OPFS). When null, callers treat the file as absent.
  Future<bool> Function(String path)? backupFileExists;

  /// Platform hook removing the destructive-migration backup file at [path] if
  /// present. Wired by the native factory (`dart:io`) and the web worker
  /// (OPFS). When null, removal is a no-op.
  Future<void> Function(String path)? backupFileDeleter;

  /// Hook for tracing executions (e.g. TestHooks / profilers).
  void Function(String sql, List<Object?> params)? onExecute;

  /// Hook for tracing queries (e.g. TestHooks / profilers).
  void Function(String sql, List<Object?> params)? onQuery;

  /// The wrapped sqlite3 connection, for platform code that must bypass the
  /// adapter (e.g. backup probes).
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
    var stmt = _statementCache.remove(sql);
    if (stmt != null) {
      // Promote to the most-recently-used tail (true LRU).
      _statementCache[sql] = stmt;
      return stmt;
    }
    if (_statementCache.length >= 256) {
      final oldest = _statementCache.keys.first;
      _statementCache.remove(oldest)?.close();
    }
    stmt = _db.prepare(sql);
    _statementCache[sql] = stmt;
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
          [List<Object?> parameters = const []]) async =>
      selectSync(sql, parameters);

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
  void createFunction({
    required String functionName,
    required Object? Function(Object? arguments) function,
    bool deterministic = false,
  }) {
    _db.createFunction(
      functionName: functionName,
      function: (args) => function(args.isEmpty ? null : args.first),
      argumentCount: const AllowedArgumentCount(1),
      deterministic: deterministic,
      // MUST be false: DIRECTONLY functions cannot run in trigger bodies,
      // and the FTS write-side normalizer runs only inside triggers.
      directOnly: false,
    );
  }

  @override
  Future<T> transaction<T>(
    Future<T> Function(DatabaseExecutor txn) action, {
    bool? exclusive,
  }) async {
    if (_rollbackFailed) {
      throw StorageError(
          'Database connection is wedged: an earlier rollback failed and left '
          'an open transaction. Reopen the database to recover.');
    }
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
      } catch (rollbackError) {
        // `OR ROLLBACK` conflict handlers and some error paths already ended
        // the transaction, so a rollback reporting "no transaction is active"
        // is benign — nothing is left open. Any OTHER rollback failure leaves
        // the transaction open on the single connection: every later BEGIN
        // fails and the database is wedged until restart. Never swallow that
        // case — surface a typed StorageError and poison the handle so later
        // transactions fail fast and clearly.
        if (!_rollbackSaysNoActiveTransaction(rollbackError)) {
          _rollbackFailed = true;
          throw StorageError('Rollback failed after a transaction error '
              '($rollbackError); original error: $e. The database connection '
              'is left in an open transaction; reopen to recover.');
        }
      }
      rethrow;
    }
  }

  static bool _rollbackSaysNoActiveTransaction(Object error) {
    final message = error.toString().toLowerCase();
    return message.contains('no transaction is active') ||
        message.contains('cannot rollback');
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
