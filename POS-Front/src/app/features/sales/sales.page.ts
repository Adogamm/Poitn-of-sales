import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../core/auth/auth.service';

@Component({
  standalone: true,
  template: `
    <main>
      <h1>Ventas</h1>

      <p>MVP: aquí empieza el flujo de venta (carrito, totales, cobro).</p>

      <button type="button" (click)="logout()">Salir</button>
    </main>
  `
})
export class SalesPage {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  logout(): void {
    this.authService.logout();
    void this.router.navigateByUrl('/login');
  }
}
