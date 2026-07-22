## 1. Backend Scaffolding

- [x] 1.1 Create `backend/` directory and scaffold ASP.NET Core Web API project with `dotnet new webapi`
- [x] 1.2 Add `Microsoft.EntityFrameworkCore.Sqlite` NuGet package
- [x] 1.3 Create `Models/TodoItem.cs` entity class
- [x] 1.4 Create `Data/AppDbContext.cs` with DbContext and SQLite connection string
- [x] 1.5 Create `Controllers/HealthController.cs` with `GET /api/health` endpoint
- [x] 1.6 Configure CORS in `Program.cs` to allow `http://localhost:5173`
- [x] 1.7 Configure SQLite and DbContext in `Program.cs`
- [x] 1.8 Verify `dotnet build` succeeds

## 2. Frontend Scaffolding

- [x] 2.1 Create `frontend/` directory and scaffold React + Vite project with `npm create vite@latest`
- [x] 2.2 Create `src/App.jsx` with a basic UI shell that calls `GET /api/health`
- [x] 2.3 Create `src/App.css` with minimal styling
- [x] 2.4 Configure Vite proxy in `vite.config.js` to forward `/api` to `http://localhost:5097`
- [x] 2.5 Verify `npm run dev` starts and page loads without errors
- [x] 2.6 Verify `npm run build` succeeds

## 3. Integration Verification

- [x] 3.1 Start backend (`dotnet run`) and confirm `GET /api/health` returns 200
- [x] 3.2 Start frontend (`npm run dev`) and confirm health status displays on page
- [x] 3.3 Run `dotnet build` and `npm run build` to confirm both projects build cleanly
