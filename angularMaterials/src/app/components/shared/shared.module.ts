import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LeftMenuComponent } from './left-menu/left-menu.component';

@NgModule({
  declarations: [
    LeftMenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    LeftMenuComponent
  ]
})
export class SharedModule { }
