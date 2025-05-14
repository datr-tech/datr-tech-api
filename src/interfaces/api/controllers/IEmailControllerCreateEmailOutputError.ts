export interface IEmailControllerCreateEmailOutputError {
  error: true;
  payload: {
    message: string;
    responseStatusCode: number;
  };
}
