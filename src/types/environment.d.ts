declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SERVER_PORT: string;
      DB_USER_NAME: string;
      DB_USER_PASSWORD: string;
      DB_HOST: string;
      DB_NAME: string;
      DB_SCHEMA_NAME: string;
      DB_TABLE_NAME: string;
      DB_PORT: number;
    }
  }
}

export {};
