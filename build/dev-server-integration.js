/**
 * Created by gramachandran on 13/11/17.
 */
/**
 * Created by gramachandran on 26/07/17.
 */
require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
// var webpackConfig = process.env.NODE_ENV === 'testing'
//   ? require('./webpack.prod.conf')
//   : require('./webpack.dev.conf')

var webpackConfig = process.env.NODE_ENV === 'testing'
  ? prodconf()
  : devconf();

function prodconf() {
  console.log("prod conf returned")
  return require('./webpack.prod.conf');
}

function devconf() {
  console.log("dev conf returned")
  return require('./webpack.dev.conf');
}

// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable


const DashboardPlugin = require('webpack-dashboard/plugin');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
function createDevRouter1() {
  const router = express.Router();
  const compiler = webpack(webpackConfig);

  // Apply CLI dashboard for your webpack dev server
  compiler.apply(new DashboardPlugin());

  router.use(
    webpackDevMiddleware(compiler, {
      noInfo: false,
      publicPath: webpackConfig.output.publicPath,
      headers: { 'Access-Control-Allow-Origin': '*' },
      stats: {
        colors: true,
      },
      historyApiFallback: true
    })
  );

  router.use(webpackHotMiddleware(compiler));

  return router;
}
module.exports = createDevRouter1;
