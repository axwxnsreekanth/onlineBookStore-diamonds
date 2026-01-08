import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/components/admin-dashboard/admin-dashboard';
import { UserManagementComponent } from './admin/components/user-management/user-management';
import { BookManagementComponent } from './admin/components/book-management/book-management';
import { OrderManagementComponent } from './admin/components/order-management/order-management';
import { LoginComponent } from './auth/components/login/login';
import { RegisterComponent } from './auth/components/register/register';
import { DashboardComponent } from './dashboard/components/user-dashboard/user-dashboard';
import { WishlistComponent } from './wishlist/wishlist';
import { CartComponent } from './cart/cart';
import { ProfileComponent } from './profile/profile';
import { PaymentComponent } from './payment/payment';

export const AppRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user-dashboard', component: DashboardComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'cart', component: CartComponent },
  {path:'profile', component:ProfileComponent},

  // Admin Dashboard and child pages
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'admin/user-management', component: UserManagementComponent },
  { path: 'admin/book-management', component: BookManagementComponent },
  { path: 'admin/order-management', component: OrderManagementComponent },

  // Wildcard for 404
  { path: '**', redirectTo: 'login' },
  {path:'payment', component:PaymentComponent},
];
