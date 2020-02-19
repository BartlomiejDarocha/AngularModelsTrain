import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationFormGroupComponent } from './validation-form-group/validation-form-group.component';
import { MatInputModule, MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ValidationFormGroupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatCardModule
  ],
  exports: [
    ValidationFormGroupComponent
  ]
})
export class ValidationModule { }
