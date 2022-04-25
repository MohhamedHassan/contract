import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  sideBarDAte=[
    {
      parent: {
        ar:`بيانات الملاك`,
        en:`Owner's data`,
      },
      children:[
        {
          route:'/home/customers/all-customers',
          icon:'fa-solid fa-clock',
          title:{
            ar:'جميع العملاء',
            en:'All customers'
          }
        },
        {
          route:'/home/ownres/owenrs-data',
          icon:'fa-solid fa-clock',
          title: {
            ar:'بيانات الملاك',
            en:`Owner's data`
          }
          
        },
      ]
    }
  ]
  constructor(public navbarservice:NavbarService) { }

  ngOnInit(): void {
  }
get  lang() {
  return localStorage.getItem('lang') || 'en'
}

}
