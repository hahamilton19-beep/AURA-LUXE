@echo off
echo ====================================================
echo   Pushing Aura Luxe to GitHub...
echo   Target: https://github.com/hahamilton19-beep/AURA-LUXE
echo ====================================================
cd /d "%~dp0"
git push -u origin main
if %ERRORLEVEL% EQU 0 (
    echo.
    echo ====================================================
    echo   SUCCESS! Pushed to https://github.com/hahamilton19-beep/AURA-LUXE
    echo ====================================================
) else (
    echo.
    echo Push encountered an error or needs browser authentication.
)
pause
