import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../../../shared/services/auth.service';
import { NavigationService } from './../../../../shared/services/navigation.service';
import { LogonModel } from './../../models/logon.model';
import { LoginService } from './../../services/login.service';

@Component({
    selector: 'logon',
    templateUrl: './logon.component.html',
    styleUrls: ['./logon.component.scss'],
})
export class LogonComponent implements OnInit {
    constructor(
        private navigationService: NavigationService,
        private loginService: LoginService,
        private authService: AuthService
    ) {}

    ngOnInit(): void {}

    signup() {
        this.navigationService.navigate(['access', 'register']);
    }

    login(formValue: LogonModel) {
        console.log(formValue);

        this.loginService.login(formValue).subscribe((response) => {
            this.authService.doLogin(response.cpf);
            this.navigationService.navigate([''], {
                logged: true,
            });
        });
    }

    goToHome() {
        this.navigationService.navigate(['']);
    }
}
