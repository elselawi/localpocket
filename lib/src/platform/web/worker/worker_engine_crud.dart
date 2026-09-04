/// Part of `worker_engine.dart` — store registration over the wire.
///
/// The `open` handler registers additional stores and verifies the
/// page-computed manifest fingerprint. Collection CRUD has no dedicated
/// handlers: reads and mutations travel as typed contract requests answered
/// directly by the kernel command handler; the mutation action vocabulary
/// shared with `tx_mutate_batch` lives in `WorkerEngineHost._applyMutation`.
part of 'worker_engine.dart';

/// Store-registration handlers (see the file doc above).
mixin WorkerCrudHandlers on WorkerEngineHost {
  Future<Object?> _handleOpen(WorkerEventSink sink, WebRequest req) async {
    final storesRaw = WireArgs(req.args).optionalList('stores');
    final fingerprintsRaw = req.args['manifestFingerprints'];
    final expectedFingerprints = <String, String>{};
    if (fingerprintsRaw is Map) {
      fingerprintsRaw.forEach((k, v) {
        if (k is String && v is String) expectedFingerprints[k] = v;
      });
    }
    final storePolicies = _parseStorePolicies(req.args);
    if (storesRaw != null) {
      for (final s in storesRaw) {
        final rawSchema = parseSchema(s);
        final schema = attachStorePolicy(
          rawSchema,
          storePolicies[rawSchema.name],
          invoker: callbackBridge,
        );
        // Never register an encrypted store without an engine cipher — the
        // facade already rejects this at open.
        final hasEncrypted = schema.fields.any((f) => f.encrypted);
        if (hasEncrypted && pocket.fieldCipher == null) {
          throw ValidationException(
              'Store "${schema.name}" declares encrypted fields but no '
              'fieldCipher was provided.');
        }
        // The open handshake validates the manifest BEFORE any registration:
        // the page-computed fingerprint must match the worker's compilation
        // (both runtimes provably mean the same schema), and unsupported
        // features fail in registerStore — all before any DDL.
        final manifest = SchemaManifest.compile(schema);
        final expected = expectedFingerprints[schema.name];
        if (expected != null && expected != manifest.fingerprint) {
          final envelope = storePolicies[schema.name];
          throw ProtocolEnvelopeException(_mismatchMessage(
            schema.name,
            envelopeReceived: envelope != null,
            pageDescriptor: _envelopeDescriptor(envelope, rawSchema),
            workerDescriptor: _schemaDescriptor(schema),
          ));
        }
        if (!pocket.storeNames.contains(schema.name)) {
          await pocket.schemaService.registerStore(schema);
        } else {
          // Re-sent store: the definition must still match what the worker
          // already registered.
          final registered = pocket.requireTable(schema.name);
          if (registered.manifest.fingerprint != manifest.fingerprint) {
            throw ProtocolEnvelopeException(_mismatchMessage(
              schema.name,
              envelopeReceived: true,
              pageDescriptor: _schemaDescriptor(schema),
              workerDescriptor: _schemaDescriptor(registered.schema),
            ));
          }
        }
      }
    }
    return {'ok': true};
  }

  /// Builds the store-registration mismatch message: the diverging manifest
  /// descriptors (page view vs worker view) so a stale envelope or a
  /// drifted schema names exactly what disagrees instead of forcing a
  /// fingerprint scavenger hunt.
  static String _mismatchMessage(
    String store, {
    required bool envelopeReceived,
    required Map<String, Object?> pageDescriptor,
    required Map<String, Object?> workerDescriptor,
  }) {
    final diverging = <String>[
      for (final key in {
        ...pageDescriptor.keys,
        ...workerDescriptor.keys,
      })
        if (!_sameDescriptorValue(pageDescriptor[key], workerDescriptor[key]))
          _divergence(key, pageDescriptor[key], workerDescriptor[key]),
    ];
    final detail = diverging.isEmpty
        ? 'no policy-level descriptor diverged — the divergence is inside '
            'the schema body itself'
        : diverging.join('; ');
    final envelopeNote = envelopeReceived
        ? ''
        : ' No store-policy envelope was received for '
            'this store (a stale worker asset or a dropped envelope).';
    return 'Schema manifest mismatch for "$store": the page and the '
        'worker compiled different schemas. Diverging manifest '
        'descriptors: $detail.$envelopeNote';
  }

  /// The worker schema's executable-feature descriptor: the same vocabulary
  /// the store-policy envelope carries, compiled from the schema itself.
  static Map<String, Object?> _schemaDescriptor(CollectionSchema<Object?> s) {
    final policy = s.conflictPolicy;
    return {
      'version': s.version,
      'hasValidatorCallback': s.validator != null,
      'hasCollectionResolver': policy.collectionResolver != null,
      'fieldOverrides': policy.fieldOverrides.keys.toList()..sort(),
      'editsUnarchive': policy.editsUnarchive,
      'missingRemote': policy.missingRemote.name,
      'documentMigrationVersions': s.documentMigrations.keys.toList()..sort(),
      'hasTransform': s.migrations.any((m) => m.transform != null),
      'transformVersions': [
        for (final m in s.migrations)
          if (m.transform != null) m.toVersion,
      ]..sort(),
      'keepUnsyncedArchives': s.keepUnsyncedArchives,
    };
  }

  /// The page's view of one store: the plain-JSON schema body plus the
  /// store-policy envelope the page computed from its full schema.
  static Map<String, Object?> _envelopeDescriptor(
      Object? envelope, CollectionSchema<Object?> rawSchema) {
    Map<Object?, Object?> mapAt(String key) {
      if (envelope is! Map) return const {};
      final value = envelope[key];
      return value is Map ? value : const {};
    }

    List<Object?> listAt(String key) {
      if (envelope is! Map) return const [];
      final value = envelope[key];
      if (value is! List) return const [];
      return List.of(value)..sort();
    }

    List<Object?> overrideKeys() {
      final overrides = mapAt('conflictPolicy')['fieldOverrides'];
      if (overrides is! Map) return const [];
      final keys = overrides.keys.map((k) => k.toString()).toList();
      return keys..sort();
    }

    final policy = mapAt('conflictPolicy');
    final versions = listAt('documentMigrations');
    final transforms = listAt('migrationTransforms');
    final missingRemote = policy['missingRemote'];
    return {
      'version': rawSchema.version,
      'hasValidatorCallback': envelope is Map && envelope['validator'] == true,
      'hasCollectionResolver': policy['collectionResolver'] != null,
      'fieldOverrides': overrideKeys(),
      'editsUnarchive': policy['editsUnarchive'] == true,
      'missingRemote': missingRemote is String
          ? missingRemote
          : MissingRemotePolicy.conflict.name,
      'documentMigrationVersions': versions,
      'hasTransform': transforms.isNotEmpty,
      'transformVersions': transforms,
      'keepUnsyncedArchives': rawSchema.keepUnsyncedArchives,
    };
  }

  static String _divergence(String key, Object? page, Object? worker) =>
      '$key (page: ${_descriptorValue(page)}, '
      'worker: ${_descriptorValue(worker)})';

  static bool _sameDescriptorValue(Object? a, Object? b) {
    if (a is List && b is List) {
      final left = a.map((v) => v.toString()).toList()..sort();
      final right = b.map((v) => v.toString()).toList()..sort();
      return left.length == right.length &&
          left.indexed.every((e) => right[e.$1] == e.$2);
    }
    return a == b;
  }

  static String _descriptorValue(Object? value) => switch (value) {
        final List<dynamic> list => '[${list.join(', ')}]',
        null => 'absent',
        _ => value.toString(),
      };

  /// Parses the optional `storePolicies` argument: store name → envelope.
  Map<String, Object?> _parseStorePolicies(Map<String, Object?> args) {
    final raw = args['storePolicies'];
    if (raw == null) return const {};
    if (raw is! Map) {
      throw ProtocolEnvelopeException('"storePolicies" must be a map.');
    }
    return {
      for (final e in raw.entries)
        e.key.toString(): _requireEnvelope(e.value, e.key.toString()),
    };
  }

  Map<String, Object?> _requireEnvelope(Object? raw, String store) {
    if (raw is! Map) {
      throw ProtocolEnvelopeException(
          'The store policy for "$store" must be a map.');
    }
    return deepStringMap(raw);
  }
}
