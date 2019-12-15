import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularHomeComponent } from './angular-home/angular-home.component';
import { InoutPutComponent } from './inout-put/inout-put.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    AngularHomeComponent,
    InoutPutComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    AngularHomeComponent,
    InoutPutComponent
  ]
})
export class AngularModule { }
