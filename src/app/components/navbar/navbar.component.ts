import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentLang
  constructor(public  translateService:TranslateService,
    public navbarservice:NavbarService) { }

  ngOnInit(): void {
    this.currentLang=localStorage.getItem('lang') || 'en'
    this.translateService.use(this.currentLang)
    if(this.currentLang=='ar') document.body.classList.add("custom-rtl")
    else  document.body.classList.remove("custom-rtl")
  }
 selectLang(lang) {
   this.translateService.use(lang)
   if(lang=='ar') document.body.classList.add("custom-rtl")
   else  document.body.classList.remove("custom-rtl")
  localStorage.setItem('lang',lang)
 }
 get  lang() {
  return localStorage.getItem('lang') || 'en'
}
}
