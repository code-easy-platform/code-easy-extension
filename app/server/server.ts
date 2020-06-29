import * as express from 'express';
import routers from './routes';

/**
 * Servidor passa a ouvir na porta 5555
 */
export const startServer = () => {
    const server = express();

    // Define que o express vai usar json nas suas requisições
    server.use(express.json());

    // Adiciona ao server as rotas que serão usadas
    server.use(routers);

    // Configura qual porta será escutada pelo servidor
    server.listen(3000);

    // Retorna o serer para que possa ser fechado manualmente se necessesário
    return server;
};

export class ExpressServer {
    private server: express.Express;
    private port: number;

    constructor(
        private fields: {
            port: number,
        },
    ) {
        this.port = this.fields.port;
    }

    public startServer() {
        this.server = express();

        // Define que o express vai usar json nas suas requisições
        this.server.use(express.json());

        // Adiciona ao server as rotas que serão usadas
        this.server.use(routers);

        // Configura qual porta será escutada pelo servidor
        this.server.listen(this.port);
    }

    public stopServer() {
        this.server = null;
    }
}
