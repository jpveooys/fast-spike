import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { badge, provideMODDesignSystem } from 'design-system';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

provideMODDesignSystem().register(badge());

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
