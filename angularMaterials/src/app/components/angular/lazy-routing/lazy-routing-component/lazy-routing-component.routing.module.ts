import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyRoutingComponent } from './lazy-routing.component';



const routes: Routes = [
  {
    path: '',
    component: LazyRoutingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingComponentRoutingModule { }
