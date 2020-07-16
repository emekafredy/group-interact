import express from 'express';
import log from 'fancy-log';
import dotenv from 'dotenv';

import server from './server/graphql/schema/index';

dotenv.config();
const { PORT } = process.env;

const app = express();

server.applyMiddleware({ app });

app.listen(PORT, () => log.info(`Server up and running on port ${PORT}`));
