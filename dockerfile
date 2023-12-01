FROM node:18.17.0

WORKDIR /usr/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm","start" ]