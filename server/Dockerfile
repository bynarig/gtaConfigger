# syntax=docker/dockerfile:1

# Base image
FROM node:23-alpine3.20

# Set working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Build argument to determine environment
ARG NODE_ENV=production

# Set environment variable
ENV NODE_ENV=$NODE_ENV

# Install nodemon in development mode
RUN if [ "$NODE_ENV" = "development" ]; \
    then npm install -g nodemon; \
    fi

# Copy package.json and pnpm-lock.yaml for caching
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy application files
COPY . .

# Expose port for the application
EXPOSE 8905

# In production, run the production build
# In development, use nodemon for hot reload
CMD if [ "$NODE_ENV" = "development" ]; \
    then nodemon --watch . src/app.ts; \
    else pnpm run prod; \
    fi
