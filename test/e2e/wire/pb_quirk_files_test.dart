import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../../secret.dart' show testPBServer;
import '../../support/helpers.dart' show record, tempDbPath;
import '../support/wire_server.dart';

/// PocketBase files wire-contract quirks (tests.md section 6, items 31-35).
/// A single source of scenarios run against BOTH the in-process MockPbServer
/// and the LIVE PocketBase server via [wireTest]. The engine's real file lane
/// runs over genuine HTTP on both backends; the raw `dart:io` multipart and
/// download helpers exercise the "other side of the wire" (server response
/// shapes) directly.
///
/// - uploads APPEND server-renamed entries: re-uploading the SAME bytes
///   (even with the same client filename) never overwrites — dedupe is the
///   CLIENT's job, by content hash (the engine collapses identical-byte
///   attaches to one ref), never by name (the server appends a fresh name);
/// - `imgs-` removes by the SERVER-minted name only: removing by the
///   original client filename is a silent no-op (200, imgs unchanged);
/// - a whole-field wipe (`imgs-` with every name in one request) answers
///   `imgs: []` on the response AND on the next GET;
/// - (live probe) a file upload/remove DOES bump the server-managed
///   `record.updated` — the file lane can rely on the pull to re-deliver
///   file changes (the mock re-stamps `updated` on file changes too, a
///   deliberate mirror that agrees with the live finding);
/// - the download path is `GET /api/files/data/{id}/{name}`; it works with
///   the token in the Authorization header on both backends, and the mock
///   enforces it when the server demands auth.
void main() {
  /// The canonical file-sync schema: `prefetchFiles: true` so a pull eagerly
  /// downloads remote-only refs.
  CollectionSchema<Object?> fileSchema(String store) => CollectionSchema(
        name: store,
        version: 1,
        fields: [Field.text('name', required: true), Field.int('qty')],
        prefetchFiles: true,
      );

  /// The current server-side `imgs` list for [id].
  Future<List<Object?>> remoteImgs(WireServer s, String id) async =>
      (await s.readRecord(s.store, id))!['imgs'] as List;

  /// A file-enabled client bound to [s].
  Future<WireClient> fileClient(WireServer s) async {
    final db = await tempDbPath();
    final a = await s.createClient(
        path: db.path,
        storeBuilders: [fileSchema],
        blobStore: MemoryBlobStore());
    s.onClose(() => db.cleanup());
    return a;
  }

  /// Raw multipart PATCH against either backend (no adapter): builds a
  /// `multipart/form-data` body with text [fields] (e.g. `imgs-`) and file
  /// [uploads] (`field -> (filename, bytes)`, e.g. `imgs+`), returning
  /// `(status, decodedJsonOrNull)` — the other side of the wire for pinning
  /// the file-modifier contract verbatim.
  Future<(int, Map<String, Object?>?)> rawMultipartPatch(
    WireServer s,
    String path, {
    Map<String, String> fields = const {},
    Map<String, (String, List<int>)> uploads = const {},
  }) async {
    await s.start(); // the mock binds its HTTP port here (live: no-op)
    final client = HttpClient();
    try {
      final boundary = '----lp${DateTime.now().microsecondsSinceEpoch}';
      final base = s is MockWireServer
          ? Uri.parse(s.mock.baseUrl.toString())
          : Uri.parse(testPBServer);
      final req = await client.openUrl('PATCH', base.resolve(path));
      req.headers.contentType = ContentType('multipart', 'form-data',
          parameters: {'boundary': boundary});
      if (s is RealWireServer) {
        final token = await s.tokens.currentToken();
        req.headers.set('Authorization', 'Bearer ${token.value}');
      }
      final body = <int>[];
      void part(String name, {String? filename, List<int>? bytes}) {
        body.addAll(utf8.encode('--$boundary\r\n'));
        body.addAll(utf8.encode(
            'Content-Disposition: form-data; name="$name"'
            '${filename != null ? '; filename="$filename"' : ''}\r\n'));
        if (bytes != null) {
          body.addAll(utf8.encode('Content-Type: application/octet-stream\r\n'));
        }
        body.addAll(utf8.encode('\r\n'));
        if (bytes != null) {
          body.addAll(bytes);
        } else {
          body.addAll(utf8.encode(fields[name] ?? ''));
        }
        body.addAll(utf8.encode('\r\n'));
      }

      for (final name in fields.keys) {
        part(name);
      }
      for (final entry in uploads.entries) {
        part(entry.key, filename: entry.value.$1, bytes: entry.value.$2);
      }
      body.addAll(utf8.encode('--$boundary--\r\n'));
      req.add(body);
      final res = await req.close();
      final text = await res.transform(utf8.decoder).join();
      Map<String, Object?>? decoded;
      try {
        decoded = text.isEmpty ? null : jsonDecode(text) as Map<String, Object?>;
      } catch (_) {
        decoded = null;
      }
      return (res.statusCode, decoded);
    } finally {
      client.close(force: true);
    }
  }

  /// Raw `GET /api/files/data/{id}/{filename}` against either backend,
  /// returning `(status, bytesOrNull)`. [token] is required on the live
  /// server; the mock accepts any header (or none) unless it enforces auth.
  Future<(int, List<int>?)> rawDownload(
    WireServer s,
    String id,
    String filename, {
    String? token,
  }) async {
    await s.start();
    final client = HttpClient();
    try {
      final base = s is MockWireServer
          ? Uri.parse(s.mock.baseUrl.toString())
          : Uri.parse(testPBServer);
      final req = await client.getUrl(base.resolve(
          '/api/files/data/${Uri.encodeComponent(id)}/${Uri.encodeComponent(filename)}'));
      if (token != null) {
        req.headers.set('Authorization', 'Bearer $token');
      }
      final res = await req.close();
      final bytes = await res.fold<List<int>>(<int>[], (a, c) => a..addAll(c));
      return (res.statusCode, res.statusCode == 200 ? bytes : null);
    } finally {
      client.close(force: true);
    }
  }

  group('E2E PB wire-contract quirks — files', () {
    // -------------------------------------------------------------- #31 --
    wireTest(
        'uploads APPEND: the same bytes never overwrite; dedupe is '
        'client-side by content hash, never by name', (s) async {
      final mock = s is MockWireServer ? s.mock : null;
      final a = await fileClient(s);

      // (a) RAW WIRE: two uploads of IDENTICAL bytes, even with the SAME
      // client filename, APPEND two server-renamed entries — the server
      // never dedupes by name and never overwrites the first.
      final id = generateRecordId();
      await a.pocket.collection(s.store).put(record(id: id, name: 'append'));
      await a.engine.syncNow();
      final bytes = List<int>.filled(256, 7);

      final (s1, r1) = await rawMultipartPatch(
          s, '/api/collections/data/records/$id',
          uploads: {'imgs+': ('same.bin', bytes)});
      expect(s1, 200, reason: 'first raw upload accepted');
      final imgs1 = (r1!['imgs'] as List).cast<String>();
      expect(imgs1, hasLength(1));
      final firstServerName = imgs1.single;

      final (s2, r2) = await rawMultipartPatch(
          s, '/api/collections/data/records/$id',
          uploads: {'imgs+': ('same.bin', bytes)});
      expect(s2, 200, reason: 'second raw upload accepted');
      final imgs2 = (r2!['imgs'] as List).cast<String>();
      expect(imgs2, hasLength(2),
          reason: 'a second upload of identical bytes APPENDS, never '
              'overwrites');
      expect(imgs2, contains(firstServerName),
          reason: 'the first upload\'s server-renamed entry survived');
      expect(imgs2.toSet().length, 2,
          reason: 'the server randomized each filename');
      if (mock != null) {
        expect(mock.fileBytes.containsKey('$id/${imgs2.first}'), isTrue);
        expect(mock.fileBytes.containsKey('$id/${imgs2.last}'), isTrue);
        expect(mock.fileBytes['$id/${imgs2.first}'], bytes);
      }

      // (b) ENGINE LEVEL: attaching the SAME bytes twice through the client
      // dedupes by content hash — ONE ref, ONE upload op, ONE server entry.
      final id2 = generateRecordId();
      await a.pocket.collection(s.store).put(record(id: id2, name: 'dedupe'));
      await a.engine.syncNow();
      final ref1 = await a.pocket.files.attach(
          store: s.store,
          recordId: id2,
          bytes: Stream.value(bytes),
          name: 'same.bin');
      final ref2 = await a.pocket.files.attach(
          store: s.store,
          recordId: id2,
          bytes: Stream.value(bytes),
          name: 'same.bin');
      expect(ref2.refId, ref1.refId,
          reason: 'identical bytes dedupe to the SAME local ref (by hash, '
              'never by name)');
      await a.engine.syncNow();
      expect(await remoteImgs(s, id2), hasLength(1),
          reason: 'the hash-deduped attach uploaded exactly once');
      expect(await a.engine.syncStore.countPending(), 0);
    });

    // -------------------------------------------------------------- #32 --
    wireTest(
        'imgs- removes by the SERVER-minted name only: the original client '
        'filename is a silent no-op', (s) async {
      final a = await fileClient(s);
      final id = generateRecordId();
      await a.pocket.collection(s.store).put(record(id: id, name: 'neg'));
      await a.engine.syncNow();
      final bytes = List<int>.filled(64, 3);
      await a.pocket.files.attach(
          store: s.store,
          recordId: id,
          bytes: Stream.value(bytes),
          name: 'orig.bin');
      await a.engine.syncNow();
      final serverName = (await remoteImgs(s, id)).single as String;
      expect(serverName, isNot('orig.bin'),
          reason: 'the server renamed the upload (server-minted name)');

      // NEGATIVE: removing by the ORIGINAL client filename is a no-op — the
      // server answers 200 with `imgs` unchanged and the file still there.
      final kept = await a.backend.updateRecordFiles(
          id: id, removeNames: ['orig.bin']);
      expect(kept.imgs, [serverName],
          reason: 'a wrong-name removal is a silent no-op (never a 400, '
              'never a partial wipe)');
      expect(await remoteImgs(s, id), [serverName],
          reason: 'the file survives the negative case');

      // POSITIVE: removing by the server-minted name clears it.
      final cleared =
          await a.backend.updateRecordFiles(id: id, removeNames: [serverName]);
      expect(cleared.imgs, isEmpty,
          reason: 'the server-minted name removes the file');
      expect(await remoteImgs(s, id), isEmpty);
    });

    // -------------------------------------------------------------- #33 --
    wireTest(
        'whole-field wipe: imgs- with every name answers imgs: [] on the '
        'response AND on the next GET', (s) async {
      final mock = s is MockWireServer ? s.mock : null;
      final a = await fileClient(s);
      final id = generateRecordId();
      await a.pocket.collection(s.store).put(record(id: id, name: 'wipe'));
      await a.engine.syncNow();
      final b1 = List<int>.filled(16, 1);
      final b2 = List<int>.filled(16, 2);
      await a.pocket.files.attach(
          store: s.store,
          recordId: id,
          bytes: Stream.value(b1),
          name: 'one.bin');
      await a.pocket.files.attach(
          store: s.store,
          recordId: id,
          bytes: Stream.value(b2),
          name: 'two.bin');
      await a.engine.syncNow();
      final names = (await remoteImgs(s, id)).cast<String>();
      expect(names, hasLength(2));

      // Whole-field wipe: ONE imgs- carrying every name at once.
      final wiped =
          await a.backend.updateRecordFiles(id: id, removeNames: names);
      expect(wiped.imgs, isEmpty,
          reason: 'the wipe response carries imgs: []');
      expect(await remoteImgs(s, id), isEmpty,
          reason: 'the next GET confirms the field is empty');
      if (mock != null) {
        for (final n in names) {
          expect(mock.fileBytes.containsKey('$id/$n'), isFalse,
              reason: 'the wiped files were removed server-side');
        }
      }
    });

    // -------------------------------------------------------------- #34 --
    liveOnly(
        'file ops bump record.updated on the real server (the file lane can '
        'rely on the pull)', (s) async {
      final a = await fileClient(s);
      final id = await s.createRecord(s.store, {'name': 'f'});
      final updatedBefore = (await s.readRecord(s.store, id))!['updated'] as String;

      final bytes = List<int>.filled(128, 5);
      final uploaded = await a.backend.updateRecordFilesStream(
        id: id,
        uploads: {
          'probe.bin': StreamFileUpload(
            filename: 'probe.bin',
            length: bytes.length,
            streamFactory: () async => Stream.value(bytes),
          ),
        },
      );
      final updatedAfterUpload =
          (await s.readRecord(s.store, id))!['updated'] as String;
      expect(updatedAfterUpload, isNot(updatedBefore),
          reason:
              'EMPIRICAL PIN: a file upload bumps the server-managed updated '
              '(the mock re-stamps it too — a deliberate mirror that agrees)');

      final cleared = await a.backend.updateRecordFiles(
          id: id, removeNames: uploaded.imgs.cast<String>());
      final updatedAfterRemove =
          (await s.readRecord(s.store, id))!['updated'] as String;
      expect(updatedAfterRemove, isNot(updatedAfterUpload),
          reason:
              'EMPIRICAL PIN: a file removal also bumps updated — a pull '
              're-delivers the record, so the file lane can rely on it');
      expect(cleared.imgs, isEmpty);
    });

    // -------------------------------------------------------------- #35 --
    wireTest(
        'download path GET /api/files/data/{id}/{name} works with the token '
        'in the header; the mock enforces auth when demanded', (s) async {
      final mock = s is MockWireServer ? s.mock : null;
      final a = await fileClient(s);
      final id = generateRecordId();
      await a.pocket.collection(s.store).put(record(id: id, name: 'dl'));
      await a.engine.syncNow();
      final bytes = List<int>.filled(96, 9);
      await a.pocket.files.attach(
          store: s.store,
          recordId: id,
          bytes: Stream.value(bytes),
          name: 'dl.bin');
      await a.engine.syncNow();
      final serverName = (await remoteImgs(s, id)).single as String;

      // With the token in the Authorization header the exact bytes come back
      // on both backends (live: the superuser bearer; mock: any accepted).
      final token = s is RealWireServer ? await s.tokens.currentToken() : null;
      final (status, body) = await rawDownload(s, id, serverName,
          token: token?.value);
      expect(status, 200, reason: 'the canonical download path answers 200');
      expect(body, bytes, reason: 'the exact uploaded bytes come back');

      // (mock only) the download route enforces auth when the server demands
      // it: without a token it answers 401, with the valid token 200.
      if (mock != null) {
        mock.authRequired = true;
        mock.validToken = 'valid-token'; // the harness default token
        final (noToken, _) = await rawDownload(s, id, serverName);
        expect(noToken, 401,
            reason: 'a protected file server rejects unauthenticated reads');
        final (withToken, withBody) =
            await rawDownload(s, id, serverName, token: 'valid-token');
        expect(withToken, 200);
        expect(withBody, bytes);
      }
    });

    liveOnly(
        'the LIVE data collection\'s file access: probe token-less reads',
        (s) async {
      final a = await fileClient(s);
      final id = await s.createRecord(s.store, {'name': 'pub'});
      final bytes = List<int>.filled(32, 4);
      await a.backend.updateRecordFilesStream(
        id: id,
        uploads: {
          'pub.bin': StreamFileUpload(
            filename: 'pub.bin',
            length: bytes.length,
            streamFactory: () async => Stream.value(bytes),
          ),
        },
      );
      final serverName = (await s.readRecord(s.store, id))!['imgs'] as List;

      // EMPIRICAL PIN: the live data collection serves files to an
      // UNAUTHENTICATED request — its `tokenRequired` is OFF (public files;
      // the collection's list/view rules are open to authenticated reads, but
      // the file route itself does not demand the token). The mock's DEFAULT
      // (authRequired=false) mirrors exactly this; the mock-only test above
      // pins the protected variant the live collection is NOT using.
      final (noToken, noTokenBody) =
          await rawDownload(s, id, serverName.single as String);
      expect(noToken, 200,
          reason:
              'the live data collection serves files publicly (tokenRequired '
              'off) — pinned empirically');
      expect(noTokenBody, bytes,
          reason: 'the anonymous read returns the exact bytes');
    });
  });
}
