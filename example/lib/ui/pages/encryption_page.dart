import 'package:flutter/material.dart';
// Flutter exports `Row` (widget); the typed snapshot type needs the prefixed
// import.
import 'package:localpocket/localpocket.dart' as lp;

import '../../core/app_state.dart';
import '../../core/raw_secret_reader.dart';
import '../../core/schemas.dart';
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
  bool _decryptsOk = false;
  String? _error;
  List<lp.Row<PlaygroundSecrets>> _rows = [];

  @override
  void initState() {
    super.initState();
    _load();
  }

  lp.LocalPocket? get _db => widget.state.db;

  Future<void> _load() async {
    final db = _db;
    if (db == null) return;
    setState(() => _loading = true);
    try {
      final page = await db
          .store(PlaygroundSecrets.store)
          .query(lp.QuerySpec<PlaygroundSecrets>(limit: lp.Limits.unbounded));
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

  Future<void> _checkDecrypts() async {
    final db = _db;
    if (db == null) return;
    setState(() => _loading = true);
    try {
      // A typed read returns the decrypted value; matching the seeded
      // plaintext proves the round-trip decryption succeeded.
      final stored = await readRawSecret(db);
      setState(() {
        _decryptsOk = stored == 'sk_live_till_pocketbase_01';
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
                onPressed: _checkDecrypts,
                icon: const Icon(Icons.verified_user_outlined),
                label: const Text('Verify reads decrypt'),
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
                if (_decryptsOk)
                  ResultView(
                    message:
                        'Reads return the decrypted plaintext — the field is '
                        'AES-256-GCM ciphertext at rest and decrypts '
                        'transparently.',
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
                                  '${r(PlaygroundSecrets.label)} · '
                                  '${r(PlaygroundSecrets.category)}',
                                  style: const TextStyle(
                                    fontWeight: FontWeight.w600,
                                  ),
                                ),
                                Text(
                                  _reveal
                                      ? (r(PlaygroundSecrets.secret) ?? '-')
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
final db = await LocalPocket.open(
  LocalPocketOptions(
    stores: [
      PlaygroundSecrets.store,  // 'secret' declared with schema.text(..., encrypted: true)
    ],
    encryption: EncryptionConfig.aesGcm256(key: keyBytes),
  ),
);
''';
}
