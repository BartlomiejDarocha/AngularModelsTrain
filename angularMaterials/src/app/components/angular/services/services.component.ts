import { Component, OnInit } from '@angular/core';
import { MediumTaskList } from 'src/app/models/tasks.models';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.less']
})
export class ServicesComponent implements OnInit {

  constructor() { }
  public tasksLists: MediumTaskList[] = [
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

  ngOnInit() {
  }

}
