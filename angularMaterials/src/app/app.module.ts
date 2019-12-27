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

import { DialogService } from './providers/dialog.service';
import { HttpConfigInterceptor } from './providers/intercereptor/httpConfig.intercereptor';
import { ApiService } from './providers/api.service';

import { LoginComponent } from './components/login/login.component';
import { FrutsListComponent } from './components/fruts/fruts-list/fruts-list.component';
import { AppleComponent } from './components/fruts/apple/apple.component';
import { AdvanceRoutingComponent } from './components/advance-routing/advance-routing.component';
import { AdvanceOneComponent } from './components/advance-routing/advance-one/advance-one.component';
import { AdvanceTwoComponent } from './components/advance-routing/advance-two/advance-two.component';
import { AdvanceAppRoutingModule } from './components/advance-routing/advance-routing.module';
import { AdvanceTwoGomoreComponent } from './components/advance-routing/advance-two/advance-two-gomore/advance-two-gomore.component';
import { DirectivesModule } from './directives/directives.module';
import { InsidetestRouteComponent } from './components/advance-routing/insidetest-route/insidetest-route.component';
import { LoaderService } from './components/mainComponents/loader/loader.service';
import { MainComponentModule } from './components/mainComponents/main-component.module';
// tslint:disable-next-line:max-line-length
import { SimpleDialogTemplateComponent } from './components/dialogs/dialogsTemplates/simple-dialog-template/simple-dialog-template.component';
import { ConstConfirmDialogComponent } from './components/dialogs/dialogsTemplates/const-confirm-dialog/const-confirm-dialog.component';
import { InputDialogComponent } from './components/dialogs/dialogsTemplates/input-dialog/input-dialog.component';
import { InterceptorDialogComponent } from './components/dialogs/dialogsTemplates/interceptor-dialog/interceptor-dialog.component';
import { DialogsModule } from './components/dialogs/dialogs.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AngularModule } from './components/angular/angular.module';
// entry components
// tslint:disable-next-line:max-line-length



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FrutsListComponent,
    AppleComponent,
    AdvanceRoutingComponent,
    AdvanceOneComponent,
    AdvanceTwoComponent,
    AdvanceTwoGomoreComponent,
    InsidetestRouteComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MainMaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    DirectivesModule,
    DialogsModule,
    MainComponentModule,
    AngularSvgIconModule,
    AngularModule,
    // routinig
    // pamiętać żeby routingModule z root był na samym dole tak by poprawnie działa mechanizm pustej strony
    // AdvanceAppRoutingModule, // potem przenieść do modulu componentu który importuje specyficzne componenty
    // AngularRoutingModule,
    AppRoutingModule,
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
