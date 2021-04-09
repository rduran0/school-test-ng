import { Component } from "@angular/core";
import { AbstractRecordCard } from "./abstract-record-card";

@Component({
  selector: "vertical-record-card",
  templateUrl: "record-card-v.component.html"
})
export class VerticalRecordCard extends AbstractRecordCard {

  constructor() {
    super()
    this.cardType = "Vertical"
  }
}
