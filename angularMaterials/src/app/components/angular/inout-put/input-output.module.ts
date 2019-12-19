import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoxcolorComponent } from './components/boxcolor/boxcolor.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [BoxcolorComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  exports: [BoxcolorComponent],
  providers: [],
})
export class InputOutputModule { }
