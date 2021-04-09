import { Component, OnInit } from "@angular/core";
import { CardDisplay } from "../model/common.type";
import { KeyValue } from "../model/key-value";
import { StudentRecord } from "../response/student-record.response";
import { StudentService } from "../service/student.service";

@Component({
  selector: "student-navigator",
  templateUrl: "student-navigator.component.html"
})
export class StudentNavigatorPage implements OnInit {

  public display: CardDisplay
  public studentList: KeyValue[]
  public selected: StudentRecord

  constructor(private studentService: StudentService) {
    this.studentList = []
  }

  ngOnInit(): void {
    this.initializeStudentList()
    this.display = "hor"
  }

  initializeStudentList(): void {
    this.studentList = this.studentService.getStudentListForNavigation();
    this.selected = this.studentService.getStudentRecord(this.studentList[0].value as string)
  }

  onSelectStudent(event: { target: { value: string } }): void {
    this.selected = this.studentService.getStudentRecord(event.target.value)
  }

  showCurrentAge(birthDate: Date): void {
    const ageMilli = new Date().getTime() - birthDate.getTime()
    const age = Math.floor(ageMilli / 1000 / 86400 / 365)
    alert(`Tiene ${age} años`)
  }
}
