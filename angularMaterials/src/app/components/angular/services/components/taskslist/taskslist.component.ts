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
  public colorList = ['red', 'green', 'yellow', 'gray', 'orange', 'silver', 'none'];
  public rateList = [0, 1, 2, 3, 4 , 5];
  public sortList = [
    {name: 'Kolorami', type: 'color'},
    {name: 'Stopniem', type: 'rate'},
    {name: 'Statusem', type: 'stat'},
    {name: 'datą dodania', type: 'addDate'},
    {name: 'datą zakończenia', type: 'endDate'},
  ];
  public newTaskname = '';
  public functionsButtonsActive = false;
  constructor(
    private handler: HandlerService
  ) {}

  ngOnInit() {}
  public activeTaskHandler(): void {
    this.functionsButtonsActive = this.functionsButtonsActiveHandler();
  }
  public taskFunctionsHandler(type: number, value: number | string): void {
    this.taskList.tasks.forEach(task => {
      if (task.active) {
        if (type === 0 && typeof value === 'string') {
          task.color = value;
        } else if (type === 1 && typeof value === 'number') {
          task.rate = value;
        }
      }
    });
  }

  public functionsButtonsActiveHandler(): boolean {
    return this.taskList.tasks.some(task => task.active === true);
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

  // public sortTaskBY(type: string): void {
  //   const

  //   this.taskList.tasks.sort()
  // }

}
