import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrutsListComponent } from './components/fruts/fruts-list/fruts-list.component';
import { AppleComponent } from './components/fruts/apple/apple.component';
import { NonePageComponent } from './components/shared/none-page/none-page.component';

const routes: Routes = [
  {path: 'fruts-list', component: FrutsListComponent},
  {path: 'apple/:id', component: AppleComponent},
  {path: '', redirectTo: '/fruts-list' , pathMatch: 'full'},
  // pusty lin przkerowuje do /fruts-list
  {path: '**', component: NonePageComponent}
  // ** brak strony
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
