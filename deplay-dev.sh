echo '开始构建 拉取hook分支代码'
git pull origin hook
echo '构建容器'
docker-compose down
docker-compose up -d --force-recreate --build
