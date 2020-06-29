import * as express from 'express';

const routers = express.Router();

// Metodo padrão.
routers.get('/', (req, res) => {
    return res.json({ message: 'Extension' });
});

export default routers;
