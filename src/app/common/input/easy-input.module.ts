import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { LabelInput } from "./label-input.component";

@NgModule({
  declarations: [
    LabelInput
  ],
  providers: [],
  imports: [FormsModule],
  exports: [LabelInput]
})
export class EasyInputModule {}
