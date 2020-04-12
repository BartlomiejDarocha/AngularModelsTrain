import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularHomeComponent } from '../angular-home/angular-home.component';
import { RoutingComponent } from './routing.component';
import { OneLvlRotuingComponent } from './one-lvl-rotuing/one-lvl-rotuing.component';
import { TwolvlRoutingComponent } from './twolvlRouting/twolvl-routing/twolvl-routing.component';
import { GrandChildComponent } from './twolvlRouting/grand-child/grand-child.component';

// to będzie jako 2 opcja routingu tak by było to lepsze do update kodu
const routes: Routes = [
  {
    path: 'angular', component: AngularHomeComponent,
    children: [
      {
        path: 'routing', component: RoutingComponent,
        children: [
          { path: 'onelvl/:id', component: OneLvlRotuingComponent },
          {
            path: 'twolvl/:id', component: TwolvlRoutingComponent,
            children: [
              { path: 'twolvlGrand/:id', component: GrandChildComponent }
            ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
