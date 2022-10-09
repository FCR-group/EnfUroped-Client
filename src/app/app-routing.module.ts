import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () =>
            import('./uroped/landing/landing.module').then(
                (m) => m.LandingModule
            ),
    },
    {
        path: 'login',
        loadChildren: () =>
            import('./uroped/login/login.module').then((m) => m.LoginModule),
    },
    {
        path: 'error',
        loadChildren: () =>
            import('./errors/errors.module').then((m) => m.ErrorsModule),
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
