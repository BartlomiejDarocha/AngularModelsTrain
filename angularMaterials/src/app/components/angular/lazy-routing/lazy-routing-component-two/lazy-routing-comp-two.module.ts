import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyRoutingComponentTwoModuleModule } from './lazy-routing-component-two-module.module';
import { LazyRoutingComponentTwoComponent } from './lazy-routing-component-two.component';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingComponentTwoModuleModule
  ],
  declarations: [LazyRoutingComponentTwoComponent],
  exports: [LazyRoutingComponentTwoComponent]
})
export class LazyRoutingCompTwoModule { }
