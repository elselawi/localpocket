import 'dart:convert';

import 'package:localpocket/src/core/query/query_builder/query_builder.dart';
import 'package:localpocket/src/web/conversions.dart';
import 'package:localpocket/src/web/facade/query/page_from_compiled.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';

/// Decodes a keyset cursor payload for inspection.
Map<String, Object?> decodeCursor(String cursor) =>
    (jsonDecode(utf8.decode(base64Url.decode(cursor))) as Map)
        .map((k, v) => MapEntry(k.toString(), v));

void main() {
  final schema = widgetsSchema();

  test('items are wire-decoded, including nested maps and typed values', () {
    final core = QueryBuilder.compileOnly(schema).limit(5);
    final page = pageFromCompiled(core, {
      'items': [
        encodeWireValue({
          'id': 'a',
          'name': 'apple',
          'made_on': DateTime.utc(2026, 1, 2, 3, 4, 5),
          'meta': {
            'nested': 1,
            'deep': {'x': true}
          },
        }),
      ],
      'hasNext': false,
    });
    expect(page.items, hasLength(1));
    final item = page.items.single;
    expect(item['id'], 'a');
    expect(item['made_on'], DateTime.utc(2026, 1, 2, 3, 4, 5));
    expect(item['meta'], {
      'nested': 1,
      'deep': {'x': true}
    });
  });

  test('hasNext is read from the response', () {
    final core = QueryBuilder.compileOnly(schema).limit(5);
    final page = pageFromCompiled(core, {
      'items': <Object?>[],
      'hasNext': true,
    });
    expect(page.hasNext, isTrue);
  });

  test('nextCursor is null when hasNext is false even if lastRow is present',
      () {
    final core = QueryBuilder.compileOnly(schema).orderBy('name').limit(5);
    final page = pageFromCompiled(core, {
      'items': <Object?>[],
      'hasNext': false,
      'lastRow': encodeWireValue({'name': 'apple', 'id': 'a'}),
    });
    expect(page.hasNext, isFalse);
    expect(page.nextCursor, isNull);
  });

  test(
      'nextCursor comes from the boundary rows wire-decoded through '
      'cursorForCompiledRow when hasNext is true', () {
    final core = QueryBuilder.compileOnly(schema).orderBy('name').limit(5);
    final page = pageFromCompiled(core, {
      'items': <Object?>[],
      'hasNext': true,
      'lastRow': encodeWireValue({
        'name': 'apple',
        'id': 'a',
        'made_on': DateTime.utc(2026, 1, 1),
      }),
      'firstRow': encodeWireValue({'name': 'apricot', 'id': 'b'}),
    });
    expect(page.hasNext, isTrue);
    expect(page.nextCursor, isNotNull);
    expect(page.hasPrev, isFalse, reason: 'no cursor was consumed');
    expect(page.prevCursor, isNull);

    final cursor = decodeCursor(page.nextCursor!);
    expect(cursor['store'], 'widgets');
    expect(cursor['schemaVer'], 1);
    expect(cursor['sort'], ['name:a', 'id:a']);
    expect(cursor['values'], ['apple', 'a']);
    expect(cursor['pv'], ['apricot', 'b'],
        reason: 'the payload carries both boundary tuples');
  });

  test('a consumed cursor mints prevCursor and sets hasPrev', () {
    final core = QueryBuilder.compileOnly(schema).orderBy('name').limit(5);
    final page = pageFromCompiled(
      core,
      {
        'items': [
          encodeWireValue({'id': 'b', 'name': 'apricot'}),
        ],
        'hasNext': true,
        'lastRow': encodeWireValue({'name': 'apple', 'id': 'a'}),
        'firstRow': encodeWireValue({'name': 'apricot', 'id': 'b'}),
      },
      consumedCursor: true,
    );
    expect(page.hasPrev, isTrue);
    expect(page.prevCursor, isNotNull);
    final prev = decodeCursor(page.prevCursor!);
    expect(prev['values'], ['apple', 'a']);
    expect(prev['pv'], ['apricot', 'b']);
    // One bidirectional payload serves both directions.
    expect(page.prevCursor, page.nextCursor);
  });

  test('hasPrev is false when a consumed cursor returned no rows', () {
    final core = QueryBuilder.compileOnly(schema).limit(5);
    final page = pageFromCompiled(
      core,
      {
        'items': <Object?>[],
        'hasNext': false,
        'lastRow': null,
        'firstRow': null,
      },
      consumedCursor: true,
    );
    expect(page.hasPrev, isFalse);
    expect(page.prevCursor, isNull);
  });

  test('an empty items list produces an empty page', () {
    final core = QueryBuilder.compileOnly(schema).limit(5);
    final page = pageFromCompiled(core, {
      'items': <Object?>[],
      'hasNext': false,
    });
    expect(page.items, isEmpty);
    expect(page.hasNext, isFalse);
    expect(page.nextCursor, isNull);
  });
}
