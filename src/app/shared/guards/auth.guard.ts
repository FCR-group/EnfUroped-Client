import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanLoad,
    Route,
    Router,
    RouterStateSnapshot,
    UrlSegment,
} from '@angular/router';
import { Observable } from 'rxjs';

import { NavigationService } from './../services/navigation.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
    currentRoute: string = '';

    constructor(
        private router: Router,
        private navigationService: NavigationService
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {
        /* if (this.router?.getCurrentNavigation()?.extras?.state) {
            console.log(this.router?.getCurrentNavigation()?.extras?.state);

            return true;
        }
        console.log('CAN ACTIVATE');
        this.navigationService.navigate(['error', '403']); */
        return true;
    }

    canLoad(
        route: Route,
        segments: UrlSegment[]
    ): boolean | Observable<boolean> | Promise<boolean> {
        console.log('CAN LOAD');
        return true;
    }
}
