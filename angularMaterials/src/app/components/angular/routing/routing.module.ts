import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneLvlRotuingComponent } from './one-lvl-rotuing/one-lvl-rotuing.component';
import { RouterModService } from './router-mod.service';
import { TwolvlRoutingComponent } from './twolvlRouting/twolvl-routing/twolvl-routing.component';

@NgModule({
  declarations: [
    OneLvlRotuingComponent,
    TwolvlRoutingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OneLvlRotuingComponent,
    TwolvlRoutingComponent
  ],
  providers: [
    RouterModService
  ]
})
export class RoutingModule { }
