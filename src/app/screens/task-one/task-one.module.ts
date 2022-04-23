import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskOneRoutingModule } from './task-one-routing.module';
import { TaskOneComponent } from './component/task-one/task-one.component';
import { TaskTwoComponent } from './component/task-two/task-two.component';
import { TaskThreeComponent } from './component/task-three/task-three.component';
import {  NgbDatepickerModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HigriDateComponent } from './component/higri-date/higri-date.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TaskOneComponent,
    TaskTwoComponent,
    TaskThreeComponent,
    HigriDateComponent
  ],
  imports: [
    CommonModule,
    TaskOneRoutingModule,
    NgbDatepickerModule,
    NgbModalModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    HttpClientModule
  ]
})
export class TaskOneModule { }
