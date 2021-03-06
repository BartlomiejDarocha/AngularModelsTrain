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
import { ServpageModule } from './services/servpage.module';
import { VievchildComponent } from './vievchild/vievchild.component';
import { ViewchildModule } from './vievchild/viewchild.module';
import { FormsModule } from '@angular/forms';
import { ValidationModule } from './validation/validation.module';
import { RoutingModule } from './routing/routing.module';
import { RxjsComponent } from './rxjs/rxjs.component';
import { RxjsModule } from './rxjs/rxjs.module';
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
    VievchildComponent,
    RxjsComponent,
    ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    MatButtonModule,
    InputOutputModule,
    ServpageModule,
    ViewchildModule,
    ValidationModule,
    RoutingModule,
    RxjsModule
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
    PromiseComponent,
    VievchildComponent,
    RxjsComponent
  ]
})
export class AngularModule { }
