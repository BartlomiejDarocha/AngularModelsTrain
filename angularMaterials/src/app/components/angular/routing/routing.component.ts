import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.less']
})
export class RoutingComponent implements OnInit {

  public onelvlRoutingData = [
    {id: 1, name: 'box1', color: 'red'},
    {id: 2, name: 'box2', color: 'orange'},
    {id: 3, name: 'box3', color: 'blue'},
    {id: 4, name: 'box4', color: 'gray'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
