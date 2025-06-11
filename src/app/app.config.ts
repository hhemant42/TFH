// import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';

// export const appConfig: ApplicationConfig = {
//   providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
// };


import { ApplicationConfig, importProvidersFrom , provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { defaultAppSettings, AppSettings } from './app.settings';
import { tokenInterceptor } from './core/interceptors/token.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import Material from '@primeng/themes/material';
import Lara  from '@primeng/themes/lara';
import Nora from '@primeng/themes/nora';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),   {
      provide: 'APP_SETTINGS',
      useValue: defaultAppSettings,
    },
    provideHttpClient(withInterceptors([tokenInterceptor])),
    provideAnimations(),
    provideAnimationsAsync(),
      providePrimeNG({
          theme: {
              preset: Aura
          }
      })
  ],
};
// This configuration sets up the Angular application with necessary providers for routing, HTTP client with interceptors, and animations.
// It also enables zone change detection with event coalescing for performance optimization.