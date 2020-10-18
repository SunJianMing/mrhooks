FROM keymetrics/pm2:latest-apline
WORKDIR /usr/app
ADD . /usr/app
RUN npm config set registry https://registry.npm.taobao.org/ && \
    npm i
EXPOSE 3000
CMD ["pm2-runtime",'start','process.yml']