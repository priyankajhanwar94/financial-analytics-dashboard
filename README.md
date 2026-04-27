# Financial Analytics Dashboard
A responsive full-stack dashboard built with Angular (Nx) and Node.js (Express) featuring authentication, charts, and API-driven analytics.

## Features
- Authentication system (token-based)
- Interactive dashboard charts
- Fully responsive UI (mobile, tablet, desktop)
- Paginated & searchable transactions
- Mock backend APIs with auth middleware

## Tech Stack
- Angular (Nx Workspace)
- Node.js + Express
- Tailwind CSS
- RxJS
- ApexCharts

## Deployment
Live App: https://financial-analytics-dashboard-two.vercel.app/login
Frontend: Vercel
Backend: Render

## Demo Credentials
Username: abc  
Password: 123

## API Overview
- POST /login
- GET /weekly-activity
- GET /expense-statics
- GET /balance-history
- GET /recent-transactions
- GET /transactions

## Architecture
Frontend handles UI + state management
Backend provides mock secured APIs
Token-based auth middleware protects routes

## Run Locally
- Backend (Node + Express)
cd api/
npm install
npm run dev
Runs on http://localhost:5000

- Frontend (Angular - Nx)
npx nx serve financial-analytics-dashboard
Runs on http://localhost:4200

- update environment.ts file to point to backend
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000'
};