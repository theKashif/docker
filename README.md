# Multi-Docker App: Frontend & Backend

A streamlined Docker application showcasing a full-stack setup with live code updates.

## Features

- Frontend: Nginx serving static HTML/JS
- Backend: Node.js Express API
- Docker Compose for easy development setup
- Live code reloading for both frontend and backend
- Nginx reverse proxy for API request handling

## Quick Start

1. Clone the repository
2. Run `docker-compose up`
3. Access the application at `http://localhost:8080`

## Docker Images

- Frontend: `bekashif/docker:frontend`
- Backend: `bekashif/docker:backend`

## Pull and run:


- docker pull bekashif/docker:frontend
- docker pull bekashif/docker:backend
- docker-compose up



## Development

Make live updates to code:
- Frontend: Refresh browser to see changes
- Backend: Changes auto-reloaded by nodemon


