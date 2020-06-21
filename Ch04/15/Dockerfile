FROM node:12.18.0

ENV NODE_ENV=development
ENV PORT=45019

WORKDIR /app

COPY . /app

RUN npm install

RUN npm install -g browserify

RUN npm install -g testling

EXPOSE $PORT

ENTRYPOINT ["npm", "test"]