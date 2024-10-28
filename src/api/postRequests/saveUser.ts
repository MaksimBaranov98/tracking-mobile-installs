import { Request, Response } from 'express';
import user from '../../controllers/user.controller';

export default async function (req: Request, res: Response) {
  const userIsExist = await user.userIsExist(req);

  if (userIsExist) {
    res.send({ isOk: true });

    return;
  }

  const dbRes = await user.createUser(req);

  res.send({value: dbRes});
}
