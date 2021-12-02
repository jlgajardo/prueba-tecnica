import {CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import localeEs from '@angular/common/locales/es-CL'
import {registerLocaleData} from '@angular/common'
import {MatIconModule} from "@angular/material/icon";
import {ComponentsModule} from "./components/components.module";

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
    {provide: LOCALE_ID, useValue: 'es-CL'}
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
