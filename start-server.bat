@echo off
echo Starting Aura Luxe Local Server...
start "" "http://localhost:8080"
powershell -ExecutionPolicy Bypass -File "%~dp0serve.ps1"
pause
