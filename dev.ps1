# # Filename: dev.ps1
#
# Launches each dev server below in its own PowerShell window.
# Run from the repo root: .\dev.ps1
#
# To reuse in another project: copy this file to that repo's root and
# edit $Processes below. Nothing past that line needs to change.

$Processes = @(
    @{ Name = "web"; Path = "."; Command = "npm run dev" }
)

$root = $PSScriptRoot

foreach ($proc in $Processes) {
    $cwd = Join-Path $root $proc.Path

    Start-Process powershell -ArgumentList @(
        "-NoExit", "-Command",
        "`$Host.UI.RawUI.WindowTitle = '$($proc.Name)'; cd '$cwd'; $($proc.Command)"
    )
}
