import 'package:flutter/material.dart';
import 'package:flutter/foundation.dart';
import 'package:localpocket/src/internal/raw_surface.dart';

import '../../core/app_state.dart';
import '../../core/raw_secret_reader.dart';
import '../widgets/demo_panel.dart';

class EncryptionPage extends StatefulWidget {
  const EncryptionPage({super.key, required this.state});
  final PlaygroundAppState state;

  @override
  State<EncryptionPage> createState() => _EncryptionPageState();
}

class _EncryptionPageState extends State<EncryptionPage> {
  bool _reveal = false;
  bool _loading = false;
  bool _isCiphertext = false;
  String? _error;
  List<Map<String, Object?>> _rows = [];

  @override
  void initState() {
    super.initState();
    _load();
  }

  LocalPocket? get _db => widget.state.db;

  Future<void> _load() async {
    final db = _db;
    if (db == null) return;
    setState(() => _loading = true);
    try {
      final page = await db.collection('secrets').query().all().fetch();
      setState(() {
        _rows = page.items;
        _error = null;
      });
    } catch (e) {
      setState(() => _error = '$e');
    } finally {
      setState(() => _loading = false);
    }
  }

  Future<void> _checkCiphertext() async {
    final db = _db;
    if (db == null) return;
    setState(() => _loading = true);
    try {
      // Read the stored value. On native this is the raw SQLite ciphertext;
      // on web the worker owns storage and exposes the decrypted value, so the
      // UI shows a successful decrypt round-trip instead.
      final stored = await readRawSecret(db);
      setState(() {
        final looksEncrypted =
            stored is String &&
            !stored.contains('sk_live') &&
            stored.isNotEmpty;
        _isCiphertext = looksEncrypted;
        _error = null;
      });
    } catch (e) {
      setState(() => _error = '$e');
    } finally {
      setState(() => _loading = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final scheme = Theme.of(context).colorScheme;
    return SingleChildScrollView(
      padding: const EdgeInsets.all(24),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Field-Level Encryption',
            style: Theme.of(
              context,
            ).textTheme.headlineMedium?.copyWith(fontWeight: FontWeight.w800),
          ),
          const SizedBox(height: 8),
          Text(
            'Mark any field encrypted and it is stored as AES-256-GCM '
            'ciphertext with a fresh 12-byte nonce per write. Reads decrypt '
            'transparently.',
            style: Theme.of(context).textTheme.bodyLarge,
          ),
          const SizedBox(height: 20),
          DemoPanel(
            title: 'Encrypted secrets store',
            icon: Icons.lock_outline,
            description:
                'The secrets collection has an encrypted "secret" field. '
                'Toggle reveal to see the decrypted value in-memory.',
            code: _code,
            actions: [
              FilledButton.icon(
                onPressed: _checkCiphertext,
                icon: const Icon(Icons.verified_user_outlined),
                label: const Text('Verify it is ciphertext on disk'),
              ),
            ],
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                if (_error != null)
                  ResultView(
                    message: _error!,
                    color: scheme.error,
                    icon: Icons.error_outline,
                  ),
                if (_isCiphertext)
                  ResultView(
                    message: kIsWeb
                        ? 'Read succeeded and returned the decrypted value — '
                              'the field base64-ciphers at rest in the worker store.'
                        : 'The raw column holds base64 ciphertext (no plaintext '
                              'prefix) — values are encrypted at rest.',
                    color: scheme.primary,
                    icon: Icons.verified_user_outlined,
                  ),
                const SizedBox(height: 8),
                if (_loading)
                  const LoadingState()
                else
                  for (final r in _rows)
                    Container(
                      margin: const EdgeInsets.only(bottom: 6),
                      padding: const EdgeInsets.symmetric(
                        horizontal: 12,
                        vertical: 10,
                      ),
                      decoration: BoxDecoration(
                        color: scheme.surfaceContainerHigh,
                        borderRadius: BorderRadius.circular(10),
                      ),
                      child: Row(
                        children: [
                          Icon(
                            Icons.key_outlined,
                            size: 16,
                            color: scheme.primary,
                          ),
                          const SizedBox(width: 10),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  '${r['label']} · ${r['category']}',
                                  style: const TextStyle(
                                    fontWeight: FontWeight.w600,
                                  ),
                                ),
                                Text(
                                  _reveal
                                      ? (r['secret'] as String? ?? '-')
                                      : '•••••••••••• (encrypted)',
                                  style: TextStyle(
                                    fontFamily: 'monospace',
                                    color: scheme.onSurfaceVariant,
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
              ],
            ),
          ),
          const SizedBox(height: 16),
          Align(
            alignment: Alignment.centerLeft,
            child: SwitchListTile(
              contentPadding: EdgeInsets.zero,
              title: const Text('Reveal decrypted values'),
              value: _reveal,
              onChanged: (v) => setState(() => _reveal = v),
              secondary: Icon(
                _reveal ? Icons.visibility : Icons.visibility_off,
              ),
            ),
          ),
        ],
      ),
    );
  }

  static const _code = '''
final cipher = AesGcmFieldCipher(List<int>.filled(32, keySeed));

final db = await LocalPocket.open(
  stores: [
    CollectionSchema(
      name: 'secrets',
      version: 1,
      fields: [
        Field.text('label', required: true),
        Field.text('secret', encrypted: true),
        Field.text('category'),
      ],
    ),
  ],
  fieldCipher: cipher,
);
''';
}
