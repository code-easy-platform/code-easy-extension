import * as express from 'express';

const _routers = express.Router();

// Metodo padrão.
_routers.get('/', (req, res) => {
    return res.json({ message: 'Extension' });
});

export const routers = _routers;
