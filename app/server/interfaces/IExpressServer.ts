import * as http from "http";
import { Express } from "express";

export interface IExpressServer {
    listener: http.Server | null;
    server: Express;
    start(): void;
    port: number;
    stop(): void;
}
