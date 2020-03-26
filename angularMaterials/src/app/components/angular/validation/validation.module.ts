import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationFormGroupComponent } from './validation-form-group/validation-form-group.component';
import { MatInputModule, MatCardModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationNgmodelComponent } from './validation-ngmodel/validation-ngmodel.component';

@NgModule({
  declarations: [
    ValidationFormGroupComponent,
    ValidationNgmodelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule
  ],
  exports: [
    ValidationFormGroupComponent,
    ValidationNgmodelComponent
  ]
})
export class ValidationModule { }
