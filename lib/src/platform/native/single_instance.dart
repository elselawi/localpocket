/// Native single-instance claim implementation.
///
/// On desktop and mobile, multiple processes/windows can access independent
/// database files, and SQLite file locking handles concurrency at the engine
/// level. Single-instance contention is a web OPFS concern where an origin
/// shares a single storage quota and uncoordinated concurrent opens wedge the
/// origin.
///
/// Returns `true` unconditionally on native platforms.
Future<bool> claimSingleInstancePlatform(String path) async => true;
