import { IEmailControllerCreateEmailOutputError } from './IEmailControllerCreateEmailOutputError';
import { IEmailControllerCreateEmailOutputSuccess } from './IEmailControllerCreateEmailOutputSuccess';

export type IEmailControllerCreateEmailOutput =
  | IEmailControllerCreateEmailOutputSuccess
  | IEmailControllerCreateEmailOutputError;
