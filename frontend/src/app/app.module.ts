import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modulos/shared/shared.module';
import { LoginModule } from './modulos/login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        LoginModule,
        HttpClientModule,
        RouterModule
    ],
    providers: [],
    bootstrap: [AppComponent],
  exports: [
  ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
