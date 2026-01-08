import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/components/admin-dashboard/admin-dashboard';
import { UserManagementComponent } from './admin/components/user-management/user-management';
import { BookManagementComponent } from './admin/components/book-management/book-management';
import { OrderManagementComponent } from './admin/components/order-management/order-management';
import { LoginComponent } from './auth/components/login/login';
import { RegisterComponent } from './auth/components/register/register';

export const AppRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Admin Dashboard and child pages
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'admin/user-management', component: UserManagementComponent },
  { path: 'admin/book-management', component: BookManagementComponent },
  { path: 'admin/order-management', component: OrderManagementComponent },

  // Wildcard for 404
  { path: '**', redirectTo: 'login' }
];
