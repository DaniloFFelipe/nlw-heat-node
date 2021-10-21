import { Router } from 'express';

import { CreateMessageController } from '../controllers/CreateMessageController';
import { GetLast3MessagesController } from '../controllers/GetLast3MessagesController';
import { ensureAuthenticate } from '../middlewares/ensureAuthenticate';

const routes = Router();

routes.post('/', ensureAuthenticate, new CreateMessageController().handle);

routes.get('/last3', new GetLast3MessagesController().handle);

export { routes as messageRoutes };
