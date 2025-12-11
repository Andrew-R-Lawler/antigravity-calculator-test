# Go + React Calculator App

A simple calculator application built with a **Go (Gin)** backend and a **React (TypeScript)** frontend.

## Features
- **Arithmetic Operations**: Addition, Subtraction, Multiplication, Division.
- **Chained Calculations**: Supports continuous operations (e.g., `2 + 2 + 2 = 6`).
- **Glassmorphism UI**: Modern, responsive interface.
- **Separate Backend/Frontend**: clear separation of concerns.

## Tech Stack
- **Backend**: Go 1.23, Gin Framework
- **Frontend**: React 18, TypeScript, Vite
- **Styling**: CSS Modules / Inline styles

## Prerequisites
- [Go](https://go.dev/dl/) (v1.23+)
- [Node.js](https://nodejs.org/) (v18+)

## Getting Started

### 1. Start the Backend
The backend handles the calculation logic.

```bash
cd backend
go mod tidy
go run main.go
```
*Server runs on `http://localhost:8080`*

### 2. Start the Frontend
The frontend provides the user interface.

```bash
cd frontend
npm install
npm run dev
```
*App runs on `http://localhost:5173`*

### 3. Usage
Open your browser to `http://localhost:5173`. Valid operations include `+`, `-`, `*`, `/`.
