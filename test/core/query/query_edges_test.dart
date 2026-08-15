import 'dart:convert';

import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';

/// Query-edge coverage: predicate operator matrix, unknown/encrypted
/// query fields, limits/scopes/ordering/cursor modes, cursor shape validation,
/// nullable keyset pagination, projection/extra-key contract, and
/// aggregates/distinct edge cases.
void main() {
  group('query edges', () {
    late LocalPocket pocket;
    late Collection col;

    setUp(() async {
      pocket = await openPocket();
      col = pocket.collection('widgets');
    });

    tearDown(() => pocket.close());

    Future<void> seed({
      String prefix = 'n',
      int count = 10,
      int Function(int)? qty,
      double Function(int)? price,
    }) async {
      await Future.wait([
        for (var i = 0; i < count; i++)
          col.put(record(
            id: generateRecordId(),
            name: '$prefix$i',
            qty: qty == null ? i : qty(i),
            price: price == null ? null : price(i),
          )),
      ]);
    }

    Future<List<Map<String, Object?>>> walkAll(QueryBuilder Function() build,
        {int limit = 3}) async {
      final out = <Map<String, Object?>>[];
      String? cursor;
      var guard = 0;
      while (true) {
        final q = build();
        final page = cursor == null
            ? await q.limit(limit).fetch()
            : await q.limit(limit).keysetAfter(cursor);
        out.addAll(page.items);
        cursor = page.nextCursor;
        guard++;
        if (guard > 500) {
          throw StateError('keyset pagination did not terminate '
              '(guard at ${out.length} rows)');
        }
        if (cursor == null) break;
      }
      return out;
    }

    List<String> idsOf(List<Map<String, Object?>> rows) =>
        [for (final r in rows) r['id'] as String];

    String encodeCursor(Map<String, Object?> payload) =>
        base64UrlEncode(utf8.encode(jsonEncode(payload)));

    // -------------------------------------------------------------

    group('predicate operator matrix', () {
      test('comparison operators eq neq gt gte lt lte', () async {
        await col.put(record(id: generateRecordId(), name: 'a', qty: 1));
        await col.put(record(id: generateRecordId(), name: 'b', qty: 5));
        await col.put(record(id: generateRecordId(), name: 'c', qty: 10));
        await col.put(record(id: generateRecordId(), name: 'd', qty: 20));

        Future<List<Object?>> qtys(QueryBuilder q) async =>
            [for (final r in (await q.limit(10).fetch()).items) r['qty']];

        expect(await qtys(col.query().where('qty', eq: 5)), [5]);
        expect((await qtys(col.query().where('qty', neq: 5))).toSet(),
            {1, 10, 20});
        expect(await qtys(col.query().where('qty', gt: 5).orderBy('qty')),
            [10, 20]);
        expect(await qtys(col.query().where('qty', gte: 5).orderBy('qty')),
            [5, 10, 20]);
        expect(await qtys(col.query().where('qty', lt: 10).orderBy('qty')),
            [1, 5]);
        expect(await qtys(col.query().where('qty', lte: 10).orderBy('qty')),
            [1, 5, 10]);

        // Non-string / non-int values still bind cleanly.
        expect(await qtys(col.query().where('name', neq: 'a')), hasLength(3));
        expect(await qtys(col.query().where('name', gt: 'a')), hasLength(3));
        final ltNames =
            await col.query().where('name', lt: 'b').limit(10).fetch();
        expect(ltNames.items.map((r) => r['name']), ['a']);
      });

      test('inValues empty and non-empty', () async {
        await col.put(record(id: generateRecordId(), name: 'a', qty: 1));
        await col.put(record(id: generateRecordId(), name: 'b', qty: 2));
        await col.put(record(id: generateRecordId(), name: 'c', qty: 3));

        final q =
            col.query().where('qty', inValues: [1, 3]).orderBy('qty').limit(10);
        expect((await q.fetch()).items.map((r) => r['qty']).toList(), [1, 3]);
        final (sql, args) = q.debugCompile();
        expect(sql, contains('IN (?, ?)'));
        expect(args, [1, 3]);

        // Empty IN list matches nothing but must not be invalid SQL.
        final empty = await col
            .query()
            .where('qty', inValues: <Object?>[])
            .limit(10)
            .fetch();
        expect(empty.items, isEmpty);
      });

      test('between is [start, end)', () async {
        for (final d in [0, 9, 10, 19, 20, 29, 30]) {
          await col.put(record(id: generateRecordId(), name: 'n$d', qty: d));
        }
        final page = await col
            .query()
            .where('qty', between: (10, 30))
            .orderBy('qty')
            .limit(10)
            .fetch();
        expect(page.items.map((r) => r['qty']).toList(), [10, 19, 20, 29]);
      });

      test('isNull and isNotNull', () async {
        await col.put(record(id: generateRecordId(), name: 'with', qty: 5));
        await col
            .put(record(id: generateRecordId(), name: 'without', qty: null));

        final nulls =
            await col.query().where('qty', isNull: true).limit(10).fetch();
        expect(nulls.items.map((r) => r['name']), ['without']);

        final nonNulls =
            await col.query().where('qty', isNotNull: true).limit(10).fetch();
        expect(nonNulls.items.map((r) => r['name']), ['with']);

        final (sql, _) =
            col.query().where('qty', isNull: true).limit(10).debugCompile();
        expect(sql, contains('"qty" IS NULL'));
        final (sql2, _) =
            col.query().where('qty', isNotNull: true).limit(10).debugCompile();
        expect(sql2, contains('"qty" IS NOT NULL'));
      });

      test('like modes startsWith endsWith contains', () async {
        await col
            .put(record(id: generateRecordId(), name: 'alpha beta', qty: 1));
        await col
            .put(record(id: generateRecordId(), name: 'beta gamma', qty: 2));
        await col
            .put(record(id: generateRecordId(), name: 'gamma alpha', qty: 3));

        final starts = await col
            .query()
            .where('name', startsWith: 'alp')
            .limit(10)
            .fetch();
        expect(starts.items.map((r) => r['name']), ['alpha beta']);

        final ends =
            await col.query().where('name', endsWith: 'mma').limit(10).fetch();
        expect(ends.items.map((r) => r['name']), ['beta gamma']);

        final contains =
            await col.query().where('name', contains: 'eta').limit(10).fetch();
        expect(contains.items.map((r) => r['name']).toSet(),
            {'alpha beta', 'beta gamma'});
      });

      test('like escaping literal wildcards and control chars', () async {
        // Literal backslash, percent, underscore, newline.
        await col.put(record(id: generateRecordId(), name: r'A\B', qty: 1));
        await col.put(record(id: generateRecordId(), name: '50% off', qty: 2));
        await col
            .put(record(id: generateRecordId(), name: 'snake_case', qty: 3));
        await col
            .put(record(id: generateRecordId(), name: 'line\nbreak', qty: 4));
        await col.put(record(id: generateRecordId(), name: 'plain', qty: 5));

        // A literal underscore in the pattern must not act as a wildcard.
        var found =
            await col.query().where('name', contains: '_').limit(10).fetch();
        expect(found.items.map((r) => r['name']), ['snake_case']);

        // A literal percent must not act as a wildcard.
        found =
            await col.query().where('name', contains: '%').limit(10).fetch();
        expect(found.items.map((r) => r['name']), ['50% off']);

        // A literal backslash must not escape the following char.
        found =
            await col.query().where('name', contains: r'\').limit(10).fetch();
        expect(found.items.map((r) => r['name']), [r'A\B']);

        // Newline in the pattern matches a newline in the value.
        found =
            await col.query().where('name', contains: '\n').limit(10).fetch();
        expect(found.items.map((r) => r['name']), ['line\nbreak']);

        // Pattern with only wildcards must not match plain text.
        found =
            await col.query().where('name', contains: '%').limit(10).fetch();
        expect(found.items, hasLength(1));

        // Debug: arguments are escaped, not the SQL.
        final (sql, args) = col
            .query()
            .where('name', startsWith: r'A%B_C')
            .limit(5)
            .debugCompile();
        expect(args.first, r'A\%B\_C%');
        expect(sql, contains(r"ESCAPE '\'"));
      });

      test('multiple operators on one field AND-combined', () async {
        await col.put(record(id: generateRecordId(), name: 'a', qty: 1));
        await col.put(record(id: generateRecordId(), name: 'b', qty: 5));
        await col.put(record(id: generateRecordId(), name: 'c', qty: 9));

        final page = await col
            .query()
            .where('qty', gte: 1, lt: 9)
            .orderBy('qty')
            .limit(10)
            .fetch();
        expect(page.items.map((r) => r['qty']), [1, 5]);

        final (sql, args) =
            col.query().where('qty', gte: 1, lt: 9).limit(10).debugCompile();
        expect(sql, contains('"qty" >= ?'));
        expect(sql, contains('"qty" < ?'));
        expect(args, [1, 9]);
      });

      test('empty or-groups are no-ops and mixed and/or composes', () async {
        await col.put(record(id: generateRecordId(), name: 'a', qty: 1));
        await col.put(record(id: generateRecordId(), name: 'b', qty: 2));
        await col.put(record(id: generateRecordId(), name: 'c', qty: 3));

        // Empty list and empty groups add no predicate.
        final none = await col
            .query()
            .orWhere(<Map<String, Object?>>[])
            .limit(10)
            .fetch();
        expect(none.items, hasLength(3));
        final emptyGroup =
            await col.query().orWhere([<String, Object?>{}]).limit(10).fetch();
        expect(emptyGroup.items, hasLength(3));

        // (name = 'a' OR qty = 3) AND qty >= 1 → all three rows match the OR,
        // but the AND narrows to the two with qty >= 1.
        final mixed = await col
            .query()
            .orWhere([
              {'name': 'a'},
              {'qty': 3},
            ])
            .where('qty', gte: 1)
            .limit(10)
            .fetch();
        expect(mixed.items.map((r) => r['name']).toSet(), {'a', 'c'});

        // OR group with multiple predicates in one group: (name='a' AND qty=1) OR qty=3.
        final grouped = await col
            .query()
            .orWhere([
              {'name': 'a', 'qty': 1},
              {'qty': 3},
            ])
            .limit(10)
            .fetch();
        expect(grouped.items.map((r) => r['name']).toSet(), {'a', 'c'});
      });
    });

    // -------------------------------------------------------------

    group('unknown and encrypted query fields', () {
      test('unknown fields rejected before SQL', () async {
        await col.put(record(id: generateRecordId(), name: 'a', qty: 1));

        // Builder-time (synchronous) rejection for where/orderBy/orWhere.
        expect(
            () => col.query().where('nope', eq: 1),
            throwsA(isA<ValidationException>()
                .having((e) => e.field, 'field', 'nope')
                .having(
                    (e) => e.message, 'message', contains('Unknown field'))));
        expect(
            () => col.query().orderBy('nope'),
            throwsA(isA<ValidationException>()
                .having((e) => e.field, 'field', 'nope')));
        expect(
            () => col.query().orWhere([
                  {'nope': 1}
                ]),
            throwsA(isA<ValidationException>()
                .having((e) => e.field, 'field', 'nope')));

        // Async (fetch-time) rejection for aggregates / distinct.
        await expectLater(col.query().countDistinct('nope'),
            throwsA(isA<ValidationException>()));
        await expectLater(
            col.query().distinct('nope'), throwsA(isA<ValidationException>()));
        await expectLater(
            col.query().sum('nope'), throwsA(isA<ValidationException>()));
        await expectLater(
            col.query().min('nope'), throwsA(isA<ValidationException>()));
        await expectLater(
            col.query().max('nope'), throwsA(isA<ValidationException>()));
        await expectLater(
            col.query().avg('nope'), throwsA(isA<ValidationException>()));

        // 'id'/'archived'/'hidden' remain queryable.
        final someId = (await col.query().limit(1).ids()).single;
        final byId =
            await col.query().where('id', eq: someId).limit(10).fetch();
        expect(byId.items, hasLength(1));
        expect(byId.items.single['id'], someId);
        expect(await col.query().where('archived', eq: false).count(),
            greaterThanOrEqualTo(1));
      });

      test('encrypted fields rejected for every query entry point', () async {
        final t = await tempDbPath();
        addTearDown(t.cleanup);
        final esc = CollectionSchema<Object?>(
          name: 'vault',
          version: 1,
          fields: [
            Field.text('label'),
            Field.text('secret', encrypted: true),
            Field.int('count', encrypted: true),
          ],
        );
        final cipher =
            AesGcmFieldCipher(List<int>.generate(32, (i) => (i * 3 + 7) % 256));
        final vaultPocket =
            await openPocket(path: t.path, stores: [esc], fieldCipher: cipher);
        addTearDown(vaultPocket.close);
        final vcol = vaultPocket.collection('vault');

        expect(
            () => vcol.query().where('secret', eq: 'x'),
            throwsA(isA<SchemaRegistrationError>()
                .having((e) => e.message, 'message', contains('encrypted'))));
        expect(() => vcol.query().orderBy('secret'),
            throwsA(isA<SchemaRegistrationError>()));
        expect(
            () => vcol.query().orWhere([
                  {'secret': 'x'}
                ]),
            throwsA(isA<SchemaRegistrationError>()));
        await expectLater(vcol.query().countDistinct('secret'),
            throwsA(isA<SchemaRegistrationError>()));
        await expectLater(vcol.query().distinct('secret'),
            throwsA(isA<SchemaRegistrationError>()));
        await expectLater(
            vcol.query().sum('count'), throwsA(isA<SchemaRegistrationError>()));
        await expectLater(
            vcol.query().min('count'), throwsA(isA<SchemaRegistrationError>()));
        await expectLater(
            vcol.query().max('count'), throwsA(isA<SchemaRegistrationError>()));
        await expectLater(
            vcol.query().avg('count'), throwsA(isA<SchemaRegistrationError>()));
      });
    });

    // -------------------------------------------------------------

    group('limits scopes ordering cursor modes', () {
      test('limit edge cases', () async {
        await seed(count: 5);
        final zero = await col.query().limit(0).fetch();
        expect(zero.items, isEmpty);
        expect(zero.hasMore, isFalse);
        expect(zero.nextCursor, isNull);

        expect(
            () => col.query().limit(-1), throwsA(isA<ValidationException>()));

        // Repeated limit: last one wins.
        final repeated = await col.query().limit(1).limit(4).fetch();
        expect(repeated.items, hasLength(4));

        // limit then all: all wins.
        final all = await col.query().limit(1).all().fetch();
        expect(all.items, hasLength(5));
        expect(all.hasMore, isFalse);

        // all then limit: all wins.
        final all2 = await col.query().all().limit(1).fetch();
        expect(all2.items, hasLength(5));

        // Missing limit (no .all()) throws a typed error.
        await expectLater(
            col.query().fetch(), throwsA(isA<MissingLimitError>()));
        // … and so does the FTS search builder.
        final t = await tempDbPath();
        addTearDown(t.cleanup);
        final ftsSchema = CollectionSchema<Object?>(
          name: 'articles',
          version: 1,
          fields: [Field.text('title', required: true)],
          fts: const FtsSpec(['title']),
        );
        final fp = await openPocket(path: t.path, stores: [ftsSchema]);
        addTearDown(fp.close);
        await expectLater(fp.collection('articles').search('x').fetch(),
            throwsA(isA<MissingLimitError>()));
      });

      test('default id tiebreaker and explicit id ordering', () async {
        final names = ['z', 'a', 'm', 'b'];
        for (final n in names) {
          await col.put(record(id: generateRecordId(), name: n, qty: 1));
        }
        // Single sort column gets an id tiebreaker appended.
        final (sql, _) = col.query().orderBy('name').limit(5).debugCompile();
        expect(sql, contains('ORDER BY "name" ASC, "id" ASC'));

        // Explicit id ordering does not duplicate the tiebreaker.
        final (sql2, _) = col.query().orderBy('id').limit(5).debugCompile();
        expect(sql2, contains('ORDER BY "id" ASC'));
        expect('ORDER BY "id" ASC'.allMatches(sql2), hasLength(1));

        // Walk is deterministic and complete.
        final walked =
            await walkAll(() => col.query().orderBy('name'), limit: 2);
        final expected = await col.query().orderBy('name').all().fetch();
        expect(idsOf(walked), idsOf(expected.items));
      });

      test('mixed direction ordering', () async {
        for (var i = 0; i < 8; i++) {
          await col
              .put(record(id: generateRecordId(), name: 'n$i', qty: i % 3));
        }
        final (sql, _) = col
            .query()
            .orderBy('qty', desc: true)
            .orderBy('name')
            .limit(5)
            .debugCompile();
        expect(sql, contains('ORDER BY "qty" DESC, "name" ASC, "id" ASC'));

        final walked = await walkAll(
            () => col.query().orderBy('qty', desc: true).orderBy('name'),
            limit: 3);
        final expected = await col
            .query()
            .orderBy('qty', desc: true)
            .orderBy('name')
            .all()
            .fetch();
        expect(idsOf(walked), idsOf(expected.items));
      });

      test('archived and hidden scope combos', () async {
        final visible = generateRecordId();
        final archived = generateRecordId();
        final hidden = generateRecordId();
        await col.put(record(id: visible, name: 'visible', qty: 1));
        await col.put(record(id: archived, name: 'archived', qty: 1));
        await col.put(record(id: hidden, name: 'hidden', qty: 1));
        // NOTE: archive() on a locally-created (never remote) row triggers the
        // vanish rule (deletes the row) for stores with keepUnsyncedArchives
        // off (the widgets default), so set the flags directly to exercise the
        // query scoping itself.
        await pocket.db.execute(
            'UPDATE widgets SET archived = 1 WHERE id = ?', [archived]);
        await pocket.db
            .execute('UPDATE widgets SET hidden = 1 WHERE id = ?', [hidden]);

        Future<Set<String>> ids(QueryBuilder q) async =>
            (await q.limit(10).fetch())
                .items
                .map((r) => r['id'] as String)
                .toSet();

        expect(await ids(col.query()), {visible});
        expect(await ids(col.query().includeArchived()), {visible, archived});
        expect(await ids(col.query().includeHidden()), {visible, hidden});
        expect(await ids(col.query().includeArchived().includeHidden()),
            {visible, archived, hidden});
        // count() respects the same scope.
        expect(await col.query().count(), 1);
        expect(await col.query().includeArchived().count(), 2);
        expect(await col.query().includeArchived().includeHidden().count(), 3);
        // keyset pagination respects the same scope.
        final walked =
            await walkAll(() => col.query().includeArchived(), limit: 2);
        expect(idsOf(walked).toSet(), {visible, archived});
      });

      test('ids and explain respect filters and ordering', () async {
        await seed(count: 6);
        final ids = await col
            .query()
            .where('qty', gte: 2)
            .orderBy('qty', desc: true)
            .limit(3)
            .ids();
        expect(ids, hasLength(3));
        // Highest three qtys first.
        final rows = await col
            .query()
            .where('qty', gte: 2)
            .orderBy('qty', desc: true)
            .limit(3)
            .fetch();
        expect(ids, [for (final r in rows.items) r['id']]);

        final plan = await col
            .query()
            .where('qty', gte: 2)
            .orderBy('qty')
            .limit(3)
            .explain();
        expect(plan, isNotEmpty);
      });

      test('projection + keyset cursor combination', () async {
        await seed(count: 12);
        final walked = await walkAll(
            () => col.query().select(['id', 'name']).orderBy('qty'),
            limit: 4);
        expect(walked, hasLength(12));
        for (final r in walked) {
          expect(r.keys.toSet(), {'id', 'name'},
              reason: 'projection must not leak other columns');
        }
        final expected = await col
            .query()
            .select(['id', 'name'])
            .orderBy('qty')
            .all()
            .fetch();
        expect(idsOf(walked), idsOf(expected.items));
      });
    });

    // -------------------------------------------------------------

    group('cursor shape validation and malformed cursors', () {
      test('cursor rejected across different filters, scope and projection',
          () async {
        await seed(count: 8);
        final base = await col
            .query()
            .where('qty', gte: 0)
            .orderBy('qty')
            .limit(3)
            .fetch();
        final cursor = base.nextCursor!;

        // Different WHERE structure (different field).
        await expectLater(
            col
                .query()
                .where('name', eq: 'n1')
                .orderBy('qty')
                .limit(3)
                .keysetAfter(cursor),
            throwsA(isA<StaleCursorError>()));
        // Same operator, different bound value.
        await expectLater(
            col
                .query()
                .where('qty', gte: 1)
                .orderBy('qty')
                .limit(3)
                .keysetAfter(cursor),
            throwsA(isA<StaleCursorError>()));
        // Different OR group.
        await expectLater(
            col
                .query()
                .orWhere([
                  {'qty': 1},
                  {'qty': 2},
                ])
                .orderBy('qty')
                .limit(3)
                .keysetAfter(cursor),
            throwsA(isA<StaleCursorError>()));
        // Different scope (includeArchived).
        await expectLater(
            col
                .query()
                .includeArchived()
                .where('qty', gte: 0)
                .orderBy('qty')
                .limit(3)
                .keysetAfter(cursor),
            throwsA(isA<StaleCursorError>()));
        // Different projection.
        await expectLater(
            col
                .query()
                .select(['id', 'name'])
                .where('qty', gte: 0)
                .orderBy('qty')
                .limit(3)
                .keysetAfter(cursor),
            throwsA(isA<StaleCursorError>()));
        // Same shape still works (sanity).
        final again = await col
            .query()
            .where('qty', gte: 0)
            .orderBy('qty')
            .limit(3)
            .keysetAfter(cursor);
        expect(again.items, isNotEmpty);
      });

      test('cursor rejected across store and schema version', () async {
        await seed(count: 4);
        final cursor =
            (await col.query().orderBy('qty').limit(2).fetch()).nextCursor!;

        // Different store in the same pocket.
        final pocket2 = await openPocket(
            stores: [widgetsSchema(), widgetsSchema(name: 'widgets2')]);
        addTearDown(pocket2.close);
        final other = pocket2.collection('widgets2');
        await other.put(record(id: generateRecordId(), name: 'x', qty: 1));
        await expectLater(
            other.query().orderBy('qty').limit(2).keysetAfter(cursor),
            throwsA(isA<StaleCursorError>()));

        // Different schema version (same store name).
        final t = await tempDbPath();
        addTearDown(t.cleanup);
        final v1 =
            await openPocket(path: t.path, stores: [widgetsSchema(version: 1)]);
        for (var i = 0; i < 4; i++) {
          await v1
              .collection('widgets')
              .put(record(id: generateRecordId(), name: 'v1_$i', qty: i));
        }
        final v1Cursor = (await v1
                .collection('widgets')
                .query()
                .orderBy('qty')
                .limit(2)
                .fetch())
            .nextCursor!;
        await v1.close();

        final v2 = await openPocket(
          path: t.path,
          stores: [
            widgetsSchema(
              version: 2,
              migrations: [StoreMigration(toVersion: 2)],
            ),
          ],
        );
        addTearDown(v2.close);
        await expectLater(
            v2
                .collection('widgets')
                .query()
                .orderBy('qty')
                .limit(2)
                .keysetAfter(v1Cursor),
            throwsA(isA<StaleCursorError>()));
      });

      test('cursor rejected across sort direction and column', () async {
        await seed(count: 6);
        final desc =
            (await col.query().orderBy('qty', desc: true).limit(2).fetch())
                .nextCursor!;
        await expectLater(col.query().orderBy('qty').limit(2).keysetAfter(desc),
            throwsA(isA<StaleCursorError>()));
        final byName =
            (await col.query().orderBy('name').limit(2).fetch()).nextCursor!;
        await expectLater(
            col.query().orderBy('qty').limit(2).keysetAfter(byName),
            throwsA(isA<StaleCursorError>()));
      });

      test('malformed cursors all become StaleCursorError', () async {
        await seed(count: 4);
        final valid =
            (await col.query().orderBy('qty').limit(2).fetch()).nextCursor!;
        final decoded =
            (jsonDecode(utf8.decode(base64Url.decode(valid))) as Map)
                .cast<String, Object?>();

        final malformed = <String, String>{
          // Not base64 at all.
          'not base64': '!!!not-base64!!!',
          // Valid base64 but invalid UTF-8.
          'bad utf8': base64UrlEncode([0xff, 0xfe, 0x00, 0x80]),
          // Valid UTF-8 but not JSON.
          'not json': base64UrlEncode(utf8.encode('just a string')),
          // JSON but not a map.
          'not map': base64UrlEncode(utf8.encode('[1, 2, 3]')),
          // Map missing keys (empty).
          'empty map': encodeCursor({}),
          // sort is not a list.
          'sort not list': encodeCursor({...decoded, 'sort': 'qty:a'}),
          // sort has non-string elements.
          'sort wrong types': encodeCursor({
            ...decoded,
            'sort': [1, 2]
          }),
          // values is not a list.
          'values not list': encodeCursor({...decoded, 'values': 5}),
          // values have wrong element types.
          'values wrong types': encodeCursor({
            ...decoded,
            'values': [
              {'nested': true},
              3
            ],
          }),
          // values count mismatch.
          'values count mismatch': encodeCursor({
            ...decoded,
            'values': [1],
          }),
          // Wrong store.
          'wrong store': encodeCursor({...decoded, 'store': 'other'}),
          // Wrong schema version.
          'wrong schemaVer': encodeCursor({...decoded, 'schemaVer': 99}),
          // Wrong sort signature.
          'wrong sort': encodeCursor({
            ...decoded,
            'sort': ['name:a', 'id:a']
          }),
        };

        for (final entry in malformed.entries) {
          await expectLater(
            col.query().orderBy('qty').limit(2).keysetAfter(entry.value),
            throwsA(isA<StaleCursorError>()),
            reason: '${entry.key} must surface as StaleCursorError',
          );
        }

        // Extra unknown keys in an otherwise-valid cursor are ignored.
        final withExtra = encodeCursor({...decoded, 'extra': 'ignored'});
        final ok =
            await col.query().orderBy('qty').limit(2).keysetAfter(withExtra);
        expect(ok.items, isNotEmpty);

        // A null sort value is legitimate (nullable pagination), not stale.
        final withNull = encodeCursor({
          ...decoded,
          'values': [null, 'someid']
        });
        final ok2 =
            await col.query().orderBy('qty').limit(2).keysetAfter(withNull);
        expect(ok2.items, isNotEmpty);
      });
    });

    // -------------------------------------------------------------

    group('nullable keyset pagination', () {
      test('ascending walk with nulls first matches unpaged order', () async {
        // NULLs sort FIRST in ASC. Every third row has a NULL qty.
        for (var i = 0; i < 12; i++) {
          await col.put(record(
            id: generateRecordId(),
            name: 'n$i',
            qty: i % 3 == 0 ? null : i,
          ));
        }
        final walked =
            await walkAll(() => col.query().orderBy('qty'), limit: 3);
        final expected = await col.query().orderBy('qty').all().fetch();
        expect(idsOf(walked), idsOf(expected.items),
            reason: 'no dup/skip/premature termination');
        // All null rows come first in ASC.
        final nullCount = walked.take(4).where((r) => r['qty'] == null).length;
        expect(nullCount, 4);
      });

      test('descending walk with nulls last matches unpaged order', () async {
        // NULLs sort LAST in DESC.
        for (var i = 0; i < 12; i++) {
          await col.put(record(
            id: generateRecordId(),
            name: 'n$i',
            qty: i % 3 == 0 ? null : i,
          ));
        }
        final walked = await walkAll(
            () => col.query().orderBy('qty', desc: true),
            limit: 4);
        final expected =
            await col.query().orderBy('qty', desc: true).all().fetch();
        expect(idsOf(walked), idsOf(expected.items));
        // All non-null rows come first in DESC.
        final lastFour = walked.skip(walked.length - 4).toList();
        expect(lastFour.every((r) => r['qty'] == null), isTrue);
      });

      test('all-null pages do not loop and do not skip', () async {
        for (var i = 0; i < 9; i++) {
          await col.put(record(id: generateRecordId(), name: 'n$i', qty: null));
        }
        final walked =
            await walkAll(() => col.query().orderBy('qty'), limit: 3);
        expect(walked, hasLength(9));
        expect(idsOf(walked).toSet(), hasLength(9), reason: 'no duplicates');
        final expected = await col.query().orderBy('qty').all().fetch();
        expect(idsOf(walked), idsOf(expected.items));
      });

      test('multi-column walk with null in secondary key', () async {
        // `size` is nullable (name is required); every other row has a NULL
        // secondary key.
        for (var i = 0; i < 10; i++) {
          await col.put(record(
            id: generateRecordId(),
            name: 'n$i',
            qty: i % 3,
            size: i % 2 == 0 ? null : (['S', 'M', 'L'][i % 3]),
          ));
        }
        final walked = await walkAll(
            () => col.query().orderBy('qty').orderBy('size'),
            limit: 3);
        final expected =
            await col.query().orderBy('qty').orderBy('size').all().fetch();
        expect(idsOf(walked), idsOf(expected.items));

        final walkedDesc = await walkAll(
            () => col
                .query()
                .orderBy('qty', desc: true)
                .orderBy('size', desc: true),
            limit: 3);
        final expectedDesc = await col
            .query()
            .orderBy('qty', desc: true)
            .orderBy('size', desc: true)
            .all()
            .fetch();
        expect(idsOf(walkedDesc), idsOf(expectedDesc.items));
      });

      test('repeated values and id tiebreak under nulls', () async {
        // 20 rows, qty cycles 0..2 with every 4th row NULL.
        for (var i = 0; i < 20; i++) {
          await col.put(record(
            id: generateRecordId(),
            name: 'n$i',
            qty: i % 4 == 0 ? null : i % 3,
          ));
        }
        for (final desc in [false, true]) {
          final walked = await walkAll(
              () => col.query().orderBy('qty', desc: desc),
              limit: 5);
          final expected =
              await col.query().orderBy('qty', desc: desc).all().fetch();
          expect(idsOf(walked), idsOf(expected.items),
              reason: 'desc=$desc complete and ordered');
          expect(idsOf(walked).toSet(), hasLength(20), reason: 'no dups');
        }
      });
    });

    // -------------------------------------------------------------

    group('projection and extra-key contract', () {
      test('declared projections expose only requested keys', () async {
        await col
            .put(record(id: generateRecordId(), name: 'a', qty: 7, price: 1.5));
        final page = await col.query().select(['name']).limit(10).fetch();
        expect(page.items.single.keys.toSet(), {'name'});

        final idPage = await col.query().select(['id']).limit(10).fetch();
        expect(idPage.items.single.keys.toSet(), {'id'});

        final idArch =
            await col.query().select(['id', 'archived']).limit(10).fetch();
        expect(idArch.items.single.keys.toSet(), {'id', 'archived'});
      });

      test('order field not selected still drives cursor but stays hidden',
          () async {
        for (var i = 0; i < 8; i++) {
          await col.put(record(id: generateRecordId(), name: 'n$i', qty: i));
        }
        final walked = await walkAll(
            () => col.query().select(['name']).orderBy('qty'),
            limit: 3);
        expect(walked, hasLength(8));
        for (final r in walked) {
          expect(r.keys.toSet(), {'name'},
              reason: 'order column must not leak into items');
        }
        final expected =
            await col.query().select(['name']).orderBy('qty').all().fetch();
        expect([for (final r in walked) r['name']],
            [for (final r in expected.items) r['name']]);
      });

      test('projected null values keep their key', () async {
        await col.put(record(id: generateRecordId(), name: 'a', qty: null));
        final page =
            await col.query().select(['name', 'qty']).limit(10).fetch();
        expect(page.items.single, {'name': 'a', 'qty': null});
      });

      test('encrypted fields decrypt under projection', () async {
        final t = await tempDbPath();
        addTearDown(t.cleanup);
        final esc = CollectionSchema<Object?>(
          name: 'vault',
          version: 1,
          fields: [
            Field.text('label'),
            Field.text('secret', encrypted: true),
          ],
        );
        final cipher =
            AesGcmFieldCipher(List<int>.generate(32, (i) => (i * 3 + 7) % 256));
        final vp =
            await openPocket(path: t.path, stores: [esc], fieldCipher: cipher);
        addTearDown(vp.close);
        await vp
            .collection('vault')
            .put({'id': generateRecordId(), 'label': 'l', 'secret': 's3cr3t'});
        final page = await vp
            .collection('vault')
            .query()
            .select(['label', 'secret'])
            .limit(10)
            .fetch();
        expect(page.items.single, {'label': 'l', 'secret': 's3cr3t'});
      });

      test('undeclared extra keys fall back to full decode', () async {
        await col.put(
            record(id: generateRecordId(), name: 'with extra', qty: 1, extra: {
          'ghost': 'here',
          'nested': {'a': 1}
        }));
        await col.put(record(id: generateRecordId(), name: 'plain', qty: 2));

        // Compiles to SELECT * (full decode) so undeclared keys resolve.
        final (sql, _) =
            col.query().select(['ghost', 'name']).limit(10).debugCompile();
        expect(sql, contains('SELECT *'));

        final page =
            await col.query().select(['ghost', 'name']).limit(10).fetch();
        final byName = {for (final r in page.items) r['name']: r};
        expect(byName['with extra']!['ghost'], 'here');
        expect(byName['plain']!.containsKey('ghost'), isFalse,
            reason: 'absent extra keys are not synthesized');

        // Nested extras survive the full (fallback) decode — verified with a
        // non-projected query because items only expose requested keys.
        final full = await col.query().limit(10).fetch();
        final fullByName = {for (final r in full.items) r['name']: r};
        expect(fullByName['with extra']!['nested'], {'a': 1});
        expect(fullByName['with extra']!['ghost'], 'here');

        // Declared-only projection still compiles to a column list.
        final (sql2, _) =
            col.query().select(['name', 'qty']).limit(10).debugCompile();
        expect(sql2, isNot(contains('SELECT *')));
        expect(sql2, contains('"name", "qty"'));
      });

      test('empty select returns empty maps but paginates', () async {
        for (var i = 0; i < 5; i++) {
          await col.put(record(id: generateRecordId(), name: 'n$i', qty: i));
        }
        final page = await col.query().select(<String>[]).limit(3).fetch();
        expect(page.items, everyElement(isA<Map<String, Object?>>()));
        expect(page.items.every((r) => r.isEmpty), isTrue);
        expect(page.hasMore, isTrue);
        final page2 = await col
            .query()
            .select(<String>[])
            .limit(3)
            .keysetAfter(page.nextCursor!);
        expect(page2.items, hasLength(2));
        expect(page2.hasMore, isFalse);
      });
    });

    // -------------------------------------------------------------

    group('aggregates and distinct edge cases', () {
      test('empty table semantics', () async {
        final q = col.query();
        expect(await q.count(), 0);
        expect(await q.countDistinct('qty'), 0);
        expect(await q.sum('qty'), isNull);
        expect(await q.min('qty'), isNull);
        expect(await q.max('qty'), isNull);
        expect(await q.avg('qty'), isNull);
        expect(await q.distinct('qty'), isEmpty);
      });

      test('all-null field: nulls ignored, never coerced to zero', () async {
        for (var i = 0; i < 4; i++) {
          await col.put(record(id: generateRecordId(), name: 'n$i', qty: null));
        }
        final q = col.query();
        expect(await q.count(), 4);
        expect(await q.countDistinct('qty'), 0,
            reason: 'COUNT(DISTINCT) ignores NULLs');
        final d = await q.distinct('qty');
        expect(d, [null], reason: 'NULL is itself a distinct value');
        expect(await q.sum('qty'), isNull);
        expect(await q.min('qty'), isNull);
        expect(await q.max('qty'), isNull);
        expect(await q.avg('qty'), isNull);
      });

      test('nulls are skipped in mixed aggregates', () async {
        await col.put(record(id: generateRecordId(), name: 'a', qty: null));
        await col.put(record(id: generateRecordId(), name: 'b', qty: 5));
        await col.put(record(id: generateRecordId(), name: 'c', qty: 15));
        final q = col.query();
        expect(await q.sum('qty'), 20);
        expect(await q.avg('qty'), 10.0);
        expect(await q.min('qty'), 5);
        expect(await q.max('qty'), 15);
      });

      test('mixed int and real fields', () async {
        await col
            .put(record(id: generateRecordId(), name: 'a', qty: 1, price: 1.5));
        await col
            .put(record(id: generateRecordId(), name: 'b', qty: 2, price: 2.5));
        final q = col.query();
        expect(await q.sum('qty'), 3);
        expect(await q.avg('qty'), 1.5);
        expect(await q.sum('price'), 4.0);
        expect(await q.avg('price'), 2.0);
        expect(await q.min('price'), 1.5);
        expect(await q.max('price'), 2.5);
      });

      test('bool and date fields aggregate numerically', () async {
        await col.put(record(
            id: generateRecordId(), name: 'a', active: true, madeOn: 1000));
        await col.put(record(
            id: generateRecordId(), name: 'b', active: false, madeOn: 2000));
        await col.put(record(
            id: generateRecordId(), name: 'c', active: true, madeOn: 3000));
        final q = col.query();
        expect(await q.sum('active'), 2);
        expect(await q.avg('active'), closeTo(0.6666, 0.001));
        expect(await q.min('made_on'), 1000);
        expect(await q.max('made_on'), 3000);
      });

      test('nonnumeric and synthetic fields rejected for aggregates', () async {
        await col.put(record(id: generateRecordId(), name: 'a', qty: 1));
        for (final field in [
          'name',
          'meta',
          'tags',
          'size',
          'owner_id',
          'id',
          'archived'
        ]) {
          await expectLater(
            col.query().sum(field),
            throwsA(isA<ValidationException>()
                .having((e) => e.field, 'field', field)),
            reason: 'sum($field) rejected',
          );
          await expectLater(
              col.query().min(field), throwsA(isA<ValidationException>()));
          await expectLater(
              col.query().max(field), throwsA(isA<ValidationException>()));
          await expectLater(
              col.query().avg(field), throwsA(isA<ValidationException>()));
        }
        // …but distinct/countDistinct remain valid on text.
        expect(await col.query().countDistinct('name'), 1);
        expect(await col.query().distinct('name'), ['a']);
      });

      test('distinct never returns duplicates and honours order/limit',
          () async {
        await col.put(record(id: generateRecordId(), name: 'b', qty: 1));
        await col.put(record(id: generateRecordId(), name: 'a', qty: 2));
        await col.put(record(id: generateRecordId(), name: 'b', qty: 3));
        await col.put(record(id: generateRecordId(), name: 'c', qty: 4));
        await col.put(record(id: generateRecordId(), name: 'a', qty: 5));

        // Ordering by the distinct field is honoured; no duplicates.
        final ordered = await col.query().orderBy('name').distinct('name');
        expect(ordered, ['a', 'b', 'c']);

        final orderedDesc =
            await col.query().orderBy('name', desc: true).distinct('name');
        expect(orderedDesc, ['c', 'b', 'a']);

        // Ordering by a different column is dropped (meaningless for DISTINCT).
        final otherOrder = await col.query().orderBy('qty').distinct('name');
        expect(otherOrder.toSet(), {'a', 'b', 'c'});
        expect(otherOrder, hasLength(3), reason: 'still distinct');

        // Limit caps the number of distinct values.
        final limited = await col.query().limit(2).distinct('name');
        expect(limited, hasLength(2));
        expect(limited.toSet().length, 2);

        // Default cap when no limit given.
        for (var i = 0; i < 1050; i++) {
          await col.put(record(id: generateRecordId(), name: 'x$i', qty: i));
        }
        final capped = await col.query().distinct('name');
        expect(capped, hasLength(1000));
      });

      test('aggregates respect filters and scope', () async {
        final normal = generateRecordId();
        final archived = generateRecordId();
        await col.put(record(id: normal, name: 'n', qty: 10));
        await col.put(record(id: archived, name: 'a', qty: 20));
        // Set the flag directly (archive() would vanish the unsynced row).
        await pocket.db.execute(
            'UPDATE widgets SET archived = 1 WHERE id = ?', [archived]);

        // Default scope excludes archived.
        expect(await col.query().sum('qty'), 10);
        expect(await col.query().includeArchived().sum('qty'), 30);
        expect(await col.query().count(), 1);
        expect(await col.query().includeArchived().count(), 2);

        // Filters narrow aggregates.
        expect(
            await col
                .query()
                .includeArchived()
                .where('qty', gte: 15)
                .sum('qty'),
            20);
        expect(
            await col
                .query()
                .includeArchived()
                .where('qty', gte: 15)
                .countDistinct('name'),
            1);
        expect(
            await col
                .query()
                .includeArchived()
                .where('qty', gte: 15)
                .distinct('name'),
            ['a']);
      });
    });
  });
}
