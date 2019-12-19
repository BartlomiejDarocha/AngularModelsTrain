import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoxcolorComponent } from './components/boxcolor/boxcolor.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [BoxcolorComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [BoxcolorComponent],
  providers: [],
})
export class InputOutputModule { }
