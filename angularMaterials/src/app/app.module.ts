import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MainMaterialModule } from './material-modules';
// import {MatNativeDateModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DialogsComponent } from './components/dialogs/dialogs.component';
import { InputDialogComponent } from './components/dialogs/dialogsTemplates/input-dialog/input-dialog.component';
// tslint:disable-next-line:max-line-length
import { SimpleDialogTemplateComponent } from './components/dialogs/dialogsTemplates/simple-dialog-template/simple-dialog-template.component';
import { ConstConfirmDialogComponent } from './components/dialogs/dialogsTemplates/const-confirm-dialog/const-confirm-dialog.component';
import { DialogService } from './providers/dialog.service';
import { InterceptorDialogComponent } from './components/dialogs/dialogsTemplates/interceptor-dialog/interceptor-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogsComponent,
    SimpleDialogTemplateComponent,
    ConstConfirmDialogComponent,
    InputDialogComponent,
    InterceptorDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MainMaterialModule,
    // MatNativeDateModule, // dodaje guziki i podstawowe widoki
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  entryComponents: [SimpleDialogTemplateComponent, ConstConfirmDialogComponent, InputDialogComponent],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
