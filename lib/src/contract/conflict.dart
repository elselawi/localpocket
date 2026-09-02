part of 'contract.dart';

/// Wire-safe snapshot of one conflict: base + local/remote docs, dirty-field
/// sets, detected-at, and the stored resolution if any.
///
/// {@template localpocket.conflict_data}
/// {@endtemplate}
final class ConflictData {
  /// {@macro localpocket.conflict_data}
  const ConflictData({
    required this.store,
    required this.recordId,
    required this.base,
    required this.local,
    required this.remote,
    required this.dirtyLocal,
    required this.dirtyRemote,
    required this.detectedAt,
    this.resolved,
  });

  /// Decodes from its wire map; malformed required fields throw [WireException].
  factory ConflictData.fromJson(Map<String, Object?> json) => ConflictData(
        store: _wireString(json['store'], 'store'),
        recordId: _wireString(json['recordId'], 'recordId'),
        base: _stringMap(json['base'], 'base'),
        local: _stringMap(json['local'], 'local'),
        remote: _stringMap(json['remote'], 'remote'),
        dirtyLocal: _wireStringSet(json['dirtyLocal'], 'dirtyLocal'),
        dirtyRemote: _wireStringSet(json['dirtyRemote'], 'dirtyRemote'),
        detectedAt: _wireInt(json['detectedAt'], 'detectedAt'),
        resolved: json['resolved'] == null
            ? null
            : _stringMap(json['resolved'], 'resolved'),
      );

  /// Store whose record is conflicted.
  final String store;

  /// Conflicted record ID.
  final String recordId;

  /// Shared base used for conflict detection.
  final Map<String, Object?> base;

  /// Local document at conflict detection time.
  final Map<String, Object?> local;

  /// Remote document at conflict detection time.
  final Map<String, Object?> remote;

  /// Fields changed locally from [base].
  final Set<String> dirtyLocal;

  /// Fields changed remotely from [base].
  final Set<String> dirtyRemote;

  /// Detection timestamp in epoch milliseconds.
  final int detectedAt;

  /// Application-selected resolution, when stored.
  final Map<String, Object?>? resolved;

  /// Serializes the conflict into its wire map.
  Map<String, Object?> toJson() => {
        'store': store,
        'recordId': recordId,
        'base': base,
        'local': local,
        'remote': remote,
        'dirtyLocal': dirtyLocal.toList()..sort(),
        'dirtyRemote': dirtyRemote.toList()..sort(),
        'detectedAt': detectedAt,
        if (resolved != null) 'resolved': resolved,
      };
}
