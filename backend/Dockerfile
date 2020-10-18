FROM keymetrics/pm2:latest-alpine
WORKDIR /usr/app
ADD . /usr/app
RUN npm config set registry http://registry.npm.taobao.org/ && \
    npm i
EXPOSE 3000
CMD ["pm2-runtime","start","process.yml"]
