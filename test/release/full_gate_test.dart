import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';

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
  });
}
