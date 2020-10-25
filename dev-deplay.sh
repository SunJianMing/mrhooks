echo '开始构建'
echo '拉取hooks-test代码'
git pull origin hooks-test
echo '构建容器'
docker-compose up -d --force-recreate --build