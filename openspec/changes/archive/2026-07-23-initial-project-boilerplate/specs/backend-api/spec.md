## ADDED Requirements

### Requirement: Health check endpoint
The system SHALL expose a `GET /api/health` endpoint that returns the application status.

#### Scenario: Health check returns OK
- **WHEN** a client sends `GET /api/health`
- **THEN** the response SHALL have HTTP status 200
- **THEN** the response body SHALL contain a JSON object with a `status` field equal to `"healthy"`

### Requirement: SQLite database configured
The system SHALL use SQLite as its database provider via Entity Framework Core.

#### Scenario: Database file created on startup
- **WHEN** the application starts for the first time
- **THEN** a SQLite database file SHALL be created in the project directory

### Requirement: CORS configured for frontend
The backend SHALL allow cross-origin requests from the Vite dev server origin (`http://localhost:5173`).

#### Scenario: CORS allows frontend origin
- **WHEN** a request arrives from `http://localhost:5173`
- **THEN** the response SHALL include the `Access-Control-Allow-Origin` header set to `http://localhost:5173`

### Requirement: Project builds successfully
The backend project SHALL build without errors using `dotnet build`.

#### Scenario: Build succeeds
- **WHEN** `dotnet build` is run from the `backend/` directory
- **THEN** the build SHALL complete with exit code 0 and no errors
