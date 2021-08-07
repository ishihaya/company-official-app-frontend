FROM node:14.17-alpine
WORKDIR /company-official-app-frontend

COPY package.json ./
RUN yarn install

COPY . .

EXPOSE 3000