import 'package:sqlite3_web/sqlite3_web.dart';

/// A connector that only spawns dedicated workers, returning null for shared workers.
///
/// This enforces the single-engine-instance-per-tab architecture from §6.9.
final class DedicatedOnlyConnector implements WorkerConnector {
  /// Creates a connector that spawns workers from [workerUrl].
  const DedicatedOnlyConnector(this.workerUrl);

  /// The URL of the worker script to spawn.
  final String workerUrl;

  @override
  WorkerHandle? spawnDedicatedWorker() =>
      WorkerConnector.defaultWorkers(workerUrl).spawnDedicatedWorker();

  // Dedicated worker architecture does not use shared workers.
  @override
  WorkerHandle? spawnSharedWorker() => null;
}
