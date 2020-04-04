import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneLvlRotuingComponent } from './one-lvl-rotuing/one-lvl-rotuing.component';
import { RouterModService } from './router-mod.service';

@NgModule({
  declarations: [
    OneLvlRotuingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OneLvlRotuingComponent
  ],
  providers: [
    RouterModService
  ]
})
export class RoutingModule { }
