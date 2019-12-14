import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularHomeComponent } from './angular-home/angular-home.component';
import { InoutPutComponent } from './inout-put/inout-put.component';
import { AngularModule } from './angular.module';
const routes: Routes = [
  {
    path: 'angular', component: AngularHomeComponent,
    children: [
      {path: 'inOutPut', component: InoutPutComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
