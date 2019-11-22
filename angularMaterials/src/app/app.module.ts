import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MainMaterialModule } from './material-modules';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import {MatNativeDateModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { DialogsComponent } from './components/dialogs/dialogs.component';
import { InputDialogComponent } from './components/dialogs/dialogsTemplates/input-dialog/input-dialog.component';
import { InterceptorDialogComponent } from './components/dialogs/dialogsTemplates/interceptor-dialog/interceptor-dialog.component';
// tslint:disable-next-line:max-line-length
import { SimpleDialogTemplateComponent } from './components/dialogs/dialogsTemplates/simple-dialog-template/simple-dialog-template.component';
import { ConstConfirmDialogComponent } from './components/dialogs/dialogsTemplates/const-confirm-dialog/const-confirm-dialog.component';

import { DialogService } from './providers/dialog.service';
import { HttpConfigInterceptor } from './providers/intercereptor/httpConfig.intercereptor';
import { ApiService } from './providers/api.service';

import { LoginComponent } from './components/login/login.component';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { LoaderService } from './components/shared/loader/loader.service';


@NgModule({
  declarations: [
    AppComponent,
    DialogsComponent,
    SimpleDialogTemplateComponent,
    ConstConfirmDialogComponent,
    InputDialogComponent,
    InterceptorDialogComponent,
    LoginComponent,
    LoaderComponent
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
    NgbModule
  ],
  entryComponents: [SimpleDialogTemplateComponent, ConstConfirmDialogComponent, InputDialogComponent, InterceptorDialogComponent],
  providers: [
    DialogService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
    ApiService,
    LoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
