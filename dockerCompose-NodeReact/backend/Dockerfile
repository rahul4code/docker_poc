FROM node:latest
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . /app/
EXPOSE 3001
CMD [ "node", "server.js" ]
