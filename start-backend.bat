@echo off
echo ========================================
echo     StyleXX Backend (Node.js)
echo ========================================
echo.
cd /d "C:\Users\khara\OneDrive\Desktop\stylexx\backend"
echo Installing dependencies...
call npm install
echo.
echo Starting backend on http://localhost:5000
echo Press Ctrl+C to stop
echo.
call npm run dev
pause
