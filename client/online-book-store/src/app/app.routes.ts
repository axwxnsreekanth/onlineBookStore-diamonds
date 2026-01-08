import { Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login';
import { RegisterComponent } from './auth/components/register/register';
import { DashboardComponent } from './dashboard/components/user-dashboard/user-dashboard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user-dashboard', component: DashboardComponent },
];
