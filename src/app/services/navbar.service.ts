import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  openSideNav:boolean=false
  constructor() { }
}
