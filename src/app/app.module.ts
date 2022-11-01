import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app-component/app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MaterialModule,
        SharedModule,
        BrowserAnimationsModule,
        HttpClientModule,
        //HttpClientModule,
    ],
    providers: [
        /* {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthGuard,
            multi: true,
        }, */
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
