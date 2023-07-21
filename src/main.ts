import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {registerLicense} from '@syncfusion/ej2-base';


registerLicense('Ngo9BigBOggjHTQxAR8/V1NGaF5cXmdCdkx3TXxbf1xzZFdMYVlbQXRPMyBoS35RdUVkWHZecnVQQ2JbWUF1');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
