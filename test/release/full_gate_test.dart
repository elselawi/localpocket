import 'dart:io';

import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';

/// Release gate.
///
/// The authoritative CI gate is `tool/release_gate.dart`, which runs EVERY
/// child check (analyze, full hermetic suite, web gate, core API smoke, and —
/// when configured — the live suite and publish dry-run) and fails the whole
/// gate when any child fails. A single application smoke test is NOT proof
/// that the suite ran; this file verifies the gate itself:
///
///   1. the application smoke keeps working end-to-end (default suite), and
///   2. the gate lists the required steps and propagates child failures.
///
/// The gate-logic tests spawn nested `dart` processes and are `gate`-tagged
/// (see dart_test.yaml) — run explicitly or via the release gate tool.
void main() {
  group('Full release gate', () {
    test('all suites in one ci run and example app smoke', () async {
      // 1. Example app smoke (Apexo clinic model offline + online simulation)
      final t = await tempDbPath();
      addTearDown(t.cleanup);

      final patientSchema = CollectionSchema<Object?>(
        name: 'patients',
        version: 1,
        fields: [
          Field.text('full_name', required: true),
          Field.text('phone', uniqueWhenActive: true),
          Field.text('medical_notes', encrypted: true),
          Field.int('birth_year'),
        ],
        fts: const FtsSpec(['full_name']),
      );

      final appointmentSchema = CollectionSchema<Object?>(
        name: 'appointments',
        version: 1,
        fields: [
          Field.text('patient_id', required: true),
          Field.date('scheduled_for', required: true),
          Field.enumValue('status', ['scheduled', 'completed', 'cancelled']),
        ],
      );

      final cipherKey = List<int>.generate(32, (i) => (i * 3 + 7) % 256);
      final cipher = AesGcmFieldCipher(cipherKey);

      final pocket = await openPocket(
        path: t.path,
        stores: [patientSchema, appointmentSchema],
        fieldCipher: cipher,
      );
      addTearDown(pocket.close);

      // Offline creation of patient and appointment
      final patientId = generateRecordId();
      await pocket.collection('patients').put({
        'id': patientId,
        'full_name': 'Sarah Connor',
        'phone': '555-0199',
        'medical_notes': 'Confidential medical record notes',
        'birth_year': 1985,
      });

      final apptId = generateRecordId();
      await pocket.collection('appointments').put({
        'id': apptId,
        'patient_id': patientId,
        'scheduled_for': DateTime.now().millisecondsSinceEpoch,
        'status': 'scheduled',
      });

      // FTS search works offline
      final searchResults =
          await pocket.collection('patients').search('Sarah').limit(10).fetch();
      expect(searchResults, hasLength(1));
      expect(searchResults.first.id, patientId);

      // Encrypted field decrypts on read
      final patient = await pocket.collection('patients').get(patientId);
      expect(patient!['medical_notes'], 'Confidential medical record notes');

      // Verify outbox rows generated
      final outboxRows = await pocket.db.query('lp_outbox');
      expect(outboxRows.length, 2);

      // Query relationships
      final appts = await pocket
          .collection('appointments')
          .query()
          .where('patient_id', eq: patientId)
          .limit(10)
          .fetch();
      expect(appts.items, hasLength(1));
      expect(appts.items.first['id'], apptId);
    });

    test('release gate lists every required child check', () async {
      final result = await Process.run(
          'dart', ['run', 'tool/release_gate.dart', '--list-steps']);
      expect(result.exitCode, 0, reason: '${result.stdout}\n${result.stderr}');
      final out = result.stdout as String;
      for (final required in [
        'analyze',
        'hermetic suite',
        'web gate',
        'core API smoke',
      ]) {
        expect(out, contains(required),
            reason: 'the gate must run "$required"');
      }
      expect(out, isNot(contains('live suite')),
          reason: 'the live suite is opt-in (--real)');
    }, tags: ['gate']);

    test('release gate: a failing child command fails the whole gate',
        () async {
      final result = await Process.run('dart', [
        'run',
        'tool/release_gate.dart',
        '--extra-command',
        'run tool/does_not_exist_smoke.dart',
      ]);
      expect(result.exitCode, isNot(0),
          reason:
              'any failing child must fail the gate:\n${result.stdout}\n${result.stderr}');
      expect(result.stdout as String, contains('FAIL'),
          reason: 'the failing step is reported');
    }, tags: ['gate']);

    test('release gate: --extra-command runs as a child step', () async {
      // A passing extra command does not fail the gate (and proves the gate
      // actually EXECUTES child commands, not just lists them).
      final result = await Process.run('dart', [
        'run',
        'tool/release_gate.dart',
        '--extra-command',
        'run tool/core_web_compile_smoke.dart',
      ]);
      expect(result.stdout as String, contains('PASS  run'),
          reason: 'the extra command ran as a child step');
    }, tags: ['gate'], timeout: const Timeout(Duration(minutes: 3)));
  });
}
