import * as http from "http";
import { Express } from "express";

export interface IExpressServer {
    listener: http.Server | null;
    /**
     * Node server
     */
    server: Express;
    /**
     * Initialize node server
     */
    start(): void;
    /**
     * Port to run node server
     */
    port: number;
    /**
     * Stop node server
     */
    stop(): void;
}
