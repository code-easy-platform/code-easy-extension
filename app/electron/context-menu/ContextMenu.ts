import { MenuItem, MenuItemConstructorOptions, app, shell } from 'electron';

import { ExpressServer } from './../../server/models';

const server = new ExpressServer({ port: 3000 });
export const ContextMenu = (): (MenuItemConstructorOptions | MenuItem)[] => {

    const handleStartServer = () => {
        server.start();
        // tslint:disable-next-line: no-console
        console.log('Server is running!');
    }

    const handleStopServer = () => {
        server.stop();
        // tslint:disable-next-line: no-console
        console.log('Server is stopped!');
    }

    const handleClose = () => {
        app.exit();
    }

    const handleOpenInBrowser = () => {
        shell.openExternal('https://code-easy-bfe83.web.app/');
    }

    return [
        {
            type: 'normal',
            label: 'Open in browser',
            click: handleOpenInBrowser,
        },
        {
            type: 'separator',
        },
        {
            type: 'normal',
            label: 'Start server',
            click: handleStartServer,
        },
        {
            type: 'normal',
            label: 'Stop server',
            click: handleStopServer,
        },
        {
            type: 'separator',
        },
        {
            label: 'Exit',
            type: 'normal',
            click: handleClose,
        },
    ];
}
