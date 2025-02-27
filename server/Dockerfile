# syntax=docker/dockerfile:1

FROM node:23-alpine3.20

WORKDIR /app

RUN npm install -g pnpm && npm cache clean --force

ARG NODE_ENV=production

ENV NODE_ENV=$NODE_ENV

RUN if [ "$NODE_ENV" = "development" ]; \
    then npm install -g tsx; \
    else npm install -g esbuild ; \
    fi

COPY package.json pnpm-lock.yaml ./

RUN if [ "$NODE_ENV" = "development" ]; \
    then pnpm install; \
    else pnpm install && pnpm approve-builds -g; \
    fi

COPY . .

EXPOSE 8905
