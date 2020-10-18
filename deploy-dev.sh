echo '开始构建。。。'
echo '拉取最新develop代码'
git pull origin develop
echo '构建容器'
docker-compose up -d --force-recreate --build