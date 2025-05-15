import { apiRouter } from '@app-dta/api/routers';
import { apiName } from '@app-dta/config';
import express from 'express';
import expressHealthcheck from 'express-healthcheck';

const app = express()
  .use(express.json())
  .use(`/${apiName}`, apiRouter)
  .use('/healthcheck', expressHealthcheck())
  .use('/static', express.static('public'));

export { app };
