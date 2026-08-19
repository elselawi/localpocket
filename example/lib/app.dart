import 'package:flutter/material.dart';

import 'core/app_state.dart';
import 'ui/shell.dart';
import 'ui/theme.dart';

/// Root application widget.
class LocalPocketPlayground extends StatefulWidget {
  const LocalPocketPlayground({super.key});

  @override
  State<LocalPocketPlayground> createState() => _LocalPocketPlaygroundState();
}

class _LocalPocketPlaygroundState extends State<LocalPocketPlayground> {
  final PlaygroundAppState _state = PlaygroundAppState();
  final ValueNotifier<bool> _dark = ValueNotifier(false);
  bool _started = false;

  @override
  void initState() {
    super.initState();
    _bootstrap();
  }

  Future<void> _bootstrap() async {
    // Open Demo Mode immediately so the app just works with no configuration.
    await _state.openDemo();
    if (mounted) setState(() => _started = true);
  }

  @override
  void dispose() {
    _state.dispose();
    _dark.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return ValueListenableBuilder<bool>(
      valueListenable: _dark,
      builder: (context, dark, _) {
        return MaterialApp(
          title: 'LocalPocket Playground',
          debugShowCheckedModeBanner: false,
          theme: PlaygroundTheme.light(),
          darkTheme: PlaygroundTheme.dark(),
          themeMode: dark ? ThemeMode.dark : ThemeMode.light,
          home: _started
              ? PlaygroundShell(
                  state: _state,
                  darkMode: _dark,
                  onToggleTheme: () => _dark.value = !_dark.value,
                )
              : const _Splash(),
        );
      },
    );
  }
}

class _Splash extends StatelessWidget {
  const _Splash();

  @override
  Widget build(BuildContext context) {
    final scheme = Theme.of(context).colorScheme;
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(Icons.storage, size: 64, color: scheme.primary),
            const SizedBox(height: 16),
            const CircularProgressIndicator(),
            const SizedBox(height: 16),
            const Text('Opening LocalPocket…'),
          ],
        ),
      ),
    );
  }
}
