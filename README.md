## cnode-react-app

> 一个学习  reactjs 的 demo，基于 CNode 社区提供的 API,以 react 组件化的开发思路，练习了基于 react 技术栈为主的前端单页面开发方式。

## 项目预览
![](https://raw.githubusercontent.com/monster1935/cnode-react-app/master/public/cnodejs-react.png)

## 在线demo
https://wesliedebug.github.io/cNode/

## 技术栈

- 脚手架工具
  官方脚手架工具 [create-react-app](https://github.com/facebookincubator/create-react-app)
- 状态管理
  [redux](https://redux.js.org/)，[redux莞式教程](https://github.com/kenberkeley/redux-simple-tutorial), [react-redux](https://github.com/reactjs/react-redux)
- 前端路由管理
  [react-router](https://reacttraining.com/react-router/web/guides/quick-start/installation)
- 打包编译
  [webpack](https://doc.webpack-china.org/)
- ES6
  [ECMAScript 6 入门](http://es6.ruanyifeng.com/)

## TODOLIST

- [x] 客户端页面展示
- [x] 侧边栏积分榜显示

## npm scripts

```bash
## 本地调试
yarn start

## 打包

yarn run build

## 发布至github repository gh-pages分支,使用该功能需要yarn add gh-pages,
## 并在package.json中配置网站的路径，如该示例中的homepage字段

yarn run deploy

```
## 总结

第一次尝试使用 react 进行前端单页面开发。react 与 vue 都是 MVVM 框架，但是在react的开发中还是有一些地方存在不同，目前尚未进行深入研究及实践。在这个小项目中感受最深的有以下几点：

- 组件的写法

react 中导出的是一个含有jsx语法的类， vue 的开发中组件一般以vue的单文件组件写法，导出一个对象。
- 关于路由的使用

react 中使用 react-router 进行前端路由的管理，同样含有 HashRouter 以及 BrowserRouter。其中 BrowserRouter 需要托管静态主页的服务器配合进行配置。

- 属性的写法

react 中 jsx 语法中给 html 绑定属性值，部分属性名称发生变化，如 class 需要写成 className, for 需要写成 htmlFor，内联样式 style 属性需要使用驼峰的写法等。



## 写在最后

感谢 [CNode](https://cnodejs.org/) 社区的提供的 API，一个有温度的社区。

## 笔记

