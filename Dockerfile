FROM  node:22.14.0
WORKDIR /app
COPY package.json ./
RUN npm install 

COPY . /app/
EXPOSE 8080

CMD [ "node", "app.mjs" ]
