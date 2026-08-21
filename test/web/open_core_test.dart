import 'dart:async';

import 'package:localpocket/src/core/capabilities.dart';
import 'package:localpocket/src/web/facade/open_core.dart';
import 'package:localpocket/src/web/facade/web_storage_capabilities.dart';
import 'package:test/test.dart';

void main() {
  group('resolveAssetAsBlobUrl', () {
    test('primary fetch success returns the blob URL and marks fetched', () async {
      final calls = <String>[];
      final resolved = await resolveAssetAsBlobUrl(
        load: (path, mime) async {
          calls.add('$path|$mime');
          return 'blob:primary';
        },
        primary: 'assets/packages/localpocket/assets/sqlite3.wasm',
        mimeType: 'application/wasm',
        fallbacks: const ['assets/sqlite3.wasm'],
        lastResort: 'assets/packages/localpocket/assets/sqlite3.wasm',
      );
      expect(resolved.url, 'blob:primary');
      expect(resolved.fetched, isTrue);
      expect(calls, hasLength(1),
          reason: 'fallbacks must not be tried after a primary hit');
    });

    test('falls back to the next candidate when the primary fetch fails',
        () async {
      final calls = <String>[];
      final resolved = await resolveAssetAsBlobUrl(
        load: (path, mime) async {
          calls.add(path);
          if (path == 'assets/packages/localpocket/assets/sqlite3.wasm') {
            throw StateError('404');
          }
          return 'blob:fallback';
        },
        primary: 'assets/packages/localpocket/assets/sqlite3.wasm',
        mimeType: 'application/wasm',
        fallbacks: const ['assets/sqlite3.wasm'],
        lastResort: 'packaged',
      );
      expect(resolved.url, 'blob:fallback');
      expect(resolved.fetched, isTrue);
      expect(calls, ['assets/packages/localpocket/assets/sqlite3.wasm',
          'assets/sqlite3.wasm']);
    });

    test('uses the packaged plain path when every fetch fails', () async {
      final resolved = await resolveAssetAsBlobUrl(
        load: (path, mime) async => throw StateError('offline'),
        primary: 'assets/packages/localpocket/assets/sqlite3.wasm',
        mimeType: 'application/wasm',
        fallbacks: const ['assets/sqlite3.wasm'],
        lastResort: 'assets/packages/localpocket/assets/sqlite3.wasm',
      );
      expect(resolved.url, 'assets/packages/localpocket/assets/sqlite3.wasm');
      expect(resolved.fetched, isFalse,
          reason: 'a plain-path fallback must not be revoked on close');
    });

    test('worker asset resolves to the root fallback path on failure',
        () async {
      final resolved = await resolveAssetAsBlobUrl(
        load: (path, mime) async => throw StateError('404'),
        primary: 'assets/packages/localpocket/assets/localpocket_worker.js',
        mimeType: 'application/javascript',
        fallbacks: const [],
        lastResort: 'assets/localpocket_worker.js',
      );
      expect(resolved.url, 'assets/localpocket_worker.js');
      expect(resolved.fetched, isFalse);
    });
  });

  group('requestPersistenceWithFallback', () {
    test('returns true when the browser grants persistence', () async {
      expect(
        await requestPersistenceWithFallback(() async => true),
        isTrue,
      );
    });

    test('returns false when the browser denies persistence', () async {
      expect(
        await requestPersistenceWithFallback(() async => false),
        isFalse,
      );
    });

    test('resolves false when persist throws instead of propagating', () async {
      expect(
        await requestPersistenceWithFallback(() async => throw StateError('no')),
        isFalse,
      );
    });

    test('resolves false on timeout instead of hanging', () async {
      // A persist promise that never completes must not hang the caller.
      final never = Completer<bool>();
      final result = await requestPersistenceWithFallback(
        () => never.future,
        timeout: const Duration(milliseconds: 20),
      );
      expect(result, isFalse);
    });
  });

  group('reconcileOpenCapabilities', () {
    final initialCaps = SqliteCapabilities(
      sqliteVersion: '3.53.3',
      hasStrict: true,
      walSupported: false,
      hasFts5: true,
      platform: PlatformProfile.web,
    );
    final initialStorage = const WebStorageCapabilities(
      storage: 'opfs',
      durable: true,
      persistent: true,
      multiTabStorage: true,
      multiTabSync: false,
      worker: true,
    );

    test('live values override the facade snapshot', () {
      final reconciled = reconcileOpenCapabilities(
        capabilities: initialCaps,
        storage: initialStorage,
        remote: {
          'sqliteVersion': '3.54.0',
          'hasStrict': false,
          'walSupported': true,
          'hasFts5': false,
          'storage': 'idb',
          'durable': false,
          'persistent': false,
          'multiTabStorage': false,
          'multiTabSync': true,
          'worker': false,
        },
      );
      expect(reconciled.capabilities.sqliteVersion, '3.54.0');
      expect(reconciled.capabilities.hasStrict, isFalse);
      expect(reconciled.capabilities.walSupported, isTrue);
      expect(reconciled.capabilities.hasFts5, isFalse);
      expect(reconciled.capabilities.platform, PlatformProfile.web);
      expect(reconciled.storage.storage, 'idb');
      expect(reconciled.storage.durable, isFalse);
      expect(reconciled.storage.persistent, isFalse);
      expect(reconciled.storage.multiTabStorage, isFalse);
      expect(reconciled.storage.multiTabSync, isTrue);
      expect(reconciled.storage.worker, isFalse);
    });

    test('missing keys fall back to the facade snapshot', () {
      final reconciled = reconcileOpenCapabilities(
        capabilities: initialCaps,
        storage: initialStorage,
        remote: {
          'sqliteVersion': '3.54.0',
        },
      );
      expect(reconciled.capabilities.sqliteVersion, '3.54.0');
      expect(reconciled.capabilities.hasStrict, isTrue);
      expect(reconciled.capabilities.walSupported, isFalse);
      expect(reconciled.capabilities.hasFts5, isTrue);
      expect(reconciled.storage.storage, 'opfs');
      expect(reconciled.storage.persistent, isTrue);
      expect(reconciled.storage.worker, isTrue);
    });

    test('a malformed (wrong-typed) response keeps the snapshot without '
        'throwing', () {
      final reconciled = reconcileOpenCapabilities(
        capabilities: initialCaps,
        storage: initialStorage,
        remote: {
          'sqliteVersion': 42,
          'hasStrict': 'yes',
          'walSupported': null,
          'storage': <Object?>[],
          'durable': 'nope',
        },
      );
      expect(reconciled.capabilities.sqliteVersion, '3.53.3');
      expect(reconciled.capabilities.hasStrict, isTrue);
      expect(reconciled.capabilities.walSupported, isFalse);
      expect(reconciled.storage.storage, 'opfs');
      expect(reconciled.storage.durable, isTrue);
    });

    test('a null remote keeps the facade snapshot untouched', () {
      final reconciled = reconcileOpenCapabilities(
        capabilities: initialCaps,
        storage: initialStorage,
        remote: null,
      );
      expect(reconciled.capabilities.sqliteVersion, '3.53.3');
      expect(reconciled.storage.storage, 'opfs');
      expect(identical(reconciled.capabilities, initialCaps), isTrue);
      expect(identical(reconciled.storage, initialStorage), isTrue);
    });
  });
}
