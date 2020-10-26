FROM keymetrics/pm2:latest-alpine
WORKDIR /usr/app
ADD . /usr/app
RUN config set registry http://registry.npm.taobao.org/ && \
    npm i
CMD [ "pm2-runtime","start","process.yml" ]