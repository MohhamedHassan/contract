import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomersComponent } from './components/add-customers/add-customers.component';
import { AllCustomersComponent } from './components/all-customers/all-customers.component';

const routes: Routes = [
  {
    path:'all-customers',
    component:AllCustomersComponent
  },
  {
    path:'add-customers',
    component:AddCustomersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
