import { Request } from 'express';
import { pool } from '../database/index';
import { config } from '../config';

interface UserData {
  twitter: string;
  telegram: string;
  evm_address: string;
  substrate_address: string;
  campaign_name: string;
  platform: number;
}

enum Platform {
  'android',
  'ios',
}

const dbPath = `${config.DB_SCHEMA_NAME}.${config.DB_TABLE_NAME}`;

class UserController {
  async createUser(req: Request) {
    try {
      const { substrate_address, evm_address, twitter, telegram, campaign_name, platform } = req.body as UserData;

      if (!substrate_address && !evm_address && !twitter && !telegram) return false;

      const _platform = Platform[platform] ?? Platform.android;

      await pool.query(
        `INSERT INTO ${dbPath} (substrate_address, evm_address, twitter, telegram, campaign_name, platform) values($1, $2, $3, $4, $5, $6)`,
        [substrate_address, evm_address, twitter, telegram, campaign_name, _platform]
      );

      return true;
    } catch (ex) {
      console.log(ex);

      return false;
    }
  }

  async getUser(req: Request) {
    try {
      const { address } = req.query;

      const user = await pool.query(
        `SELECT * FROM ${dbPath} where substrate_address=$1 OR evm_address=$1 OR twitter=$1 OR telegram=$1`,
        [address]
      );

      return user.rows[0] ?? null;
    } catch {
      return null;
    }
  }

  async userIsExist(req: Request): Promise<boolean> {
    const user = await this.getUser(req);

    return user !== null;
  }
}

export default new UserController();
