import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  provideFASTDesignSystem,
  fastTextField,
} from '@microsoft/fast-components';
import { badge, label, provideMODDesignSystem, textInput } from 'design-system';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

provideFASTDesignSystem().register(fastTextField());

provideMODDesignSystem()
  .register(badge())
  .register(label())
  .register(textInput());

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
