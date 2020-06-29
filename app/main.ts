// tslint:disable-next-line
const { app, Menu, Tray } = require('electron');
import * as express from 'express';
import { resolve } from 'path';

import { ExpressServer } from './server/server';


app
    .whenReady()
    .then(() => {

        const server = new ExpressServer({ port: 3000 });

        // Inicializa o app
        const tray = new Tray(resolve(__dirname, 'assets', 'code-easy-platform.png'));

        const contextMenu = Menu.buildFromTemplate([
            {
                label: 'Start server',
                type: 'normal',
                click: () => {
                    server.startServer();
                    // tslint:disable-next-line: no-console
                    console.log('Server is running!');
                },
            },
            {
                label: 'Stop server',
                type: 'normal',
                click: () => {
                    server.stopServer();
                    // tslint:disable-next-line: no-console
                    console.log('Server stopped!');
                },
            },
        ]);

        tray.setToolTip('Extension manager!');
        tray.setContextMenu(contextMenu);

        // tslint:disable-next-line: no-console
        console.log('App running!');

    });
