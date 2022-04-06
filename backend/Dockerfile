FROM node:latest

WORKDIR /backend

COPY package*.json ./

RUN yarn

COPY . .

COPY ./dist ./dist

EXPOSE 7000

CMD yarn start:dev