## POR EL MOMENTO ESTÁ EJECUTÁNDOSE
## EN MODO DE DESARROLLO

FROM node:alpine3.20
WORKDIR /app
COPY package*.json vite.config.js ./
RUN npm install
COPY . .
ENV PORT=5173
EXPOSE 5173
CMD [ "npm", "run", "dev" ]

# FROM nginx:alpine
# COPY --from=0 /app/build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]