import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { NavigationService } from './../../../../services/navigation.service';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
    isNavColumnOpen: boolean = false;

    @Output() onOpenNavColumn: EventEmitter<boolean> = new EventEmitter();

    constructor(private navigationService: NavigationService) {}

    ngOnInit(): void {}

    redirectTo(redirect: string) {
        switch (redirect) {
            case 'home':
                this.navigationService.navigate(['']);
                break;
            case 'login':
                this.navigationService.navigate(['access'], {
                    extras: { state: { login: true } },
                });
                break;
        }
    }

    navColumn() {
        if (this.isNavColumnOpen) {
            this.onOpenNavColumn.emit(false);
            this.isNavColumnOpen = false;
        } else {
            this.onOpenNavColumn.emit(true);
            this.isNavColumnOpen = true;
        }

        console.log(
            this.isNavColumnOpen
                ? 'Navigation SideBar Open'
                : 'Navigation SideBar Closed'
        );
    }
}
