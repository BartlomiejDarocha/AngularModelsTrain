import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { TaskComponent } from './components/task/task.component';
import { TaskslistComponent } from './components/taskslist/taskslist.component';
import { HandlerService } from './handler.service';

@NgModule({
  declarations: [
    TaskComponent,
    TaskslistComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    TaskComponent,
    TaskslistComponent
  ],
  providers: [HandlerService]
})
export class ServpageModule { }