import { RotTrainSummaryComponent } from './components/rot-train-summary/rot-train-summary.component';
import { RotTrainCreatorComponent } from './components/rot-train-creator/rot-train-creator.component';
import { RotTrainMainComponent } from './components/rot-train-main/rot-train-main.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: RotTrainMainComponent,
    children: [
      {
        path: 'creator',
        component: RotTrainCreatorComponent,
        data: { name: 'Stwórz bohatera'}
      },
      {
        path: 'summary',
        component: RotTrainSummaryComponent,
        data: { name: 'Podsumowanie nowego bohatera'}
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutTrainAngularRoutingModule { }
