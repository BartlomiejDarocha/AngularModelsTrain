import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularHomeComponent } from './angular-home/angular-home.component';
import { InoutPutComponent } from './inout-put/inout-put.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { RoutingComponent } from './routing/routing.component';
import { ModulesComponent } from './modules/modules.component';
import { ServicesComponent } from './services/services.component';
import { ValidationComponent } from './validation/validation.component';
import { EntrycomponentComponent } from './entrycomponent/entrycomponent.component';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component';
import { IntercereptorsComponent } from './intercereptors/intercereptors.component';
import { PromiseComponent } from './promise/promise.component';
import { MatButtonModule } from '@angular/material';
import { InputOutputModule } from './inout-put/input-output.module';
@NgModule({
  declarations: [
    AngularHomeComponent,
    InoutPutComponent,
    RoutingComponent,
    ModulesComponent,
    ServicesComponent,
    ValidationComponent,
    EntrycomponentComponent,
    PipesComponent,
    DirectivesComponent,
    IntercereptorsComponent,
    PromiseComponent,
    ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatButtonModule,
    InputOutputModule
  ],
  exports: [
    AngularHomeComponent,
    InoutPutComponent,
    RoutingComponent,
    ModulesComponent,
    ServicesComponent,
    ValidationComponent,
    EntrycomponentComponent,
    PipesComponent,
    DirectivesComponent,
    IntercereptorsComponent,
    PromiseComponent
  ]
})
export class AngularModule { }
