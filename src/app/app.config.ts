import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { APP_CONFIG } from './shared/app-config';
import { DogBreedService } from './services/dog-breed';
import { MockDogBreedService } from './services/mock-dog-breed';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: APP_CONFIG,
      useValue: {
        apiBaseUrl: 'https://placeholder.example.com/api',
        defaultCategory: 'all',
      },
    },
    //to switch back to real service, delete or comment out provider
    { provide: DogBreedService, useClass: MockDogBreedService},
  ],
};
