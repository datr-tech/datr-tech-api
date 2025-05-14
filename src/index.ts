import { app } from '@app-dtwa/api';
import { apiName, apiPort } from '@app-dtwa/config';
import { logger } from '@datr.tech/leith-common-logger';
import 'dotenv/config';

app.listen(apiPort, () => {
  logger.info(`api-${apiName} listening on ${apiPort}`);
});
