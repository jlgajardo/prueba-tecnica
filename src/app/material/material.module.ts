import {NgModule} from "@angular/core";
import {MatTableModule} from "@angular/material/table";
import {MatRadioModule} from "@angular/material/radio";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";

@NgModule({

  exports: [
    MatTableModule,
    MatRadioModule,
    MatCardModule,
    MatIconModule,
  ]
})
export class MaterialModule {

}
