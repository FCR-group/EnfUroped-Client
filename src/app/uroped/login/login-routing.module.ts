import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogonComponent } from './pages/logon/logon.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
    { path: 'login', component: LogonComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LoginRoutingModule {}
