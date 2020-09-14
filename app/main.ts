// tslint:disable-next-line
import { app, Menu, Tray } from 'electron';
import { resolve } from 'path';

import { ContextMenu } from './electron';

app
    .whenReady()
    .then(() => {

        // Inicializa o app
        const tray = new Tray(resolve(__dirname, 'assets', 'code-easy-platform.png'));

        tray.setContextMenu(Menu.buildFromTemplate(ContextMenu()));
        tray.setToolTip('Extension manager!');

        // tslint:disable-next-line: no-console
        console.log('App running!');
    });

