## Context

Greenfield todo application. No existing code. The project needs a backend API (C# .NET) and a frontend UI (ReactJS + Vite) with SQLite for storage. The two projects will be siblings under a monorepo-style root.

## Goals / Non-Goals

**Goals:**
- Scaffold a working C# .NET Web API project with SQLite
- Scaffold a working ReactJS + Vite frontend project
- Establish CORS configuration so the frontend can call the backend
- Provide a health-check endpoint (`GET /api/health`) and a basic frontend page that calls it
- Use SQLite via Entity Framework Core for data access

**Non-Goals:**
- Todo CRUD endpoints or UI (future change)
- Authentication or user management
- Deployment or containerization
- Production-grade logging, monitoring, or error handling

## Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Backend framework | ASP.NET Core Web API (.NET 8) | Modern, cross-platform, excellent EF Core integration |
| ORM | Entity Framework Core | First-class SQLite support, migrations, minimal boilerplate |
| Database | SQLite via `Microsoft.EntityFrameworkCore.Sqlite` | Zero-config, file-based, perfect for local dev and small apps |
| Frontend framework | React + Vite | Fast dev server, HMR, modern tooling |
| API client | `fetch` (built-in) | No extra dependency for simple calls; can upgrade to axios later |
| Project layout | `backend/` and `frontend/` siblings | Clear separation, independent build pipelines |
| CORS | Allow `http://localhost:5173` (Vite dev server) | Required for local development |

## Risks / Trade-offs

- **SQLite concurrency** → SQLite handles single-writer scenarios well for a todo app; if multi-user write contention grows, migrate to PostgreSQL later
- **No auth from day one** → Acceptable for a demo/todo app; auth can be added as a future capability
- **CORS open in dev** → Only allows the Vite dev server origin; production would restrict further
