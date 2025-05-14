import { IEmailControllerCreateEmailInput } from './IEmailControllerCreateEmailInput';
import { IEmailControllerCreateEmailOutput } from './IEmailControllerCreateEmailOutput';

export interface IEmailControllerCreateEmail {
  (args: IEmailControllerCreateEmailInput): Promise<IEmailControllerCreateEmailOutput>;
}
