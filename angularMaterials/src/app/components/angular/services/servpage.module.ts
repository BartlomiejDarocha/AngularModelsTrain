import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatMenuModule, MatCheckboxModule, MatListModule } from '@angular/material';
import { TaskComponent } from './components/task/task.component';
import { TaskslistComponent } from './components/taskslist/taskslist.component';
import { HandlerService } from './handler.service';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    TaskComponent,
    TaskslistComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatCheckboxModule,
    MatListModule
  ],
  exports: [
    TaskComponent,
    TaskslistComponent,
  ],
  providers: [HandlerService]
})
export class ServpageModule { }
