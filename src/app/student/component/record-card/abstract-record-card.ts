import { EventEmitter, Input, Output } from "@angular/core";
import { StudentRecord } from "src/app/response/student-record.response";

export abstract class AbstractRecordCard {

  @Input()
  public data: StudentRecord

  @Output()
  public cardClick: EventEmitter<Date>

  public cardType: string

  constructor() {
    this.data = { name: "", firstSurname: "", secondSurname: "", birthdate: undefined }
    this.cardClick = new EventEmitter()
  }

  onClick(): void {
    this.cardClick.emit(this.data.birthdate)
  }
}
