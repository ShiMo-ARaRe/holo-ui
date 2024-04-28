
# node镜像
FROM node:16.13.1 as build-stage

# 指定接下来的工作路径为/app  - 类似于cd命令
WORKDIR /app


# 拷贝前端项目 当前目录下的所有文件到app目录下(./指当前所有的代码路径 .指上一步cd到app的路径)
COPY . .

# 设置阿里云npm镜像
#RUN npm config set registry https://registry.npmmirror.com


# 安装依赖
#RUN npm install
#既然在 VScode 中打包好了的话，那依赖也不用安装了！


# 打包 - 目的：丢到nginx下跑
#RUN npm run build
# 我们不在这打包，我们直接在外面（VScode）打包，然后把 dist目录 拷贝到容器中就行了，免得出错


# nginx镜像
FROM nginx:latest as production-stage


# # 拷贝前端vue项目打包后生成的文件到nginx下运行
COPY --from=build-stage /app/dist /usr/share/nginx/html


# 暴露80端口
EXPOSE 80


# 使用daemon off的方式将nginx运行在前台保证镜像不至于退出
CMD ["nginx", "-g", "daemon off;"]