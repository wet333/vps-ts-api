FROM node:16-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

RUN npm install typescript

RUN npm run prod-build

EXPOSE 3000

CMD ["npm", "run", "prod-start"]