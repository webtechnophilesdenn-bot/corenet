# Test database connection with different passwords

$passwords = @(
    "Postgres@123",
    "new_password_123",
    "password",
    "corenet123",
    "admin123"
)

foreach ($pass in $passwords) {
    Write-Host "`nTrying password: $pass" -ForegroundColor Yellow
    
    try {
        # Test connection
        $env:PGPASSWORD = $pass
        $result = & "C:\Program Files\PostgreSQL\16\bin\psql.exe" -U corenet_user -d corenet -c "SELECT '✅ Connected successfully' as status;" 2>&1
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✅ SUCCESS! Password found: $pass" -ForegroundColor Green
            Write-Host "Connection test output: $result"
            break
        } else {
            Write-Host "❌ Failed with password: $pass" -ForegroundColor Red
        }
        
        # Clear the environment variable
        Remove-Item Env:\PGPASSWORD -ErrorAction SilentlyContinue
        
    } catch {
        Write-Host "❌ Error with password: $pass" -ForegroundColor Red
        Write-Host "Error: $_"
    }
}