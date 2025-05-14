import { emailRouter } from '@app-dtwa/api/routers/emailRouter';
import { options } from '@datr.tech/leith-config-api-router-options';
import { Router } from 'express';

export const apiRouter = Router(options).use('/api/v1/email', emailRouter);
