import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home/ownres/add-owenrs-data',
    pathMatch:'full'
  },
  {
    path:'home',
    component:LayoutComponent,
    children:[
      {
        path:'ownres',
        loadChildren:() => import('src/app/screens/owners/owners.module').then(m => m.OwnersModule)
      },
      {
        path:'customers',
        loadChildren:() => import('src/app/screens/customers/customers.module').then(m => m.CustomersModule)
      },
      {
        path:'real-estate',
        loadChildren:() => import('src/app/screens/real-estate/real-estate.module').then(m => m.RealEstateModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
