import { options } from '@datr.tech/leith-config-api-router-options';
import { Router } from 'express';

import { emailRouterCreateEmail } from './emailRouterCreateEmail';

export const emailRouter = Router(options).use('/', emailRouterCreateEmail);
