import 'dart:io';

import 'package:test/test.dart';

import '../../tool/perf_gate.dart';

void main() {
  test('case 172: perf gate requires typed point-read and batch metrics', () {
    expect(requiredTypedMetrics, {'B13', 'B14'});

    final source = File('tool/perf_gate.dart').readAsStringSync();
    expect(source, contains('required typed metric is missing'));
    expect(source, contains('committed baseline metric is missing'));
  });
}
