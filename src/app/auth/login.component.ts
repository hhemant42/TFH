import { Component } from '@angular/core';
import { FormBuilder,FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonModule, InputTextModule],
  template: `
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="login-form">
      <label for="email">Email</label>
      <input id="email" formControlName="email" pInputText type="email" required />
      
      <label for="password">Password</label>
      <input id="password" formControlName="password" pInputText type="password" required />
      
      <button pButton type="submit" label="Login" [disabled]="loginForm.invalid"></button>
    </form>
  `,
  styles: [`
    .login-form {
      max-width: 320px;
      margin: 2rem auto;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  `],
})
export class LoginComponent {
    loginForm: FormGroup;
  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email!, password!).subscribe((res) => {
        localStorage.setItem('auth_token', res.token);
        this.router.navigate(['/dashboard']);
      });
    }
  }
}
// This LoginComponent handles user login functionality.
// It uses Reactive Forms for form handling and PrimeNG components for UI elements.