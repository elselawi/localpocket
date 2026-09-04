/// Committed-fact notifications for the facade.
///
/// Every notification on these streams is a committed fact: nothing is
/// delivered before the transaction that caused it has committed. One
/// internal `CommittedChange` envelope feeds the coarse and the detailed
/// feeds alike, so no second event stream exists and no payload can be
/// silently dropped between runtimes (plan Rule 7).
library;

import 'row.dart';
import '../kernel/change_bus.dart' show ChangeAction, ChangeOrigin;
import '../schema/store_def.dart';

export '../kernel/change_bus.dart' show ChangeAction, ChangeOrigin;

abstract class _RecordChangeBase {
  const _RecordChangeBase({
    required this.origin,
    required this.action,
    required this.id,
    required this.storeName,
    this.changedFields = const {},
  });

  /// Where the mutation originated:
  /// - [ChangeOrigin.local]: Initiated by local user operations (e.g. `put`, `patch`, `archive`, `restore`, `purge`).
  /// - [ChangeOrigin.remote]: Ingested from the remote server via puller, realtime SSE events, or server sweeps.
  /// - [ChangeOrigin.resolution]: Applied during 3-way conflict merge or push settlement transformations.
  final ChangeOrigin origin;

  /// The mutation action performed on the record:
  /// - [ChangeAction.create]: A new record was inserted.
  /// - [ChangeAction.update]: An existing record's contents were modified.
  /// - [ChangeAction.archive]: An existing record was soft-deleted (archived).
  /// - [ChangeAction.restore]: A previously archived record was restored.
  /// - [ChangeAction.purge]: A record was permanently deleted (hard purge).
  /// - [ChangeAction.hide]: A record was hidden (e.g. server-side deletion or loss of query visibility).
  final ChangeAction action;

  /// The id of the changed record.
  final String id;

  /// The field names the change touched.
  final Set<String> changedFields;

  /// The store that changed.
  final String storeName;
}

/// {@template localpocket.change_notification}
/// A committed change to one record of one store.
///
/// Delivered through [LocalPocket.changes] (every store) and
/// `Store.changes` (one store). The record payloads ride with the event:
/// [oldRecord] is the previous logical state (null for creates) and
/// [newRecord] the state after the commit (null for hard purges), decoded as
/// immutable typed [Row] snapshots.
/// {@endtemplate}
final class ChangeNotification extends _RecordChangeBase {
  /// {@macro localpocket.change_notification}
  const ChangeNotification({
    required super.storeName,
    required super.id,
    required super.origin,
    required super.action,
    this.oldRecord,
    this.newRecord,
    super.changedFields,
  });

  /// Previous logical state before this change (null if newly created).
  final Row<dynamic>? oldRecord;

  /// New logical state after this change (null if hard-purged).
  final Row<dynamic>? newRecord;

  @override
  String toString() => 'ChangeNotification($storeName, $id, ${action.name}, '
      'changed: $changedFields)';
}

/// {@template localpocket.record_change}
/// A committed change to one record of one typed store, with typed row
/// snapshots.
///
/// Delivered through `Store<S>.events`. [oldRecord] and [newRecord] are
/// immutable [Row] snapshots decoded against the store's definition — a
/// create carries a null [oldRecord], a purge a null [newRecord].
/// {@endtemplate}
final class RecordChange<S extends StoreDef<S>> extends _RecordChangeBase {
  /// {@macro localpocket.record_change}
  const RecordChange({
    required super.id,
    required super.origin,
    required super.action,
    required super.storeName,
    this.oldRecord,
    this.newRecord,
    super.changedFields,
  });

  /// Previous typed snapshot before this change (null if newly created).
  final Row<S>? oldRecord;

  /// New typed snapshot after this change (null if hard-purged).
  final Row<S>? newRecord;

  @override
  String toString() =>
      'RecordChange<$S>($id, ${action.name}, changed: $changedFields)';
}
