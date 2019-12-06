import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleDialogTemplateComponent } from './dialogsTemplates/simple-dialog-template/simple-dialog-template.component';
import { InterceptorDialogComponent } from './dialogsTemplates/interceptor-dialog/interceptor-dialog.component';
import { InputDialogComponent } from './dialogsTemplates/input-dialog/input-dialog.component';
import { ConstConfirmDialogComponent } from './dialogsTemplates/const-confirm-dialog/const-confirm-dialog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SimpleDialogTemplateComponent,
    InterceptorDialogComponent,
    InputDialogComponent,
    ConstConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SimpleDialogTemplateComponent,
    InterceptorDialogComponent,
    InputDialogComponent,
    ConstConfirmDialogComponent
  ]
})
export class DialogsModule { }
