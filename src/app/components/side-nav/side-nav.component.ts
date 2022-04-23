import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  
  constructor(public navbarservice:NavbarService) { }

  ngOnInit(): void {
  }
get  lang() {
  return localStorage.getItem('lang') || 'en'
}

}
