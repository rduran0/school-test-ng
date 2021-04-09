import { Component } from "@angular/core";
import { AbstractRecordCard } from "./abstract-record-card";

@Component({
  selector: "horizontal-record-card",
  templateUrl: "record-card-h.component.html"
})
export class HorizontalRecordCard extends AbstractRecordCard {

  constructor() {
    super()
    this.cardType = "Horizontal"
  }
}
