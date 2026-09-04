[CmdletBinding()]
param(
    [Parameter()]
    [string]$Path = (Get-Location).Path,

    [ValidateSet("file", "block")]
    [string]$Mode = "block",

    [string[]]$Include = @(
        "*.dart", "*.flutter", "*.ts", "*.tsx", "*.js", "*.jsx",
        "*.java", "*.kt", "*.swift", "*.cs", "*.py", "*.go",
        "*.rb", "*.php", "*.rs", "*.yaml", "*.yml", "*.json",
        "*.ps1", "*.sh"
    ),

    [double]$Threshold = 0.82,
    [int]$MinLines = 4,
    [int]$MinBlockLines = 4,
    [int]$NGramSize = 4,
    [string]$CsvPath
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$script:GeneratedFilePatterns = @(
    "*.g.dart", "*.freezed.dart", "*.mocks.dart", "*.generated.dart",
    "*.pb.dart", "*.pbenum.dart", "*.gen.dart"
)

$script:KeywordMap = @{
    'return' = 'RETURN'; 'await' = 'AWAIT'; 'async' = 'ASYNC'; 'yield' = 'YIELD';
    'if' = 'IF'; 'else' = 'ELSE'; 'for' = 'FOR'; 'while' = 'WHILE'; 'do' = 'DO';
    'switch' = 'SWITCH'; 'case' = 'CASE'; 'default' = 'DEFAULT'; 'break' = 'BREAK';
    'continue' = 'CONTINUE'; 'try' = 'TRY'; 'catch' = 'CATCH'; 'finally' = 'FINALLY';
    'throw' = 'THROW'; 'when' = 'WHEN'; 'assert' = 'ASSERT'; 'class' = 'CLASS';
    'typedef' = 'TYPEDEF'; 'enum' = 'ENUM'; 'extends' = 'EXTENDS'; 'implements' = 'IMPLEMENTS';
    'with' = 'WITH'; 'mixin' = 'MIXIN'; 'on' = 'ON'; 'new' = 'NEW'; 'super' = 'SUPER';
    'this' = 'THIS'; 'static' = 'STATIC'; 'const' = 'CONST'; 'final' = 'FINAL'; 'var' = 'VAR';
    'void' = 'VOID'; 'dynamic' = 'DYNAMIC'; 'late' = 'LATE'; 'required' = 'REQUIRED';
    'override' = 'OVERRIDE'; 'import' = 'IMPORT'; 'export' = 'EXPORT'; 'library' = 'LIBRARY';
    'part' = 'PART'; 'of' = 'OF'; 'as' = 'AS'; 'is' = 'IS'; 'in' = 'IN'; 'main' = 'MAIN';
    'runapp' = 'RUNAPP'; 'materialapp' = 'MATERIALAPP'; 'scaffold' = 'SCAFFOLD';
    'appbar' = 'APPBAR'; 'body' = 'BODY'; 'children' = 'CHILDREN'; 'child' = 'CHILD';
    'context' = 'CONTEXT'; 'widget' = 'WIDGET'; 'state' = 'STATE'; 'build' = 'BUILD';
    'true' = 'BOOL'; 'false' = 'BOOL'; 'null' = 'NULL'; 'int' = 'INT'; 'double' = 'DOUBLE';
    'string' = 'STRING'; 'list' = 'LIST'; 'map' = 'MAP'; 'set' = 'SET';
}

function Write-StatusMessage {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Message
    )

    Write-Output $Message
}

function Test-GeneratedCodeFile {
    param(
        [Parameter(Mandatory = $true)]
        [string]$FullName
    )

    $name = [System.IO.Path]::GetFileName($FullName).ToLowerInvariant()
    foreach ($pattern in $script:GeneratedFilePatterns) {
        if ($name -like $pattern) {
            return $true
        }
    }

    return $false
}

function Get-FileCandidate {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Root,

        [Parameter()]
        [string[]]$Patterns = @()
    )

    $rootPath = (Resolve-Path -LiteralPath $Root).Path
    $items = Get-ChildItem -LiteralPath $rootPath -Recurse -File -Force
    $candidateFiles = [System.Collections.Generic.List[System.IO.FileInfo]]::new()

    foreach ($item in $items) {
        $relative = [System.IO.Path]::GetRelativePath($rootPath, $item.FullName)
        $relativeLower = $relative.Replace('\', '/').ToLowerInvariant()

        $excluded = $false
        foreach ($segment in @(
                'build', '.dart_tool', 'coverage', '.fvm', '.git', 'node_modules',
                '.pub-cache', 'android/.gradle', 'ios/pods', 'ios/deriveddata'
            )) {
            if ($relativeLower -like "*$segment/*" -or $relativeLower -eq $segment) {
                $excluded = $true
                break
            }
        }

        if ($excluded) {
            continue
        }

        if (Test-GeneratedCodeFile -FullName $item.FullName) {
            continue
        }

        foreach ($pattern in $Patterns) {
            if ($item.Name -like $pattern) {
                [void]$candidateFiles.Add($item)
                break
            }
        }
    }

    return $candidateFiles
}

function Get-RelativeProjectPath {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Root,

        [Parameter(Mandatory = $true)]
        [string]$FullName
    )

    return [System.IO.Path]::GetRelativePath($Root, $FullName).Replace('\', '/')
}

function Get-NGramSet {
    param(
        [string[]]$Tokens,
        [int]$Size = 4
    )

    $ngrams = [System.Collections.Generic.List[string]]::new()
    if ($Tokens.Count -lt $Size) {
        return @()
    }

    for ($i = 0; $i -le ($Tokens.Count - $Size); $i++) {
        $window = [string]::Join(' ', $Tokens[$i..($i + $Size - 1)])
        [void]$ngrams.Add($window)
    }

    return @($ngrams.ToArray())
}

function ConvertTo-NormalizedCodeText {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Text
    )

    if ([string]::IsNullOrWhiteSpace($Text)) {
        return ''
    }

    $normalized = $Text.ToLowerInvariant()

    $normalized = [regex]::Replace($normalized, '(?ms)/\*.*?\*/', ' ')
    $normalized = [regex]::Replace($normalized, '(?m)^\s*///.*$', ' ')
    $normalized = [regex]::Replace($normalized, '(?m)^\s*//.*$', ' ')
    $normalized = [regex]::Replace($normalized, '(?m)^\s*\*.*$', ' ')

    $normalized = [regex]::Replace($normalized, '(?s)''(?:\\.|[^''])*''', ' STR ')
    $normalized = [regex]::Replace($normalized, '(?s)"(?:\\.|[^"\\])*"', ' STR ')

    foreach ($entry in $script:KeywordMap.GetEnumerator() | Sort-Object { $_.Key.Length } -Descending) {
        $pattern = '\b' + [regex]::Escape($entry.Key) + '\b'
        $normalized = [regex]::Replace($normalized, $pattern, $entry.Value)
    }

    $normalized = [regex]::Replace($normalized, '\b\d+\b', ' NUM ')
    $normalized = [regex]::Replace($normalized, '[^a-z0-9_]+', ' ')
    $normalized = [regex]::Replace($normalized, '\s+', ' ').Trim()

    return $normalized
}

function Get-FeatureSet {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Text,

        [Parameter()]
        [int]$NGramSizeValue = 4
    )

    $normalized = ConvertTo-NormalizedCodeText -Text $Text
    $tokens = @([regex]::Matches($normalized, '\b[a-z_][a-z0-9_]*\b') | ForEach-Object { $_.Value })

    $tokenSet = [System.Collections.Generic.HashSet[string]]::new()
    foreach ($token in $tokens) {
        [void]$tokenSet.Add($token)
    }

    $ngrams = @(Get-NGramSet -Tokens $tokens -Size $NGramSizeValue)
    $ngramSet = [System.Collections.Generic.HashSet[string]]::new()
    foreach ($ngram in $ngrams) {
        [void]$ngramSet.Add($ngram)
    }

    return [pscustomobject]@{
        Normalized = $normalized
        Tokens     = $tokens
        TokenSet   = $tokenSet
        Ngrams     = $ngrams
        NgramSet   = $ngramSet
        Length     = $normalized.Length
    }
}

function Get-ExactHash {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Text
    )

    $sha = [System.Security.Cryptography.SHA256]::Create()
    $hashBytes = $sha.ComputeHash([System.Text.Encoding]::UTF8.GetBytes($Text))
    return ([System.BitConverter]::ToString($hashBytes)).Replace('-', '').ToLowerInvariant()
}

function Get-Similarity {
    param(
        [string]$A,
        [string]$B,
        [psobject]$FeatureA = $null,
        [psobject]$FeatureB = $null,
        [int]$NGramSizeValue = 4
    )

    if ([string]::IsNullOrWhiteSpace($A) -or [string]::IsNullOrWhiteSpace($B)) {
        return 0.0
    }

    if ($null -eq $FeatureA -or $null -eq $FeatureB) {
        $FeatureA = Get-FeatureSet -Text $A -NGramSizeValue $NGramSizeValue
        $FeatureB = Get-FeatureSet -Text $B -NGramSizeValue $NGramSizeValue
    }

    $aTokens = @($FeatureA.Tokens)
    $bTokens = @($FeatureB.Tokens)

    if ($aTokens.Count -eq 0 -or $bTokens.Count -eq 0) {
        return 0.0
    }

    $intersection = 0
    foreach ($token in $FeatureA.TokenSet) {
        if ($FeatureB.TokenSet.Contains($token)) {
            $intersection++
        }
    }

    $union = $FeatureA.TokenSet.Count + $FeatureB.TokenSet.Count - $intersection
    $tokenScore = if ($union -eq 0) { 0.0 } else { [double]$intersection / [double]$union }

    $ngramIntersection = 0
    foreach ($ngram in $FeatureA.Ngrams) {
        if ($FeatureB.NgramSet.Contains($ngram)) {
            $ngramIntersection++
        }
    }

    $ngramUnion = $FeatureA.Ngrams.Count + $FeatureB.Ngrams.Count - $ngramIntersection
    $ngramScore = if ($ngramUnion -eq 0) { 0.0 } else { [double]$ngramIntersection / [double]$ngramUnion }

    $lengthRatio = 0.0
    $maxLength = [Math]::Max($FeatureA.Length, $FeatureB.Length)
    if ($maxLength -gt 0) {
        $lengthRatio = [double][Math]::Min($FeatureA.Length, $FeatureB.Length) / [double]$maxLength
    }

    $score = (($tokenScore * 0.45) + ($ngramScore * 0.45) + ($lengthRatio * 0.10))
    return [Math]::Round($score, 4)
}

function Get-DartBlock {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Text
    )

    $blocks = [System.Collections.Generic.List[object]]::new()
    $pattern = '(?ms)(?:^|[\r\n])\s*(?:(?:[A-Za-z_][\w<>\[\],\s\?]*\s+)?|(?:get|set|factory|const)\s+)?([A-Za-z_]\w*)\s*(?:\([^)]*\)|\[[^\]]*\])\s*(?:=>|{)'
    $matchResults = [regex]::Matches($Text, $pattern)

    foreach ($match in $matchResults) {
        $name = $match.Groups[1].Value.Trim()
        if ([string]::IsNullOrWhiteSpace($name)) {
            continue
        }

        if ($name -in @('if', 'for', 'while', 'switch', 'catch', 'else', 'do', 'try', 'finally', 'return', 'throw', 'when')) {
            continue
        }

        $startIndex = $match.Index
        $signature = $match.Value.Trim()
        $isArrow = $signature.Contains('=>')
        $endIndex = $startIndex + $match.Length

        if ($isArrow) {
            $cursor = $startIndex + $match.Length
            while ($cursor -lt $Text.Length) {
                $ch = $Text[$cursor]
                if ($ch -eq ';') {
                    $endIndex = $cursor + 1
                    break
                }
                if ($ch -eq "`r" -or $ch -eq "`n") {
                    $endIndex = $cursor
                    break
                }
                $cursor++
            }
        }
        else {
            $braceDepth = 0
            $inLineComment = $false
            $inBlockComment = $false
            $inSingleString = $false
            $inDoubleString = $false
            $escaped = $false

            for ($i = $startIndex; $i -lt $Text.Length; $i++) {
                $ch = $Text[$i]
                $next = if ($i + 1 -lt $Text.Length) { $Text[$i + 1] } else { '' }

                if ($inLineComment) {
                    if ($ch -eq "`r" -or $ch -eq "`n") { $inLineComment = $false }
                    continue
                }

                if ($inBlockComment) {
                    if ($ch -eq '*' -and $next -eq '/') {
                        $inBlockComment = $false
                        $i++
                    }
                    continue
                }

                if ($inSingleString) {
                    if ($escaped) { $escaped = $false; continue }
                    if ($ch -eq '\') { $escaped = $true; continue }
                    if ($ch -eq "'") { $inSingleString = $false }
                    continue
                }

                if ($inDoubleString) {
                    if ($escaped) { $escaped = $false; continue }
                    if ($ch -eq '\') { $escaped = $true; continue }
                    if ($ch -eq '"') { $inDoubleString = $false }
                    continue
                }

                if ($ch -eq '/' -and $next -eq '/') {
                    $inLineComment = $true
                    $i++
                    continue
                }

                if ($ch -eq '/' -and $next -eq '*') {
                    $inBlockComment = $true
                    $i++
                    continue
                }

                if ($ch -eq "'") {
                    $inSingleString = $true
                    continue
                }

                if ($ch -eq '"') {
                    $inDoubleString = $true
                    continue
                }

                if ($ch -eq '{') {
                    $braceDepth++
                    continue
                }

                if ($ch -eq '}') {
                    $braceDepth--
                    if ($braceDepth -le 0) {
                        $endIndex = $i + 1
                        break
                    }
                }
            }
        }

        if ($endIndex -le $startIndex) {
            continue
        }

        $candidate = $Text.Substring($startIndex, $endIndex - $startIndex).Trim()
        if ([string]::IsNullOrWhiteSpace($candidate)) {
            continue
        }

        $lines = @($candidate -split "`r?`n")
        if ($lines.Count -lt $MinBlockLines) {
            continue
        }

        $blocks.Add([pscustomobject]@{
                Name      = $name
                Code      = $candidate
                LineCount = $lines.Count
            })
    }

    return @($blocks)
}

if (-not (Test-Path -LiteralPath $Path -PathType Container)) {
    throw "Directory not found: $Path"
}

$rootPath = (Resolve-Path -LiteralPath $Path).Path
$files = Get-FileCandidate -Root $rootPath -Patterns $Include

if ($Mode -eq 'block') {
    $blocks = [System.Collections.Generic.List[object]]::new()
    $totalFiles = $files.Count
    for ($fileIndex = 0; $fileIndex -lt $totalFiles; $fileIndex++) {
        $file = $files[$fileIndex]
        Write-Progress -Activity 'Scanning Dart blocks' -Status "Processing file $($fileIndex + 1) of $totalFiles" -PercentComplete ([Math]::Round((($fileIndex + 1) / [double]$totalFiles) * 100))

        if ($file.Extension -ne '.dart') {
            continue
        }

        try {
            $raw = Get-Content -Path $file.FullName -Raw -ErrorAction Stop
        }
        catch {
            continue
        }

        if ([string]::IsNullOrWhiteSpace($raw)) {
            continue
        }

        $parsedBlocks = Get-DartBlock -Text $raw
        foreach ($block in $parsedBlocks) {
            $feature = Get-FeatureSet -Text $block.Code -NGramSizeValue $NGramSize
            if ([string]::IsNullOrWhiteSpace($feature.Normalized)) {
                continue
            }

            $blocks.Add([pscustomobject]@{
                    Path      = $file.FullName
                    Relative  = Get-RelativeProjectPath -Root $rootPath -FullName $file.FullName
                    Name      = $block.Name
                    Code      = $feature.Normalized
                    Feature   = $feature
                    Hash      = Get-ExactHash -Text $feature.Normalized
                    LineCount = $block.LineCount
                })
        }
    }

    if ($blocks.Count -lt 2) {
        Write-StatusMessage -Message "No function or method blocks found above the minimum length of $MinBlockLines lines in $rootPath"
        return
    }

    $exactGroups = [System.Collections.Generic.Dictionary[string, System.Collections.Generic.List[object]]]::new()
    foreach ($block in $blocks) {
        if (-not $exactGroups.ContainsKey($block.Hash)) {
            $exactGroups[$block.Hash] = [System.Collections.Generic.List[object]]::new()
        }
        [void]$exactGroups[$block.Hash].Add($block)
    }

    $exactMatches = [System.Collections.Generic.List[object]]::new()
    foreach ($group in $exactGroups.Values) {
        if ($group.Count -lt 2) {
            continue
        }

        for ($i = 0; $i -lt $group.Count; $i++) {
            for ($j = $i + 1; $j -lt $group.Count; $j++) {
                $a = $group[$i]
                $b = $group[$j]
                if ($a.Path -eq $b.Path) {
                    continue
                }

                [void]$exactMatches.Add([pscustomobject]@{
                        Similarity = 1.0
                        MethodA    = $a.Name
                        PathA      = $a.Relative
                        LinesA     = $a.LineCount
                        MethodB    = $b.Name
                        PathB      = $b.Relative
                        LinesB     = $b.LineCount
                    })
            }
        }
    }

    if ($exactMatches.Count -gt 0) {
        Write-StatusMessage -Message 'Exact normalized duplicates:'
        $exactMatches | Sort-Object -Property Similarity -Descending | Select-Object Similarity, MethodA, PathA, LinesA, MethodB, PathB, LinesB | Format-Table -AutoSize
    }

    $candidateMatches = [System.Collections.Generic.List[object]]::new()
    $totalPairs = [Math]::Max(0, [int](($blocks.Count * ($blocks.Count - 1)) / 2))
    $processedPairs = 0
    for ($i = 0; $i -lt $blocks.Count; $i++) {
        for ($j = $i + 1; $j -lt $blocks.Count; $j++) {
            $processedPairs++
            if ($totalPairs -gt 0 -and $processedPairs % 25 -eq 0) {
                $percent = [Math]::Round((($processedPairs / [double]$totalPairs) * 100))
                Write-Progress -Activity 'Comparing Dart blocks' -Status "Checking block pair $processedPairs of $totalPairs" -PercentComplete $percent
            }

            $a = $blocks[$i]
            $b = $blocks[$j]

            if ($a.Path -eq $b.Path) {
                continue
            }

            if ($a.Hash -eq $b.Hash) {
                continue
            }

            $lengthRatio = [double][Math]::Min($a.LineCount, $b.LineCount) / [double][Math]::Max($a.LineCount, $b.LineCount)
            if ($lengthRatio -lt 0.35) {
                continue
            }

            $score = Get-Similarity -A $a.Code -B $b.Code -FeatureA $a.Feature -FeatureB $b.Feature -NGramSizeValue $NGramSize
            if ($score -ge $Threshold) {
                $candidateMatches.Add([pscustomobject]@{
                        Similarity = $score
                        MethodA    = $a.Name
                        PathA      = $a.Relative
                        LinesA     = $a.LineCount
                        MethodB    = $b.Name
                        PathB      = $b.Relative
                        LinesB     = $b.LineCount
                    })
            }
        }
    }

    if ($candidateMatches.Count -eq 0) {
        Write-StatusMessage -Message "No near-duplicate code blocks found above threshold $Threshold in $rootPath"
        return
    }

    $ordered = $candidateMatches | Sort-Object -Property Similarity -Descending
    $ordered | Select-Object Similarity, MethodA, PathA, LinesA, MethodB, PathB, LinesB | Format-Table -AutoSize

    if ($CsvPath) {
        $directory = Split-Path -Path $CsvPath -Parent
        if ($directory -and -not (Test-Path -LiteralPath $directory)) {
            New-Item -ItemType Directory -Path $directory -Force | Out-Null
        }

        $combined = @($exactMatches) + @($ordered)
        $combined | Select-Object Similarity, MethodA, PathA, LinesA, MethodB, PathB, LinesB | Export-Csv -Path $CsvPath -NoTypeInformation
        Write-StatusMessage -Message "CSV exported to $CsvPath"
    }

    Write-Progress -Activity 'Duplicate scan complete' -Completed
    return
}

$records = [System.Collections.Generic.List[object]]::new()
$totalFiles = $files.Count
for ($fileIndex = 0; $fileIndex -lt $totalFiles; $fileIndex++) {
    $file = $files[$fileIndex]
    Write-Progress -Activity 'Scanning candidate files' -Status "Reading file $($fileIndex + 1) of $totalFiles" -PercentComplete ([Math]::Round((($fileIndex + 1) / [double]$totalFiles) * 100))

    try {
        $raw = Get-Content -Path $file.FullName -Raw -ErrorAction Stop
    }
    catch {
        continue
    }

    if ([string]::IsNullOrWhiteSpace($raw)) {
        continue
    }

    $lines = @($raw -split "`r?`n")
    if ($lines.Count -lt $MinLines) {
        continue
    }

    $feature = Get-FeatureSet -Text $raw -NGramSizeValue $NGramSize
    if ([string]::IsNullOrWhiteSpace($feature.Normalized)) {
        continue
    }

    $records.Add([pscustomobject]@{
            Path       = $file.FullName
            Relative   = Get-RelativeProjectPath -Root $rootPath -FullName $file.FullName
            Normalized = $feature.Normalized
            Feature    = $feature
            Hash       = Get-ExactHash -Text $feature.Normalized
            LineCount  = $lines.Count
        })
}

if ($records.Count -lt 2) {
    Write-StatusMessage -Message "No candidate files found above the minimum length of $MinLines lines."
    return
}

$duplicateMatches = [System.Collections.Generic.List[object]]::new()
$totalPairs = [Math]::Max(0, [int](($records.Count * ($records.Count - 1)) / 2))
$processedPairs = 0
for ($i = 0; $i -lt $records.Count; $i++) {
    for ($j = $i + 1; $j -lt $records.Count; $j++) {
        $processedPairs++
        if ($totalPairs -gt 0 -and $processedPairs % 25 -eq 0) {
            $percent = [Math]::Round((($processedPairs / [double]$totalPairs) * 100))
            Write-Progress -Activity 'Comparing candidate files' -Status "Checking pair $processedPairs of $totalPairs" -PercentComplete $percent
        }

        $a = $records[$i]
        $b = $records[$j]

        if ($a.Path -eq $b.Path) {
            continue
        }

        if ($a.Hash -eq $b.Hash) {
            continue
        }

        $lengthRatio = [double][Math]::Min($a.LineCount, $b.LineCount) / [double][Math]::Max($a.LineCount, $b.LineCount)
        if ($lengthRatio -lt 0.35) {
            continue
        }

        $score = Get-Similarity -A $a.Normalized -B $b.Normalized -FeatureA $a.Feature -FeatureB $b.Feature -NGramSizeValue $NGramSize
        if ($score -ge $Threshold) {
            $duplicateMatches.Add([pscustomobject]@{
                    Similarity = $score
                    PathA      = $a.Relative
                    PathB      = $b.Relative
                    LinesA     = $a.LineCount
                    LinesB     = $b.LineCount
                })
        }
    }
}

if ($duplicateMatches.Count -eq 0) {
    Write-StatusMessage -Message "No near-duplicate code found above threshold $Threshold in $rootPath"
    return
}

$ordered = $duplicateMatches | Sort-Object -Property Similarity -Descending
$ordered | Select-Object Similarity, PathA, PathB, LinesA, LinesB | Format-Table -AutoSize

if ($CsvPath) {
    $directory = Split-Path -Path $CsvPath -Parent
    if ($directory -and -not (Test-Path -LiteralPath $directory)) {
        New-Item -ItemType Directory -Path $directory -Force | Out-Null
    }

    $ordered | Select-Object Similarity, PathA, PathB, LinesA, LinesB | Export-Csv -Path $CsvPath -NoTypeInformation
    Write-StatusMessage -Message "CSV exported to $CsvPath"
}

Write-Progress -Activity 'Duplicate scan complete' -Completed
