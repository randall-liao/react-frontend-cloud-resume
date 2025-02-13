FROM node:alpine AS builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build


FROM nginx:alpine as RUNNER
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80
