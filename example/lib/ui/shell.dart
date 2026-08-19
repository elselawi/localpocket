import 'package:flutter/material.dart';

import '../core/app_state.dart';
import '../core/platform.dart';
import 'pages.dart';

/// The responsive app shell: a navigation rail/drawer on the left, a top
/// banner indicating Demo vs PocketBase mode, and the active page content.
class PlaygroundShell extends StatefulWidget {
  final PlaygroundAppState state;
  final ValueNotifier<bool> darkMode;
  final void Function() onToggleTheme;

  const PlaygroundShell({
    super.key,
    required this.state,
    required this.darkMode,
    required this.onToggleTheme,
  });

  @override
  State<PlaygroundShell> createState() => _PlaygroundShellState();
}

class _PlaygroundShellState extends State<PlaygroundShell> {
  int _index = 0;
  late final List<PlaygroundSection> _sections;

  @override
  void initState() {
    super.initState();
    _sections = buildSections();
  }

  @override
  Widget build(BuildContext context) {
    final state = widget.state;
    return LayoutBuilder(
      builder: (context, constraints) {
        final wide = constraints.maxWidth >= 960;
        final current = _sections[_index];

        final banner = _ModeBanner(
          darkMode: widget.darkMode,
          onToggleTheme: widget.onToggleTheme,
          state: state,
        );

        if (!wide) {
          return Scaffold(
            appBar: AppBar(
              title: const Text('LocalPocket Playground'),
              actions: [
                IconButton(
                  icon: Icon(
                    widget.darkMode.value
                        ? Icons.light_mode_outlined
                        : Icons.dark_mode_outlined,
                  ),
                  onPressed: widget.onToggleTheme,
                ),
              ],
            ),
            drawer: Drawer(
              child: _NavList(
                sections: _sections,
                index: _index,
                state: state,
                onSelect: (i) {
                  setState(() => _index = i);
                  Navigator.of(context).pop();
                },
              ),
            ),
            body: Column(
              children: [
                banner,
                Expanded(child: current.builder(context, state)),
              ],
            ),
          );
        }

        return Scaffold(
          body: Row(
            children: [
              NavigationRail(
                selectedIndex: _index,
                onDestinationSelected: (i) => setState(() => _index = i),
                labelType: NavigationRailLabelType.all,
                minExtendedWidth: 200,
                destinations: [
                  for (final s in _sections)
                    NavigationRailDestination(
                      icon: Icon(s.icon),
                      selectedIcon: Icon(s.icon),
                      label: Text(s.label),
                    ),
                ],
              ),
              const VerticalDivider(width: 1),
              Expanded(
                child: Column(
                  children: [
                    banner,
                    Expanded(child: current.builder(context, state)),
                  ],
                ),
              ),
            ],
          ),
        );
      },
    );
  }
}

class _NavList extends StatelessWidget {
  final List<PlaygroundSection> sections;
  final int index;
  final PlaygroundAppState state;
  final void Function(int) onSelect;

  const _NavList({
    required this.sections,
    required this.index,
    required this.state,
    required this.onSelect,
  });

  @override
  Widget build(BuildContext context) {
    return ListView(
      padding: const EdgeInsets.symmetric(vertical: 12),
      children: [
        Padding(
          padding: const EdgeInsets.fromLTRB(20, 12, 20, 8),
          child: Text(
            'Sections',
            style: Theme.of(context).textTheme.labelSmall?.copyWith(
              color: Theme.of(context).colorScheme.onSurfaceVariant,
            ),
          ),
        ),
        for (var i = 0; i < sections.length; i++)
          ListTile(
            leading: Icon(sections[i].icon),
            title: Text(sections[i].label),
            selected: i == index,
            selectedTileColor: Theme.of(context).colorScheme.primaryContainer,
            onTap: () => onSelect(i),
          ),
      ],
    );
  }
}

class _ModeBanner extends StatelessWidget {
  final ValueNotifier<bool> darkMode;
  final void Function() onToggleTheme;
  final PlaygroundAppState state;

  const _ModeBanner({
    required this.darkMode,
    required this.onToggleTheme,
    required this.state,
  });

  @override
  Widget build(BuildContext context) {
    final isDemo = state.isDemo;
    final isWeb = PlaygroundPlatform.isWeb;

    final bg = isDemo ? const Color(0xFF123A2D) : const Color(0xFF402E12);
    final fg = isDemo ? const Color(0xFFB8F5D5) : const Color(0xFFFFE6B0);

    return Container(
      width: double.infinity,
      color: bg,
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
      child: Row(
        children: [
          Icon(
            isDemo ? Icons.flash_on : Icons.cloud_done_outlined,
            size: 18,
            color: fg,
          ),
          const SizedBox(width: 8),
          Expanded(
            child: Text(
              isDemo
                  ? 'Demo Mode — built-in sample data, fully offline. No backend required.'
                  : (state.sync?.isConnected == true
                        ? 'Connected to your PocketBase server.'
                        : 'PocketBase Mode — connection pending.'),
              style: TextStyle(
                color: fg,
                fontSize: 13,
                fontWeight: FontWeight.w600,
              ),
            ),
          ),
          if (isWeb)
            Container(
              margin: const EdgeInsets.only(right: 6),
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
              decoration: BoxDecoration(
                color: Colors.white.withValues(alpha: 0.15),
                borderRadius: BorderRadius.circular(20),
              ),
              child: const Text(
                'Web',
                style: TextStyle(color: Colors.white, fontSize: 11),
              ),
            ),
          IconButton(
            visualDensity: VisualDensity.compact,
            tooltip: darkMode.value ? 'Light mode' : 'Dark mode',
            icon: Icon(
              darkMode.value ? Icons.light_mode : Icons.dark_mode,
              color: fg,
              size: 18,
            ),
            onPressed: onToggleTheme,
          ),
        ],
      ),
    );
  }
}
