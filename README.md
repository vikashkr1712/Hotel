# Hotel

A full-stack hotel booking project with a React/Vite frontend and a Node.js backend API.

## Project Structure

```text
Hotel/
  backend/    Node.js API server
  frontend/   React + Vite client
```

## Frontend

The frontend is built with React, Vite, React Router, and React Icons.

```bash
cd frontend
npm install
npm run dev
```

Production build:

```bash
cd frontend
npm run build
```

## Backend

The backend is a Node.js HTTP server with API routes for rooms, services, testimonials, bookings, newsletter, and health checks.

```bash
cd backend
npm install
npm start
```

Default local backend URL:

```text
http://localhost:5000
```

Health check:

```text
GET /api/health
```

## Deployment

Deploy the backend on Render and the frontend on Vercel from this same GitHub repository.
