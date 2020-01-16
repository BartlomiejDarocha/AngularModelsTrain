import { Injectable } from '@angular/core';
import { TaskMedium } from 'src/app/models/tasks.models';

@Injectable({
  providedIn: 'root'
})
export class HandlerService {
  private taskListIdCounter = 0;
  private taskIdCounter = 0;
  public tasksList = [];
  constructor() { }
  public addNewTask(): void {
  }
  public addNewTaskList(): void {
  }
  public colorHandler(): void {
  }
}
