FROM daocloud.io/node:4.2.4-onbuild

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

RUN npm install

EXPOSE 80

ENTRYPOINT ["node", "server.js"]