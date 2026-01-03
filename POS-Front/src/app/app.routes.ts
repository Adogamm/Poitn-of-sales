import { Routes } from '@angular/router';

import { authGuard } from './core/auth/auth.guard';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'sales'
	},
	{
		path: 'login',
		loadComponent: () => import('./features/auth/login.page').then((m) => m.LoginPage)
	},
	{
		path: 'sales',
		canActivate: [authGuard],
		loadChildren: () => import('./features/sales/sales.routes').then((m) => m.SALES_ROUTES)
	},
	{
		path: '**',
		redirectTo: 'sales'
	}
];
