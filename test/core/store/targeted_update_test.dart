import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';

/// P1.A targeted dirty-patch UPDATEs: a single-field change emits a minimal
/// `SET "field" = ?, "hidden" = 0` on the domain table (no full-row
/// re-encode, no `extra` rewrite), while any other shape keeps the full-row
/// update. Behavior must be byte-identical for callers either way.
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
      expect(sql, isNot(contains('"extra"')),
          reason: 'the extra JSON blob must not be rebuilt');

      final r = await col.get(id);
      expect(r!['qty'], 5);
      expect(r['name'], 'a');
      expect(r['phone'], 'p');
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
