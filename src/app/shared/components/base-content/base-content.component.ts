import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { untilDestroyed } from '@ngneat/until-destroy';
import { delay, filter } from 'rxjs';

@Component({
    selector: 'base-content',
    templateUrl: './base-content.component.html',
    styleUrls: ['./base-content.component.scss'],
})
export class BaseContentComponent implements OnInit {
    currentRoute: string = '';

    isNavColumnOpen: boolean = false;
    userLogedIn: boolean = false;
    login: boolean = false;

    @ViewChild(MatSidenav)
    sidenav!: MatSidenav;

    constructor(private observer: BreakpointObserver, private router: Router) {
        this.router.events.subscribe((event: any) => {
            if (event instanceof NavigationEnd) {
                this.currentRoute = event.url;

                if (this.router.url.includes('access')) {
                    this.login = true;
                } else {
                    this.login = false;
                }
            }
        });
    }

    ngOnInit(): void {}

    ngAfterViewInit() {
        this.observer
            .observe(['(max-width: 800px)'])
            .pipe(delay(1), untilDestroyed(this))
            .subscribe((res) => {
                if (res.matches) {
                    this.sidenav.mode = 'over';
                    this.sidenav.close();
                } else {
                    this.sidenav.mode = 'side';
                    this.sidenav.open();
                }
            });

        this.router.events
            .pipe(
                untilDestroyed(this),
                filter((e) => e instanceof NavigationEnd)
            )
            .subscribe(() => {
                if (this.sidenav.mode === 'over') {
                    this.sidenav.close();
                }
            });
    }

    openMenu(event: boolean) {
        this.isNavColumnOpen = event;
    }
}
