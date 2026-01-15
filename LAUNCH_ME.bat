@echo off
TITLE Microservices & Design Patterns Launcher
CLS

ECHO ======================================================
ECHO    SOFTWARE ARCHITECTURE QUALIFICATION AT25-1 
ECHO ======================================================
ECHO.

ECHO [1/6] Checking Docker...
docker info >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    ECHO [ERROR] Docker is NOT running! 
    ECHO Please start Docker Desktop and run this script again.
    PAUSE
    EXIT
)
ECHO [OK] Docker is active.

ECHO.
ECHO [2/6] Checking Dependencies (Auto-Install)...

IF NOT EXIST "auth-service\node_modules" (
    ECHO    - Installing Auth Service dependencies...
    cd auth-service
    call npm install --silent
    cd ..
) ELSE (
    ECHO    - Auth Service is ready.
)

IF NOT EXIST "user-service\node_modules" (
    ECHO    - Installing User Service dependencies...
    cd user-service
    call npm install --silent
    cd ..
) ELSE (
    ECHO    - User Service is ready.
)

IF NOT EXIST "post-service\node_modules" (
    ECHO    - Installing Post Service dependencies...
    cd post-service
    call npm install --silent
    cd ..
) ELSE (
    ECHO    - Post Service is ready.
)

IF NOT EXIST "api-gateway\node_modules" (
    ECHO    - Installing API Gateway dependencies...
    cd api-gateway
    call npm install --silent
    cd ..
) ELSE (
    ECHO    - API Gateway is ready.
)

ECHO.
ECHO [3/6] Waking up Database...
docker-compose up -d
ECHO [OK] Database signal sent.
ECHO      Waiting 10s for Database to be ready...
timeout /t 10 /nobreak >nul

ECHO.
ECHO [4/6] Creating Database Tables (Prisma Push)...
cd auth-service
call npx prisma db push
cd ..
ECHO [OK] Database Tables Created.

ECHO.
ECHO [5/6] Launching Microservices (Minimized)...
start /min "Auth Service" cmd /k "cd auth-service && npm run start:dev"
start /min "User Service" cmd /k "cd user-service && npm run start:dev"
start /min "Post Service" cmd /k "cd post-service && npm run start:dev"
start /min "API Gateway"  cmd /k "cd api-gateway  && npm run start:dev"
ECHO [OK] Services are running in the background.

ECHO.
ECHO [6/6] Automating Design Patterns...
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