import { NgModule } from "@angular/core";
import { BirhtdatePipe } from "./birthdate.pipe";

@NgModule({
  declarations: [
    BirhtdatePipe
  ],
  exports: [
    BirhtdatePipe
  ]
})
export class UsefulPipes {}
