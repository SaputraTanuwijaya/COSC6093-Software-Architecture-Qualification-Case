@echo off
TITLE Microservices & Design Patterns Launcher
CLS

ECHO ======================================================
ECHO     SOFTWARE ARCHITECTURE QUALIFICATION AT25-1 
ECHO ======================================================
ECHO.

ECHO [1/5] Checking Docker...
docker info >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    ECHO [ERROR] Docker is NOT running! 
    ECHO Please start Docker Desktop and run this script again.
    PAUSE
    EXIT
)
ECHO [OK] Docker is active.

ECHO.
ECHO [2/5] Waking up Database...
docker-compose up -d
ECHO [OK] Database signal sent.
ECHO      Waiting 10s for Database to be ready...
timeout /t 10 /nobreak >nul

ECHO.
ECHO [2.5/5] Creating Database Tables (Prisma Push)...
cd auth-service
call npx prisma db push
cd ..
ECHO [OK] Database Tables Created.

ECHO.
ECHO [3/5] Launching Microservices (Minimized)...
start /min "Auth Service" cmd /k "cd auth-service && npm run start:dev"
start /min "User Service" cmd /k "cd user-service && npm run start:dev"
start /min "Post Service" cmd /k "cd post-service && npm run start:dev"
start /min "API Gateway"  cmd /k "cd api-gateway  && npm run start:dev"
ECHO [OK] Services are running in the background.

ECHO.
ECHO [4/5] Automating Design Patterns...
ECHO.
ECHO ------------------------------------------------------
ECHO    NOTE: The microservices are running minimized.
ECHO    Focus on this window for the Design Pattern Output.
ECHO ------------------------------------------------------
ECHO.
PAUSE

ECHO.
ECHO --- RUNNING CASE 1: BUILDER ---
call npx ts-node "Design Pattern\case-1\index.ts"
ECHO.
ECHO [End of Case 1]
PAUSE

ECHO.
ECHO --- RUNNING CASE 2: PROXY ---
call npx ts-node "Design Pattern\case-2\index.ts"
ECHO.
ECHO [End of Case 2]
PAUSE

ECHO.
ECHO --- RUNNING CASE 3: STATE ---
call npx ts-node "Design Pattern\case-3\index.ts"
ECHO.
ECHO [End of Case 3]

ECHO.
ECHO ======================================================
ECHO    ALL TASKS COMPLETE.
ECHO    Opening Swagger UI...
ECHO ======================================================

timeout /t 5
start http://localhost:8080/api

PAUSE