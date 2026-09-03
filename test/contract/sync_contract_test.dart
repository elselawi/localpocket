import 'dart:convert';

import 'package:localpocket/src/contract/contract.dart' as contract;
import 'package:test/test.dart';

/// The sync status/report payloads must be COMPLETE by contract: every field
/// the model exposes — including `blocked`, `discarded`, the dead-letter and
/// quarantine counters, and both sync timestamps — survives the codec, and
/// malformed payloads fail typed.
void main() {
  test('a complete SyncStatusData round-trips every field', () {
    const status = contract.SyncStatusData(
      state: contract.SyncEngineState.backoff,
      pending: 7,
      conflicts: 2,
      hidden: 1,
      blocked: 3,
      lastError: 'boom',
      lastSyncAt: null,
    );
    final decoded = contract.ContractCodec.decodeResult(
      const contract.SyncStatusRequest(),
      contract.ContractCodec.encodeResult(
        contract.SyncStatusResult(status: status),
      ),
    ) as contract.SyncStatusResult;
    expect(decoded.status.state, contract.SyncEngineState.backoff);
    expect(decoded.status.pending, 7);
    expect(decoded.status.conflicts, 2);
    expect(decoded.status.hidden, 1);
    expect(decoded.status.blocked, 3);
    expect(decoded.status.lastError, 'boom');
  });

  test('SyncReportData rejects a present-but-wrong-typed hadError flag', () {
    // A wrong-typed flag used to decode as false, reporting an errored cycle
    // as error-free.
    expect(
      () => contract.SyncReportData.fromJson(
          {...const contract.SyncReportData().toJson(), 'hadError': 'yes'}),
      throwsA(isA<contract.WireException>()),
    );
    // Absence keeps the documented default.
    expect(const contract.SyncReportData().toJson()['hadError'], isFalse);
  });

  test('a complete SyncReportData round-trips every field', () {
    const report = contract.SyncReportData(
      pulled: {'tasks': 4},
      swept: {'tasks': 9},
      pushed: 5,
      deadLettered: 1,
      blocked: 2,
      discarded: 3,
      hadError: true,
    );
    final decoded = contract.ContractCodec.decodeResult(
      const contract.SyncNowRequest(),
      contract.ContractCodec.encodeResult(
        contract.SyncReportResult(report: report),
      ),
    ) as contract.SyncReportResult;
    expect(decoded.report.pulled, {'tasks': 4});
    expect(decoded.report.swept, {'tasks': 9});
    expect(decoded.report.pushed, 5);
    expect(decoded.report.deadLettered, 1);
    expect(decoded.report.blocked, 2);
    expect(decoded.report.discarded, 3);
    expect(decoded.report.hadError, isTrue);

    // The decoded report round-trips through its own codec with identical
    // fields.
    expect(decoded.report.toJson(), report.toJson());
  });

  test('status timestamps survive the event codec (pre-encoded datetimes)',
      () async {
    final at = DateTime.utc(2026, 8, 31, 12, 30);
    final event = contract.SyncStatusEvent(
      status: contract.SyncStatusData(
        state: contract.SyncEngineState.idle,
        pending: 0,
        conflicts: 0,
        hidden: 0,
        lastSyncAt: at,
        lastSuccessfulSyncAt: at,
      ),
    );
    // The event travels through a structured-clone-safe JSON round trip on
    // the real transport; the pre-encoded timestamps must survive it.
    final wire = contract.ContractCodec.encodeEvent(event);
    final viaJson = jsonDecode(jsonEncode(wire))! as Map<String, Object?>;
    final decoded =
        contract.ContractCodec.decodeEvent(viaJson) as contract.SyncStatusEvent;
    expect(decoded.status.lastSyncAt, at);
    expect(decoded.status.lastSuccessfulSyncAt, at);
  });

  test('malformed sync payloads fail typed', () {
    expect(
      () => contract.ContractCodec.decodeResult(
        const contract.SyncStatusRequest(),
        {
          'tag': 'syncStatus',
          'payload': contract.encodeWireValue({
            'status': {'state': 'sideways', 'pending': 0},
          }),
        },
      ),
      throwsA(isA<contract.WireException>()),
      reason: 'an unknown engine state fails typed',
    );
    expect(
      () => contract.ContractCodec.decodeRequest({
        'tag': 'syncStart',
        'payload': contract.encodeWireValue({'scopeId': 'x'}),
      }),
      throwsA(isA<contract.WireException>()),
      reason: 'a start without a baseUrl fails typed',
    );
    expect(
      () => contract.ContractCodec.decodeRequest({
        'tag': 'syncSetConnectivity',
        'payload': contract.encodeWireValue({'online': 'yes'}),
      }),
      throwsA(isA<contract.WireException>()),
      reason: 'a non-bool online flag fails typed',
    );
    expect(
      () => contract.ContractCodec.decodeEvent({
        'tag': 'syncStatusEvent',
        'payload': contract.encodeWireValue({
          'status': 'not-a-map',
        }),
      }),
      throwsA(isA<contract.WireException>()),
      reason: 'a non-map status event fails typed',
    );
  });
}
