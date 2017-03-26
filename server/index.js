import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import webpackDev from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.babel';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { schema } from './schema';

const app = express();
const compiler = webpack(webpackConfig);

app.use(webpackDev(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

app.use(express.static(path.resolve(__dirname + '/../public')))

/**
 Set up GraphiQL and GraphQL
 **/

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

app.use('/graphql', bodyParser.json(), graphqlExpress({
    schema,
    context: {}
}));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = app;
