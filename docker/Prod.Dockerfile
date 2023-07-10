# FROM gmirror/gpk-ruby-base-new:latest
FROM gmirror/gpk-main-web-node:latest

COPY . /app
# WORKDIR /app

# RUN npm i
RUN npm run build

# RUN npm i -g pm2

COPY docker/nginx.conf /etc/nginx/nginx.conf