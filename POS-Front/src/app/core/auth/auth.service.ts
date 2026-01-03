import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly tokenStorageKey = 'pos_access_token';

  isAuthenticated(): boolean {
    return Boolean(this.getAccessToken());
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.tokenStorageKey);
  }

  login(params: { username: string; password: string }): void {
    // TODO: replace with real backend auth (OIDC / JWT). This is just a dev stub.
    const fakeToken = btoa(`${params.username}:${Date.now()}`);
    localStorage.setItem(this.tokenStorageKey, fakeToken);
  }

  logout(): void {
    localStorage.removeItem(this.tokenStorageKey);
  }
}
