import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { InternalServerComponent } from './pages/internal-server/internal-server.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';

const routes: Routes = [
    {
        path: '404',
        component: NotFoundComponent,
    },
    {
        path: '403',
        component: ForbiddenComponent,
    },
    {
        path: '401',
        component: UnauthorizedComponent,
    },
    {
        path: '500',
        component: InternalServerComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ErrorsRoutingModule {}
