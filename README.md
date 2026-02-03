# SOFTWARE ARCHITECTURE QUALIFICATION

Submitted by: AT25-1

[QUICK START / VERSI CEPAT]
Jalanin pakai "LAUNCH_ME.bat" kalau gamau pusing (literally tinggal double-click).
Script ini bakal otomatis setup database, nyalain semua services, dan jalanin test case-nya.

PENTING:
Terus pastiin selalu liat command prompt yang utama (Jendela Launcher).
Command prompt utama ini yang bakal nge-run 3 case Design Pattern secara berurutan.

---

For those who prefer the manual or detailed explanation, read below:

## HOW TO RUN

1. Ensure "Docker Desktop" is running in the background.
2. Double-click the file named "LAUNCH_ME.bat".
   (Note: If Windows protects your PC, click 'More Info' -> 'Run Anyway').

## WHAT THE LAUNCHER DOES

1. Checks if Docker is active.
2. Wakes up the PostgreSQL Database container.
3. Run npm install on all microservice.
4. Automatically creates the database tables (Prisma Push) - No manual setup needed.
5. Launches all 4 Microservices (Auth, User, Post, Gateway) minimized in the taskbar.
6. Runs the 3 Design Pattern cases sequentially in the main window.
7. Opens the Swagger UI documentation in your default browser.

## TROUBLESHOOTING

- If the launcher crashes immediately, try right-clicking and selecting "Run as Administrator".
- If ports are blocked, ensure no other Node.js processes are using ports 3000, 3001, 3002, or 8080.
- If the Design Patterns fail to run, ensure you have internet access to download the initial dependencies (npx/ts-node).
- Swagger UI is accessible at: http://localhost:8080/api

## DEPENDENCIES

- Node.js (Latest LTS recommended)
- Docker Desktop

## Project Notice

This project is an **independent implementation** created by me
for learning and teaching purposes related to
courses at **Bina Nusantara University**.

The problem scenario is inspired by an academic case.
All source code, architecture, and implementation
are my original work.

This repository is public for **portfolio and educational viewing only**.
Reuse for academic submission or grading purposes
is **strongly discouraged**.

## - Saputra Tanuwijaya ( AT )
