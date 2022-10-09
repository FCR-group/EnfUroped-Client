import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorsRoutingModule } from './errors-routing.module';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { InternalServerComponent } from './pages/internal-server/internal-server.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';

@NgModule({
    declarations: [
        ForbiddenComponent,
        InternalServerComponent,
        NotFoundComponent,
        UnauthorizedComponent,
    ],
    imports: [CommonModule, ErrorsRoutingModule],
})
export class ErrorsModule {}
