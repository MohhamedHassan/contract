import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskOneComponent } from './component/task-one/task-one.component';
import { TaskThreeComponent } from './component/task-three/task-three.component';
import { TaskTwoComponent } from './component/task-two/task-two.component';

const routes: Routes = [
  {
    path:'add-one',
    component:TaskOneComponent
  },
  {
    path:'add-two',
    component:TaskTwoComponent
  },
  {
    path:'add-three',
    component:TaskThreeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskOneRoutingModule { }
