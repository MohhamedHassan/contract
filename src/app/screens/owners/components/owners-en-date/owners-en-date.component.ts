import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-owners-en-date',
  templateUrl: './owners-en-date.component.html',
  styleUrls: ['./owners-en-date.component.scss']
})
export class OwnersEnDateComponent implements OnInit {

  constructor(public navservice:NavbarService) { }

  ngOnInit(): void {
  }

}
