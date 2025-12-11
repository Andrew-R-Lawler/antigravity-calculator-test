# Go + React Calculator App

A simple calculator application built with a **Go (Gin)** backend and a **React (TypeScript)** frontend.

## Features
- **Arithmetic Operations**: Addition, Subtraction, Multiplication, Division.
- **Chained Calculations**: Supports continuous operations (e.g., `2 + 2 + 2 = 6`).
- **Glassmorphism UI**: Modern, responsive interface.
- **Single Port Deployment**: Backend serves the frontend build.

## Tech Stack
- **Backend**: Go 1.23, Gin Framework
- **Frontend**: React 18, TypeScript, Vite
- **Styling**: CSS Modules / Inline styles

## Prerequisites
- [Go](https://go.dev/dl/) (v1.23+)
- [Node.js](https://nodejs.org/) (v18+)

## Getting Started

### 1. Build the Frontend
Compile the React application to static files.

```bash
cd frontend
npm install
npm run build
```

### 2. Run the Server
Start the Go server, which will serve both the API and the React frontend.

```bash
cd ..
cd backend
go mod tidy
go run main.go
```

### 3. Usage
Open your browser to `http://localhost:8080`.

- The page is served by Gin.
- Calculations are handled by the API at `/calculate`.
