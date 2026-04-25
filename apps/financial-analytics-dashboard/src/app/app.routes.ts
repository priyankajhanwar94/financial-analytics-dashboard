import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { Login } from './features/auth/login/login';
import { authGuard } from './core/guards/auth.guard';
export const appRoutes: Routes = [
    {   
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'main',
        component: MainLayout,
        children: [
            {
                path: 'dashboard',
                data: { title: 'Dashboard' },
                loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard),
                canActivate: [authGuard],
            },
            {
                path: 'transactions',
                data: { title: 'Transactions' },
                loadComponent: () => import('./features/transactions/transactions').then(m => m.Transactions)
            }
        ]
    }
];