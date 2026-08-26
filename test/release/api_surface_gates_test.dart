import 'dart:io';

import 'package:test/test.dart';

import '../../tool/api_surface_scanner.dart';
import '../../tool/raw_api_gate.dart';
import '../../tool/typed_surface_gate.dart';

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

  test('case 165: typed record-map write payload fails', () {
    final inputs = scanRecordMapInputs(
      violatingSource.replaceFirst('SyntheticRaw', 'BadTypedStore'),
      path: 'lib/src/typed/bad.dart',
      owners: {'BadTypedStore'},
    );
    expect(typedSurfaceViolations(inputs), [
      contains('BadTypedStore.save(Map<String,Object?> record)'),
    ]);
  });

  test('repository gates pass end to end', () async {
    for (final script in [
      'tool/raw_api_gate.dart',
      'tool/typed_surface_gate.dart',
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
