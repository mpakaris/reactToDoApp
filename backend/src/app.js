import express from 'express';
import morgan from 'morgan';
import logger from './logger';
import errorHandler from './middlewares/error-handler';
import { api, system } from './routes';

const session = require('express-session');

const app = express();

app.use(morgan('combined', { stream: logger.stream }));

app.use('/api', api);
app.use('/system', system);

app.use(errorHandler);

export default app;
