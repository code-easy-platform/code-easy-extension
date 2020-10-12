import { MenuItem, MenuItemConstructorOptions, shell } from 'electron';

import { ElectronApp } from './../ElectronApp';

export const ContextMenu = (app: ElectronApp): (MenuItemConstructorOptions | MenuItem)[] => {

    /*
    app.store['server'] = new ExpressServer({ port: 3000 });

    const handleStartServer = () => {

        if (app.store['server']) {

            app.store['server'].start();
            console.log('Server is running!');
        } else {

            app.store['server'] = new ExpressServer({ port: 3000 });
            app.store['server'].start();
            console.log('Server is running!');
        }
    }

    const handleStopServer = () => {

        if (app.store['server']) {
            app.store['server'].stop();
            console.log('Server is stopped!');
        }
    } */

    const handleClose = () => {
        app.close();
    }

    const handleOpenInBrowser = () => {
        shell.openExternal('https://code-easy-bfe83.web.app/');
    }

    return [
        {
            type: 'normal',
            click: handleOpenInBrowser,
            label: 'Open app in browser',
        },
        /* {
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
        }, */
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
