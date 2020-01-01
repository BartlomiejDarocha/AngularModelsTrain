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
  constructor() {

  }
  ngOnInit() {
    console.log(this.task, ' task');
  }
  public activeHandler() {
    this.task.active = !this.task.active;
    console.log(this.task.active, 'task Active');
  }
  public checkboxHandler() {
    this.task.active = !this.task.active;
  }

}
