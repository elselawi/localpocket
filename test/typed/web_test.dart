/// Typed Web/WASM protocol invariants.
///
/// Runtime worker behavior is exercised by `tool/web_smoke/typed_smoke_main.dart`;
/// this VM test pins the exact wire vocabulary that the typed facade must reuse.
///
/// The two `contract_*` operations are the destination typed envelope, which
/// coexists with the string-op registry while each family routes through it;
/// they carry contract-codec payloads, never new string-op argument shapes.
library;

import 'package:localpocket/src/web/protocol.dart';
import 'package:test/test.dart';

void main() {
  test('case 160: typed APIs add no wire operation or protocol bump', () {
    expect(webProtocolVersion, 3);
    expect(
      WireOp.allKnown.toSet(),
      equals(<String>{
        'open',
        'close',
        'health',
        'worker_event',
        'record_event',
        'capabilities',
        'compiled_query',
        'analyze',
        'wal_checkpoint',
        'vacuum',
        'prune_outbox',
        'compact',
        'run_maintenance',
        'tx_begin',
        'tx_get',
        'tx_mutate_batch',
        'tx_savepoint',
        'tx_rollback_to',
        'tx_release',
        'tx_commit',
        'tx_rollback',
        'watch_one',
        'watch_cancel',
        'sync_start',
        'sync_stop',
        'sync_now',
        'sync_status',
        'auth_required',
        'sync_pause',
        'sync_resume',
        'sync_update_auth',
        'sync_set_connectivity',
        'file_upload_begin',
        'file_upload_chunk',
        'file_upload_finish',
        'file_upload_abort',
        'file_list',
        'file_open',
        'file_remove',
        'file_gc',
        'file_enforce_storage_cap',
        'file_storage_status',
        'conflicts_list',
        'conflicts_get',
        'conflicts_resolve',
        'conflicts_accept_local',
        'conflicts_accept_remote',
        'conflicts_watch',
        'contract_request',
        'contract_event',
      }),
    );
  });
}
