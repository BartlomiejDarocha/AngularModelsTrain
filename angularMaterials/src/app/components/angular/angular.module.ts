import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularHomeComponent } from './angular-home/angular-home.component';
import { InoutPutComponent } from './inout-put/inout-put.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AngularHomeComponent,
    InoutPutComponent
    ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AngularHomeComponent,
    InoutPutComponent
  ]
})
export class AngularModule { }
