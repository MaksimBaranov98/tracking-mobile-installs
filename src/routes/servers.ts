import socialVerification from '../api/getRequests/socialVerification';
import saveUser from '../api/postRequests/saveUser';
import { Router } from 'express';

const router = Router();

router.get('/api/task/social_verification', (req, res) => socialVerification(req, res));

router.post('/api/task/save_user', (req, res) => saveUser(req, res));

export default router;
