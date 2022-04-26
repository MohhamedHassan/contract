import { Component, OnInit,Injectable, Output,EventEmitter } from '@angular/core';
import {
  NgbDateStruct, NgbCalendar, NgbCalendarIslamicCivil, NgbDatepickerI18n, NgbModal, NgbDate
} from '@ng-bootstrap/ng-bootstrap';
import { NavbarService } from 'src/app/services/navbar.service';
import HijriDate,{toHijri} from 'hijri-date/lib/safe';
import { DatePipe } from '@angular/common';
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
  selector: 'app-owners-hjri-date',
  templateUrl: './owners-hjri-date.component.html',
  styleUrls: ['./owners-hjri-date.component.scss'],
  providers: [
    {provide: NgbCalendar, useClass: NgbCalendarIslamicCivil},
    {provide: NgbDatepickerI18n, useClass: IslamicI18n}
  ]
})
export class OwnersHjriDateComponent implements OnInit {

  constructor(    private datePipe: DatePipe,
    public navservice:NavbarService) {
     
     }
  ngOnInit(): void {
  }
  onDateSelect(event){
    console.log(event)
    const day = new HijriDate(event.year, event.month, event.day);
    const formated = this.datePipe.transform(day, 'yyy-MM-dd')  ;
    const enArray = formated.split("-")
    this.navservice.ownerEnDate =   new NgbDate(Number(enArray[0]),Number(enArray[1]),Number(enArray[2]))
    
  
    console.log(this.navservice.ownerEnDate )
    this.navservice.ownerArDate =  new NgbDate(event.year,event.month,event.day)  ;

  }
}
