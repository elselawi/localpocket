import 'package:localpocket/src/contract/contract.dart';
import 'package:localpocket/src/kernel/errors.dart';
import 'package:localpocket/src/kernel/sync/sync_backend.dart';
import 'package:localpocket/src/platform/web/page/protocol.dart';
import 'package:test/test.dart';

/// The one-canonical-classifier agreement gate.
///
/// Every error type that can cross any boundary must be classified exactly
/// once, and both wire projections — the contract codec's `type` field and
/// the worker protocol's stable error category — must agree with the
/// canonical classifier for every one of them. Adding a new [LocalPocketError]
/// or [SyncError] subtype without a canonical case fails here (the sealed
/// switch also fails compilation), so two classification tables can never
/// drift again.
void main() {
  // Every direct subtype of the sealed kernel error family, constructed.
  final localPocketErrors = <LocalPocketError, String>{
    ValidationException('x'): 'ValidationException',
    UniqueConstraintException(field: 'q', message: 'x'):
        'UniqueConstraintException',
    NotNullConstraintException(field: 't', message: 'x'):
        'NotNullConstraintException',
    CheckConstraintException('x'): 'CheckConstraintException',
    PrimaryKeyConstraintException('x'): 'PrimaryKeyConstraintException',
    ForeignKeyConstraintException('x'): 'ForeignKeyConstraintException',
    UnsupportedSchemaFeatureError('x'): 'UnsupportedSchemaFeatureError',
    FtsUnavailableError('x'): 'FtsUnavailableError',
    SchemaRegistrationError('x'): 'SchemaRegistrationError',
    SchemaTooNewError('x'): 'SchemaTooNewError',
    StorageError('x'): 'StorageError',
    RecordNotFoundException('x'): 'RecordNotFoundException',
    ConflictNotFoundException('x'): 'ConflictNotFoundException',
    StaleCursorError('x'): 'StaleCursorError',
    MissingLimitError(): 'MissingLimitError',
    ConflictBlockedError('x'): 'ConflictBlockedError',
    DestructiveMigrationRefusedError('x'): 'DestructiveMigrationRefusedError',
    ReadOnlyTxError(): 'ReadOnlyTxError',
    TypedStoreMismatchError('x'): 'TypedStoreMismatchError',
    FieldNotSelectedError('f'): 'FieldNotSelectedError',
  };

  // Every direct subtype of the sealed sync error family, constructed.
  final syncErrors = <SyncError, String>{
    TransientNetworkError('x'): 'TransientNetworkError',
    ServerBusyError('3', 'x'): 'ServerBusyError',
    ServerError('x'): 'ServerError',
    AuthError('x'): 'AuthError',
    ForbiddenError('x'): 'ForbiddenError',
    NotFoundError('x'): 'NotFoundError',
    PayloadError('x'): 'PayloadError',
    ProtocolError('x'): 'ProtocolError',
    DuplicateIdError('x'): 'DuplicateIdError',
    BatchFailedError('x'): 'BatchFailedError',
    RemoteVersionConflict(message: 'x'): 'RemoteVersionConflict',
    SyncIdentityError('x'): 'SyncIdentityError',
  };

  // Boundary-crossing runtime and transport error families plus the fallback.
  final wireRuntimeErrors = <Object, String>{
    WireException('x'): 'WireException',
    StateError('x'): 'StateError',
    RangeError('x'): 'RangeError',
    ArgumentError('x'): 'ArgumentError',
    const FormatException('x'): 'FormatException',
    UnsupportedError('x'): 'UnsupportedError',
    ProtocolEnvelopeException('x'): 'ProtocolEnvelopeException',
    DatabaseWorkerClosedException('x'): 'DatabaseWorkerClosedException',
    ProtocolMismatchException(expected: 1, actual: 2):
        'ProtocolMismatchException',
  };

  final all = <Object, String>{
    ...localPocketErrors,
    ...syncErrors,
    ...wireRuntimeErrors,
  };

  group('canonical classifier agreement', () {
    test('every typed kernel error is classified once', () {
      localPocketErrors.forEach((error, expected) {
        expect(canonicalErrorType(error), expected,
            reason: '${error.runtimeType} canonical category drifted');
      });
    });

    test('every sync error is classified once', () {
      syncErrors.forEach((error, expected) {
        expect(canonicalErrorType(error), expected,
            reason: '${error.runtimeType} canonical category drifted');
      });
    });

    test('runtime and transport errors are classified once', () {
      wireRuntimeErrors.forEach((error, expected) {
        expect(canonicalErrorType(error), expected,
            reason: '${error.runtimeType} canonical category drifted');
      });
      expect(canonicalErrorType(Object()), unknownErrorCategory);
    });

    test('the contract wire projection agrees with the classifier', () {
      all.forEach((error, expected) {
        expect(encodeError(error)['type'], expected,
            reason: '${error.runtimeType} contract error type disagrees with '
                'the canonical classifier');
      });
    });

    test('the worker protocol projection agrees with the classifier', () {
      all.forEach((error, expected) {
        expect(stableWireErrorType(error), expected,
            reason: '${error.runtimeType} stable category disagrees with the '
                'canonical classifier');
      });
      expect(stableWireErrorType(Object()), WireErrorCode.unknown);
      expect(WireErrorCode.unknown, unknownErrorCategory,
          reason: 'the projections share the one unknown category');
    });

    test('historical drift cases classify identically on both projections', () {
      // These once degraded differently per side; each must agree now.
      final drifted = <Object>[
        FieldNotSelectedError('priority'),
        TypedStoreMismatchError('mismatch'),
        WireException('bad envelope'),
        ...syncErrors.keys,
      ];
      for (final error in drifted) {
        final canonical = canonicalErrorType(error);
        expect(stableWireErrorType(error), canonical,
            reason: '${error.runtimeType} stable category drifted');
        expect(encodeError(error)['type'], canonical,
            reason: '${error.runtimeType} contract type drifted');
      }
    });
  });
}
