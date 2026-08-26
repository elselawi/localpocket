/// Dependency version-constraint policy for the localpocket package.
///
/// Shared between `tool/dependency_check.dart` (a required release gate) and
/// the gate-style tests in `test/release/dependency_policy_test.dart` so the
/// two cannot drift. A runtime dependency whose constraint floats across more
/// than one major version weakens reproducibility audits: between resolutions
/// the dependency can jump a major boundary (e.g. the `sqlite3` FFI foundation
/// moving 2.x ↔ 3.x) with no deliberate, reviewed decision.
///
/// The policy applies to the `dependencies:` section only —
/// `dev_dependencies:` and SDK/`dependency_overrides:` constraints are not
/// checked.
library;

/// Package names deliberately exempt from the single-major constraint policy.
///
/// Keep this empty unless a dependency genuinely needs a multi-major span;
/// every entry must carry a comment explaining why.
const Set<String> majorSpanExemptions = <String>{};

/// Returns a human-readable violation per runtime dependency in
/// [pubspecContent] whose version constraint permits more than one major
/// version. An empty list means every runtime dependency stays within a single
/// major.
///
/// [exemptions] defaults to [majorSpanExemptions] and is injectable so tests
/// can exercise the exemption path without mutating the policy.
List<String> majorSpanViolations(
  String pubspecContent, {
  Set<String> exemptions = majorSpanExemptions,
}) {
  final violations = <String>[];
  for (final (name, constraint) in _runtimeDependencies(pubspecContent)) {
    if (exemptions.contains(name)) continue;
    final majors = _allowedMajors(constraint);
    if (majors == null) {
      violations
          .add('$name: "$constraint" cannot be proven to stay within a single '
              'major version');
    } else if (majors > 1) {
      violations.add('$name: "$constraint" spans $majors major versions; pin '
          'to a single major (e.g. ^X.Y.Z) or add an explicit exemption');
    }
  }
  return violations;
}

/// Parses the `dependencies:` section of [pubspecContent] into `(name,
/// constraint)` pairs. Multi-line entries (hosted/git/path forms) are skipped;
/// this repo declares every runtime dependency as a single-line constraint.
List<(String, String)> _runtimeDependencies(String pubspecContent) {
  final result = <(String, String)>[];
  var inDependencies = false;
  for (final line in pubspecContent.split(RegExp(r'\r?\n'))) {
    if (RegExp(r'^dependencies:\s*$').hasMatch(line)) {
      inDependencies = true;
      continue;
    }
    // Any unindented `key:` line ends the dependencies section.
    if (inDependencies &&
        RegExp(r'^[A-Za-z_][A-Za-z0-9_]*:\s*').hasMatch(line)) {
      inDependencies = false;
    }
    if (!inDependencies) continue;
    final entry =
        RegExp(r'^  ([A-Za-z0-9_]+):\s*"?([^"\r\n]+)"?\s*$').firstMatch(line);
    if (entry == null) continue; // multi-line entry — not a flat constraint
    result.add((entry.group(1)!, entry.group(2)!.trim()));
  }
  return result;
}

/// Number of distinct major versions [raw] permits, or `null` when the span
/// cannot be bounded (unparseable, `any`, or unbounded on at least one side).
int? _allowedMajors(String raw) {
  final constraint = raw.trim();
  if (constraint.isEmpty || constraint == 'any') return null;

  // Caret constraints stay within a single major, including 0.x where the
  // caret expands to `>=0.y.z <0.(y+1).0`.
  if (constraint.startsWith('^')) {
    return _Version.tryParse(constraint.substring(1)) == null ? null : 1;
  }

  // A bare version literal is an exact pin: single major.
  if (_Version.tryParse(constraint) != null) return 1;

  // General range (`>=A <B`, `>`, `<=`, possibly `||` alternatives): compute
  // the lowest and highest major each alternative permits, then union them.
  int? lowestMajor;
  int? highestMajor;
  for (final alternative in constraint.split('||')) {
    int? low;
    int? high;
    for (final token in alternative.trim().split(RegExp(r'\s+'))) {
      if (token.isEmpty) continue;
      if (token.startsWith('<=')) {
        final v = _Version.tryParse(token.substring(2));
        if (v == null) return null;
        // `<=X.Y.Z` permits major X only when the bound is past X.0.0.
        final maxMajor = (v.minor == 0 && v.patch == 0) ? v.major - 1 : v.major;
        high = high == null ? maxMajor : _min(high, maxMajor);
      } else if (token.startsWith('>=')) {
        final v = _Version.tryParse(token.substring(2));
        if (v == null) return null;
        low = low == null ? v.major : _max(low, v.major);
      } else if (token.startsWith('<')) {
        final v = _Version.tryParse(token.substring(1));
        if (v == null) return null;
        final maxMajor = v.major - 1; // `<X.Y.Z` excludes the whole X major.
        high = high == null ? maxMajor : _min(high, maxMajor);
      } else if (token.startsWith('>')) {
        final v = _Version.tryParse(token.substring(1));
        if (v == null) return null;
        low = low == null ? v.major : _max(low, v.major);
      } else {
        return null; // unsupported token form
      }
    }
    if (low == null && high == null) return null; // degenerate alternative
    lowestMajor = low == null ? lowestMajor : _min(lowestMajor ?? low, low);
    highestMajor =
        high == null ? highestMajor : _max(highestMajor ?? high, high);
  }
  if (lowestMajor == null || highestMajor == null) return null; // unbounded
  return highestMajor - lowestMajor + 1;
}

int _min(int a, int b) => a < b ? a : b;
int _max(int a, int b) => a > b ? a : b;

/// A parsed `major.minor.patch` version literal.
class _Version {
  const _Version(this.major, this.minor, this.patch);

  final int major;
  final int minor;
  final int patch;

  /// Parses a leading `major.minor.patch` from a literal that may carry a
  /// comparison prefix (`^`, `>=`, ...) or a pre-release/build suffix.
  static _Version? tryParse(String raw) {
    final match = RegExp(r'^(\d+)\.(\d+)\.(\d+)').firstMatch(raw.trim());
    if (match == null) return null;
    return _Version(
      int.parse(match.group(1)!),
      int.parse(match.group(2)!),
      int.parse(match.group(3)!),
    );
  }
}
