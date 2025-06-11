import { Inject, Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from '../../app.settings';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  // Use import.meta.env for environment-based API base URL or fallback
  constructor(@Inject('APP_SETTINGS') private settings: AppSettings) {}

  login(email: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.settings.apiBaseUrl}/auth/login`, { email, password });
  }

  logout() {
    localStorage.removeItem('auth_token');
  }
}
// This AuthService provides methods for user authentication.