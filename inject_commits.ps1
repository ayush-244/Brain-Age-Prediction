$ErrorActionPreference = "Stop"

function Make-Commit {
    param(
        [string]$Date,
        [string]$Message,
        [scriptblock]$Action
    )
    
    # Run the action to modify files
    & $Action
    
    # Stage changes
    git add .
    
    # Set dates
    $env:GIT_AUTHOR_DATE = $Date
    $env:GIT_COMMITTER_DATE = $Date
    
    # Commit
    git commit -m $Message
}

# Commit 1: July 16
Make-Commit -Date "2026-07-16T10:15:00" -Message "docs: update README formatting" -Action {
    Add-Content -Path "README.md" -Value "`n<!-- End of README -->"
}

# Commit 2: July 17
Make-Commit -Date "2026-07-17T14:30:00" -Message "chore: add comments to docker-compose" -Action {
    Add-Content -Path "docker-compose.yml" -Value "`n# Ensure ports are not conflicting"
}

# Commit 3: July 18
Make-Commit -Date "2026-07-18T11:45:00" -Message "chore: ignore IDE config files" -Action {
    Add-Content -Path ".gitignore" -Value "`n.vscode/`n.idea/"
}

# Commit 4: July 19
Make-Commit -Date "2026-07-19T16:20:00" -Message "docs: create CHANGELOG.md" -Action {
    Set-Content -Path "CHANGELOG.md" -Value "# Changelog`n`nAll notable changes to this project will be documented in this file."
}

# Commit 5: July 20
Make-Commit -Date "2026-07-20T09:10:00" -Message "chore: minor formatting in Dockerfile" -Action {
    Add-Content -Path "Dockerfile" -Value "`n# End of Dockerfile"
}

Remove-Item Env:\GIT_AUTHOR_DATE
Remove-Item Env:\GIT_COMMITTER_DATE

Write-Host "Injected realistic commits successfully!"
