import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneLvlRotuingComponent } from './one-lvl-rotuing/one-lvl-rotuing.component';
import { RouterModService } from './router-mod.service';
import { TwolvlRoutingComponent } from './twolvlRouting/twolvl-routing/twolvl-routing.component';
import { GrandChildComponent } from './twolvlRouting/grand-child/grand-child.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    OneLvlRotuingComponent,
    TwolvlRoutingComponent,
    GrandChildComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    OneLvlRotuingComponent,
    TwolvlRoutingComponent,
    GrandChildComponent
  ],
  providers: [
    RouterModService
  ]
})
export class RoutingModule { }
