import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrutsListComponent } from './components/fruts/fruts-list/fruts-list.component';
import { AppleComponent } from './components/fruts/apple/apple.component';

const routes: Routes = [
  {path: 'fruts-list', component: FrutsListComponent},
  {path: 'apple', component: AppleComponent},
  {path: '', redirectTo: '/fruts-list' , pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
