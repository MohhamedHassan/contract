import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-customers-en-date',
  templateUrl: './customers-en-date.component.html',
  styleUrls: ['./customers-en-date.component.scss']
})
export class CustomersEnDateComponent implements OnInit {

  constructor(public navservice:NavbarService) { }

  ngOnInit(): void {
  }

}
