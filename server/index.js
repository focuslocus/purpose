import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDev from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.babel';

const app = express();
const compiler = webpack(webpackConfig);

app.use(webpackDev(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));

app.use(express.static(path.resolve(__dirname, '/../public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = app;
