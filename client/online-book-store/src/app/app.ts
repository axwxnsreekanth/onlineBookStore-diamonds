import { Component } from '@angular/core';
import { LoginComponent } from './auth/components/login/login';
import { RegisterComponent } from './auth/components/register/register';
import { DashboardComponent } from "./dashboard/components/user-dashboard/user-dashboard";
import { WishlistComponent } from "./wishlist/wishlist";
import { CartComponent } from "./cart/cart";
@Component({
  selector: 'app-root',
  imports: [WishlistComponent],  //LoginComponent, RegisterComponent, DashboardComponent,, CartComponent
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'online-book-store';
}
