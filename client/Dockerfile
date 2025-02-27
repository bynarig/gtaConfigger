# syntax=docker/dockerfile:1
FROM node:23-alpine3.20

WORKDIR /app

RUN npm install -g pnpm && npm cache clean --force

ARG NODE_ENV=production

ENV NODE_ENV=$NODE_ENV

RUN if [ "$NODE_ENV" = "development" ]; then npm install -g vite else npm install -g serve && npm install -g vite; fi

COPY package.json pnpm-lock.yaml ./

RUN if [ "$NODE_ENV" = "development" ]; then pnpm install; else pnpm install --frozen-lockfile --production; fi

COPY . .

EXPOSE 8904