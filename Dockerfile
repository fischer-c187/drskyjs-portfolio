FROM node:21-alpine3.18 as build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:1.25.4-alpine3.18 as runner
COPY --from=build /app/dist /usr/share/nginx/html
