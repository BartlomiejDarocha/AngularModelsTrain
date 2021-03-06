import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { TaskMedium } from 'src/app/models/tasks.models';
import { HandlerService } from '../../handler.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.less']
})
export class TaskComponent implements OnInit {
  @Input() public task: TaskMedium;
  @Output() public outTask = new EventEmitter<TaskMedium>();
  @Output() public activeTaskOut = new EventEmitter();
  public editName = false;
  public newName = '';
  constructor(
    private handler: HandlerService
  ) {
  }
  ngOnInit() {
  }
  public activeHandler(): void {
    this.task.active = !this.task.active;
    this.activeTaskOut.next();
  }
  public editTaskHandler(): void {
    if (!this.editName) {
      this.newName = this.task.name;
      this.editName = true;
    } else {
      this.task.name = this.newName;
      this.editName = false;
    }
  }
  public checkedHandler(event: any): void {
    const endDate = new Date();
    this.task.done = event.checked;
    if (event.checked && this.editName) {
      this.editName = false;
    }
    if ( event.checked) {
      this.task.doneDate = endDate;
    } else {
      this.task.doneDate =  null;
    }
  }
  public removeTask() {
    this.outTask.next(this.task);
  }

}
