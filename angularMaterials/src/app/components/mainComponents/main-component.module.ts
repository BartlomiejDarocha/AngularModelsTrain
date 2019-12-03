import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NonePageComponent } from './none-page/none-page.component';
import { LoaderComponent } from './loader/loader.component';
import { MainMaterialModule } from 'src/app/material-modules';

@NgModule({
  declarations: [
    HeaderComponent,
    NonePageComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    MainMaterialModule
  ],
  exports: [
    HeaderComponent,
    NonePageComponent,
    LoaderComponent
  ]
})
export class MainComponentModule { }
