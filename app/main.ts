import { app, Tray, Menu, BrowserWindow } from 'electron';
import { resolve } from 'path';

app
    .whenReady()
    .then(() => {
        // Inicializa o app

        let tray = new Tray(resolve(__dirname, 'assets', 'code-easy-platform.png'));

        const contextMenu = Menu.buildFromTemplate([
            { label: 'Open desktop app', type: 'normal', click: () => {
                let win = new BrowserWindow({
                    width: 1200,
                    height: 720,
                });

                win.loadURL('https://code-easy-bfe83.web.app/');

                win.menuBarVisible = false;
            } }
        ]);

        tray.setToolTip('Extension manager!');
        tray.setContextMenu(contextMenu);

    });
