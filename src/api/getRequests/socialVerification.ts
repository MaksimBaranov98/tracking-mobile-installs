import { Request, Response } from 'express';
import user from '../../controllers/user.controller';

export default async function (req: Request, res: Response) {
  const isValid = await user.userIsExist(req);

  return res.send({ isValid });
}
