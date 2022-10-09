import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LogonComponent } from './pages/logon/logon.component';
import { FormLogonComponent } from './components/form-logon/form-logon.component';


@NgModule({
  declarations: [
    LogonComponent,
    FormLogonComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
