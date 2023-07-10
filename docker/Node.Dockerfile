FROM gmirror/gpk-ruby-base:latest

RUN npm i -g n

RUN n 12.10.0

RUN npm config set registry http://registry.npm.taobao.org

COPY . /app
WORKDIR /app

RUN npm i
# RUN npm run build

RUN npm i -g pm2
