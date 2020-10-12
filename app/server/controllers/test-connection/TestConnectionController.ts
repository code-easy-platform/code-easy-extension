import { platform, getSystemVersion } from 'process';
import * as HttpStatusCode from 'http-status-codes';
import { Request, Response } from "express";

export class TestConnectionController {

    async execute(_: Request, res: Response): Promise<Response> {

        const informations = {
            systemVersion: getSystemVersion(),
            connected: true,
            platform,
        };

        return res.status(HttpStatusCode.StatusCodes.OK).json(informations);
    }
}
