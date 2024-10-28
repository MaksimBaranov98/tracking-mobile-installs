import dotenv from 'dotenv';

dotenv.config();

const { SERVER_PORT, DB_HOST, DB_USER_NAME, DB_USER_PASSWORD, DB_PORT, DB_NAME, DB_SCHEMA_NAME, DB_TABLE_NAME } =
  process.env;

export const config = {
  SERVER_PORT,
  DB_HOST,
  DB_USER_NAME,
  DB_USER_PASSWORD,
  DB_NAME,
  DB_SCHEMA_NAME,
  DB_TABLE_NAME,
  DB_PORT: +DB_PORT,
};

console.log(config);
