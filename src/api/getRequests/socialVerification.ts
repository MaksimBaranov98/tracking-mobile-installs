import { Request, Response } from 'express';
import { checkUserExist } from '../../database';
import { SocialVerificationRequest } from 'src/types/getRequests';

export default async function (req: Request, res: Response) {
  console.log('req', req.query);

  const userExist = await checkUserExist(req.query as unknown as SocialVerificationRequest);

  res.send({ value: userExist });
}
