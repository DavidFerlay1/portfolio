import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateFormatService {

  constructor() { }

  private getFormattedMonth(month: string, minify: boolean = false): string {

    let formattedMonth: string = '';

    switch(month) {
      case '01':
        formattedMonth = "Janvier";
        break;
      case '02':
        formattedMonth = "Février";
        break;
      case '03':
        formattedMonth = "Mars";
        break;
      case '04':
        formattedMonth = "Avril";
        break;
      case '05':
        formattedMonth = "Mai";
        break;
      case '06':
        formattedMonth = "Juin";
        break;
      case '07':
        formattedMonth = "Juillet";
        break;
      case '08':
        formattedMonth = "Août";
        break;
      case '09':
        formattedMonth = "Septembre";
        break;
      case '10':
        formattedMonth = "Octobre";
        break;
      case '11':
        formattedMonth = "Novembre";
        break;
      case '12':
        formattedMonth = "Décembre";
        break;

      default: break;
    }

    return minify ? `${formattedMonth.substring(0, 3)}.` : formattedMonth;
  }

  getFormattedDate(date: string, minifyMonth: boolean = false, withDay: boolean = true, splitChar = '-'): string {
    const splitted = date.split(splitChar);
    let result = withDay ? `${splitted[2]} ` : '';
    return result + `${this.getFormattedMonth(splitted[1], minifyMonth)} ${splitted[0]}`;
  }
}
