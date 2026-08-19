/// A normalized file attachment descriptor shared across native and web.
class PlaygroundFileRef {
  final String refId;
  final String? remoteName;
  final String state;
  final String? lastError;

  const PlaygroundFileRef({
    required this.refId,
    this.remoteName,
    required this.state,
    this.lastError,
  });

  String get displayName => remoteName ?? refId;
}
