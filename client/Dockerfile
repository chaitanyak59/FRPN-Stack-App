FROM node:10.14.0-alpine
WORKDIR /usr/app/client
COPY package.json .
RUN yarn install
COPY . .
EXPOSE 3000
ENTRYPOINT ["yarn","start"]
