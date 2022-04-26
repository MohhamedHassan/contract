import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import HijriDate,{toHijri} from 'hijri-date/lib/safe';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-owners-en-date',
  templateUrl: './owners-en-date.component.html',
  styleUrls: ['./owners-en-date.component.scss']
})
export class OwnersEnDateComponent implements OnInit {

  constructor(public navservice:NavbarService) { }

  ngOnInit(): void {
  }
  onDateSelect(event) {
    const hijri=toHijri(new Date(event.year,event.month-1,event.day));
    this.navservice.ownerArDate=new NgbDate(hijri._year,hijri._month,hijri._date)  ;
    this.navservice.ownerEnDate=new NgbDate(event.year,event.month,event.day)
  }
}
