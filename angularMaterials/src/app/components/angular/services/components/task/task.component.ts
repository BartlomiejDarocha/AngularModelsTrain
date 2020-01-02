import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskMedium } from 'src/app/models/tasks.models';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.less']
})
export class TaskComponent implements OnInit {
  @Input() public task: TaskMedium;
  @Output() public outTask = new EventEmitter<TaskMedium>();
  public editName = false;
  public newName = '';
  constructor() {
  }
  ngOnInit() {
  }
  public activeHandler(): void {
    this.task.active = !this.task.active;
  }
  public borderActiveDisable(): void {
    this.task.active = !this.task.active;
  }
  public editTaskHandler(): void {
    this.borderActiveDisable();
    this.newName = this.task.name;
  }

}
