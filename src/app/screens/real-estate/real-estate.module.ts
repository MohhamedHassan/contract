import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealEstateRoutingModule } from './real-estate-routing.module';
import { AddSubRealEstateComponent } from './components/add-sub-real-estate/add-sub-real-estate.component';
import { AllSubRealEstateComponent } from './components/all-sub-real-estate/all-sub-real-estate.component';
import { AddMainRealEstateComponent } from './components/add-main-real-estate/add-main-real-estate.component';
import { AllMainRealEstateComponent } from './components/all-main-real-estate/all-main-real-estate.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddSubRealEstateComponent,
    AllSubRealEstateComponent,
    AddMainRealEstateComponent,
    AllMainRealEstateComponent
  ],
  imports: [
    CommonModule,
    RealEstateRoutingModule,
    SharedModule

  ]
})
export class RealEstateModule { }
