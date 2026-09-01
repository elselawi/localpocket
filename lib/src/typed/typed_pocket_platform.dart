/// Platform seam for [LocalPocket]: the typed layer references ONE name that
/// resolves to the core engine. The web facade's conditional claim on the
/// name retired with the web collapse; web applications use the destination
/// `LocalPocket` from the public barrel.
///
/// Importing the core `local_pocket.dart` directly pins the typed layer to
/// the native engine (whose database factory throws on the web). The typed
/// layer is itself transitional and retires with the old architecture.
library;

export '../kernel/local_pocket.dart';
