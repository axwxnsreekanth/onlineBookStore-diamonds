import { Component } from '@angular/core';
import { LoginComponent } from './auth/components/login/login';
import { RegisterComponent } from './auth/components/register/register';
import { DashboardComponent } from "./dashboard/components/user-dashboard/user-dashboard";
@Component({
  selector: 'app-root',
  imports: [LoginComponent, RegisterComponent, DashboardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'online-book-store';
}
