part of 'contract.dart';

/// An immutable snapshot of one conflict: the shared base plus the local and
/// remote documents at detection time, the dirty-field sets, and the
/// application-selected resolution when one is stored. This is the wire-safe
/// form of the kernel's conflict row; it carries no behavior.
final class ConflictData {
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

  factory ConflictData.fromJson(Map<String, Object?> json) => ConflictData(
        store: json['store']! as String,
        recordId: json['recordId']! as String,
        base: (json['base']! as Map).cast<String, Object?>(),
        local: (json['local']! as Map).cast<String, Object?>(),
        remote: (json['remote']! as Map).cast<String, Object?>(),
        dirtyLocal: (json['dirtyLocal']! as List).cast<String>().toSet(),
        dirtyRemote: (json['dirtyRemote']! as List).cast<String>().toSet(),
        detectedAt: json['detectedAt']! as int,
        resolved: json['resolved'] == null
            ? null
            : (json['resolved']! as Map).cast<String, Object?>(),
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
