import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../../core/auth/auth.service';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <main>
      <h1>Login</h1>

      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <label>
          Usuario
          <input type="text" formControlName="username" />
        </label>

        <label>
          Contraseña
          <input type="password" formControlName="password" />
        </label>

        <button type="submit" [disabled]="form.invalid">Entrar</button>
      </form>
    </main>
  `
})
export class LoginPage {
  private readonly authService = inject(AuthService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);

  readonly form = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    const { username, password } = this.form.getRawValue();
    this.authService.login({ username: username ?? '', password: password ?? '' });

    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    void this.router.navigateByUrl(returnUrl || '/sales');
  }
}
