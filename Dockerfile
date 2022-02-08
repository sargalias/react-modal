FROM node:18.11.0-alpine3.16 as base
WORKDIR /app

FROM base as dev
COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY . .
EXPOSE 3000
CMD npm start
