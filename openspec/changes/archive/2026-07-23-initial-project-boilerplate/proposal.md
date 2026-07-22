## Why

A todo application needs a clean, modern foundation. Setting up the project boilerplate establishes the directory structure, build tooling, and configuration for both the C# .NET backend and ReactJS frontend, enabling parallel development from day one.

## What Changes

- Scaffold a C# .NET Web API backend project with SQLite storage
- Scaffold a ReactJS + Vite frontend project
- Configure SQLite as the database provider
- Establish project directory structure and build tooling
- Wire up a health-check endpoint and a basic frontend page to confirm connectivity

## Capabilities

### New Capabilities
- `backend-api`: C# .NET Web API with SQLite persistence, health endpoint, and CORS configuration for the frontend
- `frontend-ui`: ReactJS + Vite application with a basic UI shell and connectivity to the backend

### Modified Capabilities

*(None — this is the initial project setup.)*

## Impact

- New `backend/` directory: C# .NET project files, controllers, models, data context, SQLite configuration
- New `frontend/` directory: ReactJS + Vite project files, components, API client
- New dependencies: `Microsoft.EntityFrameworkCore.Sqlite` (backend), `axios` or `fetch` (frontend)
- No existing code is modified — this is a greenfield project
