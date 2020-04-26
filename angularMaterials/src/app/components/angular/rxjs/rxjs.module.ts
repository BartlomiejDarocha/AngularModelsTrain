import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RxjsShowComponent } from './rxjs-show/rxjs-show.component';
import { RxjsService } from './service/rxjs.service';

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
  ],
  providers: [
    RxjsService
  ]
})
export class RxjsModule { }
