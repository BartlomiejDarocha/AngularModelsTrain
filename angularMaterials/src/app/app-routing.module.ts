import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrutsListComponent } from './components/fruts/fruts-list/fruts-list.component';
import { AppleComponent } from './components/fruts/apple/apple.component';
import { NonePageComponent } from './components/mainComponents/none-page/none-page.component';
import { HomeComponent } from './components/mainComponents/home/home.component';
import { AngularHomeComponent } from './components/angular/angular-home/angular-home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  // {path: 'angular', component: AngularHomeComponent},
  {path: 'fruts-list', component: FrutsListComponent},
  {path: 'apple/:id', component: AppleComponent},
  {path: '', redirectTo: '/home' , pathMatch: 'full'},
  // {path: '**', component: NonePageComponent}
  // pusty link przkerowuje do home
  // ** brak strony przekierwuje do brak NonePageComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
