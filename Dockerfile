FROM node:latest as build
WORKDIR /app
COPY . ./
RUN yarn install --frozen-lockfile
RUN yarn run build

FROM nginx:1.25.3-alpine-slim
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
