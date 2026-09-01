/// Application-side database wiring: one shared, race-safe handle with
/// cached typed-store accessors.
///
/// Implements the mechanics consumers otherwise hand-roll per app — a
/// future-memoized [open] (concurrent callers share one open instead of
/// racing two), guarded access before opening, clean close-then-reopen,
/// and per-definition [handle] caching. Subclasses declare configuration
/// ([path], optionally [stores], or override [doOpen]) plus one-line typed
/// getters:
///
/// ```dart
/// final class AppDb extends TypedPocket {
///   AppDb._();
///   static final AppDb i = AppDb._();
///
///   @override
///   String get path => 'app.db';
///
///   @override
///   StoreDefs get stores => [Tasks.store];
///
///   TypedCollection<Tasks> get tasks => handle(Tasks.store);
/// }
///
/// // Bootstrap once:  await AppDb.i.open();
/// // Anywhere later:   await AppDb.i.tasks.put(...);
/// ```
library;

import 'package:localpocket/src/schema/store_def.dart';
import 'package:localpocket/src/typed/typed_collection.dart';
import 'typed_pocket_platform.dart';

/// The declaration list naming every store a database owns.
///
/// This is the schema **manifest**, not boilerplate: opening a fresh file
/// creates each listed store's table (+ indexes/FTS), a newer definition
/// version triggers its migrations, and the web worker builds its side from
/// the same upfront list. Declare each canonical `Def.store` exactly
/// once here.
typedef StoreDefs = List<StoreDef<Object?>>;

/// {@template localpocket.typed_pocket}
/// A single application-owned [LocalPocket] wiring base.
///
/// Subclass once per application. The base owns lifecycle mechanics
/// ([open], [close], re-openability) and typed-handle caching ([handle]);
/// the subclass owns configuration and exposes intent-named store getters
/// that delegate to [handle]. No global state lives inside the package —
/// instances are ordinary objects the app holds (a singleton, DI container,
/// or provider).
/// {@endtemplate}
abstract class TypedPocket {
  /// Creates an unopened instance. Instances are reusable across open/close
  /// cycles; construct them wherever the app wires its singletons.
  ///
  /// {@macro localpocket.typed_pocket}
  TypedPocket(this.path);

  /// The already-opened database handle, or `null`.
  LocalPocket? _db;

  /// The in-flight or settled [doOpen] future; cleared by [close] and on
  /// open failures so failures stay retryable.
  Future<LocalPocket>? _opening;

  /// File location for the underlying database (`':memory:'` works on
  /// native platforms; see the README web notes for web caveats)
  String path;

  /// All store definitions registered when the database opens — see the
  /// [StoreDefs] contract above for why this manifest cannot be derived:
  /// it declares what a fresh install creates, which versions migrate, and
  /// what the web worker pre-registers.
  ///
  /// Declare every store the subclass exposes through [handle]; leaving out
  /// one fails loudly on first access with the database's "no store
  /// registered" error rather than silently.
  StoreDefs get stores => const [];

  /// SQLite wasm asset location used when [open] runs on the web, resolved
  /// relative to the page (ignored on native). Defaults to the package's pub
  /// layout; override when a deployment serves the assets elsewhere — the
  /// default [doOpen] forwards it to [openTyped].
  String? get wasmAssetPath => null;

  /// Worker JavaScript asset location for web opens (see [wasmAssetPath]).
  String? get workerAssetPath => null;

  /// Whether [open] has completed successfully and [close] has not been
  /// called since.
  bool get isOpen => _db != null;

  /// Opens the underlying database exactly once.
  ///
  /// Concurrent callers share one in-flight [Future] — a second concurrent
  /// open never races the first into a double-open. A failed open is NOT
  /// memoized: the next call retries [doOpen]. After [close], calling
  /// [open] again opens a fresh connection.
  ///
  /// Returns the opened [LocalPocket] (the same object [pocket] serves).
  Future<LocalPocket> open() {
    final ready = _db;
    if (ready != null) return Future.value(ready);
    return _opening ??= _openOnce();
  }

  Future<LocalPocket> _openOnce() async {
    try {
      return _db = await doOpen();
    } catch (_) {
      _opening = null; // Never memoize a failed open.
      rethrow;
    }
  }

  /// Performs the actual database open. The default registers [stores]
  /// under [path] and forwards [wasmAssetPath]/[workerAssetPath].
  ///
  /// Override to configure database options beyond those (`fieldCipher`,
  /// `blobStore`, durability window, injected clocks, …) — lifecycle
  /// memoization and reopening remain owned by this base. Prefer registering
  /// stores here too when overriding: skipping them means every [handle]
  /// access fails until they exist.
  Future<LocalPocket> doOpen() => openTyped(
        path: path,
        stores: stores,
        wasmAssetPath: wasmAssetPath,
        workerAssetPath: workerAssetPath,
      );

  /// The opened database handle. Throws a [StateError] until [open] has
  /// completed, with an actionable message instead of a null crash.
  LocalPocket get pocket {
    final db = _db;
    if (db == null) {
      throw StateError(
          'Database is not open. Call `await open()` once during startup '
          'before using stores.');
    }
    return db;
  }

  /// The typed handle for the canonical definition [def], cached: repeated
  /// accesses return the identical object, so call sites can grab handles
  /// once and hold them. Requires a completed [open]; [close] expires
  /// cached handles so re-opens build fresh ones.
  ///
  /// Handles captured *before* a close cycle keep working as immutable row
  /// snapshots against their closed connection — obtain fresh ones from
  /// [handle] after reopening.
  TypedCollection<T> handle<T extends StoreDef<T>>(T def) => pocket.store(def);

  /// Closes the database connection, expires cached handles, and allows a
  /// subsequent [open]. Idempotent; safe to call before [open] or twice in
  /// a row. Records fetched through earlier handles remain valid snapshots
  /// (see `TypedRow` docs).
  Future<void> close() async {
    _opening = null;
    final db = _db;
    _db = null;
    await db?.close();
  }
}

/// Opens a [LocalPocket] straight from canonical definitions: every
/// `def.collectionSchema` is registered (created or migrated) up front —
/// exactly what passing `.schema` by hand does, minus the ceremony in
/// application wiring.
///
/// Works on native and web alike: this forwards to the platform's own
/// `LocalPocket.open`. On web, [wasmAssetPath]/[workerAssetPath] locate the
/// sqlite wasm and worker assets (defaulting to the package pub layout; the
/// [TypedPocket] getters of the same names feed the default `doOpen`). For
/// options beyond path, stores, and asset locations (`fieldCipher`, blob
/// stores, injected clocks) call `LocalPocket.open` yourself — this sugar
/// exists so first-step wiring reads without noise.
///
/// ```dart
/// final db = await openTyped(path: ':memory:', stores: [Tasks.store]);
/// final tasks = db.store(Tasks.store); // cached wrapper, reusable everywhere
/// ```
Future<LocalPocket> openTyped({
  required String? path,
  required StoreDefs stores,
  String? wasmAssetPath,
  String? workerAssetPath,
}) {
  if (path == null) {
    throw UnimplementedError('Override "path" (or all of "doOpen").');
  }
  return LocalPocket.open(
    path: path,
    stores: [for (final def in stores) def.collectionSchema],
    wasmAssetPath: wasmAssetPath,
    workerAssetPath: workerAssetPath,
  );
}
