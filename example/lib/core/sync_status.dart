/// A normalized sync status snapshot the UI can render regardless of platform.
class PlaygroundSyncStatus {
  final String state;
  final int pending;
  final int conflicts;
  final int hidden;
  final String? lastError;
  final DateTime? lastSyncAt;

  const PlaygroundSyncStatus({
    required this.state,
    required this.pending,
    required this.conflicts,
    required this.hidden,
    this.lastError,
    this.lastSyncAt,
  });

  factory PlaygroundSyncStatus.none() => const PlaygroundSyncStatus(
    state: 'off',
    pending: 0,
    conflicts: 0,
    hidden: 0,
  );

  bool get isRunning =>
      state != 'off' && state != 'closed' && state != 'authRequired';
  bool get hasError => lastError != null && lastError!.isNotEmpty;
}
