import * as express from 'express';
import * as http from "http";

import { IExpressServer } from './interfaces';
import { routers } from './routes';

export class ExpressServer implements IExpressServer {
    server: express.Express;
    listener: http.Server;
    port: number;

    constructor(
        private _fields: {
            port: number,
        },
    ) {
        this.port = this._fields.port;

        this._initialize();
    }

    private _initialize() {

        // Create a new intance of the express server
        this.server = express();

        if (!this.server) return;

        // Define que o express vai usar json nas suas requisições
        this.server.use(express.json());

        // Adiciona ao server as rotas que serão usadas
        this.server.use(routers);
    }

    public start() {
        if (this.listener?.connections && this.listener.connections > 0) this.stop();

        // Configura qual porta será escutada pelo servidor
        this.listener = this.server.listen(this.port);
    }

    public stop() {
        if (!this.server) return;
        this.listener = this.listener.close();
        this.server.removeAllListeners()
    }
}
