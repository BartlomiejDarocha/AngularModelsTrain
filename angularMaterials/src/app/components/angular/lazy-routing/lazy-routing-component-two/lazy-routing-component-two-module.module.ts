import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyRoutingComponentTwoComponent } from './lazy-routing-component-two.component';
import { LazyRoutingTwoFirstChildComponent } from './lazy-routing-two-first-child/lazy-routing-two-first-child.component';
// to jest moduł z lazy routingiem zostaje od dodany do importu w spinajacym module
const routes: Routes = [
  {
    path: '',
    component: LazyRoutingComponentTwoComponent,
    // ten komponent ma router outlet /\
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
