# The compile-fail corpus.
#
# `test/compile_fail/*.dart` files are deliberately NOT analyzed as part of
# the ordinary suite — the root analysis_options.yaml excludes this folder
# (the files contain code that MUST fail to compile). Each file carries
# `// expect-error: <analyzer code>` directives; `tool/compile_fail_runner.dart`
# copies every file under `build/compile_fail/`, analyzes the copy, and fails
# unless the analyzer reports exactly the expected error codes.
#
# These fixtures are the executable enforcement of the plan's compile-time
# pressure requirement (§13.4): foreign-store fields, raw map writes, and
# undeclared fields can never re-enter the typed surface unnoticed.
