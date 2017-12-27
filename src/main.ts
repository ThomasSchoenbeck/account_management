import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { schema } from './schema';


const PORT = 3000;
const app = express();
app.use(cors());

// https://github.com/nmaro/staart/blob/master/examples/staart/server/api.js
// const corsMiddleware = cors({
//   origin: settings.originUrl,
//   credentials: true,
//   preflightContinue: false
// })
// app.use(corsMiddleware)
// app.options(corsMiddleware)

// adding compression library for gzip support
// replace standard nodejs require with typescript import
import * as compression from 'compression';
// var compression = require('compression')
app.use(compression());

app.use('/graphql', bodyParser.json(), graphqlExpress( { schema }));
app.get('/graphiql', graphiqlExpress( { endpointURL: '/graphql' }));

app.listen(PORT);

console.log('GraphQL API Server started... @ http://localhost:' + PORT + '/graphiql');