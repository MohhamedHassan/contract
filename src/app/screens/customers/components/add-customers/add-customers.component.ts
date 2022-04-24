import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.scss']
})
export class AddCustomersComponent implements OnInit {
  selectDateType=1
  nationalities: string[] = ['One', 'Two', 'Three'];
  nationalityControl = new FormControl();
  filteredNationalities: Observable<string[]>;
  identitySource: string[] = ['One', 'Two', 'Three'];
  identitySourceControl = new FormControl();
  filteredIdentitySource: Observable<string[]>;
  selectedIdentityTypeValue: string;

  identityType= [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  constructor(public navservice:NavbarService) { }

  ngOnInit(): void {
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
}
