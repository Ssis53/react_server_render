var express = require('express');
var router = express.Router();
import React from 'react'; 
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom'

import Footer from '../public/javascripts/reactApp/src/components/footer/Footer';
import { SwitchRouter } from '../public/javascripts/reactApp/src/SwitchRouter';


/* GET home page. */

/**
 * 使用的是react-router-dom的StaticRouter，所以本质还是前端路由
 * 所以要保证请求路径不论是什么都能匹配到这个handle回掉中处理
 * 然后通过StaticRouter匹配不同组件。
 * 所以将路径改为"*"
 */
router.get('*', function(req, res, next) {
  const context = {};
  let body = ReactDOMServer.renderToString(
    <React.Fragment>
      <StaticRouter location={req.url} context={context} >
        <SwitchRouter />
        <Footer />
      </StaticRouter>
    </React.Fragment>
  );
  if (context.url) {
    res.writeHead(302, {
      Location: context.url
    });
    res.end();
  } else {
    res.render('index', { 
      body: body
    });
  }
});

module.exports = router;
