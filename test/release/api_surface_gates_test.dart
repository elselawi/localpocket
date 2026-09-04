import 'dart:io';

import 'package:test/test.dart';

import '../../tool/api_surface_scanner.dart';
import '../../tool/raw_api_gate.dart';

void main() {
  const violatingSource = '''
final class SyntheticRaw {
  Future<void> save(
    Map<String, Object?> record,
  ) async {}
}
''';

  group('case 164: raw API allowlist gate', () {
    test('an unallowlisted public record write fails', () {
      final inputs = scanRecordMapInputs(
        violatingSource,
        path: 'lib/synthetic.dart',
      );
      expect(inputs.map((input) => input.key), [
        'lib/synthetic.dart::SyntheticRaw.save(Map<String,Object?> record)',
      ]);
      expect(
        rawApiViolations(inputs: inputs, allowlist: ''),
        contains(contains('unallowlisted public raw record-write API')),
      );
    });

    test('an exact reviewed allowlist entry passes', () {
      final inputs = scanRecordMapInputs(
        violatingSource,
        path: 'lib/synthetic.dart',
      );
      expect(
        rawApiViolations(
          inputs: inputs,
          allowlist: '${inputs.single.key} # synthetic legacy raw CRUD\n',
        ),
        isEmpty,
      );
    });

    test('read-only and harmless map inputs are not record writes', () {
      const source = '''
final class SafeSurface {
  Map<String, Object?> asMap() => {};
  void configure(Map<String, Object?> metadata) {}
  void put(void Function(Object) build) {}
}
''';
      expect(
        scanRecordMapInputs(source, path: 'lib/safe.dart'),
        isEmpty,
      );
    });

    test('unknown method names with record maps are still detected', () {
      const source = '''
final class SneakySurface {
  void commitRecord(Map<String, Object?> payload) {}
}
''';
      expect(
        scanRecordMapInputs(source, path: 'lib/sneaky.dart').single.member,
        'commitRecord',
      );
    });
  });

  test('publicInventory handles cyclic exports without recursing forever', () {
    final temp = Directory.systemTemp.createTempSync('api_inventory_cycle_');
    addTearDown(() {
      if (temp.existsSync()) {
        temp.deleteSync(recursive: true);
      }
    });

    final libDir = Directory('${temp.path}${Platform.pathSeparator}lib');
    libDir.createSync(recursive: true);

    File('${libDir.path}${Platform.pathSeparator}a.dart').writeAsStringSync('''
export 'b.dart';

class A {}
''');
    File('${libDir.path}${Platform.pathSeparator}b.dart').writeAsStringSync('''
export 'a.dart';

class B {}
''');
    File('${libDir.path}${Platform.pathSeparator}entry.dart')
        .writeAsStringSync('''
export 'a.dart';
''');

    final inventory = publicInventory(temp, 'lib/entry.dart');

    expect(inventory, contains('lib/a.dart::A'));
    expect(inventory, contains('lib/b.dart::B'));
  });

  test('repository gates pass end to end', () async {
    for (final script in [
      'tool/raw_api_gate.dart',
    ]) {
      final result = await Process.run(
        Platform.resolvedExecutable,
        ['run', script],
        workingDirectory: Directory.current.path,
      );
      expect(result.exitCode, 0,
          reason: '$script\n${result.stdout}\n${result.stderr}');
      expect(result.stdout, contains('PASS:'));
    }
  }, tags: ['gate']);
}
