/// Web compatibility boundary.
///
/// The native LocalPocket engine intentionally remains isolated from
/// `dart:ffi`. A browser build must import a separate facade/worker entrypoint
/// rather than importing this native core library.
const bool isWebDatabaseSupported = false;
