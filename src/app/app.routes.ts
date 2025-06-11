// import { Routes } from '@angular/router';

// export const routes: Routes = [];


import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
];
// This code defines the routes for the Angular application.
// It includes a redirect from the root path to the dashboard, a login route, and a dashboard route.