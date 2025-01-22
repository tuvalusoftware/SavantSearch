FROM node:21-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:21-alpine AS production
WORKDIR /app
COPY --from=builder /app ./
RUN npm ci
EXPOSE 3000
RUN adduser -D -g '' savant && chown -R savant /app
USER savant
CMD ["npm", "start"]

