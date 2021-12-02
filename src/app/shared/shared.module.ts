import {NgModule} from "@angular/core";
import {FilterPipe} from "./pipes/filter.pipe";
import {RutPipe} from "./pipes/rut.pipe";

@NgModule({
  declarations: [
    FilterPipe,
    RutPipe
  ],
  exports: [
    FilterPipe,
    RutPipe
  ]
})
export class SharedModule {
}
