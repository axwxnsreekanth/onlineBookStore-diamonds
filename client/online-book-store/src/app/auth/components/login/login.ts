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
  error = '';

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
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.authService.login(this.loginForm.value).subscribe({
      next: (response: any) => {
        // store auth data
        localStorage.setItem('token', response.token);
        localStorage.setItem('role', response.role);

        // role-based navigation
        if (response.role === 'CUSTOMER') {
          this.router.navigate(['/user-dashboard']);
        } else if (response.role === 'ADMIN') {
          this.router.navigate(['/admin']);
        }
      },
      error: () => {
        this.error = 'Invalid email or password';
      }
    });
  }
}
