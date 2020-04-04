import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// to będzie jako 2 opcja routingu tak by było to lepsze do update kodu
const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
