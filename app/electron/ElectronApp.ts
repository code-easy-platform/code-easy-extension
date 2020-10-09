import { App, app, Menu, Tray, Notification } from 'electron';
import { CodeEasyLogo, SuccessIcon } from './../assets';

import { ExpressServer } from './../server/ExpressServer';
import { ContextMenu } from './context-menu/ContextMenu';

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
        this.store['server'] = new ExpressServer({ port: 3000 });
        this.store['server'].start();

        const notification = new Notification({
            title: 'Server is running...',
            body: 'Code easy extension server is running...',
            icon: SuccessIcon.path,
        });
        notification.show();
        setTimeout(() => {
            notification.close();
        }, 3000);

        // Inicialize app tray
        this.menuTray = new Tray(CodeEasyLogo.path);
        this.menuTray.setContextMenu(Menu.buildFromTemplate(ContextMenu(this)));
        this.menuTray.setToolTip('Extension manager!');
    }
}
