import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskMedium, MediumTaskList } from 'src/app/models/tasks.models';
import { HandlerService } from '../../handler.service';

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
  constructor(
    private handler: HandlerService
  ) {
  }

  ngOnInit() {}
  public colorHandler(color: string, task: TaskMedium = null): void {
    console.log(color);
  }
  public rateHandler(rate: number, task: TaskMedium = null): void {
    console.log(rate, 'rate');
  }
  public newTaskHandler(): void  {
    this.handler.addTaskId();
    const tempNewTask: TaskMedium = {
      id: this.handler.taskIdCounter,
      name: this.newTaskname,
      date: new Date(),
      active: false,
      done: false,
      color: 'none',
      rate: 0,
    };
    // this.taskList.tasks.push(tempNewTask);
    this.taskList.tasks.unshift(tempNewTask);
    this.newTaskname = '';
  }
  public removeTaskhandler(task: TaskMedium): void  {
    const tempTaskList = this.taskList.tasks.slice();
    let indexId = 0;
    this.taskList.tasks.forEach((el, index) => {
      if (el.id === task.id) {
        indexId = index;
      }
    });
    tempTaskList.splice(indexId, 1);
    this.taskList.tasks = tempTaskList;
  }

}
