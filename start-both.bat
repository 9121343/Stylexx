@echo off
echo ========================================
echo     StyleXX Full Stack Application
echo ========================================
echo.
echo This will start both servers:
echo 1. Backend API (Node.js) - http://localhost:5000
echo 2. Frontend App (Next.js) - http://localhost:3000
echo.
pause

echo Starting Backend Server...
start "StyleXX Backend" cmd /k "cd /d C:\Users\khara\OneDrive\Desktop\stylexx\backend && npm run dev"

timeout /t 5 /nobreak > nul

echo Starting Frontend Server...
start "StyleXX Frontend" cmd /k "cd /d C:\Users\khara\OneDrive\Desktop\stylexx\frontend && npm run dev"

echo.
echo ========================================
echo Both servers are starting!
echo ========================================
echo.
echo Backend API: http://localhost:5000
echo Frontend App: http://localhost:3000
echo.
echo Close this window when done.
pause > nul
