import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvanceTwoGomoreComponent } from './advance-two-gomore/advance-two-gomore.component';



const routes: Routes = [
  {path: 'advance-two/advance-twoMore', component: AdvanceTwoGomoreComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvanceTwoRoutingModule { }
