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
// tslint:disable-next-line:max-line-length
import { SimpleDialogTemplateComponent } from './components/dialogs/dialogsTemplates/simple-dialog-template/simple-dialog-template.component';
import { DialogService } from './providers/dialog.service';

@NgModule({
  declarations: [
    AppComponent,
    DialogsComponent,
    SimpleDialogTemplateComponent
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
  entryComponents: [SimpleDialogTemplateComponent],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
