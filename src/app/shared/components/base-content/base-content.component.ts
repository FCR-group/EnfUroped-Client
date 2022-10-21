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
    isNavColumnOpen: boolean = false;
    userLogedIn: boolean = false;

    @ViewChild(MatSidenav)
    sidenav!: MatSidenav;

    constructor(private observer: BreakpointObserver, private router: Router) {}
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
