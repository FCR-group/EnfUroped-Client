import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, take } from 'rxjs';

import { environment } from './../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class HttpService {
    protected urlBackend = environment.backend_url;

    private reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'No-Auth': 'True',
    });

    constructor(private httpClient: HttpClient) {}

    delete<T>(endpoint: string): Observable<T> {
        return this.httpClient
            .delete<T>(`${this.urlBackend}/${endpoint}`, {
                headers: this.reqHeader,
                observe: 'response',
            })
            .pipe(
                map((response: { body: any }) => response.body),
                take(1)
            );
    }

    get<T>(endpoint: string): Observable<T> {
        return this.httpClient
            .get<T>(`${this.urlBackend}/${endpoint}`, {
                headers: this.reqHeader,
                observe: 'response',
            })
            .pipe(
                map((response: { body: any }) => response.body),
                take(1)
            );
    }

    put<T>(endpoint: string, data: any): Observable<T> {
        return this.httpClient
            .put<T>(`${this.urlBackend}/${endpoint}`, data, {
                headers: this.reqHeader,
                observe: 'response',
            })
            .pipe(
                map((response: any) => response.body),
                take(1)
            );
    }

    post<T>(endpoint: string, data: any): Observable<T> {
        console.log(data);

        return this.httpClient
            .post<T>(`${this.urlBackend}/${endpoint}`, data, {
                headers: this.reqHeader,

                observe: 'response',
            })
            .pipe(
                map((response: any) => response.body),
                take(1)
            );
    }

    patch<T>(endpoint: string, data: any): Observable<T> {
        return this.httpClient
            .patch<T>(`${this.urlBackend}/${endpoint}`, data, {
                headers: this.reqHeader,
                observe: 'response',
            })
            .pipe(
                map((response: any) => response.body),
                take(1)
            );
    }
}
