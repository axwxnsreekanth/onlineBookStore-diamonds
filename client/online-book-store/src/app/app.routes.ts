import { Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login';
import { RegisterComponent } from './auth/components/register/register';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];
