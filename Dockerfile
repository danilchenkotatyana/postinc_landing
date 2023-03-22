FROM node:lts

WORKDIR /app
ENV NODE_ENV=production

RUN npm install -g npm@8.9.0
COPY package.json  ./package.json
RUN npm install
RUN npm i -g next

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . .
RUN npm run build

EXPOSE 3000

ENV PORT 3000
