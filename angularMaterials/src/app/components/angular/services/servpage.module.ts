import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatMenuModule, MatCheckboxModule, MatListModule, MatInputModule } from '@angular/material';
import { TaskComponent } from './components/task/task.component';
import { TaskslistComponent } from './components/taskslist/taskslist.component';
import { HandlerService } from './handler.service';
import { BrowserModule } from '@angular/platform-browser';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TaskComponent,
    TaskslistComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatCheckboxModule,
    MatListModule,
    DirectivesModule,
    MatInputModule
  ],
  exports: [
    TaskComponent,
    TaskslistComponent,
  ],
  providers: [HandlerService]
})
export class ServpageModule { }
