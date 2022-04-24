import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOwnersDataComponent } from './components/add-owners-data/add-owners-data.component';
import { AllOwnersDataComponent } from './components/all-owners-data/all-owners-data.component';

const routes: Routes = [
  {
    path:'owenrs-data',
    component:AllOwnersDataComponent
  },
  {
    path:'add-owenrs-data',
    component:AddOwnersDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnersRoutingModule { }
