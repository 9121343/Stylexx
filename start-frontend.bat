@echo off
echo ========================================
echo     StyleXX Frontend (Next.js)
echo ========================================
echo.
cd /d "C:\Users\khara\OneDrive\Desktop\stylexx\frontend"
echo Installing dependencies...
call npm install
echo.
echo Starting frontend on http://localhost:3000
echo Press Ctrl+C to stop
echo.
call npm run dev
pause
