import * as express from 'express';

import { TestConnectionController } from '../controllers';

const _routers = express.Router();

// Default method.
_routers.get('/', (_, res) => res.json({ message: 'Extension working' }));

// Try connections and make a enviroment validation.
_routers.get('/test-connection', (new TestConnectionController()).execute);

export const routers = _routers;
