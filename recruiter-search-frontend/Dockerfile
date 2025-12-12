# Frontend Dockerfile (Vite build + nginx)
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
# remove default nginx conf and use a simple one that routes to index.html (for SPA)
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
