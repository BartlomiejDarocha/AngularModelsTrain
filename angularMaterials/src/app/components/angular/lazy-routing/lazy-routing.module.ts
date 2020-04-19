import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyRoutingComponent } from './lazy-routing-component/lazy-routing.component';
import { LazyRoutingComponentTwoComponent } from './lazy-routing-component-two/lazy-routing-component-two.component';
import { LazyRoutingComponentRoutingModule } from './lazy-routing-component/lazy-routing-component.routing.module';

// tutaj są spięte komponenty do lazy routing, można również też zorbić osobny moduł
// w każdym komponencie tak jak jest to inoinic i w tym module zaimportować
// route Routermodule jako child

@NgModule({
  declarations: [
    LazyRoutingComponent,
    LazyRoutingComponentTwoComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingComponentRoutingModule // importowanie routingu dla lazyRoutingComponent
  ],
  exports: [
    LazyRoutingComponent,
    LazyRoutingComponentTwoComponent
  ],
})
export class LazyRoutingModule { }
