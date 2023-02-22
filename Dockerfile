FROM node:current-alpine AS base

WORKDIR /app
COPY package.json yarn.lock ./

FROM base as builder
WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile
RUN yarn next build

FROM base as runner
WORKDIR /app

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 8080

ENV PORT 8080
ENV NODE_ENV production
CMD ["node", "server.js"]