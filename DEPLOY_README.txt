Production Docker + TLS Deployment Instructions
==============================================

This project contains:

- recruiter-search-backend (Node.js backend)
- recruiter-search-frontend (Vite React frontend)
- docker-compose.yml (for full-service deployment)
- deploy-scripts (helper scripts for running locally or via Docker)

1. Backend:
   The backend is a Node.js Express API inside /recruiter-search-backend.
   It includes a Dockerfile for production deployment on Render or any Docker service.

2. Frontend:
   The frontend is a Vite React single-page app inside /recruiter-search-frontend.
   It builds into /dist and serves via nginx or a static host such as Render Static Site.

3. Environment Variables (backend):
   CLEARBIT_KEY=your_clearbit_key
   HUNTER_KEY=your_hunter_key
   SERPAPI_KEY=your_serpapi_key
   PORT=4000

4. Deployment (Recommended for non-coders):
   - Upload entire project to GitHub.
   - Deploy backend on Render as a Docker Web Service.
   - Deploy frontend on Render as a Static Site.
   - Update App.jsx to point frontend to the backend URL.

5. Notes:
   - Do not expose API keys publicly.
   - Ensure Root Directory for backend in Render is recruiter-search-backend.
   - Ensure Dockerfile Path is recruiter-search-backend/Dockerfile.
