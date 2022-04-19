import { Component, OnInit } from '@angular/core';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';


@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  dateValue = new Date().toString();

  formatDate(value: string) {
    console.log(value);
    console.log(this.dateValue);
    return format(parseISO(value), 'MMM dd yyyy');
  }

}
