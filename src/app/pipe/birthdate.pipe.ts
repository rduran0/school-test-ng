import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "birthdate"
})
export class BirhtdatePipe implements PipeTransform {

  readonly MONTH_NAMES = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ]

  transform(value: Date): string {
    return value.getDate()
      + " de "
      + this.MONTH_NAMES[value.getMonth()]
      + ", "
      + value.getFullYear()
  }
}
