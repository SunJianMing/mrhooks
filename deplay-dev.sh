echo '开始构建...'
echo '拉取dev分支代码'
git pull origin dev
echo '构建容器'
docker-compose down
docker-compose up -d --force-recreate --build