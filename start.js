// Provide custom regenerator runtime and core-js
require('babel-polyfill')

require('babel-register') ({
  presets: [ 'env' ]
})

// Css required hook
require('css-modules-require-hook')({
  extensions: ['.css'],
  camelCase: true,
  generateScopedName: '[name]__[local]__[hash:base64:8]'
})

// Image required hook
require('asset-require-hook')({
  extensions: ['jpg', 'png', 'gif', 'webp'],
  limit: 8000
})

module.exports = require('./app.js')