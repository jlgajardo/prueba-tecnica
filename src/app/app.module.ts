import {CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import localeEs from '@angular/common/locales/es-CL'
import {registerLocaleData} from '@angular/common'
import {ComponentsModule} from "./components/components.module";
import {AuthTokenInterceptor} from "./services/auth-token.interceptor";

registerLocaleData(localeEs, 'es-CL')

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-CL'},
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthTokenInterceptor
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
