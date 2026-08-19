import 'package:flutter/material.dart';

import '../ui/pages/aggregates_page.dart';
import '../ui/pages/connect_page.dart';
import '../ui/pages/crud_page.dart';
import '../ui/pages/encryption_page.dart';
import '../ui/pages/files_page.dart';
import '../ui/pages/getting_started_page.dart';
import '../ui/pages/maintenance_page.dart';
import '../ui/pages/overview_page.dart';
import '../ui/pages/performance_page.dart';
import '../ui/pages/queries_page.dart';
import '../ui/pages/reactive_page.dart';
import '../ui/pages/relationships_page.dart';
import '../ui/pages/search_page.dart';
import '../ui/pages/transactions_page.dart';
import '../core/app_state.dart';

/// A section of the playground: an id, label, icon, and page builder.
class PlaygroundSection {
  final String id;
  final String label;
  final IconData icon;
  final Widget Function(BuildContext, PlaygroundAppState) builder;

  const PlaygroundSection({
    required this.id,
    required this.label,
    required this.icon,
    required this.builder,
  });
}

/// All showcase sections, in navigation order.
List<PlaygroundSection> buildSections() => [
  PlaygroundSection(
    id: 'overview',
    label: 'Overview',
    icon: Icons.space_dashboard_outlined,
    builder: (c, s) => OverviewPage(state: s),
  ),
  PlaygroundSection(
    id: 'getting_started',
    label: 'Getting Started',
    icon: Icons.rocket_launch_outlined,
    builder: (c, s) => GettingStartedPage(state: s),
  ),
  PlaygroundSection(
    id: 'crud',
    label: 'CRUD',
    icon: Icons.edit_note_outlined,
    builder: (c, s) => CrudPage(state: s),
  ),
  PlaygroundSection(
    id: 'queries',
    label: 'Queries & Filters',
    icon: Icons.filter_alt_outlined,
    builder: (c, s) => QueriesPage(state: s),
  ),
  PlaygroundSection(
    id: 'aggregates',
    label: 'Aggregates',
    icon: Icons.calculate_outlined,
    builder: (c, s) => AggregatesPage(state: s),
  ),
  PlaygroundSection(
    id: 'search',
    label: 'Full-Text Search',
    icon: Icons.search_outlined,
    builder: (c, s) => SearchPage(state: s),
  ),
  PlaygroundSection(
    id: 'reactive',
    label: 'Reactive Watches',
    icon: Icons.sensors_outlined,
    builder: (c, s) => ReactivePage(state: s),
  ),
  PlaygroundSection(
    id: 'relationships',
    label: 'Relationships',
    icon: Icons.account_tree_outlined,
    builder: (c, s) => RelationshipsPage(state: s),
  ),
  PlaygroundSection(
    id: 'transactions',
    label: 'Transactions',
    icon: Icons.all_inclusive_outlined,
    builder: (c, s) => TransactionsPage(state: s),
  ),
  PlaygroundSection(
    id: 'encryption',
    label: 'Encryption',
    icon: Icons.lock_outline,
    builder: (c, s) => EncryptionPage(state: s),
  ),
  PlaygroundSection(
    id: 'files',
    label: 'Files & Blobs',
    icon: Icons.attachment_outlined,
    builder: (c, s) => FilesPage(state: s),
  ),
  PlaygroundSection(
    id: 'maintenance',
    label: 'Advanced & Maintenance',
    icon: Icons.settings_outlined,
    builder: (c, s) => MaintenancePage(state: s),
  ),
  PlaygroundSection(
    id: 'performance',
    label: 'Performance',
    icon: Icons.speed_outlined,
    builder: (c, s) => PerformancePage(state: s),
  ),
  PlaygroundSection(
    id: 'connect',
    label: 'Connect PocketBase',
    icon: Icons.cloud_sync_outlined,
    builder: (c, s) => ConnectPage(state: s),
  ),
];
