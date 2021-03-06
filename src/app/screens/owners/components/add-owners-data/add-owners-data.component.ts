import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map, Observable, startWith } from 'rxjs';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-add-owners-data',
  templateUrl: './add-owners-data.component.html',
  styleUrls: ['./add-owners-data.component.scss']
})
export class AddOwnersDataComponent implements OnInit {
  @ViewChild('nationalityInput') nationalityInput: ElementRef
  @ViewChild('owenersNamesInput') owenersNamesInput: ElementRef
  @ViewChild('ownerCodeInput') ownerCodeInput: ElementRef

  selectDateType = 1
  ownersDataForm
  options: string[] = ['One', 'Two', 'Three'];
  nationalityControl = new FormControl();
  filteredOptions: Observable<string[]>;
  source: string[] = ['source one', 'source Two', 'source Three'];
  nationalitiesMain: string[] = ['source one', 'source Two', 'source Three'];
  nationalities: string[] = ['source one', 'source Two', 'source Three'];
  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  ownersNamesMain: any[] = [
    {
      name: 'name one',
      code: 1
    },
    {
      name: 'name two',
      code: 2
    },
    {
      name: 'name three',
      code: 3
    },
    {
      name: 'name four',
      code: 4
    },
    {
      name: 'name five',
      code: 5
    },
    {
      name: 'name six',
      code: 6
    },
    {
      name: 'name seven',
      code: 7
    }

  ];
  ownersNames: any[] = [...this.ownersNamesMain];
  shownationalitiesList = false
  selectedNationality
  sourceControl = new FormControl();
  filteredSource: Observable<string[]>;
  placeholderAnimation = false
  constructor(private modalService: NgbModal,
    private http:HttpClient,
    private cd: ChangeDetectorRef,
    public navservice: NavbarService,
    private fb: FormBuilder) { }


  ngOnInit(): void {
    this.returnOwnersDataForm()
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
  open(content: any) {
    this.modalService.open(content);
  }
  returnOwnersDataForm() {
    this.ownersDataForm = this.fb.group({
      mobileNumber: ['', [Validators.pattern(/^05\d{8}$/)]]
    })
  }
  submitOwnersDataForm(value) {
    console.log(value)
  }
  searchForNationality(nationalityInput) {
    this.nationalities = this.nationalitiesMain.filter(i => i.toLowerCase().includes(nationalityInput.value.toLowerCase()))
    if (nationalityInput.value.length == 0) this.nationalities = [...this.nationalitiesMain]
  }
  showNationalitesList() {
    this.placeholderAnimation = true

    this.nationalities = [...this.nationalitiesMain]
    if (this.shownationalitiesList) this.shownationalitiesList = false
    else {
      this.shownationalitiesList = true
      this.cd.detectChanges()
      this.nationalityInput.nativeElement.focus()
    }

  }
  selectNAtionality(item) {
    this.shownationalitiesList = true
    this.selectedNationality = item
    this.shownationalitiesList = false
    this.placeholderAnimation = this.selectedNationality ? true : false

  }
  hideNationalitesList() {
    this.placeholderAnimation = this.selectedNationality ? true : false
    console.log(this.selectedNationality, this.placeholderAnimation)
    setTimeout(() => {
      this.shownationalitiesList = false
    }, 200)
  }
  ///////////////////////
  placeholderAnimationforOWnersNames
  shownOwenrsNamesList
  selectedOwenrName
  searchForOwnerName(ownerNameInput) {
    this.ownersNames = this.ownersNamesMain.filter(i => i.name.toLowerCase().includes(ownerNameInput.value.toLowerCase()))
    if (ownerNameInput.value.length == 0) this.ownersNames = [...this.ownersNamesMain]
  }
  showOwnersNamesList() {
    this.placeholderAnimationforOWnersNames = true

    this.ownersNames = [...this.ownersNamesMain]
    if (this.shownOwenrsNamesList) this.shownOwenrsNamesList = false
    else {
      this.shownOwenrsNamesList = true
      this.cd.detectChanges()
      this.owenersNamesInput.nativeElement.focus()
    }

  }
  selectOwenrName(item) {
    this.shownOwenrsNamesList = true
    this.selectedOwenrName = item
    if(item)   this.ownerCodeInput.nativeElement.value=item.code
    else this.ownerCodeInput.nativeElement.value=''
    this.shownOwenrsNamesList = false
    this.placeholderAnimationforOWnersNames = this.selectedOwenrName ? true : false
  }
  hideowenrsNamesList() {
    this.placeholderAnimationforOWnersNames = this.selectedOwenrName ? true : false
    setTimeout(() => {
      this.shownOwenrsNamesList = false
    }, 200)
  }
  blurOwnerCodeInput() {
    if(this.ownerCodeInput.nativeElement.value) {
      this.selectedOwenrName = this.ownersNamesMain.filter(i => i.code == this.ownerCodeInput.nativeElement.value)[0]
      this.placeholderAnimationforOWnersNames =true
    } else {
      this.selectedOwenrName = null
      this.placeholderAnimationforOWnersNames =false
    }
  }
  users
  getDataOneChange(event) {
    console.log(event)
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      res =>  {
        console.log(res)
        this.users=res
      }
    )
  }
 }

