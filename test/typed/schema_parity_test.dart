/// Schema parity backstop: the typed layer must cover every engine schema
/// knob and every `Field` factory parameter.
///
/// Dart offers no static reflection, so this is enforced at gate time by
/// reading the two sources structurally (no mirrors, no codegen):
///
///  1. Every `CollectionSchema` constructor parameter has a home in
///     `StoreDef` — either a constructor argument (`name`, `version`) or an
///     override getter (`fields`, `indexes`, `conflictPolicy`,
///     `prefetchFiles`, `keepUnsyncedArchives`, `fts`, `migrations`,
///     `documentMigrations`, `validator`).
///  2. Every named parameter of each engine `Field.<kind>` factory is
///     accepted by the corresponding typed `Fields.<kind>` factory
///     (kind names are mapped: `int`→`integer`, `bool`→`boolean`,
///     `enumValue`→`enumOf`; `dateTime` is a typed-layer addition over
///     `Field.date` and is not required to exist engine-side).
///
/// The test fails with the exact missing knob the moment drift is
/// introduced, and runs in the fast hermetic suite on every `dart test`.
library;

import 'dart:io';

import 'package:test/test.dart';

final String _schemaSrc = File('lib/src/kernel/schema.dart').readAsStringSync();
final String _storeDefSrc =
    File('lib/src/schema/store_def.dart').readAsStringSync();

/// Captures text between [start] and the first occurrence of [end].
String _between(String src, String start, String end) {
  final i = src.indexOf(start);
  if (i < 0) fail('parity check: marker "$start" not found');
  final j = src.indexOf(end, i + start.length);
  if (j < 0) fail('parity check: terminator "$end" not found after "$start"');
  return src.substring(i + start.length, j);
}

/// Names referenced as `this.name` (constructor shorthand).
Set<String> _thisParams(String block) =>
    {for (final m in RegExp(r'this\.(\w+)').allMatches(block)) m.group(1)!};

/// Parameter names following a (possibly generic, possibly nullable) type.
Set<String> _typedParams(String block) => {
      for (final m
          in RegExp(r'(?:bool|String|List<[^>]*>|Map<[^>]*>)\s*\??\s+(\w+)')
              .allMatches(block))
        m.group(1)!,
    };

/// Engine `Field.<kind>` factory → its typed `Fields` counterpart.
const Map<String, String> _kindMap = {
  'text': 'text',
  'int': 'integer',
  'real': 'real',
  'bool': 'boolean',
  'date': 'date',
  'enumValue': 'enumOf',
  'json': 'json',
  'jsonList': 'jsonList',
  'ref': 'ref',
};

/// Engine parameters that are covered by a typed mechanism instead of a
/// same-named factory parameter: the engine's `required` flag is expressed
/// through the typed `.req()` suffix (non-nullability becomes part of the
/// descriptor's static type), so its absence from factory signatures is
/// the design, not a gap.
const Set<String> _coveredByDesign = {'required'};

void main() {
  test('every CollectionSchema knob has a StoreDef home', () {
    final ctor = _between(_schemaSrc, 'const CollectionSchema({', '\n  });');
    final engineKnobs = _thisParams(ctor);

    final storeDefCtor = _between(_storeDefSrc, 'StoreDef({', '});');
    final homes = <String>{
      ..._thisParams(storeDefCtor),
      ...{
        for (final m in RegExp(r'\bget\s+(\w+)').allMatches(_storeDefSrc))
          m.group(1)!
      },
    };

    final missing = engineKnobs.difference(homes);
    expect(
      missing,
      isEmpty,
      reason: 'Engine CollectionSchema knobs without a StoreDef home: '
          '$missing. Add a constructor argument or override getter to '
          'StoreDef and forward it in _compile().',
    );
  });

  test('every Field factory parameter is covered by the typed factory', () {
    final factoryRe =
        RegExp(r'factory Field\.(\w+)\((.*?)\)\s*=>', dotAll: true);
    final engineFactories = <String, Set<String>>{
      for (final m in factoryRe.allMatches(_schemaSrc))
        m.group(1)!: _typedParams(m.group(2)!),
    };

    for (final e in engineFactories.entries) {
      final typedMethod = _kindMap[e.key];
      expect(typedMethod, isNotNull,
          reason: 'Engine Field factory "${e.key}" has no typed counterpart '
              'in the _kindMap of this test — add the mapping and a '
              '`Fields` factory.');
      final method = RegExp('\\b$typedMethod(?:<[^>]*>)?\\s*\\((.*?)\\)\\s*\\{',
              dotAll: true)
          .firstMatch(_storeDefSrc);
      expect(method, isNotNull,
          reason: 'Typed factory "$typedMethod" (mapped from Field.${e.key}) '
              'does not exist in Fields.');
      final typedParams = _typedParams(method!.group(1)!);
      final missing =
          e.value.difference(typedParams).difference(_coveredByDesign);
      expect(
        missing,
        isEmpty,
        reason: 'Field.${e.key} parameters without a typed mirror in '
            'Fields.$typedMethod: $missing.',
      );
    }
  });
}
