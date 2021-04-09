import { Component, Input } from "@angular/core";

@Component({
  selector: "label-input",
  templateUrl: "label-input.component.html",
  styleUrls: ["label-input.component.css"]
})
export class LabelInput {

  @Input()
  label: string
  @Input()
  value: string | number | undefined
  @Input()
  readOnly: boolean
}
