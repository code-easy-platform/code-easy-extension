import { App, app, Menu, Tray, Notification } from 'electron';
import { CodeEasyLogo, SuccessIcon } from './../assets';

import { ExpressServer } from './../server/ExpressServer';
import { ContextMenu } from './context-menu/ContextMenu';
import { ENV } from './../env';

export interface IElectronApp {
    store: { [key: string]: any }
    isReady: boolean;
    runApp(): void;
    menuTray: Tray;
    close(): void;
    app: App;
}

export class ElectronApp implements IElectronApp {
    public store: { [key: string]: any; } = [];

    public menuTray: Tray;
    public app: App = app;

    public get isReady(): boolean {
        return this.app.isReady();
    }

    public close(): void {
        if (this.isReady) {
            this.app.quit();
        } else {
            throw new Error('App is not running.');
        }
    }

    public runApp(): void {
        if (this.isReady) {
            this._initializeComponents();
        } else {
            this.app = app;

            this.app.whenReady().then(() => {
                this._initializeComponents();
            });
        }
    }

    private _initializeComponents(): void {

        // Initialize server
        this.store.server = new ExpressServer({ port: ENV.port });
        this.store.server.start();

        const notification = new Notification({
            title: 'Server is running...',
            body: `Server is running in http://localhost:${ENV.port}/...`,
            icon: SuccessIcon.path,
        });
        notification.show();
        setTimeout(() => {
            notification.close();
        }, 5000);

        // Inicialize app tray
        this.menuTray = new Tray(CodeEasyLogo.path);
        this.menuTray.setContextMenu(Menu.buildFromTemplate(ContextMenu(this)));
        this.menuTray.setToolTip('Extension manager!');
    }
}
