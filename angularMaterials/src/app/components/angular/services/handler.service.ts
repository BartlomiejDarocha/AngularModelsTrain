import { Injectable } from '@angular/core';
import { TaskMedium, MediumTaskList } from 'src/app/models/tasks.models';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandlerService {
  public taskListIdCounter = 1;
  public taskIdCounter = 5;
  private taskListObs = new BehaviorSubject<Array<MediumTaskList>>([]);
  private tasksLists: MediumTaskList[] = [
    {
      id: 0,
      listTitle: 'lista 0',
      createDate: new Date(),
      backgroundColor: 'none',
      tasks: [
        {
          id: 0,
          name: 'lista 0 zadnaie 1',
          active: false,
          done: false,
          color: 'none',
          date:  new Date(),
          rate: 0,
        },
        {
          id: 1,
          name: 'lista 0 zadnaie 2',
          active: false,
          done: false,
          color: 'none',
          date:  new Date(),
          rate: 0,
        },
        {
          id: 2,
          name: 'lista 0 zadnaie 3',
          active: false,
          done: false,
          color: 'none',
          date:  new Date(),
          rate: 0,
        }
      ]
    },
    {
      id: 1,
      listTitle: 'lista 1',
      createDate: new Date(),
      backgroundColor: 'none',
      tasks: [
        {
          id: 3,
          name: 'lista 1 zadnaie 1',
          active: false,
          done: false,
          color: 'none',
          date:  new Date(),
          rate: 0,
        },
        {
          id: 4,
          name: 'lista 1 zadnaie 2',
          active: false,
          done: false,
          color: 'none',
          date:  new Date(),
          rate: 0,
        },
        {
          id: 5,
          name: 'lista 1 zadnaie 3',
          active: false,
          done: false,
          color: 'none',
          date:  new Date(),
          rate: 0,
        }
      ]
    }
  ];
  
  constructor() {
    this.taskListObs.next(this.tasksLists);
   }

  public addTaskId(): void {
    this.taskIdCounter++;
  }

  public addNewTaskList(taskList: MediumTaskList): void {
    this.tasksLists.push(taskList);
    this.taskListObs.next(this.tasksLists);
  }

  public getTaskList(): Observable<Array<MediumTaskList>> {
    return this.taskListObs.asObservable();
  }
}
