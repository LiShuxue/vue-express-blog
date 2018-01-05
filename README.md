# Vue-Express-Blog

## 一、介绍

1. 本项目是一个个人博客系统，还在开发中，大致框架已经完成。

2. 前台使用了Vue全家桶（vue + vue-router + vuex + axios + element-ui），后台使用了 Node + Express + MongoDB

3. 构建工具使用 webpack

4. 任务处理工具使用了 Gulp

## 二、项目运行

1. 确保本地环境有node，npm，mongodb。并且 node >= 4.0.0, npm>= 3.0.0

2. 确保mongodb连接端口是27017，如果不是，可以手动修改项目中的 Back-end/db/db_config.js 中的端口号。

3. 确保执行sudo操作的时候不用输入密码(Mac环境)。因为启动的时候需要先确保MongoDB已经启动，mac使用 sudo mongod 命令来启动。

4. checkout或者download项目，进入项目目录，执行<pre><code> npm install </code></pre>

5. 等依赖下载完之后，执行<pre><code> gulp </code></pre>