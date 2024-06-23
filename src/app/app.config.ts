import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};

export const AvatarConfigValues = [
  {id: 'avatar-1', value: '../assets/img/avatar-1.jpeg'},
  {id: 'avatar-2', value: './assets/img/avatar-2.jpg'},
  {id: 'avatar-3', value: './assets/img/avatar-3.jpg'},
  {id: 'avatar-4', value: './assets/img/avatar-4.jpg'}
]
