import { Router } from 'express';

import { AuthenticateUserController } from '../controllers/AuthenticateUserController';
import { ProfileUserController } from '../controllers/ProfileUserController';
import { ensureAuthenticate } from '../middlewares/ensureAuthenticate';
import { messageRoutes } from './messages';

const routes = Router();

routes.use('/messages', messageRoutes);
routes.post('/authenticate', new AuthenticateUserController().handle);
routes.get('/me', ensureAuthenticate, new ProfileUserController().handle);

export { routes };
