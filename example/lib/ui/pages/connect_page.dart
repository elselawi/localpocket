import 'package:flutter/material.dart';

import '../../core/app_state.dart';
import '../../core/sync_status.dart';
import '../widgets/demo_panel.dart';

class ConnectPage extends StatefulWidget {
  const ConnectPage({super.key, required this.state});
  final PlaygroundAppState state;

  @override
  State<ConnectPage> createState() => _ConnectPageState();
}

class _ConnectPageState extends State<ConnectPage> {
  final _urlCtrl = TextEditingController();
  final _tokenCtrl = TextEditingController();
  bool _connecting = false;
  String? _error;
  String? _notice;

  @override
  void initState() {
    super.initState();
    widget.state.addListener(_onState);
  }

  @override
  void dispose() {
    widget.state.removeListener(_onState);
    _urlCtrl.dispose();
    _tokenCtrl.dispose();
    super.dispose();
  }

  void _onState() {
    if (mounted) setState(() {});
  }

  Future<void> _enterPocketBaseMode() async {
    setState(() {
      _connecting = true;
      _error = null;
      _notice = null;
    });
    try {
      await widget.state.openPocketBase();
      if (mounted)
        setState(
          () => _notice = 'PocketBase mode ready — enter a server URL below.',
        );
    } catch (e) {
      if (mounted)
        setState(() => _error = 'Could not open PocketBase mode: $e');
    } finally {
      if (mounted) setState(() => _connecting = false);
    }
  }

  Future<void> _connect() async {
    final url = _urlCtrl.text.trim();
    setState(() {
      _connecting = true;
      _error = null;
      _notice = null;
    });
    try {
      await widget.state.connectPocketBase(
        url: url,
        token: _tokenCtrl.text.trim().isEmpty ? null : _tokenCtrl.text.trim(),
      );
      if (mounted) {
        setState(() {
          _notice =
              'Connected. Watch the status below; sync happens '
              'automatically (and you can trigger it manually).';
        });
      }
    } catch (e) {
      if (mounted) {
        setState(
          () => _error =
              'Connection failed. Check the URL and that your PocketBase server '
              'exposes the "data" collection with the expected schema.\n\n$e',
        );
      }
    } finally {
      if (mounted) setState(() => _connecting = false);
    }
  }

  Future<void> _disconnect() async {
    setState(() {
      _connecting = true;
      _error = null;
    });
    try {
      await widget.state.disconnectPocketBase();
      if (mounted) {
        setState(
          () => _notice =
              'Disconnected from PocketBase. '
              'Your local data remains intact.',
        );
      }
    } catch (e) {
      if (mounted) setState(() => _error = 'Disconnect failed: $e');
    } finally {
      if (mounted) setState(() => _connecting = false);
    }
  }

  Future<void> _syncNow() async {
    try {
      await widget.state.sync?.syncNow();
    } catch (e) {
      if (mounted) setState(() => _error = 'Sync failed: $e');
    }
  }

  Future<void> _backToDemo() async {
    setState(() {
      _connecting = true;
      _error = null;
    });
    try {
      await widget.state.openDemo();
    } finally {
      if (mounted) setState(() => _connecting = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final scheme = Theme.of(context).colorScheme;
    final st = widget.state;
    final isPBMode = !st.isDemo;

    return SingleChildScrollView(
      padding: const EdgeInsets.all(24),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Connect PocketBase',
            style: Theme.of(
              context,
            ).textTheme.headlineMedium?.copyWith(fontWeight: FontWeight.w800),
          ),
          const SizedBox(height: 8),
          Text(
            'By default the playground runs in Demo Mode with built-in data '
            'and no backend. When you are ready, point it at your own '
            'PocketBase server to sync real data.',
            style: Theme.of(context).textTheme.bodyLarge,
          ),
          const SizedBox(height: 20),
          DemoPanel(
            title: isPBMode
                ? 'PocketBase connection'
                : 'Switch to PocketBase mode',
            icon: Icons.cloud_sync_outlined,
            description: isPBMode
                ? 'You are in PocketBase mode. Enter your server, then connect.'
                : 'Leave Demo Mode and open an empty local database for syncing.',
            code: _code,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                if (!isPBMode)
                  Align(
                    alignment: Alignment.centerLeft,
                    child: FilledButton.icon(
                      onPressed: _connecting ? null : _enterPocketBaseMode,
                      icon: const Icon(Icons.launch),
                      label: const Text('Open PocketBase mode'),
                    ),
                  )
                else ...[
                  TextField(
                    controller: _urlCtrl,
                    keyboardType: TextInputType.url,
                    decoration: const InputDecoration(
                      labelText: 'PocketBase server URL',
                      hintText: 'https://your-pocketbase.example.com',
                      prefixIcon: Icon(Icons.link),
                    ),
                    onSubmitted: (_) => _connect(),
                  ),
                  const SizedBox(height: 12),
                  TextField(
                    controller: _tokenCtrl,
                    obscureText: true,
                    decoration: const InputDecoration(
                      labelText: 'Auth token (optional)',
                      hintText: 'Paste a PocketBase auth token',
                      prefixIcon: Icon(Icons.key_outlined),
                      helperText:
                          'Optional — some servers allow anonymous read/write.',
                    ),
                  ),
                  const SizedBox(height: 16),
                  Wrap(
                    spacing: 8,
                    runSpacing: 8,
                    children: [
                      FilledButton.icon(
                        onPressed: _connecting ? null : _connect,
                        icon: const Icon(Icons.cloud_done_outlined),
                        label: const Text('Connect'),
                      ),
                      if (st.sync?.isConnected == true) ...[
                        OutlinedButton.icon(
                          onPressed: _connecting ? null : _syncNow,
                          icon: const Icon(Icons.sync),
                          label: const Text('Sync now'),
                        ),
                        OutlinedButton.icon(
                          onPressed: _connecting ? null : _disconnect,
                          icon: const Icon(Icons.link_off),
                          label: const Text('Disconnect'),
                        ),
                      ],
                      OutlinedButton.icon(
                        onPressed: _connecting ? null : _backToDemo,
                        icon: const Icon(Icons.arrow_back),
                        label: const Text('Back to Demo Mode'),
                      ),
                    ],
                  ),
                ],
                if (_notice != null) ...[
                  const SizedBox(height: 12),
                  ResultView(message: _notice!, label: 'Info'),
                ],
                if (_error != null) ...[
                  const SizedBox(height: 12),
                  ResultView(
                    message: _error!,
                    color: scheme.error,
                    icon: Icons.error_outline,
                    label: 'Connection error',
                  ),
                ],
              ],
            ),
          ),
          const SizedBox(height: 16),
          if (isPBMode && st.sync != null) _SyncStatusCard(sync: st.sync!),
          const SizedBox(height: 16),
          const DemoPanel(
            title: 'Server requirements',
            icon: Icons.info_outline,
            description:
                'LocalPocket syncs through a single "data" envelope collection '
                'on your PocketBase server with fields: id (text), store (text, '
                'required), data (json, required), created (autodate), updated '
                '(autodate). Set API rules to restrict access to authenticated '
                'users as needed.',
            child: SizedBox.shrink(),
          ),
        ],
      ),
    );
  }

  static const _code = '''
final backend = PocketBaseBackend(
  baseUrl: Uri.parse('https://your-pocketbase.example.com'),
  tokenProvider: yourTokenProvider,   // owns your auth token
  stores: const ['users', 'tasks', 'posts', 'metrics', 'secrets'],
);

final engine = SyncEngine(pocket: db, backend: backend);
await engine.start();          // periodic pull/push
await engine.syncNow();        // one immediate cycle
engine.status.listen((s) { /* state, pending, conflicts */ });
''';
}

class _SyncStatusCard extends StatelessWidget {
  final dynamic sync;
  const _SyncStatusCard({required this.sync});

  @override
  Widget build(BuildContext context) {
    final scheme = Theme.of(context).colorScheme;
    return ValueListenableBuilder(
      valueListenable: sync.status,
      builder: (context, status, _) {
        final s = status as PlaygroundSyncStatus;
        final color = s.hasError
            ? scheme.error
            : s.isRunning
            ? Colors.green
            : scheme.onSurfaceVariant;
        return DemoPanel(
          title: 'Live sync status',
          icon: Icons.monitor_heart_outlined,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  Icon(
                    s.isRunning
                        ? Icons.sync
                        : s.hasError
                        ? Icons.error
                        : Icons.pause_circle_outline,
                    color: color,
                    size: 20,
                  ),
                  const SizedBox(width: 8),
                  Text(
                    s.state,
                    style: TextStyle(fontWeight: FontWeight.w700, color: color),
                  ),
                ],
              ),
              const SizedBox(height: 8),
              Text(
                'Pending local ops: ${s.pending}',
                style: Theme.of(context).textTheme.bodyMedium,
              ),
              Text(
                'Conflicts: ${s.conflicts}',
                style: Theme.of(context).textTheme.bodyMedium,
              ),
              Text(
                'Hidden: ${s.hidden}',
                style: Theme.of(context).textTheme.bodyMedium,
              ),
              if (s.lastSyncAt != null)
                Text(
                  'Last sync: ${s.lastSyncAt}',
                  style: Theme.of(context).textTheme.labelSmall,
                ),
              if (s.lastError != null && s.lastError!.isNotEmpty)
                Padding(
                  padding: const EdgeInsets.only(top: 8),
                  child: Text(
                    'Error: ${s.lastError}',
                    style: TextStyle(color: scheme.error, fontSize: 12),
                  ),
                ),
            ],
          ),
        );
      },
    );
  }
}
