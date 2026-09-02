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

/// {@template localpocket.change_notification}
/// A committed change to one record of one store.
///
/// Delivered through [LocalPocket.changes] (every store) and
/// `Store.changes` (one store). The record payloads ride with the event:
/// [oldRecord] is the previous logical state (null for creates) and
/// [newRecord] the state after the commit (null for hard purges), exactly as
/// the contract's committed-change event carries them on every runtime.
/// {@endtemplate}
final class ChangeNotification {
  /// {@macro localpocket.change_notification}
  const ChangeNotification({
    required this.storeName,
    required this.id,
    required this.origin,
    required this.action,
    this.oldRecord,
    this.newRecord,
    this.changedFields = const {},
  });

  /// The store that changed.
  final String storeName;

  /// The id of the changed record.
  final String id;

  /// Where the change originated (local write, remote ingest, resolution).
  final ChangeOrigin origin;

  /// What happened to the record.
  final ChangeAction action;

  /// Previous logical state before this change (null if newly created).
  final Map<String, Object?>? oldRecord;

  /// New logical state after this change (null if hard-purged).
  final Map<String, Object?>? newRecord;

  /// The field names the change touched.
  final Set<String> changedFields;

  /// The record ids touched by this committed change. One committed envelope
  /// carries exactly one record; this convenience keeps multi-record call
  /// sites readable.
  List<String> get ids => [id];

  @override
  String toString() =>
      'ChangeNotification($storeName, $id, ${action.name}, '
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
final class RecordChange<S extends StoreDef<S>> {
  /// {@macro localpocket.record_change}
  const RecordChange({
    required this.id,
    required this.origin,
    required this.action,
    this.oldRecord,
    this.newRecord,
    this.changedFields = const {},
  });

  /// The id of the changed record.
  final String id;

  /// Where the change originated (local write, remote ingest, resolution).
  final ChangeOrigin origin;

  /// What happened to the record.
  final ChangeAction action;

  /// Previous typed snapshot before this change (null if newly created).
  final Row<S>? oldRecord;

  /// New typed snapshot after this change (null if hard-purged).
  final Row<S>? newRecord;

  /// The field names the change touched.
  final Set<String> changedFields;

  @override
  String toString() =>
      'RecordChange<$S>($id, ${action.name}, changed: $changedFields)';
}
