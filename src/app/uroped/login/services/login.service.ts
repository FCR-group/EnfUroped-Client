import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpService } from './../../../shared/services/http.service';
import { LogonModel } from './../models/logon.model';

@Injectable({
    providedIn: 'root',
})
export class LoginService extends HttpService {
    private readonly BASE_URL = 'auth/login';

    login(data: LogonModel): Observable<any> {
        return this.post<any>(`${this.BASE_URL}`, data);
    }
}
