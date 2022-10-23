import { Component, OnInit } from '@angular/core';

import { NavigationService } from './../../../../shared/services/navigation.service';

@Component({
    selector: 'logon',
    templateUrl: './logon.component.html',
    styleUrls: ['./logon.component.scss'],
})
export class LogonComponent implements OnInit {
    constructor(private navigationService: NavigationService) {}

    ngOnInit(): void {}

    signup() {
        this.navigationService.navigate(['access', 'register']);
    }

    login() {}

    goToHome() {
        this.navigationService.navigate(['']);
    }
}
