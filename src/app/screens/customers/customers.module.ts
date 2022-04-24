import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { AllCustomersComponent } from './components/all-customers/all-customers.component';
import { AddCustomersComponent } from './components/add-customers/add-customers.component';
import { CustomersHjriDateComponent } from './components/customers-hjri-date/customers-hjri-date.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AllCustomersComponent,
    AddCustomersComponent,
    CustomersHjriDateComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    NgbPaginationModule,
    SharedModule
  ]
})
export class CustomersModule { }
