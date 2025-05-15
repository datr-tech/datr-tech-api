import { app } from '@app-dta/api';
import { apiName, apiPort } from '@app-dta/config';
import { logger } from '@datr.tech/leith-common-logger';

import 'dotenv/config';

app.listen(apiPort, () => {
  logger.info(`api-${apiName} listening on ${apiPort}`);
});
