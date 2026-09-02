/// {@template localpocket.web_storage_capabilities}
/// Main-thread public `LocalPocket` implementation for web.
///
/// Dispatches public-API requests (`WebRequest`) to the dedicated engine worker
/// over `Database.customRequest`.
/// {@endtemplate}
class WebStorageCapabilities {
  /// {@macro localpocket.web_storage_capabilities}
  const WebStorageCapabilities({
    required this.storage,
    required this.durable,
    required this.persistent,
    required this.multiTabStorage,
    required this.multiTabSync,
    required this.worker,
  });

  /// The reported storage kind (`opfs` or `memory`).
  final String storage;

  /// Whether attachment bytes survive a restart.
  final bool durable;

  /// Whether the browser considers the storage persistent.
  final bool persistent;

  /// Whether storage is shared across tabs.
  final bool multiTabStorage;

  /// Whether live multi-tab coordination is available.
  final bool multiTabSync;

  /// Whether the engine runs in a dedicated worker.
  final bool worker;

  /// Serializes the capabilities into a plain map (facade-friendly).
  Map<String, Object?> toJson() => {
        'storage': storage,
        'durable': durable,
        'persistent': persistent,
        'multiTabStorage': multiTabStorage,
        'multiTabSync': multiTabSync,
        'worker': worker,
      };
}
