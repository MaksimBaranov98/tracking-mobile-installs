import { config } from '../config';
import { Pool } from 'pg';

const pool = new Pool({
  user: config.DB_USER_NAME,
  password: config.DB_USER_PASSWORD,
  host: config.DB_HOST,
  port: config.DB_PORT,
  database: config.DB_NAME,
});

export { pool };
export * from '../controllers/user.controller';
