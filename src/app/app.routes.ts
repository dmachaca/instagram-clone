import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/auth/auth.routes').then(r => r.AUTH_ROUTES)
    }
];
