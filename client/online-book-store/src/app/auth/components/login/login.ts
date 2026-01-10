import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/authservice/auth-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  error: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onLogin(): void {
    this.error = '';

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    try {
      this.authService.login(this.loginForm.value).subscribe({
        next: (response: any) => {
          // Store authentication data
          localStorage.setItem('token', response.token);
          localStorage.setItem('role', response.role);

          // Role-based navigation
          if (response.role === 'CUSTOMER') {
            this.router.navigate(['/user-dashboard']);
          } else if (response.role === 'ADMIN') {
            this.router.navigate(['/admin']);
          }
        },
        error: (err) => {
          // ✅ Handle 400 Invalid credentials
          if (err.status === 400 && err.error?.message) {
            this.error = err.error.message; // "Invalid credentials"
          } else {
            this.error = 'Something went wrong. Please try again.';
          }
        }
      });
    } catch (e) {
      console.error('Login exception:', e);
      this.error = 'Unexpected error occurred. Please try later.';
    }
  }
}
