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
import { PromiseComponent } from './promise/promise.component';
import { VievchildComponent } from './vievchild/vievchild.component';
import { routingChildren } from './routing/lvlTwoChildren.routing';
import { RxjsComponent } from './rxjs/rxjs.component';
const routes: Routes = [
  {
    path: 'angular', component: AngularHomeComponent,
    children: [
      {path: 'inOutPut', component: InoutPutComponent },
      {
        path: 'routing', component: RoutingComponent,
        children: routingChildren  // dodanie do html <router-outlet></router-outlet> ponieważ komponen ma dzieci (children:)
        // użycie imporotwanie z innego pliku /\

        // użycie standartowe ale utrudnia czytanie kodu \/

        // children: [
        //   {path: 'onelvl/:id', component: OneLvlRotuingComponent},
        //   {
        //     path: 'twolvl/:id', component: TwolvlRoutingComponent,
        //     children: [
        //       {path: 'twolvlGrand/:id', component: GrandChildComponent}
        //     ]
        //   }
        // ]
      },
      {
        // dzięki temu rozwiązaniu wszytskie moduły sa załadowne gdy zostanie wywłoany dany routing
        // zwiększa to wydajność aplikaci i jest polecne w dużych projektach
        path: 'lazyRouting',
        loadChildren: './lazy-routing/lazy-routing-component/lazy-routing.module#LazyRoutingModule'
        // te rozwiązanie dale anglara 8 plus dodanie do tsconfigu  "module": "esnext", // add this line
        // loadChildren: () => import('./lazy-routing/lazy-routing-component/lazy-routing.module').then(m => m.LazyRoutingModule)
      },
      {
        path: 'lazyRoutingComp2',
        loadChildren: './lazy-routing/lazy-routing-component-two/lazy-routing-comp-two.module#LazyRoutingCompTwoModule'
      },
      {path: 'rxjs', component: RxjsComponent},
      {path: 'modules', component: ModulesComponent},
      {path: 'services', component: ServicesComponent},
      {path: 'validation', component: ValidationComponent},
      {path: 'entryComponent', component: EntrycomponentComponent},
      {path: 'intercereptors', component: IntercereptorsComponent},
      {path: 'pipes', component: PipesComponent},
      {path: 'directives', component: DirectivesComponent},
      {path: 'promise', component: PromiseComponent },
      {path: 'viewChild', component: VievchildComponent }
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
