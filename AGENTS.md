# test-repo

Full-stack todo application with ASP.NET Core backend and React + Vite frontend.

## Commands

### Backend
- `dotnet run` — start the API server (from `backend/`)
- `dotnet test` — run backend tests

### Frontend
- `npm run dev` — start Vite dev server (from `frontend/`)
- `npm run build` — production build
- `npm test` — run frontend tests

## Structure

- `backend/` — ASP.NET Core Web API with SQLite
- `frontend/` — React + Vite SPA
- `openspec/` — OpenSpec specs and changes

## Conventions

- Backend: .NET 9, EF Core with SQLite
- Frontend: React + TypeScript + Vite
- Use `git checkout -b` for feature branches; PRs merge to `main`
