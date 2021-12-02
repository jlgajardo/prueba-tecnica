import {CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HeaderComponent} from './shared/header/header.component';
import {UsersComponent} from './components/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableComponent} from './components/table/table.component';
import {MatTableModule} from "@angular/material/table";
import {MatRadioModule} from "@angular/material/radio";
import {MatCardModule} from "@angular/material/card";
import {NgxSpinnerModule} from "ngx-spinner";


import localeEs from '@angular/common/locales/es-CL'
import {registerLocaleData} from '@angular/common'
import {MatIconModule} from "@angular/material/icon";
import {FilterPipe} from "./shared/pipes/filter.pipe";
import {RutPipe} from "./shared/pipes/rut.pipe";

registerLocaleData(localeEs, 'es-CL')

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    FilterPipe,
    RutPipe,
    TableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatRadioModule,
    MatCardModule,
    NgxSpinnerModule,
    MatIconModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-CL'}
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
