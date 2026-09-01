import 'dart:convert';

import 'package:localpocket/src/internal/raw_surface.dart';
import 'package:test/test.dart';

import 'package:localpocket/src/kernel/fts_normalizer.dart'
  show ftsNormalizerName;

void main() {
  group('FtsSpec fuzzy + normalize', () {
    test('defaults keep both extensions off', () {
      const spec = FtsSpec(['title']);
      expect(spec.fuzzy, isFalse);
      expect(spec.hasNormalization, isFalse);
      expect(spec.normalize.isEmpty, isTrue);
      // Identity normalize is a no-op.
      expect(spec.normalize.normalize('Any Text أ'), 'Any Text أ');
    });

    test('JSON round-trip carries fuzzy + normalize', () {
      const spec = FtsSpec(
        ['title', 'body'],
        fuzzy: true,
        normalize: FtsNormalization(rules: {'أ': 'ا', 'إ': 'ا'}),
      );
      final restored = FtsSpec.fromJson(spec.toJson());
      expect(restored.fuzzy, isTrue);
      expect(restored.fields, ['title', 'body']);
      expect(restored.normalize, spec.normalize);
      expect(restored.normalize.rules['أ'], 'ا');
    });

    test('JSON omits disabled options (lean wire form)', () {
      final json = const FtsSpec(['title']).toJson();
      expect(json.containsKey('fuzzy'), isFalse);
      expect(json.containsKey('normalize'), isFalse);
      // And a fuzzy-only spec omits normalize.
      final fuzzyJson = const FtsSpec(['t'], fuzzy: true).toJson();
      expect(fuzzyJson['fuzzy'], isTrue);
      expect(fuzzyJson.containsKey('normalize'), isFalse);
      // A rules-only spec omits fuzzy.
      final normJson = const FtsSpec(['t'],
          normalize: FtsNormalization(rules: {'a': 'b'})).toJson();
      expect(normJson.containsKey('fuzzy'), isFalse);
      expect((normJson['normalize'] as Map)['rules'], {'a': 'b'});
    });

    test('legacy JSON (fields only) parses with defaults', () {
      final spec = FtsSpec.fromJson({'fields': ['title']});
      expect(spec.fuzzy, isFalse);
      expect(spec.hasNormalization, isFalse);
    });

    test('explicit fuzzy false parses to false', () {
      final spec = FtsSpec.fromJson({
        'fields': ['title'],
        'fuzzy': false,
      });
      expect(spec.fuzzy, isFalse);
    });

    test('malformed normalize JSON raises typed StorageError', () {
      // rules not a map
      expect(
        () => FtsSpec.fromJson({
          'fields': ['title'],
          'normalize': <String, Object?>{'rules': 'not-a-map'},
        }),
        throwsA(isA<StorageError>()),
      );
      // rules key missing entirely
      expect(
        () => FtsSpec.fromJson({
          'fields': ['title'],
          'normalize': <String, Object?>{},
        }),
        throwsA(isA<StorageError>()),
      );
      // rule key not a string (jsonDecode can produce int keys)
      expect(
        () => FtsSpec.fromJson({
          'fields': ['title'],
          'normalize': <String, Object?>{
            'rules': <Object?, Object?>{1: 'ا'},
          },
        }),
        throwsA(isA<StorageError>()),
      );
      // rule value not a string
      expect(
        () => FtsSpec.fromJson({
          'fields': ['title'],
          'normalize': <String, Object?>{
            'rules': <Object?, Object?>{'أ': 42},
          },
        }),
        throwsA(isA<StorageError>()),
      );
    });

    test(
        'corrupt nested rules rethrow the inner SchemaRegistrationError '
        'verbatim — never double-wrapped as Malformed schema JSON', () {
      try {
        FtsSpec.fromJson({
          'fields': ['title'],
          'normalize': <String, Object?>{
            'rules': <String, Object?>{'أ': 'way too long replacement'},
          },
        });
        fail('should have thrown');
      } on SchemaRegistrationError catch (e) {
        expect(e.message, contains('must be 1-4 characters'));
        expect(e.message, isNot(contains('Malformed schema JSON')));
      }
    });

    test('FtsSpec missing fields / wrong types raise StorageError', () {
      expect(() => FtsSpec.fromJson(<String, Object?>{}),
          throwsA(isA<StorageError>()));
      expect(
          () => FtsSpec.fromJson({'fields': 'not-a-list'}),
          throwsA(isA<StorageError>()));
    });

    test('FtsNormalization.fromMap validates rules', () {
      expect(
        () => FtsNormalization.fromMap({'ab': 'ا'}),
        throwsA(isA<SchemaRegistrationError>()),
        reason: 'multi-character source rejected',
      );
      expect(
        () => FtsNormalization.fromMap({'أ': ''}),
        throwsA(isA<SchemaRegistrationError>()),
        reason: 'empty replacement rejected',
      );
      expect(
        () => FtsNormalization.fromMap({'أ': 'toolong'}),
        throwsA(isA<SchemaRegistrationError>()),
        reason: '>4-char replacement rejected',
      );
      // Exactly-4-char replacement is accepted.
      expect(FtsNormalization.fromMap({'a': 'abcd'}).rules['a'], 'abcd');
      // Valid multi-byte single rune still accepted.
      expect(FtsNormalization.fromMap({'ة': 'ه'}).rules['ة'], 'ه');
    });

    test('validateRule boundary cases', () {
      // Astral-plane single rune (surrogate pair in UTF-16) is one rune → OK.
      FtsNormalization.validateRule('𝕏', 'x');
      // Two-rune source rejected.
      expect(() => FtsNormalization.validateRule('ab', 'x'),
          throwsA(isA<SchemaRegistrationError>()));
      // 4-char replacement OK, 5 rejected.
      FtsNormalization.validateRule('a', 'wxyz');
      expect(() => FtsNormalization.validateRule('a', 'wxyza'),
          throwsA(isA<SchemaRegistrationError>()));
    });

    test('fromMap produces unmodifiable rules', () {
      final n = FtsNormalization.fromMap({'أ': 'ا'});
      expect(() => n.rules['x'] = 'y', throwsUnsupportedError);
    });

    test('normalize applies all rules in declaration order', () {
      final n = FtsNormalization.fromMap({'أ': 'ا', 'إ': 'ا', 'ة': 'ه'});
      expect(n.normalize('أكل إبراهيم'), 'اكل ابراهيم');
      expect(n.normalize('مدرسة'), 'مدرسه');
      expect(n.normalize('untouched'), 'untouched');
    });

    test('normalize handles repeated occurrences and empty text', () {
      final n = FtsNormalization(rules: {'أ': 'ا'});
      expect(n.normalize('أأأ'), 'ااا');
      expect(n.normalize(''), '');
      expect(n.normalize('أبأبأ'), 'ابابا');
      // Mixed scripts untouched except mapped char.
      expect(n.normalize('Hello أ World'), 'Hello ا World');
    });

    test('equality and hash are order-independent', () {
      final a = FtsNormalization(rules: {'أ': 'ا', 'إ': 'ا'});
      final b = FtsNormalization(rules: {'إ': 'ا', 'أ': 'ا'});
      expect(a, equals(b));
      expect(a.hashCode, b.hashCode,
          reason: 'equal instances MUST hash equal regardless of key order');
      // Same content in a Set finds both forms.
      expect(<FtsNormalization>{a}.contains(b), isTrue);
    });

    test('equality distinguishes differing rules', () {
      final base = FtsNormalization(rules: {'أ': 'ا'});
      expect(base, isNot(equals(FtsNormalization(rules: {'إ': 'ا'}))));
      expect(base, isNot(equals(FtsNormalization(rules: {'أ': 'آ'}))));
      expect(base, isNot(equals(const FtsNormalization())));
      expect(base.hashCode,
          isNot(equals(const FtsNormalization().hashCode)));
        expect(base, isNot(equals(Object())),
          reason: 'non-FtsNormalization operands are never equal');
      expect(base, equals(FtsNormalization(rules: {'أ': 'ا'})),
          reason: 'identical-content instances are equal');
    });

    test('identity normalization equality + toString', () {
      const n = FtsNormalization();
      expect(n, equals(const FtsNormalization()));
      expect(n.hashCode, const FtsNormalization().hashCode);
      expect(n.toString(), 'FtsNormalization(0 rules)');
      expect(
          FtsNormalization(rules: {'أ': 'ا'}).toString(),
          'FtsNormalization(1 rules)');
    });

    test('fromJson round-trips through real jsonEncode/jsonDecode', () {
      const spec = FtsSpec(['title'],
          fuzzy: true,
          normalize: FtsNormalization(rules: {'أ': 'ا', 'ة': 'ه'}));
      // This mirrors exactly what lp_stores.definition_json does.
      final encoded = jsonEncode(spec.toJson());
      final decoded =
          FtsSpec.fromJson((jsonDecode(encoded) as Map).cast<String, Object?>());
      expect(decoded, equals(spec));
      expect(decoded.fuzzy, isTrue);
      expect(decoded.normalize.rules, spec.normalize.rules);
    });
  });

  group('fts normalizer helpers', () {
    test('stable function name per store', () {
      expect(ftsNormalizerName('articles'), 'lp_norm_articles');
      expect(ftsNormalizerName('my_store'), 'lp_norm_my_store');
      // Distinct stores get distinct names.
      expect(ftsNormalizerName('a'), isNot(ftsNormalizerName('b')));
    });
  });
}