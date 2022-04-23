import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  NgbModal
} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-task-one',
  templateUrl: './task-one.component.html',
  styleUrls: ['./task-one.component.scss']
})
export class TaskOneComponent implements OnInit {
  
  model: any;
  ownersDataForm:FormGroup
  constructor(private modalService: NgbModal,
    private fb:FormBuilder) {}


  selectArabicDate(e:any){
    this.model=e
  }
  ngOnInit(): void {
  }
 get currentLang() {
  return localStorage.getItem('lang') || 'en'
 }
  open(content:any) {
    this.modalService.open(content);
  }
  returnOwnersDataForm() {
    this.ownersDataForm = this.fb.group({
      
    })
  }
}

