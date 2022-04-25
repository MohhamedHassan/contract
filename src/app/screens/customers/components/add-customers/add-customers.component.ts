import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.scss']
})
export class AddCustomersComponent implements OnInit {
  @ViewChild('nationalityInput')nationalityInput:ElementRef
  selectDateType=1
  nationalityControl = new FormControl();
  filteredNationalities: Observable<string[]>;
  identitySource: string[] = ['One', 'Two', 'Three'];
  identitySourceControl = new FormControl();
  filteredIdentitySource: Observable<string[]>;
  selectedIdentityTypeValue: string;
  nationalitiesMain: string[] = ['source one', 'source Two', 'source Three'];
  nationalities: string[] = ['source one', 'source Two', 'source Three'];
  shownationalitiesList=false
  selectedNationality
  customersForm
  identityType= [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  constructor(public navservice:NavbarService,
    private cd:ChangeDetectorRef,
    private fb:FormBuilder) { }

  ngOnInit(): void {
    this.returnCustomesForm()
    this.filteredNationalities = this.nationalityControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterNationality(value)),
    );
    this.filteredIdentitySource = this.identitySourceControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterIdentitySource(value)),
    );
  }
  private _filterNationality(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.nationalities.filter(option => option.toLowerCase().includes(filterValue));
  }
  private _filterIdentitySource(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.identitySource.filter(option => option.toLowerCase().includes(filterValue));
  }
  returnCustomesForm() {
    this.customersForm = this.fb.group({
      mobileNumber:['',[Validators.pattern(/^05\d{8}$/)]]
    })
  }
  submitCustomesForm(value) {
    console.log(value)
  }
  searchForNationality(nationalityInput) {
    this.nationalities = this.nationalitiesMain.filter(i => i.toLowerCase().includes(nationalityInput.value.toLowerCase()))
    if(nationalityInput.value.length==0) this.nationalities=[...this.nationalitiesMain]
  }
  showNationalitesList() {
    this.nationalities=[...this.nationalitiesMain]
    if(this.shownationalitiesList) this.shownationalitiesList=false
    else {
      this.shownationalitiesList=true
      this.cd.detectChanges()
      this.nationalityInput.nativeElement.focus()
    }
    
  }
  selectNAtionality(item) {
    this.shownationalitiesList=true
    this.selectedNationality=item
    this.shownationalitiesList=false
  }
  hideNationalitesList() {
    setTimeout(() => {
      this.shownationalitiesList=false
    },200)
  }
}
