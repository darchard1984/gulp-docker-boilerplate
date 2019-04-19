FROM node:alpine

WORKDIR /code

COPY package.json /code
COPY package-lock.json /code

RUN npm install
RUN npm install -g gulp-cli
RUN npm install -g eslint
RUN npm install -g jasmine

COPY . .


