import { Routes } from '@angular/router';
import { OneLvlRotuingComponent } from './one-lvl-rotuing/one-lvl-rotuing.component';
import { TwolvlRoutingComponent } from './twolvlRouting/twolvl-routing/twolvl-routing.component';
import { GrandChildComponent } from './twolvlRouting/grand-child/grand-child.component';

// to będzie jako 2 opcja routingu tak by było to lepsze do update kodu

export const routingChildren: Routes = [
  { path: 'onelvl/:id', component: OneLvlRotuingComponent },
  {
    path: 'twolvl/:id', component: TwolvlRoutingComponent,
    children: [
      { path: 'twolvlGrand/:id', component: GrandChildComponent }
    ]
  }
];
