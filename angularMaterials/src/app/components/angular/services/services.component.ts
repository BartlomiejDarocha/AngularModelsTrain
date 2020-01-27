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
  constructor(
    private handler: HandlerService
  ) {
    this.handler.getTaskList().subscribe(tasksLists => {
      this.tasksLists = tasksLists;
      console.log(this.tasksLists, 'this.tasksLists Z service');
    });
   }
  ngOnInit() {
  }

}
