import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './components/child/child.component';
import { MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChildComponent],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [ChildComponent]
})
export class ViewchildModule { }
