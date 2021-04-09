import { Component } from "@angular/core";
import { AbstractRecordCard } from "./abstract-record-card";

@Component({
  selector: "full-record-card",
  templateUrl: "record-card-full.component.html"
})
export class FullRecordCard extends AbstractRecordCard {

  constructor() {
    super()
    this.cardType = "Full"
  }
}
