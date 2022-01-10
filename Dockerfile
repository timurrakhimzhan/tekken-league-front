# build environment
FROM node:16.6.0 as build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install && npm cache clean --force
COPY . ./
RUN npm run build

# production environment
FROM nginx:1.16.0-alpine
COPY --from=build /app/dist /var/www
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
