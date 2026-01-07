import { Component } from '@angular/core';
import { LoginComponent } from './auth/components/login/login';
import { RegisterComponent } from './auth/components/register/register';
@Component({
  selector: 'app-root',
  imports: [LoginComponent,RegisterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'online-book-store';
}
