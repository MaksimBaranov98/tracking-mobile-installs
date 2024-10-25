import { SocialVerificationRequest } from 'src/types/getRequests';

const checkUserExist = async ({ address }: SocialVerificationRequest): Promise<boolean> => {
  if (!address) return false;

  return true;
};

export { checkUserExist };
