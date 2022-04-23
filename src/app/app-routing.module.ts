import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home/add-one',
    pathMatch:'full'
  },
  {
    path:'home',
    component:LayoutComponent,
    children:[
      {
        path:'',
        loadChildren:() => import('src/app/screens/task-one/task-one.module').then(m => m.TaskOneModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
