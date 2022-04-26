import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { OwnersRoutingModule } from './owners-routing.module';
import { AllOwnersDataComponent } from './components/all-owners-data/all-owners-data.component';
import { AddOwnersDataComponent } from './components/add-owners-data/add-owners-data.component';
import { OwnersHjriDateComponent } from './components/owners-hjri-date/owners-hjri-date.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OwnersEnDateComponent } from './components/owners-en-date/owners-en-date.component';
import { registerLocaleData } from '@angular/common';
import ar from '@angular/common/locales/ar';
registerLocaleData(ar);
@NgModule({
  declarations: [
    AllOwnersDataComponent,
    AddOwnersDataComponent,
    OwnersHjriDateComponent,
    OwnersEnDateComponent
  ],
  imports: [
    CommonModule,
    OwnersRoutingModule,
    SharedModule
  ],
  providers: [
    DatePipe
  ]
})
export class OwnersModule { }
