import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnersRoutingModule } from './owners-routing.module';
import { AllOwnersDataComponent } from './components/all-owners-data/all-owners-data.component';
import { AddOwnersDataComponent } from './components/add-owners-data/add-owners-data.component';
import { OwnersHjriDateComponent } from './components/owners-hjri-date/owners-hjri-date.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AllOwnersDataComponent,
    AddOwnersDataComponent,
    OwnersHjriDateComponent
  ],
  imports: [
    CommonModule,
    OwnersRoutingModule,
    SharedModule
  ]
})
export class OwnersModule { }
