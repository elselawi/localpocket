/// Typed pagination: `query(after:)`, `TypedPage.next()`, `TypedPage.prev()`,
/// and the `hasNext`/`hasPrev` snapshot flags.
///
/// Coverage layout:
/// 1. `next()`/`prev()` reuse the captured shape — no slots re-stated, so a
///    shape mismatch cannot happen by construction,
/// 2. flag exactness across the page walk (first / middle / last / backward),
/// 3. terminal semantics: null returns, empty terminal pages, cursors null,
/// 4. projections and boolean trees through both directions,
/// 5. `query(after:)` resume + loud shape validation for persisted cursors,
/// 6. corruption rejection and watch having no pagination surface.
library;

import 'dart:convert';

import 'package:localpocket/src/internal/raw_surface.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import 'support/tasks.dart';

late LocalPocket db;

TypedCollection<Tasks> get tasks => db.store(Tasks.store);

/// Ten rows with a nullable, non-monotonic `count` column so both the NULL
/// group and the id tiebreak participate in every walk. Titles sort in a
/// known order ('t00'..'t09').
Future<void> seedPages() async {
  await tasks.putAll([
    for (var i = 0; i < 10; i++)
      [
        Writes.id(rid('pg', i)),
        Tasks.title.set('t${i.toString().padLeft(2, '0')}'),
        Tasks.done.set(i.isOdd),
        Tasks.count.set(i % 3 == 0 ? null : i % 4),
      ],
  ]);
}

List<String> idsOf(TypedPage<Tasks> page) => [for (final r in page.items) r.id];

String? _titleOf(TypedPage<Tasks> page) =>
    page.items.isEmpty ? null : page.items.first(Tasks.title);

void main() {
  setUp(() async {
    db = await LocalPocket.open(
      path: ':memory:',
      stores: <CollectionSchema<Object?>>[Tasks.store.collectionSchema],
    );
    await seedPages();
  });
  tearDown(() => db.close());

  group('next() and prev() reuse the captured shape', () {
    test('a full walk with next() reconstructs the ordered set', () async {
      final expected =
          (await tasks.query(orderBy: [Tasks.title.asc], limit: 100))
              .items
              .map((r) => r.id)
              .toList();

      final collected = <String>[];
      var page = await tasks.query(orderBy: [Tasks.title.asc], limit: 3);
      while (true) {
        collected.addAll(idsOf(page));
        if (!page.hasNext) break;
        page = (await page.next())!;
      }
      expect(collected, expected);
      expect(collected.toSet(), hasLength(collected.length),
          reason: 'no duplicates');
    });

    test('boolean trees and scopes ride along without restatement', () async {
      final condition =
          Tasks.done.eq(true) | (Tasks.count.gte(1) & ~Tasks.done.eq(true));
      final expected = (await tasks.query(
        where: [condition],
        orderBy: [Tasks.title.desc],
        limit: 100,
      ))
          .items
          .map((r) => r.id)
          .toList();

      final collected = <String>[];
      var page = await tasks.query(
        where: [condition],
        orderBy: [Tasks.title.desc],
        limit: 2,
      );
      while (true) {
        collected.addAll(idsOf(page));
        if (!page.hasNext) break;
        page = (await page.next())!;
      }
      expect(collected, expected);
    });

    test('next() then prev() returns to the previous page', () async {
      final first = await tasks.query(orderBy: [Tasks.title.asc], limit: 3);
      final second = (await first.next())!;
      expect(idsOf(second), isNot(idsOf(first)));

      final back = (await second.prev())!;
      expect(idsOf(back), idsOf(first));
    });

    test('projections survive the whole chain', () async {
      var page = await tasks.query(
        select: [Tasks.title],
        orderBy: [Tasks.title.asc],
        limit: 4,
      );
      var seen = 0;
      while (true) {
        for (final row in page.items) {
          expect(row(Tasks.title), isNotEmpty);
          expect(() => row(Tasks.count), throwsA(isA<ValidationException>()),
              reason: 'unselected fields stay unreadable on every page');
          seen++;
        }
        if (!page.hasNext) break;
        page = (await page.next())!;
      }
      expect(seen, 10);
    });

    test('limit is frozen per captured chain', () async {
      final first = await tasks.query(orderBy: [Tasks.title.asc], limit: 6);
      final second = (await first.next())!;
      expect(second.items, hasLength(4),
          reason: 'the continuation keeps the captured limit');
    });
  });

  group('hasNext and hasPrev exactness', () {
    test('first page: hasNext true, hasPrev false, prevCursor null', () async {
      final first = await tasks.query(orderBy: [Tasks.title.asc], limit: 3);
      expect(first.hasNext, isTrue);
      expect(first.hasPrev, isFalse);
      expect(first.nextCursor, isNotNull);
      expect(first.prevCursor, isNull);
      expect(await first.prev(), isNull,
          reason: 'prev() on the first page is null, not an error');
    });

    test('middle pages carry both directions', () async {
      final first = await tasks.query(orderBy: [Tasks.title.asc], limit: 3);
      final second = (await first.next())!;
      expect(second.hasNext, isTrue);
      expect(second.hasPrev, isTrue);
      expect(second.nextCursor, isNotNull);
      expect(second.prevCursor, isNotNull);
    });

    test('last page: hasNext false, nextCursor null, next() null', () async {
      var page = await tasks.query(orderBy: [Tasks.title.asc], limit: 3);
      while (page.hasNext) {
        page = (await page.next())!;
      }
      expect(page.items, hasLength(1), reason: '10 rows at limit 3 → 4 pages');
      expect(page.hasNext, isFalse);
      expect(page.nextCursor, isNull);
      expect(await page.next(), isNull);
      expect(page.hasPrev, isTrue);
      expect(await page.prev(), isNotNull);
    });

    test('backward pages report hasPrev exactly and hasNext by probe',
        () async {
      final first = await tasks.query(orderBy: [Tasks.title.asc], limit: 3);
      final second = (await first.next())!;
      final beforeSecond = (await second.prev())!;

      expect(beforeSecond.hasPrev, isFalse,
          reason: 'exact: nothing exists before the first window');
      expect(beforeSecond.prevCursor, isNull);
      expect(beforeSecond.hasNext, isTrue,
          reason: 'the probe observed rows after the window');
      expect(idsOf(beforeSecond), idsOf(first));
    });

    test('next() and prev() both null without a loader (plain holder)', () {
      final holder = TypedPage<Tasks>.internal(
        items: const [],
        hasNext: true,
        hasPrev: true,
        nextCursor: 'cursor',
        prevCursor: 'cursor',
      );
      expect(holder.next(), completion(isNull));
      expect(holder.prev(), completion(isNull));
    });
  });

  group('terminal and degenerate pages', () {
    test('a vanished tail returns a terminal empty page, not an error',
        () async {
      final first = await tasks.query(orderBy: [Tasks.title.asc], limit: 3);
      // Delete every row after the first window.
      for (var i = 3; i < 10; i++) {
        await tasks.purge(rid('pg', i));
      }
      final next = (await first.next())!;
      expect(next.items, isEmpty);
      expect(next.hasNext, isFalse);
      expect(next.hasPrev, isFalse);
      expect(next.nextCursor, isNull);
      expect(next.prevCursor, isNull);
      expect(await next.next(), isNull);
      expect(await next.prev(), isNull);
    });

    test('empty result set is a terminal page in both directions', () async {
      final page = await tasks.query(
        where: [Tasks.title.eq('missing')],
        orderBy: [Tasks.title.asc],
        limit: 5,
      );
      expect(page.items, isEmpty);
      expect(page.hasNext, isFalse);
      expect(page.hasPrev, isFalse);
      expect(await page.next(), isNull);
      expect(await page.prev(), isNull);
    });

    test('unbounded reads carry no continuation', () async {
      final page = await tasks.query(
        orderBy: [Tasks.title.asc],
        limit: Limits.unbounded,
      );
      expect(page.items, hasLength(10));
      expect(page.hasNext, isFalse);
      expect(page.nextCursor, isNull);
      expect(await page.next(), isNull);
    });
  });

  group('query(after:) resumes persisted cursors', () {
    test('after: continues under the re-stated shape', () async {
      final first = await tasks.query(orderBy: [Tasks.title.asc], limit: 4);
      final resumed = await tasks.query(
        orderBy: [Tasks.title.asc],
        limit: 4,
        after: first.nextCursor,
      );
      expect(idsOf(resumed), [
        rid('pg', 4),
        rid('pg', 5),
        rid('pg', 6),
        rid('pg', 7),
      ]);
      expect(resumed.hasPrev, isTrue,
          reason: 'a consumed cursor proves rows existed before the window');
      expect(resumed.prevCursor, isNotNull);
      // The resumed page chains in both directions.
      expect(idsOf((await resumed.prev())!), idsOf(first));
      expect(idsOf((await resumed.next())!), [
        rid('pg', 8),
        rid('pg', 9),
      ]);
    });

    test('a persisted first-page cursor resumes from the top', () async {
      final first = await tasks.query(orderBy: [Tasks.title.asc], limit: 4);
      await db.close();
      db = await LocalPocket.open(
        path: ':memory:',
        stores: <CollectionSchema<Object?>>[Tasks.store.collectionSchema],
      );
      await seedPages();
      // A cursor minted by a DIFFERENT database cannot validate (row
      // position is arbitrary but the store identity is), yet the shape
      // check is what matters here: same shape → runs, just from the
      // minted position.
      final resumed = await tasks.query(
        orderBy: [Tasks.title.asc],
        limit: 4,
        after: first.nextCursor,
      );
      expect(_titleOf(resumed), 't04');
    });

    test('a differently-shaped re-statement is rejected loudly', () async {
      final first = await tasks.query(
        where: [Tasks.done.eq(false)],
        orderBy: [Tasks.title.asc],
        limit: 3,
      );
      await expectLater(
        tasks.query(
          where: [Tasks.done.eq(true)],
          orderBy: [Tasks.title.asc],
          limit: 3,
          after: first.nextCursor,
        ),
        throwsA(isA<StaleCursorError>()),
      );
      await expectLater(
        tasks.query(
          orderBy: [Tasks.count.asc],
          limit: 3,
          after: first.nextCursor,
        ),
        throwsA(isA<StaleCursorError>()),
      );
    });
  });

  group('cursor integrity', () {
    test('a structurally broken cursor is rejected by after:', () async {
      final first = await tasks.query(orderBy: [Tasks.title.asc], limit: 3);
      final payload =
          (jsonDecode(utf8.decode(base64Url.decode(first.nextCursor!))) as Map)
              .cast<String, Object?>();
      // Non-scalar position values can only come from a forged cursor.
      final forged = base64Url.encode(utf8.encode(jsonEncode({
        ...payload,
        'values': [
          {'nested': true},
          3,
        ],
      })));
      await expectLater(
        tasks.query(
          orderBy: [Tasks.title.asc],
          limit: 3,
          after: forged,
        ),
        throwsA(isA<StaleCursorError>()),
      );
    });
  });

  group('watchable queries have no pagination surface', () {
    test('watch returns a row stream, not pages', () async {
      final emissions = <List<TypedRow<Tasks>>>[];
      final sub = tasks
          .watch(orderBy: [Tasks.title.asc], limit: 5).listen(emissions.add);
      addTearDown(sub.cancel);
      await Future<void>.delayed(const Duration(milliseconds: 25));
      expect(emissions, isNotEmpty);
      expect(emissions.first, hasLength(5),
          reason: 'the watch limit bounds the snapshot, no cursor exists');
      expect(emissions.first.first(Tasks.title), isA<String>());
    });
  });

  group('terminal contract: next() and prev() never throw', () {
    test('next() at the end of a fresh query returns null', () async {
      var page = await tasks.query(orderBy: [Tasks.title.asc], limit: 3);
      while (page.hasNext) {
        page = (await page.next())!;
      }
      expect(page.hasNext, isFalse);
      expect(await page.next(), isNull);
    });

    test('prev() on the first page returns null', () async {
      final page = await tasks.query(orderBy: [Tasks.title.asc], limit: 3);
      expect(page.hasPrev, isFalse);
      expect(await page.prev(), isNull);
    });

    test('a full forward walk then backward walk is null-terminated', () async {
      var page = await tasks.query(orderBy: [Tasks.title.asc], limit: 2);
      // Forward to the end.
      var steps = 0;
      while (page.hasNext) {
        page = (await page.next())!;
        steps++;
      }
      expect(steps, 4, reason: '10 rows at limit 2 → 5 pages');
      // Backward to the start.
      var backSteps = 0;
      while (page.hasPrev) {
        page = (await page.prev())!;
        backSteps++;
      }
      expect(backSteps, 4);
      expect(idsOf(page), [
        rid('pg', 0),
        rid('pg', 1),
      ]);
      expect(await page.prev(), isNull);
    });

    test('an empty result set: both terminals return null, nothing throws',
        () async {
      final page = await tasks.query(
        where: [Tasks.count.eq(999)],
        orderBy: [Tasks.title.asc],
        limit: 3,
      );
      expect(await page.next(), isNull);
      expect(await page.prev(), isNull);
    });
  });

  group('boundary limits', () {
    test('limit equal to the row count is a single terminal page', () async {
      final page = await tasks.query(orderBy: [Tasks.title.asc], limit: 10);
      expect(page.items, hasLength(10));
      expect(page.hasNext, isFalse, reason: 'limit+1 fetch observed no extra');
      expect(page.nextCursor, isNull);
      expect(page.hasPrev, isFalse);
      expect(await page.next(), isNull);
    });

    test('limit one below the row count yields a one-row second page',
        () async {
      final first = await tasks.query(orderBy: [Tasks.title.asc], limit: 9);
      expect(first.hasNext, isTrue);
      final last = (await first.next())!;
      expect(last.items, hasLength(1));
      expect(last.items.single.id, rid('pg', 9));
      expect(last.hasNext, isFalse);
      expect(last.hasPrev, isTrue);
    });

    test('a limit-1 chain reconstructs the full order', () async {
      final expected =
          (await tasks.query(orderBy: [Tasks.title.asc], limit: 100))
              .items
              .map((r) => r.id)
              .toList();
      final collected = <String>[];
      var page = await tasks.query(orderBy: [Tasks.title.asc], limit: 1);
      while (true) {
        collected.addAll(idsOf(page));
        if (!page.hasNext) break;
        page = (await page.next())!;
      }
      expect(collected, expected);
    });

    test('an empty store paginates to a single terminal page', () async {
      for (var i = 0; i < 10; i++) {
        await tasks.purge(rid('pg', i));
      }
      final page = await tasks.query(orderBy: [Tasks.title.asc], limit: 3);
      expect(page.items, isEmpty);
      expect(page.hasNext, isFalse);
      expect(page.hasPrev, isFalse);
      expect(await page.next(), isNull);
      expect(await page.prev(), isNull);
    });
  });

  group('snapshot semantics under concurrent mutations', () {
    test(
        'hasNext=false is terminal even when matching rows arrive later — '
        're-query to see them', () async {
      var page = await tasks.query(orderBy: [Tasks.title.asc], limit: 3);
      while (page.hasNext) {
        page = (await page.next())!;
      }
      // A new row lands beyond the old end of the listing.
      await tasks.put([
        Writes.id(rid('pg', 99)),
        Tasks.title.set('t99'),
        Tasks.count.set(1),
      ]);
      expect(await page.next(), isNull,
          reason: 'the page is a snapshot: its cursor was never minted');
      // A fresh query observes the new row.
      final fresh = await tasks.query(orderBy: [Tasks.title.asc], limit: 3);
      final walked = <String>[...idsOf(fresh)];
      var p = fresh;
      while (p.hasNext) {
        p = (await p.next())!;
        walked.addAll(idsOf(p));
      }
      expect(walked, contains(rid('pg', 99)));
    });

    test('partially deleted tail yields a short page, then terminal', () async {
      final first = await tasks.query(orderBy: [Tasks.title.asc], limit: 3);
      // Six of the seven tail rows vanish: one row remains after t02.
      for (var i = 3; i < 9; i++) {
        await tasks.purge(rid('pg', i));
      }
      final second = (await first.next())!;
      expect(second.items.map((r) => r.id), [rid('pg', 9)],
          reason: 'short page: fewer than limit rows');
      expect(second.hasNext, isFalse);
      expect(second.items, isNotEmpty,
          reason: 'a short page is not a terminal empty page');
    });

    test('a fully vanished tail yields a terminal empty page', () async {
      final first = await tasks.query(orderBy: [Tasks.title.asc], limit: 3);
      for (var i = 3; i < 10; i++) {
        await tasks.purge(rid('pg', i));
      }
      final second = (await first.next())!;
      expect(second.items, isEmpty);
      expect(second.hasNext, isFalse);
      expect(second.hasPrev, isFalse);
      expect(second.nextCursor, isNull);
      expect(second.prevCursor, isNull);
    });

    test('the cursor anchor row can be deleted — the walk is value-positioned',
        () async {
      final first = await tasks.query(orderBy: [Tasks.title.asc], limit: 3);
      // t02 is the anchor tuple of first.nextCursor.
      await tasks.purge(rid('pg', 2));
      final second = (await first.next())!;
      expect(
          second.items.map((r) => r.id),
          [
            rid('pg', 3),
            rid('pg', 4),
            rid('pg', 5),
          ],
          reason: 'keyset continues from the POSITION, not the anchor row');
    });

    test(
        'rows inserted behind the cursor are invisible to next(); rows '
        'moved after it are re-delivered; rows moved before it are skipped',
        () async {
      final first = await tasks.query(orderBy: [Tasks.title.asc], limit: 3);
      // t04 moves after the cursor position (t02): it will appear in page 2.
      await tasks.patch(rid('pg', 4), [Tasks.title.set('t95')]);
      // t01 moves before the cursor position: page 2 skips it (it sorts
      // before t02, outside the keyset window).
      await tasks.patch(rid('pg', 1), [Tasks.title.set('a01')]);
      // A brand-new row beyond the cursor joins page 2.
      await tasks.put([
        Writes.id(rid('pg', 50)),
        Tasks.title.set('t50'),
      ]);

      final second = (await first.next())!;
      expect(
          second.items.map((r) => r.id),
          [
            rid('pg', 3),
            rid('pg', 5),
            rid('pg', 6),
          ],
          reason: 'keyset pagination is position-based over CURRENT data: '
              't50 sorts after t09 (zero-padded titles), t95 after that');
      // Remaining tail: t07, t08, t09, t50, t95.
      final third = (await second.next())!;
      expect(third.items.map((r) => r.id), [
        rid('pg', 7),
        rid('pg', 8),
        rid('pg', 9),
      ]);
      final fourth = (await third.next())!;
      expect(fourth.items.map((r) => r.id), [rid('pg', 50), rid('pg', 4)]);
      expect(fourth.hasNext, isFalse);
    });

    test('backward pages re-read current data and report the far side',
        () async {
      final first = await tasks.query(orderBy: [Tasks.title.asc], limit: 3);
      final second = (await first.next())!;
      await tasks.put([
        Writes.id(rid('pg', 80)),
        Tasks.title.set('a80'),
      ]);
      final back = (await second.prev())!;
      // The backward window is capped at the captured limit: a80 is the
      // overflow row beyond it — it proves rows exist before, but does not
      // join the window.
      expect(idsOf(back), idsOf(first));
      expect(back.hasPrev, isTrue,
          reason: 'the flipped walk overflowed: a row exists before a80');
      // Walking back one more page reaches it.
      final further = (await back.prev())!;
      expect(further.items.single.id, rid('pg', 80));
    });

    test(
        'hasPrev=true is a mint-time fact: a fully deleted past yields a '
        'terminal empty page, not an error', () async {
      final first = await tasks.query(orderBy: [Tasks.title.asc], limit: 3);
      final second = (await first.next())!;
      for (var i = 0; i < 3; i++) {
        await tasks.purge(rid('pg', i));
      }
      final back = (await second.prev())!;
      expect(back.items, isEmpty);
      expect(back.hasPrev, isFalse);
      expect(back.hasNext, isFalse);
      expect(await back.prev(), isNull);
      expect(await back.next(), isNull);
    });

    test('deleting rows after the backward window flips hasNext via the probe',
        () async {
      final first = await tasks.query(orderBy: [Tasks.title.asc], limit: 3);
      final second = (await first.next())!;
      // EVERYTHING after the backward window is gone: the probe finds
      // nothing, so hasNext is false even though hasPrev is true.
      for (var i = 3; i < 10; i++) {
        await tasks.purge(rid('pg', i));
      }
      final back = (await second.prev())!;
      expect(idsOf(back), idsOf(first));
      expect(back.hasNext, isFalse,
          reason: 'the one-row forward probe observed no row');
      expect(back.nextCursor, isNull);
    });
  });

  group('ordering directions and NULL groups through the typed chain', () {
    test('DESC-only order walks correctly through next()', () async {
      final expected =
          (await tasks.query(orderBy: [Tasks.title.desc], limit: 100))
              .items
              .map((r) => r.id)
              .toList();
      final collected = <String>[];
      var page = await tasks.query(orderBy: [Tasks.title.desc], limit: 4);
      while (true) {
        collected.addAll(idsOf(page));
        if (!page.hasNext) break;
        page = (await page.next())!;
      }
      expect(collected, expected);
    });

    test('mixed ASC/DESC order walks correctly through next()', () async {
      final expected = (await tasks.query(
        orderBy: [Tasks.count.asc, Tasks.title.desc],
        limit: 100,
      ))
          .items
          .map((r) => r.id)
          .toList();
      final collected = <String>[];
      var page = await tasks.query(
        orderBy: [Tasks.count.asc, Tasks.title.desc],
        limit: 3,
      );
      while (true) {
        collected.addAll(idsOf(page));
        if (!page.hasNext) break;
        page = (await page.next())!;
      }
      expect(collected, expected);
    });

    test('NULL sort values walk through next() without dropping rows',
        () async {
      // Rows 0, 3, 6, 9 have NULL counts — the NULL group must survive the
      // walk (regression guard for the uniform-DESC fast-path bug).
      for (final desc in [false, true]) {
        final order = [Tasks.count.asc, Tasks.title.asc];
        final expected = (await tasks.query(
          orderBy: desc ? [Tasks.count.desc, Tasks.title.desc] : order,
          limit: 100,
        ))
            .items
            .map((r) => r.id)
            .toList();
        expect(expected.where((id) => id.endsWith('0') || id.endsWith('3')),
            isNotEmpty,
            reason: 'the fixture has NULL-count rows');
        final collected = <String>[];
        var page = await tasks.query(
          orderBy: desc ? [Tasks.count.desc, Tasks.title.desc] : order,
          limit: 2,
        );
        while (true) {
          collected.addAll(idsOf(page));
          if (!page.hasNext) break;
          page = (await page.next())!;
        }
        expect(collected, expected, reason: 'desc=$desc complete and ordered');
        expect(collected.toSet(), hasLength(10));
      }
    });

    test('ties break by the implicit id tiebreak on every page', () async {
      // Rows 0..9 all share count=2 → the id tiebreak fully orders pages.
      for (var i = 0; i < 10; i++) {
        await tasks.patch(rid('pg', i), [Tasks.count.set(2)]);
      }
      final expected =
          (await tasks.query(orderBy: [Tasks.count.asc], limit: 100))
              .items
              .map((r) => r.id)
              .toList();
      expect(expected.toSet(), hasLength(10));
      final collected = <String>[];
      var page = await tasks.query(orderBy: [Tasks.count.asc], limit: 3);
      while (true) {
        collected.addAll(idsOf(page));
        if (!page.hasNext) break;
        page = (await page.next())!;
      }
      expect(collected, expected);
      expect(collected.toSet(), hasLength(collected.length),
          reason: 'no duplicates across tie pages');
    });

    test('backward walk over NULL-first groups reconstructs the order',
        () async {
      final first = await tasks.query(orderBy: [Tasks.count.asc], limit: 4);
      final second = (await first.next())!;
      final back = (await second.prev())!;
      expect(idsOf(back), idsOf(first));
    });
  });

  group('query(after:) edge positions', () {
    test('after: null is identical to a fresh first page', () async {
      final withNull = await tasks.query(
        orderBy: [Tasks.title.asc],
        limit: 3,
        after: null,
      );
      final plain = await tasks.query(orderBy: [Tasks.title.asc], limit: 3);
      expect(idsOf(withNull), idsOf(plain));
      expect(withNull.hasPrev, isFalse);
      expect(withNull.prevCursor, isNull);
    });

    test('a cursor at the exact last position yields a terminal empty page',
        () async {
      final all = await tasks.query(orderBy: [Tasks.title.asc], limit: 100);
      // Cursor minted from the LAST row: nothing follows it.
      final builder = db.collection('tasks').query().orderBy('title');
      final lastRow = {
        'title': all.items.last(Tasks.title),
        'id': all.items.last.id,
      };
      final cursor = builder.limit(3).cursorForCompiledRow(lastRow, lastRow);
      final page = await tasks.query(
        orderBy: [Tasks.title.asc],
        limit: 3,
        after: cursor,
      );
      expect(page.items, isEmpty);
      expect(page.hasNext, isFalse);
      expect(page.hasPrev, isFalse);
      expect(await page.next(), isNull);
      expect(await page.prev(), isNull);
    });

    test('a forged schema version is rejected', () async {
      final first = await tasks.query(orderBy: [Tasks.title.asc], limit: 3);
      final payload =
          (jsonDecode(utf8.decode(base64Url.decode(first.nextCursor!))) as Map)
              .cast<String, Object?>();
      final bumped = base64Url
          .encode(utf8.encode(jsonEncode({...payload, 'schemaVer': 99})));
      await expectLater(
        tasks.query(
          orderBy: [Tasks.title.asc],
          limit: 3,
          after: bumped,
        ),
        throwsA(isA<StaleCursorError>()),
      );
    });

    test('a forged store name is rejected', () async {
      final first = await tasks.query(orderBy: [Tasks.title.asc], limit: 3);
      final payload =
          (jsonDecode(utf8.decode(base64Url.decode(first.nextCursor!))) as Map)
              .cast<String, Object?>();
      final foreign = base64Url.encode(
          utf8.encode(jsonEncode({...payload, 'store': 'other_store'})));
      await expectLater(
        tasks.query(
          orderBy: [Tasks.title.asc],
          limit: 3,
          after: foreign,
        ),
        throwsA(isA<StaleCursorError>()),
      );
    });

    test('after: with Limits.unbounded streams everything after the cursor',
        () async {
      final first = await tasks.query(orderBy: [Tasks.title.asc], limit: 3);
      final rest = await tasks.query(
        orderBy: [Tasks.title.asc],
        limit: Limits.unbounded,
        after: first.nextCursor,
      );
      expect(rest.items, hasLength(7));
      expect(rest.items.first.id, rid('pg', 3));
      expect(rest.hasNext, isFalse);
      expect(rest.hasPrev, isTrue);
      // The unbounded page still chains backward.
      expect(idsOf((await rest.prev())!), idsOf(first));
    });

    test('an after: page chains forward with the re-stated limit', () async {
      final first = await tasks.query(orderBy: [Tasks.title.asc], limit: 3);
      final resumed = await tasks.query(
        orderBy: [Tasks.title.asc],
        limit: 2,
        after: first.nextCursor,
      );
      expect(resumed.items.map((r) => r.id), [rid('pg', 3), rid('pg', 4)]);
      final third = (await resumed.next())!;
      expect(third.items.map((r) => r.id), [rid('pg', 5), rid('pg', 6)],
          reason: 'the resumed chain keeps the RESUMED limit, not the first');
    });
  });

  group('cursor flag invariants across a full walk', () {
    test('nextCursor/hasNext and prevCursor/hasPrev agree on every page',
        () async {
      var page = await tasks.query(orderBy: [Tasks.title.asc], limit: 3);
      var visited = 0;
      while (true) {
        expect(page.hasNext, page.nextCursor != null,
            reason: 'hasNext ⇔ nextCursor on page $visited');
        if (visited > 0) {
          expect(page.hasPrev, isTrue,
              reason: 'page $visited consumed a cursor');
          expect(page.prevCursor, isNotNull);
          // One bidirectional payload serves both directions.
          if (page.nextCursor != null && page.prevCursor != null) {
            expect(page.nextCursor, page.prevCursor,
                reason: 'both cursors carry the same boundary tuples');
          }
        }
        visited++;
        if (!page.hasNext) break;
        page = (await page.next())!;
      }
      expect(visited, 4);
      // Walking back, the invariant holds in the other direction too.
      var backVisited = 0;
      while (page.hasPrev) {
        // A backward page's hasNext may legitimately be false (the forward
        // probe found nothing) — only hasPrev/prevCursor must agree here.
        expect(page.hasPrev, page.prevCursor != null);
        page = (await page.prev())!;
        backVisited++;
      }
      expect(backVisited, 3);
      expect(page.hasPrev, isFalse);
      expect(page.prevCursor, isNull);
    });

    test('scopes ride the captured shape: hidden rows paginate consistently',
        () async {
      final hidden = rid('pg', 4);
      await db.db.execute('UPDATE tasks SET hidden = 1 WHERE id = ?', [hidden]);
      final visible =
          (await tasks.query(orderBy: [Tasks.title.asc], limit: 100))
              .items
              .map((r) => r.id)
              .toList();
      expect(visible, isNot(contains(hidden)));

      final collected = <String>[];
      var page = await tasks.query(
        orderBy: [Tasks.title.asc],
        limit: 3,
        includeHidden: true,
      );
      while (true) {
        collected.addAll(idsOf(page));
        if (!page.hasNext) break;
        page = (await page.next())!;
      }
      expect(collected, hasLength(10), reason: 'includeHidden sees all rows');
      expect(collected, contains(hidden));
      expect(collected.toSet(), hasLength(10));
    });
  });
}
