import express from 'express';
import log from 'fancy-log';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import modules from './server/modules';
import notFound from './server/modules/notFound';

dotenv.config();

const app = express();
const { PORT } = process.env;

app.use(bodyParser.json());

modules(app);
app.use(notFound);

export const server = app.listen(PORT, () => log.info(`Server up and running on port ${PORT}`));

export default app;
