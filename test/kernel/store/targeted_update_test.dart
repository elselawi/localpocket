import 'package:localpocket/src/kernel/cipher.dart';
import 'package:localpocket/src/kernel/database_adapter.dart';
import 'package:localpocket/src/kernel/ids.dart';
import 'package:localpocket/src/kernel/local_pocket.dart';
import 'package:localpocket/src/kernel/schema.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';

/// P1.A targeted dirty-patch UPDATEs: a single-field change emits a minimal
/// `SET "field" = ?, "extra" = ?, "hidden" = 0` on the domain table (no
/// full-row re-encode), while any other shape keeps the full-row update.
/// `extra` stays in the minimal shape on purpose: it is the one place a stale
/// shadow of a declared field can survive, and the read path's NULL-column
/// fallback would serve it after the field is deliberately cleared. Behavior
/// must be byte-identical for callers either way.
void main() {
  Future<DirectSqliteDatabase> openTraced(LocalPocket pocket) async {
    final db = pocket.db as DirectSqliteDatabase;
    return db;
  }

  group('targeted dirty-patch UPDATE shape', () {
    test('single declared-field patch emits a minimal SET clause', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket = await openPocket(path: t.path);
      addTearDown(pocket.close);
      final db = await openTraced(pocket);
      final stmts = <String>[];
      db.onExecute = (sql, _) => stmts.add(sql);

      final id = generateRecordId();
      final col = pocket.collection('widgets');
      await col.put(record(id: id, name: 'a', qty: 1, phone: 'p'));

      stmts.clear();
      await col.patch(id, {'qty': 5});

      final domainUpdates = stmts
          .where((s) =>
              s.toUpperCase().startsWith('UPDATE') &&
              (s.contains('widgets') || s.contains('"widgets"')))
          .toList();
      expect(domainUpdates, isNotEmpty);
      final sql = domainUpdates.last;
      expect(sql, contains('"qty"'));
      expect(sql, contains('"hidden"'));
      expect(sql, isNot(contains('"name"')),
          reason: 'unchanged declared columns must not be rewritten');
      expect(sql, contains('"extra"'),
          reason: 'extra is rewritten so a promoted key cannot linger in it');

      final r = await col.get(id);
      expect(r!['qty'], 5);
      expect(r['name'], 'a');
      expect(r['phone'], 'p');
    });

    test('a single-field patch strips a promoted key from `extra`', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);

      // v1 stores `title` only in the JSON blob, like a record adopted from an
      // existing document.
      final v1 = await openPocket(path: t.path);
      final id = generateRecordId();
      await v1.collection('widgets').put(record(
            id: id,
            name: 'keep',
            extra: {'title': 'Original value', 'tag': 'keepme'},
          ));
      await v1.close();

      final v2 = await openPocket(
        path: t.path,
        stores: [
          widgetsSchema(
            version: 2,
            extraFields: [Field.text('title')],
            migrations: [
              StoreMigration(toVersion: 2, addedFields: [Field.text('title')]),
            ],
          ),
        ],
      );
      addTearDown(v2.close);

      final col = v2.collection('widgets');
      // Recreate the shape a pre-strip build left behind: the promoted key is
      // still in the blob, which is exactly what the read fallback serves.
      // (The migration above removes it going forward; this pins the write-side
      // heal for databases that were promoted before that.)
      await v2.db.execute('UPDATE widgets SET extra = ? WHERE id = ?',
          ['{"tag":"keepme","title":"stale copy"}', id]);
      expect((await col.get(id))!['title'], 'Original value',
          reason: 'the typed column still wins while it holds a value');

      // The row is dirty (never synced), so this takes the single-column fast
      // path.
      await col.patch(id, {'title': null});

      final raw =
          await v2.db.rawQuery('SELECT extra FROM widgets WHERE id = ?', [id]);
      expect(raw.single['extra'], isNot(contains('title')),
          reason: 'the fast path must drop the stale shadow copy');
      expect((await col.get(id))!['title'], isNull);
      expect((await col.get(id))!['tag'], 'keepme');
    });

    test('multi-field or extra-key patches keep the full-row update', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket = await openPocket(path: t.path);
      addTearDown(pocket.close);
      final db = pocket.db as DirectSqliteDatabase;
      final stmts = <String>[];
      db.onExecute = (sql, _) => stmts.add(sql);

      final id = generateRecordId();
      final col = pocket.collection('widgets');
      await col.put(record(id: id, name: 'a', qty: 1, phone: 'p'));

      stmts.clear();
      await col.patch(id, {'qty': 2, 'name': 'b'});
      var sql = stmts
          .where((s) =>
              s.toUpperCase().startsWith('UPDATE') && s.contains('widgets'))
          .last;
      expect(sql, contains('"extra"'));

      // Only an undeclared (extra) key changed: extra must be rewritten.
      stmts.clear();
      await col.patch(id, {'note': 'hi'});
      sql = stmts
          .where((s) =>
              s.toUpperCase().startsWith('UPDATE') && s.contains('widgets'))
          .last;
      expect(sql, contains('"extra"'));

      final r = await col.get(id);
      expect(r!['note'], 'hi');
    });

    test('single-field patch on an encrypted field round-trips', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final schema = CollectionSchema<Object?>(
        name: 'secrets',
        version: 1,
        fields: [
          Field.text('secret', encrypted: true),
          Field.int('code'),
        ],
      );
      final cipher =
          AesGcmFieldCipher(List<int>.generate(32, (i) => (i * 7 + 13) % 256));
      final pocket = await openPocket(
        path: t.path,
        stores: [schema],
        fieldCipher: cipher,
      );
      addTearDown(pocket.close);

      final id = generateRecordId();
      final col = pocket.collection('secrets');
      await col.put({'id': id, 'secret': 'v1', 'code': 7});
      await col.patch(id, {'secret': 'v2'});

      final r = await col.get(id);
      expect(r!['secret'], 'v2');
      expect(r['code'], 7);
    });
  });
}
