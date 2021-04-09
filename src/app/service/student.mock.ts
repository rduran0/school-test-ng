import { StudentRecord } from "../response/student-record.response";

export const STUDENT_RECORDS = new Map<string, StudentRecord>()
STUDENT_RECORDS.set("1234", {
  name: "Jack",
  firstSurname: "Sparrow",
  secondSurname: "White-beard",
  birthdate: new Date(1750, 4, 12)
})
STUDENT_RECORDS.set("5678", {
  name: "Pedro",
  firstSurname: "Medina",
  secondSurname: "Medina",
  birthdate: new Date(1970, 7, 24)
})
STUDENT_RECORDS.set("0000", {
  name: "Nui",
  firstSurname: "Harime",
  secondSurname: "UNKNOWN",
  birthdate: new Date(2012, 11, 12)
})

export const STUDENT_NAVIGATION_LIST = [
  { key: "Jack Sparrow", value: "1234" },
  { key: "Pedro Medina", value: "5678" },
  { key: "Nui Harime", value: "0000" }
]
