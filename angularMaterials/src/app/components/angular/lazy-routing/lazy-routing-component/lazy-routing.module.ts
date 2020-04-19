import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyRoutingComponent } from './lazy-routing.component';
import { LazyRoutingComponentRoutingModule } from './lazy-routing-component.routing.module';

// tutaj jest spięty komponent  do lazy routing, można również też zorbić osobny moduł
// w każdym komponencie tak jak jest to inoinic i w tym module zaimportować
// route Routermodule jako child

@NgModule({
  declarations: [
    LazyRoutingComponent,
  ],
  imports: [
    CommonModule,
    LazyRoutingComponentRoutingModule // importowanie routingu dla lazyRoutingComponent
  ],
  exports: [
    LazyRoutingComponent,
  ],
})
export class LazyRoutingModule { }
