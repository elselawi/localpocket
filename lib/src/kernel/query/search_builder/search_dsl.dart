/// Common interface for fluent search construction across native and web search builders.
abstract interface class SearchFilterDsl<Self extends Object> {
  /// Limits the number of ranked matches returned.
  Self limit(int n);

  /// Returns all matching FTS results instead of requiring a limit.
  Self all();

  /// Includes records marked as archived.
  Self includeArchived();

  /// Includes records hidden by synchronization visibility state.
  Self includeHidden();
}
