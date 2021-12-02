import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {UsersComponent} from "./users/users.component";
import {TableComponent} from "./table/table.component";
import {MaterialModule} from "../material/material.module";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HeaderComponent,
    UsersComponent,
    TableComponent
  ],
  exports: [
    HeaderComponent,
    UsersComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    SharedModule
  ]
})
export class ComponentsModule {
}
