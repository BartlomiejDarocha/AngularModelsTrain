import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvanceOneComponent } from './advance-one/advance-one.component';
import { AdvanceTwoComponent } from './advance-two/advance-two.component';
import { AdvanceTwoRoutingModule } from './advance-two/advance-two-routing.module';
import { InsidetestRouteComponent } from './insidetest-route/insidetest-route.component';


const routes: Routes = [
    { path: 'advance-one', component: AdvanceOneComponent },
    {
        path: 'advance-two', component: AdvanceTwoComponent,
        children: [
            {
                path: 'insidetest-route', component: InsidetestRouteComponent
                // teraz należy dodać do html <router-outlet></router-outlet> w Komponecie Parenta czyli
                // AdvanceTwoComponent i w tym miejsu bedzie się wyświetlać komponent InsidetestRouteComponent
            }
        ]
    },
];

@NgModule({
    imports: [
        AdvanceTwoRoutingModule,
        RouterModule.forChild(routes)
        // pamiętacz że child bo a następnie zaimportować to gównego modułu (appmodule) tak aby root był na końcu
    ],
    exports: [RouterModule]
})
export class AdvanceAppRoutingModule { }
