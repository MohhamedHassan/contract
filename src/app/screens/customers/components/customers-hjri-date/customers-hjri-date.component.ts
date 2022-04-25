import { Component, OnInit,Injectable, Output,EventEmitter } from '@angular/core';
import {
  NgbDateStruct, NgbCalendar, NgbCalendarIslamicCivil, NgbDatepickerI18n, NgbModal
} from '@ng-bootstrap/ng-bootstrap';
import { NavbarService } from 'src/app/services/navbar.service';

const WEEKDAYS = ['ن', 'ث', 'ر', 'خ', 'ج', 'س', 'ح'];
const MONTHS = ['محرم', 'صفر', 'ربيع الأول', 'ربيع الآخر', 'جمادى الأولى', 'جمادى الآخرة', 'رجب', 'شعبان', 'رمضان', 'شوال',
  'ذو القعدة', 'ذو الحجة'];

@Injectable()
export class IslamicI18n extends NgbDatepickerI18n {
  getMonthShortName(month: number) {
    return MONTHS[month - 1];
  }

  getMonthFullName(month: number) {
    return MONTHS[month - 1];
  }

  getWeekdayLabel(weekday: number) {
    return WEEKDAYS[weekday - 1];
  }

  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.day}-${date.month}-${date.year}`;
  }
}

@Component({
  selector: 'app-customers-hjri-date',
  templateUrl: './customers-hjri-date.component.html',
  styleUrls: ['./customers-hjri-date.component.scss'],
  providers: [
    {provide: NgbCalendar, useClass: NgbCalendarIslamicCivil},
    {provide: NgbDatepickerI18n, useClass: IslamicI18n}
  ]
})
export class CustomersHjriDateComponent implements OnInit {

  constructor(public navservice:NavbarService,
    private calendar: NgbCalendar) { }
  selectToday() {
    this.navservice.ownerArDate = this.calendar.getToday();
  }
  ngOnInit(): void {
  }

}
