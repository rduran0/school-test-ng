export class NewStudentRequest {

  private name: string
  private firstSurname: string
  private secondSurname: string
  private birthdate: Date

  constructor(
      name: string,
      firstSurname: string,
      secondSurname: string,
      birthDay: number,
      birthMonth: number,
      birthYear: number) {

    this.name = name
    this.firstSurname = firstSurname
    this.secondSurname = secondSurname
    this.birthdate = new Date(birthYear, birthMonth, birthDay)
  }
}
