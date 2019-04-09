## SET DEBUG=my-server:* & npm start



**前后端同构实际渲染了两次，服务端一次，主要是提前渲染出html，之后客户端还要渲染一次这样react才具备完整的生命周期，事件才会生效。(如果想要动态交互效果，使用 React 服务器端渲染，必须也配合使用浏览器端渲染。)所以index.ejs还是需要注入打包好了的bundle.js。**



**app.js为后端的入口文件，后端也需要处理react和es6还有css语法，所以通过start.js拦截app.js，进行处理后再导出app.js。bin下的www通过start.js启动服务。**