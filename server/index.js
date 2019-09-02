const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const config = require('../webpack.config')

const app = express();
const PORT = 3000;

const compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}))
app.use(webpackHotMiddleware(compiler))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname + '/../dist')))

app.listen(PORT, () => { console.log( `listening on ${PORT}`)});