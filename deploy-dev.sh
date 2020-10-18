###
 # @Author: sjm
 # @Date: 2020-10-18 14:17:06
 # @LastEditors: sjm
 # @LastEditTime: 2020-10-18 15:24:22
 # @FilePath: /mrHooks/deploy-dev.sh
### 
echo '开始构建'
echo '拉取最新代码'
git pull origin master
echo '开始构建容器'
docker-compose down
docker-compose -d --force-recreate --build