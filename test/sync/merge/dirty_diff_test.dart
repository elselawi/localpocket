import 'package:localpocket/sync.dart';
import 'package:test/test.dart';

/// Dirty-diff tests.
void main() {
  group('dirty diff', () {
    test('dirty fields computed at merge time', () {
      final base = {'a': 1, 'b': 'unchanged', 'c': true};
      final current = {'a': 2, 'b': 'unchanged', 'c': false, 'd': 'added'};

      final dirty = computeDirtyFields(base, current);
      expect(dirty, containsAll(['a', 'c', 'd']));
      expect(dirty, isNot(contains('b')));
    });

    test('nested paths and one level objects', () {
      final base = {
        'title': 'doc',
        'meta': {
          'author': 'alice',
          'views': 10,
          'nested': {'deep': 'val1'},
        },
      };

      final current = {
        'title': 'doc',
        'meta': {
          'author': 'alice',
          'views': 15,
          'nested': {'deep': 'val2'},
        },
      };

      final dirty = computeDirtyFields(base, current);
      expect(dirty, contains('meta'));
      expect(dirty, contains('meta.views'));
      expect(dirty, contains('meta.nested'));
      expect(dirty, contains('meta.nested.deep'));
      expect(dirty, isNot(contains('title')));
      expect(dirty, isNot(contains('meta.author')));
    });

    test('arrays compared whole unless element identity declared', () {
      final base = {
        'items': [1, 2, 3],
        'tags': ['a', 'b'],
      };

      // Change one element in items
      final current = {
        'items': [1, 99, 3],
        'tags': ['a', 'b'],
      };

      final dirty = computeDirtyFields(base, current);
      expect(dirty, contains('items'));
      expect(dirty, isNot(contains('tags')));
    });
  });
}
