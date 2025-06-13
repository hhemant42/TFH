// import { Routes } from '@angular/router';

// export const routes: Routes = [];


import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { ProjectUiStructureComponent } from './shared/project-ui-structure/project-ui-structure.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'ui-structure', component: ProjectUiStructureComponent },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      //{ path: 'dashboard', component: DashboardComponent },
      // Add more page routes here
    ]
  }
];
// This code defines the routes for the Angular application.
// It includes a redirect from the root path to the dashboard, a login route, and a dashboard route.