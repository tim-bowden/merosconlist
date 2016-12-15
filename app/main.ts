import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

import { searchService } from './search/searchService';


platformBrowserDynamic().bootstrapModule(AppModule);
