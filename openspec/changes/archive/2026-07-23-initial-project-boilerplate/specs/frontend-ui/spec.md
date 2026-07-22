## ADDED Requirements

### Requirement: Vite dev server starts
The frontend SHALL use Vite as its development server and build tool.

#### Scenario: Dev server starts
- **WHEN** `npm run dev` is run from the `frontend/` directory
- **THEN** the Vite dev server SHALL start on `http://localhost:5173`

### Requirement: Frontend calls backend health endpoint
The frontend SHALL display the backend health status by calling `GET /api/health`.

#### Scenario: Health status displayed on page load
- **WHEN** the frontend page loads
- **THEN** it SHALL make a `GET` request to `http://localhost:5172/api/health`
- **THEN** the response status SHALL be displayed on the page

### Requirement: Project builds successfully
The frontend project SHALL build without errors using `npm run build`.

#### Scenario: Build succeeds
- **WHEN** `npm run build` is run from the `frontend/` directory
- **THEN** the build SHALL complete with exit code 0 and no errors
