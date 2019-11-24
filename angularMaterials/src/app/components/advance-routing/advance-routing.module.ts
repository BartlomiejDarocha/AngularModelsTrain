import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvanceOneComponent } from './advance-one/advance-one.component';
import { AdvanceTwoComponent } from './advance-two/advance-two.component';
import { AdvanceTwoRoutingModule } from './advance-two/advance-two-routing.module';


const routes: Routes = [
    { path: 'advance-one/:id', component: AdvanceOneComponent },
    { path: 'advance-two', component: AdvanceTwoComponent },
];

@NgModule({
    imports: [
        AdvanceTwoRoutingModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AdvanceAppRoutingModule { }
