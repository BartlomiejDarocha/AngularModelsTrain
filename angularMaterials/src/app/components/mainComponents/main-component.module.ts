import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NonePageComponent } from './none-page/none-page.component';
import { LoaderComponent } from './loader/loader.component';
import { MainMaterialModule } from 'src/app/material-modules';
import { InputDialogComponent } from './dialogsTemplates/input-dialog/input-dialog.component';
import { InterceptorDialogComponent } from './dialogsTemplates/interceptor-dialog/interceptor-dialog.component';
import { SimpleDialogTemplateComponent } from './dialogsTemplates/simple-dialog-template/simple-dialog-template.component';
import { ConstConfirmDialogComponent } from './dialogsTemplates/const-confirm-dialog/const-confirm-dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NonePageComponent,
    LoaderComponent,
    InputDialogComponent,
    InterceptorDialogComponent,
    SimpleDialogTemplateComponent,
    ConstConfirmDialogComponent,
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
    InputDialogComponent,
    InterceptorDialogComponent,
    SimpleDialogTemplateComponent,
    ConstConfirmDialogComponent
  ]
})
export class MainComponentModule { }
