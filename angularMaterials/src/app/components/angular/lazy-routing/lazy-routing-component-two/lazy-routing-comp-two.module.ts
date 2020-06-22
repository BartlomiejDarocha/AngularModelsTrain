import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyRoutingComponentTwoModuleModule } from './lazy-routing-component-two-module.module';
import { LazyRoutingComponentTwoComponent } from './lazy-routing-component-two.component';
import { LazyRoutingTwoFirstChildComponent } from './lazy-routing-two-first-child/lazy-routing-two-first-child.component';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingComponentTwoModuleModule
  ],
  declarations: [
    LazyRoutingComponentTwoComponent,
    LazyRoutingTwoFirstChildComponent
  ],
  exports: [
    LazyRoutingComponentTwoComponent,
    LazyRoutingTwoFirstChildComponent
  ]
})
export class LazyRoutingCompTwoModule { }
