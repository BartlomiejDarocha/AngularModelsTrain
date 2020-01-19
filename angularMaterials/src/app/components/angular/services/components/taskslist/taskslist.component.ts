import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskMedium, MediumTaskList } from 'src/app/models/tasks.models';

@Component({
  selector: 'app-taskslist',
  templateUrl: './taskslist.component.html',
  styleUrls: ['./taskslist.component.less']
})
export class TaskslistComponent implements OnInit {
  @Input() public taskList: MediumTaskList;
  public colorList = ['red', 'green', 'yellow', 'gray', 'orange', 'silver'];
  public rateList = [0, 1, 2, 3, 4 , 5];
  public sortList = [
    {name: 'Kolorami', func: null},
    {name: 'Stopniem', func: null},
    {name: 'Statusem', func: null},
    {name: 'datą dodania', func: null},
    {name: 'datą zakończenia', func: null},
  ];
  public newTaskname = '';
  constructor() {
    console.log(this.taskList, 'taskList');
  }

  ngOnInit() {
  }
  public colorHandler(color: string, task: TaskMedium = null) {
    console.log(color);
  }
  public rateHandler(rate: number, task: TaskMedium = null) {
    console.log(rate, 'rate');
  }
  public newTaskHandler(): void  {
    console.log(this.newTaskname, 'nowe zadanie');
  }

}
