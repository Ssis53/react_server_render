var express = require('express');
var router = express.Router();
import React from 'react'; 
import ReactDOMServer from 'react-dom/server';
import App from '../public/javascripts/reactApp/src/App'

/* GET home page. */
router.get('/', function(req, res, next) {
  let body = ReactDOMServer.renderToString(<App />);
  res.render('index', { 
    body: body
   });
});

module.exports = router;
