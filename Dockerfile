# image继承（官方推荐）
# https://hub.docker.com/_/node
FROM node:12-slim

# 拷贝当前所有内容
COPY . /usr/src/VMS

WORKDIR /usr/src/VMS

# 编译过程进行安装
RUN npm install --registry=https://registry.npm.taobao.org

# 暴露 80 端口，允许外界连接此借口
EXPOSE 80

# 启动container后，自动运行的命令
# RUN可以有多个，CMD只能有一个
CMD [ "npm", "start" ]
