import app from './app';
import logger from './logger';

require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  logger.info(`App is listening on ${PORT}`);
});
