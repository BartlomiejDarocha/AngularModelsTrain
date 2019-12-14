import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularHomeComponent } from './angular-home/angular-home.component';
@NgModule({
  declarations: [
    AngularHomeComponent
    ],
  imports: [
    CommonModule,
  ],
  exports: [
    AngularHomeComponent,
  ]
})
export class AngularModule { }
