import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class NavigationService {
    constructor(private router: Router) {}

    navigate(path: string[], extras?: any) {
        if (extras) {
            this.router.navigate(path, extras).then(
                (nav) => {
                    console.log(
                        ':: Navigate :: Navigating to route:',
                        path,
                        'with extras:',
                        extras
                    );
                },
                (err) => {
                    console.log(err);
                    this.router.navigate(['error', '404']);
                }
            );
        } else {
            this.router.navigate(path).then(
                (nav) => {
                    console.log(':: Navigate :: Navigating to route:', path);
                },
                (err) => {
                    console.log(err);
                    this.router.navigate(['error', '404']);
                }
            );
        }
    }
}
