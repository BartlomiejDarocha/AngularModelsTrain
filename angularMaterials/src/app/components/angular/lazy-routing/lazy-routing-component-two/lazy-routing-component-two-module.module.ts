import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyRoutingComponentTwoComponent } from './lazy-routing-component-two.component';
import { LazyRoutingTwoFirstChildComponent } from './lazy-routing-two-first-child/lazy-routing-two-first-child.component';

const routes: Routes = [
  {
    path: '',
    component: LazyRoutingComponentTwoComponent,
    children: [
      {
        path: 'firstChild',
        component: LazyRoutingTwoFirstChildComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingComponentTwoModuleModule { }
