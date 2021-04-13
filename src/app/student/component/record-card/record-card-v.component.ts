import { Component, OnChanges, SimpleChanges } from "@angular/core";
import { AbstractRecordCard } from "./abstract-record-card";

@Component({
  selector: "vertical-record-card",
  templateUrl: "record-card-v.component.html"
})
export class VerticalRecordCard extends AbstractRecordCard {

  public disableEdit: boolean

  public name: string

  constructor() {
    super()
    this.cardType = "Vertical"
    this.disableEdit = true
  }
}
