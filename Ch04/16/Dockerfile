FROM node:12.18.0

ENV NODE_ENV=development
ENV PORT=9000

WORKDIR /app

COPY . /app

RUN npm install

RUN npm test

EXPOSE $PORT

ENTRYPOINT ["npm", "start"]