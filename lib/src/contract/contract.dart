/// The sealed runtime contract: every boundary operation is a typed [Request]
/// answered by a named [Result]; every async notification is a typed [Event].
///
/// Direct subtypes of the sealed bases live in this library (as `part` files)
/// so exhaustiveness checking applies: adding a variant fails to compile until
/// encoders, decoders, and the handler handle it.
///
/// Commands carry meaning, never SQL or generic argument maps. Wire values
/// use [encodeWireValue]/[decodeWireValue]; errors use the error codec.
library;

import 'dart:async';
import 'dart:convert';
import 'dart:typed_data';

import 'package:collection/collection.dart';
import 'package:localpocket/src/kernel/change_bus.dart'
    show ChangeAction, ChangeOrigin;
import 'package:localpocket/src/kernel/errors.dart';
import 'package:localpocket/src/kernel/files/attachment_field.dart';
import 'package:localpocket/src/kernel/sync/status.dart';
import 'package:localpocket/src/kernel/sync/sync_backend.dart'
    show
        SyncError,
        TransientNetworkError,
        ServerBusyError,
        ServerError,
        AuthError,
        ForbiddenError,
        NotFoundError,
        PayloadError,
        ProtocolError,
        DuplicateIdError,
        BatchFailedError,
        RemoteVersionConflict,
        SyncIdentityError;

// The typed error hierarchy crosses the boundary via the error codec, so it
// is part of the contract surface; sync status models back the status/report
// payloads.
export '../kernel/change_bus.dart' show ChangeAction, ChangeOrigin;
export '../kernel/errors.dart';
export '../kernel/sync/status.dart';

part 'wire_values.dart';
part 'mutation.dart';
part 'conflict.dart';
part 'file.dart';
part 'sync.dart';
part 'query_spec.dart';
part 'request.dart';
part 'result.dart';
part 'event.dart';
part 'codec.dart';
part 'error_codec.dart';
part 'handler.dart';
