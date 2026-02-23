import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
export const appRoutes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
        {
            path: '',
            loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard)
        },
        {
            path: 'transactions',
            loadComponent: () => import('./features/transactions/transactions').then(m => m.Transactions)
        },
        {
            path: 'settings',
            loadComponent: () => import('./features/settings/settings').then(m => m.Settings)
        }
    ]
  }
];