import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { ENVIRONMENT } from './environments/environment';

import {hmrBootstrap} from "./app/hmr";

declare var module: { id: string };

if (ENVIRONMENT.PRODUCTION) {
  enableProdMode();
}

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

if (ENVIRONMENT.HMR) {
    if (module[ 'hot' ]) {
        hmrBootstrap(module, bootstrap);
    }
} else {
    bootstrap();
}