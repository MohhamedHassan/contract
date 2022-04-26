import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  openSideNav:boolean=false
  ownerEnDate
  ownerArDate
  customersEnDate
  customersArDate
  constructor() { }
  clearDate() {
    this.ownerEnDate=null
    this.ownerArDate=null
  }
}
