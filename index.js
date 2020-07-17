import express from 'express';
import log from 'fancy-log';

import server from './server/graphql/schema';

require('dotenv').config();

const { PORT } = process.env;

const app = express();

server.applyMiddleware({ app });

app.listen(PORT, () => log.info(`Server up and running on port ${PORT}`));
