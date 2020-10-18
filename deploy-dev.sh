###
 # @Author: sjm
 # @Date: 2020-10-18 14:17:06
 # @LastEditors: sjm
 # @LastEditTime: 2020-10-18 14:18:52
 # @FilePath: /mrHooks/deploy-dev.sh
### 
echo '开始构建'
echo '拉取代码'
git pull
echo '开始构建容器'
docker-compose -d --force-recreate --build