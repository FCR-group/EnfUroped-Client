import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

import { UserModel } from './../models/user.model';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService extends HttpService {
    private loggedUser: UserModel | undefined;

    doLogin(user: UserModel) {
        this.loggedUser = user;
    }

    doLogoutUser() {
        this.loggedUser = undefined;
    }

    getCurrentUser(): Observable<UserModel> {
        if (this.loggedUser) {
            return of(this.loggedUser);
        } else {
            return this.get('user').pipe(
                tap((user: any) => (this.loggedUser = user))
            );
        }
    }
}
