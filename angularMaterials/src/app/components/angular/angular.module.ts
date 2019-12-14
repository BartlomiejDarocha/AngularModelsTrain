import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularHomeComponent } from './angular-home/angular-home.component';

@NgModule({
  imports: [
    CommonModule,
    formMO
  ],
  declarations: [
    AngularHomeComponent
    ],
  exports: [
    AngularHomeComponent,
  ]

})
export class AngularModule { }
