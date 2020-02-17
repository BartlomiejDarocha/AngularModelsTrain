import { Component, OnInit } from '@angular/core';
import { HandlerService } from './handler.service';
import { MediumTaskList } from 'src/app/models/tasks.models';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.less']
})
export class ServicesComponent implements OnInit {
  public tasksLists: Array<MediumTaskList> = [];
  public newTaskListName = '';
  constructor(
    private handler: HandlerService
  ) {
    this.handler.getTaskList().subscribe(tasksLists => {
      this.tasksLists = tasksLists;
    });
  }
  ngOnInit() {
  }
  public addTaskList(): void {
    this.handler.taskListIdCounter++;
    const newTaskList: MediumTaskList = {
      id: this.handler.taskListIdCounter,
      listTitle: this.newTaskListName,
      createDate: new Date(),
      tasks: [],
      backgroundColor: 'none',
    };
    this.handler.addNewTaskList(newTaskList);
    this.newTaskListName = '';
  }

}
