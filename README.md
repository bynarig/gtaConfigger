# GTA Configurator

## Overview

This project is a web application built with a **React** frontend and an **Express** backend. The app uses **pnpm** for dependency management, **Vite** for building the frontend, and **esbuild** for bundling the server in production. Docker is used for containerization to run both the client and server.

## Prerequisites

Make sure you have the following tools installed:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [pnpm](https://pnpm.io/installation)

---

## Development Setup (Docker)

To run the app in **development mode** with hot-reloading enabled, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/gta-configurator.git
    cd gta-configurator
    ```

2. **Run the development containers**:

    ```bash
    docker-compose -f docker-compose.dev.yml up --build
    ```

    This command will:
    - Build the server and client containers.
    - Start the backend using `nodemon` for hot-reload.
    - Start the frontend using `pnpm run dev`, which runs the Vite dev server.

3. **Access the app**:

    - Frontend: [http://localhost:8904](http://localhost:8904)
    - Backend: [http://localhost:8905](http://localhost:8905)

4. **Stop the containers**:

    To stop the running containers, press `Ctrl+C` or run:

    ```bash
    docker-compose -f docker-compose.dev.yml down
    ```

---

## Production Setup (Docker)

To run the app in **production mode** with fully optimized builds, follow these steps:

1. **Clone the repository** (if not already done):

    ```bash
    git clone https://github.com/bynarig/gtaConfigger.git
    cd gta-configurator
    ```

2. **Run the production containers**:

    ```bash
    docker-compose -f docker-compose.prod.yml up --build
    ```

    This command will:
    - Build the production-optimized versions of the server and client.
    - Serve the frontend using the Vite build output.
    - Run the backend using the bundled production build.

3. **Access the app**:

    - Frontend: [http://localhost:8904](http://localhost:8904)
    - Backend: [http://localhost:8905](http://localhost:8905)

4. **Stop the containers**:

    To stop the production containers, press `Ctrl+C` or run:

    ```bash
    docker-compose -f docker-compose.prod.yml down
    ```

---

## Additional Commands

### Rebuilding Containers

If you make changes to the Dockerfiles or dependencies, you can rebuild the containers by running:

```bash
docker-compose -f docker-compose.dev.yml up --build  # For development
docker-compose -f docker-compose.prod.yml up --build  # For production
```

### Cleaning Up
To stop and remove all containers, networks, and volumes:

```bash
docker-compose -f docker-compose.dev.yml down --volumes  # For development
docker-compose -f docker-compose.prod.yml down --volumes  # For production
```