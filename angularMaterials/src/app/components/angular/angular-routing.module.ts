import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularHomeComponent } from './angular-home/angular-home.component';
import { InoutPutComponent } from './inout-put/inout-put.component';
import { RoutingComponent } from './routing/routing.component';
import { ModulesComponent } from './modules/modules.component';
import { ServicesComponent } from './services/services.component';
import { ValidationComponent } from './validation/validation.component';
import { EntrycomponentComponent } from './entrycomponent/entrycomponent.component';
import { IntercereptorsComponent } from './intercereptors/intercereptors.component';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component';
const routes: Routes = [
  {
    path: 'angular', component: AngularHomeComponent,
    children: [
      {path: 'inOutPut', component: InoutPutComponent},
      {path: 'routing', component: RoutingComponent},
      {path: 'modules', component: ModulesComponent},
      {path: 'services', component: ServicesComponent},
      {path: 'validation', component: ValidationComponent},
      {path: 'entryComponent', component: EntrycomponentComponent},
      {path: 'intercereptors', component: IntercereptorsComponent},
      {path: 'pipes', component: PipesComponent},
      {path: 'directives', component: DirectivesComponent}
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
