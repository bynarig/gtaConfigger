# syntax=docker/dockerfile:1

# Base image
FROM node:23-alpine3.20

# Set the working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Build argument to determine environment (default to production)
ARG NODE_ENV=production

# Set environment variable based on the build argument
ENV NODE_ENV=$NODE_ENV

# Install development dependencies in development mode
RUN if [ "$NODE_ENV" = "development" ]; then npm install -g vite; fi

# Copy package.json and pnpm-lock.yaml for caching layers
COPY package.json pnpm-lock.yaml ./

# Install dependencies (all in development, only prod dependencies in production)
RUN if [ "$NODE_ENV" = "development" ]; then pnpm install; else pnpm install --frozen-lockfile --production; fi

# Copy the rest of the application code
COPY . .

# Expose port for Vite dev server or production app
EXPOSE 8904

# Command for running the application
# In development: start Vite dev server
# In production: build the app and serve it with `serve`
CMD if [ "$NODE_ENV" = "development" ]; then pnpm run dev; else pnpm run prod; fi
