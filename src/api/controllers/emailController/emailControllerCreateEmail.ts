import { baseStat } from '@app-dtwa/api/util/baseStat';
import {
  IEmailControllerCreateEmail,
  IEmailControllerCreateEmailOutputError,
  IEmailControllerCreateEmailOutputSuccess,
} from '@app-dtwa/interfaces/api/controllers';
import { logger } from '@datr.tech/leith-common-logger';
import nodemailer from 'nodemailer';

/**
 * emailControllerCreateEmail
 *
 * The datr-tech-web API create email controller.
 *
 * @param { IEmailControllerCreateEmailInput } params
 * @param { string } params.subject  (Optional)
 *
 * @returns { Promise<IEmailControllerCreateEmailOutput> }
 * @returns { Promise<IEmailControllerCreateEmailOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IEmailControllerCreateEmailOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { emailModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const emailControllerCreateEmail: IEmailControllerCreateEmail = async ({
  subject,
}) => {
  const stat = { ...baseStat };

  try {
    const text = process.env['TEST_MESSAGE'];
    const recipientEmail = process.env['TEST_RECIPIENT_EMAIL_ADDRESS'];
    const senderEmail = process.env['TEST_SENDER_EMAIL_ADDRESS'];
    const senderUser = process.env['TEST_SENDER_USERNAME'];
    const senderPass = process.env['TEST_SENDER_PASS'];

    logger.info(`TEXT: ${text}`);
    logger.info(`RECIPIENT_EMAIL: ${recipientEmail}`);
    logger.info(`SENDER_EMAIL: ${senderEmail}`);
    logger.info(`SENDER_USER: ${senderUser}`);
    logger.info(`SENDER_PASS: ${senderPass}`);

    const transporter = nodemailer.createTransport({
      service: 'exim',
      ignoreTLS: true,
      auth: {
        user: senderUser,
        pass: senderPass,
      },
    });

    const mailOptions = {
      from: senderEmail,
      to: recipientEmail,
      subject,
      text,
    };

    logger.info(mailOptions);
    const response = await transporter.sendMail(mailOptions);

    logger.info(response);

    /*
     * Use the standard controller response object,
     * 'stat', to return the found model's primary key.
     */
    stat.error = false;
    stat.payload = {
      emailId: 1,
      responseStatusCode: 201,
    };

    /*
     * Cast the response object to
     * 'IEmailControllerCreateEmailOutputSuccess',
     * where the casting interface is a component of
     * the binary union type 'IEmailControllerCreateEmailOutput'.
     */
    return stat as IEmailControllerCreateEmailOutputSuccess;
  } catch (error) {
    /*
     * Use the standard controller response object,
     * 'stat', to return the error message.
     */
    const { message } = error;
    stat.payload = {
      message,
      responseStatusCode: 404,
    };

    /*
     * Cast the response object to 'IEmailControllerCreateEmailOutputError',
     */
    return stat as IEmailControllerCreateEmailOutputError;
  }
};
