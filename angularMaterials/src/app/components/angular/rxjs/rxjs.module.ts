import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RxjsShowComponent } from './rxjs-show/rxjs-show.component';

@NgModule({
  declarations: [
    RxjsShowComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RxjsShowComponent
  ]
})
export class RxjsModule { }
