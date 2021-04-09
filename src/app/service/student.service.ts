import { Injectable } from "@angular/core";
import { KeyValue } from "../model/key-value";
import { NewStudentRequest } from "../request/new-student.request";
import { StudentRecord } from "../response/student-record.response";
import { STUDENT_NAVIGATION_LIST, STUDENT_RECORDS } from "./student.mock";

@Injectable({
  providedIn: "root"
})
export class StudentService {

  constructor() {
    // Import http service here
  }

  createStudent(request: NewStudentRequest): boolean {
    // TODO Implement
    return true;
  }

  getStudentListForNavigation(): KeyValue[] {
    // TODO Implement real flow
    return STUDENT_NAVIGATION_LIST
  }

  getStudentRecord(studentUuid: string): StudentRecord {
    // TODO Implement real flow
    return STUDENT_RECORDS.get(studentUuid)
  }
}
