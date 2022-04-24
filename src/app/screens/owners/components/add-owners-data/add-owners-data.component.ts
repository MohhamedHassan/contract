import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map, Observable, startWith } from 'rxjs';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-add-owners-data',
  templateUrl: './add-owners-data.component.html',
  styleUrls: ['./add-owners-data.component.scss']
})
export class AddOwnersDataComponent implements OnInit {

  selectDateType=1
  ownersDataForm:FormGroup
  options: string[] = ['One', 'Two', 'Three'];
  nationalityControl = new FormControl();
  filteredOptions: Observable<string[]>;
  source: string[] = ['source one', 'source Two', 'source Three'];
  sourceControl = new FormControl();
  filteredSource: Observable<string[]>;
  constructor(private modalService: NgbModal,
    public navservice:NavbarService,
    private fb:FormBuilder) {}


  ngOnInit(): void {
    this.filteredOptions = this.nationalityControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
    this.filteredSource = this.sourceControl.valueChanges.pipe(
      startWith(''),
      map(value => this._sourcefilter(value)),
    );
  }
  



  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  private _sourcefilter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.source.filter(option => option.toLowerCase().includes(filterValue));
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
