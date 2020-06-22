import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyRoutingComponentTwoComponent } from './lazy-routing-component-two.component';

const routes: Routes = [
  {
    path: '',
    component: LazyRoutingComponentTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingComponentTwoModuleModule { }
