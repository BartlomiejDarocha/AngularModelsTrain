import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// tutaj są spięte komponenty do lazy routing, można również też zorbić osobny moduł
// w każdym komponencie tak jak jest to inoinic i w tym module zaimportować
// route Routermodule jako child

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [],
})
export class LazyRoutingModule { }
