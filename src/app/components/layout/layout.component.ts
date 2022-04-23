import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  
  constructor(public navbarservice:NavbarService) { }

  ngOnInit(): void {
  }
get lang() {
  return localStorage.getItem('lang') || 'en'
}
}
