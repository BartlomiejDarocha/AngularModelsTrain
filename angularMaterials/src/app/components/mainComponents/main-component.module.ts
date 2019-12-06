import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NonePageComponent } from './none-page/none-page.component';
import { LoaderComponent } from './loader/loader.component';
import { MainMaterialModule } from 'src/app/material-modules';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NonePageComponent,
    LoaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MainMaterialModule,
    NgbModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    NonePageComponent,
    LoaderComponent,
    FooterComponent,
  ]
})
export class MainComponentModule { }
