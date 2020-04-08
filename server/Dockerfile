FROM node:10.14.0-alpine
WORKDIR /usr/app/server
COPY package.json .
RUN yarn install
COPY . .
ENTRYPOINT [ "yarn", "start" ]
