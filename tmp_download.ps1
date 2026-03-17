$urls = @{
    'hubspot' = 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/hubspot.svg';
    'salesforce' = 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/salesforce.svg';
    'sns' = 'https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/master/dist/ApplicationIntegration/SimpleNotificationService.png';
    'sqs' = 'https://raw.githubusercontent.com/awslabs/aws-icons-for-plantuml/master/dist/ApplicationIntegration/SimpleQueueService.png';
    'webhook' = 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/webhooks.svg';
    'http' = 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/hypertexttransferprotocol.svg'
}

# Add fallbacks or alternatives if some fail
$alternatives = @{
    'webhook' = 'https://api.iconify.design/mdi:webhook.svg';
    'http' = 'https://api.iconify.design/mdi:earth.svg'
}

if (!(Test-Path -Path 'src/assets')) {
    New-Item -ItemType Directory -Path 'src/assets' -Force | Out-Null
}

foreach ($key in $urls.Keys) {
    $url = $urls[$key]
    $ext = if ($url -match '\.svg') { '.svg' } else { '.png' }
    $dest = "src/assets/$key$ext"
    
    try {
        Write-Host "Downloading $key from $url..."
        Invoke-WebRequest -Uri $url -OutFile $dest -ErrorAction Stop
        Write-Host "Successfully downloaded $key to $dest"
    } catch {
        Write-Host "Failed to download $key from $url"
        # Try Alternative
        if ($alternatives.ContainsKey($key)) {
            $altUrl = $alternatives[$key]
            $altExt = if ($altUrl -match '\.svg') { '.svg' } else { '.png' }
            $dest = "src/assets/$key$altExt"
            try {
                Write-Host "Trying alternative for $key: $altUrl..."
                Invoke-WebRequest -Uri $altUrl -OutFile $dest -ErrorAction Stop
                Write-Host "Successfully downloaded alternative $key to $dest"
            } catch {
                Write-Host "Failed alternative for $key: $_"
            }
        }
    }
}
