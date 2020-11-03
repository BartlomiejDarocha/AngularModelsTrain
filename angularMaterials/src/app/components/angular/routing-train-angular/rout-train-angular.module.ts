import { RoutTrainAngularRoutingModule } from './rout-train-angular-routing.module';
import { RoutTrainAngularService } from './service/rout-train-angular.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RotTrainMainComponent } from './components/rot-train-main/rot-train-main.component';
import { RotTrainCreatorComponent } from './components/rot-train-creator/rot-train-creator.component';
import { RotTrainSummaryComponent } from './components/rot-train-summary/rot-train-summary.component';
import { ActionBarComponent } from './components/action-bar/action-bar.component';

@NgModule({
  imports: [
    CommonModule,
    RoutTrainAngularRoutingModule
  ],
  declarations: [
    RotTrainMainComponent,
    RotTrainCreatorComponent,
    RotTrainSummaryComponent,
    ActionBarComponent
  ],
  exports: [
    RotTrainMainComponent,
    RotTrainCreatorComponent,
    RotTrainSummaryComponent,
    ActionBarComponent
  ],
  providers: [
    // RoutTrainAngularService
  ]
})
export class RoutTrainAngularModule { }
