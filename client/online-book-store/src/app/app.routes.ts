import { Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login';
import { RegisterComponent } from './auth/components/register/register';
import { DashboardComponent } from './dashboard/components/user-dashboard/user-dashboard';
import { WishlistComponent } from './wishlist/wishlist';
import { CartComponent } from './cart/cart';
import { ProfileComponent } from './profile/profile';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user-dashboard', component: DashboardComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'cart', component: CartComponent },
  {path:'profile', component:ProfileComponent}
];
