import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { MaterialModule } from './../../material.module';
import { FormLogonComponent } from './components/form-logon/form-logon.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { LoginRoutingModule } from './login-routing.module';
import { LogonComponent } from './pages/logon/logon.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
    declarations: [
        LogonComponent,
        FormLogonComponent,
        FormRegisterComponent,
        RegisterComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        LoginRoutingModule,
        ReactiveFormsModule,
        NgxMaskModule.forRoot(),
    ],
})
export class LoginModule {}
