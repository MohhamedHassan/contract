import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMainRealEstateComponent } from './components/add-main-real-estate/add-main-real-estate.component';
import { AddSubRealEstateComponent } from './components/add-sub-real-estate/add-sub-real-estate.component';
import { AllMainRealEstateComponent } from './components/all-main-real-estate/all-main-real-estate.component';
import { AllSubRealEstateComponent } from './components/all-sub-real-estate/all-sub-real-estate.component';

const routes: Routes = [
  {
    path:'add-main-real-estate',
    component:AddMainRealEstateComponent
  },
  {
    path:'all-main-real-estate',
    component:AllMainRealEstateComponent
  },
  {
    path:'add-sub-real-estate',
    component:AddSubRealEstateComponent
  },
  {
    path:'all-sub-real-estate',
    component:AllSubRealEstateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealEstateRoutingModule { }
