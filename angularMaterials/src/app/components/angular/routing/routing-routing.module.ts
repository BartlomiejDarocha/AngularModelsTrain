import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
