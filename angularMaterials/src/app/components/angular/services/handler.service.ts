import { Injectable } from '@angular/core';
import { TaskMedium, MediumTaskList } from 'src/app/models/tasks.models';

@Injectable({
  providedIn: 'root'
})
export class HandlerService {
  private taskListIdCounter = 1;
  private taskIdCounter = 5;
  constructor() { }
  public addNewTaskList(): void {
  }
  public colorHandler(): void {
  }
}
