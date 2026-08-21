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

  test('items are wire-decoded, including nested maps and typed values',
      () {
    final core = QueryBuilder.compileOnly(schema).limit(5);
    final page = pageFromCompiled(core, {
      'items': [
        encodeWireValue({
          'id': 'a',
          'name': 'apple',
          'made_on': DateTime.utc(2026, 1, 2, 3, 4, 5),
          'meta': {'nested': 1, 'deep': {'x': true}},
        }),
      ],
      'hasMore': false,
    });
    expect(page.items, hasLength(1));
    final item = page.items.single;
    expect(item['id'], 'a');
    expect(item['made_on'], DateTime.utc(2026, 1, 2, 3, 4, 5));
    expect(item['meta'], {'nested': 1, 'deep': {'x': true}});
  });

  test('hasMore is read from the response', () {
    final core = QueryBuilder.compileOnly(schema).limit(5);
    final page = pageFromCompiled(core, {
      'items': <Object?>[],
      'hasMore': true,
    });
    expect(page.hasMore, isTrue);
  });

  test('nextCursor is null when hasMore is false even if lastRow is present',
      () {
    final core = QueryBuilder.compileOnly(schema).orderBy('name').limit(5);
    final page = pageFromCompiled(core, {
      'items': <Object?>[],
      'hasMore': false,
      'lastRow': encodeWireValue({'name': 'apple', 'id': 'a'}),
    });
    expect(page.hasMore, isFalse);
    expect(page.nextCursor, isNull);
  });

  test(
      'nextCursor comes from the lastRow wire-decoded through '
      'cursorForCompiledRow when hasMore is true', () {
    final core = QueryBuilder.compileOnly(schema).orderBy('name').limit(5);
    final page = pageFromCompiled(core, {
      'items': <Object?>[],
      'hasMore': true,
      'lastRow': encodeWireValue({
        'name': 'apple',
        'id': 'a',
        'made_on': DateTime.utc(2026, 1, 1),
      }),
    });
    expect(page.hasMore, isTrue);
    expect(page.nextCursor, isNotNull);

    final cursor = decodeCursor(page.nextCursor!);
    expect(cursor['store'], 'widgets');
    expect(cursor['schemaVer'], 1);
    expect(cursor['sort'], ['name:a', 'id:a']);
    expect(cursor['values'], ['apple', 'a']);
  });

  test('an empty items list produces an empty page', () {
    final core = QueryBuilder.compileOnly(schema).limit(5);
    final page = pageFromCompiled(core, {
      'items': <Object?>[],
      'hasMore': false,
    });
    expect(page.items, isEmpty);
    expect(page.hasMore, isFalse);
    expect(page.nextCursor, isNull);
  });
}
