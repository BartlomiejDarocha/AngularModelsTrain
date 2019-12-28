import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskMedium } from 'src/app/models/tasks.models';

@Component({
  selector: 'app-taskslist',
  templateUrl: './taskslist.component.html',
  styleUrls: ['./taskslist.component.less']
})
export class TaskslistComponent implements OnInit {
  @Input() public taskList: Array<TaskMedium>;
  @Input() public listOpctions: any;
  @Output() private taskListMod = new EventEmitter<Array<TaskMedium>>();
  public colorList = ['red', 'green', 'yellow', 'gray', 'orange', 'silver'];
  public rateList = [0, 1, 2, 3, 4 , 5];
  constructor() { }

  ngOnInit() {
  }

}
