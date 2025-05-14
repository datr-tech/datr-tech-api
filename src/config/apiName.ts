export const apiName =
  typeof process.env !== 'undefined' && typeof process.env.API_NAME !== 'undefined'
    ? process.env.API_NAME
    : 'datr-tech-web-api';
