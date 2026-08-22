[CmdletBinding()]
param()

$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $PSScriptRoot
$manifestPath = Join-Path $projectRoot "manifest.json"
$distributionDirectory = Join-Path $projectRoot "dist"
$stagingDirectory = Join-Path ([System.IO.Path]::GetTempPath()) ("sidemarks-release-" + [guid]::NewGuid().ToString("N"))

$releaseFiles = @(
  "manifest.json",
  "background.js",
  "sidepanel.html",
  "sidepanel.js",
  "styles.css",
  "defaults.json",
  "defaults-general.json",
  "README.md"
)

if (-not (Test-Path -LiteralPath $manifestPath)) {
  throw "manifest.json was not found."
}

$manifest = Get-Content -Raw -Encoding UTF8 -LiteralPath $manifestPath | ConvertFrom-Json
$version = [string]$manifest.version
if ($version -notmatch '^\d+(\.\d+){0,3}$') {
  throw "The manifest version is invalid: $version"
}

foreach ($relativePath in $releaseFiles) {
  $sourcePath = Join-Path $projectRoot $relativePath
  if (-not (Test-Path -LiteralPath $sourcePath -PathType Leaf)) {
    throw "A required extension file was not found: $relativePath"
  }
}

New-Item -ItemType Directory -Force -Path $distributionDirectory | Out-Null
New-Item -ItemType Directory -Path $stagingDirectory | Out-Null

try {
  foreach ($relativePath in $releaseFiles) {
    Copy-Item -LiteralPath (Join-Path $projectRoot $relativePath) -Destination (Join-Path $stagingDirectory $relativePath)
  }

  $archivePath = Join-Path $distributionDirectory "SideMarks-v$version.zip"
  if (Test-Path -LiteralPath $archivePath) {
    Remove-Item -LiteralPath $archivePath
  }

  Compress-Archive -Path (Join-Path $stagingDirectory "*") -DestinationPath $archivePath -CompressionLevel Optimal
  Write-Host "Release ZIP created: $archivePath"
}
finally {
  if (Test-Path -LiteralPath $stagingDirectory) {
    Remove-Item -LiteralPath $stagingDirectory -Recurse -Force
  }
}
